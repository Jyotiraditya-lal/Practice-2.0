import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = () => {

  const products=[{
    id: 'p1',
    title: 'Book',
    price: 13,
    description: 'First book'
  },
  {
    id: 'p2',
    title: 'Pen',
    price: 3,
    description: 'Blue pen'
  },
  {
    id: 'p3',
    title: 'Copy',
    price: 9,
    description: 'Rough copy'
  }
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product)=>
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
