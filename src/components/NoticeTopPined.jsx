import React, { memo } from 'react';
import { PinedContent } from '../styled/noticeTopPinedStyle';

const NoticeTopPined = memo(() => {
    return (
        <PinedContent>
            <h3>JEJU 전기차 관련 소식</h3>
            <p>제주도의 전기차 관련 정보와 다양한 관광 소식을 확인해보세요.</p>
        </PinedContent>
    );
});

export default NoticeTopPined;