import styled from "@emotion/styled";

interface IRibbon {
    offsetx?: number
}

export const EditorBlock = styled.section`
    padding: 12px;
`;

export const EditorText = styled.textarea`
    width: 100%;
    height: 300px;
    border: 0px;
    &:focus-visible {
        outline: 0;
    }
    font-size: 18px;
    margin-top: 16px;
    background-color: snow;
`;

export const Ribbon = styled.section`
    position: absolute;
    left: ${(props: IRibbon) => props.offsetx ?? 0}px;
    z-index: 10;
    width: 100px;
    height: 80px;
    background-color: teal;
`;