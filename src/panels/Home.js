import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

constructor(props) {
							 super(props);
							 this.state = {class: "off", label: "Нажми"};

							 this.press = this.press.bind(this);
					 }
press(){
			 let className = (this.state.class==="off")?"on":"off";
			 this.setState({class: className});
	 }

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>VKMINI - APPS</PanelHeader>
		{fetchedUser &&
		<Group>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
				<Button id = "button_id" size="xl" level="2" onClick={() =>
					{
						var arr = [
												"first",
												"second",
												"third",
												"foure"
											];
					}}>
					Show me the Persik, please
				</Button>


           render() {
               return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
           }



			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
		country: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
