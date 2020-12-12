window.addEventListener("load", () => {
  //Esperando o load da página
  var $num = document.getElementById("num");
  var $btnAdcionar = document.getElementById("btnAdcionar");
  var $btnCalcular = document.getElementById("btnCalcular");
  var $painel = document.getElementById("painel");
  var $resultado = document.getElementById("resultado");
  let valores = []; //Recuperando os elementos HTML

  $btnAdcionar.addEventListener("click", () => {
    AdcionarNumero($num.value, valores); //Click do botão [Adcionar]
    $resultado.innerHTML = "";
    $num.value = "";
    $num.focus();
  });

  $btnCalcular.addEventListener("click", () => {
    //Click do botão [Calcular]
    valores.length == 0
      ? alert("Você não tem dados para calcular")
      : CalcularResultado(valores);
  });

  function ValidarNumero(numero) {
    //Validando se o input retorna um resultado valido
    if (Number(numero) >= 1 && Number(numero) <= 100) {
      return true;
    } else {
      return false;
    }
  }
  function ValidarLista(numero, lista) {
    //Validando se o input retorna um valor dentro da lista existente
    if (lista.indexOf(Number(numero)) != -1) {
      return true;
    } else {
      return false;
    }
  }

  function AdcionarNumero(numero, lista) {
    //Adicionando o valor do input no painel e na lista
    if (ValidarNumero(numero) && !ValidarLista(numero, lista)) {
      valores.push(Number(numero));
      $option = document.createElement("option");
      $option.innerHTML = `Valor ${numero} adicionado`;
      $painel.appendChild($option);
    } else {
      alert("Valor incorreto");
    }
  }

  function CalcularResultado(valores) {
    //Calculando as operações finais
    total = valores.reduce((total, valor) => total + valor);
    media = (total / valores.length).toFixed(2).replace(".", ",");

    $resultado.innerHTML = `<br>Ao todo, temos ${valores.length} números. <br>
    O maior  valor contido na lista é: ${Math.max.apply(Math, valores)}.<br>
    O menor  valor contido na lista é: ${Math.min.apply(Math, valores)}.<br>
    A soma de todos os valores é: ${total}.<br>
    A média dos valores é : ${media}.<br>`;
  }
});
