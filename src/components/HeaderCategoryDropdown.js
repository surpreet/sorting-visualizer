import React from 'react'


export default function HeaderCategoryDropdown(props) {  
    return (
            <div>
                <div class="dropdown">
                <div class="dropbtn">{`Choose a ${props.categoryName} algo`}</div>
                <div class="dropdown-content">
                    {props.algos.map((algo) => {
                    return (
                    <button onClick={() => props.handleSelectedAlgo(algo)}>{algo}</button>
                    );
                })}
                </div>
                </div>
                {/* <div class="">
                        <select  >
                        <option value="select">Select</option>
                        {props.algos.map((algo) => {
                                return (
                                <option value={algo}>{algo}</option>
                                );
                            })}
                        </select>
                    </div> */}
        
            </div>  
        
            )

    
}
