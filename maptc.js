import fs, { Stats } from 'fs'

function readFilePromise(file){
    return new Promise((resolve, reject) =>{
        fs.readFile(file, "utf-8", (error, entrada) =>{
            if(error) reject(error)
            else resolve(entrada)           
        })
    })
}

function statPromise(file){
    return new Promise((resolve, reject) =>{
        fs.stat(file, "utf-8", (error, entrada) =>{
            if(error) reject(error)
            else resolve(entrada)           
        })
    })
}

function writeFilePromise(file, data){
    return new Promise((resolve, reject) =>{
        fs.writeFile(file, data, "utf-8", (error, salida) =>{
            if(error) reject(error)
            else resolve(salida)           
        })
    })
}



function start(){
    let info = {}

    readFilePromise("package.json")
    .then(datos => {

        var object = JSON.parse(datos)
        var string = JSON.stringify(object, null, '\t')

        info = {
            "contenidoStr": string,
            "contenidoObj": object
        }

        return statPromise("info.txt")
    })
    .then(datos => {

        info["size"] = datos.size

        console.log(info)

        return writeFilePromise("info.txt", JSON.stringify(info, null, '\t'))
    })
    .catch(error => console.log(error))
}

start()