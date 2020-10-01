import React, { Component } from 'react'
import Categories from '../../components/categories'
import ListItems from '../../components/listItems'

class HomePage extends Component {

    render() {
        return (
            <div className="main-container">
                <Categories />
                <ListItems />
            </div>
        )
    }
}

export default HomePage
