# ⚠️ ATENÇÃO

Não tente executar através do npm run dev ou npm run build e depois npm run preview **porque as aplicaçãoes precisam de headers de CORS pra poder compartilhar as informações e rodar o micro front end de forma funcional.** Então siga esta documentação e qualquer dúvida pode me consultar. 

Whatsapp: https://wa.me/+5588988770502
E-mail: victorx811@gmail.com

# 🏗️ Micro-Frontend Host App

Este repositório faz parte de uma arquitetura **Micro-Frontend** composta por múltiplos projetos (host-app, mf-clients, mf-selected-clients, mf-welcome e mf-ui).
O **host-app** é responsável por orquestrar os outros micro-frontends.

---

## ⚙️ Passo 0 — Instalação e Configuração

1. **Clonar o repositório**

   ```bash
   git clone <url-do-repo>
   cd host-app
   ```

2. **Instalar dependências**

   ```bash
   npm install
   ```

3. **Criar o arquivo `.env`** na raiz do projeto com as variáveis de ambiente:

   ### Exemplo de `.env` do host-app

   ```env
   # DEVELOPMENT
   VITE_WELCOME_URL=http://localhost:5002/assets/remoteEntry.js
   VITE_CLIENTS_URL=http://localhost:5001/assets/remoteEntry.js
   VITE_SELECTED_CLIENTS_URL=http://localhost:5003/assets/remoteEntry.js
   VITE_UI_URL=http://localhost:5004/assets/remoteEntry.js
   ```

   ### Exemplo de `.env` do mf-welcome

   ```env
   # DEVELOPMENT
   VITE_WELCOME_URL=http://localhost:5002
   ```
   
   ### Exemplo de `.env` do mf-ui

   ```env
   # DEVELOPMENT
   VITE_UI_URL=http://localhost:5004
   ```
   
    ### Exemplo de `.env` do mf-clients

   ```env
   # DEVELOPMENT
   VITE_CLIENTS_URL=http://localhost:5001
   VITE_UI_URL=http://localhost:5004/assets/remoteEntry.js
   ```

   ### Exemplo de `.env` do mf-selected-clients

   ```env
   # DEVELOPMENT
   VITE_SELECTED_CLIENTS_URL=http://localhost:5003
   VITE_UI_URL=http://localhost:5004/assets/remoteEntry.js
   ```
   
📌 **Observação importante:**

* Cada micro-frontend roda em uma porta diferente:

  * **mf-clients → 5001**
  * **mf-welcome → 5002**
  * **mf-selected-clients → 5003**
  * **mf-ui → 5004**
* O `host-app` consome todos eles via **Module Federation**.

---

## 🐳 Passo 1 — Build da Imagem Docker

Dentro do repositório desejado, rode:

```bash
docker build -t <nome-da-imagem> .
```

Exemplo:

```bash
docker build -t mf-welcome .
docker build -t mf-clients .
docker build -t mf-selected-clients .
docker build -t mf-ui .
docker build -t app-host .
```

---

## 🐳 Passo 2 — Executar o Container

Rode o container expondo a porta correta:

```bash
docker run -d -p <porta-local>:80 --name <nome-do-container> <nome-da-imagem>
```

Exemplos:

```bash
docker run -d -p 5002:80 --name mf-welcome mf-welcome
docker run -d -p 5001:80 --name mf-clients mf-clients
docker run -d -p 5003:80 --name mf-selected-clients mf-selected-clients
docker run -d -p 5004:80 --name mf-ui mf-ui
docker run -d -p 5000:80 --name app-host app-host
```

---

## ▶️ Passo 3 — Gerenciar os Containers

* **Iniciar um container**

  ```bash
  docker start <nome-do-container>
  ```

* **Parar um container**

  ```bash
  docker stop <nome-do-container>
  ```

---

## 🗑️ Passo 4 — Remover após avaliação

* **Remover container**

  ```bash
  docker rm -f <nome-do-container>
  ```

* **Remover imagem**

  ```bash
  docker rmi <nome-da-im
  ```

## 🚀 Resultado final

Após ter configurado as variáveis de ambiente corretamente e conseguido rodar todos os dockers você terá a aplicação rodando no localhost:5000 e não precisará deixar nenhum terminal aberto. Basta apontar para este endereço na sua URL e navegar pelo sistema. 
