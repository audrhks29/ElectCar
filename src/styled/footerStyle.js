import styled from 'styled-components'

export const Footer = styled.div`
padding: 60px 0;
    background: #303030;
    color:white;
    .inner{
        display: flex;
        justify-content: space-between; 
        flex-direction: column;
        height: 160px;
        p{
            width: 100%;
            img{
                display: block;
                margin: 0 auto;
            }
        }
        span{
            display: block;
            text-align:center;
            font-size:14px;
        }
        .footerMenu{
            width: 100%;
            ul{
                display: flex;
                margin: auto;
                justify-content:center;
                li{
                    font-size: 18px;
                    padding: 0 20px;
                    position: relative;
                    &:before{
                        content: '·';
                        position: absolute;
                        left: 0;
                    }
                    &:nth-child(1){
                        &:before{display: none;}
                    }
                }
            }
        }
    }        
`