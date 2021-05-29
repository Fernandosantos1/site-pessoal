window.onscroll = function() { scrollFunction() };

scrollFunction = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("id_navbar").style.backgroundColor = "#fbfbfb";
    } else {
        document.getElementById("id_navbar").style.backgroundColor = "#fbfbfbd5";
    }
}


let contador = 0;

let principal = [{
        titulo: 'Treino',
        fundo: 'imgs/fit2.png'
    },
    {
        titulo: 'Dieta',
        fundo: 'imgs/fit1.png'
    },
    {
        titulo: 'Psicológico',
        fundo: 'imgs/fit3.png'
    }
];

let box1 = [{
        text: 'Se seu objetivo é emagrecer com saúde, fazer atividade física é essencial! O exercício físico regular aumenta a taxa metabólica.',
        imgSrc: 'imgs/Icons/Body/weight-loss.svg',
    },
    {
        text: 'Gorduras são indispensáveis para o bom funcionamento do corpo. Obtidas de fonte animal ou vegetal.',
        imgSrc: 'imgs/Icons/Diet/avocado.svg',
    },
    {
        text: 'O exercício físico pode ser um verdadeiro impulsionador da energia para pessoas saudáveis e também para as que sofrem de várias condições médicas.',
        imgSrc: 'imgs/Icons/Mind/carregando.svg',
    }
];
let box2 = [{
        text: 'O exercício físico regular desempenha um papel vital na construção e manutenção de músculos e ossos fortes.',
        imgSrc: 'imgs/Icons/Body/muscle.svg'
    },
    {
        text: 'os alimentos ricos em proteínas e que possuem baixo teor de carboidratos, como carnes magras, peixe, ovo, presunto, presunto de peru',
        imgSrc: 'imgs/Icons/Diet/boiled-egg.svg'
    },
    {
        text: 'A prática esportiva fará com o corpo passe a receber hormônios que garantem nossa disposição, bem-estar e produtividade.',
        imgSrc: 'imgs/Icons/Mind/foco.svg'
    }
];
let box3 = [{
        text: 'a irrigação do coração feita através das artérias coronárias ficam mais abundantes melhorando o seu funcionamento.',
        imgSrc: 'imgs/Icons/Body/smartphone.svg'
    },
    {
        text: 'Os carboidratos são nutrientes muito importantes para o nosso organismo. São considerados os alimentos energéticos.',
        imgSrc: 'imgs/Icons/Diet/porridge.svg'
    },
    {
        text: 'O sistema imunológico costuma ser severamente prejudicado por transtornos psicológicos, facilitando doenças ocasionais, como resfriados, dores de cabeça e problemas do trato intestinal.',
        imgSrc: 'imgs/Icons/Mind/opcoes.svg'
    }
];
let box4 = [{
        text: 'O gasto de energia durante o exercício físico estimula os processos de recuperação durante o sono.',
        imgSrc: 'imgs/Icons/Body/sleeping.svg'
    },
    {
        text: 'Periodização da dieta pode ser a chave para alcançar mais rapidamente o objetivo da redução de peso e da melhora da composição corporal.',
        imgSrc: 'imgs/Icons/Diet/planning.svg'
    },
    {
        text: 'Ao estimular a oxigenação do cérebro, as neurotransmissões são favorecidas. Também estimula a memória e afasta pensamentos ruins.',
        imgSrc: 'imgs/Icons/Mind/produtividade.svg'
    }
];

// elemento.innerHTML = topicos[contador].text;
// img.src = topicos[contador].imgSrc;


