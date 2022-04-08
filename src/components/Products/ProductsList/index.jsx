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
  const [query, setQuery] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const apiFetchProducts = async () => {
      window.scrollTo(0, 0);
      setLoading(true);
      const response = await getProducts(query);
      setProducts(response.data.data);
      setTotalPages(response.data.pages);
      setLoading(false);
    };

    apiFetchProducts();
  }, [query]);

  const paginate = (pageNumber) => setQuery({ page: pageNumber });
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
            {products.length < 1 ? (
              <div className={styles.product_no_match}>
                <MdSearchOff style={{ marginRight: '5px' }} />
                No se encontraron resultados
              </div>
            )
              : products.map((product) => (
                <article key={product.id} className={styles.product__container}>
                  <Product key={product.id} product={product} />
                </article>
              ))}
          </section>
          <Pagination
            totalPages={totalPages}
            paginate={paginate}
          />
        </>
      ) }
    </>
  );
}

export default ProductsList;
