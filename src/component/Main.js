import React from "react";
import {mixin} from "transdux";
import AppBar from "material-ui/AppBar";
import Menu from "./Menu";


class Main extends React.Component {

    click() {
        this.dispatch(Menu, "open", {open: true})
    }

    render() {
        return (
            <div className="Main">
                <AppBar onLeftIconButtonTouchTap={this.click.bind(this)} title="xx管理系统"/>
                <Menu/>
            </div>
        )
    }
}

export default mixin(Main, {})
