import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import blue from '../img/blue.png';
import green from '../img/green.png';
import magicball from '../img/Magic_ball.png';
import red from '../img/red.png';
import yellow from '../img/yellow.png';
import './Persik.css';

function handleClick() {
	const posts = [
		["Положительно","Бесспорно"],
		["Положительно","Предрешено"],
		["Положительно","Никаких сомнений"],
		["Положительно","Определённо да"],
		["Положительно","Можешь быть уверен в этом"],
		["Нерешительно положительно","Мне кажется — «да»"],
		["Нерешительно положительно","Вероятнее всего"],
		["Нерешительно положительно","Хорошие перспективы"],
		["Нерешительно положительно","Знаки говорят — «да»"],
		["Нерешительно положительно","Да"],
		["Нейтральные","Пока не ясно, попробуй снова"],
		["Нейтральные","Спроси позже"],
		["Нейтральные","Лучше не рассказывать"],
		["Нейтральные","Сейчас нельзя предсказать"],
		["Нейтральные","Сконцентрируйся и спроси опять"],
		["Отрицательные","Даже не думай"],
		["Отрицательные","Мой ответ — «нет»"],
		["Отрицательные","По моим данным — «нет»"],
		["Отрицательные","Перспективы не очень хорошие"],
		["Отрицательные","Весьма сомнительно"]
	];

	var min = 0;
	var max = 19;
	let rand = min + Math.random() * (max + 1 - min);
	document.getElementById("textID").textContent = posts[Math.floor(rand)][1];
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
				<Button onClick={handleClick}>
					Random
				</Button>
				<p id="textID">textID</p>
				<div style="picture1">
<img src={red} alt="Persik The Cat"/>
				</div>
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
