import { useEffect, useReducer } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Progress from "./components/Progress";
import Review from "./components/Review";
import PersonalStep from "./steps/PersonalStep";
import AddressStep from "./steps/AddressStep";
import AccountStep from "./steps/AccountStep";

const safeInitialState = () => {
  try {
    const stored = localStorage.getItem("formState");
    return stored ? JSON.parse(stored) : { step: 0, data: {} };
  } catch {
    return { step: 0, data: {} };
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return {
        step: Math.min(state.step + 1, 3),
        data: { ...state.data, ...action.payload }
      };

    case "PREV":
      return { ...state, step: Math.max(state.step - 1, 0) };

    case "GOTO":
      return { ...state, step: action.step };

    case "RESET":
      return { step: 0, data: {} };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {}, safeInitialState);

  useEffect(() => {
    localStorage.setItem("formState", JSON.stringify(state));
  }, [state]);

  const handleSubmitSuccess = () => {
    localStorage.removeItem("formState");
    dispatch({ type: "RESET" });
    alert("Registration Successful!");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <Progress step={state.step} />

      <AnimatePresence mode="wait">
        {state.step === 0 && (
          <motion.div
            key="personal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PersonalStep
              defaultValues={state.data}
              onNext={(data) =>
                dispatch({ type: "NEXT", payload: data })
              }
            />
          </motion.div>
        )}

        {state.step === 1 && (
          <motion.div
            key="address"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AddressStep
              defaultValues={state.data}
              onNext={(data) =>
                dispatch({ type: "NEXT", payload: data })
              }
              onPrev={() => dispatch({ type: "PREV" })}
            />
          </motion.div>
        )}

        {state.step === 2 && (
          <motion.div
            key="account"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AccountStep
              defaultValues={state.data}
              onNext={(data) =>
                dispatch({ type: "NEXT", payload: data })
              }
              onPrev={() => dispatch({ type: "PREV" })}
            />
          </motion.div>
        )}

        {state.step === 3 && (
          <motion.div
            key="review"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Review
              data={state.data}
              onEdit={(step) =>
                dispatch({ type: "GOTO", step })
              }
              onSubmit={handleSubmitSuccess}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
