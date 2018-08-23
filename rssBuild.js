const Podcast = require('podcast');
const fs = require('fs');

/* lets create an rss feed */
const feed = new Podcast({
    title: 'FAcast',
    description: 'FAcast',
    feed_url: 'https://facast.net/feed.xml',
    site_url: 'https://facast.net',
    image_url: 'https://facast.net/static/ogp.jpg',
    docs: '雑談系Podcast',
    author: 'Hayato Aokiba/Okada Genya',
    managingEditor: 'Hayato Aokiba/Okada Genya',
    webMaster: 'Hayato Aokiba/Okada Genya',
    copyright: '2018 Okada Genya',
    language: 'ja',
    categories: ['car', 'auto', 'frontend'],
    pubDate: 'May 20, 2012 04:00:00 JST',
    ttl: '60',
    itunesAuthor: 'Hayato Aokiba/Okada Genya',
    itunesSubtitle: '雑談系Podcast',
    itunesSummary: '雑談系Podcast',
    itunesOwner: { name: 'Okada Genya', email:'g.okada.wilf@gmail.com' },
    itunesExplicit: false,
    itunesCategory: {
        "text": "Technology",
        "subcats": [{
          "text": "Technology"
        }]
    },
    itunesImage: 'https://facast.net/static/ogp.jpg' // 1400? http://cdn.rebuild.fm/images/icon1400.jpg
});

/* loop over data and add to feed */
// todo
feed.addItem({
    title:  'item title',
    description: 'use this for the content. It can include html.',
    url: 'http://example.com/article4?this&that', // link to the item
    guid: '1123', // optional - defaults to url
    categories: ['Category 1','Category 2','Category 3','Category 4'], // optional - array of item categories
    author: 'Guest Author', // optional - defaults to feed author property
    date: 'May 27, 2012', // any format that js Date can parse.
    itunesAuthor: 'Max Nowack',
    itunesExplicit: false,
    itunesSubtitle: 'I am a sub title',
    itunesSummary: 'I am a summary',
    itunesDuration: 12345,
    itunesKeywords: ['javascript','podcast']
});

// cache the xml to send to clients
const xml = feed.buildXml();

fs.writeFile('dist/feed.xml', xml, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
