class Stopwatch extends React.Component {
    constructor() {
        super();

        this.state = {
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            running: false
        };
    }
    
    reset() { 
        this.setState({ times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            } 
        })
    } 

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }

    start() {
        if (!this.state.running) {
            this.setState({ running: true })
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.state.running) return;
        this.calculate();
    } 


    calculate() {
        let tempTimes = {
            minutes: this.state.times.minutes,
            seconds: this.state.times.seconds,
            miliseconds: this.state.times.miliseconds
        }

        tempTime.miliseconds += 1;

        if (tempTimes.miliseconds >= 100) {
            tempTimes.seconds += 1;
            tempTimes.miliseconds = 0;
        }
        if (tempTimes.seconds >= 60) {
            tempTimes.minutes += 1; 
            tempTimes.seconds = 0;
        }
    } 

    stop() {
        this.setState({ running: false })  
        clearInterval(this.watch);  
    }

    render() {
   
        return  <div>
                    <nav className={'controls'}>
                        <a href= {'#'} className={'button'} id= {'start'} onClick= {this.start} > Start </a>
                        <a href= {'#'} className={'button'} id= {'stop'} onClick= {this.stop}> Stop </a>
                        <a href= {'#'} className={'button'} id= {'reset'} onClick= {this.reset}> Reset </a>
                    </nav>
                        <div className={'stopwatch'}>{this.format(this.state.times)}</div>
                        <ul className={'results'}></ul>   
                </div>
    }
}

function pad0(value) {
    let result = value.toString();  
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

var element = <Stopwatch/>
ReactDOM.render(element, document.getElementById('app'));