import React, { useState, useEffect } from "react";
import {getMergeSortAnimations} from '../sortingAlgorithms/mergeSort.js';
import {heap_Sort} from '../sortingAlgorithms/heapSort.js';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 70;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


export default function SortingVisualizer(props) {
    const [arr, setArr] = useState([]);
    const [color, setColor] = useState('turquoise');
    useEffect(() => {
        resetArray();
      }, []);
      useEffect(() => {
        if(props.algo==='Merge Sort'){
            mergeSort();
        }
        if(props.algo==='Bubble Sort'){
          mergeSort();
      }
      if(props.algo==='Quick Sort'){
        mergeSort();
    }
    if(props.algo==='Heap Sort'){
      heapSort();
  }
      }, [props.algo]);
    function resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
          array.push(randomIntFromInterval(5, 730));
        }
        setArr(array);
      }
      function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      function heapSort()
      {
        const animations= heap_Sort(arr);
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
         
            setTimeout(() => {
              const [barOneIdx, barOneValue, barTwoIdx, barTwoValue] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
              barOneStyle.width = `${barTwoValue}px`;
              barTwoStyle.width = `${barOneValue}px`;
            }, i * ANIMATION_SPEED_MS);
            
        }
      }

      function mergeSort() {
        const animations = getMergeSortAnimations(arr);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            // const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setColor(i % 3 === 0 ? 'red' : 'yellow');
            console.log(color);
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.width = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
      }
      
    
    return (
        <div className="items">
            {props.algo}
            <ul className="items-list">
        {arr.map((value, idx) => (
          <li>
            <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              width: `${value}px`,
            }}></div></li>
        ))}
       
      </ul>
        </div>
    );
}
