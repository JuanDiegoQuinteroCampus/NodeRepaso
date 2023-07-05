
import { createServer } from 'http';
import { getPosts } from './posts.js';


const server = createServer((req, res) => {
  let json = '';

  if (req.url === '/posts') {
    getPosts((plantilla) => {
      res.end(plantilla);
    });
  } 
});

const config = {
  hostname: '127.9.0.198',
  port: 8080,
};

server.listen(config, () => {
  console.log(`http://${config.hostname}:${config.port}/`);
});
