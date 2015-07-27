import React from 'react';
import CartStore from '../stores/CartStore';
import CartAction from '../actions/CartActions';

let getCartStoreStateProducts = () => {
    return CartStore.getState().cart.products;
}

class ProductList extends React.Component {
    componentWillMount() {

        this.state = getCartStoreStateProducts();

    }
    _buy = (data) => {

        return (e) => {
            e.preventDefault();
            CartAction.buy(data);
            console.log(data);
        }
    }
    componentDidMount(){
        CartStore.listen(this._listen);
    }
    _listen = () => {
        this.setState(getCartStoreStateProducts());
    }

    render() {

        let Product = Object.keys(this.state).map((i) => {

            return <div className="col-md-4">
                        <img alt="Bootstrap Image Preview" src={this.state[i].src} />
                        <ul className="nav nav-pills">
                            <li className="active">
                                <a href="#" onClick={this._buy(i)} >
                                 <span className="badge pull-right">{this.state[i].inventory}</span>{this.state[i].name}</a>
                            </li>
                        </ul>
                    </div>
        });

        return <div className="col-md-12">
                    <div className="row">
                        {Product}
                    </div>
                 </div>;

    }

}

export default ProductList;

//<div className="col-md-4">
//    <img alt="Bootstrap Image Preview" src="http://lorempixel.com/140/140/" />
//    <ul className="nav nav-pills">
//        <li className="active">
//            <a href="#"> <span className="badge pull-right">42</span> Home</a>
//        </li>
//
//    </ul>
//</div>
//<div className="col-md-4">
//<img alt="Bootstrap Image Preview" src="http://lorempixel.com/140/140/" />
//<ul className="nav nav-pills">
//<li className="active">
//    <a href="#"> <span className="badge pull-right">42</span> Home</a>
//</li>
//<li>
//<a href="#"> <span className="badge pull-right">16</span> More</a>
//</li>
//</ul>
//</div>
//<div className="col-md-4">
//<img alt="Bootstrap Image Preview" src="http://lorempixel.com/140/140/" />
//<ul className="nav nav-pills">
//<li className="active">
//    <a href="#"> <span className="badge pull-right">42</span> Home</a>
//</li>
//<li>
//<a href="#"> <span className="badge pull-right">16</span> More</a>
//</li>
//</ul>
//</div>
//</div>
//<div className="row">
//    <div className="col-md-4">
//        <img alt="Bootstrap Image Preview" src="http://lorempixel.com/140/140/" />
//        <ul className="nav nav-pills">
//            <li className="active">
//                <a href="#"> <span className="badge pull-right">42</span> Home</a>
//            </li>
//            <li>
//                <a href="#"> <span className="badge pull-right">16</span> More</a>
//            </li>
//        </ul>
//    </div>
//    <div className="col-md-4">
//        <img alt="Bootstrap Image Preview" src="http://lorempixel.com/140/140/" />
//        <ul className="nav nav-pills">
//            <li className="active">
//                <a href="#"> <span className="badge pull-right">42</span> Home</a>
//            </li>
//            <li>
//                <a href="#"> <span className="badge pull-right">16</span> More</a>
//            </li>
//        </ul>
//    </div>
//    <div className="col-md-4">
//        <img alt="Bootstrap Image Preview" src="http://lorempixel.com/140/140/" />
//        <ul className="nav nav-pills">
//            <li className="active">
//                <a href="#"> <span className="badge pull-right">42</span> Home</a>
//            </li>
//            <li>
//                <a href="#"> <span className="badge pull-right">16</span> More</a>
//            </li>
//        </ul>
//    </div>