import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import {Link} from 'react-router-dom'
//import { BrowserRouter as Router, Route } from 'react-router-dom';


const ProductScreen = ({product}) => {
  return (
    <>
        <div className="p-3 ">
            <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`}> 
                <Card.Img src={product.image} variant='top'/>
            </a>
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'>
                    <strong> {product.name} </strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
               <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </Card.Text>
            <Card.Text as="div">
                ${product.price}
            </Card.Text>
        </Card.Body>
        </Card> 
    </div>
    </>
  )
}

export default ProductScreen
