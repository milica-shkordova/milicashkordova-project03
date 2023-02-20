import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

const ScrollToTop: React.FC<Props> = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return <>{children}</>;
};

export default ScrollToTop;
