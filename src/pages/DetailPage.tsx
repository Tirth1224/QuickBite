import { useGetRestaurant } from "@/api/RestaurantApi";
import MenuItem from "@/components/MenuItemComponent";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { MenuItem as MenuItemType } from "@/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

const DetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addToCart = (menuItem: MenuItemType) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (cartItem) => cartItem._id === menuItem._id
      );
      let updatedCartItems;
      if (existingCartItem) {
        updatedCartItems = prevCartItems.map((cartItem) =>
          cartItem._id === menuItem._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCartItems = [
          ...prevCartItems,
          {
            _id: menuItem._id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
          },
        ];
      }
      return updatedCartItems;
    });
  };

  if (isLoading || !restaurant) {
    return "Loading.....";
  }

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 5}>
        <img
          src={restaurant.imageUrl}
          className="rounded-md obeject-cover h-full w-full "
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32 ">
        <div className="flex flex-col gap-4">
          <RestaurantInfo restaurant={restaurant} />
          <span className="text-2xl font-bold tracking-tight ml-1">Menu</span>
          {restaurant.menuItems.map((menuItem) => (
            <MenuItem
              menuItem={menuItem}
              addToCart={() => addToCart(menuItem)}
            />
          ))}
        </div>

        <div>
          <Card>
            <OrderSummary restaurant={restaurant} cartItems={cartItems} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

// // import { useGetRestaurant } from "@/api/RestaurantApi";
// // import MenuItem from "@/components/MenuItemComponent";
// // import OrderSummary from "@/components/OrderSummary";
// // import RestaurantInfo from "@/components/RestaurantInfo";
// // import { AspectRatio } from "@/components/ui/aspect-ratio";
// // import { Card } from "@/components/ui/card";
// // import { MenuItem as MenuItemType } from "@/types";
// // import { useState } from "react";
// // import { useParams } from "react-router-dom";

// // export type CartItem = {
// //   _id: string;
// //   name: string;
// //   price: number;
// //   quantity: number;
// // };

// // const DetailPage = () => {
// //   const { restaurantId } = useParams();
// //   const { restaurant, isLoading } = useGetRestaurant(restaurantId);

// //   const [cartItems, setCartItems] = useState<CartItem[]>([]);
// //   const addToCart = (menuItem: MenuItemType) => {
// //     setCartItems((prevCartItems) => {
// //       const existingCartItem = prevCartItems.find(
// //         (cartItem) => cartItem._id === menuItem._id
// //       );
// //       let updatedCartItems;
// //       if (existingCartItem) {
// //         updatedCartItems = prevCartItems.map((cartItem) =>
// //           cartItem._id === menuItem._id
// //             ? { ...cartItem, quantity: cartItem.quantity + 1 }
// //             : cartItem
// //         );
// //       } else {
// //         updatedCartItems = [
// //           ...prevCartItems,
// //           {
// //             _id: menuItem._id,
// //             name: menuItem.name,
// //             price: menuItem.price,
// //             quantity: 1,
// //           },
// //         ];
// //       }
// //       return updatedCartItems;
// //     });
// //   };

// //   if (isLoading || !restaurant) {
// //     return "Loading.....";
// //   }

// //   return (
// //     <div className="flex flex-col gap-10">
// //       {/* Image aspect ratio */}
// //       <AspectRatio ratio={16 / 5}>
// //         <img
// //           src={restaurant.imageUrl}
// //           className="rounded-md object-cover h-full w-full -mt-2"
// //           // alt={restaurant.name}
// //         />
// //       </AspectRatio>

// //       {/* Main content grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 md:px-32 -mt-4">
// //         {/* Left Column - Menu and Restaurant Info */}
// //         <div className="flex flex-col gap-4">
// //           <RestaurantInfo restaurant={restaurant} />
// //           <span className="text-2xl font-bold tracking-tight ml-1">Menu</span>
// //           <div className="flex flex-col gap-4">
// //             {restaurant.menuItems.map((menuItem) => (
// //               <MenuItem
// //                 key={menuItem._id}
// //                 menuItem={menuItem}
// //                 addToCart={() => addToCart(menuItem)}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* Right Column - Order Summary */}
// //         <div className="flex-shrink-0">
// //           <Card>
// //             <OrderSummary restaurant={restaurant} cartItems={cartItems} />
// //           </Card>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DetailPage;

// import { useGetRestaurant } from "@/api/RestaurantApi";
// import MenuItem from "@/components/MenuItemComponent";
// import OrderSummary from "@/components/OrderSummary";
// import RestaurantInfo from "@/components/RestaurantInfo";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { Card } from "@/components/ui/card";
// import { MenuItem as MenuItemType } from "@/types";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export type CartItem = {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
// };

// const DetailPage = () => {
//   const { restaurantId } = useParams();
//   const { restaurant, isLoading } = useGetRestaurant(restaurantId);

//   const [cartItems, setCartItems] = useState<CartItem[]>(() => {
//     // Load cart items from localStorage on initial render
//     const savedCartItems = localStorage.getItem("cartItems");
//     return savedCartItems ? JSON.parse(savedCartItems) : [];
//   });

//   const addToCart = (menuItem: MenuItemType) => {
//     setCartItems((prevCartItems) => {
//       const existingCartItem = prevCartItems.find(
//         (cartItem) => cartItem._id === menuItem._id
//       );
//       let updatedCartItems;
//       if (existingCartItem) {
//         updatedCartItems = prevCartItems.map((cartItem) =>
//           cartItem._id === menuItem._id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       } else {
//         updatedCartItems = [
//           ...prevCartItems,
//           {
//             _id: menuItem._id,
//             name: menuItem.name,
//             price: menuItem.price,
//             quantity: 1,
//           },
//         ];
//       }
//       // Update localStorage with the new cart items
//       localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//       return updatedCartItems;
//     });
//   };

//   useEffect(() => {
//     // Update localStorage whenever cartItems changes
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   if (isLoading || !restaurant) {
//     return "Loading.....";
//   }

//   return (
//     <div className="flex flex-col gap-10">
//       <AspectRatio ratio={16 / 5}>
//         <img
//           src={restaurant.imageUrl}
//           className="rounded-md object-cover h-full w-full "
//           // alt={restaurant.name}
//         />
//       </AspectRatio>
//       <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32 ">
//         <div className="flex flex-col gap-4">
//           <RestaurantInfo restaurant={restaurant} />
//           <span className="text-2xl font-bold tracking-tight ml-1">Menu</span>
//           {restaurant.menuItems.map((menuItem) => (
//             <MenuItem
//               key={menuItem._id}
//               menuItem={menuItem}
//               addToCart={() => addToCart(menuItem)}
//             />
//           ))}
//         </div>

//         <div>
//           <Card>
//             <OrderSummary restaurant={restaurant} cartItems={cartItems} />
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailPage;
