let comprasSemana = [1000,2000,3000,5000,8000]

let hamburguesa = {
    pan:"pan de hamburguesa",
    carne: "carne de res",
    queso: "chedar",
    extras: ["lechuga", "tomate", "cebolla"]
}

let hamburguesaClasica = {
    pan: "pan con semillas de sésamo",
    carne: "carne de res 100%",
    queso: "queso cheddar",
    extras: ["lechuga", "tomate", "cebolla", "salsa especial"],
    infoHamburguesa: function() {
        console.log("Pan: " + this.pan);
        console.log("Carne: " + this.carne);
        console.log("Queso: " + this.queso);
        console.log("Extras: " + this.extras.join(", "));
    },
    info: function(){
        console.log("wena conchetuamreeeeeeeee");
    }
}
hamburguesaClasica.infoHamburguesa();
hamburguesaClasica.info();


console.log(hamburguesa);

let total= 0;
for (let index = 0; index < comprasSemana.length; index++) {
    total += comprasSemana[index];
}

console.log("El gasto total fue: $"+ total);