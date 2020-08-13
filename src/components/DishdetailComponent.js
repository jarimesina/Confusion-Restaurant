import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';
import { Media } from 'reactstrap';

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    
    renderComments(comments){      
        if(comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                            {comments.map((comment) => {
                                return (
                                    <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    </li>                
                                );
                            })}
                    </ul>
                </div>);
        } else {
            return(
                <div></div>
            );
        }
    }


    render() {
        return (
            <>
                <div className="col-12 col-md-5 m-1" >
                    <Card>
                        <CardImg width = "100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>                    
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div >
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </>
        );
    }
}

export default DishdetailComponent;