import React, { useState } from 'react';
import { useInterval } from 'react-use';
import styled from 'styled-components';

const Main = styled.div`
    width: 100%;
`;

const Container = styled.div`
    @keyframes rain {
      0% { margin-top: 0; }
      100% { margin-top: 700px; }
    }    
    top: 10px;
    left: ${props => props.offset}px;    
    position: absolute;
    font-size: 50px;
    font-weight: lighter;
    color: ${props => props.theme.title};
    animation-name: rain;
    animation-duration: 5s;
`;

function SymbolRain(props) {
    const [symbolsToRender, setsymbolsToRender] = useState([{ offset: 0, key: 0, symbol: '' }]);
    useInterval(() => {
        if (symbolsToRender.length > 20) {
            symbolsToRender.shift();
        }
        const offset = Math.floor(Math.random() * 2000);
        const key = offset + Math.random() * 100;
        const symbol = props.img;
        symbolsToRender.push({ offset, key, symbol });
        setsymbolsToRender([...symbolsToRender]);
    }, 100);
    return (
        <Main>
            {symbolsToRender.map(({ key, symbol, offset }) => {
                return (
                    <Container key={key} offset={offset}>
                        {symbol}
                    </Container>
                );
            })}
        </Main>
    );
}

function Header() {
    return (
        <>
            <SymbolRain img='⎔' />
            <SymbolRain img='▪' />
        </>
    );
}

export default Header;