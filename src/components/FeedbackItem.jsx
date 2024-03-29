import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

import FeedbackContext from "../context/FeedbackContext";
import { PropTypes } from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ item }) {
  // exact what we want to use from context
  // Fetch handler with the useContext Hook
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
