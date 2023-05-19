/** @jsxImportSource @emotion/react */
// src/components/FixedArea.js
import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import greenOrange from '../assets/green_orange_square.png'
import blackRoundRevers from '../assets/black_round_corner_reverse.png'
import blackRound from '../assets/black_round_corner.png'
import greenCorner from '../assets/green_corner.png'
import greenRoundCorner from '../assets/green_round_corner.png'
import greenSquares from '../assets/green_squares.png'
import greenTriangle from '../assets/green_triangle.png'
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
  top: 150px;
  left: 0%;
  width: 100%;
  height: calc(90% - 100px);
  overflow: hidden;
`;

const Container = styled.div`
  position: fixed;
  top: 150px;
  left: 10%;
  width: 80%;
  height: calc(90% - 100px);
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
  greenSquares,
  blackRoundRevers,
  orangeRoundCorner,
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
  redHalfcircles,
  greenTriangle,
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

const FixedArea = forwardRef(({ children, activeIndex, prevActiveIndex }, ref) => {
  const childRefs = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    childRefs.current = children.map((_, i) => childRefs.current[i] ?? React.createRef());
    console.log(childRefs.current)
  }, [children]);

  useEffect(() => {
    console.log(containerRef.current);
  }, []);

  useImperativeHandle(ref, () => ({
    scrollToChild: (index) => {
      const windowHeight = window.innerHeight;
      const targetPosition = index * windowHeight;
      console.log('Target scroll position:', targetPosition);
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    },
  }));



  return (
    <OuterBox>
      <Container ref={containerRef}>
        {React.Children.map(children, (child, index) => (
          <div className="container" ref={childRefs.current[index]}>
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
                    index === activeIndex
                      ? 'translate(-100%, 0%)'
                      : `translate(-200%, 0%)`
                  };
                `}
              />
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
              {child}
            </SceneContent>
          </div>
        ))}
      </Container>
    </OuterBox>
  )
});

export default FixedArea;
