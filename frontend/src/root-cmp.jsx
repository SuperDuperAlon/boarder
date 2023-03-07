
import React from "react";
import { Routes, Route } from "react-router";
import { AppHeader } from "./cmps/app-header.jsx";
import { UserDashboard } from './views/user-dashboard.jsx'

export function RootCmp() {
    return (
      <div>
        <AppHeader />
        <main>
          <Routes>
          <Route path="/" element={<UserDashboard />} />
          </Routes>
        </main>
      </div>
    );
  }