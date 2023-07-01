import React, { memo, useEffect, useState } from 'react';
import { Header, NavigationBar, NavigationBarRight } from '../styled/commonHeaderStyle';

import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import NavigationBarLeft from '../styled/headerSlideStyle';
const CommonHeader = () => {
    const location = useLocation();

    const [isNavToggle, setIsNavToggle] = useState(false);
    const [onListClass, setOnListClass] = useState('');
    const navToggle = () => {
        setIsNavToggle(!isNavToggle);
    }
    useEffect(() => {
        setIsNavToggle(false);
    }, [location.pathname]);
    return (
        <Header>
            <div className='inner'>
                <h1 onClick={() => navToggle()}><Link to={"/"}>{location.pathname === "/" ? <img src="/images/logo.png" alt="" /> : <img src="/images/logo_b.png" alt="" />}</Link> </h1>
                <i onClick={() => navToggle()} style={{ color: location.pathname === "/" && isNavToggle === false ? "white" : "black" }}><GiHamburgerMenu /></i>
            </div>
            {
                isNavToggle && <NavigationBar className={isNavToggle ? "show" : ""}>
                    <NavigationBarLeft />
                    <NavigationBarRight>
                        <ul>
                            <li onClick={() => navToggle(1)}><Link to={'/'}><span>HOME</span></Link></li>
                            <li onClick={() => navToggle(2)} ><Link to={'/info'}><span>탐라는 전기차</span></Link></li>
                            <li onClick={() => navToggle(3)} ><span>전기차 충전소 위치</span></li>
                            <li onClick={() => navToggle(4)} ><Link to={'/noticeList'}><span>JEJU 전기차 관련 소식</span></Link></li>
                        </ul>
                    </NavigationBarRight>
                </NavigationBar>
            }
        </Header >
    );
};
export default CommonHeader;