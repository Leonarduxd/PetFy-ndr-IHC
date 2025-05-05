# README - PetFy(ndr)

Bem-vindo ao repositório do **PetFy(ndr)**, uma aplicação web desenvolvida para gerenciar animais domésticos em espera de adoção ou em necessidade de cuidados e doações. Este projeto visa facilitar a conexão entre adotantes, doadores e abrigos, centralizando informações e promovendo transparência na gestão de recursos. Abaixo, você encontrará detalhes sobre o propósito do projeto, suas funcionalidades principais, tecnologias utilizadas e instruções para configuração e contribuição.

## Sobre o Projeto

O PetFy(ndr) foi concebido para atender à necessidade de um sistema eficiente que apoie abrigos na gestão de animais domésticos, conectando-os com pessoas interessadas em adoção ou em contribuir com doações. A plataforma permite que usuários busquem animais disponíveis com filtros específicos, realizem doações financeiras ou materiais e que administradores gerenciem cadastros e relatórios de forma prática e segura[1].

## Funcionalidades Principais

- **Cadastro de Animais**: Abrigos verificados podem registrar informações detalhadas sobre os animais, como nome, idade, espécie, cor, raça e histórico veterinário[1].
- **Busca Personalizada**: Adotantes podem filtrar animais por espécie, idade e localização geográfica, facilitando a escolha do pet ideal.
- **Gestão de Doações**: Registro de contribuições financeiras ou materiais, vinculadas a campanhas específicas ou necessidades gerais dos abrigos.
- **Notificações Automáticas**: Envio de confirmações por e-mail sobre doações recebidas e novos animais disponíveis para adoção (com futura implementação de SMS)[1].
- **Relatórios Administrativos**: Geração de relatórios sobre adoções realizadas e recursos recebidos, acessíveis aos administradores[1].
- **Integração com Mapas**: Uso da API do Google Maps para localizar abrigos próximos aos usuários.

## Tecnologias Utilizadas

O projeto foi desenvolvido com tecnologias modernas para garantir funcionalidade, usabilidade e escalabilidade:

- **Frontend**: HTML5 e CSS3 para estrutura e estilo, com AngularJS para interfaces dinâmicas e responsivas.
- **Backend**: JavaScript com Node.js para lógica de negócios e PHP para comunicação com o banco de dados.
- **Banco de Dados**: MySQL para armazenamento de dados sobre usuários, animais e transações.
- **Integrações Externas**: API do Google Maps para exibição de localizações de abrigos dentro de um raio configurável.
- **Ferramentas**: Visual Studio Code como editor principal, com extensões como Live Server para desenvolvimento ágil.

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
   - Crie um banco de dados MySQL e importe o esquema inicial (se disponível no repositório ou conforme documentação).
   - Atualize as credenciais de conexão no arquivo de configuração PHP (geralmente `config.php` ou similar).

4. **Inicie o Servidor**:
   - Inicie o servidor web e aponte para o diretório do projeto[1].
   - Acesse a aplicação via navegador em `http://localhost/PetFy-ndr-IHC` (ou conforme configuração do seu ambiente).

5. **Teste a Aplicação**:
   - Registre-se como adotante, doador ou administrador.
   - Teste funcionalidades como cadastro de animais, busca personalizada e registro de doações.

## Como Contribuir

Estamos abertos a contribuições para aprimorar o PetFy (NDR). Siga estas diretrizes para participar:

- **Reporte Bugs**: Abra uma issue descrevendo o problema encontrado, incluindo passos para reproduzi-lo.
- **Sugira Melhorias**: Proponha novas funcionalidades ou melhorias na interface e experiência do usuário via issues.
- **Envie Pull Requests**: Faça um fork do repositório, implemente suas alterações em uma branch específica e envie um pull request para revisão.
- **Siga as Boas Práticas**: Mantenha o código limpo, comentado e respeite as convenções de estilo do projeto.

## Futuro do Projeto

Planejamos expandir o PetFy (NDR) com as seguintes funcionalidades:
- Implementação de notificações via SMS para comunicações instantâneas.
- Suporte a mais tipos de animais, como aves e répteis, ampliando o alcance do sistema.
- Adição de um módulo para eventos de adoção presenciais, conectando abrigos e comunidades locais.

## Contato

Para dúvidas ou sugestões, entre em contato com a equipe de desenvolvimento através das issues do GitHub. Agradecemos seu interesse no PetFy (NDR) e esperamos que esta plataforma contribua para melhorar a vida de animais domésticos e facilitar o trabalho de abrigos e adotantes!


