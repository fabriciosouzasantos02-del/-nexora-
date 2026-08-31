# Integração segura de contato com Resend

- [x] Adicionar backend server-side ao projeto sem expor `RESEND_API_KEY` no frontend.
- [x] Implementar endpoint POST para validar e normalizar os dados do formulário.
- [x] Enviar notificação para `Galeria.faz11@gmail.com` usando o Resend e uma identidade de remetente compatível com o domínio configurado.
- [x] Manter o endereço de destino fora de toda a interface pública.
- [x] Centralizar os CTAs de orçamento, mensagem e contato no mesmo formulário.
- [x] Criar botão de WhatsApp com número `+55 11951493429` e mensagem preenchida pelo formulário.
- [x] Preservar os modais e fluxos visuais existentes.
- [x] Validar erros, sucesso, acessibilidade, tipagem e build.
- [x] Salvar checkpoint final e entregar a versão integrada.

## Critérios de aceite

- [x] A chave do Resend é lida apenas no backend por variável de ambiente.
- [x] O formulário coleta nome, e-mail, telefone, tipo de contato, ideia e mensagem.
- [x] O envio bem-sucedido exibe confirmação sem revelar o e-mail de destino.
- [x] Falhas de envio exibem uma mensagem útil sem vazar detalhes internos.
- [x] O WhatsApp abre com os dados digitados pelo usuário na mensagem.

## Lacunas descobertas na revisão

- [x] Adicionar um campo explícito de tipo de contato e incluí-lo no e-mail do Resend e na mensagem do WhatsApp.
- [x] Auditar todos os botões de contato e envio de mensagem pelos labels reais, garantindo o mesmo modal e backend.
- [x] Validar o fluxo do modal no preview, incluindo sucesso, erro, foco, teclado e fechamento.

## Correção Resend Free e restauração GitHub

- [x] Auditar `server/contact.ts`, `server/routers.ts`, `QuoteModal.tsx` e remotos/branch do Git.
- [x] Fixar o envio com `from: onboarding@resend.dev`, `to: galeria.faz11@gmail.com` e `reply_to` igual ao e-mail do visitante.
- [x] Confirmar que todos os campos preenchidos ou selecionados aparecem no HTML e no texto do e-mail.
- [x] Validar testes, tipagem, build e integridade das 18 imagens/ativos atuais.
- [x] Adicionar todos os arquivos, criar o commit solicitado e sincronizar a branch atual com push forçado autorizado.
- [x] Entregar o identificador do checkpoint e o status da sincronização.
