/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { MdSearchOff } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import Product from '../Product';
import styles from './ProductsList.module.scss';
import { getProducts } from '../../../services/products';
import Loading from '../../Global/Loading';
import Pagination from '../../Global/Pagination';
import SearchFilter from '../../Global/SearchFilter';
import 'react-toastify/dist/ReactToastify.css';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(20);
  const [query, setQuery] = useState(null);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const apiFetchProducts = async () => {
      setLoading(true);
      const response = await getProducts(query);
      setProducts(response.data.data);
      setProductsPerPage(parseInt(response.headers['products-per-page'], 10));
      setTotalItems(parseInt(response.headers['total-products'], 10));
      setLoading(false);
    };

    apiFetchProducts();
  }, [query]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const searchHandler = (params) => setQuery(params);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <SearchFilter searchHandler={searchHandler} />
      { loading ? <Loading /> : (
        <>
          <section className={styles.products}>
            {currentProducts.length < 1 ? (
              <div className={styles.product_no_match}>
                <MdSearchOff style={{ marginRight: '5px' }} />
                No se encontraron resultados
              </div>
            )
              : currentProducts.map((product) => (
                <article key={product.id} className={styles.product__container}>
                  <Product key={product.id} product={product} />
                </article>
              ))}
          </section>
          <Pagination
            itemsPerPage={productsPerPage}
            totalItems={totalItems}
            paginate={paginate}
          />
        </>
      ) }
    </>
  );
}

export default ProductsList;