next = () => {
    if (contador == (box1.length - 1)) {
        contador = 0;

        title.innerHTML = principal[contador].titulo;

        bg_img.src = principal[contador].fundo;

        box_1.innerHTML = box1[contador].text;
        box_2.innerHTML = box2[contador].text;
        box_3.innerHTML = box3[contador].text;
        box_4.innerHTML = box4[contador].text;

        img_1.src = box1[contador].imgSrc;
        img_2.src = box2[contador].imgSrc;
        img_3.src = box3[contador].imgSrc;
        img_4.src = box4[contador].imgSrc;

    } else {
        contador++

        title.innerHTML = principal[contador].titulo;

        bg_img.src = principal[contador].fundo;

        box_1.innerHTML = box1[contador].text;
        box_2.innerHTML = box2[contador].text;
        box_3.innerHTML = box3[contador].text;
        box_4.innerHTML = box4[contador].text;

        img_1.src = box1[contador].imgSrc;
        img_2.src = box2[contador].imgSrc;
        img_3.src = box3[contador].imgSrc;
        img_4.src = box4[contador].imgSrc;

    }
}

prev = () => {
    if (contador == 0) {
        contador = (box1.length - 1);

        title.innerHTML = principal[contador].titulo;

        bg_img.src = principal[contador].fundo;

        box_1.innerHTML = box1[contador].text;
        box_2.innerHTML = box2[contador].text;
        box_3.innerHTML = box3[contador].text;
        box_4.innerHTML = box4[contador].text;

        img_1.src = box1[contador].imgSrc;
        img_2.src = box2[contador].imgSrc;
        img_3.src = box3[contador].imgSrc;
        img_4.src = box4[contador].imgSrc;

    } else {
        contador--;

        title.innerHTML = principal[contador].titulo;

        bg_img.src = principal[contador].fundo;

        box_1.innerHTML = box1[contador].text;
        box_2.innerHTML = box2[contador].text;
        box_3.innerHTML = box3[contador].text;
        box_4.innerHTML = box4[contador].text;

        img_1.src = box1[contador].imgSrc;
        img_2.src = box2[contador].imgSrc;
        img_3.src = box3[contador].imgSrc;
        img_4.src = box4[contador].imgSrc;

    }
}
let ctx = document.getElementById('myChart');

let meuGrafico = new Chart(ctx, {

    type: 'line',


    data: {

        labels: ["2017", "2018", "2019", "2020", 2021, ],

        datasets: [

            {

                label: " Gordura em Porcentagem",

                data: [28, 25, 17, 30, 18],

                borderWidth: 5,


                borderColor: 'rgba(255, 206, 86, 0.6)',

                backgroundColor: 'transparent',
            },


            {

                type: 'line',
                label: "Massa Muscular em KG",
                data: [55, 67, 78, 65, 80],
                borderWidth: 5,
                borderColor: 'rgba(54, 133, 235, 0.6)',
                backgroundColor: 'transparent'
            }
        ]
    },


    options: {

        title: {

            display: true,

            fontSize: 20,

            text: "Minha Evolução",

            position: 'top',
        },
        legend: {

            display: true,

            reverse: true,

            position: 'bottom'
        },
        layout: {
            padding: {

                left: 50,
                top: 50
            },

        }
    }
})


Chart.defaults.global.defaultFontColor = "#111";



let ctx2 = document.getElementById('myChart2').getContext('2d');
let myChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Saudável', 'Abaixo do Peso', 'Obeso', 'Obesidade Grave'],
        datasets: [{
            data: [47, 33, 13, 7],
            backgroundColor: [
                'rgba(54, 133, 235, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(255, 80, 80, 0.6)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 80, 80, 1)'
            ],

            borderWidth: 4
        }]
    },
    options: {
        title: {

            display: true,

            fontSize: 20,

            text: "Taxa de Obesidade",

            position: 'top',

            fontColor: "#fff"
        },

        legend: {

            position: 'bottom',
            labels: {
                fontColor: "#fff"
            }
        },
        scales: {
            y: {
                beginAtZero: true,

            }
        }
    }
});

// function year_2018() {

//     myChart.data.datasets[0].data.pop(2)
//     myChart.data.datasets[0].data.pop(1)
//     myChart.data.datasets[0].data.pop()

//     myChart.data.datasets[0].data.push(60)
//     myChart.data.datasets[0].data.push(25)
//     myChart.data.datasets[0].data.push(10)
//     console.log(myChart.data.datasets[0].data)
//     myChart.update()

// }

// function year_2019() {

