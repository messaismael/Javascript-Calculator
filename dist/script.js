function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
const numbers = [
{
  number: "1", id: "one" },
{
  number: "2", id: "two" },
{
  number: "3", id: "three" },
{
  number: "4", id: "four" },
{
  number: "5", id: "five" },
{
  number: "6", id: "six" },
{
  number: "7", id: "seven" },
{
  number: "8", id: "eight" },
{
  number: "9", id: "nine" },
{
  number: "0", id: 'zero' }];



class Application extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "updateState",






    operation => {
      let reg = /=/;
      if (reg.test(operation)) {
        let res = operation.match(/(=\d{1,})|([-+x÷]\d{1,})/g);
        for (let i = 0; i < res.length; i++) {
          if (reg.test(res[i])) {
            res = res.slice(i);
          }
        }
        res = res.join('');
        operation = res.replace(/^=/, '');
        return operation;
      } else
      {
        return operation;
      }
    });_defineProperty(this, "handleClickKey",

    event => {
      let result = this.state.result;
      let operation = this.state.operation;
      let reg = /[-+x÷]/;
      let reg1 = /=/;
      if (reg1.test(operation)) {
        operation = this.updateState(operation);
        this.setState({
          operation: event.target.value,
          result: event.target.value });

      } else
      if (result === "0") {
        this.setState({
          operation: event.target.value,
          result: event.target.value });

      } else
      if (reg.test(result)) {
        this.setState({
          operation: operation + event.target.value,
          result: event.target.value });

      } else
      if (!reg.test(result)) {
        this.setState({
          operation: operation + event.target.value,
          result: result + event.target.value });

      }

    });_defineProperty(this, "handleEqual",


    () => {
      let result = this.state.result;
      let operation = this.state.operation;
      let reg = /[=]/;


      if (reg.test(operation) === false) {
        let equal = operation.replace('x', '*');
        let resultat = equal.replace('÷', '/');
        this.setState({
          operation: operation + '=' + eval(resultat),
          result: eval(resultat) });

      } else
      if (reg.test(operation) === true) {
        operation = this.updateState(operation);
        let equal = operation.replace('x', '*');
        let resultat = equal.replace('÷', '/');
        this.setState({
          operation: operation + '=' + eval(resultat),
          result: eval(resultat) });

      }
    });_defineProperty(this, "handleClear",


    () => {
      this.setState({
        result: "0",
        operation: "" });

    });_defineProperty(this, "handleDecimal",


    () => {
      let reg = /[-+x÷]$/;
      let rege = /(\d{1,}[.]\d{1,})$/;
      let r = /\d$/;
      let result = this.state.result;
      let operation = this.state.operation;
      if (operation === "") {
        this.setState({
          operation: '0.',
          result: '0.' });

      } else
      if (reg.test(operation) === true) {
        this.setState({
          operation: operation + '0.',
          result: '0.' });

      } else
      if (r.test(operation) === true) {
        if (rege.test(operation) === true) {
          this.setState({
            operation: operation,
            result: result });

        } else
        {
          this.setState({
            operation: operation + '.',
            result: result + '.' });

        }
      }
    });_defineProperty(this, "handleAdd",


    () => {
      let reg = /[-+x÷]$/;
      let reg2 = /[-+x÷]{2}$/;
      let result = this.state.result;
      let operation = this.state.operation;
      if (operation === "") {
        this.setState({
          operation: '+',
          result: '+' });

      } else
      if (reg.test(operation) === false) {
        this.setState({
          operation: this.updateState(operation) + '+',
          result: '+' });

      } else
      if (reg2.test(operation) === true || reg.test(operation) === true) {
        let resultat = operation.replace(/[-+x÷]$/, "+");
        operation = resultat.replace(/[-+x÷]{2}$/, "+");
        this.setState({
          operation: operation,
          result: '+' });

      }
    });_defineProperty(this, "handleSubtract",


    () => {
      let reg = /[-+x÷]$/;
      let rege = /[+x÷]$/;
      let result = this.state.result;
      let operation = this.state.operation;
      if (operation === "") {
        this.setState({
          operation: '-',
          result: '-' });

      } else
      if (reg.test(operation) === false || rege.test(operation) === true) {
        this.setState({
          operation: this.updateState(operation) + '-',
          result: '-' });

      }
    });_defineProperty(this, "handleDivide",


    () => {
      let reg = /[-+x÷]$/;
      let reg2 = /[-+x÷]{2}$/;
      let result = this.state.result;
      let operation = this.state.operation;
      if (operation === "") {
        this.setState({
          operation: '÷',
          result: '÷' });


      } else
      if (reg.test(operation) === false) {
        this.setState({
          operation: this.updateState(operation) + '÷',
          result: '÷' });

      } else
      if (reg2.test(operation) === true || reg.test(operation) === true) {
        let resultat = operation.replace(/[-+x/]$/, "÷");
        operation = resultat.replace(/[-+x÷]{2}$/, "÷");
        this.setState({
          operation: operation,
          result: '÷' });

      }
    });_defineProperty(this, "handleMultiply",


    () => {
      let reg = /[-+x÷]$/;
      let reg2 = /[-+x÷]{2}$/;
      let result = this.state.result;
      let operation = this.state.operation;
      if (operation === "") {
        this.setState({
          operation: "x",
          result: 'x' });

      } else
      if (reg.test(operation) === false) {
        this.setState({
          operation: this.updateState(operation) + 'x',
          result: "x" });

      } else
      if (reg2.test(operation) === true || reg.test(result) === true) {
        let resultat = operation.replace(/[-+x÷]$/, "x");
        operation = resultat.replace(/[-+x÷]{2}$/, "x");
        this.setState({
          operation: operation,
          result: 'x' });

      }
    });this.state = { result: "0", operation: "" };}

  render() {

    return (
      React.createElement("div", null,
      React.createElement("div", { id: "calculator" },
      React.createElement("div", { id: "dis" },
      this.state.operation),

      React.createElement("div", { id: "display" },
      this.state.result),

      React.createElement("div", { id: "number", className: "col-xs-8" },
      numbers.map((n) =>
      React.createElement(Numbers, {
        id: n.id,
        number: n.number,
        onClick: this.handleClickKey })),

      React.createElement("div", null,
      React.createElement("input", {
        type: "button",
        id: "decimal",
        className: "operant col-xs-4",
        onClick: this.handleDecimal,
        value: "." }))),




      React.createElement("div", { id: "operation", className: "col-xs-4" },

      React.createElement("div", null,
      React.createElement("input", {
        type: "button",
        id: "clear",
        className: "btn-danger col-xs-12",
        onClick: this.handleClear,
        value: "AC" })),


      React.createElement("div", null,
      React.createElement("input", {
        type: "button",
        id: "add",
        className: " operant col-xs-6",
        value: "+",
        onClick: this.handleAdd })),


      React.createElement("div", null,
      React.createElement("input", {
        type: "button",
        id: "subtract",
        className: "operant col-xs-6",
        value: "-",
        onClick: this.handleSubtract })),


      React.createElement("div", null,
      React.createElement("input", {
        type: "button",
        id: "multiply",
        className: "operant col-xs-6",
        value: "x",
        onClick: this.handleMultiply })),


      React.createElement("div", null,
      React.createElement("input", {
        type: "button",
        id: "divide",
        className: "operant col-xs-6",
        value: "÷",
        onClick: this.handleDivide })),


      React.createElement("div", null,
      React.createElement("input", {
        type: "button",
        id: "equals",
        className: "btn-primary col-xs-12",
        value: "=",
        onClick: this.handleEqual })))),





      React.createElement("div", { style: { width: 90, margin: "auto", fontSize: 20, color: "#1D702D" } }, React.createElement("a", { href: "https://github.com/messaismael", target: "_blank" }, " by Ismael"))));


  }}


class Numbers extends React.Component {
  render() {
    return (

      React.createElement("input", {
        type: "button",
        className: "btn-default num col-xs-4",
        id: this.props.id,
        onClick: this.props.onClick,
        value: this.props.number }));


  }}



ReactDOM.render(React.createElement(Application, null), document.getElementById("app"));