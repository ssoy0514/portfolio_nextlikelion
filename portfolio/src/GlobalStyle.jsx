import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    max-width: 480px;
    min-height: 100vh;
    font-family: 'Noto Sans KR', sans-serif;
    `;

const GlobalStyle = ({ children }) => {
    return (
        <>
            
            <Container>
                {children}
            </Container>
        </>
    )
}

export default GlobalStyle;