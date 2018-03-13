import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../components/Header/Header';
import {Main} from '../components/Main/Main';
import {withRouter} from 'react-router';

class App extends React.Component<any, any> {
	render() {
		return <div className={'wrap wrap--global'}>
			<Header/>
			<Switch>
				<Route path={'/'} exact component={Main}/>
			</Switch>
		</div>;
	}
}

export default withRouter(App);
