import database from '../libs/firebase';
import { collection, getDocs, addDoc, query, limit, where, orderBy } from 'firebase/firestore';
import IGreeting from '../models/greeting';

const GreetsCollection = '/greetings';

type FetchGreetingsProps = {
  perPage?: number;
  cursor?: Date;
};

export const fetchGreetings = async ({
  perPage = 10,
  cursor = new Date(),
}: FetchGreetingsProps) => {
  try {
    let res: IGreeting[] = [];
    let nextCursor: Date = new Date();

    const q = query(
      collection(database, GreetsCollection),
      where('createdAt', '<', cursor),
      orderBy('createdAt', 'desc'),
      limit(perPage),
    );

    const greetingDocs = await getDocs(q);

    greetingDocs.docs.map((greetingDoc) => {
      const data = greetingDoc.data() as IGreeting;

      res.push(data);
      nextCursor = data.createdAt;
    });

    return { res, nextCursor };
  } catch (error: unknown) {
    throw error;
  }
};

export const addGreeting = async (greeting: IGreeting) => {
  try {
    const res = await addDoc(collection(database, GreetsCollection), greeting);
    return res;
  } catch (error: unknown) {
    throw error;
  }
};
