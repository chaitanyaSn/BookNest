import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { BookGrid } from './components/BookGrid';
import { Route, Routes } from 'react-router-dom';
import { BookDetails } from './components/BookDetails';



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-slate-100 to-blue-300 ">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="pt-16 flex">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="flex-1 sm:ml-64">

         <Routes>
              <Route path="/" element={<BookGrid />} />
              <Route path="/book/:id" element={<BookDetails />} />
            </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;