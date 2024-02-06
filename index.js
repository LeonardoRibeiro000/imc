function CalcularIMC () {
    const form = document.getElementById('some-form')
    form.addEventListener('submit', e => {
      e.preventDefault()
   
  })

  
 
    let altura = parseFloat(document.getElementById("altura").value)
    let peso = parseFloat(document.getElementById("quilos").value)
    let nome = document.getElementById('nome').value
    let imc = peso / (altura * altura)
    console.log(parseFloat(imc.toFixed(2)));
    const resultado = obterResultado(imc)


    localStorage.setItem("nome", nome);
    localStorage.setItem("imc", imc.toFixed(2));
    localStorage.setItem('resultado', resultado);
    window.open('./resultado.html')

}
    function obterResultado(imc){
        if(imc < 17) {
            return`Muito abaixo do peso!`
          }
        else if(imc >= 17 && imc <= 18.49 ) {
            return "Abaixo do peso!"
        }else if (imc >= 18.50 && imc <= 24.99 ){
            return "Peso normal!"
        }else if (imc>= 25 && imc <= 29.99 ){
            return "Acima do peso!"
        }else if (imc >= 30 && imc<= 34.99 ){
            return "Obesidade nível I!"
        }else if (imc >= 35 && imc <= 39.99 ){
            return "Obesidade nível 2!"
        }else if (imc > 40 ){
            return "Obesidade nível 3!"
        }else{
            return"IMC inválido!"
        }
         
    document.getElementById("altura").value = ""
    document.getElementById("quilos").value = ""
    document.getElementById('nome').value = ""
 
    }

    const LimparForm = () => {
        document.getElementById("altura").value = ""
        document.getElementById("quilos").value = ""
        document.getElementById('nome').value = ""
    }
   
   
    



    