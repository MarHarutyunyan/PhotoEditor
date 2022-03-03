import React, { Component } from 'react'
import { EditText } from 'react-edit-text'
// import EdiText from 'react-editext'

export const CreateTxt = () => {
    return (
        <div >
            <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10"></input>
        </div>
    )

}