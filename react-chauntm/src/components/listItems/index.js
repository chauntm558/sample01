import React, { Component } from 'react'
import data from '../../json/listItem.json'

class ListItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
        listFreeSource: data
        }
    }
    renderListItems = () => {
        return this.state.listFreeSource.map((item) => {
            return (
                <div>
                    <h4 className="display-text">{item.title}</h4>
                    {
                        item.listFreeSource.map(e => {
                            return (
                                <div className="content-item">
                                    <div className="vid-desc">
                                        <a href="#" target="_blank">
                                            <img className="img-vid" src={e.source} alt={e.alt} />
                                        </a>
                                        <p className="vid-name pd-10">{e.name}</p>
                                        <a className="vid-btn-apply item-active mb-10" href="#"><span>GET</span></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        })
    }
    render() {
        return (
            <div id="home-page-right">
                <div id="page-right__tab-header" className="page-right__tab-header mb-10">
                    <div className="header-item"><a className="item-active" href="#"><p>Free</p></a></div>
                    <div className="header-item"><a href="#"><p>For you</p></a></div>
                    <div className="header-item"><a href="#"><p>Most popular</p></a></div>
                </div>
                <div id="page-right-content">
                    {this.renderListItems()}
                </div>
            </div>
        )
    }
}

export default ListItems
