import React, { Component } from 'react';
import '../Game/Game.css';

// function shuffle(array) {
//   var i = 0
//     , j = 0
//     , temp = null

//   for (i = array.length - 1; i > 0; i -= 1) {
//     j = Math.floor(Math.random() * (i + 1))
//     temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }
// }

class CardView extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!this.props.matched && !this.props.imageUp) {
      this.props.onClick(this.props.id,this.props.image);      
    }
  }

  render() {
    let imPath = './trap/';
    // shuffle(imPath)
    console.warn(this.props.imageUp)
    if (this.props.imageUp) {
      imPath = imPath + this.props.image + '.jpg';
    } else {
      imPath = imPath + 'trap-back.jpg';
    }

    let className='Card';
    if (this.props.matched) {
      className = className + ' Matched';
    }

    return (
        <img className={className} src={require(`${imPath}`)} alt='' onClick={this.onClick}/>
    );      
  };
};

export default CardView;