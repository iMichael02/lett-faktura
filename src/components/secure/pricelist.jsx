import "../../styles/secure/pricelist.css";

export const PriceList = () => {
    return (
        <div className="product-table-wrapper">
            <div className="top-actions">
                <div className="search-area">
                    <input placeholder="Search Article No..." />
                    <input placeholder="Search Product ..." />
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
                    <tr>
                        <td>1234567890</td>
                        <td>
                            This is a test product with fifty characters this!
                        </td>
                        <td>900500</td>
                        <td>1500800</td>
                        <td>kilometers/hour</td>
                        <td>2500600</td>
                        <td>
                            This is the description with fifty characters this
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
