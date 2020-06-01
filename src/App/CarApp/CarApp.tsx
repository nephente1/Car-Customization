import * as React from 'react';
import {observer} from 'mobx-react-lite';

import {ModelButtons} from 'App/CarApp/containers/ModelButtons';
import {EngineButtons} from 'App/CarApp/containers/EngineButtons';
import {GearboxButtons} from 'App/CarApp/containers/GearboxButtons';
import {ColorButtons} from 'App/CarApp/containers/ColorButtons';
import { CarResultContainer } from 'App/CarApp/containers/CarResultContainer';
import {AppBody} from '../App.styles';
import {ConfigContainer, Column} from './CarApp.styles';

export const CarApp = observer(() => {
    return (
        <AppBody>
            <ConfigContainer>
                <Column>
                    <ModelButtons />
                    <EngineButtons />
                    <GearboxButtons />
                    <ColorButtons />
                </Column>
                <Column>
                    <CarResultContainer />
                </Column>
            </ConfigContainer>
        </AppBody>
    );
});