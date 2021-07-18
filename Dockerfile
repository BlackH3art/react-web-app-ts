FROM node:12.0.0

RUN mkdir -p /usr/src/react-app-ts

COPY build /usr/src/react-app-ts/build
COPY data.json /usr/src/react-app-ts/
COPY server.js /usr/src/react-app-ts/
COPY deploy-package.json /usr/src/react-app-ts/package.json

WORKDIR /usr/src/react-app-ts
RUN echo 'package-lock=false' >> .npmrc
RUN npm install

EXPOSE 4002

CMD ["node", "server.js"]