import React from "react";
import MyTopNavigation from './MyTopNavigation';
import MySideNavigation from './MySideNavigation';

export default function Layout({ children, signOut }) {
    return (
        <>
            <MyTopNavigation signOut={signOut} />
            <div className="flex w-full min-h-screen">
                <MySideNavigation />
                <div className="flex flex-col w-full justify-center items-center">
                    {children}
                </div>
            </div>
        </>
    );
};