
const calcular = document.getElementById('calcular');

    function imc(){
        const altura = document.getElementById('altura').value;
        const peso = document.getElementById('peso').value;           
        const resultado = document.getElementById('resultado');

        if(altura ==='' && peso ==='') {
            resultado.textContent = ('preencha os campos!');

        }else{

            const valorIMC = (peso / (altura * altura)).toFixed(1);
            
            let classificaçao = '';

            if(valorIMC < 18.5){
                classificaçao = 'abaixo do peso.';
            }else if(valorIMC < 25){
                classificaçao = 'no peso ideal.';  
            }else if (valorIMC < 30){
                classificaçao = 'acima do peso.';
            }else if(valorIMC < 35){
                classificaçao = 'com obesidade grau I. Entrando em área de risco!';
            }else if(valorIMC < 40){
                classificacao = 'com obesidade grau II. Cuide-se!';
            }else{
                classificaçao = 'com obesidade grau III. Risco de vida!';
            }  

            resultado.textContent =  `O seu IMC é ${valorIMC} e você está ${classificaçao}`;
         }
    }   

    calcular.addEventListener('click', imc);