import Navbar from '@components/Navbar/Navbar';

const DefaultLayout = ({ children }) => (
  <>
    <Navbar />
    <main className="pb-5">
      {children}
    </main>
  </>
);

export default DefaultLayout;
