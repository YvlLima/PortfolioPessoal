import { createHmac, timingSafeEqual, randomBytes } from 'node:crypto';

export const OWNER_ID = 171242459;
export const SESSION_AGE = 8 * 60 * 60;
export function adminOrigin() {
  const origin = new URL(process.env.ADMIN_ORIGIN || 'https://www.goncalolima.pt');
  if (origin.protocol !== 'https:' && !(process.env.NODE_ENV === 'development' && origin.hostname === 'localhost')) throw new Error('Invalid admin origin');
  return origin.origin;
}
export function authConfigured() {
  return Boolean(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET && process.env.ADMIN_SESSION_SECRET?.length >= 32);
}
export const storageConfigured = () => Boolean(process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN);
export const randomToken = () => randomBytes(32).toString('base64url');
export function constantEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const first = Buffer.from(a), second = Buffer.from(b);
  return first.length === second.length && timingSafeEqual(first, second);
}
function signature(value) {
  if (!process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_SESSION_SECRET.length < 32) throw new Error('Session secret missing');
  return createHmac('sha256', process.env.ADMIN_SESSION_SECRET).update(value).digest('base64url');
}
export function signToken(payload) {
  const value = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return `${value}.${signature(value)}`;
}
export function verifyToken(token, kind, now = Date.now()) {
  try {
    if (typeof token !== 'string' || token.length > 4096) return null;
    const parts = token.split('.');
    if (parts.length !== 2 || !constantEqual(parts[1], signature(parts[0]))) return null;
    const payload = JSON.parse(Buffer.from(parts[0], 'base64url').toString());
    if (payload.kind !== kind || !Number.isFinite(payload.exp) || payload.exp <= now || payload.exp > now + (kind === 'session' ? SESSION_AGE : 600) * 1000) return null;
    if (kind === 'session' && (payload.userId !== OWNER_ID || typeof payload.csrf !== 'string' || payload.csrf.length < 32)) return null;
    return payload;
  } catch { return null; }
}
export function cookieName(kind) { return `${process.env.NODE_ENV === 'development' ? '' : '__Host-'}portfolio-${kind}`; }
export function cookie(kind, value, maxAge) {
  return `${cookieName(kind)}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${process.env.NODE_ENV === 'development' ? '' : '; Secure'}`;
}
export function readCookie(request, kind) {
  const name = cookieName(kind);
  return (request.headers.cookie || '').split(';').map(item => item.trim()).find(item => item.startsWith(`${name}=`))?.slice(name.length + 1);
}
export function sessionFrom(request) { return verifyToken(readCookie(request, 'session'), 'session'); }
export function validMutation(request, session) {
  return request.headers.origin === adminOrigin() && constantEqual(request.headers['x-csrf-token'], session?.csrf);
}
