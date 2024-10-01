import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import image from "@/assets/—Pngtree—hand-painted noise green leaf element_4054582 1.png";

const formSchema = z.object({
  restaurantName: z.string({
    required_error: "Restaurant name is required",
  }),
  city: z.string({
    required_error: "City is required",
  }),
  country: z.string({
    required_error: "Country is required",
  }),
  deliveryPrice: z.coerce.number({
    required_error: "delivery price is required",
    invalid_type_error: "must be a valid number",
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "Estimate Delivery Time is required",
    invalid_type_error: "must be a valid number",
  }),
  cuisines: z.array(z.string()).nonempty({
    message: "Please select at least one item",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      price: z.coerce.number().min(1, "Price is required"),
    })
  ),
  imageFile: z.instanceof(File, { message: "Image is required" }),
});

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (formDataJson: RestaurantFormData) => {
    const formData = new FormData();

    formData.append("restaurantName", formDataJson.restaurantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);

    formData.append(
      "deliveryPrice",
      (formDataJson.deliveryPrice * 100).toString()
    );

    formData.append(
      "estimatedDeliveryTime",
      formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });
    formDataJson.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(
        `menuItems[${index}][price]`,
        (menuItem.price * 100).toString()
      );
    });

    formData.append(`imageFile`, formDataJson.imageFile);

    onSave(formData);
  };

  return (
    <Form {...form}>
      <img
        src={image}
        alt="Leaf"
        className="absolute top-16 -left-4 w-48 h-48 opacity-70 z-0"
      />
      <img
        src={image}
        alt="Leaf"
        className="absolute -bottom-96 right-4 w-48 h-48 opacity-70 object-cover z-0"
      />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button
            type="submit"
            className="bg-green-700 text-white border-2 border-transparent hover:bg-white hover:text-green-700 hover:border-green-700 transition-colors duration-300 max-h-fit"
          >
            Submit
          </Button>
        )}
      </form>
      <footer
        className="bg-green-700 text-white py-6 mt-10 rounded-2xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div
            className="text-center md:text-left mb-4 md:mb-0 cursor-pointer"
            onClick={() => (window.location.href = "/")}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1 className="text-2xl font-bold mb-2 transition-transform transform duration-300 hover:text-white-100 hover:scale-105">
              QuickBite.com
            </h1>
            <p>&copy; 2024 QuickBite. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row mb-4 md:mb-0">
            <a
              href="/about-us"
              className="px-4 py-2 transition-transform transition-colors transform duration-300 ease-in-out hover:text-white-100 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              About US
            </a>
            <a
              href="/faqs"
              className="px-4 py-2 transition-transform transition-colors transform duration-300 ease-in-out hover:text-white-100 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              FAQs
            </a>
          </div>
        </div>
      </footer>
    </Form>
  );
};

export default ManageRestaurantForm;
