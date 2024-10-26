// import { CartItem } from "@/pages/DetailPage";
// import { Restaurant } from "@/types";
// import { CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { Separator } from "./ui/separator";
// import { Trash } from "lucide-react";

// type Props = {
//   restaurant: Restaurant;
//   cartItems: CartItem[];
//   removeFromCart: (cartItem: CartItem) => void;
// };

// const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
//   const getTotalCost = () => {
//     const totalInRupee = cartItems.reduce(
//       (total, CartItem) => total + CartItem.price * CartItem.quantity,
//       0
//     );

//     const totalWithDelivery = totalInRupee + restaurant.deliveryPrice;

//     return (totalWithDelivery / 1).toFixed(2);
//   };
//   return (
//     <>
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
//           <span>Your Orders</span>
//           <span>₹{getTotalCost()}</span>
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="flex flex-col gap-5">
//         {cartItems.map((item) => (
//           <div className="flex justify-between">
//             <span>
//               <Badge variant="outline" className="mr-2">
//                 {item.quantity}
//               </Badge>
//               {item.name}
//             </span>
//             <span className="flex items-center gap-1">
//               <Trash
//                 className="cursor-pointer"
//                 color="red"
//                 size={20}
//                 onClick={() => removeFromCart(item)}
//               />
//               ₹{((item.price * item.quantity) / 1).toFixed(2)}
//             </span>
//           </div>
//         ))}
//         <Separator />
//         <div className="flex justify-between">
//           <span>Delivery</span>
//           <span>₹{(restaurant.deliveryPrice / 1).toFixed(2)}</span>
//         </div>
//         <Separator />
//       </CardContent>
//     </>
//   );
// };

// export default OrderSummary;

import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";
import { Plus, Minus } from "lucide-react";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
  updateCartItemQuantity: (cartItem: CartItem, quantity: number) => void;
};

const OrderSummary = ({
  restaurant,
  cartItems,
  removeFromCart,
  updateCartItemQuantity,
}: Props) => {
  const getTotalCost = () => {
    const totalInRupee = cartItems.reduce(
      (total, CartItem) => total + CartItem.price * CartItem.quantity,
      0
    );

    const totalWithDelivery = totalInRupee + restaurant.deliveryPrice;

    return (totalWithDelivery / 1).toFixed(2);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Orders</span>
          <span>₹{getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div key={item._id} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* Wrap quantity and icons in a flex container */}
              <div className="flex items-center gap-1 border rounded px-2">
                <Minus
                  className="cursor-pointer"
                  size={18}
                  onClick={() => {
                    if (item.quantity > 1) {
                      updateCartItemQuantity(item, item.quantity - 1);
                    } else {
                      removeFromCart(item);
                    }
                  }}
                />
                <Badge variant="outline" className="mx-1">
                  {item.quantity}
                </Badge>
                <Plus
                  className="cursor-pointer"
                  size={18}
                  onClick={() =>
                    updateCartItemQuantity(item, item.quantity + 1)
                  }
                />
              </div>
              <span>{item.name}</span>
            </div>
            <span className="flex items-center gap-2">
              <Trash
                className="cursor-pointer"
                color="red"
                size={20}
                onClick={() => removeFromCart(item)}
              />
              ₹{((item.price * item.quantity) / 1).toFixed(2)}
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>₹{(restaurant.deliveryPrice / 1).toFixed(2)}</span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
