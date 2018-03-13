import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';

function list(state = [], action) {
    return [1, 2, 3];
}

import {createStore} from 'redux';
const store = createStore(list);

class IndexViewPage extends React.Component<any, any> {
    render() {
        return <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>;
    }
}

export default IndexViewPage;
