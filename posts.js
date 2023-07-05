import https from 'https';

export function getPosts(callback) {
  https.get('https://jsonplaceholder.typicode.com/posts', (data) => {
    let json = '';

    data.on('data', (chunk) => {
      json += chunk;
    });

    data.on('end', () => {
      const posts = JSON.parse(json);
      let plantilla = /* html */ `
        <table border="solid">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>TITULO</th>
              <th>DATOS</th>
            </tr>
          </thead>
          <tbody>
      `;

      posts.forEach((val, id) => {
        plantilla += /* html */ `
          <tr>
            <td>${val.userId}</td>
            <td>${val.id}</td>
            <td>${val.title}</td>
            <td>${val.body}</td>
          </tr>
        `;
      });

      plantilla += /* html */ `
          </tbody>
        </table>`;
      callback(plantilla);
    });
  });
}