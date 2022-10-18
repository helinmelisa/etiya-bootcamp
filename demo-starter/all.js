console.log("Hello")


// comment


//variables
//JS TIP güvenli degil
//Typescript type güvenli
let dolarKur = 10;

console.log(dolarKur);

let euroKur = "10";

console.log(euroKur);

console.log(dolarKur + 5);
//var yerine let kullan

//boolean

let euroYukselis = true;
console.log(euroYukselis);

//collections
//array = dizi

let krediler = ["İhtiyaç","Taşıt", "Konut"]
console.log(krediler)

//object
//JSON Javascript Object Notation


//naming convention
//camelCase
let odemeBilgileri = {
    aylikOdeme: 415.53,
    faizOranı: 1.89,
    toplamGeriOdeme: 1235.5,
    krediTipi: "İhtiyaç Kredisi",
};
console.log(odemeBilgileri);

let a = 18.74;
let b = 18.8;

if( a >= b )
{
    console.log("fazla")
}

else {
    console.log("az")
}

a >= b ? console.log("fazla") : console.log("az")

let secilenKredi=0;
let krediTutari=15000;

switch(secilenKredi) {
    case 0:
        krediTutari *= 2;
        break;
    case 1:
      krediTutari *= 3;
      break;
    default:
      console.log("Bilinmeyen")
};

console.log("kredi:", krediTutari)

let sayi = 15010;

sayi % 2 == 0 ? console.log("çift") : console.log("tek")


// CTRL + K + C COMMENT İÇİN


krediler.forEach(kredi => {
    console.log("Foreach:", kredi)
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

//mapFilterReduce

let urunler1 = [
    {price: 100, ad: "Ürün 1", discount: true, rate: 15},
    {price: 150, ad: "Ürün 2", discount: false, rate: 0},
    {price: 200, ad: "Ürün 3", discount: true, rate: 2.5},
];

let filrelenmisUrunler = urunler1.filter((urun)=> {
    return urun.price > 160;
});
console.log(filrelenmisUrunler)

let maplenmisArray = urunler.map((urun) => {
    if(urun.discount === true) {
        urun.fiyat -= urun.fiyat * (urun.rate /100);
    };
    return {
        fiyat: urun.fiyat,
        ad: urun.ad,
    }
});
console.log(maplenmisArray);

let newArray = urunler.map((urun)=>{
    return{
        fiyat:
          urun.discount === true
          ? urun.fiyat - urun.fiyat * (urun.rate/100)
          : urun.fiyat,
        ad: urun.ad,
        indirimTutari:urun.fiyat * (urun.rate/100),
    };
});
console.log(newArray);

//

let cart = [
    {id:1, productName:"product 1", quantity:3 ,unitPrice:3000},
    {id:2, productName:"product 2", quantity:2 ,unitPrice:1000},
    {id:3, productName:"product 3", quantity:1 ,unitPrice:500},
]

let total = { totalPrice: 0, totalProductCount: 0};
    cart.forEach((cart) => {
        total.totalPrice += (cart.unitPrice * cart.quantity)
        total.totalProductCount += cart.quantity;
    });
console.log(total);

//reduce


