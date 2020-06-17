![](https://i.imgur.com/jjJ0t5p.png)

"Uma das propostas do projeto final do CS50 é criar algo que afeta sua comunidade e foi com essa premissa que surgiu a idéia do SafraCode"

### Proposta:


A principal atividade econômica do município no qual cresci é a cafeicultura, então a proposta do SafraCode foi criar um aplicativo Web gratuito para auxiliar no controle financeiro e de safra das lavouras de café, visando pequenos produtores, utilizando um layout simples e com informações essenciais para o controle financeiro da safra.

### Tecnologias Usadas:
![](https://icon-icons.com/icons2/2108/PNG/48/javascript_icon_130900.png) ![](https://icon-icons.com/icons2/2248/PNG/48/bootstrap_icon_135870.png)  ![](https://icon-icons.com/icons2/691/PNG/48/google_firebase_icon-icons.com_61474.png)  ![](https://icon-icons.com/icons2/512/PNG/48/html5-01_icon-icons.com_50875.png)  
##### Javascript | BootStrap | Firebase | CSS | HTML


### Funcionalidade:

O usuário se registra ( obs. a senha tem que ter mais do que 6 caracteres) e efetua login para acessar o portal, no portal ele insere os dados de custos,receitas,etc... e no painel principal esses dados são atualizados automaticamente. cada usuário tem seu próprio painel e dados.

Obs :. O site foi desenvolvido em português, pois costuma ser usado por usuários que falam apenas português

### O WebSite:
No site, você se registra, faz login e tem acesso ao portal.
toda a autenticação é feita com firebase, mesmo que o usuário esqueça a senha que ele pode solicitar receber um email para altera-la.

![](https://i.ibb.co/sFYF9cH/site1.png)  



| Files:      | Page: |
| ------------- | ------------------------------ |
| index.html  | LOGIN |
| register.html     |   REGISTER |
| forgot-password.html      |    Forgot Password |
| app.js      | Authentication / Database    |
| add-safra.js    |  Database  |
|authentication.js | Authentication |


Após o login, o usuário é direcionado para o painel principal:

![](https://i.ibb.co/gDxQB7F/site2.png) 

| Files:      | Page: |
| ------------- | ------------------------------ |
| receitaVenda.html, receitaOutro.html  | Add Recipe |
| addReceita.js, addReceitaOutra.js | Add Recipe |
|  adubo.js, defensivo.js, maoObra.js, outro.js      |   Add Expense |
| Adubacao.html, defensivos.html, maoObra.html ,outros.html      |    Add Expense |
| edit-delete.html, edit-maduros.html , edit-mudas.html , edit-pilados.html     | Edit Crop |
| edit.js, editMaduro.js, editPilado.js     |  Edit Crop   |
| dashboard.js , initial-page.html | Dashboard |

Nesta página, ele pode rastrear todos os KPIs de sua safra de café e, na barra lateral, pode adicionar vendas e despesas, além de editar informações sobre a safra de café, como quantidade de plantas, etc.


Para testar o projeto: https://crysthianzaar.github.io/Safra-Code

