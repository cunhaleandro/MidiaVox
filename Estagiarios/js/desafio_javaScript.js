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

// mascara para telefone
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("executamascara()",1)
}

function executamascara(){
v_obj.value=v_fun(v_obj.value)
}

function mascaratelefone(v){
    v=v.replace(/D/g,"");                 //Remove tudo o que não é dígito
    v=v.replace(/^(d{2})(d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(d)(d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
    }

function validatePhone (telefone) {
    var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$'); 
    if (regex.test(telefone)) { 
        console.log("Válido");
    }else{
        console.log("Inválido");
    }
    return regex.test(telefone);
    }
window.onload = function(){
    id('telefone').onkeypress = function(){
        mascara( this, mascaratelefone );
    }
    
//adiciona mascara ao RG
function MascaraRG(rg){
    if((rg)==false){
        event.returnValue = false;
    }       
    return formataCampo(rg, '00.000.000-0', event);
    }
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
//valida CEP
function ValidaCep(cep){
    exp = /\d{2}\.\d{3}\-\d{3}/
    if(!exp.test(cep.value))
    alert('Numero de Cep Invalido!');               
    }
}
