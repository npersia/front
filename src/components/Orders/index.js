import React, {Component} from 'react';
import '../Global/css/Orders.css';
import fondo from '../Global/imagenes/cover_dark.jpg';


import rest1 from '../Global/imagenes/rest/rest001.jpg';

const rest_images = require.context('../Global/imagenes/', true);

const Restaurants = (props) => (
    <li className="contenido">
        <div className="col-lg-12 p-3">
            <hr/>

            <div className="row">



                <div className="col-md-4">
                    <img className="img-fluid d-block ml-auto" src={  rest_images(`./${props.image}`)  } width="50%" alt="logo_rest"/>
                </div>



                <div className="col-md-4 w-25 py-3" >
                    <h1 className="">{props.name}</h1>
                </div>




                <div className="col-md-4 w-25 py-3" >
                    <h1 className="">{props.rating} ★</h1>
                </div>


            </div>

        </div>
    </li>
);

class Orders extends Component{
    constructor(props){
        super(props);
        this.state = {
            rests:[]

        }
    };

    componentWillMount(){
        fetch("http://localhost:5000/restaurant", {headers: {'content-type': 'application/json'} })
            .then(response => response.json())
            .then(rests =>{
                rests.forEach(rest =>{
                    let data = {
                        rest: rest.rest,
                        image: rest.image,
                        rating: rest.rating,
                        name: rest.name
                    };
                    this.setState({rests:this.state.rests.concat([data])})
                })

            } )
    };






    render(){
        return(
            <div className="Orders">


                <div className="align-items-center d-flex photo-overlay py-5 cover" style = {{ backgroundImage: 'url('+fondo+')' }}>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 p-3">
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <div className="btn-group">
                                            <button className="btn btn-primary dropdown-toggle"
                                                    data-toggle="dropdown"> Dropdown
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div>

                            {this.state.rests.map(rest => <Restaurants key={rest.rest} image={rest.image} name={rest.name} rating={rest.rating}/>)}
                            </div>







                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Orders;