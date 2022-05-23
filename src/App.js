import { Component } from "react";

import SearchBox from "./components/search-box/search-box.component";
import Cardlist from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			users: [],
			searchField: "",
			userResults: 16
		};
	}

	// ! If needs data to inject to state (Fetch API) use here
	componentDidMount() {
		fetch(`https://randomuser.me/api?results=${this.state.userResults}`)
			// fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((users) =>
				this.setState(
					() => {
						return { users: users.results };
					}
				)
			);
	};

	onSearchChange = event => {
		const searchField = event.target.value.toLocaleUpperCase();

		this.setState(() => {
			return { searchField };
		});
	};

	fullName = name => {
		return `${name.first} ${name.last}`;
	};

	render() {
		const { users, searchField } = this.state;
		const { onSearchChange, fullName } = this;


		const filteredusers = users.filter((user) => {
			return fullName(user.name).toLocaleUpperCase().includes(searchField);
		});

		return (
			<div className="App">
				<h1 className="app-title">Random User</h1>
				<SearchBox
					className="users-search-box"
					onChangeHandler={ onSearchChange }
					placeholder='Search users...'
				/>
				<Cardlist users={ filteredusers } />
			</div>
		);
	};
};

export default App;