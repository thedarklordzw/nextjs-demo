import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';
import React from 'react';

const DUMMY_MEETS = [
  {
    id: 'm1',
    title: 'The first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bulawayo_City_Hall.jpg/1280px-Bulawayo_City_Hall.jpg',
    description: 'The first meetup',
    address: '5477 Blipster St.',
  },
  {
    id: 'm2',
    title: 'The second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/61/Bulawayo_CBD.jpg',
    description: 'The second meetup',
    address: '6533 Blipster St.',
  },
];

function HomePage(props) {
  return (
    <React.Fragment>
      <Head>
        <title>My NextJS Website</title>
        <meta name='description' content='Have a look at my website' />
      </Head>
      <MeetupList meetups={props.meetups} />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETS,
    },
    revalidate: 10,
  };
}

export default HomePage;
