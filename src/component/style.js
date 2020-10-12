import styled from 'styled-components';

export const Grid = styled.div`
        display : flex;
        justify-content: center;
        height : 50px;
`;

export const Row = styled.div`
        margin-top: 6px;
        display : flex;
`;

export const Col = styled.div`
        flex: ${(props) => props.size};
        text-align: center;
        width: ${(props) => props.width};
`;