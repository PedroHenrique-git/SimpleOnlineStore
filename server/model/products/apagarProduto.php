<?php

require_once('../Conexao.php');
$conexao = new Conexao('localhost','lojavirtual','root','');
$conexao->iniciarConexao();

$dados = json_decode($_POST['dados']);

$sql = 'DELETE FROM produtos where id=:id'; 

try{
    $stmt = $conexao->getConexao()->prepare($sql);
    $stmt->bindValue(':id',$dados->id);
    $stmt->execute();
    $resposta['mensagem'] = 'Produto excluído';
}catch(PDOException $e){
    $resposta['mensagem'] = ' Erro ao excluir produto';
    throw new Exception('Erro ao excluir produto'.$e->getMessage());
}

echo json_encode($resposta);

?>