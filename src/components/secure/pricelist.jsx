import { useDispatch, useSelector } from "react-redux";
import "../../styles/secure/pricelist.css";
import { useEffect } from "react";
import { priceListingRequest } from "../../redux/prices/action";

export const PriceList = () => {
    const prices = useSelector((state) => state.prices.items);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Dispatching price listing request...");
        dispatch(priceListingRequest());
    }, [dispatch]);

    return (
        <div className="product-table-wrapper">
            <div className="top-actions">
                <div className="search-area">
                    <div className="search-field">
                        <input placeholder="Search Article No..." />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e3e3e3"
                        >
                            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                        </svg>
                    </div>
                    <div className="search-field">
                        <input placeholder="Search Product ..." />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e3e3e3"
                        >
                            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                        </svg>
                    </div>
                </div>

                <div className="action-buttons">
                    <button>New Product</button>
                    <button>Print List</button>
                    <button>Advanced mode</button>
                </div>
            </div>

            <table className="product-table">
                <thead>
                    <tr>
                        <th>Article No</th>
                        <th>Product/Service</th>
                        <th>In Price</th>
                        <th>Price</th>
                        <th>Unit</th>
                        <th>In Stock</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    {prices.map((price) => (
                        <tr key={price.articleNo}>
                            <td>
                                <input
                                    type="text"
                                    defaultValue={price.articleNo}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    defaultValue={price.product}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    defaultValue={price.inPrice}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    defaultValue={price.price}
                                />
                            </td>
                            <td>
                                <input type="text" defaultValue={price.unit} />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    defaultValue={price.inStock}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    defaultValue={price.description}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
