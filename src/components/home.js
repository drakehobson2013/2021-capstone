import React from 'react'
import Cincy from './Cincy.mp4'


const Home = () => {

//   //Modal for the JS pop up 

// <div className="modal" tabindex="-1" aria-hidden="true">
// <div className="modal-dialog">
//   <div className="modal-content">
//     <div className="modal-header">
//       <h4 className="modal-title"> Stay Connected With Us!</h4>
//       <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">

//       </button>
//     </div>
//     <div className="modal-body">
//       <input type="text" placeholder="First Name"/>
//       <input type="text" placeholder="Last Name"/>
//       <input type="text" placeholder="E-mail"/>
//     </div>
//     <div className="modal-footer">
//       <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//       <button type="button" class="btn btn-primary" data-dismiss="modal">Submit</button>
//     </div>
//   </div>
// </div>
// </div>

// var NewsLetterModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })
  
    return (

      

        <div id="home">
            <video id="slider" autoPlay muted loop>
            <source src={""}></source>

            </video>
            <ul class="navigation">
              <li><img src="thumb"></img></li>
              <li><img src="thumb"></img></li>
              <li><img src="thumb"></img></li>
            </ul>
        </div>

        

      
    )
    

    
    
}

export default Home

/* <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  */