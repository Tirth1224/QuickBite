import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";
import image from "@/assets/—Pngtree—hand-painted noise green leaf element_4054582 1.png";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

const UserProfileForm = ({ onSave, isLoading, currentUser }: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  return (
    <div>
      <div className="relative bg-gray-50 p-10 rounded-lg">
        <img
          src={image}
          alt="Leaf"
          className="absolute -top-16 -left-20 w-48 h-48 opacity-70 "
        />
        <img
          src={image}
          alt="Leaf"
          className="absolute -bottom-20 -right-4 w-48 h-48 opacity-70 object-cover z-0"
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSave)}
            className="space-y-4 bg-gray-50 rounded-lg md:p-10"
          >
            <div>
              <h2 className="text-2xl font-bold">User Profile Form</h2>
              <FormDescription>
                View and Change your profile information here
              </FormDescription>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} disabled className="bg-white" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                control={form.control}
                name="addressLine1"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Address Line 1</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {isLoading ? (
              <LoadingButton />
            ) : (
              <Button
                type="submit"
                className="flex items-center px-3 font-bold bg-green-600 text-white border border-green-600 hover:bg-white hover:text-green-600"
              >
                Submit
              </Button>
            )}
          </form>
        </Form>
      </div>
      <footer
        className="bg-green-700 text-white py-6 mt-10 rounded-2xl"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div
            className="text-center md:text-left mb-4 md:mb-0 cursor-pointer"
            onClick={() => (window.location.href = "/")}
            data-aos="fade-up"
            data-aos-delay="600"
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
              data-aos-delay="700"
            >
              FAQs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserProfileForm;
