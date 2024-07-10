import "./Order.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// eslint-disable-next-line react/prop-types
const Task = ({ id, orderTitle }) => {
  const { attributes, listeners, transform, transition, setNodeRef } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="order"
    >
      <input type="checkbox" className="checkbox" />
      {orderTitle}
    </div>
  );
};

export default Task;
