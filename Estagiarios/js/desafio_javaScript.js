function Enviar() {
 
    var nome = document.getElementById("nomeid");
 
    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
 
}
function validaForm(frm) {
    /*
    o parâmetro frm desta função significa: this.form,
    pois a chamada da função - validaForm(this) foi
    definida na tag form.
    */
    //Verifica se o campo nome foi preenchido e
    //contém no mínimo três caracteres.
    if(frm.nome.value == " || form.nome.value == null || frm.nome.value.lenght < 3"){
        //É mostrado um alerta, caso o campo esteja vazio.
        alert("Por favor, indique o seu nome.");
        //Foi definido um focus no campo.
        frm.nome.focus();
        //o form não é enviado.
        return false;
    }
    //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
    if(frm.email.value.indexOf("@") == -1 ||
      frm.email.valueOf.indexOf(".") == -1 ||
      frm.email.value == "" ||
      frm.email.value == null) {
        alert("Por favor, indique um e-mail válido.");
        frm.email.focus();
        return false;
    }
}
// JavaScript Document

//adiciona mascara de cep
function MascaraCep(cep){
            if(mascaraInteiro(cep)==false){
            event.returnValue = false;
    }       
    return formataCampo(cep, '00.000-000', event);
}

//adiciona mascara de data
function MascaraData(data){
    if(mascaraInteiro(data)==false){
            event.returnValue = false;
    }       
    return formataCampo(data, '00/00/0000', event);
}

//adiciona mascara ao telefone
function MascaraTelefone(tel){  
    if(mascaraInteiro(tel)==false){
            event.returnValue = false;
    }       
    return formataCampo(tel, '(00) 0000-0000', event);
}

function mascaramutua(o,f){
    v_obj=o
    v_fun=f
    setTimeout('execmascara()',1)
}

function executamascaramutua(){
    v_obj.value=v_fun(v_obj.value)
}

function cpfcnpj(v){

    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"")

    if (v.length <= 14) { //CPF

        //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")

        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d)/,"$1.$2")

        //Coloca um hífen entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

    } else { //CNPJ

        //Coloca ponto entre o segundo e o terceiro dígitos
        v=v.replace(/^(\d{2})(\d)/,"$1.$2")

        //Coloca ponto entre o quinto e o sexto dígitos
        v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")

        //Coloca uma barra entre o oitavo e o nono dígitos
        v=v.replace(/\.(\d{3})(\d)/,".$1/$2")

        //Coloca um hífen depois do bloco de quatro dígitos
        v=v.replace(/(\d{4})(\d)/,"$1-$2")

    }

    return v
}

//valida telefone
function ValidaTelefone(tel){
    exp = /\(\d{2}\)\ \d{4}\-\d{4}/
    if(!exp.test(tel.value))
            alert('Numero de Telefone Invalido!');
}

//valida CEP
function ValidaCep(cep){
    exp = /\d{2}\.\d{3}\-\d{3}/
    if(!exp.test(cep.value))
            alert('Numero de Cep Invalido!');               
}

//valida data
function ValidaData(data){
    exp = /\d{2}\/\d{2}\/\d{4}/
    if(!exp.test(data.value))
            alert('Data Invalida!');                        
}

//valida numero inteiro com mascara
function mascaraInteiro(){
    if (event.keyCode < 48 || event.keyCode > 57){
            event.returnValue = false;
            return false;
    }
    return true;
}

//formata de forma generica os campos
function formataCampo(campo, Mascara, evento) { 
    var boleanoMascara; 

    var Digitato = evento.keyCode;
    exp = /\-|\.|\/|\(|\)| /g
    campoSoNumeros = campo.value.toString().replace( exp, "" ); 

    var posicaoCampo = 0;    
    var NovoValorCampo="";
    var TamanhoMascara = campoSoNumeros.length;; 

    if (Digitato != 8) { // backspace 
            for(i=0; i<= TamanhoMascara; i++) { 
                    boleanoMascara  = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
                                                            || (Mascara.charAt(i) == "/")) 
                    boleanoMascara  = boleanoMascara || ((Mascara.charAt(i) == "(") 
                                                            || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " ")) 
                    if (boleanoMascara) { 
                            NovoValorCampo += Mascara.charAt(i); 
                              TamanhoMascara++;
                    }else { 
                            NovoValorCampo += campoSoNumeros.charAt(posicaoCampo); 
                            posicaoCampo++; 
                      }              
              }      
            campo.value = NovoValorCampo;
              return true; 
    }else { 
            return true; 
    }
}
function editJquery{
    var itens = $("#lista li").detach();
}
