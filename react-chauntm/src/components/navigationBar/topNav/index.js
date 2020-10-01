import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class TopNav extends Component {
    
    render () {
        return (
            <div id="masthead-container" className="flex-box">
                <div id="tab-main"  className="flex-box w70">
                    <div id="add-new">
                        <button type="button" className="btn btn-sm btn-danger btn-addNew">New</button>
                    </div>
                    <div id="tab-title">
                        <h4>Library Cube</h4>
                    </div>
                </div>
                <div id="tab-tools" className="flex-box w10">
                    <a href="#" id="btn-your-cart">
                        <i> <FontAwesomeIcon icon="cart-plus"/></i>
                    </a>
                    <a id="list-apps" >
                        <i> <FontAwesomeIcon icon="list"/></i>
                    </a>
                    <a id="img-account">
                        <i>
                            <FontAwesomeIcon icon="user-circle"/>
                        </i>
                    </a>
                </div>
            </div>
        )
    }
}

export default TopNav
