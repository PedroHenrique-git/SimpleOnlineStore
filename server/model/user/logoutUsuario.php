<?php
    try{
        session_start();
        session_destroy();
        $resposta['mensagem'] = 'Sessão encerrada';
    }catch(PDOException $e){
        $resposta['mensagem'] = 'Erro ao encerrar sessão';
        throw new PDOException($resposta['mensagem'].$e->getMessage());    
    }
    echo json_encode($resposta);
?>