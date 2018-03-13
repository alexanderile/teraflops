import * as React from 'react';
import {Button} from '../Button/Button';
import {NavLink} from "react-router-dom";
import './Header.sass';

export default class Header extends React.Component<any, any> {
    public render() {
        return <div className={'Header'}>
			<div className={'HeaderSub'}>

				<NavLink to={'/'}>
					<div className="HeaderSub__title">
						TF
					</div>
				</NavLink>
				<div className="HeaderSub__facilities">
					<div className={'HeaderResources'}>
                        <span title={'Gold'} className={'HeaderResource HeaderResource--gold'}>2540</span>
                        <span title={'Crystals'} className={'HeaderResource HeaderResource--crystal'}>118</span>
					</div>
					<div className="HeaderAccount">
						<div>
							<span className="lnr lnr-users"/>
						</div>
						<div>
							Alexander Iachmenev
						</div>
					</div>
                    <div className="HeaderLinks">
                        <Button theme={'accent'}>New adventure</Button>
                    </div>
				</div>
			</div>
		</div>;
    }
}
