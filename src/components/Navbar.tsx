import React, { useState } from 'react';
import { BookOpen, LogIn, MessageCircle, PlusCircle, Menu, Clock } from 'lucide-react';
import { Modal } from './Modal';
import { SellBookForm } from './SellBookForm';
import { RecentlyViewedBooks } from './RecentlyViewedBooks';

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const [showRecentlyViewed, setShowRecentlyViewed] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50">
        <div className="h-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={onMenuClick}
              className="sm:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">BookMarket</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowRecentlyViewed(!showRecentlyViewed)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-full relative"
            >
              <Clock className="w-5 h-5" />
              <span className="hidden sm:inline">Recent</span>
            </button>

            <button
              onClick={() => setIsSellModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-full"
            >
              <PlusCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Sell Book</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-full">
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Chat</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <LogIn className="w-5 h-5" />
              <span className="hidden sm:inline">Login</span>
            </button>
          </div>
        </div>
        {showRecentlyViewed && <RecentlyViewedBooks />}
      </nav>

      <Modal
        isOpen={isSellModalOpen}
        onClose={() => setIsSellModalOpen(false)}
        title="Sell Your Book"
      >
        <SellBookForm onClose={() => setIsSellModalOpen(false)} />
      </Modal>
    </>
  );
}