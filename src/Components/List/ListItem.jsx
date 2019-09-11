import React from 'react';

class ListItem extends React.Component {


    state = {
        time: this.props.time
    }

    setTimer = () => {
        let timerTime = +this.props.time * 60;
        console.log(timerTime)
        for ( let i = 0; i <= timerTime; i++ ) {
            setTimeout( item => {
                console.log(parseInt(item += 1))
            },1000)
        }
    }


    render() {
        return(
            <div className="list-item"
            >
                <div className="text">
                    {this.props.children}
                </div>
                <div className="time-to-end">{this.state.time}</div>
                <div 
                    onClick={() => this.props.removeItem(this.props.index)} 
                    className="button-close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                        <path
                            d="M28.941 31.786L.613 60.114a2.014 2.014 0 102.848 2.849l28.541-28.541 28.541 28.541c.394.394.909.59 1.424.59a2.014 2.014 0 001.424-3.439L35.064 31.786 63.41 3.438A2.014 2.014 0 1060.562.589L32.003 29.15 3.441.59A2.015 2.015 0 00.593 3.439l28.348 28.347z"
                        />
                    </svg>
                </div>
                <div 
                    className="progress-line"
                    // style={{animation: `timeLine 1s linear`}}
                />
            </div>
        )
    }
}

export default ListItem;