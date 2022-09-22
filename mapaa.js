import fs from 'fs'

async function readFile(){
    try{
        var stats = await fs.promises.stat("package.json", "utf-8")

        var read = await fs.promises.readFile("package.json", "utf-8")
    
    
        var object = JSON.parse(read)
        var string = JSON.stringify(object, null, '\t')
    
        let info = {
            "contenidoStr": string,
            "contenidoObj": object,
            "size": stats.size
        }
    
        await fs.promises.writeFile("info.txt", JSON.stringify(info), null, '\t')
    
        console.log(info)
    }catch(ex){
        console.log(ex.message)
    }  
}

readFile()


