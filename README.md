# API

## 콘텐츠 목록 조회하기

- 콘텐츠 목록을 받아 옵니다. 콘텐츠 id와 title로 검색할 수 있습니다.

> request

**URL**

```
GET http://localhost:3000/contents
```

**Parameter**

| Name  | Type   | Description | Required |
| ----- | ------ | ----------- | :------: |
| id    | String | 콘텐츠 id   |    X     |
| title | String | 콘텐츠 제목 |    X     |

> response

```
200 OK

{
  "id": "05a645cd-0ca2-4298-bfa3-84f28b6d0df7",
  "title": "KHI GIÓ LẠI THỔI",
  "image": "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image10.jpg",
  "like": 342,
  "status": "RELEASE",
  "summary": "Truyện Khi Gió Lại Thổi của tác giả Tiểu Lộ Đăng kể về  Lý Ninh Ngọc là một người đặc biệt trong lòng Cố Hiểu Mộng.\nVì chị ấy, cô tiến vào nơi đây, cô trở thành hán gian, cô điên cuồng tìm kiếm mọi cách để biết được thi thể của Lý Ninh Ngọc ở đâu.",
  "isUse": true,
  "episodes": [],
},
```

## 단일 콘텐츠 조회하기

- 콘텐츠 id로 단일 콘텐츠를 조회합니다.

> request

**URL**

```
GET http://localhost:3000/contents/:id
```

**Parameter**

| Name | Type   | Description | Required |
| ---- | ------ | ----------- | :------: |
| id   | String | 콘텐츠 id   |    O     |

> response

```
200 OK

{
  "id": "05a645cd-0ca2-4298-bfa3-84f28b6d0df7",
  "title": "KHI GIÓ LẠI THỔI",
  "image": "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image10.jpg",
  "like": 342,
  "status": "RELEASE",
  "summary": "Truyện Khi Gió Lại Thổi của tác giả Tiểu Lộ Đăng kể về  Lý Ninh Ngọc là một người đặc biệt trong lòng Cố Hiểu Mộng.\nVì chị ấy, cô tiến vào nơi đây, cô trở thành hán gian, cô điên cuồng tìm kiếm mọi cách để biết được thi thể của Lý Ninh Ngọc ở đâu.",
  "isUse": true,
  "episodes": [],
}
```

## 단일 콘텐츠 수정하기

- 콘텐츠 id로 단일 콘텐츠를 수정합니다.

> request

**URL**

```
PATCH http://localhost:3000/contents/:id
```

**Parameter**

| Name    | Type   | Description        | Required |
| ------- | ------ | ------------------ | :------: |
| id      | String | 콘텐츠 id          |    O     |
| title   | String | 콘텐츠 제목        |    X     |
| image   | String | 콘텐츠 이미지      |    X     |
| like    | Number | 콘텐츠 좋아요 개수 |    X     |
| summary | String | 콘텐츠 줄거리 요약 |    X     |

> response

```
200 OK

{
  "id": "05a645cd-0ca2-4298-bfa3-84f28b6d0df7",
  "title": "수정된 제목",
  "image": "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image10.jpg",
  "like": 342,
  "status": "RELEASE",
  "summary": "Truyện Khi Gió Lại Thổi của tác giả Tiểu Lộ Đăng kể về  Lý Ninh Ngọc là một người đặc biệt trong lòng Cố Hiểu Mộng.\nVì chị ấy, cô tiến vào nơi đây, cô trở thành hán gian, cô điên cuồng tìm kiếm mọi cách để biết được thi thể của Lý Ninh Ngọc ở đâu.",
  "isUse": true,
  "episodes": [],
}
```

## 단일 콘텐츠 삭제하기

- 콘텐츠 id로 단일 콘텐츠의 상태를 변경해 삭제를 구현합니다.

### 콘텐츠 상태 변경

> request

**URL**

```
PATCH http://localhost:3000/contents/:id/status

```

**Parameter**

| Name | Type   | Description | Required |
| ---- | ------ | ----------- | :------: |
| id   | String | 콘텐츠 id   |    O     |

> response

```
200 OK

{
  "id": "0262163d-e4bc-4b76-bbfd-d4bb65f96d31",
  "title": "Ý TƯƠNG TƯ MÀ TÔI TỪNG CHÔN SÂU",
  "image": "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image1.jpg",
  "like": 93,
  "status": "CLOSE",
  "summary": "Câu nói sáo của hắn vẫn luôn là cô chết đi là tốt nhất. Mà khi cô nằm ở trong bồn tắm, máu chảy đầm đìa mà lấy ra một đôi song sinh xong, liền chết rồi, một trái tim của hắn cũng đã nát rồi.",
  "isUse": false,
  "episodes": [],
}
```

### 콘텐츠 사용 여부 변경

> request

**URL**

```
PATCH http://localhost:3000/contents/:id/use

```

**Parameter**

| Name | Type   | Description | Required |
| ---- | ------ | ----------- | :------: |
| id   | String | 콘텐츠 id   |    O     |

> response

```
200 OK

{
  "id": "0262163d-e4bc-4b76-bbfd-d4bb65f96d31",
  "title": "Ý TƯƠNG TƯ MÀ TÔI TỪNG CHÔN SÂU",
  "image": "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image1.jpg",
  "like": 93,
  "status": "CLOSE",
  "summary": "Câu nói sáo của hắn vẫn luôn là cô chết đi là tốt nhất. Mà khi cô nằm ở trong bồn tắm, máu chảy đầm đìa mà lấy ra một đôi song sinh xong, liền chết rồi, một trái tim của hắn cũng đã nát rồi.",
  "isUse": false,
  "episodes": [],
}
```

## 에피소드 구매하기

- 콘텐츠 id와 에피소드 id로 단일 에피소드를 구매합니다.

> request

**URL**

```
PATCH http://localhost:3000/episodes/buy/:content_id/:episode_id
```

**Parameter**

| Name       | Type   | Description | Required |
| ---------- | ------ | ----------- | :------: |
| content_id | String | 콘텐츠 id   |    O     |
| episode_id | String | 에피소드 id |    O     |

> response

```
200 OK

{
  id: '4157993e-e655-4710-b53a-edc82f7d3906',
  title: 'Episode1',
  price: 3,
  novel: '...',
  isFree: true,
  isBuy: true,
}
```

```
409 Conflict

{
  "statusCode": 409,
  "message": "이미 구매한 에피소드입니다.",
  "error": "Conflict"
}
```

## 단일 에피소드 조회하기

- 에피소드 id로 단일 에피소드를 조회합니다.

> request

**URL**

```
PATCH http://localhost:3000/episodes/:content_id/:episode_id
```

**Parameter**

| Name       | Type   | Description | Required |
| ---------- | ------ | ----------- | :------: |
| content_id | String | 콘텐츠 id   |    O     |
| episode_id | String | 에피소드 id |    O     |

> response

```
200 OK

{
  id: '4157993e-e655-4710-b53a-edc82f7d3906',
  title: 'Episode1',
  price: 3,
  novel: '...',
  isFree: true,
  isBuy: true,
}
```
