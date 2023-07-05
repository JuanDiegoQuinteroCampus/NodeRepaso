import https from "https";

export function getAlbums(callback) {
  https.get("https://jsonplaceholder.typicode.com/albums", (data) => {
    let json = "";

    data.on("data", (chunk) => {
      json += chunk;
    });

    data.on("end", () => {
      let plantilla =
        /* html */
        `<table border="solid">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>TITLE</th>
                </tr>
            </thead>
            <tbody>`;
      json = JSON.parse(json);
      json.forEach((val, id) => {
        plantilla +=
          /* html */
          `<tr>
                <td>${val.userId}</td>
                <td>${val.id}</td>
                <td>${val.title}</td>
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

