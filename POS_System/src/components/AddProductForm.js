import React, { useState } from 'react';

const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const GreenCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-green-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const RefreshIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-green-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582M20 20v-5h-.581M4.582 9a8 8 0 0114.836 0M19.418 15a8 8 0 01-14.836 0" />
  </svg>
);

const AddProductForm = ({ onClose }) => {
  const [taxes, setTaxes] = useState({
    GST: false,
    HST: false,
    VAT: false,
    Tax: false,
  });

  const toggleTax = (tax) => {
    setTaxes((prev) => ({
      ...prev,
      [tax]: !prev[tax],
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg border-2 border-green-500 w-4/5 max-w-4xl max-h-[90vh] overflow-y-auto p-6 relative">
        <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
          <span>Add New Product</span>
          <button
            type="button"
            className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600"
          >
            Scan Barcode
          </button>
        </h2>

        {/* Top row: Category and Product Name */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <label className="font-semibold text-gray-600 mb-1 block">
              Category <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Select Category"
              className="w-full border border-gray-300 rounded px-3 py-2 pr-8"
            />
            <div className="absolute top-9 right-3 pointer-events-none">
              <RightArrowIcon />
            </div>
          </div>
          <div>
            <label className="font-semibold text-gray-600 mb-1 block">
              Product Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Second row: Product Descriptions, Re Order Level, Expire Alert Days */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="col-span-2">
            <label className="font-semibold text-gray-600 mb-1 block">
              Product Descriptions
            </label>
            <input
              type="text"
              placeholder="Product Descriptions"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="font-semibold text-gray-600 mb-1 block">
              Re Order Level <span className="text-gray-500">(Stock)</span> <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              placeholder="Re Order Level"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="font-semibold text-gray-600 mb-1 block">
              Expire Alert Days <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              placeholder="Expire Alert Days"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Tax checkboxes with custom green check icons */}
        <div className="flex items-center space-x-6 mb-4 font-bold text-gray-700">
          {['GST', 'HST', 'VAT', 'Tax'].map((tax) => (
            <label
              key={tax}
              className="flex items-center space-x-1 cursor-pointer select-none"
              onClick={() => toggleTax(tax)}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={taxes[tax]}
                readOnly
              />
              {taxes[tax] ? <GreenCheckIcon /> : <div className="h-6 w-6 border border-gray-400 rounded" />}
              <span>{tax}</span>
            </label>
          ))}
        </div>

        {/* Image upload and product code row */}
        <div className="grid grid-cols-4 gap-4 mb-4 items-center">
          <div className="col-span-2 flex items-center space-x-2">
            <label className="font-semibold text-gray-600">Image upload</label>
            <div className="border border-gray-300 rounded px-3 py-2 flex items-center cursor-pointer bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
              </svg>
              <input type="file" className="hidden" />
            </div>
            <label className="flex items-center space-x-1 ml-4">
              <input type="checkbox" className="w-5 h-5 text-green-600" />
              <span>Use Scale</span>
            </label>
          </div>
          <div>
            <label className="font-semibold text-gray-600 mb-1 block">
              Product Code <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Product Code"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Quantity and Unit of Scale */}
        <div className="grid grid-cols-4 gap-4 mb-4 items-center">
          <div>
            <label className="font-semibold text-gray-600 mb-1 block">
              Quantity <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="font-semibold text-gray-600 mb-1 block">
              Unit of Scale <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="kg"
              defaultValue="kg"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
              readOnly
            />
          </div>
          <div></div>
          <div></div>
        </div>

        {/* Product Location section */}
        <fieldset className="border border-gray-300 rounded p-4 mb-4">
          <legend className="font-semibold text-gray-700 mb-2">Product Location</legend>
          <div className="grid grid-cols-4 gap-4">
            <div className="relative">
              <label className="font-semibold text-gray-600 mb-1 block">Location</label>
              <input
                type="text"
                placeholder="Location"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="relative">
              <label className="font-semibold text-gray-600 mb-1 block">Rack Name <span className="text-red-600">*</span></label>
              <input
                type="text"
                placeholder="Rack Name"
                className="w-full border border-gray-300 rounded px-3 py-2 pr-8"
              />
              <div className="absolute top-9 right-3 pointer-events-none">
                <RightArrowIcon />
              </div>
            </div>
            <div className="relative">
              <label className="font-semibold text-gray-600 mb-1 block">Rack Column <span className="text-red-600">*</span></label>
              <input
                type="text"
                placeholder="Rack Column"
                className="w-full border border-gray-300 rounded px-3 py-2 pr-8"
              />
              <div className="absolute top-9 right-3 pointer-events-none">
                <RightArrowIcon />
              </div>
            </div>
            <div className="relative">
              <label className="font-semibold text-gray-600 mb-1 block">Rack Row <span className="text-red-600">*</span></label>
              <input
                type="text"
                placeholder="Rack Row"
                className="w-full border border-gray-300 rounded px-3 py-2 pr-8"
              />
              <div className="absolute top-9 right-3 pointer-events-none">
                <RightArrowIcon />
              </div>
            </div>
          </div>
        </fieldset>

        {/* Bottom buttons */}
        <div className="flex justify-between items-center">
          <div className="p-1 rounded-full border border-green-600">
            <RefreshIcon />
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
