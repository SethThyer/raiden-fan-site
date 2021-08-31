import React from 'react';
import SkellyRaiden from '../Images/RaidenSkelly.png'

class Home extends React.Component {

    render() {

        return (
            <div className="vh">
                <div className="pl-1 pr-1">
                    <h1 className="color-text text-large">
                        Raiden Neisner
                    </h1>
                    <p className="pb-2 text-right color-secondary text-medium">
                        <strong>Serial Offender<br />If sighted please contact your local authorities</strong>
                    </p>
                    <p className="pl-2 pr-2 color-secondary text-s-medium">
                    Born in 160BC, Raiden made his call to fame when he crucified Jesus Malcolm Christ. Ever since then Raiden is widely renowned to be a 'Rambunctious Scamp'. Raiden's exact age is elusive and our top scientists still have a long way to go if they want to pinpoint precisely the year of his birth. However, regardless of his birth date, it is clear that he is one of the oldest people to ever live. Having constant mentions of his years in 'Nam' and the unidentifiable 'Aids concert', it is blatant to us he is a cradle of unfathomable knowledge.
                    </p>
                    <img src={SkellyRaiden} alt="Raiden -true form" className="picture" />
                </div>
            </div>
        )
    };
}

export default Home;  