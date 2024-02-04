var textoCriptografado = '';
var textoDescriptografado = '';
var verificador = false;
var acentos = ['á', 'é', 'í', 'ó', 'ú', 'à', 'è', 'ì', 'ò', 'ù', 'â', 'ê', 'î', 'ô', 'û', 'ã', 'õ', 'ü'];
var contador = 0


function criptografar(){
    var textoDoChat = document.getElementById("meuTextArea").value;
    for (contador = 0; contador < textoDoChat.length; contador++) {
        if (acentos.includes(textoDoChat[contador])) {
            verificador = true;
            break;
        }
    }
    if (verificador === false){
     
        textoDescriptografado = textoDoChat;

        var trocas = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
        };

        function realizarSubs(i) {
            return trocas[i] || i;
        }

        textoCriptografado = textoDoChat.replace(/[aeiou]/g, realizarSubs);

        document.getElementById("texto").textContent = textoCriptografado;

            
        }else{
            textoCriptografado = "Não foi possível criptografar a sua mensagem. Tente novamente sem acentos."
            document.getElementById("texto").textContent = textoCriptografado;
            verificador = false
        }
    
};



function descriptografar(){
    var textoDoChat = document.getElementById("meuTextArea").value;

    var textoDescrip = textoDoChat.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("texto").innerHTML = textoDescrip;

     verificador = false;

}



function copiarTexto() {

    var textoDoChat = document.getElementById("meuTextArea").value;
    if (textoDoChat !== "") {
        var temporario = document.createElement("input");
        temporario.value = textoCriptografado;
        document.body.appendChild(temporario);
        temporario.select();
        document.execCommand("copy");
        document.body.removeChild(temporario);
        alert("Texto copiado para a área de transferência: " + textoCriptografado);

    } else {
        alert("Nenhum texto para copiar.");
    }
};
