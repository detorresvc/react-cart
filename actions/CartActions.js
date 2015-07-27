import alt from '../alt';


class CartActions {
    getCart() {
        this.dispatch();
    }

    buy(productId) {
        this.dispatch(productId);
    }
}


export default alt.createActions(CartActions);