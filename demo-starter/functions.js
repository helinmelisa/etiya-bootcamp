let products = [
    {unitPrice: 100, productName: "Ürün 1", discount: true, rate: 15},
    {unitPrice: 150, productName: "Ürün 2", discount: false, rate: 0},
    {unitPrice: 200, productName: "Ürün 3", discount: true, rate: 2.5},
];

let searchText = "Ürün 1";

//let product = products.filter(p => p.productName.includes(searchText));

//console.log(`Arama sonucu bulunan ürün sayısı: ${product.length}`);

function getProductByName(productName = "Ürün") {
    let productsResult = products.filter(p => 
        p.productName.includes(productName),
    );
    console.log(`Arama sonucu bulunan ürün sayısı: ${productsResult.length}`);
}
getProductByName("Ürün");
getProductByName("1");
getProductByName();

getProductByUnitPrice();
