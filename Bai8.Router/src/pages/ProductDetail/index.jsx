import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <div>
      San phan co thong tin la - {params.id}
      <div>
        <button>
          <Link to={"/pages/Product"}>Back</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
