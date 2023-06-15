export const convertToMarp = (text: string, handleConvertText: (newText: string) => void) => {
  fetch('http://localhost:3003/api/v1/marp', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      raw_body: text,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('成功');
      handleConvertText(data.raw_body);
    })
    .catch((err) => console.log('エラー'));
};
