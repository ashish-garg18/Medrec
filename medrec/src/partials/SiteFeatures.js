import React from 'react'
import { ReactComponent as Logo } from '../img/logo.svg';

const SiteFeatures = () => {
   return (
      <div>
         <section className="features" id="aboutlink">
            <div className="container mb-5">
               <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6">
                     <div className="feature-holder">
                        <h2>
                           <Logo />
                        </h2>
                        <h3>Feature Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                     <div className="feature-holder">
                        <h2>
                           <Logo />
                        </h2>
                        <h3>Feature Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                     <div className="feature-holder">
                        <h2>
                           <Logo />
                        </h2>
                        <h3>Feature Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                     <div className="feature-holder">
                        <h2>
                           <Logo />
                        </h2>
                        <h3>Feature Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-8 col-md-8 mt-3 information">
                     <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit .</h4>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vitae velit dolorum ab dolorem, nesciunt praesentium tenetur atque itaque quasi nemo repudiandae rem, alias optio ex, eveniet aliquam molestias dolores.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default SiteFeatures
