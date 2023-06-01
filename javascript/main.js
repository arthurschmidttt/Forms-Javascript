function calcularIdadeEmDias() {

  const anos = parseInt(document.getElementById("anos").value);
  const meses = parseInt(document.getElementById("meses").value);
  const dias = parseInt(document.getElementById("dias").value);

  const diasPorAno = 365;
  const diasPorMes = 30;

  const idadeEmDias = (anos * diasPorAno) + (meses * diasPorMes) + dias;

  document.getElementById("resultado1").textContent = "A idade em dias é: " + idadeEmDias;

}


function calcularMediaNota() {
       
  const notaUm = parseInt(document.getElementById("notaUm").value);
  const notaDois = parseInt(document.getElementById("notaDois").value);
  const notaTres = parseInt(document.getElementById("notaTres").value);
  const notaQuatro = parseInt(document.getElementById("notaQuatro").value);

  let maiorNota = 0;

    if (notaTres >= notaQuatro) {
        maiorNota = notaTres
    } else {
        maiorNota = notaQuatro
    }

  const Media = ((notaUm + notaDois) + maiorNota) / 3;

  document.getElementById("resultado2").textContent = "A média é: " + Media;

}


function retornarParesImpares() {
       
  const numero = parseInt(document.getElementById("numero").value);

  let impares, pares;

  for (let i = 1; i <= numero; i++) {
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
    
    const usuario = (document.getElementById("usuario").value);
    const senha = (document.getElementById("senha").value);

    if (usuario === 'KUNDEN') {
        if (senha === 'KUNDENJS2023') {
            document.getElementById("resultado4").textContent = 'Login efetuado com sucesso!';
        } else {
            document.getElementById("resultado4").textContent = 'Senha incorreta!';
        }
    } else {
        document.getElementById("resultado4").textContent = 'Usuário incorreto!';
    }

}

function criarSenha() {
    
    const novaSenha = parseInt(document.getElementById("novaSenha").value);
    console.log(novaSenha);
    if (novaSenha.length < 8 || novaSenha.length > 10) {
        document.getElementById("resultado5").textContent = 'A senha deve ter entre 8 e 10 caracteres!';
      } else {
        if (!/\d/.test(novaSenha)) {
            document.getElementById("resultado5").textContent = 'A senha dee conter pelo menos um número!';
          } else {
            if (!/[a-zA-Z]/.test(novaSenha)) {
                document.getElementById("resultado5").textContent = 'A senha deve conter pelo menos uma letra!';
              } else {
                if (novaSenha.includes(' ')) {
                    document.getElementById("resultado5").textContent = 'A senha não pode conter espaços em branco!';
                  } else {
                    document.getElementById("resultado5").textContent = 'Senha confirmada!';
                  }
              }
          }
      }
    
}

function fahrenheitCelsius() {
    
    const fahrenheit = parseInt(document.getElementById("fahrenheit").value);
    const conversor = ((fahrenheit - 32) / 9);
    const celsius = (conversor * 5);

    document.getElementById("resultado6").textContent = celsius;

}

function equacaoSegundoGrau() {
    
    const a = (document.getElementById("a").value);
    const b = (document.getElementById("b").value);
    const c = (document.getElementById("c").value);

    const delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0) {
        document.getElementById("resultado7").textContent = 'A equação não possui raízes reais.';
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        document.getElementById("resultado7").textContent = 'x1 = ' + x1 + ' x2 = ' + x2;
    }

}

function frase() {
    
    const frase = (document.getElementById("frase").value);
    console.log(frase);
    let vogais = 0;
    let espacos = 0;

    const letras = frase.length;

    for (let i = 1; i <= letras; i++) {
        if (frase.includes(' ')) {
            espacos = espacos + 1;
        }
        
        if (frase.includes('a')) {
            vogais = vogais + 1;
        }

        if (frase.includes('e')) {
            vogais = vogais + 1;
        }

        if (frase.includes('i')) {
            vogais = vogais + 1;
        }

        if (frase.includes('o')) {
            vogais = vogais + 1;
        }

        if (frase.includes('u')) {
            vogais = vogais + 1;
        }
    }

    document.getElementById("resultado8").textContent = 'Vogais: ' + vogais + ' Espaços: ' + espacos;

}

function salarioVendedor() {
    
    const salario = (document.getElementById("salario").value);
    const comissao = (document.getElementById("comissao").value);
    const quantidade = (document.getElementById("quantidade").value);
    const valor = (document.getElementById("valor").value);

    const comissao_calculada = (comissao * quantidade);
    const comissao_separada = valor * quantidade;

    if (comissao_separada > 100000) {
        const comissao_extra = 0.75 * (comissao_separada - 100000);
        const pagamento = salario + comissao_calculada + comissao_extra;
        document.getElementById("resultado9").textContent = 'O salário final é de: ' + pagamento;
    } else {
        const pagamento = salario + comissao_calculada;
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

    const capital = (document.getElementById("capital").value);
    const juros = (document.getElementById("juros").value);
    const tempo = (document.getElementById("tempo").value);

    const valor = capital * Math.pow(1 + (juros / 100), tempo);

    document.getElementById("resultado11").textContent = 'O valor após ' + tempo + ' meses será de R$' + valor.toFixed(2);

}
