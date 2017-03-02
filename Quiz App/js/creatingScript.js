
/*class Check extends React.Component{

    render(){

        return(
            <h1>Heading</h1>
        )
    }
}

ReactDOM.render(
    <div className="mid">
        <input type="text" className="question" placeholder="Enter Question" />
        <button className="btn" onClick={makeOpt}>Add Options +</button>
        <div id="list"></div>
        <input type="text" className="answer" placeholder="Enter Answer" />
        <br /><br />
        <button className="done">Done</button>
    </div>
    , document.getElementById("container"));

function makeOpt() {

    var list = document.getElementById("list");
    var write = document.createElement('input');
    list.appendChild(document.createElement('br'));
    list.appendChild(write);
    list.appendChild(document.createElement('br'));

}*/

class Check extends React.Component {

    render() {

        return React.createElement(
            "h1",
            null,
            "Heading"
        );
    }
}

ReactDOM.render(React.createElement(
    "div",
    { className: "mid" },
    React.createElement("input", { type: "text", className: "question", placeholder: "Enter Question" }),
    React.createElement(
        "button",
        { className: "btn", onClick: makeOpt },
        "Add Options +"
    ),
    React.createElement("div", { id: "list" }),
    React.createElement("input", { type: "text", className: "answer", placeholder: "Enter Answer" }),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement(
        "button",
        { className: "done" },
        "Done"
    )
), document.getElementById("container"));

function makeOpt() {

    var list = document.getElementById("list");
    var write = document.createElement('input');
    list.appendChild(document.createElement('br'));
    list.appendChild(write);
    list.appendChild(document.createElement('br'));
}









