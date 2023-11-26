import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const ModifierProduit = ({ handleClose, product }) => {
  const { user } = useAuthContext();

  const [name, setName] = useState(product?.name || "");
  const [category, setCategory] = useState(product?.category || "");
  const [price, setPrice] = useState(product?.price || "");
  const [stock, setStock] = useState(product?.stock || "");
  const [description, setDescription] = useState(product?.description || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name: name,
      category: category,
      price: price,
      stock: stock,
      description: description,
    };

    if (product && product._id) {
      try {
        const response = await fetch(`/api/products/${product._id}`, {
          method: "PATCH",
          body: JSON.stringify(productData),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (response.ok) {
          const updatedProductData = await response.json();
          alert("Product updated successfully:", updatedProductData);
          handleClose();
        } else {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.indexOf("application/json") !== -1) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Unknown error");
          } else {
            const errorText = await response.text();
            throw new Error(errorText || "Unknown error");
          }
        }
      } catch (error) {
        console.error("Error updating product:", error.message);
        alert(`Error updating product: ${error.message}`);
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 z-10 flex h-full  items-center justify-center ml-[800px]">
      <div className="rounded-md bg-white p-8 border-2 shadow-lg border-green-400 w-[500px]">
        <h2 className="mb-4 text-xl font-semibold text-center text-green-600">
          Modifier Produit
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>
            Libelle:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Prix:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Stock:
            <input
              type="text"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Categorie:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>

          <button
            className="text-indigo-00 text-green-600 text- mt-4 rounded py-2 px-4 font-bold hover:text-green-600"
            type="submit"
          >
            Enregistrer
          </button>
          <button
            className="mt-2 rounded bg-gray-500 py-2 px-4 font-bold text-white hover:bg-gray-600"
            type="button"
            onClick={handleClose}
          >
            Annuler
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModifierProduit;
