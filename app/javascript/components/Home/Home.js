import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Navbar from './Navbar/Navbar'

class Home extends Component {
    constructor(){
        super()

        this.state = {
            course_modules: [
                { id: 1, title: '1. Setting up a new Ruby on Rails App with React.', description: 'lorem ipsum', active: false },
                { id: 2, title: '2. Setting up a new Ruby on Rails App with React.', description: 'lorem ipsum', active: false },
                { id: 3, title: '3. Setting up a new Ruby on Rails App with React.', description: 'lorem ipsum', active: false },
                { id: 4, title: '4. Setting up a new Ruby on Rails App with React.', description: 'lorem ipsum', active: false } 
            ]
        }  
    }

    render() {
        return (
       
            <div>
               
                <Jumbotron/>
                <Navbar/>
            </div> 
        )
    }
}

export default Home 