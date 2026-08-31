---
title: "O que é um ataque Man-in-the-Middle (MitM) e como nos protegemos?"
date: "2026-08-31"
excerpt: "Uma análise prática de como agentes maliciosos interceptam tráfego em redes locais através de ARP Poisoning e DNS Spoofing, e quais as medidas defensivas indispensáveis."
tags: ["Cibersegurança", "Redes", "MitM", "Criptografia"]
readTime: "4"
author: "Gonçalo Lima"
---

## O que é um Ataque Man-in-the-Middle?

No ecossistema da segurança da informação, um ataque **Man-in-the-Middle (MitM)** ocorre quando um atacante se posiciona silenciosamente entre duas entidades que comunicam (por exemplo, um utilizador e o seu router ou servidor web), tendo a capacidade de **interceptar**, **ler** e potencialmente **adulterar** os dados em trânsito sem que nenhuma das partes perceba de imediato.

```
[ Vítima ]  <---- tráfego intercetado ---->  [ Atacante ]  <---- tráfego reencaminhado ---->  [ Router / Servidor ]
```

---

## Principais Vetores de Ataque em Redes Locais

### 1. ARP Poisoning (ou ARP Spoofing)
Em redes locais Ethernet e Wi-Fi baseadas em IPv4, os dispositivos utilizam o protocolo **ARP (Address Resolution Protocol)** para mapear endereços IP para endereços físicos MAC.

Como o protocolo ARP não possui autenticação nativa:
- O atacante envia respostas ARP falsas para o switch ou computador da vítima dizendo: *"O IP do Gateway tem o meu endereço MAC"*.
- Simultaneamente, diz ao Gateway: *"O IP da vítima tem o meu endereço MAC"*.
- Todo o tráfego da rede passa agora obrigatoriamente pela máquina do atacante.

### 2. DNS Spoofing (Envenenamento de Cache DNS)
O atacante forja respostas DNS para redirecionar um domínio legítimo (ex: `banco.pt`) para o IP de um servidor clonado controlado pelo atacante.

### 3. SSL/TLS Stripping
Ferramentas como o *sslstrip* forçam a comunicação da vítima a regredir de `HTTPS` cifrado para `HTTP` em texto limpo (plaintext), permitindo a captura de credenciais e tokens de sessão.

---

## Como Prevenir e Mitigar Ataques MitM?

Para mitigar e prevenir estas ameaças, tanto a nível individual como em redes empresariais:

| Medida Defensiva | O que resolve | Como funciona |
| :--- | :--- | :--- |
| **HTTPS Obrigatório + HSTS** | Previne SSL Stripping | O cabeçalho `Strict-Transport-Security` força o browser a recusar qualquer tráfego HTTP não cifrado. |
| **Dynamic ARP Inspection (DAI)** | Bloqueia ARP Poisoning | Switches geridos validam pacotes ARP contra a tabela DHCP Snooping. |
| **VPNs com Criptografia Forte** | Protege tráfego em Wi-Fi público | Cria um túnel IPSec/WireGuard cifrado de ponta a ponta. |
| **DNS sobre HTTPS (DoH / DoT)** | Previne DNS Spoofing | Cifra as consultas DNS, evitando adulteração de resoluções de nomes. |

---

## Conclusão

A segurança em redes não depende de uma única barreira, mas sim de uma estratégia de **Defesa em Profundidade**. Compreender os fundamentos de protocolos de rede como ARP, IP e DNS é o primeiro passo para projetar infraestruturas resilientes e protegidas contra interceções ilícitas.
