import Layout from '@/components/layout/Layout';
import SEO from '@/components/layout/SEO';
import ListingPage from '@/components/commerce/ListingPage';
import { products } from '@/data/products';
import { canonical } from '@/lib/seo';

export default function Shop() { return <Layout><SEO title="The Shop — MB BRANDNAME" description="Explore curated luxury selection at MB BRANDNAME." canonical={canonical('/shop')} /><ListingPage title="THE SHOP" description="Explore curated luxury selection at MB BRANDNAME." data={products} /></Layout>; }
