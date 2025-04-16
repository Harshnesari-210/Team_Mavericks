import React from "react";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-4 w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800">Cryptex Vault</h1>
        <p className="text-md text-gray-600">Own What's Yours</p>
      </header>

      <main className="flex flex-col items-center justify-center py-12">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Connect to Metamask
        </button>
        <p className="mt-4 text-gray-500">
          Unbreakable, Unstealable. Your digital assets, secured by blockchain.
        </p>
      </main>

      <footer className="bg-white shadow-md py-4 w-full text-center">
        <p className="text-sm text-gray-500">© 2025 Cryptex Vault</p>
      </footer>
    </div>
  );
}

export default App;
