const express = require('express')
const cors = require('cors')
const line = require('@line/bot-sdk')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
}
const client = new line.Client(config)

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(cors())

app.post('/bot/api', async (req, res) => {
  // req.body.events should be an array of events
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end()
  }

  if (req.body.events.length == 0) {
    return res.status(200).end()
  }

  let type = req.body.events[0].type
  let replyToken = req.body.events[0].replyToken

  menuMsg = {
    type: 'flex',
    altText: 'เลือกบริการ',
    contents: {
      type: 'carousel',
      contents: [
        {
          type: 'bubble',
          size: 'micro',
          hero: {
            type: 'image',
            url: 'https://www.sgethai.com/wp-content/uploads/2021/09/crab-fried-rice-white-background-600x401.jpg',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '320:213',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'ข้าวผัดปู',
                weight: 'bold',
                size: 'sm',
                wrap: true,
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ราคา 60 บาท',
                        wrap: true,
                        color: '#8c8c8c',
                        size: 'md',
                        flex: 5,
                      },
                    ],
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                  },
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                  },
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                  },
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                  },
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png',
                  },
                  {
                    type: 'text',
                    text: '4.0',
                    size: 'sm',
                    color: '#8c8c8c',
                    margin: 'md',
                    flex: 0,
                  },
                ],
              },
            ],
            spacing: 'sm',
            paddingAll: '13px',
          },
        },
        {
          type: 'bubble',
          size: 'micro',
          hero: {
            type: 'image',
            url: 'https://img.wongnai.com/p/400x0/2018/05/12/a6f94b454e5a410686d92dbffb17e71c.jpg',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '320:213',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'ข้าวคะน้าหมูกรอบ',
                weight: 'bold',
                size: 'sm',
                wrap: true,
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ราคา 60 บาท',
                        wrap: true,
                        color: '#8c8c8c',
                        size: 'md',
                        flex: 5,
                      },
                    ],
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                  },
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                  },
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                  },
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                  },
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png',
                  },
                  {
                    type: 'text',
                    text: '4.0',
                    size: 'sm',
                    color: '#8c8c8c',
                    margin: 'md',
                    flex: 0,
                  },
                ],
              },
            ],
            spacing: 'sm',
            paddingAll: '13px',
          },
        },
        {
          type: 'bubble',
          size: 'micro',
          hero: {
            type: 'image',
            url: 'https://img.wongnai.com/p/1920x0/2018/04/17/06993eef2aa940e49c57c1c564c53376.jpg',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '320:213',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'ข้าวกระเพราหมูสับไข่ดาว',
                weight: 'bold',
                size: 'sm',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        wrap: true,
                        color: '#8c8c8c',
                        size: 'md',
                        flex: 5,
                        text: 'ราคา 70 บาท',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                  },
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                  },
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                  },
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                  },
                  {
                    type: 'icon',
                    size: 'xs',
                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png',
                  },
                  {
                    type: 'text',
                    text: '4.0',
                    size: 'sm',
                    color: '#8c8c8c',
                    margin: 'md',
                    flex: 0,
                  },
                ],
              },
            ],
            spacing: 'sm',
            paddingAll: '13px',
          },
        },
      ],
    },
  }

  switch (type) {
    case 'message':
      let messageType = req.body.events[0].message.type
      switch (messageType) {
        case 'text':
          let text = req.body.events[0].message.text
          console.log(req.body.events)
          if (text === 'เมนูอาหาร') {
            return client.replyMessage(replyToken, menuMsg)
          } else {
            return client.replyMessage(replyToken, [
              {
                type: 'text',
                text: 'กรุณาส่งใหม่',
              },
            ])
          }

          break

        default:
      }
  }
})
