// import { Restaurant } from "@/types";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Dot } from "lucide-react";

// type Props = {
//   restaurant: Restaurant;
// };

// const RestaurantInfo = ({ restaurant }: Props) => {
//   return (
//     <Card className="border-sla">
//       <CardHeader>
//         <CardTitle className="text-3xl font-bold tracking-tight">
//           {restaurant.restaurantName}
//         </CardTitle>
//         <CardDescription>
//           {restaurant.city}, {restaurant.country}
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="flex">
//         {restaurant.cuisines.map((item, index) => (
//           <span className="flex">
//             <span>{item}</span>
//             {index < restaurant.cuisines.length - 1 && <Dot />}
//           </span>
//         ))}
//       </CardContent>
//     </Card>
//   );
// };

// export default RestaurantInfo;

// import { Restaurant } from "@/types";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Dot } from "lucide-react";

// type Props = {
//   restaurant: Restaurant;
// };

// const RestaurantInfo = ({ restaurant }: Props) => {
//   return (
//     <Card className="border-sla">
//       <CardHeader>
//         <CardTitle className="text-3xl font-bold tracking-tight">
//           {restaurant.restaurantName}
//         </CardTitle>
//         <CardDescription>
//           {restaurant.city}, {restaurant.country}
//         </CardDescription>
//       </CardHeader>

//       {/* Add responsive wrapping for cuisines */}
//       <CardContent className="flex flex-wrap gap-1">
//         {restaurant.cuisines.map((item, index) => (
//           <span key={index} className="flex items-center">
//             <span>{item}</span>
//             {index < restaurant.cuisines.length - 1 && (
//               <Dot className="mx-1 text-muted" />
//             )}
//           </span>
//         ))}
//       </CardContent>
//     </Card>
//   );
// };

// export default RestaurantInfo;

import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card className="border-sla">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight">
          {restaurant.restaurantName}
        </CardTitle>
        <CardDescription>
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>

      {/* Add responsive wrapping for cuisines */}
      <CardContent className="flex flex-wrap gap-1">
        {restaurant.cuisines.map((item, index) => (
          <span key={index} className="flex items-center">
            <span>{item}</span>
            {/* Display the dot only if it's not the last item */}
            {index < restaurant.cuisines.length - 1 && (
              <Dot className="text-black-500" />
            )}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
