import { Component } from "react";
import './card-list.styles.css';

import Card from '../card/card.component'

class Cardlist extends Component {
	render() {
		const { users } = this.props;

		return (
			<div className="card-list">
				{
					users.map((user) => {
						return (
							<Card user={ user } key={ user.login.uuid } />
						);
					})
				}
			</div>
		)
	}
}

export default Cardlist;