<?php

    require_once('../Conexao.php');
    require_once('Usuario.php');

    $conexao = new Conexao('localhost','lojavirtual','root','');
    $conexao->iniciarConexao();

    $dados = json_decode($_POST['dados']);

    $usuario = new Usuario();
    $usuario->setLogin($dados->login);
    $usuario->setSenha($dados->senha);


    $sql = "INSERT INTO usuario(login,senha,admin) values(:login,:senha,'n')";

    try{
        $stmt = $conexao->getConexao()->prepare($sql);
        $stmt->bindValue(':login',$usuario->getLogin());
        $stmt->bindValue(':senha',$usuario->getSenha());
        $stmt->execute();
        $resposta['mensagem'] = 'Usuário cadastrado';
    }catch(PDOException $e){
        $resposta['mensagem'] = 'Erro cadastrar usuário';
        throw new Exception('Erro ao cadastrar usuário'.$e->getMessage());
    }
    echo json_encode($resposta);

?>