function calcularIdadeEmDias() {

  const anos = document.getElementById("anos");
  const meses = document.getElementById("meses");
  const dias = document.getElementById("dias");

  console.log(anos)

  if(anos.value == '') {
      alert("Insira dados na coluna 'Anos'")
      anos.focus()
      resultado1.innerHTML = ""
      return}
  if(meses.value == '') {
      alert("Insira dados na coluna 'Meses'")
      meses.focus()
      resultado1.innerHTML = ""
      return}
  if(dias.value == '') {
      alert("Insira dados na coluna 'Dias'")
      dias.focus()
      resultado1.innerHTML = ""
      return}

  const idadeEmDias = (parseInt(anos.value) * 365) + (parseInt(meses.value) * 30) + parseInt(dias.value);

  document.getElementById("resultado1").textContent = "A idade em dias é: " + idadeEmDias;

}


function calcularMediaNota() {
       
  const notaUm = document.getElementById("notaUm");
  const notaDois = document.getElementById("notaDois");
  const notaTres = document.getElementById("notaTres");
  const notaQuatro = document.getElementById("notaQuatro");

  if(notaUm.value == '') {
      alert("Insira dados na coluna 'Nota 1'")
      notaUm.focus()
      resultado2.innerHTML = ""
      return}
  if(notaDois.value == '') {
      alert("Insira dados na coluna 'Nota 2'")
      notaDois.focus()
      resultado2.innerHTML = ""
      return}
  if(notaTres.value == '') {
      alert("Insira dados na coluna 'Nota 3'")
      notaTres.focus()
      resultado2.innerHTML = ""
      return}
  if(notaQuatro.value == '') {
      alert("Insira dados na coluna 'Nota 4'")
      notaQuatro.focus()
      resultado2.innerHTML = ""
      return}

  let maiorNota = 0;

    if (parseInt(notaTres.value) >= parseInt(notaQuatro.value)) {
        maiorNota = parseInt(notaTres.value)
    } else {
        maiorNota = parseInt(notaQuatro.value)
    }

  const Media = ((parseInt(notaUm.value) + parseInt(notaDois.value)) + maiorNota) / 3;

  document.getElementById("resultado2").textContent = "A média é: " + Media;

}


function retornarParesImpares() {
       
  const numero = document.getElementById("numero");

  if(numero.value == '') {
    alert("Insira dados na coluna 'Número'")
    numero.focus()
    resultado3.innerHTML = ""
    return}

  let impares, pares;

  for (let i = 1; i <= parseInt(numero.value); i++) {
    if (i % 2 !== 0) {
        if (impares === undefined) {
            impares = i;
        } else {
            impares = impares + ', ' + i;
        }
    } else {
        if (pares === undefined) {
            pares = i;
        } else {
            pares = pares + ', ' + i;
        }
    }
  }

  document.getElementById("resultado3").textContent = 'Ímpares: ' + impares + ' Pares: ' + pares;

}

function confirmarSenha() {
    
    const usuario = (document.getElementById("usuario"));
    const senha = (document.getElementById("senha"));

    if(usuario.value == '') {
        alert("Insira dados na coluna 'Usuário'")
        usuario.focus()
        resultado4.innerHTML = ""
        return}
    if(senha.value == '') {
        alert("Insira dados na coluna 'Senha'")
        senha.focus()
        resultado4.innerHTML = ""
        return}

    if (usuario.value === 'KUNDEN') {
        if (senha.value === 'KUNDENJS2023') {
            document.getElementById("resultado4").textContent = 'Login efetuado com sucesso!';
        } else {
            document.getElementById("resultado4").textContent = 'Senha incorreta!';
        }
    } else {
        document.getElementById("resultado4").textContent = 'Usuário incorreto!';
    }

}

function criarSenha() {
    
    const novaSenha = document.getElementById("novaSenha");

    if(novaSenha.value == '') {
        alert("Insira dados na coluna 'Senha'")
        novaSenha.focus()
        resultado5.innerHTML = ""
        return}

    if (novaSenha.value.length < 8 || novaSenha.value.length > 10) {
        document.getElementById("resultado5").textContent = 'A senha deve ter entre 8 e 10 caracteres!';
      }
    else if (!/\d/.test(novaSenha.value)) {
        document.getElementById("resultado5").textContent = 'A senha deve conter pelo menos um número!';
      }
    else if (!/[a-zA-Z]/.test(novaSenha.value)) {
        document.getElementById("resultado5").textContent = 'A senha deve conter pelo menos uma letra!';
      }
    else if (novaSenha.value.includes(' ')) {
        document.getElementById("resultado5").textContent = 'A senha não pode conter espaços em branco!';
      }
    else {
        document.getElementById("resultado5").textContent = 'Senha confirmada!';
    }                 
    
}

function fahrenheitCelsius() {
    
    const fahrenheit = document.getElementById("fahrenheit");
    const conversor = ((parseInt(fahrenheit.value) - 32) / 9);
    const celsius = (conversor * 5);

    if(fahrenheit.value == '') {
        alert("Insira dados na coluna 'Fahrenheit'")
        fahrenheit.focus()
        resultado6.innerHTML = ""
        return}

    document.getElementById("resultado6").textContent = celsius;

}

