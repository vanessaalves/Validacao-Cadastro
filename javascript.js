			function validaCampos() {
				var validaName = document.formularioCadastro.nome.value;
				if(validaName == '' || validaName.length < 8) {
					alert('Nome inválido, por favor digite o nome completo.');
					formularioCadastro.nome.focus();
					return false;
				}

				if (vercpf(document.formularioCadastro.cpf.value)) {
				} 
				else {
					alert('CPF inválido');
					formularioCadastro.cpf.focus();
					return false;
				}
		  
		  		var validaEmail = document.formularioCadastro.email.value;
				usuario = validaEmail.substring(0 ,validaEmail.indexOf('@'));
				dominio = validaEmail.substring(validaEmail.indexOf('@')+ 1, validaEmail.length);
				if ((usuario.length >=1) &&
				    (dominio.length >=3) && 
				    (usuario.search('@')==-1) && 
				    (dominio.search('@')==-1) &&
				    (usuario.search(' ')==-1) && 
				    (dominio.search(' ')==-1) &&
				    (dominio.search('.')!=-1) &&      
				    (dominio.indexOf('.') >=1)&& 
				    (dominio.lastIndexOf('.') < dominio.length - 1)) {}

				else{
					alert('E-mail invalido');
					formularioCadastro.email.focus();
					return false;

				}

 				var senhaValor = document.formularioCadastro.senha.value;
 				var confimacaoValor =document.formularioCadastro.senhaConfirmacao.value;
				if(senhaValor != '' && senhaValor == confimacaoValor) {
	      			if(senhaValor.length < 8) {
				        alert('Sua senha precisa ter 8 caracteres.');
				        formularioCadastro.senha.focus();
				        return false;
	      			}
	      
			      	re = /(?=(.*[0-9]){2,})/;
				    if(!re.test(senhaValor)) {
					   alert('Sua senha precisa ter pelo menos 2 caracteres númericos.');
					   formularioCadastro.senha.focus();
					   return false;
			      	}
				    re = /[ !'#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;  
				    if(!re.test(senhaValor)){
				      	alert('Sua senha precisa ter pelo menos 1 caracter especial');
				      	formularioCadastro.senha.focus();
				      	return false;
				    }
			      	re =/(?=(.*[A-Z]){2,})/;
			      	if(!re.test(senhaValor)) {
				        alert('Sua senha precisa ter 2 letras maiúsculas.');
				        formularioCadastro.senha.focus();
				        return false;
			      	} 
		      	}
		      	else {
			      alert('Verifique se você digitou e confirmou sua senha. Obs: A senha deve ter 8 digítos, sendo 2 letras maiúsculas, 2 números e 1 caracter especial');
			      formularioCadastro.senha.focus();
			      return false;
			    }
			    alert('Seu cadastro foi realizado com sucesso');
    			return true;
  				} 	
	
			function vercpf (cpf) {
				if (cpf.length != 11 ||
				cpf == '00000000000' ||
				cpf == '11111111111' ||
				cpf == '22222222222' ||
				cpf == '33333333333' ||
				cpf == '44444444444' ||
				cpf == '55555555555' ||
				cpf == '66666666666' ||
			 	cpf == '77777777777' ||
			  	cpf == '88888888888' ||
			  	cpf == '99999999999')
			 
				return false;
				 
				add = 0;
				 
				for (i=0; i < 9; i ++)
				add += parseInt(cpf.charAt(i)) * (10 - i);
				rev = 11 - (add % 11);
				if (rev == 10 || rev == 11)
				rev = 0;
				if (rev != parseInt(cpf.charAt(9)))
				return false;
				add = 0;
				for (i = 0; i < 10; i ++)
				add += parseInt(cpf.charAt(i)) * (11 - i);
				rev = 11 - (add % 11);
				if (rev == 10 || rev == 11)
				rev = 0;
				if (rev != parseInt(cpf.charAt(10)))
				return false;
				return true;
			}
			function SomenteNumero(e){
		    var tecla=(window.event)?event.keyCode:e.which;   
		    if((tecla>47 && tecla<58)) return true;
		    else{
		    	if (tecla==8 || tecla==0) return true;
			else  return false;
		    	}
			}