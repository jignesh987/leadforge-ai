import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-8">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div className="flex items-center gap-5">

        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">

          <Search size={18} />

          <input
            className="bg-transparent outline-none ml-2"
            placeholder="Search Influencer..."
          />

        </div>

        <Bell />

        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full"
        />

      </div>

    </div>
  );
}