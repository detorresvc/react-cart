import React from 'react';
import CastStore from '../stores/CartStore';


let getCartStoreStateItems = () => {
    return CastStore.getState().cart.items;
}

class CartTable extends React.Component {

    componentWillMount() {

        this.state = getCartStoreStateItems();


    }
    componentDidMount(){
        CastStore.listen(this._listen);
    }
    _listen = () => {
        this.setState(getCartStoreStateItems());
    }
    render() {

        let items =  Object.keys(this.state).map((i) => {
                return (<tr>
                            <td>{this.state[i].product}</td>
                            <td>{this.state[i].qty}</td>
                            <td>{this.state[i].price}</td>
                            <td>{this.state[i].amount}</td>
                        </tr>)

        });

        return <table className="table table-striped table-condensed">
            <thead>
                <tr>
                    <th>
                        Product
                    </th>
                    <th>
                        Qty
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Amount
                    </th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>;
    }
}

export default CartTable;