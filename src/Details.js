import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DetailsList from './DetailsList';
import TitlebarGridList from './TitlebarGridList';
import ButtonAppBar from './ButtonAppBar';
import AppBar from 'material-ui/AppBar';
import Bar from './Bar';

class Details extends Component {

    render() {
        return (

                <DetailsList />

        );
    }
}

export default Details;
