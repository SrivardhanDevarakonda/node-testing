const http = require('http')
const url = require('url')

const server = http.createServer((req,res) => {
    if(url.parse(req.url).pathname !== '/'){
        res.writeHead(404,'not found')
        res.end('not found')
        return
    }
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('HELLO BERKADIA !!')
})

if(require.main === module){
    server.listen(3000,()=>{
        console.log('Now starting.....')
    })
}
else{
    module.exports = server
}