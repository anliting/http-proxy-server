import fs from'fs'
import http from'http'
;(async()=>{
    let httpListen=(
        await fs.promises.readFile('httpListen','utf-8')
    ).split('\n')[0].split(' ')
    http.request({
        host:'127.0.0.1',
        port:httpListen[0],
        path:'http://hands0.me/',
    },res=>{
        let a=[]
        res.on('data',[].push.bind(a))
        res.on('end',()=>{
            console.log(''+Buffer.concat(a))
        })
    }).end()
})()
