import styled from '@emotion/styled';

interface IRibbon {
  show: boolean;
  h: number;
}

export const EditorBlock = styled.pre`
  padding: 12px;
  h4,
  h5 {
    color: #4f4f4f;
  }
`;

export const EditorText = styled.textarea`
  width: 100%;
  height: 300px;
  border: 0px;
  &:focus-visible {
    outline: 0;
  }
  font-size: 16px;
  margin-top: 16px;
  background-color: snow;
`;

export const Ribbon = styled.section`
  ${(props: IRibbon) => `
    position: absolute;
    top: 0px;
    left: 0px;
    transform-origin: bottom;
    transform: translateY(${window.outerHeight - props.h}px);
    z-index: 110;
    width: 100%;
    transition: height 0.2s ease;
    overflow: hidden;
    padding: ${props.show ? '12px' : 'none'};
    height: ${props.show ? 'auto' : '0px'};
    background-color: #f2f2f2;
`}
`;
