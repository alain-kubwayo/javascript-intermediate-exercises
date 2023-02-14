const Wrapper = ({ children }) => {
    return ( 
        <main className="mx-auto max-w-[1000px] px-5">
            {children}
        </main>
    );
}
 
export default Wrapper;