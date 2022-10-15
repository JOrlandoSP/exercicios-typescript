// Como podemos rodar isso em um arquivo .ts sem causar erros? 
interface workforce{
	code: number,
	name: string
}

let employee : workforce = {
	code: 11,
	name: "Bond"

};
employee.code = 10;
employee.name = "John";
