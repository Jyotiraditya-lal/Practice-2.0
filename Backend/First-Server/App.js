const http=require('http')

const rqListener=(req,res)=>{
    console.log('vaibhav')
}

const server=http.createServer(rqListener)

server.listen(4000)
