function Prosseguir() {
    var nomeid = document.getElementById("nomeid");

    if (validaForm() == true)
    {
        alert('Obrigado sr(a) '+nomeid.value +' os seus dados foram encaminhados com sucesso');
    }
}
//Valida nº instalação
function validaNumero(numeroInstalacao){
    console.log(numeroInstalacao.value)
    var tecla=(window.event)?event.keyCode:e.which;   
    if(tecla>47 || tecla<58 ||tecla==8 || tecla==0) 
        return true;
   
	else  return false;
}

//Valida nome
function validaNome(nome){
    console.log(nome.value)
    if(form.nome.value == "" || form.nome.value == null || frm.nome.value.lenght < 3)
    return false;
}
//valida email
function validaEmail(email){
    console.log(email.value)
    if(form.email.value.indexOf("@") == -1 ||
    form.email.valueOf.indexOf(".") == -1 ||
    form.email.value == "" ||
    form.email.value =='/'||
    form.email.value == null) 
    return false;
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
function mascaraFoneFixo(foneFixo){
    console.log(foneFixo.value)
    if(foneFixo.value.length == 0)
        foneFixo.value += '(' ; 
    if(foneFixo.value.length == 3)
        foneFixo.value += ')'; 
    if(foneFixo.value.length == 8 )
        foneFixo.value += '-';
}
//mascara de data
function mascaraData(dataNascimento){
    console.log(dataNascimento.value)
    if(dataNascimento.value.length == 2||dataNascimento.value.length ==5)
        dataNascimento.value +='/'
}
/*
//valida data de nascimento
function validaData(dataNascimento){
    console.log(dataNascimento)
    exp = /\d{2}\/\d{2}\/\d{4}/
    if(!exp.test(dataNascimento.value))
    var partes = dataNascimento.value.split("/");
    var dia = parseInt(partes[0,1], 10);
    var mes = parseInt(partes[3,4], 10);
    var ano = parseInt(partes[6,7,8,9], 10);

    // Verifica os intervalos de mês e ano
    if(ano < 1900 || ano> 3000 || mes == 0 || mes > 12)
        return false;
    var tamanhoMes = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    // Ajusta para os anos bissextos
    if(ano % 400 == 0 || (ano % 100 != 0 && ano % 4 == 0))
        tamanhoMes[1] = 29;
    // Verifica o intervalo do dia
    return dia > 0 && dia <= tamanhoMes[mes - 1];
    
}*/

//Mascara CPF e Cnpj
function mascaracpfcnpj(cpfCnpj){
    console.log(cpfCnpj.value)
    //Remove tudo o que não é dígito
    cpfCnpj=cpfCnpj.replace(/\D/g,"")
    
    if (cpfCnpj.length <= 14) { //CPF
    
    //Coloca um ponto entre o terceiro e o quarto dígitos
    cpfCnpj=cpfCnpj.replace(/(\d{3})(\d)/,"$1.$2")
    
    //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    cpfCnpj=cpfCnpj.replace(/(\d{3})(\d)/,"$1.$2")
    
    //Coloca um hífen entre o terceiro e o quarto dígitos
    cpfCnpj=cpfCnpj.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    
    } else { //CNPJ
    
    //Coloca ponto entre o segundo e o terceiro dígitos
    cpfCnpj=cpfCnpj.replace(/^(\d{2})(\d)/,"$1.$2")
    
    //Coloca ponto entre o quinto e o sexto dígitos
    cpfCnpj=cpfCnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
    
    //Coloca uma barra entre o oitavo e o nono dígitos
    cpfCnpj=cpfCnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
    
    //Coloca um hífen depois do bloco de quatro dígitos
    cpfCnpj=cpfCnpj.replace(/(\d{4})(\d)/,"$1-$2")
    
    }
    
}
//
function validaForm(){
    var numeroInsta = do
    var nome = document.getElementById("nomeid");
    if (validaNome(nome)==false){
    alert("Por favor, indique o seu nome.");
    form.nome.focus();
    return false
    }
    var email = document.getElementById("emailid")
    if (validaEmail(email)==false){
        alert("Por favor, indique um e-mail válido.");
        form.email.focus();
        return false
    }
    var data = document.getElementById("dataNascimentoid");
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
    var cpfCnpj = document.getElementById(cpfCnpjid);
    alert("Por favor, indique um CPF ou CNPJ válido")
    if(validaCpfCnpj == false){

    }
    return true;
}


