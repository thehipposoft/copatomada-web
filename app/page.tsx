import type { Metadata } from 'next';
import '../styles/globals.scss';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import WhatsApp from '@/components/Commons/WhatsApp';
import Conocenos from '@/components/Conocenos';
import Footer from '@/components/Footer';
import Redes from '@/components/Redes';
import EdadModal from '@/components/EdadModal';
import Menu from '@/components/Menu';

export const metadata: Metadata = {
      title: 'Home | Copa Tomada',
      description:
        'Venta y delivery de bebidas en Nueva Cordoba. Pedi online y recibi tus tragos, birras y promos en minutos.',
      alternates: {
        canonical: '/',
      },
      openGraph: {
        url: 'https://copatomada.com.ar/',
        title: 'Home | Copa Tomada',
        description:
          'Venta y delivery de bebidas en Nueva Cordoba. Pedi online y recibi tus tragos, birras y promos en minutos.',
      },
      twitter: {
        title: 'Home | Copa Tomada',
        description:
          'Venta y delivery de bebidas en Nueva Cordoba. Pedi online y recibi tus tragos, birras y promos en minutos.',
      },
  };

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <EdadModal />
      <Header />
      <WhatsApp />
      <Banner />
      <Conocenos />
      <Redes />
      <Footer />
      <Menu />
    </main>
  )
}
