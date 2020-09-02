<?php

require_once('../Conexao.php');
$conexao = new Conexao('localhost','lojavirtual','root','');
$conexao->iniciarConexao();

$dadoslogin = json_decode($_POST['dadosLogin']);
$login = $dadoslogin->login;
$senha = $dadoslogin->senha;

$sql = "SELECT id,login,senha,admin FROM usuario WHERE login=:LOGIN AND senha=:SENHA";

try{
    $stmt = $conexao->getConexao()->prepare($sql);
    $stmt->bindValue(':LOGIN',$login);
    $stmt->bindValue(':SENHA',$senha);
    $stmt->execute();
    $resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if(empty($resultado)){
        $resposta['mensagem'] = 'Erro ao logar, login ou senha incorretos';
    }else{
        if(session_status() === PHP_SESSION_NONE){
            session_start();
            $_SESSION['login'] = $login;
            $resposta['mensagem'] = 'Login realizado';
            $resposta['adm'] = $resultado[0]['admin'];
        }
    }
}catch(PDOException $e){
    throw new Exception('Erro ao logar'.$e->getMessage());
}

echo json_encode($resposta);

?>