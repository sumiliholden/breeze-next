import React from "react";

// components
import AppLayout from '@/components/Layouts/AppLayout'
import CardSettings from "@/components/Cards/CardSettings.js";
import CardProfile from "@/components/Cards/CardProfile.js";


export default function Settings() {
  return (
    <AppLayout>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </AppLayout>
  );
}
