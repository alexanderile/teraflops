import React from 'react';
import {Button} from '../Button/Button';
import './Main.sass';

export const Main = (props) => {
    return <div className={'Main'}>
        <div className={'Quests'}>
            <div className={'Quests__heading'}>
                Active quests
            </div>
            <div className={'Quests__list'}>
                <div className={'Quest'}>
                    <div className={'Quest__heading'}>
                        Kill the dragon
                    </div>
                    <div className={'Quest__body'}>

                    </div>
                    <div className={'Quest__controls'}>
                        <Button>Start</Button>
                        <Button>Join</Button>
                        <Button>Open</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
