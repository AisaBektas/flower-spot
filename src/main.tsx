import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MyInfoProvider } from "./modules/home/providers/MyInfoProvider";
import { LoginModalProvider } from "./core/providers/LoginModalProvider";
import { RegisterModalProvider } from "./core/providers/RegisterModalProvider";
import { ProfileModalProvider } from "./core/providers/ProfileModalProvider";
import { RegisterSuccessModalProvider } from "./core/providers/RegisterSuccessModalProvider";
import { LoginSuccessModalProvider } from "./core/providers/LoginSuccessModalProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RegisterModalProvider>
        <RegisterSuccessModalProvider>
          <LoginSuccessModalProvider>
            <ProfileModalProvider>
              <LoginModalProvider>
                <MyInfoProvider>
                  <App />
                </MyInfoProvider>
              </LoginModalProvider>
            </ProfileModalProvider>
          </LoginSuccessModalProvider>
        </RegisterSuccessModalProvider>
      </RegisterModalProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
