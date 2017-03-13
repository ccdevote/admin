import React, {Component} from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Main from "./component/Main";
import Transdux from "transdux";
class App extends Component {
    render() {
        return (
            <Transdux>
                <MuiThemeProvider>
                    <Main/>
                </MuiThemeProvider>
            </Transdux>
        );
    }
}

export default App;
