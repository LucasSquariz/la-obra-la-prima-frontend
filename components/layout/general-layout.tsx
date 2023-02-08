import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";

const GeneralLayout= ({children}:any) => {
    return (
        <>
            <Header />
            {children}
            {/* <Footer /> */}
        </>
    )
}

export default GeneralLayout;