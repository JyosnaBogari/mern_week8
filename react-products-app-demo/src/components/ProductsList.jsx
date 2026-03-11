import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  // a function that updates the value
  //a variable that stores the value
  const [category, setCategory] = useState(''); // new state for category

  const navigate = useNavigate();

  const gotoProducts = (productObj) => {
    //we need to give the name "state" only,because it is defined by the React
    navigate('/product', { state: { product: productObj } });
  };

  // useEffect : for One Rendering purpose
  useEffect(() => {
    async function getProducts() {
      try {
        // make API req call 
        let res = await fetch("https://fakestoreapi.com/products");
        // check res status code
        if (res.status === 200) {
          let productsData = await res.json();
          // setProducts of a data 
          setProducts(productsData);
        } else {
          throw new Error('Failed to fetch');
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    // calling function of products
    getProducts();
  }, []);

  // loading set
  if (loading) {
    return <p className="text-center text-2xl text-blue-300">Loading...</p>;
  }

  // error handling
  if (error) {
    return <p className="text-center text-2xl text-red-400">{error.message}</p>;
  }

  // Extract unique categories from products
  const categories = [...new Set(products.map(p => p.category))];

  // Filter products by search term and category
  const filteredProducts = products.filter(productObj =>
    productObj.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === '' || productObj.category === category)
  );

  return (
    <>
      <div className="flex justify-center gap-4 mt-5 mb-10">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg w-64"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg w-64"
        >
          <option value="">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 text-center">
        {filteredProducts.map(product => (
          <div
            onClick={() => gotoProducts(product)}
            key={product.id}
            className="p-10 rounded-1xl bg-gray-100 text-center hover:bg-gray-200 cursor-pointer"
          >
            <h2 className="text-lg font-bold">{product.title}</h2>
            <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mx-auto" />
            <p className="text-2xl">${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductsList;