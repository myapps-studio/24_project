'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
    _inherits(Stopwatch, _React$Component);

    function Stopwatch() {
        _classCallCheck(this, Stopwatch);

        var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this));

        _this.state = {
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            running: false
        };

        _this.reset();
        //    this.print(this.times);
        return _this;
    }

    _createClass(Stopwatch, [{
        key: 'reset',
        value: function reset() {
            this.setState.times({
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            });
        }

        //print() {
        //    this.display.innerText = this.format(this.times);
        //}

    }, {
        key: 'format',
        value: function format(times) {
            return pad0(setState.times.minutes) + ':' + pad0(setState.times.seconds) + ':' + pad0(Math.floor(setState.times.miliseconds));
        }
    }, {
        key: 'start',
        value: function start() {
            var _this2 = this;

            if (!this.setState.running) {
                this.setState.running = true;
                this.setState.watch = setInterval(function () {
                    return _this2.step();
                }, 10);
            }
        }
    }, {
        key: 'step',
        value: function step() {
            if (!this.setState.running) return;
            this.calculate();
            //    this.print();
        }
    }, {
        key: 'calculate',
        value: function calculate() {
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
    }, {
        key: 'stop',
        value: function stop() {
            this.setState.running = false;
            clearInterval(this.watch);
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'nav',
                    { className: 'controls' },
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'start', onClick: this.start },
                        ' Start '
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'stop', onClick: this.stop },
                        ' Stop '
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'reset', onClick: this.reset },
                        ' Reset '
                    )
                ),
                React.createElement('div', { className: 'stopwatch' }),
                React.createElement('ul', { className: 'results' })
            );
        }
    }]);

    return Stopwatch;
}(React.Component);

function pad0(value) {
    var result = value.toString();
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

var element = React.createElement(Stopwatch, null);
ReactDOM.render(element, document.getElementById('app'));
