import React from "react";
import Welcome from "./Welcome";
import Weather from "./WeatherInformation";
import CommunityBlog from "./CommunityBlog";
import Blog from "./Blog"; // Imported this for the blog
import ContactUs from "./ContactUs";
import sampleImage from "../../assets/images/stat_img_1.png"
import Button1 from "../Button1/Button1.js"
import Button2 from "../Button2/Button2.js"

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
         <img src={sampleImage}/>
      </div>  
      <div>
      <h3>Higher Order Components</h3>
      <Button1 />
      <Button2 />
      </div>
      <Weather />
      <CommunityBlog />
        <div className="Blog">
            <Blog text={blogText}/>
        </div>
      <ContactUs />
    </div>
  );
};

export default Main;