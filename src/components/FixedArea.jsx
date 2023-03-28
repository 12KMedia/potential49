/** @jsxImportSource @emotion/react */
// src/components/FixedArea.js
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const OuterBox = styled.div`
  position: fixed;
  top: 5%;
  left: 0%;
  width: 100%;
  height: 90%;
  overflow: hidden;
`;

const Container = styled.div`
  position: fixed;
  top: 5%;
  left: 10%;
  width: 80%;
  height: 90%;
  z-index: 1;
`;

const SceneContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const CornerImage = styled.img`
  position: absolute;
  transition: transform 1s;
  width: 80px;
  height: 80px;
`;

const fixedAreaWidth = '90%';
const fixedAreaHeight = '90%';

const FixedArea = ({ children, activeIndex, topLeftImage, bottomRightImage }) => (
  <OuterBox>
    <CornerImage
      src={topLeftImage}
      alt="Top left"
      css={css`
        left: 0;
        top: 0;
        transform: ${
          activeIndex === 0
            ? 'translate(-100%, 0%)'
            : `translate(calc(100%), 0%)`
        };
      `}
    />
    <CornerImage
      src={bottomRightImage}
      alt="Bottom right"
      css={css`
        right: 0;
        bottom: 0;
        transform: ${
          activeIndex === 0
            ? 'translate(100%, 0%)'
            : `translate(calc(-100%), 0%)`
        };
      `}
    />
    <Container>
      {React.Children.map(children, (child, index) => (
        <div className="container">
          <SceneContent
            key={index}
            css={css`
              opacity: ${index === activeIndex ? 1 : 0};
              transition: opacity 1s;
            `}
          >
            {child}
          </SceneContent>
        </div>
      ))}
    </Container>
  </OuterBox>
);

export default FixedArea;
