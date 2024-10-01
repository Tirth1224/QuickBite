import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();
  return (
    <div className="flex flex-row items-end gap-2">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Name <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Cheese Pizza"
                className="bg-white"
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Price (₹) <FormMessage />
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="242.00" className="bg-white" />
            </FormControl>
          </FormItem>
        )}
      />

      {/* <Button
        type="button"
        onClick={removeMenuItem}
        className="bg-green-600 max-h-fit"
      >
        Remove
      </Button> */}
      <Button
        type="button"
        onClick={removeMenuItem}
        className="bg-green-600 text-white border-2 border-transparent hover:bg-white hover:text-green-600 hover:border-green-600 transition-colors duration-300 max-h-fit"
      >
        Remove
      </Button>
    </div>
  );
};

export default MenuItemInput;
