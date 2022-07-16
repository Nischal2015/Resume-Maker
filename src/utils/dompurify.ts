import DomPurify from 'dompurify';

export const dompurify = (data: string) => ({
  __html: DomPurify.sanitize(data),
});
