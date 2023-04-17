let conta = 0;

document.getElementById("diminui").onclick = function(){
    conta -=1;
    document.getElementById("contaLabel").innerHTML = conta; 
}

document.getElementById("reseta").onclick = function(){
    conta=0;
    document.getElementById("contaLabel").innerHTML = conta; 
}

document.getElementById("aumenta").onclick = function(){
    conta +=1;
    document.getElementById("contaLabel").innerHTML = conta; 
}