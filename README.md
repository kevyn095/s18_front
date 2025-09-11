O pipeline de CI/CD
 foi configurado utilizando o GitHub Actions, uma ferramenta nativa do GitHub que permite automatizar processos de integração e entrega contínua.
Sempre que um novo commit é enviado para a branch principal (main), o pipeline executa as seguintes etapas:
Checkout do código.
Instalação das dependências do projeto.
Execução dos testes automatizados.
Build da aplicação.
Deploy automático no GitHub Pages.
Testes Automatizados
Foi criado um teste automatizado simples (exemplo: verificar se um componente principal é renderizado corretamente).
Esses testes são cruciais porque:
Garantem que funcionalidades básicas não quebrem após mudanças no código.
Automatizam a validação da aplicação, evitando erros manuais.
Aumentam a confiabilidade do software.
Assim, sempre que um novo commit é feito, o GitHub Actions roda os testes para verificar se o sistema continua funcionando como esperado.
Análise de Performance
A aplicação foi analisada com o Lighthouse, ferramenta do Google para medir qualidade de páginas web.
As métricas avaliadas incluem:
Performance (tempo de carregamento e renderização).
Acessibilidade (se a aplicação pode ser usada por todos os usuários).
Boas práticas (uso correto de padrões web).
SEO (otimização para mecanismos de busca).
Reflexão
O processo de configurar CI/CD, testes automatizados e análise de performance exigiu persistência e atenção aos detalhes.
Cada etapa depende de configurações corretas (como scripts de build, tokens de acesso e dependências). Pequenos erros podem travar o pipeline inteiro, o que reforça a importância de:
Ler a documentação com cuidado.
Testar cada parte do processo incrementalmente.
Valorizar boas práticas de organização e versionamento.

