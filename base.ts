// nomeDaVariavel:tipoDaVariavel

interface Usuario {
    nome: string, email: string, telefone?: string
}

function enviarEmail({ nome, email, telefone }: Usuario) {
    console.log(`Olá ${nome} seu email é ${email} e seu telefone é ${telefone}`);
}

enviarEmail({
    nome: "Marco",
    email: "marco@marco.marco",
    telefone: "123123123"
});