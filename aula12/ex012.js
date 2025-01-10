//pega a data do sistema para ser impressa no terminal
var hora = new Date()
var agora = hora.getHours()

console.log(`Agora são ${hora} horas`)

//else if = senao se 
//se a hora for menor que 12 é bom dia
if (hora < 12){
    console.log("Bom dia")
    //se a hora (que é 12) for menor ou = 18 é boa tarde
} else if (hora <= 18){
    console.log("Boa tarde")
}else{ // senao for acima de 18 é boa noite
    console.log('Boa noite')
}
