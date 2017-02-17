import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import '../styles';
import Header from './Header/Header';
import InputArea from './Main/inputArea';
import FavoritesBtn from './Button/FavoritesButton';



class Home extends React.Component{
  constructor(){
  super()
  this.state = {
    jokes: [],
    favorites: [],
    randomJoke: '',
    jokesNum: '',
    firstName: 'Chuck',
    lastName: 'Norris',
    setName: '',
    parentalControls: '',
    }
  }
  grabName(e){
    this.setState({
      setName: e.target.value
    })
  }

  spliceName(e){
    let name = this.state.setName;
    let nameArray = name.split(' ')
    this.setState({
      firstName: nameArray[0],
      lastName: nameArray[1]
    })
  }

  resetName(e){
    this.setState({
      firstName: 'Chuck',
      lastName: 'Norris'
    })
  }

  handleChange(e){
    this.setState({
      jokesNum: e.target.value,
    })
  }

  pushToFavorites(joke, e){
    this.state.favorites.push(joke.joke)
    e.target.classList.toggle('star-clicked')
    e.target.setAttribute('disabled', 'disabled')
  }

  favoritesCheck() {
      let display = this.state.favorites.map((joke)=> {
        return <li className='joke'
                    key={joke.id}>{joke}
                    <button title='&#9733' className='star'>&#9733;</button></li>
      })
      return display;
  }

  jokesCheck() {
      let display = this.state.jokes.map((joke)=> {
        return <li className='joke'
                    key={joke.id}>{joke.joke}
                    <button title='&#9733' className='star' onClick={(e)=>{this.pushToFavorites(joke, e)}}>&#9733;</button></li>
      })
      return display;
  }

// TODO: arguments for toggling parents control and favorites and jokes
  parentControlsOn(){
    this.setState({
      parentControls: 'limitTo=[explicit]'
    })
  }

  parentControlsOff(){
    this.setState({
      parentControls: ''
    })
  }

  getNewJokes(){
    const jokeURL = `http://api.icndb.com/jokes/random/${this.state.jokesNum}/?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.lastName}&${this.state.parentControls}`
    fetch(jokeURL)
          .then((response)=>{
              return response.json()})
          .then((data)=> {
      this.setState({ jokes: data.value })
    })
  }

  componentDidMount(){
    const randomJokeURL = 'http://api.icndb.com/jokes/random/?escape=javascript'
    fetch(randomJokeURL).then((response)=>{
      return response.json()
    }).then((data)=> {
      this.setState({ randomJoke: data.value.joke })
    })
  }
    render(){
      return(
        <div>
        <Header />
        <div className="random-joke">{this.state.randomJoke}</div>
          <div className="get-jokes">
            {React.cloneElement(this.props.children,{
              favorites: this.state.favorites,
              pushToFavorites: this.pushToFavorites.bind(this),
              favoritesCheck: this.favoritesCheck.bind(this),
              spliceName: this.spliceName.bind(this),
              parentControlsOn: this.parentControlsOn.bind(this),
              parentControlsOff: this.parentControlsOff.bind(this),
              grabName: this.grabName.bind(this),
              handleChange: this.handleChange.bind(this),
              resetName: this.resetName.bind(this),
              jokesNum:this.state.jokesNum,
              setName: this.state.setName,
              jokes:this.state.jokes,
              getNewJokes:this.getNewJokes.bind(this),
              jokesCheck:this.jokesCheck.bind(this)
        })}</div>
      <h2 className='click-get-jokes'>{window.location.pathname === '/home' ? <p>Click Get Jokes!</p>: <div/> }</h2>
        </div>
      )
    }
  }



  export default Home;
