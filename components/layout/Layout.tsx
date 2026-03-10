import Header from './Header';
import Footer from './Footer';

type Props = { children: React.ReactNode; headerVariant?: 'home' | 'solid' };

export default function Layout({ children, headerVariant = 'solid' }: Props) {
  return (
    <>
      <Header variant={headerVariant} />
      {children}
      <Footer />
    </>
  );
}
