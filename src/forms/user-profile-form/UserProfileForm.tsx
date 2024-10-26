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

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
  title?: string;
  buttonText?: string;
};

const UserProfileForm = ({
  onSave,
  isLoading,
  currentUser,
  title = "User Profile",
  buttonText = "Submit",
}: Props) => {
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
              <h2 className="text-2xl font-bold">{title}</h2>
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
                {buttonText}
              </Button>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UserProfileForm;
