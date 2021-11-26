import { Route, BrowserRouter } from "react-router-dom"

import { Home, RequestPage } from "../pages"

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={RequestPage} path="/request-page" />
    </BrowserRouter>
  )
}
