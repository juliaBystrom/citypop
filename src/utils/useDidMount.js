import React, { useEffect, useState, useRef } from 'react';

/*
* Custom hook to help with determine if a component is mounted.
* When the component is rendered and inserted it will mount.
* This is usefull for useing the effect hock without causing a
* render update when parameters first are being initilised.
*/

export default function useDidMount() {
    const didMount = useRef(false);

    useEffect(() => { 
        didMount.current = true;
     }, []);

    return didMount.current;
}