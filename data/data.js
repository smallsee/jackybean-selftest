var local_database = [
    {
        name: "wechat",
        title:"会使用微信进行推广么？",
        imgSrc: "/images/avatar.jpg",
        bgImg: "/images/avatar/1.png",
        answer: [
            {
                title: '少于三十天',
                grade: 1
            },
             {
                title: '一直都通',
                grade: 4
            }
        ]
    },
    {
        name: "weibo",
        title: "有没有使用使用微博来运行？",
        imgSrc: "/images/avatar2.png",
        bgImg: "/images/avatar/1.png",
        answer: [
            {
                  title: '很少',
                  grade: 2
            },
             {
                  title: '一直都通',
                  grade: 4
            }
        ]
    },
    {
      name: "tieba",
      title: "玩过贴吧的么",
      imgSrc: "/images/avatar3.png",
      bgImg: "/images/avatar/1.png",
      answer: [
        {
          title: '我是老粉了',
          grade: 4
        },
        {
          title: '没有听说过',
          grade: 1
        }
      ]
    }
]

module.exports = {
    data: local_database
}