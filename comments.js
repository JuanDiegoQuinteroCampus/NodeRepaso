import https from "https";

export function getComments(callback) {
  https.get("https://jsonplaceholder.typicode.com/comments", (data) => {
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
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>TEXT</th>
                </tr>
            </thead>
            <tbody>`;
      json = JSON.parse(json);
      json.forEach((val, id) => {
        plantilla +=
          /* html */
          `<tr>
                <td>${val.postId}</td>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.email}</td>
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
