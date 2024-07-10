/* eslint-disable react/prop-types */
import Order from "../Order/Order";
import "./Columns.css";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const Column = ({ orders }) => {
  return (
    <div className="column">
      <SortableContext items={orders} strategy={verticalListSortingStrategy}>
        {orders.map((order) => (
          <Order key={order.id} id={order.id} orderTitle={order.orderTitle} />
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
