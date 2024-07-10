import { useState } from "react";
import "./App.css";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Column from "./components/columns/Columns";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

function App() {
  const [orders, setOrders] = useState([
    { id: 1, orderTitle: "Order One" },
    { id: 2, orderTitle: "Order Two" },
    { id: 3, orderTitle: "Order Three" },
  ]);

  const getOrderPosition = (id) => orders.findIndex((order) => order.id === id);

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id === over.id) {
      return;
    }

    setOrders((orders) => {
      const originalPosition = getOrderPosition(active.id);
      const newPosition = getOrderPosition(over.id);

      return arrayMove(orders, originalPosition, newPosition);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="App">
      <h1>My Orders ✅</h1>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Column id="Orders" orders={orders} />
      </DndContext>
    </div>
  );
}

export default App;
