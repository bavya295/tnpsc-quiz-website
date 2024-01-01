import "./ManageQuriesandFeedback.css";
export default function ManageQuriesandFeedback(){
    return(
        <>
        <div className="quries">
        <div class="manage-quries-reply">
            <h1>Manage Quries</h1>
                    <form className="form">
                    <button class="course-add">Reply query</button>
                    <label htmlFor="queryID-reply">Enter Query id</label>
                        <input id="queryID-reply" type="text" name="courseID" className="input-field" />
                        <button type="submit" className="submit-btn"> Post Reply</button>
                    </form>
                    
                    </div>
                    <div class="manage-quries-delete">
                    <form className="form">
                    <button class="course-add">Delete Query</button>
                    <label htmlFor="queryID-delete">Enter Query id</label>
                        <input id="queryID-delete" type="text" name="courseID" className="input-field" />
                        <button type="submit" className="submit-btn">Delete</button>
                    </form>
                    
                    </div>
                    </div>
                    <div className="feedback">
        <div class="manage-feedback-show">
        <h1>Manage Feedback</h1>
                    <button class="course-add">Show All Feedback</button>
                    
                     </div>
                   
                    </div>
        </>
    )

}