<?php

declare(strict_types = 1);

class Produto{
    private $nome;
    private $imagem;
    private $preco;

    public function __construct(string $nome='', string $imagem='',float $preco=0){
        $this->nome = $nome;
        $this->imagem = $imagem;
    }

    public function setNome(string $nome){
        $this->nome = $nome;
    }

    public function getNome():string{
        return $this->nome;
    }

    public function setImagem(string $imagem){
        $this->imagem = $imagem;
    }

    public function getImagem():string{
        return $this->imagem;
    }

    public function setPreco(float $preco){
        $this->preco = $preco;
    }

    public function getPreco():float{
        return $this->preco;
    }
}

?>