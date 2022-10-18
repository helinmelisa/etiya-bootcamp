// CTRL + K + C => Comment
// CTRL + K + U => Comment out

let krediler = ["İhtiyaç","Taşıt", "Konut"]
console.log(krediler)

console.log("<ul>");
for (let i = 0; i < krediler.length; i++) {
	console.log("<li>" + krediler[i] + "</li>");
}
console.log("</ul>");
krediler.forEach(kredi => {
	console.log("Foreach: ", kredi);
});

let urunler = [
    {fiyat: 100, ad: "Ürün 1", discount: true, rate: 15},
    {fiyat: 150, ad: "Ürün 2", discount: false, rate: 0},
    {fiyat: 200, ad: "Ürün 3", discount: true, rate: 2.5},
];

urunler.forEach((urun) =>{
    if(urun.discount === true) {
        urun.fiyat -= urun.fiyat * (urun.rate /100);
    }
    if(urun.fiyat > 150) console.log("Pahalı");

    console.log(urun)
});
urunler.forEach((urun) => {
    if(urun.fiyat > 160) console.log(urun);
});
