$(document).ready(function(){

    function excluirProduto(id){
        let dados = {};
        dados.id = id;
        $.ajax({
            type: "post",
            url: "././server/model/products/apagarProduto.php",
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


    $(document).click(function(event){
        if($(event.target).attr('button') === 'delete'){
            let id = $(event.target).attr('id');
            if(confirm('Deseja realmente exluir este produto ?')){
                excluirProduto(id);
                $('section').html('');
                listaProdutos();  
            }            
        }
    });

});