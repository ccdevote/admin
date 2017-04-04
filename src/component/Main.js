import React from "react";
import {mixin} from "transdux";
import AppBar from "material-ui/AppBar";
import Menu from "./Menu";
import "./Main.css";
import MobileTearSheet from "./Sheet";
import {List, ListItem} from "material-ui/List";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionGrade from "material-ui/svg-icons/action/grade";
import Divider from "material-ui/Divider";
import Avatar from "material-ui/Avatar";

class Main extends React.Component {

    click() {
        this.dispatch(Menu, "open", {open: true})
    }

    render() {
        return (
            <div className="main">
                <AppBar onLeftIconButtonTouchTap={this.click.bind(this)} title="xx管理系统"/>
                <div className="main container">
                    <div className="main container menus">
                        <MobileTearSheet>
                            <List>
                                <ListItem
                                    disabled={true}
                                    leftAvatar={
                                        <Avatar
                                            size={30}
                                        >
                                            A
                                        </Avatar>
                                    }>
                                </ListItem>
                            </List>
                            <Divider/>
                            <List>
                                <ListItem primaryText="CM页面" leftIcon={<ContentInbox />}/>
                                <ListItem primaryText="用户中心" leftIcon={<ActionGrade />}/>
                            </List>
                        </MobileTearSheet>
                    </div>
                    <div className="main container content">
                        <pre> 123 456 6</pre>
                    </div>
                </div>
            </div>
        )
    }
}

export default mixin(Main, {})
