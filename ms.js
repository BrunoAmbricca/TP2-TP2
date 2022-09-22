import fs from 'fs'

function getInfo(){
    try{
        var object = JSON.parse(fs.readFileSync("package.json", "utf-8"))
        var string = JSON.stringify(object, null, '\t')
        
        let info = {
            "contenidoStr": string,
            "contenidoObj": object,
            "size": fs.statSync("package.json", "utf-8").size
        }
    
        fs.writeFileSync("info.txt", JSON.stringify(info), null, '\t')

        console.log(info)

    }catch(exception){
        console.log(exception.message)
    }
    
}

getInfo()