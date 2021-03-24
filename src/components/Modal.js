import React from 'react'

    // constructor();{
        
    //     this.state= {
    //         show: false
    //     };
    //     this.showModal = this.showModal.bind(this);
    //     this.hideModal = this.hideModal.bind(this);
    // ;
    
    // const showModal = () => {
    //     this.setState({ show: true });
    // };
    //  const hideModal = () => {
    //     this.setState({ show: false });
    // };

const Modal= () => {

    constructor();{

        var showModal = 
            this.setState({ show: true });
        
         var hideModal =
            this.setState({ show: false });
        
        
        this.state= {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

      
    
        return(

            // modal

          <div className="modal"  id="NLModal" tabindex="-1" aria-labelledby="NLModalLabel" aria-hidden="true" style="display: none;">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-title">
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
      
                    </button>
                  </div>
                  <div className="modal-body">
                    <input type="text" placeholder="First and Last Name" />
                    <input type="text" placeholder="E-mail Address"/>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        )
      }
    }
      export default Modal 

   
