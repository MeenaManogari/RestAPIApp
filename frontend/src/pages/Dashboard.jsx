import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import { getGoals, reset } from "../features/goals/goalSlice";
import GoalItem from "../components/GoalItem";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    // if (isError) {
    //   console.log(message);
    // }

    if (!user) {
      navigate("/login");
    }

    // if (!user) {
    //   return;
    // }

    dispatch(getGoals());
    // return () => {
    //   dispatch(reset());
    // };
  }, [user, navigate, dispatch]);

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <>
      <div className="dash_heading">
        <h1>Welcome {user && user.name}</h1>
        <h4>Goals Dashboard</h4>
      </div>
      <GoalForm />
      <div className="goals_content">
        {goals.length > 0 ? (
          <div className="goals">
            {" "}
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </div>
    </>
  );
};

export default Dashboard;
