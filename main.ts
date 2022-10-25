// Product - Category
// Servisler 
// CRUD operasyonları Create Read Update Delete
// GetAll, GetById, Add, Delete, Update

// Bütün servisleri ve bütün aksiyonlarını main.ts'de test et.

//ürün id, name, price
//category id, name, desc

interface Product{
    id: number;
    name: string;
    price: number;
    category: Category;
}

interface Category{
    id: string;
    name: string;
    desc: string;
}
// GetAll, GetById, Add, Delete, Update
class ProductService{
    products: Product[] = [];

    add(product: Product){
        this.products.push(product);
    }

    getAll():Product[]{
        return this.products;
    }

    getById(id: number):Product|undefined{
        return this.products.find(product => product.id === id);
        /*for (const product of this.products) {
            if(product.id == id){
                return product;
            }
        }*/
    }

    delete(id: number) {
        this.products = this.products.filter(product => !(product.id == id)); 
    }

    update(id: number, updatedProduct: Product) {
       const index = this.products.findIndex(product => (product.id == id));
       this.products.splice(index, 1, updatedProduct)
    }
}

let productService = new ProductService()
productService.add({id:1, name:"laptop", price:100, category:{id:"kategori1", name: "teknoloji", desc: "elektronik"}})
productService.add({id:2, name:"desktop", price:150, category:{id:"kategori1", name: "teknoloji", desc: "elektronik"}})
productService.add({id:3, name:"televizyon", price:200, category:{id:"kategori1", name: "teknoloji", desc: "elektronik"}})
productService.add({id:5, name:"telefon", price:300, category:{id:"kategori1", name: "teknoloji", desc: "elektronik"}})
console.log(productService.getAll());
//productService.delete(1)
//console.log(productService.getAll());
//console.log("**********");
productService.update(2,{id:8, name:"desktop++", price:150, category:{id:"kategori1", name: "teknoloji", desc: "elektronik"}});
console.log("**********");
console.log(productService.getAll());



