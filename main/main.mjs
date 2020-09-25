import fs from'fs'
import http from'http'
;(async()=>{
    let httpListen=(
        await fs.promises.readFile('httpListen','utf-8')
    ).split(' ')
})()
