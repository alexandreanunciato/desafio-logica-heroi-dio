let nomeHeroi = [
    {nomeHeroi: "SuperMan", poder: 11000},
    {nomeHeroi: "Thor", poder: 9500},
    {nomeHeroi: "Capitã Marvel", poder: 8730},
    {nomeHeroi: "Shazam", poder: 7558},
    {nomeHeroi: "Hulk", poder: 6900},
    {nomeHeroi: "Mulher Maravilha", poder: 3500},
    {nomeHeroi: "Homem de Ferro", poder: 1500},
    {nomeHeroi: "Homem-Aranha", poder: 999},
];

for (let heroi of nomeHeroi) {
    let nome = heroi.nomeHeroi;
    let xp = heroi.poder;
    let nivel = "";

    if (xp >= 10001){
        nivel = "Radiante";
    } else if (xp >= 9001) {
        nivel = "Imortal";
    } else if (xp >= 8001) {
        nivel = "Ascendente";
    } else if (xp >= 7001) {
        nivel = "Platina";
    } else if (xp >= 5001) {
        nivel = "Ouro";
    } else if (xp >= 2001) {
        nivel = "Prata";
    } else if (xp >= 1001) {
        nivel = "Bronze";
    } else {
        nivel = "Ferro";
    }

    console.log(`O herói ${nome} possui poder de ${xp} e é classificado como nível ${nivel}.`);
}