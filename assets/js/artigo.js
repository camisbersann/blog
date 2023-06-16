var conteudo = [];
var noticia = [];


function addItem() {
    var titulo = document.getElementById("inp1").value;
    var resumo = document.getElementById("inp2").value;
    var categoria = document.getElementById("inp3").value;
    var autor = document.getElementById("inp4").value;
    var data = document.getElementById("inp5").value;

    noticia = [titulo, resumo, categoria, autor, data];

    if (titulo == "" || resumo == "" || categoria == "" || autor == "" || data == "") {
        console.log("entrou");
        document.getElementById("result1").innerHTML = "erro";
    }
    else {
        document.getElementById("result1").innerHTML = "";

        document.getElementById("inp1").value = "";
        document.getElementById("inp2").value = "";
        document.getElementById("inp3").value = "";
        document.getElementById("inp4").value = "";
        document.getElementById("inp5").value = "";

        conteudo.push(noticia);
        console.log(conteudo);

        atualizaTela();

    }
}

function atualizaTela() {
    var msg = "";
    for (let i = 0; i < conteudo.length; i++) {
        var item = conteudo[i];
        msg += `
       <div class = "itemCard">
       <div class = "internCard">
       <p class = teste> Titulo: ${item[0]} </p> 
       <p class = teste> Resumo: ${item[1]} </p>
       <p class = teste> Categoria: ${item[2]} </p> 
       <p class = teste> Autor: ${item[3]} </p>
       <p class = teste> Data: ${item[4].split("-").reverse('').join('/')} </p> 
       <button class= "button" id="bt" onclick="remover(${i})"> Remover </button>
       </div>
       </div>
        `
    }
    document.getElementById("result").innerHTML = msg;
}


function remover(index) {
    conteudo.splice(index, 1);
    atualizaTela();
}
