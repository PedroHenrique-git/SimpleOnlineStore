<?php

require_once('../Conexao.php');
$conexao = new Conexao('localhost','lojavirtual','root','');
$conexao->iniciarConexao();

$dados = json_decode($_POST['dados']);

$sql = 'SELECT nome,imagem,preco from produtos where id=:id';

try{
    $stmt = $conexao->getConexao()->prepare($sql);
    $stmt->bindValue(':id',$dados->id);
    $stmt->execute();
    $resposta['data'] = $stmt->fetchAll(PDO::FETCH_ASSOC);
}catch(PDOException $e){
    $resposta['mensagem'] = 'Erro ao carregar dados do produto';
    throw new Exception('Erro ao carregar dadso do produto'.$e->getMessage());
}

echo json_encode($resposta);

?>