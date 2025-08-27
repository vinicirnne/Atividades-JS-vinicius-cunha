const entrada = require('prompt-sync')({sigint: false});

do{
    let num1 = Number(entrada("Digite o primeiro numero; "));
    let num2 = Number(entrada("Digite o segundo numero; "));
    let op = (entrada("Digite o operador (+, -, *, /); "));
    console.log(soma(num1,num2,op));
    let final = entrada("Você quer continuar? digite S ou N  ");
    if(final == 'n' || final == 'N'){
        console.log("Calculadora fechando!");break
    }
}
while(true);
  function soma(a,b,c){
        if(c == '*'){
            return a*b;
        } else if(c == '+'){
            return a+b;
        } else if(c == '-'){
            return a-b;
        } else if(c == '/' || c == '\\'){
            if(a == 0 || b == 0){
                console.log("NÃO PODE DIVIDIR POR 0!!");
            }else{
                return a/b;
            }
        } else{
            console.log("OPERAÇÃO INVALIDA!!");
        }
    }