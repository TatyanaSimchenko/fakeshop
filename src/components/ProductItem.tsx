import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { Product } from "../interfaces/interfaces";

// interface CurrencyStats {
//     USD: number
//     EUR: number
// }

// const currencyStats: CurrencyStats = {
//     'USD': 1,
//     'EUR': 0.85
// }

const StyledCard = styled(Card)`
min-height: 490px;
margin-bottom: 20px;
& .card-text {
    font-size: 14px;
    height: 60px;
    text-overflow: ellipsis;
    overflow: hidden;
}
& .card-price {
    display: block;
    font-weight: bold;
}`

type Props = Product

const ProductItem = (props: Props) => {
    const { imageUrl, title, description, price } = props
    return (
        <StyledCard >
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body className="d-flex flex-column justify-content-betwen">
                <Card.Title>{title}</Card.Title>
                <Card.Text className="mb-2">{description}</Card.Text>
                <span className="card-price font-weight-bold mb-2">
                    {/* <Currency 
                    qantity={+price * currencyStats[currency]}
                    currency={currency}/> */}
                    ${price}
                </span>
                <Button variant="primary">
                    Add to cart
                </Button>
            </Card.Body>
        </StyledCard>
    )
}

export default ProductItem