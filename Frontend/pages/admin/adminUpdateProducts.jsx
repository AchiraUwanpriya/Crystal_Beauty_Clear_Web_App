import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mediaUpload from "../../src/utils/mediaUpload";
import toast from "react-hot-toast";
import axios from "axios";

export default function UpdateProductPage() {
  const location = useLocation();
  const [productId, setProductId] = useState(location.state.productID);
  const [name, setName] = useState(location.state.productName);
  const [altnames, setAltNames] = useState(location.state.altNames.join(", "));
  const [description, setDescription] = useState(location.state.description);
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState(location.state.price);
  const [labelledPrice, setLabelledPrice] = useState(location.state.labelledPrice);
  const [category, setCategory] = useState(location.state.category);
  const [stock, setStock] = useState(location.state.stock);
  const navigate = useNavigate();


async function updateProduct() {

  const token = localStorage.getItem("token");

  if (token == null){
    navigate("/login");
    return;
  }

  const promises = [];

  for(let i = 0; i < images.length; i++){
     promises[i] = mediaUpload(images[i]);
   }

  try{

let urls = await Promise.all(promises);

if (urls.length == 0){
    urls = location.state.images;
}

const allternativeNames = altnames.split(",");

const product ={
  productID : productId,
  productName : name,
  altNames : allternativeNames,
  description : description,
  images : urls,
  price : price,
  labelledPrice : labelledPrice,
  category : category,
  stock : stock
}

await axios.put(import.meta.env.VITE_API_URL + "/api/products/" + productId, product, {
  headers: {
    Authorization: "Bearer " + token
  }
})
toast.success("Product updated successfully");
navigate("/admin/products");


}catch{
  toast.error("Error updating product. Please try again.");
}
}

 return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-orange-50 to-pink-50 p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-10 flex flex-col gap-6  ">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Update Product</h2>
          <p className="text-sm text-gray-500">
            Create a new SKU with clean metadata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Product ID</label>
            <input
              disabled
              type="text"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              placeholder="e.g., DS-CR-001"
              className="p-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-accent focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Diamond Shine Night Cream"
              className="p-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-accent focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Alternative Names</label>
          <input
            type="text"
            value={altnames}
            onChange={(e) => setAltNames(e.target.value)}
            placeholder="Comma-separated; e.g., night cream, hydrating cream"
            className="p-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-accent focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief product overview, benefits, and usage."
            className="p-3 border border-gray-300 rounded-xl h-28 resize-none placeholder-gray-400 focus:ring-2 focus:ring-accent focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Images</label>
          <input
            type="file"
            onChange={(e) => setImages(e.target.files)}
            multiple
            className="p-2 border border-gray-300 rounded-xl file:mr-3 file:px-4 file:py-2 file:border-0 file:rounded-lg file:bg-accent file:text-white hover:file:bg-accent/90 cursor-pointer focus:ring-2 focus:ring-accent focus:outline-none"
          />
          <p className="text-xs text-gray-400">PNG/JPG recommended. Multiple files supported.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0"
              className="p-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-accent focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Labelled Price</label>
            <input
              type="number"
              value={labelledPrice}
              onChange={(e) => setLabelledPrice(e.target.value)}
              placeholder="0"
              className="p-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-accent focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Category</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-3 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-accent focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Stock</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="0"
              className="p-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-accent focus:outline-none"
            />
          </div>
        </div>

        <button onClick={updateProduct} className="w-full py-3 bg-accent/50 text-secondary rounded-xl font-medium ring-1 ring-accent/30  hover:border-accent hover:border-[2px] transition mt-2 cursor-pointer">
          Update Product
        </button>
         <button onClick={() => navigate("/admin/products")} className="w-full py-3 bg-[#FF000050] text-secondary rounded-xl font-medium hover:border-red-500 hover:border-[2px] transition mt-2 cursor-pointer">
          Cancel
        </button>
        
      </div>
    </div>
  );
}
