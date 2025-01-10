var idade = 16
console.log (`Você tem ${idade}`)

if (idade < 18 || idade > 65) {
    console.log('Não vota')
}else if (idade > 18 ) {
    console.log('Voto obrigatório')
}else {
    console.log('Voto opcional')
}