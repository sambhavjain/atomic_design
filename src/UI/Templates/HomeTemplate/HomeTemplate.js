import React from "react";
import Header from "../../Organisms/Header";
import MainContainer from "../../Organisms/MainContainer";
import AsideContainer from "../../Organisms/AsideContainer";
import {
    StyledTemplateWrapper,
    StyledHomeWrapper,
} from "./HomeTemplate.styled";

const HomeTemplate = ({}) => {
    return (
        <StyledTemplateWrapper>
            <Header />
            <StyledHomeWrapper>
                <MainContainer />
                <AsideContainer />
            </StyledHomeWrapper>
        </StyledTemplateWrapper>
    );
};

export default HomeTemplate;
