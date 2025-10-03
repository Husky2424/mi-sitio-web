function restar(){
    let valor1 = parseInt(document.getElementById('numero1').value);
    let valor2 = parseInt(document.getElementById('numero2').value);
    let resultado = valor1 - valor2;
    alert("el resultado es " + resultado);
    }

    function multiplicar(){
        let valor1 = parseInt(document.getElementById('numero1').value);
        let valor2 = parseInt(document.getElementById('numero2').value);
        let resultado = valor1 * valor2;
        alert("el resultado es " + resultado);
        }

        function dividir(){
            let valor1 = parseInt(document.getElementById('numero1').value);
            let valor2 = parseInt(document.getElementById('numero2').value);
            let resultado = valor1 / valor2;
            alert("el resultado es " + resultado);
            }

            function exponer(){
                let valor1 = parseInt(document.getElementById('numero1').value);
                let valor2 = parseInt(document.getElementById('numero2').value);
                let resultado = valor1 ^ valor2;
                alert("el resultado es " + resultado);
                }