export default function ProductReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, { ...action.payload, count: 0 }];
    case "INCREMENT":
      return state.map((p) =>
        p.id === action.id && p.stock > p.count
          ? { ...p, count: p.count + 1 }
          : p
      );
    case "DECREMENT":
      return state.map((p) =>
        p.id === action.id && p.count > 0 ? { ...p, count: p.count - 1 } : p
      );
    case "DELETE":
      return state.filter(p=>p.id !== action.id)
      
    default:
      return state;
  }
}
