import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default class PostUI extends Component {

    constructor(props){
        super(props);
        this.state={
            title:"",
            body:""
        }
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.onSubmitHandler=this.onSubmitHandler.bind(this);
    }

    onChangeHandler(Event){
        this.setState({
            [Event.target.name]:Event.target.value
        })
    }

    onSubmitHandler(event) {
        console.log(event);
        event.preventDefault();
        console.log('Form Submitted');
        fetch('http://jsonplaceholder.typicode.com/posts',{
            method:"POST",
            headers:{"content-type":'application/json'},
            body:
                JSON.stringify(this.state)
        })
            .then(res=>res.json())
            .then(data => console.log(data));
    }


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs='12' sm='12' md='12' lg='12'>
                            <form onSubmit={this.onSubmitHandler}>
                                <Col xs='12' sm='12' md='12' lg='12'>
                                    <input type="text" name='title' className="form-control" value={this.state.title} onChange={this.onChangeHandler}/>
                                    <input type="text" name='body' className="form-control" value={this.state.body} onChange={this.onChangeHandler}/>
                                    <Button type="submit" color="primary" className='float-right' >Submit</Button>    
                                </Col>
                                
                                
                                
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
