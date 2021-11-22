import React from "react";
import ListContainer from "../ListContainer";
import Heading from "../../Atoms/Text/Text";
import SingleSelect from "../../Atoms/SingleSelect/SingleSelect";

const MainContainer = () => {
    return <React.Fragment>
        <Heading />       
        <SingleSelect />  
        <ListContainer /> 
    </React.Fragment>;
};

export default MainContainer;
