/** @jsxImportSource @emotion/react */
// src/components/FixedArea.js
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import greenOrange from '../assets/green_orange_square.png'
import blackRoundRevers from '../assets/black_round_corner_reverse.png'
import blackRound from '../assets/black_round_corner.png'
import greenCorner from '../assets/green_corner.png'
import greenRoundCorner from '../assets/green_round_corner.png'
import orangeRoundCorner from '../assets/orange_round_corner.png'
import redHalfcircles from '../assets/red_halfcircles.png'
import redSquares from '../assets/red_squares.png'
import orangeTriangle from '../assets/orange_triangle.png'
import blackTriangle from '../assets/black_triangle.png'
import redTriangle from '../assets/red_triangle.png'
import orangeSquares from '../assets/orange_squares.png'
import blackCircle from '../assets/black_circle.png'
import redSquare from '../assets/red_square.png'
import greenHalfcirclesReverse from '../assets/green_halfcircles_reverse.png'

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

const topLeftImages = [
  greenOrange,
  blackRoundRevers,
  greenRoundCorner,
  redHalfcircles,
  blackRound,
  blackRound,
  blackRound,
  greenCorner,
  orangeRoundCorner,
  redSquares,
  orangeTriangle
]

const bottomRightImages = [
  null,
  blackTriangle,
  redTriangle,
  orangeSquares,
  blackCircle,
  blackCircle,
  blackCircle,
  redSquare,
  redSquare,
  greenHalfcirclesReverse,
  orangeTriangle
]

const FixedArea = ({ children, activeIndex, prevActiveIndex }) => (
  <OuterBox>
    <>
    {console.log(activeIndex)}
    </>

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
          <CornerImage
            src={topLeftImages[activeIndex]}
            alt="Top left"
            css={css`
              left: 0;
              top: 0;
              transform: ${
                // activeIndex === 0 ? 'transform: translate(700%, 750%)' :
                index === activeIndex
                  ? 'translate(-100%, 0%)'
                  : `translate(-200%, 0%)`
              };
            `}
          />
          {activeIndex > 0 &&
            <CornerImage
              src={bottomRightImages[activeIndex]}
              alt="Bottom right"
              css={css`
                right: 0;
                bottom: 0;
                transform: ${
                  index === activeIndex
                    ? 'translate(100%, 0%)'
                    : `translate(200%, 0%)`
                };
              `}
            />
          }
            {child}
          </SceneContent>
        </div>
      ))}
    </Container>
  </OuterBox>
);

export default FixedArea;
