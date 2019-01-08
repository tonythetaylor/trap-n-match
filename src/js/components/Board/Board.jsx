import React, {Component} from "react";
import './Board.css'

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

class Board extends Component {
    renderSquare(i) {
      return(
          <Square 
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)} 
          />
        ); 
      }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
          
          </div>
          <div className="board-row">
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
          </div>
          <div className="board-row">
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
          </div>
        </div>
      );
    }
  }

  export default Board;