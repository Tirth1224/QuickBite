// import { useAuth0 } from "@auth0/auth0-react";
// import { useMutation } from "react-query";
// import { toast } from "sonner";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// type CheckoutSessionRequest = {
//   cartItems: {
//     menuItemId: string;
//     name: string;
//     quantity: string;
//   }[];
//   deliveryDetails: {
//     email: string;
//     name: string;
//     addressLine1: string;
//     city: string;
//   };
//   restaurantId: string;
// };

// export const useCreateCheckoutSession = () => {
//   const { getAccessTokenSilently } = useAuth0();

//   const createCheckoutSessionRequest = async (
//     checkoutSessionRequest: CheckoutSessionRequest
//   ) => {
//     const accessToken = await getAccessTokenSilently();
//     const response = await fetch(
//       `${API_BASE_URL}/api/order/checkout/create-checkout-session`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(checkoutSessionRequest),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Unable to create checkout session");
//     }
//     return response.json();
//   };

//   const {
//     mutateAsync: createCheckoutSession,
//     isLoading,
//     error,
//     reset,
//   } = useMutation(createCheckoutSessionRequest);

//   if (error) {
//     toast.error(error.toString());
//     reset();
//   }

//   return {
//     createCheckoutSession,
//     isLoading,
//   };
// };

// import { useAuth0 } from "@auth0/auth0-react";
// import { useMutation } from "react-query";
// import { toast } from "sonner";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// type CheckoutSessionRequest = {
//   cartItems: {
//     menuItemId: string;
//     name: string;
//     quantity: string;
//   }[];
//   deliveryDetails: {
//     email: string;
//     name: string;
//     addressLine1: string;
//     city: string;
//   };
//   restaurantId: string;
// };

// export const useCreateCheckoutSession = () => {
//   const { getAccessTokenSilently } = useAuth0();

//   const createCheckoutSessionRequest = async (
//     checkoutSessionRequest: CheckoutSessionRequest
//   ) => {
//     const accessToken = await getAccessTokenSilently();
//     const response = await fetch(
//       `${API_BASE_URL}/api/order/checkout/create-checkout-session`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(checkoutSessionRequest),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Unable to create checkout session");
//     }
//     return response.json();
//   };

//   // const {
//   //   mutateAsync: createCheckoutSession,
//   //   isLoading,
//   //   error,
//   //   reset,
//   // } = useMutation(createCheckoutSessionRequest, {
//   //   onSuccess: (data) => {
//   //     const options = {
//   //       key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Ensure Razorpay Key is in .env
//   //       amount: data.amount, // Amount is in smallest currency unit (paise for INR)
//   //       currency: "INR",
//   //       name: data.restaurantName, // Dynamic restaurant name
//   //       description: "Order Payment",
//   //       order_id: data.id, // Razorpay order ID
//   //       handler: function (response: any) {
//   //         toast.success("Payment successful!");
//   //         // Handle payment confirmation (save to DB, update status, etc.)
//   //       },
//   //       prefill: {
//   //         name: data.deliveryDetails.name,
//   //         email: data.deliveryDetails.email,
//   //       },
//   //       theme: {
//   //         color: "#3399cc",
//   //       },
//   //     };

//   //     const razorpay = new window.Razorpay(options);
//   //     razorpay.open();
//   //   },
//   // });

//   const {
//     mutateAsync: createCheckoutSession,
//     isLoading,
//     error,
//     reset,
//   } = useMutation(createCheckoutSessionRequest, {
//     onSuccess: (data) => {
//       console.log("API response data:", data); // Check the data structure

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//         amount: data.amount || 0, // Ensure amount has a default if missing
//         currency: "INR",
//         name: data.restaurantName || "Default Restaurant Name", // Use default if undefined
//         description: "Order Payment",
//         order_id: data.id || "", // Ensure order_id has a default
//         handler: function (response: any) {
//           toast.success("Payment successful!");
//         },
//         prefill: {
//           name: data.deliveryDetails?.name || "Guest",
//           email: data.deliveryDetails?.email || "",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     },
//   });

//   if (error) {
//     toast.error(error.toString());
//     reset();
//   }

//   return {
//     createCheckoutSession,
//     isLoading,
//   };
// };

import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { useRazorpay } from "../Hooks/UseRazorpay"; // Import the hook here

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CheckoutSessionRequest = {
  cartItems: {
    menuItemId: string;
    name: string;
    quantity: string;
  }[];
  deliveryDetails: {
    email: string;
    name: string;
    addressLine1: string;
    city: string;
  };
  restaurantId: string;
};

export const useCreateCheckoutSession = () => {
  const { getAccessTokenSilently } = useAuth0();
  const isRazorpayLoaded = useRazorpay();

  const createCheckoutSessionRequest = async (
    checkoutSessionRequest: CheckoutSessionRequest
  ) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(
      `${API_BASE_URL}/api/order/checkout/create-checkout-session`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkoutSessionRequest),
      }
    );

    if (!response.ok) {
      throw new Error("Unable to create checkout session");
    }

    // Parse the response to get order ID and restaurant name
    const data = await response.json();
    return data; // Return data including id and restaurantName
  };

  // In your mutation:
  const {
    mutateAsync: createCheckoutSession,
    isLoading,
    error,
    reset,
  } = useMutation(createCheckoutSessionRequest, {
    onSuccess: (data) => {
      if (!isRazorpayLoaded) {
        toast.error("Razorpay SDK failed to load. Please try again.");
        return;
      }

      const restaurantName = data.restaurantName || "Your Restaurant Name"; // Use the restaurant name from the response

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Use your Razorpay Key here
        amount: data.amount,
        currency: "INR",
        name: restaurantName, // Use the restaurant name here
        description: "Order Payment",
        order_id: data.id,
        handler: (_response: any) => {
          toast.success("Payment successful!");
        },
        prefill: {
          name: data.deliveryDetails?.name || "Guest",
          email: data.deliveryDetails?.email || "",
          contact: "9876543210", // Test contact number
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    },
  });

  if (error) {
    toast.error(error.toString());
    reset();
  }

  return {
    createCheckoutSession,
    isLoading,
  };
};
