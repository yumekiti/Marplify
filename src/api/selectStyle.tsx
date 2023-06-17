import { Theme } from '../components/PreviewArea';

export const selectStyle = (text: string, theme: Theme, handleConvertText: (newText: string) => void) => {
  fetch('https://markdown-to-marp-converter-api-production.up.railway.app/api/v1/theme', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      raw_body: text,
      theme: theme,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('成功');
      handleConvertText(data.raw_body);
    })
    .catch((err) => console.log('エラー'));
};
