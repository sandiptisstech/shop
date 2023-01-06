import { Order } from "@/types";
 
import OrderDetails from "../orders/order-details";
import {renderToString} from "react-dom/server"

 
export const renderOrderEmail = (input:any) => {
    return  renderToString(<OrderDetails order={input} />);
}