function equacaoSegundoGrau() {
    
    const a = (document.getElementById("a"));
    const b = (document.getElementById("b"));
    const c = (document.getElementById("c"));

    if(A.value == '') {
        alert("Insira dados na coluna 'A'")
        A.focus()
        resultado7.innerHTML = ""
        return}
    if(B.value == '') {
        alert("Insira dados na coluna 'B'")
        B.focus()
        resultado7.innerHTML = ""
        return}
    if(C.value == '') {
        alert("Insira dados na coluna 'C'")
        C.focus()
        resultado7.innerHTML = ""
        return}

    const delta = Math.pow(b.value, 2) - 4 * a.value * c.value;

    if (delta < 0) {
        document.getElementById("resultado7").textContent = 'A equação não possui raízes reais.';
    } else {
        const x1 = (-b.value + Math.sqrt(delta)) / (2 * a.value);
        const x2 = (-b.value - Math.sqrt(delta)) / (2 * a.value);

        document.getElementById("resultado7").textContent = 'x1 = ' + x1 + ' x2 = ' + x2;
    }

}

function frase() {
    
    const frase = (document.getElementById("frase"));
    let vogais = 0;
    let espacos = 0;

    if(frase.value == '') {
        alert("Insira dados na coluna 'Frase'")
        frase.focus()
        resultado8.innerHTML = ""
        return}

    const letras = frase.value.length;

    for (let i = 1; i <= letras; i++) {
        if (frase.value.includes(' ')) {
            espacos = espacos + 1;
        }
        
        if (frase.value.includes('a')) {
            vogais = vogais + 1;
        }

        if (frase.value.includes('e')) {
            vogais = vogais + 1;
        }

        if (frase.value.includes('i')) {
            vogais = vogais + 1;
        }

        if (frase.value.includes('o')) {
            vogais = vogais + 1;
        }

        if (frase.value.includes('u')) {
            vogais = vogais + 1;
        }
    }

    document.getElementById("resultado8").textContent = 'Vogais: ' + vogais + ' Espaços: ' + espacos;

}

function salarioVendedor() {
    
    const salario = (document.getElementById("salario"));
    const comissao = (document.getElementById("comissao"));
    const quantidade = (document.getElementById("quantidade"));
    const valor = (document.getElementById("valor"));

    if(salario.value == '') {
        alert("Insira dados na coluna 'Salário'")
        salario.focus()
        resultado9.innerHTML = ""
        return}
    if(comissao.value == '') {
        alert("Insira dados na coluna 'Comissão'")
        comissao.focus()
        resultado9.innerHTML = ""
        return}
    if(quantidade.value == '') {
        alert("Insira dados na coluna 'Quantidade'")
        quantidade.focus()
        resultado9.innerHTML = ""
        return}
    if(valor.value == '') {
        alert("Insira dados na coluna 'Valor'")
        valor.focus()
        resultado9.innerHTML = ""
        return}

    const comissao_calculada = (comissao.value * quantidade.value);
    const comissao_separada = valor.value * quantidade.value;

    if (comissao_separada > 100000) {
        const comissao_extra = 0.75 * (comissao_separada - 100000);
        const pagamento = salario.value + comissao_calculada + comissao_extra;
        document.getElementById("resultado9").textContent = 'O salário final é de: ' + pagamento;
    } else {
        const pagamento = salario.value + comissao_calculada;
        document.getElementById("resultado9").textContent = 'O salário final é de: ' + pagamento;
    }

}

function joioEtrigo(lista) {
    
    let itens = [
        "joio", "trigo", "trigo", "joio", "trigo", "joio", "joio", "joio", "joio", "trigo", "trigo", "joio",
        "joio", "joio", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo",
        "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "joio", "joio", "joio", "joio",
        "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "trigo",
        "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo",
        "trigo", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "trigo",
        "trigo", "trigo", "trigo", "trigo", "trigo", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "joio", "joio", 
        "joio", "joio", "joio", "trigo", "trigo", "trigo", "trigo", "joio", "joio", "joio", "joio", "joio", "joio", "joio", 
        "trigo", "trigo", "trigo", "joio", "trigo", "joio", "joio", "joio"
      ];
    
    let joio = [];
    let trigo = [];

    for (let palavra of itens) {
        if (palavra == "joio") {
            joio.push(palavra);
        } else if (palavra == "trigo") {
            trigo.push(palavra); 
        }
    }

    document.getElementById("resultado10").textContent = 'Joio: ' + joio.length  + ' Trigo: ' + trigo.length;

}

function retornoInvestimento(lista) {

    const capital = (document.getElementById("capital"));
    const juros = (document.getElementById("juros"));
    const tempo = (document.getElementById("tempo"));

    if(capital.value == '') {
        alert("Insira dados na coluna 'Capital inicial'")
        capital.focus()
        resultado11.innerHTML = ""
        return}
    if(juros.value == '') {
        alert("Insira dados na coluna 'Taxa percentual de juros'")
        juros.focus()
        resultado11.innerHTML = ""
        return}
    if(tempo.value == '') {
        alert("Insira dados na coluna 'Tempo de investimento em meses'")
        tempo.focus()
        resultado11.innerHTML = ""
        return}

    const valor = capital.value * Math.pow(1 + (juros.value / 100), tempo.value);

    document.getElementById("resultado11").textContent = 'O valor após ' + tempo.value + ' meses será de R$' + valor.toFixed(2);

}
