import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import LoadingButton from "./LoadingButton";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import UserProfileForm, {
  UserFormData,
} from "@/forms/user-profile-form/UserProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";

type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
};

const CheckoutButton = ({ onCheckout, disabled }: Props) => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button
        onClick={onLogin}
        className="bg-green-600 text-white border border-green-600 hover:bg-white hover:text-green-600 flex-1"
      >
        Log in to Check Out
      </Button>
    );
  }

  if (isAuthLoading || !currentUser) {
    return <LoadingButton />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className="bg-green-600 text-white border border-green-600 hover:bg-white hover:text-green-600 flex-1"
        >
          Go to Checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md: min-w-[700px] bg-gray-50">
        <UserProfileForm
          currentUser={currentUser}
          onSave={onCheckout}
          isLoading={isGetUserLoading}
          title="Confirm Delivery Details"
          buttonText="Continue to Payment"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
