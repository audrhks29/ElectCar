import React, { memo } from 'react';
import { Footer } from '../styled/footerStyle';

const CommonFooter = memo(() => {
    return (
        <Footer>
            <div className="inner">
                <p className='logo'>
                    <img src="./images/logo.png" alt="" />
                </p>
                <div className='footerMenu'>
                    <ul>
                        <li>탐라는 전기차</li>
                        <li>전기차 충전소 위치</li>
                        <li>JEJU 전기차 관련 소식</li>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                    </ul>
                </div>
                <span>COPYRIGHT ⓒ All rights RESERVED.</span>
            </div>
        </Footer>
    );
});

export default CommonFooter;