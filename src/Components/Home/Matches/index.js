import React from "react";
import Tag from "../../UI/Misc";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag bck="#0e1731" size="50px" color="#ffffff" >
          Matches
        </Tag>
        BLCK 
        
        <Tag bck="#ffffff" size="22px" color="#0e1731" link={true} linkTo='/the_team'>
          See more Matches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;