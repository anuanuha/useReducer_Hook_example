import React, { useReducer } from "react";

// Define the initial state
const initialState = { count: 0 };

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function Counter() {
  // Initialize useReducer with reducer and initialState
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-xl font-bold">Count: {state.count}</h1>
      <div className="space-x-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
