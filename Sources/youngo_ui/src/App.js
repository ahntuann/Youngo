import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                {publicRoutes.map((route, index) => {
                    return (
                        <Link key={index} to={route.path}>
                            {route.namePage}
                        </Link>
                    );
                })}

                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = route.layout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
