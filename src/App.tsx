import { useAutoSignin } from "react-oidc-context";

function App() {
  // If you provide no signinMethod at all, the default is signinRedirect
  const { isLoading, isAuthenticated, error } = useAutoSignin({
    signinMethod: "signinRedirect",
  });

  if (isLoading) {
    return <div>Signing you in/out...</div>;
  }

  if (!isAuthenticated) {
    return <div>Unable to log in</div>;
  }

  if (error) {
    return <div>An error occured</div>;
  }

  return <div>Signed in successfully</div>;
}

export default App;
