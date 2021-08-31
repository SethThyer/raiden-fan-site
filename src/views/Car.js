import React from 'react';
import RaidenWorkout from '../Images/RaidenWorkout.png'
import RaidenBuff from '../Images/RaidenBuff.png'

class Car extends React.Component {

    render() {

        return (
            <div className="vh">
                <div className="pl-1 pr-1">
                    <h1 className="color-text text-large">
                        Car
                    </h1>

                    <p className="pl-2 pr-2 color-secondary text-s-medium">
                        Raiden is notorious for not shutting the fuck about about his stupid little fucking race cars, commenting that "It's more interesting" when there is rain during a car race. 
                        <br />
                        On midday Raiden was once seen underneath his car, stroking the underside of the car whilst emitting to it his personal -and surprisingly promiscuous- feelings towards the machine.                     
                        </p>
                        <img src={RaidenWorkout} alt="Raiden -fit" className="picture" />
                        <br />
                        <img src={RaidenBuff} alt="Raiden -fit2" className="picture" />
                </div>
            </div>
        )
    };
}

export default Car;  