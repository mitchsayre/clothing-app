import React, { Component } from 'react'
import ControlBar from './ControlBar'
import Editor from './Editor'
import Search from './Search'

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentOutfit: {
                head: {
                    name: 'hatName',
                    type: 'head',
                    url: 'hat.png',
                },
                torso: {
                    name: 'shirtName',
                    type: 'torso',
                    url: 'shirt.png',
                },
                legs: {
                    name: 'PantsName',
                    type: 'legs',
                    url: 'pants.png',
                },
                feet: {
                    name: 'shoesName',
                    type: 'feet',
                    url: 'shoes.png',
                },
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
                name: 'hatName1',
                type: 'head',
                url: 'https://images.uline.com/is/image//content/dam/images/S/S21500/S-21475BL.jpg?$MediumRHD$&iccEmbed=1&icc=AdobeRGB',
            },
            {
                name: 'hatName2',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName3',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName4',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName5',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName6',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName7',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName8',
                type: 'head',
                url: 'hat.png',
            },
            {
                name: 'hatName9',
                type: 'head',
                url: 'hat.png',
            },
        ]

        this.shirtsDatabase = [
            {
                name: 'shirtName1',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName2',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName3',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName4',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName5',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName6',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName7',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName8',
                type: 'torso',
                url: 'shirt.png',
            },
            {
                name: 'shirtName9',
                type: 'torso',
                url: 'shirt.png',
            },
        ]

        this.pantsDatabase = [
            {
                name: 'PantsName1',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName2',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName3',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName4',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName5',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName6',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName7',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName8',
                type: 'legs',
                url: 'pants.png',
            },
            {
                name: 'PantsName9',
                type: 'legs',
                url: 'pants.png',
            },
        ]

        this.shoesDatabase = [
            {
                name: 'shoesName1',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName2',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName3',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName4',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName5',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName6',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName7',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName8',
                type: 'feet',
                url: 'shoes.png',
            },
            {
                name: 'shoesName9',
                type: 'feet',
                url: 'shoes.png',
            },
        ]

    }

    clickHandler(itemObject) {
        console.log(itemObject)
        const tempStoredOutfit = this.state.currentOutfit
        if (itemObject.type === "head") {
            tempStoredOutfit.head = itemObject
        }
        else if (itemObject.type === "torso") {
            tempStoredOutfit.torso = itemObject
        }
        else if (itemObject.type === "legs") {
            tempStoredOutfit.legs = itemObject
        }
        else if (itemObject.type === "feet") {
            tempStoredOutfit.feet = itemObject
        }

        this.setState({ currentOutfit: tempStoredOutfit })
    }

    render() {
        return (
            <div className="Main">
                <ControlBar />
                <Editor outfit={this.state.currentOutfit} />
                <Search
                    hats={this.hatsDatabase}
                    shirts={this.shirtsDatabase}
                    pants={this.pantsDatabase}
                    shoes={this.shoesDatabase}
                    callBack={this.clickHandler.bind(this)}
                />
            </div>
        )
    }
}

export default Main