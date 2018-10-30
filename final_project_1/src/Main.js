import React, { Component } from 'react'
import ControlBar from './ControlBar'
import Editor from './Editor'
import Search from './Search'
import { hatsDatabase, shirtsDatabase, pantsDatabase, shoesDatabase } from './sampleClothingData'

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentOutfit: {
                id: null,
                head: {},
                torso: {},
                legs: {},
                feet: {},
            },

            clothingLibrary: [

            ],
            outfitKey: 0,
        }
        this.hatsDatabase = hatsDatabase
        this.shirtsDatabase = shirtsDatabase
        this.pantsDatabase = pantsDatabase
        this.shoesDatabase = shoesDatabase
    }

    clothingTypeClicked = (itemObject) => {
        const tempStoredOutfit = this.state.currentOutfit
        switch (itemObject.type) {
            case "head":
                tempStoredOutfit.head = itemObject
                break;
            case "torso":
                tempStoredOutfit.torso = itemObject
                break;
            case "legs":
                tempStoredOutfit.legs = itemObject
                break;
            case "feet":
                tempStoredOutfit.feet = itemObject
                break;

            default:
                alert("undefined clothing")
        }

        this.setState({ currentOutfit: tempStoredOutfit })
    }

    outfitClear = () => {
        const clearOutfit = {
            head: {
                id: '',
                name: '',
                type: '',
                url: '',
            },
            torso: {
                id: '',
                name: '',
                type: '',
                url: '',
            },
            legs: {
                id: '',
                name: '',
                type: '',
                url: '',
            },
            feet: {
                id: '',
                name: '',
                type: '',
                url: '',
            },
        }
        this.setState({ currentOutfit: clearOutfit })
    }
    outfitSave = () => {
        const currentOutfit = this.state.currentOutfit
        const outfitLibrary = this.state.clothingLibrary
        currentOutfit.id = this.state.outfitKey++
        this.setState({ outfitKey: currentOutfit.id})
        this.setState({ currentOutfit: currentOutfit  })
        outfitLibrary.push(currentOutfit)
        this.setState({ clothingLibrary: outfitLibrary })
        console.log(this.state.currentOutfit)
        this.outfitClear()
        console.log(this.state.clothingLibrary)
        
    }

    render() {
        return (
            <div className="Main">
                <ControlBar
                    clearOutfit={() => this.outfitClear()}
                    saveOutfit={() => this.outfitSave()}
                    outfitLibrary={this.state.clothingLibrary}
                />

                <Editor outfit={this.state.currentOutfit} type="large" key={Date()} />
                <Search
                    hats={this.hatsDatabase}
                    shirts={this.shirtsDatabase}
                    pants={this.pantsDatabase}
                    shoes={this.shoesDatabase}
                    updateCurrentOutfit={this.clothingTypeClicked}
                />
            </div>
        )
    }
}

export default Main