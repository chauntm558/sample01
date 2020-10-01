import React, { Component } from 'react'
import data from '../../json/category.json'

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
        listCategory: data
        }
    }

    renderCategory = () => {
        return this.state.listCategory.map((item) => {
            return (
                <div className="list-category mt-10" id="listCategory">
                    <div className="display-content">
                        <h4 className="display-text">{item.title}</h4>
                        {
                            item.listItem.map(e => {
                                return (
                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                    <div className="category-item"><a className="item" href="#">{e.name}</a></div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
        <div id="home-page-left">
            <h4>Your category</h4>
            <div className="mb-10">
            <input type="text" className="form-control input-search" placeholder="&#xf002; Type for searching" aria-label="Type for searching" aria-describedby="basic-addon1" />
            </div>
            <button type="button" className="btn btn-outline-warning" id="btn-addCate">+ Add category</button>
            {this.renderCategory()}
        </div>
        )
    }
}

export default Categories
