import Card from '../card/card.component'
import './card-list.styles.css';

const Cardlist = ({ users }) =>
	<div className="card-list">
		{
			users.map((user) => {
				return (
					<Card user={ user } key={ user.login.uuid } />
				);
			})
		}
	</div>

export default Cardlist;