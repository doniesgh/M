import React from 'react'

const NbProduit = () => {
  return (
    <div  className=" relative flex flex-col rounded-[200px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none" >
    <p className="text-lg text-tunisys-100 font-bold dark:text-white">Nombre Produits</p>
    <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8 md:space-y-0">
      <div className="flex flex-col items-center">
        250 produits
        {/*clientCount !== null && <p className="text-4xl mt-5 text-tunisys-100 font-bold dark:text-white">{clientCount}</p>*/}
      </div>
    </div>
</div>  )
}

export default NbProduit