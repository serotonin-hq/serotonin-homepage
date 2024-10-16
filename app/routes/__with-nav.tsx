import { Outlet } from "@remix-run/react";

export default function WithNav() {
  return (
    <div className="grid grid-cols-12 grid-rows-1 gap-6">
      <div className="md:pt-[160px] pt-8 md:col-start-4 p-8 md:col-span-9 col-span-12 md:grid flex grid-cols-6 lg:grid-cols-9 grid-rows-1 gap-6 pr-8 pb-8">
        <Outlet />
      </div>
    </div>
  );
}
