import React  from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px sold black;
    display:inline-block;
    padding:1rem;
    border-radius:3px;
    font-size:${(props)=>props.fontSize};
    &:hover {
        background:black;
        color:white;
    }
    background: ${(props)=>props.background};
    ${props => props.big && `
        font-size: 2rem;
        padding:2rem;
    `
    }
`;

const StyledButton = ({children, ...rest}) => {

    return(
        <Wrapper fontSize="1.25rem" {...rest} >
        {children}
        </Wrapper>
    );
}

export default StyledButton;