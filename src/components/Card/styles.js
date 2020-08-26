import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background: #FFF;
    border-radius:5px;
    margin-bottom:10px;
    padding:15px;
    box-shadow: 2px 4px 4px 2px rgba(192,208,230,0.8);
    border-top: 20px solid rgba(230,236,245,0.5);
    cursor:grab;


    header{
        position: absolute;
        top:-22px;
        left:15px;
    }

    p {
        font-weight: 500;
        line-height:20px;
    }

    img {
        width:30px;
        height: 30px;
        border-radius:50%50%;
        margin-top:5px;
    }
`;

export const Label = styled.span`
    width: 10px;
    height:10px;
    border-radius: 2px;
    display: inline-block;
    background: ${props => props.color}
`;