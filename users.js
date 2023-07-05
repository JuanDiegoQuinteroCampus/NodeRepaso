import https from "https";

export function getUsers(callback) {
  https.get("https://jsonplaceholder.typicode.com/users", (data) => {
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
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>STREET</th>
                    <th>SUITE</th>
                    <th>CITY</th>
                    <th>ZIPCODE</th>
                    <th>LAT</th>
                    <th>LNG</th>
                    <th>PHONE</th>
                    <th>WEBSITE</th>
                    <th>COMPANYNAME</th>
                    <th>CATCHPHRASE</th>
                    <th>BS</th>
                   
                </tr>
            </thead>
            <tbody>`;
      json = JSON.parse(json);
      json.forEach((val, id) => {
        plantilla +=
          /* html */
          `<tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.username}</td>
                <td>${val.email}</td>
                <td>${val.address.street}</td>
                <td>${val.address.suite}</td>
                <td>${val.address.city}</td>
                <td>${val.address.zipcode}</td>
                <td>${val.address.geo.lat}</td>
                <td>${val.address.geo.lng}</td>
                <td>${val.phone}</td>
                <td>${val.website}</td>
                <td>${val.company.name}</td>
                <td>${val.company.catchPhrase}</td>
                <td>${val.company.bs}</td>
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
