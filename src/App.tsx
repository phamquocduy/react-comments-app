import { QueryClient, QueryClientProvider } from "react-query";

import { AppRoutes } from "./routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // disables automatically requests freshing
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;
