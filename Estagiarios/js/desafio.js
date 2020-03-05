function Prosseguir() {
    var nomeid = document.getElementById("nomeid");

    if (validaForm() == true)
    {
        alert('Obrigado sr(a) '+nomeid.value +' os seus dados foram encaminhados com sucesso');
    }

 
}
//mascara de cep
function mascaraCep(cep){
    console.log(cep.value)
    if(cep.value.length == 5)
        cep.value += '-'
}
//valida CEP
function validaCep(cep){
    console.log(cep.value)
    exp = /\d{5}\-\d{3}/
    if(!exp.test(cep.value))
        return false
    else{
        return true
    }
                          
}
//mascara de data
function mascaraData(dataNascimento){
    console.log(dataNascimento.value)
    if(dataNascimento.value.length == 2||dataNascimento.value.length ==5)
        dataNascimento.value +='/'
}
function validaData(dataNascimento){
    console.log(dataNascimento)
    exp = /\d{2}\/\d{2}\/\d{4}/
    if(!exp.test(dataNascimento.value))
    var partes = dataNascimento.value.split("/");
    var dia = parseInt(partes[0,1], 10);
    var mes = parseInt(partes[2,3], 10);
    var ano = parseInt(partes[4,5,6,7], 10);

    // Verifica os intervalos de mês e ano
    if(ano < 1900 || ano> 3000 || mes == 0 || mes > 12)
        return false;
    var tamanhoMes = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    // Ajusta para os anos bissextos
    if(ano % 400 == 0 || (ano % 100 != 0 && ano % 4 == 0))
        tamanhoMes[1] = 29;
    // Verifica o intervalo do dia
    return dia > 0 && dia <= tamanhoMes[mes - 1];
    
}


function validaForm(){
    
    if(form.nome.value == " || form.nome.value == null || frm.nome.value.lenght < 3"){
        alert("Por favor, indique o seu nome.");
        form.nome.focus();
        return false;
    }
    //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
    if(form.email.value.indexOf("@") == -1 ||
      form.email.valueOf.indexOf(".") == -1 ||
      form.email.value == "" ||
      form.email.value == null) {
        alert("Por favor, indique um e-mail válido.");
        form.email.focus();
        return false;
    }
    //alert data
    var data =document.getElementById("dataNascimentoid");
    if(validaData(data)==false){
        alert("Por favor, indique a sua data de nascimento.")
        form.dataNascimento.focus();
        return false
    }
    //alert CEP
    var cep = document.getElementById("cepid");
    if (validaCep(cep) == false){
        alert("Por favor, indique o seu CEP.")
        form.cep.focus();
        return false;
    }
    return true;
}


/*
//adiciona mascara de cep
function MascaraCep(cep){
    if(MascaraCep(cep)==false){
    event.returnValue = false;
}       
return formataCampo(cep, '00.000-000', event);
};

//adiciona mascara de data
function MascaraData(data){
if(mascaraInteiro(data)==false){
    event.returnValue = false;
}       
return formataCampo(data, '00/00/0000', event);
};

//adiciona mascara ao telefone
function MascaraTelefone(foneCelular){  
if(mascaraInteiro(foneCelular)==false){
    event.returnValue = false;
}       
return formataCampo(foneCelular, '(00)00000-0000', event);
};

function MascaraTelefone(foneFixo){  
if(mascaraInteiro(foneFixo)==false){
    event.returnValue = false;
}       
return formataCampo(foneFixo, '(00)0000-0000', event);
};


function mascaramutua(o,f){
v_obj=o
v_fun=f
setTimeout('execmascara()',1)
};

function executamascaramutua(){
v_obj.value=v_fun(v_obj.value)
};

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
//Valida Form
function validaForm(form) {
if(form.nome.value == " || form.nome.value == null || frm.nome.value.lenght < 3"){
alert("Por favor, indique o seu nome.");
//Foi definido um focus no campo.
form.nome.focus();
//o form não é enviado.
return false;
}
//o campo e-mail precisa de conter: "@", "." e não pode estar vazio
if(form.email.value.indexOf("@") == -1 ||
form.email.valueOf.indexOf(".") == -1 ||
form.email.value == "" ||
form.email.value == null) {
alert("Por favor, indique um e-mail válido.");
form.email.focus();
return false;
}
};

//valida telefone
function ValidaTelefone(fonefixo){
exp = /\(\d{2}\)\ \d{4}\-\d{4}/
if(!exp.test(fonefixo.value))
    alert('Numero de Telefone Invalido!');
};
function ValidaTelefoneCelular(fonecelular){
exp = /\(\d{2}\)\ \d{5}\-\d{4}/
if(!exp.test(fonecelular.value))
    alert('Numero de Telefone Invalido!');
};

//valida CEP
function ValidaCep(cep){
exp = /\d{2}\.\d{3}\-\d{3}/
if(!exp.test(cep.value))
    alert('Numero de Cep Invalido!');               
};

//valida data
function ValidaData(data){
exp = /\d{2}\/\d{2}\/\d{4}/
if(!exp.test(data.value))
    alert('Data Invalida!');                        
};

//valida numero inteiro com mascara
function validaInteiro(){
if (event.keyCode < 48 || event.keyCode > 57){
    event.returnValue = false;
    return false;
}
return true;
};

// Valida data
function validaData(dataNascimento)
{
if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dataNascimento))
return false;
var partes = dataNascimento.split("/");
var dia = parseInt(partes[1], 10);
var mes = parseInt(partes[0], 10);
var ano = parseInt(partes[2], 10);

// Verifica os intervalos de mês e ano
if(ano < 1900 || ano> 3000 || mes == 0 || mes > 12)
return false;

var tamanhoMes = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

// Ajusta para os anos bissextos
if(ano % 400 == 0 || (ano % 100 != 0 && ano % 4 == 0))
tamanhoMes[1] = 29;

// Verifica o intervalo do dia
return dia > 0 && dia <= tamanhoMes[mes - 1];
};

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

};*/