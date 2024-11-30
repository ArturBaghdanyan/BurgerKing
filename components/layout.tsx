import Header from './header';
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <div className="content">
      <Header />
        {children}
      <Footer />
    </div>
  )
}
export default Layout;