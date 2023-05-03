import React from "react";
import styled from "@emotion/styled";
import { Map } from 'pigeon-maps';
import { stamenToner } from 'pigeon-maps/providers';


const coords = {
    origin: [45, 34]
}

const Styled = styled.div`
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
& .pigeon-attribution {
    display: none;
}
`;

export const MapLand = () => {
    return (
        <div style={{width: '100vw', height: "100vh", display: 'grid', placeItems: 'center'}}>
            <Styled>
                <Map boxClassname="tile" provider={stamenToner} height={500} width={500} defaultCenter={[35, 37]} defaultZoom={11} />
            </Styled>
        </div>
    )
}