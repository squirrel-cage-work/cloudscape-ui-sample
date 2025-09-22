import React from "react";
import MyTopNavigation from './MyTopNavigation';
import MySideNavigation from './MySideNavigation';

export default function Layout({ children, signOut }) {
    return (
        <>
            <MyTopNavigation signOut={signOut} />
            <div className="flex">
                <MySideNavigation />
                <div className="flex flex-1 w-full justify-center items-center">
                    {children}
                </div>
            </div>
        </>
    );
};