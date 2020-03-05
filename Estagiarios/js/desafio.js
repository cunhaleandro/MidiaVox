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
function MascaraData(dataNascimento){
    console.log(dataNascimento.value)
    if(dataNascimento.value.length == 2)
        dataNascimento.value +='/'
}
function validaData(dataNascimento){
    console.log(dataNascimento)
    exp = /\d{2}\/\d{2}\/\d{4}/
    if(!exp.test(data.value))
    return false
    else{
        return true
    }
}

function validaForm(){
    //alert CEP
    var cep = document.getElementById("cepid");
    if (validaCep(cep) == false){
        alert("Preencha campo: CEP !")
        form.cep.focus();
        return false;
    }
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
    return true;
}


