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

        this.reset();
    //    this.print(this.times);
    }
    
    reset() { 
        this.setState.times ({
            minutes: 0,
            seconds: 0,
            miliseconds: 0 
        });
    }

    //print() {
    //    this.display.innerText = this.format(this.times);
    //}

    format(times) {
        return `${pad0(setState.times.minutes)}:${pad0(setState.times.seconds)}:${pad0(Math.floor(setState.times.miliseconds))}`;
    }

    start() {
        if (!this.setState.running) {
            this.setState.running = true;
            this.setState.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.setState.running) return;
        this.calculate();
    //    this.print();
    }

    calculate() {
        this.setState.times.miliseconds += 1;
        if (this.setState.times.miliseconds >= 100) {
            this.setState.times.seconds += 1;
            this.setState.times.miliseconds = 0;
        }
        if (this.setState.times.seconds >= 60) {
            this.setState.times.minutes += 1;
            this.setState.times.seconds = 0;
        }
    } 

    stop() {
        this.setState.running = false;
        clearInterval(this.watch);
    }

    render() {
   
        return  <div>
                    <nav className={'controls'}>
                        <a href= {'#'} className={'button'} id= {'start'} onClick= {this.start} > Start </a>
                        <a href= {'#'} className={'button'} id= {'stop'} onClick= {this.stop}> Stop </a>
                        <a href= {'#'} className={'button'} id= {'reset'} onClick= {this.reset}> Reset </a>
                    </nav>
                        <div className={'stopwatch'}></div>
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

/*
const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());
 
let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());
*/

var element = <Stopwatch/>
ReactDOM.render(element, document.getElementById('app'));