import styled from 'styled-components'
export const PrivacyWrap = styled.div`
   .inner{
        padding-top :116px;
        width: 1200px;
        margin: auto;
    h2{
        text-align: center;
        color: #000;
    font-size: 40px;
    margin-bottom: 50px;
    font-weight: 500;
    }
    div{
        background: #f6f3f2;
        padding: 60px;
        margin-bottom: 30px;
        strong{
            display: block;
            margin: 20px 0px;
            font-size: 20px;
            font-weight: 700;
            }
        p{
            color: #666;
            font-size: 18px;
            line-height: 30px;
            text-indent: -24px;
            padding-left: 24px;
        }
        .indent{
            text-indent: 0px;
        }
        table{
            margin: 5px 0px 5px 24px;
            width: 98%;
            .w1{width:18%}
            .w2{width:auto}
            .w3{width:22%}
            .w4{width:22%}
            .w5{width:20%}
            .w6{width:20%}
            .w7{width:auto}
            .w8{width:50%}
            .w9{width:50%}
            tr{
                th,td{
                    border: 1px solid #666;
                    padding: 10px 10px;
                    color: #666;
                }
                th{font-weight:600;}
                td{
                    p{font-size:15px;}
                }
            }
        }
    }}
`