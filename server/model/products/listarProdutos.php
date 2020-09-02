<?php

require_once('../Conexao.php');
$conexao = new Conexao('localhost','lojavirtual','root','');
$conexao->iniciarConexao();

$sql = "SELECT * FROM produtos";

try{
    $stmt = $conexao->getConexao()->prepare($sql);
    $stmt->execute();
    $resposta['data'] = $stmt->fetchAll(PDO::FETCH_ASSOC);
}catch(PDOException $e){
    $resposta['mensagem'] = 'Erro ao listar os produtos';
    throw new Exception($resposta['mensagem'].$e->getMessage());
}

echo json_encode($resposta);

?>