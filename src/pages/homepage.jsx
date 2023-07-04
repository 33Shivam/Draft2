import React from 'react';
import './homepage.css';
import ScrollCount from './scrollCount.jsx';
import TwitterTimeline from './twitter.jsx';
import Map from './Dependencies/maps';





class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [
        './images/banner1.jpg',
        './images/banner2.jpg',
        './images/banner3.jpg',
      ],
      currentBannerIndex: 0,
    };
  }

  componentDidMount() {
    this.bannerTimer = setInterval(this.changeBanner, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.bannerTimer);
  }

  changeBanner = () => {
    const { banners, currentBannerIndex } = this.state;
    const nextIndex = (currentBannerIndex + 1) % banners.length;
    this.setState({ currentBannerIndex: nextIndex });
  };




  

  render() {


    const { banners, currentBannerIndex } = this.state;
    const currentBanner = banners[currentBannerIndex];
    


    return (
      <div>
    <div className="hero-c">      
    <div className="the-largest-community-of-photo">      
      <div className="rectangle-icon">
        <div className="additional">
      <img className="rectangle-icon1" alt="" img src= './images/rectangle2.png'/>
      <img className="rectangle-icon2" alt="" img src= './images/rectangle3.jpg' />
      <img className="rectangle-icon3" alt="" img src= './images/rectangle4.png' />
      <img className="rectangle-icon4" alt="" img src= './images/rectangle5.png' />
      </div>
      
        <div className="the-largest-community">
          Building Hope: Empowering Lives Through Shelter Homes for the Homeless
        </div>      
        <img  className="scrollable-banner-icon" alt="" src={currentBanner} />
        </div>
      </div>      
    </div> 




    <div className="vision">      
      <div className="vision-our-objective-container">
        <p className="vision1">
          <span>
            <span className="vision2">Vision</span>
          </span>
        </p>
        <p className="blank-line">
          <span>
            <span className="blank-line1">&nbsp;</span>
          </span>
        </p>
        <p className="our-objective-is-to-connect-al">
          <b className="our-objective-is">
            Our objective is to connect all the shelter homes (private and
            public) to NGOs, big organizations/foundations, people who want to
            find shelter, people who want to donate out of good-will to the
            residents of shelter homes.
          </b>
        </p>
      </div>
      <img className="rectangle-icon13" alt="" img src= './images/rectangle10.jpg' />
    </div>



    

    <div className="current-stats">
      <div className="vscon">
      <div className="rectangle-icon6">
      <div className="current-stats-item" >
      <b className="shelter-home">Shelter Home</b>
      </div>
      <b className="cr"><ScrollCount value={1000} speed={10} /></b>
      </div>


      <div className="rectangle-icon7">
      <div className="current-stats-child">
      <b className="donations">Donations</b>
      </div>
      <b  className="b1"><ScrollCount value={1000} speed={10}/></b>
      </div>


      <div className="rectangle-icon8" >
      <div className="current-stats-child1" >
      <b className="beds">Beds</b>
      </div>
      <b className="b2"><ScrollCount value={400} speed={10} /></b>
      </div>



      <div className="rectangle-icon9">      
      <div className="current-stats-inner">
      <b className="cities">Cities</b>
      </div>
      <b className="b"><ScrollCount value={100} speed={1} /></b>
      </div>
      </div>
    </div>

    
{/* here starts upadtes secttion */}

    <div className="real-time-updates">
      <div className="group1">
        <div className="rectangle1" >
        <div className= "rectangle-icon10">        
        <TwitterTimeline />        
        </div>
        <div className="tweets">Tweets</div>
      </div>
      <div className="rectangle2" >
      <div className="rectangle-icon11" />
      <div className="headlines">Headlines</div>
      </div>
      <div className="rectangle3" >
      <div className="rectangle-icon12"/>
      <div className="latest-donations">Latest Donations</div>
      </div>
    </div> 
    </div>


{/*Here Starts Report Section*/}
    <div className="report-section">  
        <div className="report-a-homeless">
          {" "}
          Report a Homeless Individual in Need
        </div>      
      <div className="group">       
        <b className="report">Report:</b>
        <div className="button21">
          <div className="button-child21" />
          <div className="register">Submit</div>
        </div>
        <div className="button12">
          <div className="button-child12" />
          <div className="register12">Upload Image</div>
        </div>
         <form className="rectangle21" />
         <b className="report">Report:</b>
        <div className="group-child" />
        <input  type="text"className="group-child" placeholder="Your Name"/>
        <div className="group-item" />
        <input  type="text" className="group-item" placeholder='Last Name'/>
        <div className="group-inner" />
        <input  type="text" className="group-inner"placeholder='Phone Number'/>
        <div className="rectangle-div" />
        <input  type="text" className="rectangle-div"placeholder='Email'/>
        <button class="button-6" role="button">Submit Request</button>
        <button class="button-7" role="button">Upload Image</button>        
         </div>
      <div className="rectangle-icon5"  >
      <Map />
        <button className="Get Location"/>
        </div>
    </div>




{/* oraganisation section */}







    <div className="organization-section">
      <div className="supporting-organisation">SUPPORTING ORGANISATION</div>
      <img className="ellipse-icon9" alt="" img src= './images/ellipse.png'/>
      <img className="ellipse-icon91" alt="" img src="./images/ellipse2.png"/>
      <img className="ellipse-icon92" alt="" img src="./images/ellipse3.png" />
      <img className="ellipse-icon93" alt="" img src= "./images/ellipse4.png" />
      <img className="ellipse-icon94" alt="" img src="./images/ellipse4.png" />
    
    </div>
    

      </div>
    );
  }
}

export default Homepage;









