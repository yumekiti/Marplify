import Slide from '../organisms/Slide';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';

const mockMarp = `---
marp: true
theme: yumekiti
paginate: true
size: 16:9
---

<!--
_class: headline
-->

# スライドのタイトル

---

<!--
_class: general
-->

## スライドの説明

### ここに説明を書く

---

<!--
_class: general
_header: "Qiita"
_footer: "スライドasddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
-->

## スライド 1

### 文字が
### で囲むことで**強調**できる

---

<!--
_class: general
_header: "Qiita"
_footer: "スライド"
-->

## スライド 2

- hoge
  - こんにちは
- fuga
- piyo

---

<!--
_class: general
_header: "Qiita"
_footer: "スライド"
-->

## スライド 3

### hoge
### fuga
### piyo

---

<!--
_class: general
-->

### 完
  `;

const PresentationPage: FC = () => {
  const { state } = useLocation() as { state: string };
  const splitMarkdown = state.split('---');

  const info = splitMarkdown[1];
  const markdowns = splitMarkdown.slice(2).map(
    (markdown) =>
      `---
${info}
---
${markdown}
`,
  );

  return (
    <div className='absolute buttom-0 left-0 right-0 h-full w-full object-cover bg-black'>
      <Slide markdowns={markdowns} />
    </div>
  );
};

export default PresentationPage;
