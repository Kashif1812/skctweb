import React from "react";
import './CampusLife.css';

class Campus extends React.Component{
    render(){
        return(
        <div className="Campuslyf">
            <h1 className="Topic3">Students</h1>
            <p className="Subtopic">Life in Campus</p>
            <div className="Box1">
                <h3 className="Box1name">Campus Life</h3>
                <div className="image-box">
                    <img src="https://res.cloudinary.com/dojmk32dv/image/upload/v1678897357/campuslife_wyt1jj.jpg" width={100}></img>
                </div>
            </div>
            <div className="Text1">
                <p className="Box1text"> &nbsp;SKCT &nbsp; is most renowned college <br/>
                ( Anna University Affiliated ) is <br/>
                proud &nbsp;of its &nbsp;eco-friendly,&nbsp;serene <br/>
                and&nbsp; peaceful&nbsp; environment &nbsp;and <br/>
                deeply  committed  to upholding <br/>
                 values. </p>
        </div>
        <div className="Box2">
                <h3 className="Box2name">Hostel & Dining</h3>
                <div className="image-box2">
                    <img src="https://res.cloudinary.com/dojmk32dv/image/upload/v1678947247/Dblock_p1qfkp.jpg" width={100}></img>
                </div>
            </div>
            <div className="Text2">
                <p className="Box2text">SKCT &nbsp;students &nbsp;boys &nbsp;hostel &nbsp;is &nbsp;an <br/>
                integral &nbsp;part &nbsp;of &nbsp;the &nbsp;campus&nbsp; and <br/>
                girls &nbsp;hostel &nbsp;is &nbsp;located 3kms away <br/>
                from &nbsp;campus. &nbsp;Hostel &nbsp;bus &nbsp;is &nbsp;ply <br/>
                from &nbsp; girls &nbsp;&nbsp; hostel &nbsp; to &nbsp;&nbsp; college <br/>
                campus.</p>
            </div>
        <div className="Box3">
                <h3 className="Box3name">Library</h3>
                <div className="image-box">
                    <img className="image3" src="https://res.cloudinary.com/dojmk32dv/image/upload/v1679223115/1_ytpt9f.jpg" width={100}></img>
                </div>
            </div>
            <div>
                <p className="Box3text">SKCT Central Library continues to <br/>
                stand at the center of intellectual <br/>
                life on &nbsp; campus, with world-class <br/>
                collections &nbsp; and services &nbsp;in print, <br/>
                online, and in person.</p>
            </div>
            <div className="Box4">
                <h3 className="Box4name">Sports & Games</h3>
                <div className="image-box4">
                    <img src="https://res.cloudinary.com/dojmk32dv/image/upload/v1679223386/Screenshot_2023-03-19-16-26-07-95_1c337646f29875672b5a61192b9010f9_xl2159.jpg" width={100}></img>
                </div>
            </div>
            <div className="Text4">
                <p className="Box4text">SKCT&nbsp; provides &nbsp;opportunities&nbsp; to <br/>students &nbsp;to &nbsp;enhance &nbsp;their &nbsp;skill <br/>
                in&nbsp;  sports.&nbsp;Various games such as <br/>football,&nbsp; volleyball,&nbsp;&nbsp;&nbsp;basketball,<br/>handball ,&nbsp;etc &nbsp;are &nbsp;provided &nbsp;to <br/>students.</p>
            </div>
            <div className="Box5">
                <h3 className="Box5name">NSS/YRC</h3>
                <div className="image-box4">
                    <img src="https://res.cloudinary.com/dojmk32dv/image/upload/v1679225741/IMG_8912_ljzzpc.jpg" width={100}></img>
                </div>
            </div>
            <div className="Text5">
                <p className="Box5text"></p>
            </div>
            <div className="Box6">
            </div>
            <h2 className="Box6name">Show all facilities</h2>
            <div className="News">
                <h1 className="Table4name">News</h1>
                <p className="news1"></p>
            </div>
            <div className="Events">
                <h1 className="Table5name">Upcoming Events</h1>
            </div>
        </div>
    )
    }
}
export default Campus;