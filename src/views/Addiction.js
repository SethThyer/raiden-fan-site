import React from 'react';
import RaidenSexist from '../Images/RaidenSexist.jpg'
import RaidenRoadkill from '../Images/RaidenRoadkill.jpg'

class Addiction extends React.Component {

    render() {

        return (
            <div className="vh">
                <div className="pl-1 pr-1">
                    <h1 className="color-text text-large">
                        Addict
                    </h1>

                    <p className="pl-2 pr-2 color-secondary text-s-medium">
                        The Neisner's have a long-running history of substance addiction in their family -his grandfather being German. Inevitably, Raiden's own psyche has been affected by these deleterious genes; resulting in Raiden's early-onset struggles with alcohol and porn.
                    </p>
                    <img src={RaidenSexist} alt="Raiden -outcome of addiction" className="picture" />
                    <br />
                    <img src={RaidenRoadkill} alt="Raiden -outcome of addiction" className="picture" />
                </div>
            </div>
        )
    };
}

export default Addiction;  