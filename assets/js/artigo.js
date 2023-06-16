var conteudo = [];
var noticia = [];


function publicar(){
    var entrada = document.getElementById("inp1").value;
    var entrada1 = document.getElementById("inp2").value;
    var entrada2 = document.getElementById("inp3").value;
    var entrada3 = document.getElementById("inp4").value;
    var entrada4 = document.getElementById("inp5").value;


    noticia = [entrada, entrada1, entrada2, entrada3, entrada4];


    if(entrada == ""|| entrada1 == ""|| entrada2 == ""|| entrada3 == ""|| entrada4 == ""){
        console.log("entrou");
        document.getElementById("result1").innerHTML = "erro";
        }
    else{
        document.getElementById("result1").innerHTML = "";

    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = "";
    document.getElementById("inp3").value = "";
    document.getElementById("inp4").value = "";
    document.getElementById("inp5").value = "";

    conteudo.push(noticia);
    console.log(conteudo);

    var contArr= "";
    let i = 0;
    for( i = 0; i< conteudo.length; i++){
        var item = conteudo[i];
        contArr += `<p class = teste> Titulo: ${item[0]} </p> `;
        contArr += `<p class = teste> Resumo: ${item[1]} </p> `;
        contArr += `<p class = teste> Categoria: ${item[2]} </p> `;
        contArr += `<p class = teste> Autor: ${item[3]} </p> `;
        contArr += `<p class = teste> Data: ${item[4].split("-").reverse('').join('/')} </p> `;
        contArr += `<button class= "button" id="bt" onclick="remover(${i})"> Remover </button>`;
        contArr += `<button class= "button" id="bt" onclick="editar()"> Editar </button>`;
    
    }

    document.getElementById("result").innerHTML = contArr;
}
}


function remover(i) {
    conteudo.splice([i],1);
    document.getElementsByClassName("teste").innerHTML = ""
    console.log(conteudo)
    }
