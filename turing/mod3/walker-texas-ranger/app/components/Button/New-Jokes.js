import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
import InputArea from '../Main/inputArea';
import './jokes-styles'


export default class NewJokes extends Component {
 render(){
   return(
     <div>
       <div className='button-input'>
         <Link to='/jokes'>
          <button  className='new-jokes'
                    onClick= {()=>this.props.getNewJokes()}
           >Get Jokes</button></Link>
           <InputArea
             handleChange={this.props.handleChange}
             jokesNum={this.props.jokesNum}
             getNewJokes={this.props.getNewJokes}
           />
         <div><Link to='/favorites'><button onClick={(e)=>this.props.favoritesCheck()} className="favorites">Favorites</button></Link></div>
         </div>
       <ul>
         {this.props.jokesCheck()}
       </ul>

     </div>
   )
 }
}
