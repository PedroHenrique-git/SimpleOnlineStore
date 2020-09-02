<?php

require_once('../Conexao.php');
$conexao = new Conexao('localhost','lojavirtual','root','');
$conexao->iniciarConexao();

$dados = json_decode($_POST['dados']);

$sql = 'UPDATE produtos SET nome=:nome, imagem=:imagem, preco=:preco WHERE id=:id';

try{
    $stmt = $conexao->getConexao()->prepare($sql);
    $stmt->bindValue(':id',$dados->id);
    $stmt->bindValue(':nome',$dados->nome);
    $stmt->bindValue(':imagem',$dados->imagem);
    $stmt->bindValue(':preco',$dados->preco);
    $stmt->execute();
    $resposta['mensagem'] = 'Produto alterado com sucesso';
}catch(PDOException $e){
    $resposta['mensagem'] = 'Erro ao alterar produto';
    throw new Exception('Erro ao alterar produto'.$e->getMessage());   
}

echo json_encode($resposta);

?>