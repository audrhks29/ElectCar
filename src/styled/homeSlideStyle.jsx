import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { MainArticleTextBox } from './homeStyle';

const slideImages = [
  '/images/main_slider_1.jpg',
  '/images/main_slider_2.jpg',
  '/images/main_slider_3.jpg',
];

const SlideShowContainer = styled.div`
    width: 100%;
    color: white;
    height:510px;
    position: relative;
    overflow: hidden;
`

const SlideShowImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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

const MainArticle = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
          src={image}
          alt={`Slide ${index + 1}`}
          active={index === activeIndex}
        />
      ))}
      <MainArticleTextBox>
        <h2>탐라는 전기차</h2>
        <h3>전기차와 함께 제주 여행을 준비하는 당신에게<br />
          필요한 모든 정보와 꿀팁!</h3>
      </MainArticleTextBox>
    </SlideShowContainer>
  );
};

export default MainArticle;
