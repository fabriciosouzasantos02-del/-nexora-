# Integração segura de contato com Resend

- [ ] Adicionar backend server-side ao projeto sem expor `RESEND_API_KEY` no frontend.
- [ ] Implementar endpoint POST para validar e normalizar os dados do formulário.
- [ ] Enviar notificação para `Galeria.faz11@gmail.com` usando o Resend e uma identidade de remetente compatível com o domínio configurado.
- [ ] Manter o endereço de destino fora de toda a interface pública.
- [ ] Centralizar os CTAs de orçamento, mensagem e contato no mesmo formulário.
- [ ] Criar botão de WhatsApp com número `+55 11951493429` e mensagem preenchida pelo formulário.
- [ ] Preservar os modais e fluxos visuais existentes.
- [ ] Validar erros, sucesso, acessibilidade, tipagem e build.
- [ ] Salvar checkpoint final e entregar a versão integrada.

## Critérios de aceite

- [ ] A chave do Resend é lida apenas no backend por variável de ambiente.
- [ ] O formulário coleta nome, e-mail, telefone, tipo de contato, ideia e mensagem.
- [ ] O envio bem-sucedido exibe confirmação sem revelar o e-mail de destino.
- [ ] Falhas de envio exibem uma mensagem útil sem vazar detalhes internos.
- [ ] O WhatsApp abre com os dados digitados pelo usuário na mensagem.
