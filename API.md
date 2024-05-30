Documentação dos endpoints utilizados nos componentes `Login`, `ForgotPassword` e `Register`, juntamente com exemplos de requisição e resposta para cada um deles.

## 1. Endpoint `/users`

### Descrição
Este endpoint é utilizado para recuperar a lista de usuários cadastrados.

### Exemplo de Requisição
- **Método HTTP:** GET
- **URL:** `http://localhost:3000/users`

### Exemplo de Resposta
```json
{
  "users": [
    {
      "id": "1",
      "email": "admin@teste.com",
      "senha": "abc123"
    },
    {
      "id": "751b",
      "email": "pedro@gmail.com",
      "senha": "abc"
    }
  ]
}
```

## 2. Componente `Login`

### Descrição
Este componente realiza a autenticação do usuário.

### Exemplo de Requisição
- **Método HTTP:** GET
- **URL:** `http://localhost:3000/users`
- **Corpo da Requisição:**
```json
{
  "email": "admin@teste.com",
  "senha": "abc123"
}
```

### Exemplo de Resposta
- **Status Code:** 200 OK
```json
{
  "id": "1",
  "email": "admin@teste.com",
  "senha": "abc123"
}
```

## 3. Componente `ForgotPassword`

### Descrição
Este componente é utilizado para redefinir a senha do usuário.

### Exemplo de Requisição
- **Método HTTP:** GET
- **URL:** `http://localhost:3000/users`
- **Corpo da Requisição:**
```json
{
  "email": "admin@teste.com",
  "novaSenha": "nova123"
}
```

### Exemplo de Resposta
- **Status Code:** 200 OK
```json
{
  "id": "1",
  "email": "admin@teste.com",
  "senha": "nova123"
}
```

## 4. Componente `Register`

### Descrição
Este componente é utilizado para cadastrar um novo usuário.

### Exemplo de Requisição
- **Método HTTP:** POST
- **URL:** `http://localhost:3000/users`
- **Corpo da Requisição:**
```json
{
  "nome": "Novo Usuário",
  "email": "novo@teste.com",
  "senha": "nova123"
}
```

### Exemplo de Resposta
- **Status Code:** 201 Created
```json
{
  "id": "3",
  "nome": "Novo Usuário",
  "email": "novo@teste.com",
  "senha": "nova123"
}
```

