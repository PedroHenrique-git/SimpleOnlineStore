$(document).ready(function(){

    function cadastrarUsuario(login,senha){
        let dados = {};
        dados.login = login;
        dados.senha = senha;
        $.ajax({
            type: "post",
            url: "././server/model/user/inserirUsuario.php",
            data: {dados: JSON.stringify(dados)},
            dataType: "json",
            success: function (response) {
                alert(response.mensagem);
                if(response.mensagem === 'Usuário cadastrado'){
                    window.location.href = '././index.html';                    
                }               
            },
            error: function(response){
                alert(response.mensagem); 
            }
        });
    }

    const spanCadastro = $('.cadastro');
    spanCadastro.click(function(){
        $('.login-container').load('assets/views/inserirUsuario.html');
    });

    $(document).on('click',function(event){
        if($(event.target).hasClass('cadastrarUsuario')){
            
            const login = $('#login').val();
            const senha = $('#senha').val();

            if(login !== '' && senha !== ''){
                cadastrarUsuario(login,senha);
            }else{
                alert('Verifique se todos os campos estão preenchidos');
            }
        }    
    });

});