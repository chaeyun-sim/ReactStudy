import Search from "antd/lib/input/Search";
import React, {useState} from "react";

const SearchFeature = (props) => {
    const [searchTerm, setSearchTerm] = useState("")

    function searchHandler(event){
        setSearchTerm(event.target.value);
        props.refreshFunction(event.currentTarget.value);
    };

    return (
        <Search
            placeholder="Search your Destination..."
            onChange={searchHandler}
            value={searchTerm}
            style={{ width: 250, float: "right" }}
        />
    )
};

export default SearchFeature;