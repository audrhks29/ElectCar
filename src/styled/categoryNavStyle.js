import styled from 'styled-components'

export const Category = styled.ul`
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    li{
        font-size:18px;
        font-weight:600;
        cursor: pointer;
        padding: 20px 0;
        &:hover, a:hover{
            color: #007FA8; 
        }
        &.on{
            color: #007FA8;
        }
    } 
`
export const Search = styled.button`
    background-color:#e4dcd3;
    width: 90px;
    height: 40px;
    border-radius:20px;
    align-self: center;
    font-size:16px;
    text-align:right;
    cursor: pointer;
    border: none;
    display:flex;
    line-height:45px;
    box-sizing: border-box;
    padding: 0 10px;
    justify-content:space-around;
`