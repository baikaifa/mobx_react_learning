import React from "react";
import {
    inject,
    observer
} from 'mobx-react';
@inject ('store') @observer

export default class  Home extends React.Component() {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        let {store}=this.props
        return (
            <>
              <div className="home">
                  <h1>在react中使用mobx</h1>
              </div>
            </>
          );
    }
}
