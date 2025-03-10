import React from "react";
import Welcome from "./Welcome";
import Weather from "./WeatherInformation";
import CommunityBlog from "./CommunityBlog";
import Blog from "./Blog"; // Imported this for the blog
import sampleImage from "../../assets/images/flower.jpg"
import ImageDisplayer from "./ImageDisplayer/ImageDisplayer"


const Main = () => {
  const welcomeText = `Welcome Students!`;
// Added blogText have a blog to display, you could use a JSON of blogs if you like
  const blogText = `This is a web app to provide information about the 
                    local community for locals and tourists.`; 
  return (
    <div className="MainSection">
      
      <Welcome />
        <div className="Welcome">
            <Welcome text={welcomeText}/>             
        </div>
      <div> 
       <img src={sampleImage} alt="sampleImage" width={250} height={250} />          
       {/*<ImageDisplayer image={sampleImage} alt="sampleimage"/>*/} 
      </div>  
      
      <Weather />
      <Welcome/>
      <CommunityBlog />
        <div className="Blog">
            <Blog text={blogText}/>
        </div>      
    </div>
  );
};

export default Main;
