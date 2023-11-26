import React, { useState, useEffect } from 'react';
import Card from '../../components/card';

const NbClient = () => {

  return (
    <div  className="h-[50px] flex flex-col rounded-[200px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none" >
        <p className="text-lg text-tunisys-100 font-bold dark:text-white">Nombre Clients</p>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8 md:space-y-0">
          <div className="flex flex-col items-center">
            25 Clients
          </div>
        </div>
    </div>
  );
};

export default NbClient;
