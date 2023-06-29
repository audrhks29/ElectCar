import React, { memo, useState } from 'react';
import { Header, NavigationBar, NavigationBarLeft, NavigationBarRight } from '../styled/commonHeaderStyle';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
const CommonHeader = memo(() => {
    const [isNavToggle, setIsNavToggle] = useState(false);
    const navToggle = () => {
        setIsNavToggle(!isNavToggle);
    }
    const [liNum, setLiNum] = useState(1);
    const changeLogo = (num) => {
        setLiNum(num)
    }
    const onLiNum = (num) => {
        setLiNum(num)
        setIsNavToggle(!isNavToggle);
    }
    return (
        <Header>
            <div className='inner'>
                <h1 onClick={() => changeLogo(1)}><Link to={"/"}>{liNum === 1 ? <img src="./images/logo.png" alt="" /> : <img src="./images/logo_b.png" alt="" />}</Link> </h1>
                <i style={{ color: liNum !== 1 ? "black" : isNavToggle ? "black" : "white" }} onClick={navToggle}><GiHamburgerMenu /></i>
            </div>
            {
                isNavToggle && <NavigationBar>
                    <NavigationBarLeft>
                        <img src='./images/gnb_slider_1.jpg' />
                    </NavigationBarLeft>
                    <NavigationBarRight>
                        <ul>
                            <li onClick={() => onLiNum(1)}><Link to={'/'}><span>HOME</span></Link></li>
                            <li onClick={() => onLiNum(2)}><Link to={'/info'}><span>탐라는 전기차</span></Link></li>
                            <li onClick={() => onLiNum(3)}><span>전기차 충전소 위치</span></li>
                            <li onClick={() => onLiNum(4)}><Link to={'/noticeList'}><span>JEJU 전기차 관련 소식</span></Link></li>
                        </ul>
                    </NavigationBarRight>
                </NavigationBar>
            }
        </Header >
    );
});
export default CommonHeader;