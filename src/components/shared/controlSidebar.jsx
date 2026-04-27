import "../../styles/shared/controlSidebar.css";

export const ControlSideBar = () => {
    const menuItems = [
        "Invoices",
        "Customers",
        "My Business",
        "Invoice Journal",
        "Price List",
        "Multiple Invoicing",
        "Unpaid Invoices",
        "Offer",
        "Inventory Control",
        "Member Invoicing",
        "Import/Export",
        "Log out",
    ];

    return (
        <aside className="control-sidebar">
            <h2 className="sidebar-title">Menu</h2>

            <ul className="sidebar-menu">
                {menuItems.map((item) => (
                    <li
                        key={item}
                        className={`menu-item ${item === "Price List" ? "active" : ""}`}
                    >
                        <span className="menu-icon">•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};
