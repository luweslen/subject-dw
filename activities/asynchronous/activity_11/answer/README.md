# **PORTFOLIO 5.0**

## **Rodando o projeto**

### **Backend**

Entre na pasta do backend:
```bash
cd backend
```

Instale as dependências:
```bash
yarn
```

Rode o backend:
```bash
yarn dev
```

### **Frontend**

Entre na pasta do frontend:
```bash
cd frontend
```
Caso estiver na pasta `backend`:
```bash
cd ../frontend
```

Instale as dependências:
```bash
yarn
```

Criei um arquivo na raiz da pasta `frontend` com nome de `.env`:
```env
VITE_APP_BASE_URL_API=http://localhost:3333/portfolio
```

Rode o frontend:
```bash
yarn dev
```