import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    .inner  {
        padding-top :116px;
        width: 1200px;
        margin: auto;
    }
`
export const Table = styled.table`
    text-align:center;
    width:100%;
    border-top:2px solid #000;
    border-bottom:2px solid #000;
    tr{
        border-bottom:1px solid #999;
        th{
            height:50px;
            vertical-align:middle;
            font-size:16px;
            font-weight:bold;
        }
        td{
            height:98px;
            vertical-align:middle;
            padding:0 10px;
            font-size:18px;
            &:nth-child(2){
                text-align:left;
            }
            strong{
                font-weight:bold;
            }
        }
    }
       
`

export const Paginate = styled.div`
    display:flex;
    justify-content:center;
    margin-top:50px;
    margin-bottom:100px;
    p{
        padding:0 10px;
        cursor: pointer;
        i{
            display:inline-block;
            transform: translateY(2px);
        }
        &.on{
            color: #007FA8; 
            font-weight:600;
        }
        
    }

`