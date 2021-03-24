import React from 'react'
import Rhinegeist from './Images/Rhinegeist.png'
import Platform from './Images/Platform.png'
import FiftyWest from './Images/FiftyWest.png'
import Urban from './Images/Urban.png'
const Home = () => {
    return (
<div className="margin">
<header id="header-home">
      <div className="container-fluid home-bg">
      <div className="header-text">
      <h2 className="bigger-font text-white">Welcome To Cincinnati!</h2>
      <p className="text-white">Cincinnati boasts a thriving arts scene, major league sports teams, a world-class zoo and aquarium and a revitalized riverfront with shopping, clubs and restaurants. Located on the Ohio River in southwestern Ohio, Cinci claims more than 4,000 restaurants, and more chili restaurants than any other city in the world. Adrenaline-junkies will want to visit the nearby Kentucky Speedway and Paramount's Kings Island, home of the tallest and fastest wooden roller coaster in the world.</p>
      </div>
      </div>
      <div className="container-fluid text-center mt-5">
        <div className="row">
          <div className="col-3">
          <h2>So Why Cincy?</h2>
          <p className="text-center">Cincinnati is one place that’s been popping up on everyone's radar consistently over the past decade: through its street art revolution, through its beer scene, through its place in innovation, boasting the headquarters of such global enterprises as Procter & Gamble. What you will find here in Cincinnati is a city mindful of its approach to urban growth and one bursting at the seams with talent in every possible arena.</p>
          <h5>Check Out Some Of Our Best Breweries</h5>
          <hr/>
            <div className="container">
              <img className="logos" src={Rhinegeist} alt=""/>
              <img className="logos" src={Platform} alt=""/>
              <img className="logos" src={FiftyWest} alt=""/>
              <img className="logos" src={Urban} alt=""/>
            </div>
          </div>
          <div className="col-6">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pKwuW06NvXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="jumbotron bg-danger">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestias nostrum sint possimus excepturi provident?</span>
      </div>
          </div>
          <div className="col-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error totam facilis minima culpa, porro nisi deleniti explicabo alias ut fugit incidunt repellendus officia delectus enim eos numquam obcaecati quam corrupti.</p>
          </div>
        </div>
      </div>
     
    
</header>
</div>



    )
}

export default Home



