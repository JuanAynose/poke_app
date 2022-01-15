const pokemonHp = document.getElementById("poke_hp");
const pokemonImg = document.getElementById("poke_img");
const pokemonName = document.getElementById("poke_name");
const pokemonType = document.getElementById("poke_type");
const pokemonAtt = document.getElementById("poke_attack");
const pokemonDef = document.getElementById("poke_defense");
const pokemonSpe = document.getElementById("poke_speed");

const form = document.getElementById("form_pokemon");
const input = document.getElementById("poke_input");
const send = document.getElementById("button");

function askPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res =>res.ok ? Promise.resolve(res) : Promise.reject("Error uwu"))
        .then(res => res.json())
        .then(res => {
            pokemonImg.setAttribute("src", res.sprites.front_default)
            pokemonName.textContent=res.name;
            pokemonHp.textContent=res.stats[0].base_stat;
            pokemonType.textContent=res.types[0].type.name;
            pokemonAtt.textContent=res.stats[1].base_stat;
            pokemonDef.textContent=res.stats[2].base_stat;
            pokemonSpe.textContent=res.stats[5].base_stat;
        })
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
});

send.addEventListener("click", ()=>{
    askPokemon(input.value)
})