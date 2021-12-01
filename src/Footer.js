import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid, Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
	return (
		<div className="footer">
			<div className="footer_left">
				<img className="footer_albumLogo" src="https://ca-times.brightspotcdn.com/dims4/default/97fb9dd/2147483647/strip/true/crop/5000x5000+0+0/resize/1486x1486!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F90%2F31%2F0bb774224fa4af5e55157453efc6%2Fpositions-album-artwork.jpg" alt=""/>
				<div className="footer_songInfo">
					<h4>Positions</h4>
					<p>Ariana Grande</p>
				</div>
			</div>

			<div className="footer_center">
				<ShuffleIcon className="footer_green"/>
				<SkipPreviousIcon className="footer_icon"/>
				<PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
				<SkipNextIcon className="footer_icon"/>
				<RepeatIcon className="footer_green"/>
			</div>

			<div className="footer_right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default Footer;