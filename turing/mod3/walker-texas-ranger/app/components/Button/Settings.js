import React from 'react';
import { Link } from 'react-router';
import './settingsstyles';


const Settings = (props) => {
  return (
    <div className='button-input'>
      <div className='settings-area'>Set Name: <input  className="settings-input" value={props.setName} type="text" onChange={(e) => props.grabName(e)}></input>
        <button className="set-button" onClick={(e)=> props.spliceName(e)}>SET</button>
        <button onClick={props.resetName} className="reset-button">RESET</button>
          <div>
            NSFW MODE:
            On: <input  className='settings-button'
                        onClick={props.parentControlsOn}
                        type="radio" value="On"
                        name="parentalControlsToggle"/>
            Off: <input className='settings-button' 
                        onClick={props.parentControlsOff}
                        type="radio"
                        value="Off"
                        name="parentalControlsToggle"/>
          </div>
    </div>
  </div>
  );
}

export default Settings;
