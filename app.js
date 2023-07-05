
import { createServer } from 'http';
import { getPosts } from './posts.js';
import { getComments } from './comments.js';
import { getAlbums } from './albums.js';
import { getPhotos } from './photos.js';


const server = createServer((req, res) => {
  let json = '';

  if (req.url === '/posts') {
    getPosts((plantilla) => {
      res.end(plantilla);
    });
  } else if (req.url === '/comments') {
    getComments((plantilla) => {
      res.end(plantilla);
    });
  } else if (req.url === '/albums') {
    getAlbums((plantilla) => {
      res.end(plantilla);
    });
  } else if (req.url === '/photos') {
    getPhotos((plantilla) => {
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
