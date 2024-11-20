"use client";

import Link from 'next/link';
import { useState } from 'react';
import React from 'react';

interface MenuItem {
  label: string;
  icon: string;
  href: string;
  submenu?: MenuItem[];
}

export default function Sidebar() {
  const [expandedMenu, setExpandedMenu] = useState<string | null>('Orders');

  const menuItems: MenuItem[] = [
    {
      label: 'Orders',
      icon: '📦',
      href: '#',
      submenu: [
        { label: 'All Orders', icon: '📋', href: '/orders' },
        { label: 'Add New Order', icon: '➕', href: '/orders/new' },
      ]
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white">
      {/* Logo Section */}
      <div className="h-16 flex items-center px-6 bg-gray-900">
        <span className="text-xl font-semibold">Snack Safari Admin</span>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-4">
        {menuItems.map((item) => (
          <div key={item.label}>
            <button
              onClick={() => setExpandedMenu(expandedMenu === item.label ? null : item.label)}
              className={`w-full flex items-center gap-2 px-6 py-3 hover:bg-gray-700 transition-colors
                ${expandedMenu === item.label ? 'bg-gray-700' : ''}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
              {item.submenu && (
                <span className="ml-auto">
                  {expandedMenu === item.label ? '▼' : '▶'}
                </span>
              )}
            </button>

            {item.submenu && expandedMenu === item.label && (
              <div className="bg-gray-900">
                {item.submenu.map((subitem) => (
                  <Link
                    key={subitem.label}
                    href={subitem.href}
                    className="flex items-center gap-2 px-12 py-2 hover:bg-gray-700 transition-colors"
                  >
                    <span>{subitem.icon}</span>
                    <span>{subitem.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
} 