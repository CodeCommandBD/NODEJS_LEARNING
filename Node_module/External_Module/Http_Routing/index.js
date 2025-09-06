const http = require('http');
const fs = require('fs')
const PORT = 3000;
const hostName = '127.0.0.1'

const server = http.createServer((req, res)=>{

    const handleRead = (status, fileLocation) => {
        fs.readFile(fileLocation, (err, data)=>{
            res.writeHead(status,{"content-type":"text/html"})
            res.write(data)
            res.end()
        })
    }


    if(req.url === '/'){
        handleRead(200, './view/index.html')
    }
    else if(req.url === '/about'){
        handleRead(200, './view/about.html')
    }
    else if(req.url === '/contact'){
        handleRead(200, './view/contact.html')
    }else {
        handleRead(400, './view/error.html')
    }

})

server.listen(PORT,hostName, ()=>{
    console.log(`server is running at http://${hostName}:${PORT}`);
    
})