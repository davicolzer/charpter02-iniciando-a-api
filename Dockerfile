# nome da imagem que deseja utilizar na criação do container
FROM node

# Onde dentro do container será salvo os arquivos da aplicação
WORKDIR /usr/app

# Quais arquivos deseja copiar para dentro do container e onde ele esta localizado
COPY package.json ./
# ./ é o local dentro da pasta do WORKDIR

# Comando para efetuar a instalação dos pacotes da aplicação
RUN npm install

# Informar  que sejesa copiar  e colocar dentro da pasta do WORKDIR
COPY . .

# Porta que o container precisa liberar para acessar a aplicação
EXPOSE 3333

# Comando para iniciar a aplicação assim que iniciar o container
CMD ["npm", "run", "dev"]
# Comando criado package.json da aplicação