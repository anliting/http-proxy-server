import fs from'fs'
import http from'http'
import url from'url'
;(async()=>{
    let httpListen=(
        await fs.promises.readFile('httpListen','utf-8')
    ).split('\n')[0].split(' ')
    let httpServer=http.createServer((req,res)=>{
        let u=new url.URL(req.url)
        req.pipe(http.request({
            method:req.method,
            host:u.hostname,
            port:u.port,
            path:u.href,
        },aRes=>
            aRes.pipe(res)
        ))
    }).listen(...httpListen)
})()
