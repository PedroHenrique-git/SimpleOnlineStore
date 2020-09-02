$(document).ready(function () {  
    
    let btnLogar = $('button');

    function loginUsuario(login,senha){
        let dadosLogin = {};
        dadosLogin.login = login;
        dadosLogin.senha = senha;
        $.ajax({
            type: "post",
            url: "././server/model/user/loginUsuario.php",
            data: {dadosLogin: JSON.stringify(dadosLogin)},
            dataType: "json",
            success: function(resposta){
                alert(resposta.mensagem);
                if(resposta.mensagem === 'Login realizado'){
                    let usuario = {};
                    usuario.login = login;
                    usuario.adm = resposta.adm; 
                    localStorage.setItem('usuario',JSON.stringify(usuario));
                    window.location.href = '././principal.html';
                }
            },
            error:function(resposta){
                alert(resposta.mensagem);
            }
        })
    }

    btnLogar.click(function(){
        const login = $('#login').val();
        const senha = $('#senha').val();
        loginUsuario(login,senha);
    });

});