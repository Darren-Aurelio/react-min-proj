import { useParams } from 'react-router-dom'
import React from "react";
import { Form, Row } from "reactstrap";
import request from '../../helpers/request';



const ProductDetail = ({fetchData, type, setFormVisible, formEdited}) => {



    const handleSubmit = async (e) => {
            if(type === 'get') {
            await request.get('/product')
            .then(() => fetchData())
            .catch((err) => console.log(err))

        } else {
            await request.get(`/product/${formEdited.id}`)
            .then(() => fetchData())
            .catch((err) => console.log(err))
        }

        setFormVisible(false)
    }

    

    return (
    <>
    <Row>
    <Form onSubmit={handleSubmit}>
        <>p </>
    </Form>
    </Row>
    </>
    )
}



export default ProductDetail;