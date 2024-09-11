import leia from 'readline-sync';
import Biblioteca from './Biblioteca'; 

const todosLivros = new Biblioteca();

let opcao: number;

do {
    console.log("------------MENU------------");
    opcao = leia.keyInSelect(
        ["ADICIONAR LIVRO", "REMOVER LIVRO", "BUSCAR LIVRO", "MOSTRAR DETALHES", "SAIR"], 
        "ESCOLHA UMA OPCAO: "
    );

    switch (opcao) {
        case 0: 
            todosLivros.addLivro();
            break;
        case 1: 
            todosLivros.removerLivro();
            break;
        case 2: 
            todosLivros.buscarLivro();
            break;
        case 3: 
            todosLivros.mostrarDetalhes();
            break;
        case 4: 
            console.log("SAINDO");
            break;
        default:
            console.log("OPCAO INVALIDA");
    }

} while (opcao !== 4); 
