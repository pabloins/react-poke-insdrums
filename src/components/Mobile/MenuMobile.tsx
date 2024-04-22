import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

const MenuMobile: React.FC = () => (
    <div className="flex md:hidden">
        <button type="button">
            <RiMenu3Fill className="w-6 h-6" />
        </button>
    </div>
)

export default MenuMobile