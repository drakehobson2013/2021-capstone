import React from 'react'
import Drake from './Drake.jpg';
import Kiah from './Kiah.jpg';
import Aarika from './Aarika.jpg';
import Ron from './Ron.jpeg';

const footer = () => {
    return (
        
<footer class="text-center fixed-bottom">
<a className="gitLink" href="https://github.com/drakehobson2013"><img className="gitImg" src={Drake} alt=""/></a>
<a className="gitLink" href="https://github.com/drakehobson2013"><img className="gitImg" src={Kiah} alt=""/></a>
<a className="gitLink" href="https://github.com/drakehobson2013"><img className="gitImg noOvals" src={Aarika} alt=""/></a>
<a className="gitLink" href="https://github.com/drakehobson2013"><img className="gitImg noOvals" src={Ron} alt=""/></a>
  <p className="w3-medium text-white">Follow us on GitHub | ThisIsCincy©2021</p>
</footer>
            
        
    )
}

export default footer
