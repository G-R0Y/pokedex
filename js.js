const pokemon = document.querySelector("#pokemon")

const resultsPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    const data = await response.json()
    pokemonName(data.results);

}

const pokemonName = (results) => {
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";



    results.map(async (result, index) => {
        const detail = await fetch(result.url)
        const detalle = await detail.json()

        const html =
            `<div class="col-md-2 m-3">
           <div class="card p-3" style="width: 300px">
                <h4 class='text-title text-center'>#${index + 1} ${result.name.toUpperCase()}</h4>
                <img class='card-img-top mt-2 mb-4' width='150' height='150' src='${imgUrl}${index + 1}.svg'>
                <div class="text-center">
                    <button type="button" class="btn btn-danger erer" data-bs-toggle="modal" data-bs-target="#exampleModal${index + 1}">Saber Más</button>
                </div>
            </div>
        </div>
        
         <div class="modal fade" id="exampleModal${index + 1}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">${result.name.toUpperCase()}</h1>
                        </div>
                        <div class="modal-body">
                        <img class="card-img-top mt-2 mb-4" width='150' height='150' src='${imgUrl}${index + 1}.svg'>
                             <div class="container">
                             <div class="row text-center">
                             <div class="col-4">
                                <h2>Move</h2>
                                <h3>${detalle.moves[0].move.name}</h3>
                                </div>
                                <div class="col-4">
                                <h2>weight</h2>
                                <h3>${detalle.weight}</h3>
                                </div>
                                <div class="col-4">
                                <h2>${detalle.stats[0].stat.name}</h2>
                                <h3>${detalle.stats[0].base_stat}</h3>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                        
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>`
        pokemon.innerHTML += html;
    });
};
resultsPokemon();



