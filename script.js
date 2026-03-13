async function buscarPokemon() {
    // 1. Pegar o VALOR do input (o .value é essencial)
    const idDigitado = document.getElementById("Id_pokedex").value;
    
    const url = `https://pokeapi.co/api/v2/pokemon/${idDigitado}`;
    
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        const pokemonDiv = document.getElementById("pokemon");

        // 3. Montar o HTML com os dados que a API realmente envia
        pokemonDiv.innerHTML = `
            <h2>Nº ${dados.id} - ${dados.name.toUpperCase()}</h2>
            <img src="${dados.sprites.front_default}" alt="${dados.name}">
            <h3>Tipagem: ${dados.types.map(info => info.type.name).join(' / ')}</h3>
            <p>Altura: ${dados.height / 10} m</p> 
            <p>Peso: ${dados.weight / 10} kg</p>

        `;
    } catch (erro) {
        alert("Pokémon não encontrado! Digite um número válido.");
    }
}
