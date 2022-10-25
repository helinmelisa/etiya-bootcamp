// Product - Category
// Servisler 
// CRUD operasyonları Create Read Update Delete
// GetAll, GetById, Add, Delete, Update
// GetAll, GetById, Add, Delete, Update
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [];
    }
    ProductService.prototype.add = function (product) {
        this.products.push(product);
    };
    ProductService.prototype.getAll = function () {
        return this.products;
    };
    ProductService.prototype.getById = function (id) {
        return this.products.find(function (product) { return product.id === id; });
        /*for (const product of this.products) {
            if(product.id == id){
                return product;
            }
        }*/
    };
    ProductService.prototype["delete"] = function (id) {
        this.products = this.products.filter(function (product) { return !(product.id == id); });
    };
    ProductService.prototype.update = function (id, updatedProduct) {
        var index = this.products.findIndex(function (product) { return (product.id == id); });
        this.products.splice(index, 1, updatedProduct);
    };
    return ProductService;
}());
var productService = new ProductService();
productService.add({ id: 1, name: "laptop", price: 100, category: { id: "kategori1", name: "teknoloji", desc: "elektronik" } });
productService.add({ id: 2, name: "desktop", price: 150, category: { id: "kategori1", name: "teknoloji", desc: "elektronik" } });
productService.add({ id: 3, name: "televizyon", price: 200, category: { id: "kategori1", name: "teknoloji", desc: "elektronik" } });
productService.add({ id: 5, name: "telefon", price: 300, category: { id: "kategori1", name: "teknoloji", desc: "elektronik" } });
console.log(productService.getAll());
//productService.delete(1)
console.log("**********");
//console.log(productService.getAll());
//console.log("**********");
productService.update(2, { id: 8, name: "desktop++", price: 150, category: { id: "kategori1", name: "teknoloji", desc: "elektronik" } });
console.log("**********");
console.log(productService.getAll());
