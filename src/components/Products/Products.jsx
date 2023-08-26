import React, { useEffect, useContext } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProcuctCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(()=>{
    fetchProducts('iphone')
      .then((resp) => {
        setProducts(resp);
        setLoading(false);
      });
  }, []);


  return ( 

    (loading && <Loading />) || (
      <section className="products container">
        {
          products.map((product) => <ProductCard key={products.id} data={product}/>)
        }
      </section>
    )
  );
}

export default Products;
