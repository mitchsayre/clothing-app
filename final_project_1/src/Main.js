import React, { Component } from 'react'
import ControlBar from './ControlBar'
import Editor from './Editor'
import Search from './Search'

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentOutfit: {
                head: null,
                torso: null,
                legs: null,
                feet: null,
            },

            clothingLibrary: {
                outfit1: {
                    head: null,
                    torso: null,
                    legs: null,
                    feet: null,
                },
                outfit2: {
                    head: null,
                    torso: null,
                    legs: null,
                    feet: null,
                },
                outfit3: {
                    head: null,
                    torso: null,
                    legs: null,
                    feet: null,
                },
                outfit4: {
                    head: null,
                    torso: null,
                    legs: null,
                    feet: null,
                },
            },
        }
        this.hatsDatabase = [
            {
                name: 'hatName',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName',
                type: 'head',
                url: 'hat.png',
            },
        ]

        this.shirtsDatabase = [
            {
                name: 'shirtName',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName',
                type: 'torso',
                url: 'shirt.png',
            },
        ]

        this.pantsDatabase = [
            {
                name: 'PantsName',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName',
                type: 'legs',
                url: 'pants.png',
            },
        ]

        this.shoesDatabase = [
            {
                name: 'shoesName',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName',
                type: 'feet',
                url: 'shoes.png',
            },
        ]

    }

    componentDidMount() {

    }
    render() {
        return (
            <div className="Main">
                <ControlBar />
                <Editor />
                <Search
                    hats={this.hatsDatabase}
                    shirts={this.shirtsDatabase}
                    pants={this.pantsDatabase}
                    shoes={this.shoesDatabase}
                />
            </div>
        )
    }
}

export default Main