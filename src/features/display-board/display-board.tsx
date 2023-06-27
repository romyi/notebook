import styled from '@emotion/styled';
import React from 'react';

const Screen = styled.div`
  width: 320px;
  height: 700px;
  margin: auto;
  //   border: 1px solid #2f2f2f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Board = styled.div`
  grid-template-columns: repeat(3, min-content);
  grid-template-rows: repeat(3, min-content);
  display: grid;
  gap: 16px;
`;

const CenterGrid = styled.div`
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  grid-column-start: 2;
  grid-row-start: 2;
  gap: 16px;
  min-width: 140px;
`;

const HeadGrid = styled.div`
  display: flex;
  gap: 16px;
  flex-flow: row wrap-reverse;
  grid-column-start: 2;
  grid-row-start: 1;
`;

const LeftGrid = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  min-width: 90px;
  flex-flow: column wrap-reverse;
  height: 140px;
  grid-column-start: 1;
  grid-row-start: 2;
`;

const RightGrid = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  min-width: 90px;
  flex-flow: column wrap;
  height: 140px;
  grid-column-start: 3;
  grid-row-start: 2;
`;

const BottomGrid = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  grid-column-start: 2;
  grid-row-start: 3;
`;

const CenterStyled = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background-color: snow;
  border: 0.5px solid #2f2f2f;
`;

const Hand = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background-color: #f2f2f2;
`;

const GamePlay = styled(CenterStyled)`
  grid-column-start: 2;
  grid-row-start: 2;
  background-color: transparent;
  border: 1px dashed;
`;

export const DisplayBoard = () => {
  return (
    <Screen>
      <Board>
        <HeadGrid>
          <CenterStyled />
        </HeadGrid>
        <LeftGrid>
          <CenterStyled />
          <CenterStyled />
          <CenterStyled />
          <CenterStyled />
          <CenterStyled />
        </LeftGrid>
        <CenterGrid>
          <Hand />
          <Hand />
          <Hand />
          <Hand />

          <GamePlay />
        </CenterGrid>
        <RightGrid>
          <CenterStyled />
          <CenterStyled />
          <CenterStyled />
          <CenterStyled />
          <CenterStyled />
        </RightGrid>
        <BottomGrid>
          <CenterStyled />
          <CenterStyled />
        </BottomGrid>
      </Board>
    </Screen>
  );
};
