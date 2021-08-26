import React from 'react';
import './NewsContent.css';
import {Container} from '@material-ui/core';
import NewsCard  from './NewsCard';
 
const NewsContent = ({newsArray, newsResult}) => {

	return (
	<Container maxWidth = "md">

	{newsArray.map((newsItem) => (
		<NewsCard newsItem={newsItem} key={newsItem.title} />

			))}
		
		<hr />
	<button className="loadmore">
	Load
	</button>
	</Container>	
		);}

export default NewsContent;