operadores = ['+', '-', '*', '/'];

function adicionarNumero(num){
    valor = document.getElementById("current-operacoes").innerHTML;
    if (valor.length == 10){
        return;
    }
    if (num == "." && valor.includes('.')) {
        return;
    }
    if( valor === "0" ){
        if( num == '.' ){
            document.getElementById("current-operacoes").innerHTML = '0.';
        } else {
            document.getElementById("current-operacoes").innerHTML = num;
        }
    } else {
        document.getElementById("current-operacoes").innerHTML = valor + num;
    }
}

function resultado(){
    let preValor = document.getElementById("previous-operacoes").innerHTML;
    let valor = document.getElementById("current-operacoes").innerHTML;
    preValor = preValor.replace(" ", "");
    if( valor.length > 0 && valor != 0 ){        
        document.getElementById("current-operacoes").innerHTML = eval(preValor+valor);
        document.getElementById("previous-operacoes").innerHTML = "";
    }
}

function limpaAtual(){
    document.getElementById("current-operacoes").innerHTML = 0;
}

function limpaTudo(){
    document.getElementById("previous-operacoes").innerHTML = "";
    document.getElementById("current-operacoes").innerHTML = 0;
}

function verificaOperador(){
    var verificaUltimo = document.getElementById("previous-operacoes").innerHTML.substring(-1);
    if( operadores.includes(verificaUltimo) ){
        return true;
    }else{
        return false;
    }
}

function adicionaOperador(operador){
    let preValor = document.getElementById("previous-operacoes").innerHTML;
    let valor = document.getElementById("current-operacoes").innerHTML;

    if( valor != 0 || preValor != "" ){
        if( preValor.length > 0){
            
            let verificaOperador = document.getElementById("previous-operacoes").innerHTML;
            verificaOperador = verificaOperador.substring(verificaOperador.length - 1);
    
            console.log(verificaOperador);
    
            if(operadores.includes(verificaOperador) && valor.length === 0){
                preValor = preValor.substring(0, preValor.length - 2);
                preValor = preValor+` ${operador}`;
                document.getElementById("previous-operacoes").innerHTML = preValor;
            } else {
                resultado();
                adicionaOperador(operador);
            }
    
        } else {
            
            document.getElementById("previous-operacoes").innerHTML = `${valor} ${operador}`;
            document.getElementById("current-operacoes").innerHTML = "";
            console.log(`${valor} ${operador}`)
    
        } 
    }
}

function apagaUm(){
    let preValor = document.getElementById("previous-operacoes").innerHTML;
    var valor = document.getElementById("current-operacoes").innerHTML;
    valor = valor.substring(0 , valor.length - 1);

    if(valor.length === 0 && preValor.length === 0){
        document.getElementById("current-operacoes").innerHTML = 0;
    } else {
        document.getElementById("current-operacoes").innerHTML = valor;
    }
}

function realizaOperacao(){
    var preValor = document.getElementById("previous-operacoes").innerHTML;
    var valor = document.getElementById("current-operacoes").innerHTML;

    if(preValor.length > 0){
        document.getElementById("previous-operacoes").innerHTML = "";
        document.getElementById("current-operacoes").innerHTML = eval(preValor+valor);
    }
}
