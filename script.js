// transformando a nodelist em array para obter os metodos de array
const veiculos = Array.from(document.querySelectorAll(".card-veiculo"));

// lista de veiculos inicial para cada um dos filtros
let veiculosFiltradosNome = veiculos;
let veiculosFiltradosMarca = veiculos;
let veiculosFiltradosCombustivel = veiculos;
let veiculosFiltradosCambio = veiculos;
let veiculosFiltradosAr = veiculos;

// adicionando evento de busca para o botao
// const botaoCompra = document.querySelector("#botao-busca");
// botaoCompra.addEventListener("click", buscaNome);

// adicionando evento ao campo de marca
const marca = document.querySelector("#marca");
marca.addEventListener("change", filtraMarca);
marca.onchange

function filtraMarca(){
    veiculosFiltradosMarca = []
    for(let i = 0; i < veiculos.length; i++){
        if(marca.value == "Honda"){

        }else if(marca.value == "Renaut"){

        }else if(marca.value == "Fiat"){
            
        }
    }
}

// adicionando evento ao campo de combustivel
const combustivel = document.querySelector("#combustivel");
combustivel.addEventListener("change", filtraCombustivel);

// Filtrando o combustivel
function filtraCombustivel(){
    // Tirando os valores do array
    veiculosFiltradosCombustivel = []
    for(let i = 0; i < veiculos.length; i++){
        if(combustivel.value == "Gasolina"){
            veiculosFiltradosCombustivel.values.push(veiculos[i])
        }else if(combustivel.value == "Flex"){
            veiculosFiltradosCombustivel.push(veiculos[i])
        }else if(combustivel.value == "Diesel"){
            veiculosFiltradosCombustivel.push(veiculos[i])
        }else{
            veiculosFiltradosCombustivel = veiculos;
        }
    }
    mostraVeiculos()
}
// adicionando evento aos radio buttons
const cambios = document.getElementsByName("cambio");
cambios[0].addEventListener("change", filtrarCambio);
cambios[1].addEventListener("change", filtrarCambio);

// criando a função para filtar o tipo de cambio
function filtrarCambio(){
    let tipoCambio = this.parentElement.textContent;
    veiculosFiltradosCambio = []

    for(let i = 0; i < veiculos.length; i++){
        veiculosFiltradosCambio.push(veiculos[i])
    }
    mostraVeiculos();
}

// adicionando evento ao checkbox
const arCondicionado = document.getElementsByName("ar")[0];
arCondicionado.addEventListener("change", filtraAr);
function filtraAr(){
    veiculosFiltradosAr = [];
    if(arCondicionado.checked == true){
        for(let i=0; i<veiculos.length; i++){
            veiculosFiltradosAr.push(veiculos[i]);
        }
    }
    veiculos.forEach((carro) => {
        if(carro.childNodes[5].textContent.includes("Ar")){
            veiculosFiltradosAr.push(carro);
        }else{
                veiculosFiltradosAr = veiculos;
        }
    })
    
}

function mostraVeiculos() {
    let contadorCarros = 0;
    for (let i = 0; i < veiculos.length; i++) {
      if (
        veiculosFiltradosNome.includes(veiculos[i]) &&
        veiculosFiltradosMarca.includes(veiculos[i]) &&
        veiculosFiltradosCombustivel.includes(veiculos[i]) &&
        veiculosFiltradosCambio.includes(veiculos[i]) &&
        veiculosFiltradosAr.includes(veiculos[i])
      ) {
        veiculos[i].style.display = "flex";
        contadorCarros++;
      } else {
        veiculos[i].style.display = "none";
      }
    }
  }


