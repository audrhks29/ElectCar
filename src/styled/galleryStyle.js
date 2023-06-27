import styled from 'styled-components'

export const Inner = styled.div`
    width: 1200px;
    margin: auto;
    h4{
        font-size:45px;
        font-weight:600;
        text-align:center;
        padding: 30px 0;
    }
`
export const ItemList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    img{
        width:384px;
    }
`
export const PopUp = styled.div`
    width: 1200px;
    margin: auto;
    display: flex;
    height: 720px;
    position: fixed;
    z-index:10;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    background:white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`
export const PopUpLeft = styled.div`
    width: 720px;
    img{
        display:block;
        width: 580px;
        margin: 70px auto;
    }
`
export const PopUpRight = styled.div`
    padding: 60px;
    width: 480px;
    background-color: #e4dcd3;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    box-sizing: border-box;
    position: relative;
    .title1{
        font-size:21px;
        color: #007FA8;
    }
    .title2{
        font-size:36px;
        line-height: 50px;
    }
    
    button{
        border-radius:50%;
        border:none;
        color: #fff;
        background: #D5c889;
        font-size:26px;
        width: 40px;
        height: 40px;
        margin-top:30px;
        margin-bottom:150px;
        margin-right:15px;
        cursor:pointer;
    }
    .tagBox{
        align-items:flex-end;
        span{
        margin-right:20px;
        display: inline-block;
    }
    }
    .right_bottom{
        display:flex;
        justify-content:space-between;
        line-height:62px;
        .share{
            cursor: pointer;
            img{
            width: 14px;
            height: 14px;
            margin-right:5px;
            }
        }
        .sns{
            display: flex;
            width: 210px;   
            justify-content:space-between;
            img{
                width: 56px;
                height: 56px;
                cursor: pointer;
            }
        }
    }
    .popUpCloseBtn{
        position: absolute;
        top: 20px;
        right: 20px;
        font-size:30px;
        cursor: pointer;
    }
`
