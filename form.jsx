import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Row, Button, Col } from "reactstrap";
import request from '../../helpers/request';


const FormEmployee = ({ type, setFormVisible, formEdited, fetchData }) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = { name, quantity, price };

        // const handleLogin = async () => {
        //     const form = formik.values
        //     await request.post(`http://localhost:7777/login`, form)
        //       .then(({ token }) => {
        //         sessionStorage.setItem('access_token', token)
        //       })
        //       .catch(err => console.error(err))
        //   }
        if(type === 'create') {
            await request.post('/product', form)
            .then(() => fetchData())
            // sessionStorage.setItem('token', data?.token)
            .catch((err) => console.log(err))

        } else {
            await request.put(`/product/${formEdited.id}`, form)
            .then(() => fetchData())
            .catch((err) => console.log(err))
        }

        setFormVisible(false)
    }

    useEffect(() => {
        if( type === "edit") {
            setName(formEdited.name)
            setQuantity(formEdited.quantity)
            setPrice(formEdited.price)
        }
    }, [type, formEdited])

    return (
    <>
    <Row>
    <Form onSubmit={handleSubmit}>
        <>
        <FormGroup>
            <Label>Name</Label>
            <Input
            value={name}
            placeholder="Please enter the product name"
            onChange={(e) => setName(e.target.value)}
            required
            />
        </FormGroup>

        <FormGroup>
            <Label>Quantity</Label>
            <Input
            type="number"
            value={quantity}
            placeholder="Please enter the quantity"
            onChange={(e) => setQuantity(e.target.value)}
            required
            />
        </FormGroup>

        <FormGroup>
            <Label>Price</Label>
            <Input
            value={price}
            placeholder="Please enter the price"
            onChange={(e) => setPrice(e.target.value)}
            required
            />
        </FormGroup>

        <Row>
            <Col>
            <Button color="success" type="submit"> Submit </Button>
            </Col>
            <Col>
            <Button onClick={() => setFormVisible(false)}> Cancel </Button>
            </Col>
        </Row>

        </>
    </Form>
    </Row>
    </>
    )
}

export default FormEmployee