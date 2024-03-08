import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate servcie with us?</h2>
        {/*  @todo - rating delect component */}
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}></input>
          <Button type='submit' >Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
