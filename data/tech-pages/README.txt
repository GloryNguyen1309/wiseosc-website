Tech pages — SEO content (JSON)
================================

Mỗi file = 1 slug trên URL /technologies/<slug>
  Ví dụ: aws.json  →  /technologies/aws
         javascript.json  →  /technologies/javascript
         react.json  →  /technologies/react
         react-native.json  →  /technologies/react-native

Tên file phải trùng slug trong lib/technologies.ts.

Cấu trúc mỗi file (copy từ file có sẵn rồi sửa text):
  - services     → tiêu đề + 6 mục, mỗi mục: title + paragraphs (mảng 2 đoạn)
  - whyChoose    → title, imageSrc, imageAlt, features (icon: shield|lock|layout-grid|users|globe|zap), cta
  - ecosystem    → title + categories (title, description, items[])
  - keyThings    → title + tabs (id, label, sections: heading + body)
  - faq          → title + items (question, answer)

Thêm tech mới: tạo data/tech-pages/<slug>.json + thêm dòng import + vào object PAGE_OVERRIDES trong lib/tech-page-content.ts.
