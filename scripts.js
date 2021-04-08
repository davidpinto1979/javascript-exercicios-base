function exercicio1(msg){
    document.write("Exercício 1 - write <br>");
    document.write(msg +"<br>");
}


function exercicio2(){
document.write("Exercício 2  - soma <br>");

        let a = 23;
        let b = 45;
        let soma = a + b;

        document.write("A soma de " + a + " e " + b + " é de " + soma + "<br>");
}

function exercicio3(){
        document.write("Exercício 3 - média de 3 notas <br>");
        
        let num1 = parseInt(prompt("Escreva primeiro número"));
        let num2 = parseInt(prompt("Escreva segundo número"));
        let num3 = parseInt(prompt("Escreva terceiro número"));
        let media = (num1 + num2 + num3) / 3;

        document.write("A média dos números inseridos é " + media + "<br>")
}

function exercicio4(){
    document.write("Exercício 4 - média de 3 notas com resultado <br>");

    let notaA = parseInt(prompt("Escreva primeira nota"));
    let notaB = parseInt(prompt("Escreva segunda nota"));
    let notaC = parseInt(prompt("Escreva terceira nota"));
    let media = parseFloat((notaA + notaB + notaC) / 3);

    if(media >= 9.5){
        alert("Média: " + media + "\nO aluno está aprovado");
    }else if(media < 8){
        alert("Média: " + media +"\nO aluno está reprovado");
    }else {
        alert("Média: " + media +"\nO aluno vai à oral");
    }
}

function exercicio5(){
    document.write("Exercício 5 - escreve um numero esse numero de vezes <br>");

    let numero = parseInt(prompt("Escreva um numero"));
    

    for (i=0; i<numero; i++) {
        document.write(numero + "<br>")
        }
}

function exercicio6(){
    document.write("Exercício 6 - escreve a tabuada de um numero <br>");

    let numero = parseInt(prompt("Escreva um numero"));
    

    for (i=1; i<10; i++) {
        document.write(numero + " x " + i + " = " + numero * i + "<br>");
        }
}

function exercicio7(){
    document.write("Exercício 7 - números pares até ao número escolhido <br><br>");


    let numero = parseInt(prompt("Escreva um número"));

    let count = 0;

    while (count <= numero) {

        if(count%2 == 0){
            document.write (count + "<br>")
        }
    count++;
    }

}