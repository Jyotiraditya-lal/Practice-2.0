const http=require('http')

const rqListener=(req,res)=>{
    if(req.url==='/home'){
        res.write('<html>')
        res.write('<body><h1>Welcome to home page</h1></body>')
        res.write('</html>')
        res.end()
    }else if(req.url==='/about'){
        res.write('<html>')
        res.write('<body><h1>Welcome to About us page</h1></body>')
        res.write('</html>')
        res.end()
    }else if(req.url==='/node'){
        res.write('<html>')
        res.write('<body><h1>Welcome to my node project</h1></body>')
        res.write('</html>')
        res.end()
    }
}

const server=http.createServer(rqListener)

server.listen(4000)
