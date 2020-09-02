function listaProdutos(){
    $.ajax({
        type: "get",
        url: "././server/model/products/listarProdutos.php",
        dataType: "json",
        success: function (response) {
            $.each(response.data,(index,produto) =>{
                renderizarCardProduto(produto);
            });
        },
        error: function(response){
            alert(response.mensagem);
        }
    }).done(function(){
        $('.actions-buttons').hide();

        const dadosLocal = JSON.parse(localStorage.getItem('usuario'));

        if(dadosLocal.adm === 's'){
            $('.actions-buttons').show();
        }
        
    });
}

function renderizarCardProduto(produto){

    const section = $('.produtos');
    const div = $('<div></div>').addClass('product-card');
    const img = $('<img/>');
    const h1Nome = $('<h1></h1>');
    const hr = $('<hr/>');
    const pPreco = $('<p></p>');
    const button = $('<button></button>').text('Adicionar ao carrinho').addClass('button-add'); 
    const iDelete = $(`<i id=${produto.id} button="delete" class="icofont-ui-delete"></i>`);
    const iUpdate = $(`<i id=${produto.id} button="update" class="icofont-refresh"></i>`);
    
    const divButton = $('<div></div>').addClass('actions-buttons');
    divButton.append(iDelete);
    divButton.append(iUpdate);


    img.attr('src',produto.imagem);
    h1Nome.text(produto.nome);
    pPreco.text(`R$ ${produto.preco}`);

    div.append(h1Nome);
    div.append(hr);
    div.append(img);
    div.append(pPreco);
    div.append(button);
    div.append(divButton);

    section.append(div);

}

$(document).ready(function(){

    let val = 0;
    let spanQtd = $('#qtdProd');
    $(document).click((event) =>{
        if($(event.target).hasClass("button-add")){
            val += 1;
            spanQtd.html(val);
        }
    });

    listaProdutos();

    /*
    listaProdutos();

    setInterval(() =>{
        $('section').html('');
        listaProdutos();
    },5000);
    */
});