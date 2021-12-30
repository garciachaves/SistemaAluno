let numeroDeAlunos = 10;
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    //const element = array[index]; //não iremos utilizar esta linha do "for" porque não temos uma array
    //console.log(contador)
    if(contador == 0) {
        console.log('O número atual é zero')
    }else if(contador % 2 == 0) {
        console.log('O número ' + contador + ' é par') //com aspas simples ou dupla (concatenacao)
    }else{
        console.log(`O número ${contador} é impar`) //com crase (interpolacao)
    }
}
// let index => quantidade de variáveis, é a variável contadora
// index < array.length => condição de repetição, enquanto essa codição é verdadeira ele repete
// index++ => incremento. o "++" siginifica que vai incrementar +1
// const element => auxilia quando queremos indicar qual a posição do array iremos começar a busca dentro do array.

