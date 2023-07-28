import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

const GoalForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <>
      <div className="form_head">
        <p>GoalForm</p>
        <form onSubmit={onSubmit}>
          <div className="form_group">
            <label htmlFor="text">Goal</label>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form_group">
            <button type="submit">Add Goal</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GoalForm;
