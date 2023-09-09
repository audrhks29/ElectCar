import styled from 'styled-components'
export const SearchBox = styled.form`
    width: 1200px;
    height: 150px;
    padding: 45px 0;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    background: #e4dcd3;
    input{
        width: 640px;
        height: 60px;
        box-sizing: border-box;
        padding: 0 40px 0 24px;
    }
    button{
        background: #007fa8;
        width: 60px;
        height: 60px;
        border: none;
        font-size: 25px;
        cursor: pointer;
        color: white;
    }
`
export const ItemList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-top:30px;
    li{
        width: 384px;
        margin-right: 24px;
        margin-bottom: 24px;
        cursor: pointer;
        &:nth-child(3n){
            margin-right:0;
        }
        img{
            width: 384px;
        }
    }
    .moreBtnWrap{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items:center;
        i{
            font-size:50px;
            cursor: pointer;
        }
        button{
            border: none;
            background: transparent;
           margin-top:-20px;
           cursor: pointer;
        }
    }
    
`