import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, isLoading, errMess}) {
    
    console.log("item", item);
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else 
        return typeof item === 'undefined'
        ? null 
        :
        (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                        <CardImg src={`${baseUrl}${item && typeof item.image !== "undefined" ? item.image : ""}`} alt={item && typeof item.name !== "undefined" ? item.name : ""} />
                        <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                        <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
            </FadeTransform>
        )

}

function Home(props) {
    // console.log(props.promotion);
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                  {
                      typeof props.dish !== "undefined" ? (
                        <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading} 
                        errMess={props.dishesErrMess}/>
                      ):null
                  }  
                </div>
                <div className="col-12 col-md m-1">
                    {/* <RenderCard item={props.promotion} /> */}
                    <RenderCard item={props.promotion} 
                    isLoading={props.promoLoading} 
                    errMess={props.promoErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}
                    isLoading={props.promoLoading} 
                    errMess={props.promoErrMess}  />
                </div>
            </div>
        </div>
    );
}

export default Home;