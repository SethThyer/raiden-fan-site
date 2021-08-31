import React from 'react';
import SkellyRaiden from '../Images/RaidenFalls.jpg'

class Mental extends React.Component {

    render() {

        return (
            <div className="vh">
                <div className="pl-1 pr-1">
                    <h1 className="color-text text-large">
                        The Mental
                    </h1>

                    <p className="pl-2 pr-2 color-secondary text-s-medium">
                            Raiden has been diagnosed with several mental disorders; which are, and are not limited to:                        
                        <br />
                        <ul className="text-small">
                            <li>Multiple personality disorder</li>
                            <li>Autism</li>
                            <li>Racism</li>
                            <li>Retarded</li>
                            <li>Blindness</li>
                            <li>Dysexia</li>
                            <li>PTSD</li>
                            <li>Paranoia</li>
                            <li>Psychosis</li>
                            <li>Schizophrenia</li>
                            <li>Bipolar affective disorder</li>
                            <li>Crippling anxiety</li>

                        </ul>
                        <br />
                        Having so many ailments leads Raiden to take a variety of medical drugs to subdue his insane symptoms. Raiden is to be considered insane and a drug addict.
                    </p>
                    <img src={SkellyRaiden} alt="Raiden -insane" className="picture" />
                </div>
            </div>
        )
    };
}

export default Mental;  