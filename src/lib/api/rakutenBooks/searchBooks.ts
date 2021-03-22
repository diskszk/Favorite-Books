import axios from 'axios';
import { applicationId, baseUrl } from './config';
import { SearchBookType, Book } from '../../types';

type SearchBookData = {
  Items: Book[];
  hits: number;
};

export async function searchBooks(type: SearchBookType, value: string): Promise<Book[]> {
  // URLエンコードする
  const encodedValue = encodeURI(value);

  // rakuten books APIを叩く
  const url = `${baseUrl}?format=json&${type}=${encodedValue}&applicationId=${applicationId}`;

  console.log(url);

  try {
    const res = await axios.get<SearchBookData>(url);

    return res.data.Items;
  } catch (err) {
    return [];
  }
}
