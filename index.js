let nomeDoHeroi = "Voltor"
let XpHeroi = 11003

if(XpHeroi <= 1000){
	console.log("O ranking do " + nomeDoHeroi + " é: Ferro")

}else if(1001 <= XpHeroi >= 2000){
	console.log("O ranking do " + nomeDoHeroi + " é: Bronze")
    
}else if(2001 <= XpHeroi >= 5000){
	console.log("O ranking do " + nomeDoHeroi + " é: Prata")
    
}else if(5001 <= XpHeroi >= 7000){
	console.log("O ranking do " + nomeDoHeroi + " é: Ouro")
    
}else if(7001 <= XpHeroi >= 8000){
	console.log("O ranking do " + nomeDoHeroi + " é: Platina")

}else if(8001 <= XpHeroi >= 9000){
	console.log("O ranking do " + nomeDoHeroi + " é: Ascendente")

}else if(9001 <= XpHeroi >= 10000){
	console.log("O ranking do " + nomeDoHeroi + " é: Imortal")

}else(XpHeroi >= 10000)
	console.log("O ranking do " + nomeDoHeroi + " é: Radiante")
