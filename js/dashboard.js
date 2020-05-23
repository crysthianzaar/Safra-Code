var custoPe;
var lucroPe;
var lucro;
var gastoAdubo;
var gastoObra;
var gastoDefensivos;
var gastoOutros;
var gastoOutroFinal;
var lucroTotal;
var lucroCadaPe;
var rentabilidade;
var maduroPilado;

var nome = localStorage.name;
function getdata() {
    firebase.database().ref('users/'+nome).once('value').then(function (snapshot) {
        // GET valores do banco
        var valor =snapshot.val().valorTotal;
        var despesa = snapshot.val().despesaTotal;
        var dataInicio = snapshot.val().dataInicio;
        var despesaAdubo = snapshot.val().despesaAdubo;
        var despesaDefensivo = snapshot.val().despesaDefensivo;
        var despesaMaoObra = snapshot.val().despesaMaoObra;
        var qtdMaduro = snapshot.val().qtdMaduro;
        var qtdMudas = snapshot.val().qtdMudas;
        var qtdPilado = snapshot.val().qtdPilado;
        var nomeSafra = snapshot.val().safra;
        var itemValor = snapshot.val().valor;
        
        //Manipulações
        lucro = Number(valor) - Number(despesa);
        custoPe = Number(despesa)/Number(qtdMudas);
        lucroPe = Number(valor)/Number(qtdMudas);
        gastoAdubo = (Number(despesaAdubo)*100 / Number(despesa));
        gastoObra = (Number(despesaMaoObra)*100 / Number(despesa));
        gastoDefensivos = (Number(despesaDefensivo)*100 / Number(despesa));
        gastoOutroFinal = (Number(despesa)-Number(despesaAdubo)-Number(despesaDefensivo)-Number(despesaMaoObra));
        gastoOutros = (Number(gastoOutroFinal)*100 / Number(despesa));
        lucroTotal = Number(valor)-Number(despesa);
        lucroCadaPe = Number(lucroTotal)/Number(qtdMudas);
        rentabilidade = (lucroTotal/valor)*100;
        maduroPilado = Number(qtdMaduro)/Number(qtdPilado);

        

        
        //POST Resultados
        document.getElementById("receita").innerHTML=(valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("despesa").innerHTML=(despesa).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("custoPe").innerHTML=(custoPe).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});  
        document.getElementById("receitaXpe").innerHTML=(lucroPe).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});  
        document.getElementById("lucroPe").innerHTML= (lucroCadaPe).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});  
        document.getElementById("lucroTotal").innerHTML= (lucroTotal).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});  
        document.getElementById("lucratividade").innerHTML= (rentabilidade).toFixed(2)+"%";
        document.getElementById("plantio").innerHTML= (qtdMudas)+" Pés";
        document.getElementById("maduros").innerHTML= (qtdMaduro); 
        document.getElementById("pilados").innerHTML= (qtdPilado); 
        document.getElementById("maduroPilado").innerHTML= (maduroPilado)+" maduros para 1 pilado"; 

        

        // Set new default font family and font color to mimic Bootstrap's default styling
        Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.global.defaultFontColor = '#858796';

        // Pie Chart Example
        var ctx = document.getElementById("myPieChart");
        var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Despesas", "Receita"],
            datasets: [{
            data: [despesa, valor],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
            }],
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            },
            legend: {
            display: false
            },
            cutoutPercentage: 80,
        },
        });

                // Pie Chart Example
                var ctx = document.getElementById("myPieChart2");
                var myPieChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ["Adubo", "Mão de Obra","Defensivos","Outros"],
                    datasets: [{
                    data: [gastoAdubo.toFixed(2), gastoObra.toFixed(2),gastoDefensivos.toFixed(2),gastoOutros.toFixed(2)],
                    backgroundColor: ['#4e73df', '#1cc88a', '#FA5858','#FFBF00'],
                    hoverBackgroundColor: ['#2e59d9', '#17a673', '#FF0000','#FFFF00'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                    }],
                },
                options: {
                    maintainAspectRatio: false,
                    tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                    },
                    legend: {
                    display: false
                    },
                    cutoutPercentage: 80,
                },
                });

                
            })

        }