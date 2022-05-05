import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

function NewMeetUp() {
  const router = useRouter();

  const addMeetupHandler = enteredData => {
    async function btnHandler() {
      try {
        const response = await fetch('./api/new-meetup', {
          method: 'POST',
          body: JSON.stringify(enteredData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log(4);

        const data = await response.json();
        console.log(data);
        router.replace('/');
      } catch (e) {
        console.log(e);
      }
    }

    btnHandler();
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetUp;
