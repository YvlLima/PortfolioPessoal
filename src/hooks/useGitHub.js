import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchGitHubSnapshot } from '../utils/github';

export default function useGitHub() {
  const [state, setState] = useState({ snapshot: null, loading: true, error: null });
  const request = useRef(null);
  const refresh = useCallback(async () => {
    if (request.current) return;
    const controller = new AbortController();
    request.current = controller;
    let timedOut = false;
    const timer = setTimeout(() => { timedOut = true; controller.abort(); }, 12000);
    setState(previous => ({ ...previous, loading: true, error: null }));
    try {
      const snapshot = await fetchGitHubSnapshot({ signal: controller.signal });
      if (request.current === controller && !controller.signal.aborted) setState({ snapshot, loading: false, error: null });
    } catch (error) {
      if (request.current === controller) {
        controller.abort();
        setState(previous => ({ ...previous, loading: false, error: { kind: timedOut ? 'timeout' : error.kind || 'unavailable', retryAt: error.retryAt || null } }));
      }
    } finally {
      clearTimeout(timer);
      if (request.current === controller) request.current = null;
    }
  }, []);
  useEffect(() => {
    refresh();
    return () => { request.current?.abort(); request.current = null; };
  }, [refresh]);
  return { ...state, refresh };
}
