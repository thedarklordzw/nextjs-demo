import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient } from 'mongodb';

const dataProps = {
  title: 'The first meetup',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bulawayo_City_Hall.jpg/1280px-Bulawayo_City_Hall.jpg',
  description: 'The first meetup',
  address: '5477 Bulawayo St.',
};

function MeetupDetails() {
  return <MeetupDetail {...dataProps} />;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },

      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bulawayo_City_Hall.jpg/1280px-Bulawayo_City_Hall.jpg',
        id: meetupId,
        title: 'The first meetup',
        description: 'The first meetup',
        address: '5477 Bulawayo St.',
      },
    },
  };
}
export default MeetupDetails;
