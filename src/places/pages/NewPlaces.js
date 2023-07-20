import React from 'react';
import Input from '../../shared/components/FormElements/Input'
import './PlaceForm.css'
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
const NewPlaces = () => {
    return (
       <form className='place-form'>
        <Input element='input' type='text' label='Title' errorText='thisis wrong ' validators={[VALIDATOR_REQUIRE()]}></Input>
       </form>
    );
}

export default NewPlaces;
