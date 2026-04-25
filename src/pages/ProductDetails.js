import { useParams, useLocation } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();  // Get URL parameter
  const location = useLocation();  // Get current location info

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Current Path: {location.pathname}</p>
    </div>
  );
}

export default ProductDetails;