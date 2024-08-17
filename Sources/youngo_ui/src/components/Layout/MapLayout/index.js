import { Navbar } from '../components';

function MapLayout({ children }) {
    return (
        <div className="map-layout">
            <Navbar />
            {children}
        </div>
    );
}

export default MapLayout;
