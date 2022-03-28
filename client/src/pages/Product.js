import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// import PRODUCTS from '../products';

const API_URL = "http://localhost:5000"

const Product = () => {
    let params = useParams();
    const [product, setProduct] = useState(null)
    useEffect(() => {
        fetch(`${API_URL}/products/${params.sku}`)
            .then((res) => res.json())
            .then((result) => {
                setProduct(result);
            });
    }, [params.sku]);
    if (!product) {
        return <p>Loading...</p>
    }
    // const product = PRODUCTS.find(({ sku }) => sku === params.sku);
    const { sku, name, description, image, price, discountPrice } = product;
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img
                            className="card-img-top mb-5 mb-md-0"
                            src={image}
                            alt={name}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">{sku}</div>
                        <h1 className="display-5 fw-bolder">{name}</h1>
                        <div className="fs-5 mb-5">
                            {discountPrice
                                ? <><span className="text-decoration-line-through">{price}:-</span><span>{discountPrice}:-</span></>
                                : <span>{price}:-</span>
                            }
                        </div>
                        <p className="lead">{description}</p>
                        <div className="d-flex">
                            <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxWidth: "3rem" }} />
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
