import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideNabar from "../components/sideNabar";
import { useAuthContext } from '../hooks/useAuthContext';
import ModifierProduit from "./ModifierProduit";

const GestionProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { user } = useAuthContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products', {
          headers: { 'Authorization': `Bearer ${user.token}` },
        });

        if (response.ok) {
          const productsData = await response.json();
          setProducts(productsData);
        } else {
          // Handle error if needed
        }
      } catch (error) {
        console.log(error)
      }
    };

    if (user) {
      fetchProducts();
    }
  }, [user]);
  const handleClick = async (productId) => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete product: ${response.statusText}`);
      }
  
      // Check if the response is JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const json = await response.json();
        console.log("Product deleted successfully:", json);
      } else {
        // If not JSON, assume it's plain text
        const text = await response.text();
        console.log("Product deleted successfully:", text);
      }
  
      alert("Product deleted successfully"); // Success message
    } catch (error) {
      alert(`Error deleting product: ${error.message}`); // Error message
    }
  };
  
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = (product) => {
    setIsModalOpen(true);
    setSelectedProduct(product);
  };
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideNabar/>
 
          <div class="mt-[90px] overflow-x-auto sm:-mx-6  sm:px-6 lg:-mx-8 pr-10 lg:px-8 	">
            <div class="align-middle inline-block  mt-3 shadow overflow-hidden bg-white shadow-dashboard rounded-bl-lg rounded-br-lg">
              <table class="w-[500px]">
                <thead>
                  <tr>
                    <th class="px-9 py-3 border-b-2 border-gray-300 text-left  tracking-wider">
                      ID
                    </th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left   tracking-wider">
                      Libelle
                    </th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left    tracking-wider">
                      Stock
                    </th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left  leading-4  tracking-wider">
                      Categorie
                    </th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left  leading-4  tracking-wider">
                      Prix
                    </th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left    tracking-wider">
                      Description
                    </th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading- tracking-wider">
                      Modifier
                    </th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left  leading-4 tracking-wider">
                      Supprimer
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {products && products.map((product) => (
                                <tr key={product._id}>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                        <div className="flex items-center">
                                            <div>
                                                <div className="text-sm leading-5">{product._id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                        <div className="text-sm leading-5 ">{product.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b  border-gray-500 text-sm leading-5">{product.stock}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b  border-gray-500 text-sm leading-5">{product.category}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b  border-gray-500 text-sm leading-5">{product.price}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-sm leading-5">{product.description}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                        <button className="px-5 py-2 border-green-500 border text-green-500 rounded transition duration-300 hover:bg-green-500 hover:text-white focus:outline-none" onClick={() => handleOpenModal(product)}

                                        >Modifier</button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                        <button className="px-5 py-2 border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-500 hover:text-white focus:outline-none" onClick={() => handleClick(product._id)}>Supprimer</button>
                                    </td>
                                </tr>
                            ))}
                 
                 
                </tbody>
              </table>

              <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
                <div></div>
                <div>
                  <nav class="relative z-0 inline-flex shadow-sm">
                    <div>
                      <a
                        href="#"
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-tunisys-100 hover:text-tunisys-100 focus:z-10 focus:outline-none focus:border-tunisys-100 focus:shadow-outline-blue active:bg-gray-100 active:text-tunisys-100 transition ease-in-out duration-150"
                        aria-label="Previous"
                      >
                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium  focus:z-10 focus:outline-none focus:border-tunisys-100 focus:shadow-outline-blue active:bg-tertiary active:text-tunisys-100  transition ease-in-out duration-150 hover:bg-tertiary"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium  focus:z-10 focus:outline-none focus:border-tunisys-100 focus:shadow-outline-blue active:bg-tertiary active:text-tunisys-100 transition ease-in-out duration-150 hover:bg-tertiary"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium0 focus:z-10 focus:outline-none focus:border-tunisys-100 focus:shadow-outline-blue active:bg-tertiary active:text-tunisys-100  transition ease-in-out duration-150 hover:bg-tertiary"
                      >
                        3
                      </a>
                    </div>
                    <div v-if="pagination.current_page < pagination.last_page">
                      <a
                        href="#"
                        class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-tunisys-100 hover:text-tunisys-100 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                        aria-label="Next"
                      >
                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
              {isModalOpen && (
                <div className="modal">
                  <div className="modal-content border-x-violet-800	">
                    <span
                      className="close"
                      onClick={() => setIsModalOpen(false)}
                    >
                      &times;
                    </span>
                    {isModalOpen && (
                      <ModifierProduit
                        handleClose={handleCloseModal}
                        product={selectedProduct}
                      />
                    )}
                  </div>
                </div>
                )}
            </div>
          </div>
        </div>

    </>
  );
};

export default GestionProducts;
