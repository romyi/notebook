import styled from "@emotion/styled";

interface ISwipeContainer {
    height?: string
}

interface IDrawer {
    expand: boolean
}

export const SwipeContainer = styled.div`
    min-height: ${(props: ISwipeContainer) => props.height ?? '100vh'};
`;

export const Drawer = styled.article`
    position: absolute;
    z-index: 100;
    width: 100%;
    min-height: 100vh;
    background-color: snow;
    transition: transform 0.3s ease-in-out;
    transform-origin: left;
    transform: translateX(${(props: IDrawer) => props.expand ? '0%' : '-110%'});
    box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.25);
`;