function DefaultLayout({ children }) {
    return (
        <div className="default-layout">
            <nav>
                <h1>This is Navbar</h1>
            </nav>
            {children}
        </div>
    );
}

export default DefaultLayout;
