import styled from "@emotion/styled";

interface IRibbon {
    display: boolean
}

export const EditorBlock = styled.pre`
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
    bottom: 0px;
    left: 0px;
    z-index: 110;
    width: 100%;
    transition: height 0.2s ease;
    overflow: hidden;
    height: ${(props: IRibbon) => props.display ? '180px' : '0px'};
    background-color: teal;
`;