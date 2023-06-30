import {createServer} from 'http';
import https from 'https';

let server = createServer((req, res)=>{
    let json ="";
    if (req.url == "/posts") {
        https.get('https://jsonplaceholder.typicode.com/posts',(data)=>{
    
            data.on("data", (chunk)=>{
                json+=chunk;
            })
            data.on("end",()=>{
                let plantilla=/* html */`
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
                json= JSON.parse(json);
                json.forEach((val,id)=>{
                    plantilla+=/* html */
                    `<tr>
                        <td>${val.userId}</td>
                        <td>${val.id}</td>
                        <td>${val.title}</td>
                        <td>${val.body}</td>
                        
                    </tr>
                    `
                    
                });
                plantilla+=/* html */`
                    </tbody>
                </table>`;
                res.end(plantilla);
            });
            });
    }else if(req.url =="/comments"){
        https.get('https://jsonplaceholder.typicode.com/comments',(data)=>{
    
        data.on("data", (chunk)=>{
            json+=chunk;
        })
        data.on("end",()=>{
            let plantilla=/* html */
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
                <tbody>`
            ;
            json= JSON.parse(json);
            json.forEach((val,id)=>{
                plantilla+=/* html */
                `<tr>
                    <td>${val.postId}</td>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.email}</td>
                    <td>${val.body}</td>
                    
                </tr>
                `
                
            });
            plantilla+=/* html */`
                    </tbody>
                </table>`;
                res.end(plantilla);
        })
        })
    }
    
})
const config ={
    hostname:"127.9.0.198",
    port:8080
}

//levanto el servidor con el listen
server.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}/`);
})