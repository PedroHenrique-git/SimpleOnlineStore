$(document).ready(function(){

    if(localStorage.getItem('usuario') === null){
        window.location.href = '././index.html';
    }

    const dadosLocal = JSON.parse(localStorage.getItem('usuario'));

    if(dadosLocal.adm === 's'){
        $('.admin-opcoes').css('display','block');
    }

    function logout(){
        
        $.ajax({
            type: "post",
            url: "././server/model/user/logoutUsuario.php",
            dataType: "json",
            success: function (resposta) {
                alert(resposta.mensagem);
                if(resposta.mensagem === 'Sessão encerrada'){
                    localStorage.removeItem('usuario');
                    window.location.href = '././index.html';
                }   
            },
            error: function(resposta){
                alert(resposta.mensagem);
            }
        });
    }

    $('#usuario').text(`usuário: ${dadosLocal.login}`);

    $('#logout').click(function(){
        if(confirm('Deseja realmente sair ?')){
            logout();
        }
    });

});