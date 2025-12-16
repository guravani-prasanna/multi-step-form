 Architectural Choices

This project uses a modular, component-driven architecture built with React. Key architectural decisions include:
- useReducer for state management: Chosen for its predictable state transitions and centralized control over form navigation and data updates. It simplifies handling multi-step logic and avoids prop drilling.
- localStorage for persistence: Enables users to reload the page at any step without losing progress. This improves user experience and supports evaluation criteria for state restoration.
- framer-motion for transitions: Adds smooth animations between steps, enhancing the visual flow and making the form feel more responsive and polished.


State Management Strategy
The form state is managed using a reducer pattern with the following structure:
{
  step: number,      // current step index (0–3)
  data: object        // accumulated form data across steps
}


Actions:
- "NEXT": Advances to the next step and merges new form data.
- "PREV": Moves back one step.
- "GOTO": Jumps to a specific step (used in the review screen).
- "RESET": Clears all data and resets to step 0.
This centralized reducer ensures consistent updates and makes the flow easy to debug and extend.
