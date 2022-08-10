import type { NextPage } from 'next'
import Head from 'next/head'

import { Homepage } from '~/components/Home'

const Home: NextPage = () => {
       return (
              <div className="flex w-full">
                     <Head>
                            <title>Create Next App</title>
                            <meta
                                   name="description"
                                   content="Generated by create next app"
                            />
                            <link rel="icon" href="/favicon.ico" />
                     </Head>

                     <Homepage />
              </div>
       )
}

export default Home
