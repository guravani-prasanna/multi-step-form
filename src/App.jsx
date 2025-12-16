import { useEffect, useReducer } from "react";
export default function App() {
const [state, dispatch] = useReducer(reducer, initialState);


useEffect(() => {
localStorage.setItem("formState", JSON.stringify(state));
}, [state]);


const submitSuccess = () => {
localStorage.removeItem("formState");
dispatch({ type: "RESET" });
alert("Registration Successful!");
};


return (
<div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
<Progress step={state.step} />


<AnimatePresence mode="wait">
{state.step === 0 && (
<motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
<PersonalStep
defaultValues={state.data}
onNext={(data) => dispatch({ type: "NEXT", payload: data })}
/>
</motion.div>
)}


{state.step === 1 && (
<motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
<AddressStep
defaultValues={state.data}
onNext={(data) => dispatch({ type: "NEXT", payload: data })}
onPrev={() => dispatch({ type: "PREV" })}
/>
</motion.div>
)}


{state.step === 2 && (
<motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
<AccountStep
defaultValues={state.data}
onNext={(data) => dispatch({ type: "NEXT", payload: data })}
onPrev={() => dispatch({ type: "PREV" })}
/>
</motion.div>
)}


{state.step === 3 && (
<motion.div key="review" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
<Review data={state.data} onEdit={(s) => dispatch({ type: "GOTO", step: s })} />
<button onClick={submitSuccess}>Submit</button>
<button onClick={() => dispatch({ type: "PREV" })}>Previous</button>
</motion.div>
)}
</AnimatePresence>
</div>
);
}