<?php

declare(strict_types = 1);

class Usuario{
    private $login;
    private $senha;

    public function __construct(string $login ='', string $senha=''){
        $this->login = $login;
        $this->senha = $senha;
    }

    public function setLogin(string $login){
        $this->login = $login;
    }

    public function getLogin():string{
        return $this->login;
    }

    public function setSenha(string $senha){
        $this->senha = $senha;
    }

    public function getSenha():string{
        return $this->senha;
    }
}

?>