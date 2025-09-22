import React from "react";
import MyTopNavigation from  './MyTopNavigation';
import MySideNavigation from './MySideNavigation';

export default function Layout({ children, signOut}) {
    return(
        <>
        <MyTopNavigation signOut={signOut}/>
        <MySideNavigation />
        <div>
            {children}
        </div>
        </>
    );
};