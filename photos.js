import https from "https";

export function getPhotos(callback) {
  https.get("https://jsonplaceholder.typicode.com/photos", (data) => {
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
                    <th>URL</th>
                    <th>THUMBNAILURL</th>
                </tr>
            </thead>
            <tbody>`;
      json = JSON.parse(json);
      json.forEach((val, id) => {
        plantilla +=
          /* html */
          `<tr>
                <td>${val.albumId}</td>
                <td>${val.id}</td>
                <td>${val.title}</td>
                <td>${val.url}</td>
                <td>${val.thumbnailUrl}</td>
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
