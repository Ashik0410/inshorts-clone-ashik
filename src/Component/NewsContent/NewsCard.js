import React from 'react';
import './NewsCard.css';

const NewsCard = ({newsItem}) => {
		// console.log(newsItem)
		const fullDate = new Date(newsItem.publishedAt);
		var date = fullDate.toString().split(" ");
		const hour = parseInt(date[4].substring(0,2));
		const time = hour > 12?true:false;
		// console.log(hour);


		return(
			<div className="newsCard" style={{	justifyContent:"space-evenly"}}>
				<img className = "newsImage" alt={newsItem.title} src={newsItem.urlToImage?newsItem.urlToImage:"https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=6&m=922962354&s=612x612&w=0&h=_KKNzEwxMkutv-DtQ4f54yA5nc39Ojb_KPvoV__aHyU="} />
				<div className="newsText">
				<div>
					<span className="title">{newsItem.title}</span> &nbsp;
					<br />
					<span className="author">
						<a href={newsItem.url} target="blank">
							<b>Shorts  </b>
						</a>
						<span className="muted">
						by {newsItem.author? newsItem.author : "author unknown"} / &nbsp;
						{time
							? `${hour-12} : ${date[4].substring(3,5)} pm`
							:`${hour} : ${date[4].substring(3,5)} am`} &nbsp;
							on {date[2]} {date[1]} {date[3]}, {date[0]}

						</span>
						</span>	
					</div>
				</div>
				<div className="lowerNewsText">
					<div className="description">{newsItem.description}</div>
					<span className="readmore">
						read more at {""} 	
						<a className="source" href={newsItem.url} target="blank">
						<b>{newsItem.source.name}</b>
						</a>
					</span>
				</div>
			</div>
			);
}
export default NewsCard;