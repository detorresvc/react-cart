import React from 'react';
import font from 'font-awesome-webpack';
import bootstrapStyle from '../node_modules/bootstrap/dist/css/bootstrap.css';
import CartTable from './CartTable';
import ProductList from './ProductList';


class Main extends React.Component {

    render () {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <CartTable />
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Main;
