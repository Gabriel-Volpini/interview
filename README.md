# Mobile Food Facility App – San Francisco

A full-stack application that enables users to search, filter, and locate mobile food vendors in San Francisco using a public dataset. Built using Python (FastAPI) for the backend and React (TypeScript) for the frontend.

This project fulfills the challenge requirements for both the Backend-Focused and Frontend-Focused versions of the assignment. Below, each part is documented independently.

---


FRONTEND NOTES

duvida entre fazer usando next
marker esta com o offset errado
lista esta com estilo esquisito, provavelmente por causa do tamanho dos textos renderizados dentro dela
clicar na lista centraliza o marcador
quando o hover acontecer, aumentar o zindex do marker para ele vir para frente
criar enum para os status 
quando aumentar mt a quantidade de itens o mapa a lista e a filtragem vao dar problema
    mapa -> cluster de icons
    lista -> pagination integrado com o backend
    filtragem -> buscar pelo back 

- pnpm
- vite
- vitest
-react testing library
- react query
- antd - desing lib
- styled components

Backed notes

- docker compose com sleep 2 pq o fast api n tava esperando o banco subir
Euclideana simples, que é suficiente em curtas distâncias
