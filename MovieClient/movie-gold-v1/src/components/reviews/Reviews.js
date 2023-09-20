import { useParams } from "react-router-dom";
import api from "../../api/axiosConfig";
import { useRef, useEffect } from "react";
import { Container,  Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/reviewForm";

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieID;

    useEffect(() => {
        getMovieData(movieId);
    }, []);
  return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
            </Row>
        </Container>
  )
}

export default Reviews