import React, { Component } from 'react';
import Users from '../../data/users.json';
import classes from './User.css'

const users = Users.users;
const User = ( {match} ) => {

	const subarray = [];
	for (let i = 0; i < Math.ceil(users.length / 5); i++) {
		subarray[i] = users.slice((i * 5), (i * 5) + 5);
	}
	let userPage = match.params.key;
	return (
		<div>
			{subarray[userPage - 1].map(user =>
				<div className={classes.userBlock} key={user.id}>
					<img src="http://dev.frevend.com/json/images/u_1.png" alt="avatar"/>
					<div className={classes.avatarBlock}>
						<p className={classes.name}>{user.name + ' ' + user.surname}</p>
						<div className={classes.desc}>{user.desc}</div>
					</div>

				</div>
			)}
		</div>

	)}
export default User;