import styled, { keyframes } from 'styled-components'

export const Header = styled.div`
    position: absolute;
    z-index:10;
    width: 100%;
    .inner{
        width: 1200px;
        margin: auto;
        box-sizing: border-box;
        padding:34px 0;
        display:flex;
        justify-content: space-between;
        color: white;
        }
        i{
            cursor: pointer;
            font-size: 30px;
            z-index:20;
        }
        .bgbg{
            background-color: #000000;
            height: 100%;
        }
`
const slideDownAnimation = keyframes`
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
    }
`;
export const NavigationBar = styled.div`
    max-width: 100%;
    background: white;
    display: flex;
    justify-content:center;
    margin: 0 auto;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0; 
    right: 0; 
    height: 700px;
    z-index: 10;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: transform 1s ease;
        &.show {
            animation: ${slideDownAnimation} 1s ease forwards;
        }
`;

// export const NavigationBarLeft = styled.div`
//     width:960px;
//     /* position: relative; */
// `
export const NavigationBarRight = styled.div`
    width: 960px;
    height: 700px;
    box-sizing: border-box;
    ul{
        padding:87px 360px 0 140px;
        li{
        padding: 35px 0 30px 0;
        border-bottom: 1px solid #acacac;
        font-size:40px;
            &:last-child{
                border-bottom: none;
            }
            span{
                cursor: pointer;
                &:hover{
                    font-weight: 700;
                }
            }
        }
    }
    
`
