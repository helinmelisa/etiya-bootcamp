//mapFilterReduce

let urunler = [
    {price: 100, ad: "Ürün 1", discount: true, rate: 15},
    {price: 150, ad: "Ürün 2", discount: false, rate: 0},
    {price: 200, ad: "Ürün 3", discount: true, rate: 2.5},
];

let filrelenmisUrunler = urunler.filter((urun)=> {
    return urun.price > 160;
});
console.log(filrelenmisUrunler);

let maplenmisArray = urunler.map((urun) => {
    if(urun.discount === true) {
        urun.price -= urun.price * (urun.rate /100);
    };
    return {
        fiyat: urun.price,
        ad: urun.ad,
    }
});
console.log(maplenmisArray);
let newArray = urunler.map((urun)=>{
    return{
        fiyat:
          urun.discount === true
          ? urun.price - urun.fiyat * (urun.rate/100)
          : urun.price,
        ad: urun.ad,
        indirimTutari:urun.price * (urun.rate/100),
    };
});
console.log(newArray);

let cart = [
    {id:1, productName:"product 1", quantity:3 ,unitPrice:3000},
    {id:2, productName:"product 2", quantity:2 ,unitPrice:1000},
    {id:3, productName:"product 3", quantity:1 ,unitPrice:500},
];

let total = { totalPrice: 0, totalProductCount: 0};
    cart.forEach((cart) => {
        total.totalPrice += (cart.unitPrice * cart.quantity)
        total.totalProductCount += cart.quantity;
    });
console.log(total);