import React from "react";
import {mixin} from "transdux";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

let actions = {
    open(obj, state, props){
        console.log(obj, state, props)
        return {
            open: obj.open
        }
    }
}

class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <Drawer open={this.state.open} docked={true} width={200}>
                <MenuItem>Dashboard</MenuItem>
            </Drawer>
        )
    }
}

export default mixin(Menu, actions)
