import './App.css';
import Login from './Login';
import Player from './Player';
import React, {useEffect, useState} from 'react';
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from './DataLayer';

//0f7cc76b56764c4aaf1fde90b3d5b7de
const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

    }
  }, [])

  console.log("Token", token);
  console.log("User", user);

  return (
    <div className="App">
      {user?(<Player spotify={spotify}/>):(<Login />)}
    </div>
  );
}

export default App;
