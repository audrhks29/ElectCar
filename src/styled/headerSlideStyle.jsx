import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideImages = [
    '${process.env.PUBLIC_URL}/images/gnb_slider_1.jpg',
    '${process.env.PUBLIC_URL}/images/gnb_slider_2.jpg',
    '${process.env.PUBLIC_URL}/images/gnb_slider_3.jpg',
];
const SlideShowContainer = styled.div`
  position: relative;
  width: 960px;
  height: 100%;
  overflow: hidden;
`;

const SlideShowImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 960px;
  height: 100%;
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transform-origin: center center;
  animation: ${({ active }) => (active ? scaleAnimation : 'none')} 5s ease;
`;

const scaleAnimation = keyframes`
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1.0);
  }
`;

const NavigationBarLeft = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    console.log(process.env.PUBLIC_URL);
    useEffect(() => {
        // 이미지 변경을 위한 타이머 설정
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
        }, 5000);

        // 컴포넌트 언마운트 시 타이머 해제
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <SlideShowContainer>
            {slideImages.map((image, index) => (
                <SlideShowImage
                    key={index}
                    src={`${process.env.PUBLIC_URL}/images/${image}`}
                    alt={`Slide ${index + 1}`}
                    active={index === activeIndex}
                />
            ))}
        </SlideShowContainer>
    );
};

export default NavigationBarLeft;
