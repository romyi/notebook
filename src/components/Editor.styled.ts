import styled from "@emotion/styled";

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
`;
