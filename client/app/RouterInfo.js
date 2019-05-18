import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import MainContainer from '../components/Layout/MainContainer';
import HomeContainer from '../components/Home/HomeContainer';
import SearchBookContainer from '../components/SearchBook/Container/SearchBookContainer';
import AddBookContainer from '../components/AddBook/Container/AddBookContainer';
import ViewAllContainer from '../components/ViewAllBook/Container/ViewAllContainer';

// Top Menu Navigation
const webRoutes = [
    { link: '/', display: 'Home' },
    { link: '/searchBook', display: 'Search' },
    { link: '/addOrEditBook', display: 'Add/Edit Book' },
    { link: '/viewAll', display: 'All Books' }
];

/**
 * Main Container Routes Wrapper
 * Used to Create the Layout of the Page
 */
const MainContainerRoutes = (props) => {
    return (<MainContainer
        routesData={webRoutes}
        {...props}
    />);
};

/**
 * Router Info Component Which will Hold the All the Router Related Data
 */
const RouterInfo = () => {
    return (<BrowserRouter>
        <MainContainerRoutes>
            <Switch>
                <Route path="/" exact component={HomeContainer} />
                <Route path="/addOrEditBook" component={AddBookContainer} />
                <Route path="/searchBook" component={SearchBookContainer} />
                <Route path='/viewAll' component={ViewAllContainer} />
            </Switch>
        </MainContainerRoutes>
    </BrowserRouter>);
};

// Default Export
export default RouterInfo;
