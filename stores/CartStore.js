import alt from '../alt';

import CartActions from '../actions/CartActions'

class CartStore {
    constructor() {
        this.bindListeners({

            buy: CartActions.BUY
        });

        this.cart = {
            'products' : [
                {name : 'iphone',inventory : 50 , src : 'http://lorempixel.com/140/141/',price : 2.5},
                {name : 'samsung',inventory :120 , src : 'http://lorempixel.com/140/142/',price : 3.5 },
                {name : 'asus',inventory : 15 , src : 'http://lorempixel.com/140/143/',price : 1.5 },
                {name : 'motorola',inventory : 15 , src : 'http://lorempixel.com/140/144/',price : 1.5 }
            ],
            'items' : [

            ]
        };
    }

    buy(productId){


        let selectedProduct = this.cart.products[productId];

        if(this.cart.products[productId].inventory <= 0){
            alert('sold out');
            return false;
        }


        let item = this.cart.items.map((e) => {
            return e.product;
        }).indexOf(selectedProduct.name);

        if(item < 0){
            this.setState(this.cart.items.push({
                product : selectedProduct.name,qty : 1 , price :selectedProduct.price , amount : selectedProduct.price
            }));

        }
        else{
            this.setState({
                qty   :    this.cart.items[item].qty += 1,
                amount :    this.cart.items[item].amount = this.cart.items[item].qty*this.cart.items[item].price
            });
        }



        this.setState({
            inventory : this.cart.products[productId].inventory -= 1
        });

    }


}

export default alt.createStore(CartStore, 'CartStore');
