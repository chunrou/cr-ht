import React from 'react';
import ReactDOM from 'react-dom';

//swiper
// import 'swiper/dist/css/swiper.min.css'


//全局样式
import './stylesheets/main.scss'

//全局配置
import './modules/config'

import App from './App';

import { 
    BrowserRouter as Router
} from 'react-router-dom'

import store from './store'

import { Provider } from 'react-redux' 

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store = {store} >
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));

registerServiceWorker();
