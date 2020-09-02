$(document).ready(function(){

    function cadastrarProduto(nome,imagem,preco){
        let dados = {};
        dados.nome = nome;
        dados.imagem = imagem;
        dados.preco = preco;
        $.ajax({
            type: "post",
            url: "././server/model/products/inserirProduto.php",
            data: {dados: JSON.stringify(dados)},
            dataType: "json",
            success: function (response) {
                alert(response.mensagem);
            },
            error: function(response){
                alert(response.mensagem);
            }
        });    
    }


    $('.btn-inserir').click(function(){

        $('#nome').val('');
        $('#imagem').val('');
        $('#preco').val('');

        $('.modal').css('visibility','visible');
        $('.atualizarProduto').remove();

        if(!($('.cadastrarProduto').length)){
            $('.modal').append(
                $('<button></button>').addClass('cadastrarProduto').text('Cadastrar Produto')
            );
        }

    });

    $('i').click(function(){
        $('.modal').css('visibility','hidden');
    });

    $(document).click(function(event){
        if($(event.target).hasClass('cadastrarProduto')){

            const nome = $('#nome').val();
            const imagem = $('#imagem').val();
            const preco = $('#preco').val();

            cadastrarProduto(nome,imagem,preco);
            
            $('section').html('');
            listaProdutos();
        }
    });

});