<?php

    declare(strict_types = 1);

    class Conexao{
        private $conexaoPdo = null;
        private $host;
        private $database;
        private $usuario;
        private $senha;

        public function __construct(string $host,string $database,string $usuario,string $senha){
            $this->host = $host;
            $this->database = $database;
            $this->usuario = $usuario;
            $this->senha = $senha;
        }

        public function iniciarConexao(){
            try{
                $this->conexaoPdo = new PDO("mysql:dbname={$this->database};host={$this->host}",$this->usuario,$this->senha);
            }catch(PDOException $e){
                die('Erro ao iniciar conexao'.$e->getMessage());
            }
        }

        public function getConexao(){
            return $this->conexaoPdo;
        }
    }

    //$conexao = new Conexao('localhost','lojavirtual','root','');

    
?>