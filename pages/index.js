import Head from 'next/head'
import Header from '../components/Header/Header';
import Layout from '../components/Layout'
import ProductWrapper from '../components/Products/ProductWrapper'

export default function Home({products}) {
  return (
    <>
      <Head>
        <title>Aerolab challenge | Marcos Aguero</title>
        <meta name="description" content="Aerolab Frontend Developer coding challenge" />
        <meta property="og:title" content="Aerolab challenge | Marcos Aguero" />
        <meta property="og:description" content="Aerolab Frontend Developer coding challenge" />
        <link rel="icon" href="/icons/favicon.svg" />
      </Head>

      <Layout>
        <Header/>
        <ProductWrapper products={products}/>
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/products`, {
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
      }
    });
    const products = await res.json();
    return {
      props: {
        products
      }
    }
  } catch (error) {
    console.log(error)
  }
}
