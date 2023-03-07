
import React from "react";
import { Routes, Route } from "react-router";
import { AppHeader } from "./cmps/app-header.jsx";
import { CardIndex } from './views/card-index.jsx'

export function RootCmp() {
    return (
      <div>
        <AppHeader />
        <main>
          <Routes>
          <Route path="/" element={<CardIndex />} />
          </Routes>
        </main>
      </div>
    );
  }