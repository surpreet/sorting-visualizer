import React from "react";
import HeaderCategoryDropdown from "./HeaderCategoryDropdown";

export default function Header(props) {
    const searching=props.searching;
    const sorting=props.sorting;
    const handleSelectedAlgo=props.handleSelectedAlgo;
    return(
            <header class="page-header">         
                <HeaderCategoryDropdown algos={searching} categoryName={'Search'} handleSelectedAlgo={handleSelectedAlgo}/>
            <HeaderCategoryDropdown algos={sorting} categoryName={'Sort'} handleSelectedAlgo={handleSelectedAlgo}/>
            </header>



            

        );
}