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
        /* ojooooooooooooooooooo vamos aqui haciendo cada modulo, cada */
    }else if(req.url =="/albums"){
        https.get('https://jsonplaceholder.typicode.com/albums',(data)=>{
    
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
                        <th>TITLE</th>
                    </tr>
                </thead>
                <tbody>`
            ;
            json= JSON.parse(json);
            json.forEach((val,id)=>{
                plantilla+=/* html */
                `<tr>
                    <td>${val.userId}</td>
                    <td>${val.id}</td>
                    <td>${val.title}</td>
                </tr>
                `
                
            });
            plantilla+=/* html */`
                    </tbody>
                </table>`;
                res.end(plantilla);
        })
        })
    }else if(req.url =="/photos"){
        https.get('https://jsonplaceholder.typicode.com/photos',(data)=>{
    
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
                        <th>TITLE</th>
                        <th>URL</th>
                        <th>THUMBNAILURL</th>
                    </tr>
                </thead>
                <tbody>`
            ;
            json= JSON.parse(json);
            json.forEach((val,id)=>{
                plantilla+=/* html */
                `<tr>
                    <td>${val.albumId}</td>
                    <td>${val.id}</td>
                    <td>${val.title}</td>
                    <td>${val.url}</td>
                    <td>${val.thumbnailUrl}</td>
                </tr>
                `
                
            });
            plantilla+=/* html */`
                    </tbody>
                </table>`;
                res.end(plantilla);
        })
        })
    }else if(req.url =="/todos"){
        https.get('https://jsonplaceholder.typicode.com/todos',(data)=>{
    
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
                        <th>TITLE</th>
                        <th>COMPLETED</th>
                    </tr>
                </thead>
                <tbody>`
            ;
            json= JSON.parse(json);
            json.forEach((val,id)=>{
                plantilla+=/* html */
                `<tr>
                    <td>${val.userId}</td>
                    <td>${val.id}</td>
                    <td>${val.title}</td>
                    <td>${val.completed}</td>
                </tr>
                `
                
            });
            plantilla+=/* html */`
                    </tbody>
                </table>`;
                res.end(plantilla);
        })
        })
    }else if(req.url =="/users"){
        https.get('https://jsonplaceholder.typicode.com/users',(data)=>{
    
        data.on("data", (chunk)=>{
            json+=chunk;
        })
        data.on("end",()=>{
            let plantilla=/* html */
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
                <tbody>`
            ;
            json= JSON.parse(json);
            json.forEach((val,id)=>{
                plantilla+=/* html */
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