import React, {Component} from "react";
import MemeGeneratorComponent from "./MemeGeneratorComponent";

export default class MemeGeneratorContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
      allMemeImages: []
    }
    this.onChangeHandle = this.onChangeHandle.bind(this)
    this.onCLickHandle = this.onCLickHandle.bind(this)
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(response => {
      const {memes} = response.data
      console.log(memes[0])
      this.setState({allMemeImages: memes})
    })
  }

  onChangeHandle(event) {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  onCLickHandle() {
    const newMemeImage = this.getRandomItem(this.state.allMemeImages).url;
    this.setState({randomImage: newMemeImage})
  }

  getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  render() {
    return (<MemeGeneratorComponent
      topText={this.state.topText}
      bottomText={this.state.bottomText}
      randomImage={this.state.randomImage}
      onClick={this.onCLickHandle}
      onChange={this.onChangeHandle}
    />)
  }
}
