import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	renderDish(dish) {
		return(
			<Card>
				<CardImg width="100%" src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		); 
	}

	renderComments(comments) {
		if(comments !=null){
			return(
				<ul className="list-unstyled">
					<li>{comments.comment}</li>
					<li>-- {comments.author} , {comments.date}</li>
				</ul>
			);
				
		}
		else{
			return(
				<div></div>
			);
		}
		
	}

	render() {

		if(this.props.selectedDish != null){
			const comments = this.props.selectedDish.comments.map((comment) => {
				return(
					this.renderComments(comment)
				);
				
			})
			return(
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						{this.renderDish(this.props.selectedDish)}
					</div>

					<div className="col-12 col-md-5 m-1">
						<h4>Comments</h4>
						{comments}
					</div>
				</div>
			);
		}
		else{
			return(
				<div></div>
			);
		}
		
	}
}

export default Dishdetail;