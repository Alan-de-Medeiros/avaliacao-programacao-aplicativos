import Livro from "./Livro";

export default class LivroFisico extends Livro {
    private paginas: number;

    constructor(isbn: string, titulo: string, autor: string, anoPublicacao: number, paginas: number) {
        super(isbn, titulo, autor, anoPublicacao);
        this.paginas = paginas;
    }

    public getLimite(): number {
        return this.paginas;
    }

    public override exibirDetalhes(): void {
        super.exibirDetalhes(); 
       
        console.log(`NUMERO DE PAGINAS: ${this.paginas}`);
    }
}