import React from "react";

export default function Footer() {
    
    return(
        
    <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
            <div>
                <p className="text-sm">© 2024 Ritik Singh. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                <a href="#" className="hover:text-gray-400">Terms of Service</a>
                <a href="#" className="hover:text-gray-400">Contact</a>
            </div>
        </div>
    </footer>
    )
}