//import styled component
import styled from "styled-components";
import { css } from "styled-components";



//membuat component button
const Button = styled.button`
    border-radius: 10px;
    color: #fff;
    border: none;
    cursor: pointer;

    //PROPS VARIANT
    background-color: ${({theme, variant}) => theme.colors[variant] || theme.colors.primary};
    font-size: ${(size) => {
        if(size === "sm"){
            return "0.8rem";
        }
        else if(size === "df"){
            return "1rem";
        }
        else if(size === "lg"){
            return "1.3rem";
        }
        else{
            return "0.8rem";
        }
    }};

    padding: ${(size) => {
        if(size === "sm"){
            return "0.2rem 0.5rem";
        }
        else if(size === "df"){
            return "0.5rem 1rem";
        }
        else if(size === "lg"){
            return "0.5rem 1rem";
        }
        else{
            return "0.2rem 0.5rem";
        }
    }}

    //PROPS FULL
    ${(props) => props.full && css`
    display: block;
    width: 68%`}
    `;

    //PROPS size
    

    

//export button
export default Button;