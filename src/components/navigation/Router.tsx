import React, { ReactElement, useEffect } from 'react'
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Blocks from '../../pages/blocks/Blocks'
import Transactions from '../../pages/transactions/Transactions'
import Contract from '../../pages/contract/Contract'
import Contracts from '../../pages/contracts/Contracts'
import Navigation from './Navigation'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar'
import { ROUTES } from '../../constants'
import Block from '../../pages/block/Block'

const ScrollToTop = (): null => {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

const Router: React.FC = (): ReactElement => {
  return (
    <>
      <BrowserRouter>
        <div id="router-container">
          <Sidebar />
          <div className="column-container">
            <Navigation />
            <ScrollToTop />
            <div className="column-container">
              <Switch>
                <Route
                  path={`${ROUTES.BLOCK.url}/:hash`}
                  component={(): ReactElement => <Block />}
                />
                <Route
                  path={`${ROUTES.CONTRACT.url}/:hash`}
                  component={(): ReactElement => <Contract />}
                />
                <Route
                  path={ROUTES.CONTRACTS.url}
                  component={(): ReactElement => <Contracts />}
                />
                <Route
                  path={ROUTES.TRANSACTIONS.url}
                  component={(): ReactElement => <Transactions />}
                />
                <Route
                  path={ROUTES.BLOCKS.url}
                  component={(): ReactElement => <Blocks />}
                />
                <Route
                  path={ROUTES.HOME.url}
                  component={(): ReactElement => <Home />}
                />
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Router