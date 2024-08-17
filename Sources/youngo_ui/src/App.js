import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = route.layout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout pageTitle={route.pageTitle}>
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
