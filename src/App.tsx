/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import GoogleReviews from './components/GoogleReviews';
import OrderOnline from './components/OrderOnline';
import BookTable from './components/BookTable';
import MarqueeBanner from './components/MarqueeBanner';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="font-sans antialiased text-sand bg-dark-brown selection:bg-terracotta selection:text-dark-brown overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <GoogleReviews placeId="ChIJKV99Dti1bTkRQYfKew9bVFc" />
        <OrderOnline />
        <BookTable />
        <MarqueeBanner />
      </main>
      <Footer />
    </div>
  );
}

