import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.criminalelement.com/wp-content/uploads/2011/08/Parker_Bookstores-Boulder-Bookstore.jpg) center / cover'}} >Book Store</CardTitle>
            <CardText>
              A javaScript based webpage that lets you search for Books.
            </CardText>
            <CardActions border>
              <a href="https://github.com/anuj1317/Cipherassignment2-webpage-" rel="noopener noreferrer" target="_blank">Github</a>
            </CardActions>
            
          </Card>
        </div>


      )
    } 
    else if(this.state.activeTab === 1) {
      return (
        <div>
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://lh3.googleusercontent.com/fHr2pe1B7n_dvrFX3e-P-BFrsiMJ-nPh4_wn4Yj2vwlINS_Lb4CwK8qKGK8upu5to-RK) center / cover'}} >Shop App</CardTitle>
            <CardText>
              This app uses firebase for authentication and fetch the items in a recycler view.
            </CardText>
            <CardActions border>
            <a href="https://github.com/anuj1317?tab=repositories" rel="noopener noreferrer" target="_blank">Github</a>
            </CardActions>
          
          </Card>

          <hr/>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploads-ssl.webflow.com/5c29380b1110ec92a203aa84/5c4406f679dc69b549b48fa6_p17s2tfgc31jte13d51pea1l2oblr3.png) center / cover'}} >Bottom Navigation</CardTitle>
            <CardText>
              This is a Dynamic Bottom navigation App.
            </CardText>
            <CardActions border>
            <a href="https://github.com/anuj1317/dynamicbottomnavigation" rel="noopener noreferrer" target="_blank">Github</a>
            </CardActions>
            
          </Card>

        </div>
      )
    
  
    }  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Web</Tab>
          <Tab>Android</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
