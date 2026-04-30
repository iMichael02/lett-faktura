import { useDispatch, useSelector } from "react-redux";
import "../../styles/secure/pricelist.css";
import { useEffect } from "react";
import {
    priceListingRequest,
    priceUpdateRequest,
} from "../../redux/prices/action";

export const PriceList = () => {
    const prices = useSelector((state) => state.prices.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(priceListingRequest());
    }, [dispatch]);

    const handleSave = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const priceId = form.id;
        const priceData = Object.fromEntries(formData);
        dispatch(priceUpdateRequest({ id: priceId, ...priceData }));
    };

    return (
        <div className="product-table-wrapper">
            <div className="top-actions">
                <div className="search-area">
                    <div className="search-field">
                        <input placeholder="Search Article No... " />
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

            {prices.map((price) => (
                <form
                    key={price.id}
                    id={price.id}
                    onSubmit={(e) => handleSave(e)}
                ></form>
            ))}

            <table className="product-table">
                <thead>
                    <tr>
                        <th></th>
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
                        <tr key={price.id}>
                            <td>
                                <button className="save-button" form={price.id}>
                                    👉
                                </button>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="articleNo"
                                    defaultValue={price.articleNo}
                                    form={price.id}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="product"
                                    defaultValue={price.product}
                                    form={price.id}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="inPrice"
                                    defaultValue={price.inPrice}
                                    form={price.id}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="price"
                                    defaultValue={price.price}
                                    form={price.id}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="unit"
                                    defaultValue={price.unit}
                                    form={price.id}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="inStock"
                                    defaultValue={price.inStock}
                                    form={price.id}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="description"
                                    defaultValue={price.description}
                                    form={price.id}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
