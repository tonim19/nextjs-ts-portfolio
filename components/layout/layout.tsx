import Header from "../header/header";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
