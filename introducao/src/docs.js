let pessoa = {
	nome: 'Israel Silva',
	genero: 'masculino',
    idade: 20,
	endereco: {
	estado: 'PE',
    cidade: 'Caruaru',
    },
    anoAtual: () => new Date().getFullYear(),
}
    
const stack = ['JavaScript', 'React', 'React-Native', 'Java']
const stack2 = [
	{
    	id: 1,
    	nome: 'PHP',
    },
	{
    	id: 2,
    	nome: 'Node',
	},
    {
        id: 3,
        nome: 'Java',
    }
]
    
    
//return []
// const stackFilter = stack.filter((stack) => stack === 7)
const stackFilter = stack.filter((stack) => stack.length > 7)
    
const searchIndex = stack.indexOf('Java')
searchIndex > -1? console.log('Existe no Array') : console.log('Não existe no Array')
    
const newValue = stack2.map((stack) => (
    { ... stack, tipagem: (stack.nome === 'Java'? true : false)}
))
