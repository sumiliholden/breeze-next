import React from "react";

// components

import CardTable from "@/components/Cards/CardTable.js";
import AppLayout from '@/components/Layouts/AppLayout'
// layouts
export default function Tables() {
  return (
    <AppLayout>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </AppLayout>
  );
}
