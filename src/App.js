import { useState, useEffect } from "react";

import SearchBox from "./components/search-box/search-box.component";
import Cardlist from "./components/card-list/card-list.component";
import "./App.css";

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState(users);

	useEffect(() => {
		fetch(`https://randomuser.me/api?results=16`)
			.then(res => res.json())
			.then(users => setUsers(users.results));
	}, [])

	useEffect(() => {
		const newFilteredusers = users.filter((user) => {
			return fullName(user.name).toLocaleLowerCase().includes(searchField);
		});
		setFilteredUsers(newFilteredusers);

	}, [users, searchField])

	const onSearchChange = event => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	const fullName = name => {
		return `${name.first} ${name.last}`;
	};

	return (
		<div className="App">
			<h1 className="app-title">Random User</h1>
			<SearchBox
				className="users-search-box"
				onChangeHandler={ onSearchChange }
				placeholder='Search users...'
			/>
			<Cardlist users={ filteredUsers } />
		</div>
	)
}

export default App;