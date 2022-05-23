import './card.style.css';

const Card = ({ user }) => {
	const { name, location, picture } = user;

	return (
		<div className="card-container">
			<img alt={ `user-${name.first}-${name.last}` } src={ picture.large } />
			<h3>{ name.first } { name.last }</h3>
			<p>{ location.city }, { location.country }</p>
		</div>
	)
}

export default Card;