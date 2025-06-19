import React, { useState } from 'react'; // Importing React and useState hook for state management
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesome for icons
import { faEdit, faCircle, faUser, faChevronRight, faSync } from '@fortawesome/free-solid-svg-icons'; // Importing specific icons
import AddProductForm from './AddProductForm'; // Import AddProductForm component

// Function to determine the stock status color based on the status string
const stockStatusColor = (status) => {
    if (status.toLowerCase().includes('not available')) return 'border border-red-500  text-red-600'; // Red border and background for not available
    if (status.toLowerCase().includes('in stock')) {
        const number = parseInt(status); {/*Parsing the stock number*/}
        if (number < 30) return 'border border-orange-400  text-orange-600'; { /*Orange border and background for low stock*/}
        return 'border border-green-400  text-green-600'; {/* Green border and background for sufficient stock*/}
    }
    return 'border border-gray-300  text-gray-600'; // Gray border and background for other statuses
};

// Defining the ProductTable component
const ProductTable = () => {
    // State variables for search and filter inputs
    const [searchProduct, setSearchProduct] = useState('');
    const [searchBy, setSearchBy] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [colorFilter, setColorFilter] = useState('');
    const [thicknessFilter, setThicknessFilter] = useState('');
    const [diameterFilter, setDiameterFilter] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [showAddProductForm, setShowAddProductForm] = useState(false); // State to toggle AddProductForm

    // Mock data representing products
    const mockData = [
{ product: 'Green Sandal', code: 'bt005478', barcode: '-', category: 'Level 1 Cat', tax: 'CST / HST', price: '\$125.25', store: '200 In Stock', warehouse: '350 In Stock' },
{ product: 'Green Sandal', code: 'bt005478', barcode: '-', category: 'Level 1 Cat', tax: 'CST / HST', price: '\$125.25', store: '25 In Stock', warehouse: '350 In Stock' },
{ product: 'Green Sandal', code: 'bt005478', barcode: '-', category: 'Level 1 Cat', tax: 'HST', price: '\$125.25', store: '200 In Stock', warehouse: '20 In Stock' },
{ product: 'Green Sandal', code: '1102', barcode: '-', category: 'Level 1 Cat', tax: 'CST', price: '\$125.25', store: '200 In Stock', warehouse: '500 In Stock' },
{ product: 'Green Sandal', code: '1102', barcode: '-', category: 'Level 1 Cat', tax: 'CST', price: '\$125.25', store: 'Not Available', warehouse: '350 In Stock' },
{ product: 'Green Sandal', code: '-', barcode: '-', category: 'Level 1 Cat', tax: 'Not Applied', price: '\$125.25', store: '200 In Stock', warehouse: '350 In Stock' },
{ product: 'Green Sandal', code: '-', barcode: '-', category: 'Level 1 Cat', tax: 'Not Applied', price: '\$125.25', store: 'Not Available', warehouse: 'Not Available' },
{ product: 'Green Sandal', code: '-', barcode: '-', category: 'Level 1 Cat', tax: 'Not Applied', price: '\$125.25', store: '200 In Stock', warehouse: '350 In Stock' },
{ product: 'Green Sandal', code: '-', barcode: '-', category: 'Level 1 Cat', tax: 'CST / HST / VAT', price: '\$125.25', store: '200 In Stock', warehouse: '350 In Stock' },
    ];

    // Function to handle edit action on a product row
    const editProduct = (product) => {
        alert(`Edit product: ${product.product} (Code: ${product.code})`);
    };

    return (
        <div>
            {/* Search and Add Product section */}
            <div className="flex items-center space-x-6 mb-4">
                <div className="font-semibold text-lg mr-2 text-gray-400">Products</div>
                <input
                    type="text"
                    placeholder="Search product by name or id..."
                    className="border rounded p-2 flex-grow max-w-md" // Styling for the input
                    value={searchProduct} // Controlled input value
                    onChange={(e) => setSearchProduct(e.target.value)} // Updating state on change
                />
                <div className="flex items-center space-x-2 ml-4">
                    <div className="font-semibold text-lg text-gray-400">Search By</div>
                    <div className="flex items-center border rounded p-1 w-52">
                        <input
                            type="text"
                            placeholder=""
                            className="flex-grow outline-none"
                            value={searchBy}
                            onChange={(e) => setSearchBy(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
                    </div>
                </div>
                <button
                  onClick={() => setShowAddProductForm(true)}
                  className="bg-gradient-to-r from-teal-400 to-green-700
                shadow-green-700/50
               hover:brightness-110 text-white px-4 py-2 rounded"
                >
                  + Add Products
                </button>  {/*Button to add products*/}
            </div>
            {showAddProductForm && <AddProductForm onClose={() => setShowAddProductForm(false)} />}

            {/* Filter section for category, product, and sorting */}
            <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center mb-4">
                    <div className="font-semibold text-lg text-gray-400 mr-1 ">Category</div>
                    <div className="flex items-center border rounded p-2 w-32 flex-grow">
                        {/* Removed select options as per request */}
                        <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
                    </div>
                </div>
                <div className="flex items-center space-x-2 mb-2 flex-grow max-w-lg">
                    <div className="font-semibold text-lg text-gray-400 ">Select Product</div>
                    <div className="flex items-center border rounded p-1 w-32 flex-grow">
                        <input
                            type="text"
                            placeholder="Search product by name or id..."
                            className="flex-grow outline-none"
                            value={searchBy}
                            onChange={(e) => setSearchBy(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
                    </div>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                    <div className="font-semibold text-lg text-gray-400 ">Sort By</div>
                    <div className="flex items-center border rounded p-2 w-32 flex-grow">
                        {/* Removed select options as per request */}
                        <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Additional filters for color, thickness, diameter and refresh button */}
            <div className="flex items-center space-x-6 mb-4 border rounded p-2">
                <div className="flex items-center space-x-2 mb-4">
                    <div className="font-semibold text-lg text-gray-400 w-18">Color</div>
                    <div className="flex items-center border rounded p-2 w-32 flex-grow">
                        {/* Removed select options as per request */}
                        <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
                    </div>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                    <div className="font-semibold text-lg text-gray-400 w-24">Thickness</div>
                    <div className="flex items-center border rounded p-2 w-32 flex-grow">
                        {/* Removed select options as per request */}
                        <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
                    </div>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                    <div className="font-semibold text-lg text-gray-400 w-24">Diameter</div>
                    <div className="flex items-center border rounded p-2 w-32 flex-grow">
                        {/* Removed select options as per request */}
                        <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
                    </div>
                </div>
                <button className="flex items-center border  border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition duration-300 ml-auto">
                    <FontAwesomeIcon icon={faSync} className="mr-2" />
                    Refresh
                </button>
            </div>

            {/* Product table displaying the mock data */}
            <div className="h-[calc(100vh-340px)] overflow-y-auto relative overflow-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-gray-600">
                        <tr>
                            <th scope="col" className="px-6 py-3">Products</th>
                            <th scope="col" className="px-6 py-3">Product Code</th>
                            <th scope="col" className="px-6 py-3">Barcode</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Tax</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Store</th>
                            <th scope="col" className="px-6 py-3">Warehouse</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Action</span></th>
                        </tr>
                    </thead>
                <tbody>
                    {mockData.map((data, index) => (
                        <tr key={index} onClick={() => editProduct(data)} className="bg-white dark:bg-gray-800 dark:border-gray-700 border-b border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center space-x-2">
                                <FontAwesomeIcon icon={faUser} className="text-gray-600" />  {/*User profile icon replacing green dot*/}
                                <span>{data.product}</span>  {/*Product name*/}
                            </th>
                            <td className="px-6 py-4">{data.code}</td> {/*Product code*/}
                            <td className="px-6 py-4">{data.barcode}</td>  {/*Barcode*/}
                            <td className="px-6 py-4">{data.category}</td> { /*Category*/}
                            <td className="px-6 py-4">{data.tax}</td>  {/*Tax information*/}
                            <td className="px-6 py-4">{data.price}</td> {/* Price*/}
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${stockStatusColor(data.store)}`}>
                                    {data.store} {/*Store stock status*/}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${stockStatusColor(data.warehouse)}`}>
                                    {data.warehouse} {/* Warehouse stock status*/}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right cursor-pointer text-green-600">
                                <FontAwesomeIcon icon={faEdit} /> {/* Edit icon for actions*/}
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

// Exporting the ProductTable component for use in other files
export default ProductTable;