//     myChart.data.datasets[0].data.pop(2)
//     myChart.data.datasets[0].data.pop(1)
//     myChart.data.datasets[0].data.pop()

//     myChart.data.datasets[0].data.push(75)
//     myChart.data.datasets[0].data.push(18)
//     myChart.data.datasets[0].data.push(10)

//     console.log(myChart.data.datasets[0].data)

//     myChart.update()

// }

// function year_2020() {

//     myChart.data.datasets[0].data.pop(2)
//     myChart.data.datasets[0].data.pop(1)
//     myChart.data.datasets[0].data.pop()

//     myChart.data.datasets[0].data.push(85)
//     myChart.data.datasets[0].data.push(14)
//     myChart.data.datasets[0].data.push(10)

//     console.log(myChart.data.datasets[0].data)

//     myChart.update()

// }

calculate = () => {

    let weight = Number(in_weight.value);
    let height = Number(in_height.value);

    let imc = (weight / (height * height)).toFixed(2)

    if (in_height.value.length < 1) {

        alert_box.innerHTML = `Insira sua Altura`

    } else if (in_weight.value.length < 1) {

        alert_box.innerHTML = `Insira seu Peso`

    } else {

        if (imc <= 18.5) {
            imc_result.innerHTML = `${imc}, Você está abaixo do peso isso não é saudável`;

        } else if (imc <= 25) {

            imc_result.innerHTML = `${imc}, Você está saudável, parabéns`;

        } else if (imc <= 30) {

            imc_result.innerHTML = `${imc}, Você está obeso isso não é saudável`;

        } else {

            imc_result.innerHTML = `${imc}, Você está com obesidade grave isso não é saudável, tome cuidado`;

        }

    }
}

function entrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.login_usuario_meuapp = json.login;
                sessionStorage.nome_usuario_meuapp = json.nome;

                window.location.href = 'dashboard-profile.html';
            });

        } else {

            console.log('Erro de login!');

            resposta.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            });
        }
    });

    return false;
}

function aguardar() {
    btn_entrar.disabled = true;
    img_aguarde.style.visibility = 'visible';
    div_erro.style.visibility = 'hidden';
}

function finalizar_aguardar(resposta) {
    btn_entrar.disabled = false;
    img_aguarde.style.visibility = 'hidden';
    div_erro.style.visibility = 'visible';
    div_erro.innerHTML = resposta;
}

let nome = document.getElementById('cadNome');
let email = document.getElementById('cadEmail');
let login = document.getElementById('cadLogin');
let senha = document.getElementById('cadSenha');

function cadastrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_cadastro));

    if (nome.value == '' || nome.length < 4 || nome == undefined) {

        nome.value = '';
        nome.placeholder = 'Digite um nome válido';
        nome.style.borderColor = '#f00';
        nome.style.color = '#f00';

        setTimeout(() => {

            nome.placeholder = 'Nome e sobrenome';
            nome.style.borderColor = '#000';
            nome.style.color = '#000';

        }, 2000);
    } else if (condition) {

    }
    // fetch("/usuarios/cadastrar", {
    //     method: "POST",
    //     body: formulario
    // }).then(function(response) {

    //     if (response.ok) {

    //         window.location.href = 'login.html';

    //     } else {

    //         console.log('Erro de cadastro!');
    //         response.text().then(function(resposta) {
    //             div_erro.innerHTML = resposta;
    //         });
    //         finalizar_aguardar();
    //     }
    // });

    return false;
}

function aguardar() {
    btn_entrar.disabled = true;
    img_aguarde.style.display = 'block';
    div_erro.style.display = 'none';
}

function finalizar_aguardar() {
    btn_entrar.disabled = false;
    img_aguarde.style.display = 'none';
    div_erro.style.display = 'block';
}

let login_usuario;
let nome_usuario;

function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;

    if (login_usuario == undefined) {
        redirecionar_login();
    } else {
        b_usuario.innerHTML = nome_usuario;
        validar_sessao();
    }

}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, { cache: 'no-store' })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, { cache: 'no-store' });
}