import { IoIosMore } from "react-icons/io";
import { FaClock } from "react-icons/fa";

import "./WorkoutTemplates.css";

export function TemplatesHTML({ templates }) {
  return templates.map((template) => {
    return (
      <div className="template">
        <p style={{ fontWeight: "600", marginBottom: "1rem" }}>
          {template.name} ({template.plans.length})
        </p>

        {PlansHTML(template.plans)}
      </div>
    );
  });
}

function PlansHTML(plans) {
  return (
    <div className="plans">
      {plans.map((plan) => (
        <div className="plan" onClick={() => PlansModalHTML()}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="plan-name">{plan.name}</p>
            <button className="btn plan-btn">
              <IoIosMore />
            </button>
          </div>
          {PlansExercisesHTML(plan.exercises)}
          <div>
            <FaClock style={{ color: "#94989b" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function PlansExercisesHTML(exercises) {
  return (
    <div>
      {exercises.slice(0, 3).map((exercise, index) => (
        <p
          className="exercise-name"
          style={index < 2 ? { marginBottom: "0.1rem" } : { marginBottom: "0" }}
        >
          ({exercise.category}) {exercise.name}
          {index < 2 ? "," : ""}
        </p>
      ))}
    </div>
  );
}

function PlansModalHTML() {
  console.log("clicked");
}
