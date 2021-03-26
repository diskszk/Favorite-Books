import axios from 'axios';
import { applicationId, baseUrl } from './config';
import { SearchBookType, Book } from '../../types';

type SearchBook = {
  Items: Book[];
  hits: number;
  page: number;
  pageCount: number;
};

export async function searchBooks(
  type: SearchBookType,
  value: string,
  page = 1
): Promise<SearchBook> {
  console.log('SEARCHING!!');

  // URLエンコードする
  const encodedValue = encodeURI(value);

  // rakuten books APIを叩く
  const url = `${baseUrl}?format=json&formatVersion=2&${type}=${encodedValue}&applicationId=${applicationId}&page=${page}`;

  try {
    const { data, status } = await axios.get<SearchBook>(url);

    if (status === 500) {
      throw new Error(`サーバーエラー` + status);
    }

    return data;
  } catch (err) {
    console.log(status);

    throw new Error(err);
  }
}
