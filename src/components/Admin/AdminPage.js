// src/app/admin/page.js
"use client";
import React, { useState } from 'react';
import SideBar from './SideBar';
import CoursesPage from './Courses';
import Alumni from './Alumni';
import DashBoard from './DashBoard';

const AdminPage = () => {
  const [currentView, setCurrentView] = useState('dashboard'); // default view

  const handleNavClick = (view) => {
    console.info(view)
    setCurrentView(view);
  };

  return (
    <div className="flex p-4"  >
      <SideBar onNavClick={handleNavClick} />
      <div className="flex-1 p-6">
      {currentView === 'dashboard' && <DashBoard/>}
      {currentView === 'courses' && <CoursesPage />}
      {currentView === 'Alumni' && <Alumni/>}
      
      </div>
    </div>
  );
};

export default AdminPage;
