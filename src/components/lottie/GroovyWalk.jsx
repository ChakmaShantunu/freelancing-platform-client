import { useLottie } from 'lottie-react';
import React from 'react';
import groovyWalkAnimations from "../../animations/groovyWalk.json"

const GroovyWalk = () => {

    const options = {
        animations: groovyWalkAnimations,
        loop: true
    }

    const { View } = useLottie(options)
    return (
        <div>
            {View}
        </div>
    );
};

export default GroovyWalk;