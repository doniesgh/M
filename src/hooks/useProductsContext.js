import { ProductsContext } from '../context/ProductsContext'
import { useContext } from 'react'

export const useProductsContext = () => {
  const context = useContext(ProductsContext)

  if (!context) {
    throw Error('useProductsContext must be used inside an PorkoutsContextProvider')
  }

  return context
}