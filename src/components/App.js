import React, { useState, useEffect } from "react";
import SortingVisualizer from '../components/SortingVisualizer';
import Header from '../components/Header';
import { getSortingAlgosList } from '../data';
import { getSearchingAlgosList } from '../data';

export default function App() {
    const [algo, setAlgo] = useState('');
    const sortingAlgos= getSortingAlgosList();
    const searchingAlgos= getSearchingAlgosList();
    const handleSelectedAlgo = (algo) => {
        console.log(algo);
       setAlgo(algo);
      
    }
    return (
        <div className="container">
        <Header sorting={sortingAlgos} searching={searchingAlgos} handleSelectedAlgo={handleSelectedAlgo} />
  
        <SortingVisualizer algo={algo}></SortingVisualizer>
      </div>
    );
}
