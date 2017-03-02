
var questions = [
    ["Which of the following is correct about features of JavaScript?", 'JavaScript is a lightweight, interpreted programming language.', 'JavaScript is designed for creating network-centric applications', 'JavaScript is complementary to and integrated with Java.', 'A'],
    ['Which built-in method returns the length of the string??', 'length()', 'size()', 'index()', 'A'],
    ['Which of the following function of Number object returns a string value version of the current number??', 'toString()', 'toFixed()', 'toLocaleString()', 'A'],
    ['var f = function g(){ return 23; };typeof g();', 'number', 'undefined', 'function', 'C']

];

var row = 0, correct = 0, percentage;
var userChoice;

var quizRender = React.createClass({

    getInitialState: function () {
        return {
            correct: this.props.correct,
            row: this.props.row,
            quesion: this.props.data[row][0],
            opt1: this.props.data[row][1],
            opt2: this.props.data[row][2],
            opt3: this.props.data[row][3],
            ans: this.props.data[row][4],
        }
    },

    _quizAnswer: function (e) {

        choices = document.getElementsByName('answer');
        // console.log(choices);
        for (var i = 0; i < choices.length; i++) {
            if (choices[i].checked) {
                userChoice = choices[i].value;
            }
        }
        if (userChoice == this.state.ans) {
            this.setState({
                correct: correct++,
            })

        }
        this.setState({
            row: ++row,
        })
        if (row < this.props.data.length) {
            this.setState({

                quesion: this.props.data[row][0],
                opt1: this.props.data[row][1],
                opt2: this.props.data[row][2],
                opt3: this.props.data[row][3],
                ans: this.props.data[row][4],

            })
        }
    },

    _quizQuestion: function () {

        if (this.state.row >= this.props.data.length) {
            percentage = correct * 20;
            return React.DOM.div(
                {
                    id: 'complete'
                },
                React.DOM.div({ className: 'resultBox' },
                    React.DOM.h2({ style: { backgroundColor: '#69a74e', padding: '15px' } }, "Percentage"),
                    React.DOM.h2(null, percentage + ' %')
                ),
                React.DOM.div({ className: 'resultBox' },
                    React.DOM.h2({ style: { backgroundColor: '#69a74e', padding: '15px' } }, "CORRECT ANSWER"),
                    React.DOM.h2(null, correct)
                )
            )
        } else {

            return React.DOM.div(
                null,
                //Child One
                React.DOM.div(
                    {
                        id: 'status'
                    },
                    React.DOM.span({ id: 'yourName' }, JSON.parse(localStorage.getItem('username'))),
                    React.DOM.h1({ style: { color: 'white', width: '60px', margin: '0px auto' } }, (this.state.row + 1) + " / " + this.props.data.length),
                    React.DOM.div({ style: { clear: 'both' } })
                ),
                ///Child Two
                React.DOM.h4(
                    {
                        id: 'question'
                    }, (this.state.row + 1) + '.  ' + this.state.quesion
                ),
                //Child Three
                React.DOM.div(
                    null,
                    //div child 1
                    React.DOM.input(
                        {
                            type: "radio",
                            className: 'optionBtn',
                            name: 'answer',
                            value: 'A'
                        }
                    ),
                    this.state.opt1,
                    React.DOM.br(null),

                    //div child 2
                    React.DOM.input(
                        {
                            type: "radio",
                            className: 'optionBtn',
                            name: 'answer',
                            value: 'B'
                        }
                    ),
                    this.state.opt2,
                    React.DOM.br(null),

                    //div child 3
                    React.DOM.input(
                        {
                            type: "radio",
                            className: 'optionBtn',
                            name: 'answer',
                            value: 'C'
                        }
                    ),
                    this.state.opt3
                ),

                //Child Four
                React.DOM.button(
                    {
                        id: 'nextBtn',
                        type: "button",
                        onClick: this._quizAnswer
                    },
                    'NEXT'
                )
            );
        }


    },
    render: function () {
        return React.DOM.div(
            null,
            React.DOM.div(
                null,
                React.DOM.div(
                    {
                        id: 'test'
                    },
                    this._quizQuestion()
                )
            )
        )
    }
});


ReactDOM.render(
    React.DOM.div(
        null,
        React.createElement(quizRender,
            {
                data: questions,
                row: row,
                correct: correct,
            }
        )
    ),
    document.getElementById('app')
);