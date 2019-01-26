// Mock.mock('http://www.jiasu.com/collection', {
//         "collection|4": [
//             {
//                 // "id|1-10": 1,
//                 // "id":'book_@id',
//                 "id": 'book_' + '@integer(1, 100)',
//                 "name": "@cword(4)",
//                 // "author": Random.cname(),
//                 "author": '@authornames',
//                 "price|1-100.2": 1,
//                 // "publish_date": Random.date('yyyy-MM-dd'),
//
//                 'email': '@email',
//                 "comments_acount|10000-100000": 1,
//                 "sall_type|1-10": 1,
//                 "icon": "book01.jpg",
//                 "star": '@constellation',
//                 "count|1-100": 1,
//                  //指示参数 current 的相反值 !current 出现的概率。概率计算公式为 max / (min + max)。该参数的默认值为 1，即有 50% 的概率返回参数 !current。
//                 "comments": "@cparagraph(2, 7)"
//             }
//         ]
//     }
//
// );