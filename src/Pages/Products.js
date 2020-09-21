import React, { useState, useEffect } from 'react';
import Productitem from "../Components/Productitem";
import ProductsApi from "../api/products";
import FilFashion from "../Components/SectionsFils/Fashion/FilFashion";

function products(){

    const [products, setProducts] = useState([]);

  
    useEffect(() => {
      ProductsApi.getAll()
        .then((products) => {
            setProducts( products )
        });
  }, []);

        return(
            
            <div>
                <FilFashion />

                <div className="row mx-0 mt-4">
                    { products.map((product) =>
                    <div className={'col-sm-3 col-md-2 col-lg-2'} key={product.id}>
                        <Productitem product={product} />
                    </div>
                    )}
                </div>
            </div>
        );
}

export default products;
    