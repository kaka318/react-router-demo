import { createContext, useContext, useEffect, useState } from 'react';
const viewContext = createContext({});
const ViewportProvider = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);
    // const [height,setHeight] = useState(window.innerHeight);
    // let curWidth = window.innerWidth;
    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        // setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <viewContext.Provider value={{ width }}>
            {children}
        </viewContext.Provider>
    )
}
export default ViewportProvider;
export const useViewport = () => {
    const { width } = useContext(viewContext);
    return { width };
}