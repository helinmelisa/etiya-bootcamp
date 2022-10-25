class Service{
    items: Item[] = [];

    add(item: Item){
        this.items.push(product);
    }

    getAll():Product[]{
        return this.items;
    }

    getById(id: number):Product|undefined{
        return this.items.find(product => product.id === id);
        /*for (const product of this.items) {
            if(product.id == id){
                return product;
            }
        }
    }
    delete(id: number) {
        this.items = this.items.filter(product => !(product.id == id)); 
    }

    update(id: number, updatedProduct: Product) {
       const index = this.items.findIndex(product => (product.id == id));
       this.items.splice(index, 1, updatedProduct)
    }
}
let itemservice = new itemservice()
itemservice.add({id:1, name:"laptop", price:100, category:{id:"kategori1", name: "teknoloji", desc: "elektronik"}})
itemservice.add({id:2, name:"desktop", price:150, category:{id:"kategori1", name: "teknoloji", desc: "elektronik"}})
itemservice.add({id:3, name:"televizyon", price:200, category:{id:"kategori1", name: "teknoloji", desc: "elektronik"}})
itemservice.add({id:5, name:"telefon", price:300, category:{id:"kategori1", name: "teknoloji", desc: "elektronik"}})
console.log(itemservice.getAll());
//itemservice.delete(1)
//console.log(itemservice.getAll());
//console.log("**********");
itemservice.update(2,{id:8, name:"desktop++", price:150, category:{id:"kategori1", name: "teknoloji", desc: "elektronik"}});
console.log("**********");
console.log(itemservice.getAll());