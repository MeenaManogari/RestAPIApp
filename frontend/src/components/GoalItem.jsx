import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import "./GoalItem.css";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <div className="goal_list">
        <h2>{goal.text}</h2>
        <button onClick={() => dispatch(deleteGoal(goal._id))}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default GoalItem;
