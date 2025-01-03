Marx's Cleaning
Bem-vindo ao repositório oficial do site da Marx's Cleaning! Este projeto é a presença digital da nossa empresa de limpeza, projetado para oferecer informações claras sobre nossos serviços e um formulário de contato funcional para nossos clientes.

Tecnologias Utilizadas
Next.js: Framework React para construção de aplicações modernas e otimizadas.
Tailwind CSS: Framework CSS para estilização eficiente e responsiva.
Resend: Serviço utilizado para gerenciamento de envios de e-mail, especialmente no formulário de contato.
Funcionalidades
Página Inicial: Apresentação da Marx's Cleaning, destacando os serviços oferecidos.
Serviços: Detalhes sobre os tipos de limpeza disponíveis.
Formulário de Contato: Permite que os clientes entrem em contato diretamente com a empresa. Os envios são processados de forma confiável com Resend.
Design Responsivo: Totalmente otimizado para dispositivos móveis, tablets e desktops.
Como Rodar Localmente
Siga os passos abaixo para configurar o projeto localmente:

Pré-requisitos
Node.js (v16 ou superior)
Yarn ou npm instalado
Instalação
Clone este repositório:

bash
Copiar código
git clone https://github.com/Acaj0/marxs-cleaning.git
Navegue até o diretório do projeto:

bash
Copiar código
cd marxs-cleaning
Instale as dependências:

bash
Copiar código
npm install
ou

bash
Copiar código
yarn install
Configure as variáveis de ambiente:

Crie um arquivo .env.local na raiz do projeto e adicione suas chaves API do Resend, e quaisquer outras configurações necessárias.
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm run dev
ou

bash
Copiar código
yarn dev
Acesse no navegador:

O site estará disponível em http://localhost:3000.
Estrutura do Projeto
plaintext
Copiar código
.
├── components/         # Componentes reutilizáveis do site
├── pages/              # Páginas do Next.js
├── public/             # Arquivos estáticos
├── styles/             # Arquivos de estilo (Tailwind)
├── utils/              # Funções auxiliares
├── .env.local.example  # Exemplo do arquivo de configuração de variáveis de ambiente
└── README.md           # Documentação do projeto
Contribuindo
Contribuições são bem-vindas! Se você encontrar problemas ou tiver ideias para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto é de propriedade da Marx's Cleaning e não está sob licença de código aberto.
