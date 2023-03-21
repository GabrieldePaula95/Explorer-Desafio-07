let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")

function average(n1, n2){
    let aver = (Number(n1) + Number(n2)) / 2
    return aver.toFixed(2)
}

let result = average(n1, n2) 

if (result >= 7) {
   alert("Parabéns, " + student + "! Sua média foi de: " + result)
 } else if (average < 3) {
   alert("Reprovado")
} else {
   alert(student + " estude para sua prova de recuperação! Sua média foi de: " +  result)
}



