// Boas-vindas com nome
let nome = prompt('Qual é o seu nome?');
alert(`Boas-vindas, ${nome}!`);

// Dia da semana
diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana === 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana === 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// Número positivo ou negativo
numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}

// Pergunta sobre qual número pensado
numero = prompt("Qual é o número que estou pensando?");
alert(`Errou feio, errou rude!`);


// Sistema de pontuação 
pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

