import styled from "@emotion/styled";

interface ISwipeContainer {
    height?: string
}

export const SwipeContainer = styled.div`
    min-height: ${(props: ISwipeContainer) => props.height ?? '100vh'};
`;