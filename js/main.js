// Login

function logar(pass){
	var user = document.getElementById('userLog');
	var pass = document.getElementById('userPass');

	if(user.value != "" && pass.value != ""){
        alert("Obrigado sr(a) " + user.value +  "os seus dados foram encaminhados com sucesso");
    }
    else if(user.value == "" && pass.value == "" || user.value != "" && pass.value == "" || user.value == "" && pass.value != ""){
    	alert("Usuário ou senha inválidos, tente novamente");
    }
}

// Cadastro

function registrar(register){
	var name = document.getElementById('name');
	var data = document.getElementById('data');
	var rg = document.getElementById('rg');
	var cpf = document.getElementById('cpf');
	var rua = document.getElementById('rua');
	var num = document.getElementById('numero');
	var bairro = document.getElementById('bairro');
	var est = document.getElementById('estado');
	var cidade = document.getElementById('cidade');
	var cep = document.getElementById('cep');
	var login = document.getElementById('usuario');
	var email = document.getElementById('email');
	var senha = document.getElementById('senha');
	var confirmacao = document.getElementById('senhaConfirm');

	if(senha.value != senhaConfirm.value){
		alert("Senha e confirmação devem ser iguais");
	}

	if(name.value != "" && email.value != ""){
    	alert("Cadastro realizado com sucesso!");
    }

	if(name.value == "" ||rg.value == "" || cpf.value == "" || login.value == "" || senha.value == "" || est.value == ""){
        alert("Dados inválidos");
    }
    else if(num.value == "" || bairro.value == "" || cidade.value == "" || cep.value == "" || email.value == "" || data.value == ""){
        alert("Dados inválidos");
    }
}

// Doar

function doar(pet){
	var foto = document.getElementById('foto');
	var etariedade = document.getElementById('faixaEtaria');
	var feminino = document.getElementById('femin');
	var masculino = document.getElementById('masc');
	var idade = document.getElementById('idade');
	var descricao = document.getElementById('desc');

	if(etariedade.value != "" && feminino.value != "" && masculino.value != "" && idade.value != "" && descricao.value != ""){
		alert("Dados enviados com sucesso!");
	}
	else if(etariedade.value == "" || feminino.value == "" || masculino.value == "" || idade.value == "" || descricao.value == ""){
		alert("Dados invalidos.")
	}
}
