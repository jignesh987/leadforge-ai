import { LayoutDashboard, Users, Search, Mail, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        🚀 LeadForge AI
      </h1>

      <ul className="space-y-5">

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <LayoutDashboard size={20} />
          Dashboard
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <Users size={20} />
          Influencers
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <Search size={20} />
          Discovery
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <Mail size={20} />
          Outreach
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <Settings size={20} />
          Settings
        </li>

      </ul>

    </div>
  );
}