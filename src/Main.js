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
            },

            clothingLibrary: [

            ],
            outfitKey: 0,
        }
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

        console.log("cid=" + currentOutfit.id)
        if (currentOutfit.id === null || currentOutfit.id === undefined) {
            currentOutfit.id = this.getNewKey()


            this.setState({ currentOutfit: currentOutfit })


            outfitLibrary.push(currentOutfit)


        } else {
            outfitLibrary.forEach(function (outfit) {
                if (outfit.id === currentOutfit.id) {
                    outfit = currentOutfit
                }
            })
        }
        this.setState({ clothingLibrary: outfitLibrary })
        this.outfitClear()
    }

    getNewKey = () => {
        const newId = this.state.outfitKey + 1
        this.setState({ outfitKey: newId })
        return (newId)
    }

    setOutfitFromLibrary = (outfit) => {
        const selectedOutfit = outfit
        selectedOutfit.id = this.getNewKey()
        this.setState({ currentOutfit: selectedOutfit })
    }

    removeThing = (thingBeingRemoved) => {
        const emptyInfo = {
            id: '',
            name: '',
            type: '',
            url: '',
        }
        const storedOutfit = this.state.currentOutfit

        storedOutfit[thingBeingRemoved] = emptyInfo

        this.setState({ currentOutfit: storedOutfit })
        console.log(thingBeingRemoved)
    }

    removeOutfit = (OutfitBeingRemoved) => {
        const clothingLibrary = this.state.clothingLibrary
        const newLibrary = clothingLibrary.filter(item => item !== OutfitBeingRemoved)
        this.setState({ clothingLibrary: newLibrary })
    }

    render() {
        return (
            <div className="Main">
                <ControlBar
                    clearOutfit={() => this.outfitClear()}
                    saveOutfit={() => this.outfitSave()}
                    outfitLibrary={this.state.clothingLibrary}
                    setOutfitFromLibrary={this.setOutfitFromLibrary}
                    removeThing={this.removeThing}
                    removeOutfit={this.removeOutfit}
                />

                <Editor
                    outfit={this.state.currentOutfit}
                    type="large"
                    key={() => this.getNewKey()}
                    setOutfitFromLibrary={null}
                    removeThing={this.removeThing}
                />
                <Search
                    hats={hatsDatabase}
                    shirts={shirtsDatabase}
                    pants={pantsDatabase}
                    shoes={shoesDatabase}
                    updateCurrentOutfit={this.clothingTypeClicked}
                />
            </div>
        )
    }
}

export default Main