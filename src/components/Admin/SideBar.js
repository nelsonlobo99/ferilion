"use client";
import React from 'react';
import { Tooltip } from '@mui/material';
import { LayoutDashboard } from 'lucide-react';

const SideBar = ({ onNavClick }) => (
  <div className="fixed flex left-3 bg-gray-50 sm:p-6 lg:pl-8 rounded-lg shadow-lg">
    <aside>
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <Tooltip title="Dashboard" placement="right">
          <LayoutDashboard
            className="flex h-12 w-12 items-center justify-center rounded-lg text-muted-foreground transition-colors text-black hover:text-red-950 cursor-pointer"
            onClick={() => onNavClick('dashboard')}
          >
          </LayoutDashboard>
        </Tooltip>
          <div
            className="flex h-12 w-12 items-center justify-center rounded-lg text-black  hover:text-red-950 cursor-pointer"
            onClick={() => onNavClick('courses')}
          >
            COURSE
          </div>
          <div
            className="flex h-12 w-12 items-center justify-center rounded-lg text-black hover:text-red-950 cursor-pointer"
            onClick={() => onNavClick('Alumni')}
          >
            ALUMNI
          </div>
      </nav>
    </aside>
  </div>
);

export default SideBar;
