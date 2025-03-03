import React from "react";
import communityimg from "../../assets/Banner/Banner.png"
import backgroundSvg from "../../assets/Banner/Banner.svg";
import "./GroupFb.css"

const GroupFb: React.FC = () => {
    return (
        <div className="group-fb-container" onClick={() => window.location.href = "https://www.facebook.com/messages/t/526302420570674"}>

        {/* Hình ảnh nền SVG */}
            <img src={backgroundSvg} alt="Background" className="group-fb-background" />
            {/* Hình ảnh nhóm người */}
            <img src={communityimg} alt="Nhóm người" className="group-fb-image" />
        </div>
    );
};

export default GroupFb;
