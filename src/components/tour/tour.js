import React, { Component } from 'react'
import "./tour.scss"

export default class tour extends Component {

    state={
        showinfo:false
    }

    handleinfo=()=>
    {
        this.setState({
            showinfo:!this.state.showinfo
        })
    }
    render() {
        const {id,img,city,name,info}=this.props.info;
        const {removetour}=this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="city tours"/>
                    <span onClick={()=>removetour(id)}className="close-btn">
                    <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                <h4>{city}</h4>
                <h5>{name}</h5>
                <span>info 
                    <i onClick={this.handleinfo}className="fas fa-caret-square-down "></i>
                </span>
                {this.state.showinfo && <p>{info}</p>}
                
                </div>
            </article>
        )
    }
}
