import "./ManageFeedback.css";

export default function ManageFeedback(){
    const date= new Date();
return(
    <>
    <h1>Feedback</h1>
    <div className="feedback-details">
        <h5>Selvarani</h5>
    <h6>Very usefull website, Thank you creating such a wonderful website!</h6>
    <p>{date.toDateString()}</p>
    </div>
    <br></br>
    <div className="feedback-details">
       
        <h5>Rajendran</h5>
    <h6>I cracked TNPSC...Thank you so much!</h6>
    <p>{date.toDateString()}</p>
    </div>
    </>
)
}