import fs from 'fs'

fs.stat("package.json", "utf-8", (error, stats) =>{
    if(error) throw new Error("Error en fs.stat: " + error.message)

    fs.readFile("package.json", "utf-8", (error, entrada) =>{

        if(error) throw new Error("Error en fs.readFile: " + error.message)

        var object = JSON.parse(entrada)
        var string = JSON.stringify(object, null, '\t')

        let info = {
            "contenidoStr": string,
            "contenidoObj": object,
            "size": stats.size
        }

        fs.writeFile("info.txt", JSON.stringify(info), null, '\t', (error, salida) => {
            if(error) throw new Error("Error en fs.writeFile: " + error.message)
        })

        console.log(info)
    })

})