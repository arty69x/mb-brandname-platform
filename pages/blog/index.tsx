import Layout from '@/components/Layout/Layout'; import Link from 'next/link';
const posts=[{slug:'style-guide',title:'2026 Style Guide'},{slug:'packing-light',title:'Packing Light for Weekends'}];
export default function BlogIndex(){return <Layout><main><section className='py-16'><div className='container mx-auto px-4'><h1 className='text-3xl font-semibold'>Blog</h1><ul className='mt-6 space-y-3'>{posts.map((p)=><li key={p.slug}><Link className='hover:text-[#d40000]' href={`/blog/${p.slug}`}>{p.title}</Link></li>)}</ul></div></section></main></Layout>; }
