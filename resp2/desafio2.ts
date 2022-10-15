// Como podemos melhorar o esse código usando TS? 
enum Profissoes {
	Atriz,
	Padeiro
}

interface pessoa {
	nome: string,
	idade: number,
	profissao: Profissoes 
}

let pessoa1: pessoa = {
	nome: "Mirna",
	idade: 48,
	profissao: Profissoes.Padeiro
};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissoes.Atriz;

let pessoa2: pessoa = {
	nome: "Marta",
	idade: 66,
	profissao: Profissoes.Padeiro
}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissoes.Padeiro;

let pessoa3 : pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
}
