import React from 'react';
import RaidenCat from '../Images/RaidenCat.png'
import egirlraiden from '../Images/egirlraiden.jpg'

class Cat extends React.Component {

    render() {

        return (
            <div className="vh">
                <div className="pl-1 pr-1">
                    <h1 className="color-text text-large">
                        Tom
                    </h1>

                    <p className="pl-2 pr-2 color-secondary text-s-medium">
                        Tom is a snow white gib. <br />
                        We cannot disclose any more information about Tom because Raiden has a supernatural sixth sense that gives him the immediate location of anyone that's disclosed more information about Tom than is already publically known.
                        <br /> 
                        Here are some images of Raiden letting his wacky side show to finish off.
                    </p>
                    <img src={RaidenCat} alt="Raiden -wacky side show 1" className="picture" />
                    <br />
                    <img src={egirlraiden} alt="Raiden -wacky side show 1" className="picture" />
                    <br />
                </div>
            </div>
        )
    };
}

export default Cat;  