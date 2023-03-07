
import React from "react";
import { Routes, Route } from "react-router";
import { Index } from './views/index.jsx'

export function RootCmp() {
    return (
      <div>
        <main>
          <Routes>
          <Route path="/" element={<Index />} />
          </Routes>
        </main>
      </div>
    );
  }