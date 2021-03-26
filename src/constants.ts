import { SearchBookType } from './lib/types';

export const ISBN_CODE = { value: 'isbn', label: 'ISBNコード' } as const;
export const BOOK_AUTHOR = { value: 'author', label: '著者名' } as const;
export const BOOK_TITLE = { value: 'title', label: '書籍名' } as const;
export const NO_IMAGE_PATH = '/assets/images/no_image.jpg';

export const TITLE: SearchBookType = 'title' as const;
export const AUTHOR: SearchBookType = 'author' as const;
export const ISBN: SearchBookType = 'isbn' as const;

// CSS
export const STYLES = {
  DEVICES: {
    SP: '640px',
  },

  COLOR: {
    WHITE: '#fefefe',
    OFF_WHITE: '#e4e4e4',
    LITE_GREEN: '#72D172',
    DARK_GRAY: '#bbb',
  },
} as const;
