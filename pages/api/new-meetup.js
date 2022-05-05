// import { MongoClient } from 'mongodb';

// async function handler(req, res) {
//   try {
//     if (req.method === 'POST') {
//       const data = await req.body;

//       const client = await MongoClient.connect(
//         'mongodb+srv://ulathi:ulathi@cluster0.1dvwn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//       );

//       const db = client.db();

//       const meetupsCollection = db.collection('meetups');
//       const result = await meetupsCollection.insertOne(data);

//       client.close();

//       await res.status(201).json({ message: 'Meetup entry sent' });
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }

// export default handler;
