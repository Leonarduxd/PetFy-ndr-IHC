# README - PetFy (NDR)

Bem-vindo ao repositório do **PetFy (NDR)**, uma aplicação web desenvolvida para gerenciar animais domésticos em espera de adoção ou em necessidade de cuidados e doações. Este projeto visa facilitar a conexão entre adotantes, doadores e abrigos, centralizando informações e promovendo transparência na gestão de recursos. Abaixo, você encontrará detalhes sobre o propósito do projeto, suas funcionalidades principais, tecnologias utilizadas e instruções para configuração e contribuição.

## Sobre o Projeto

O PetFy (NDR) foi concebido para atender à necessidade de um sistema eficiente que apoie abrigos na gestão de animais domésticos, conectando-os com pessoas interessadas em adoção ou em contribuir com doações. A plataforma permite que usuários busquem animais disponíveis com filtros específicos, realizem doações financeiras ou materiais e que administradores gerenciem cadastros e relatórios de forma prática e segura[1].

## Funcionalidades Principais

- **Cadastro de Animais**: Abrigos verificados podem registrar informações detalhadas sobre os animais, como nome, idade, espécie, cor, raça e histórico veterinário[1].
- **Busca Personalizada**: Adotantes podem filtrar animais por espécie, idade e localização geográfica, facilitando a escolha do pet ideal[1].
- **Gestão de Doações**: Registro de contribuições financeiras ou materiais, vinculadas a campanhas específicas ou necessidades gerais dos abrigos[1].
- **Notificações Automáticas**: Envio de confirmações por e-mail sobre doações recebidas e novos animais disponíveis para adoção (com futura implementação de SMS)[1].
- **Relatórios Administrativos**: Geração de relatórios sobre adoções realizadas e recursos recebidos, acessíveis aos administradores[1].
- **Integração com Mapas**: Uso da API do Google Maps para localizar abrigos próximos aos usuários[1].

## Tecnologias Utilizadas

O projeto foi desenvolvido com tecnologias modernas para garantir funcionalidade, usabilidade e escalabilidade:

- **Frontend**: HTML5 e CSS3 para estrutura e estilo, com AngularJS para interfaces dinâmicas e responsivas[1].
- **Backend**: JavaScript com Node.js para lógica de negócios e PHP para comunicação com o banco de dados[1].
- **Banco de Dados**: MySQL para armazenamento de dados sobre usuários, animais e transações[1].
- **Integrações Externas**: API do Google Maps para exibição de localizações de abrigos dentro de um raio configurável[1].
- **Ferramentas**: Visual Studio Code como editor principal, com extensões como Live Server para desenvolvimento ágil[1].

## Como Configurar o Projeto Localmente

Siga os passos abaixo para clonar e configurar o projeto em sua máquina local:

1. **Clone o Repositório**:
   ```
   git clone https://github.com/Leonarduxd/PetFy-ndr-IHC.git
   ```
   Certifique-se de ter configurado a autenticação via token de acesso pessoal ou SSH, conforme orientado em instruções anteriores.

2. **Instale as Dependências**:
   - Configure um ambiente com suporte a PHP, MySQL e um servidor web (como Apache ou Nginx), utilizando ferramentas como XAMPP ou WAMP[1].
   - Instale dependências do frontend, se necessário, com npm para bibliotecas JavaScript/AngularJS:
     ```
     npm install
     ```

3. **Configure o Banco de Dados**:
   - Crie um banco de dados MySQL e importe o esquema inicial (se disponível no repositório ou conforme documentação)[1].
   - Atualize as credenciais de conexão no arquivo de configuração PHP (geralmente `config.php` ou similar)[1].

4. **Inicie o Servidor**:
   - Inicie o servidor web e aponte para o diretório do projeto[1].
   - Acesse a aplicação via navegador em `http://localhost/PetFy-ndr-IHC` (ou conforme configuração do seu ambiente)[1].

5. **Teste a Aplicação**:
   - Registre-se como adotante, doador ou administrador.
   - Teste funcionalidades como cadastro de animais, busca personalizada e registro de doações[1].

## Como Contribuir

Estamos abertos a contribuições para aprimorar o PetFy (NDR). Siga estas diretrizes para participar:

- **Reporte Bugs**: Abra uma issue descrevendo o problema encontrado, incluindo passos para reproduzi-lo.
- **Sugira Melhorias**: Proponha novas funcionalidades ou melhorias na interface e experiência do usuário via issues.
- **Envie Pull Requests**: Faça um fork do repositório, implemente suas alterações em uma branch específica e envie um pull request para revisão.
- **Siga as Boas Práticas**: Mantenha o código limpo, comentado e respeite as convenções de estilo do projeto.

## Futuro do Projeto

Planejamos expandir o PetFy (NDR) com as seguintes funcionalidades:
- Implementação de notificações via SMS para comunicações instantâneas[1].
- Suporte a mais tipos de animais, como aves e répteis, ampliando o alcance do sistema[1].
- Adição de um módulo para eventos de adoção presenciais, conectando abrigos e comunidades locais[1].

## Contato

Para dúvidas ou sugestões, entre em contato com a equipe de desenvolvimento através das issues do GitHub. Agradecemos seu interesse no PetFy (NDR) e esperamos que esta plataforma contribua para melhorar a vida de animais domésticos e facilitar o trabalho de abrigos e adotantes!

Citations:
[1] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/42763488/dc7cd4ec-0310-498d-be38-604ca6b00d99/Especificacao_Requisitos__aplicacao_web_para_pets.pdf
[2] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_91f06cf3-28ea-4aa3-bb04-9b6318a96074/0663e902-024c-48ad-9512-6a478868a664/Mahamuni-Suraj-thesis-2021.pdf
[3] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_91f06cf3-28ea-4aa3-bb04-9b6318a96074/b20dd31d-874b-4b71-8b3c-83a6057f5850/Resumo-de-artigo.pdf
[4] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_91f06cf3-28ea-4aa3-bb04-9b6318a96074/366ea898-ee38-4508-88bd-688f39ef08c1/Analise-de-artigo.pdf
[5] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_91f06cf3-28ea-4aa3-bb04-9b6318a96074/a676c9f3-35a9-4c8e-8d72-5a1aadb6d259/Especificacao_dos_Requisitos_do_Software_Restaurante_Universitario.pdf
[6] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_91f06cf3-28ea-4aa3-bb04-9b6318a96074/7e223178-e9b7-4ac1-be38-c3552b964006/3.UsabilidadeDefinicoesEPrincipios.pdf
[7] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_91f06cf3-28ea-4aa3-bb04-9b6318a96074/bef74b55-4129-4175-9e0f-eca0b859e596/3.UsabilidadeDefinicoesEPrincipios-1.pdf
[8] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_91f06cf3-28ea-4aa3-bb04-9b6318a96074/f57885a2-307a-4cae-8ed1-38615e53b55a/4.ExemplosDeBoas-MasPraticasDeUsabilidade.pdf
[9] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_91f06cf3-28ea-4aa3-bb04-9b6318a96074/01f56438-8b56-4edd-9f23-de880207580e/Tarefa2.pdf

---
Resposta do Perplexity: pplx.ai/share