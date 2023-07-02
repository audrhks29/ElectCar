import React, { memo } from 'react';

import { Link } from 'react-router-dom';

import { Footer } from '../styled/commonFooterStyle';

const CommonFooter = memo(() => {
    return (
        <Footer>
            <div className="inner">
                <p className='logo'>
                    <Link to={'/'}><img src="./images/logo.png" alt="" /></Link>
                </p>
                <div className='footerMenu'>
                    <ul>
                        <li><Link to={'/'}>탐라는 전기차</Link></li>
                        <li>전기차 충전소 위치</li>
                        <li><Link to={'/noticeList'}>JEJU 전기차 관련 소식</Link></li>
                        <li><Link to={'/terms'}>이용약관</Link></li>
                        <li><Link to={'/privacy'}>개인정보처리방침</Link></li>
                    </ul>
                </div>
                <span>COPYRIGHT ⓒ All rights RESERVED.</span>
            </div>
        </Footer>
    );
});

export default CommonFooter;