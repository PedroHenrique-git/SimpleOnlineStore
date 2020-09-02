<?php

require_once('../Conexao.php');
require_once('Produto.php');

$conexao = new Conexao('localhost','lojavirtual','root','');
$conexao->iniciarConexao();

$sql = 'INSERT INTO produtos(nome,imagem,preco) values(:nome,:imagem,:preco)';

$dados = json_decode($_POST['dados']);

$produto = new Produto();
$produto->setNome($dados->nome);
$produto->setImagem($dados->imagem);
$produto->setPreco($dados->preco);


try{
    $stmt = $conexao->getConexao()->prepare($sql);
    $stmt->bindValue(':nome',$produto->getNome());
    $stmt->bindValue(':imagem',$produto->getImagem());
    $stmt->bindValue(':preco',$produto->getPreco());
    $stmt->execute();
    $resposta['mensagem'] = 'Produto cadastrado com sucesso';
}catch(PDOException $e){
    $resposta['mensagem'] = 'Erro ao cadastrar produto';
    throw new Exception('Erro ao cadastrar produto'.$e->getMessage());
}

echo json_encode($resposta);

?>
