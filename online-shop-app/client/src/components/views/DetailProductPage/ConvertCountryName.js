import React from "react";
import {countryToAlpha2} from 'country-to-iso';
import { countryCodeEmoji } from "country-code-emoji";

const ConvertCountryName = (props) => {
    const iso = countryToAlpha2(props.value);
    if (iso === null){
        return '';
    }

    let style;
    if (props.direction === 'left'){
        style = { marginRight: '20px' }
    } else {
        style = { marginLeft: '20px' }
    }
    const flag = countryCodeEmoji(iso.toString())
    return (
        <h1 style={{ display: "flex"}}>
            <span style={ style }>
                {flag}
            </span>
        </h1>
    )
}

export default ConvertCountryName