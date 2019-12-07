import React, { Component } from 'react'
import Tour from "../tour";
import "./tourlist.scss"
import { tourData} from "../../tourData"

export default class tourlist extends Component {

    state={
        touritems:tourData
    }

    removetour =(id)=>
    {
        const sortedtours=this.state.touritems.filter(item =>item.id!==id)
        this.setState({
            touritems:sortedtours
        })
    }
    render() {

        console.log(this.state.touritems);
        return (
            <div className="tourlist-main-div">
            {this.state.touritems.map((item)=><Tour key={item.id} info={item} removetour={this.removetour}></Tour>)}
            </div>
        )   
    }
}
