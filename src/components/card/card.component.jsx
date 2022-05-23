import { Component } from "react";
import './card.style.css'

class Card extends Component {
	render() {
		const { name, email, picture } = this.props.user;
		return (
			<div className="card-container">
				<img alt={ `user-${name.first}-${name.last}` } src={ picture.large } />
				<h3>{ name.first } { name.last }</h3>
				<p>{ email }</p>
			</div>
		)
	}
}

export default Card;