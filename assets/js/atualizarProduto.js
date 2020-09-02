$(document).ready(function(){

    function carregaDadosDoProduto(id){
        let dados = {};
        dados.id = id;
        $.ajax({
            type: "post",
            url: "././server/model/products/obtemDados.php",
            data: {dados: JSON.stringify(dados)},
            dataType: "json",
            success: function (response) {

                let nome = $('#nome');
                let imagem = $('#imagem');
                let preco = $('#preco'); 
                
                nome.val(response.data[0].nome);
                imagem.val(response.data[0].imagem);
                preco.val(response.data[0].preco);
            },
            error: function (response) {
                alert(response.mensagem);   
            }
        });
    }

    function atualizarProduto(id,nome,imagem,preco){
        let dados = {};
        dados.id = id;
        dados.nome = nome;
        dados.imagem = imagem;
        dados.preco = preco;
        $.ajax({
            type: "post",
            url: "././server/model/products/atualizarProduto.php",
            data: {dados: JSON.stringify(dados)},
            dataType: "json",
            success: function (response) {
                alert(response.mensagem);    
            },
            error: function (response) {
                alert(response.mensagem);    
            }
        });
    }

    let inputHidden = $('<input id="idProduto" type="hidden"/>');

    $(document).click(function(event){

        if($(event.target).attr('button') === 'update')
        {
            $('.modal').css('visibility','visible');

            let id = $(event.target).attr('id');
            inputHidden.val(id);

            $('.modal').append(inputHidden);

            $('.cadastrarProduto').remove();

            if(!($('.atualizarProduto').length)){
                $('.modal').append(
                    $('<button></button>').addClass('atualizarProduto').text('Atualizar produto')
                );
            }

            carregaDadosDoProduto(id);            
        }

    });

    $(document).click(function(event){
        if($(event.target).hasClass('atualizarProduto')){

            let id = $('#idProduto');
            let nome = $('#nome');
            let imagem = $('#imagem');
            let preco = $('#preco'); 

            atualizarProduto(id.val(),nome.val(),imagem.val(),preco.val());

            $('section').html('');
            listaProdutos();
        }
    });

});