

import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import Card from 'react-bootstrap/Card';import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import product1 from '../../imagees/lenovo1.jpg';
import macpro from '../../imagees/macpro.jpg';

export default class Productpage extends Component {
    constructor(props){
        super(props)
        const token=localStorage.getItem("token")
        let loggedIn=true
        if(token==null){
            loggedIn=false
        }
        this.state={
            loggedIn
        }
        
    }
    render() {

        if(this.state.loggedIn===false){
            return <Redirect to="/"/>
        }
        
       
        return (
            
            <div>
                <br></br>
                <div className="text-center">
                    <h1>Welcome to store</h1>
                </div>
                <br/>
                <br/>
               
            <div className="container">
            <div className="row">
                <div class="col-3  text-center">
                <Card href="./productdetails" >
      <CardActionArea>
          <a  href="./productdetails">
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={product1}
          title="Contemplative Reptile"
         
          

        />
          </a>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" href="./productdetails">
      
         <a  href="./productdetails" style={{outline:'none',textDecoration:"none"}}>   Lenovo</a>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          ₹10000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  href="./productdetails" className="justify-content-center" 
      style={{width:'100%'}}>
       Add to cart
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
        
        
                </div>
                <div class="col-3 text-center">
                <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={macpro}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         Lenovo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          ₹100000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  href="./productdetails" className="justify-content-center" 
      style={{width:'100%'}}>
       Add to cart
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
        
        
                </div>
                <div class="col-3 text-center">
                <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={product1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  href="./productdetails" className="justify-content-center" 
      style={{width:'100%'}}>
       Add to cart
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
        
        
                </div>
                <div class="col-3 text-center">
                <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={product1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  href="./productdetails" className="justify-content-center" 
      style={{width:'100%'}}>
       Add to cart
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
        
        
                </div>
                
            </div>
            </div>
            </div>
       
        )
    }
}



