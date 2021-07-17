import React, {useState, useEffect} from 'react';

export default function Menu() {

    cosnt menuItems = [
      {
        name: 'Dashboard'
      },
      {
        name: 'Music'
      },
      {
        name: 'Drink'
      },
      {
        name: 'Shopping'
      },
      {
        name: 'Chat'
      },
      {
        name: 'Profile'
      },
    ]

    return <div class="min-h-screen flex flex-row bg-gray-100">
      <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
        <div class="flex items-center justify-center h-20 shadow-md">
          <h1 class="text-3xl uppercase text-indigo-500">Logo</h1>
        </div>
        <ul class="flex flex-col py-4">
          {menuItems.map(x => {
              <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                  <span class="text-sm font-medium">{x.title}</span>
                </a>
              </li>
          })}
        </ul>
      </div>
    </div>
}
