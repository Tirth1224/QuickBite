import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

const SearchBarSP = ({
  onSubmit,
  onReset,
  placeHolder,
  searchQuery,
}: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-left gap-3 justify-between flex-row border-2 rounded-full p-3  ${
          form.formState.errors.searchQuery && "border-green-600"
        }`}
      >
        <Search
          strokeWidth={2.5}
          size={35}
          className="ml-2 text-green-600 hidden md:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-lg focus-visible:ring-0"
                  placeholder={placeHolder}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="rounded-full text-sm px-4 py-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
        >
          Reset
        </Button>
        <Button
          type="submit"
          className="rounded-full bg-green-600 text-white text-sm px-6 py-2 hover:bg-white hover:text-green-600 border border-green-600"
        >
          Search
        </Button>
      </form>

      {/* <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 justify-start border-2 rounded-full p-3 w-full max-w-[100%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%] 2xl:max-w-[100%] mx-auto ${
          form.formState.errors.searchQuery && "border-green-600"
        }`}
      >
        <Search
          strokeWidth={2.5}
          size={35}
          className="ml-2 text-green-600 hidden md:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-lg focus-visible:ring-0 w-full"
                  placeholder={placeHolder}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="rounded-full text-sm px-4 py-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
        >
          Reset
        </Button>
        <Button
          type="submit"
          className="rounded-full bg-green-600 text-white text-sm px-6 py-2 hover:bg-white hover:text-green-600 border border-green-600"
        >
          Search
        </Button>
      </form> */}
    </Form>
  );
};

export default SearchBarSP;
