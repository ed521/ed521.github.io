const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#20c3ff',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "前前前世",
        artist: 'RADWIMPS',
        url: 'https://drive.google.com/uc?export=download&id=1MJsGgodLNQ-sW6xaGUPCeEFrM5KDTISe',
        cover: '/music/前前前世.jpg',
		lrc: '/music/前前前世.lrc',
      },
      {
        name: 'Butter-Fly',
        artist: '和田光司 (By コバソロ & 七穂)',
        url: 'https://drive.google.com/uc?export=download&id=1MsP1LkJj8K5k_Dq7kwYGJDbRbXSN4mfP',
        cover: '/music/Butter-Fly.jpg',
		lrc: '/music/Butter-Fly.lrc'
      },
      {
        name: 'Catch the Moment',
        artist: 'LiSA',
        url: 'https://drive.google.com/uc?export=download&id=1tYigvqC9QoUj5JzTFO_RHEuUIqzxHDmu',
        cover: '/music/Catch the Moment.jpg',
		lrc: '/music/Catch the Moment.lrc'
      },
	  {
        name: "Baby Don't Know Why",
        artist: 'Ms.OOJA (NC)',
        url: 'https://drive.google.com/uc?export=download&id=1mRjlDRVX3hZAlShGUvfj2KrGO9qaHOpd',
        cover: '/music/Baby Dont Know Why.jpg',
		lrc: '/music/Baby Dont Know Why.lrc'
      },
	  {
        name: 'LOSER',
        artist: '米津玄師',
        url: 'https://drive.google.com/uc?export=download&id=192n7GXieQ6zrfkrg5HM2YoYsvk8DfuLH',
        cover: '/music/LOSER.jpg',
		lrc: '/music/LOSER.lrc'
      },
	  {
        name: '打上花火',
        artist: 'DAOKO × 米津玄師',
        url: 'https://drive.google.com/uc?export=download&id=1sBHIt_Pm7tSwtsu-cDOAwR3ba6KgpkNd',
        cover: '/music/打上花火.jpg',
		lrc: '/music/打上花火.lrc'
      },
	  {
        name: '光年之外',
        artist: '鄧紫棋',
        url: 'https://drive.google.com/uc?export=download&id=1uaon36UBGsRO80J1a-VHAe3KUrpuLFrT',
        cover: '/music/光年之外.jpg',
		lrc: '/music/光年之外.lrc'
      },
	  {
        name: '再見',
        artist: '鄧紫棋',
        url: 'https://drive.google.com/uc?export=download&id=1UwfvmmtaGxH56KkOUYqv24F5SslNQFW4',
        cover: '/music/再見.jpg',
		lrc: '/music/再見.lrc'
      },
	  {		
        name: '漂向北方',
        artist: '黃明志 (ft.王力宏)',
        url: 'https://drive.google.com/uc?export=download&id=1J5CVTDt2dhJRnZPTAhkzLwXge-26CUi0',
        cover: '/music/漂向北方.jpg',
		lrc: '/music/漂向北方.lrc'
      },
	  {
        name: '等你下課',
        artist: '周杰倫 (ft.楊瑞代)',
        url: 'https://drive.google.com/uc?export=download&id=11jThCYn8sx2jWuzu1jaVM2vRHqLhJ0TC',
        cover: '/music/等你下課.jpg',
		lrc: '/music/等你下課.lrc'
      },
	  {
        name: '告白氣球',
        artist: '周杰倫',
        url: 'https://drive.google.com/uc?export=download&id=1eHvYYqVlSx2T-a6L8GPXAKuz-eCoNkaF',
        cover: '/music/告白氣球.jpg',
		lrc: '/music/告白氣球.lrc'
      },
	  {
        name: 'I Really Like You',
        artist: 'Carly Rae Jepsen (NC)',
        url: 'https://drive.google.com/uc?export=download&id=19jwcHWKAFbOnnvbIpTKxkMSNw-IG5Ld4',
        cover: '/music/I Really Like You.jpg',
		lrc: '/music/I Really Like You.lrc'
      },
	  {
        name: '終わりの世界から',
        artist: '麻枝 准×やなぎなぎ',
        url: 'https://drive.google.com/uc?export=download&id=1L1S0-i1B9LpxYLFOrfZW05If3kKauHIx',
        cover: '/music/終わりの世界から.jpg',
		lrc: '/music/終わりの世界から.lrc'
      },
	  {
        name: '好想你 2.0',
        artist: '黃明志 (feat.四葉草)',
        url: 'https://drive.google.com/uc?export=download&id=1fCBfoYkBsKm_PmI-Q9yGiFt_uQEtLOo0',
        cover: '/music/漂向北方.jpg',
		lrc: '/music/好想你2.0.lrc'
      },
	  {
        name: '體面',
        artist: '于文文',
        url: 'https://drive.google.com/uc?export=download&id=1CDk8hM9vikyxLAbsI8Nv1cD5mSbwc50I',
        cover: '/music/體面.jpg',
		lrc: '/music/體面.lrc'
      },
	  {
        name: '追光者',
        artist: '汪蘇瀧',
        url: 'https://drive.google.com/uc?export=download&id=1eaJv3A9cuAdJY5lv2ys7bbRe3M96oZQa',
        cover: '/music/追光者.jpg',
		lrc: '/music/追光者.lrc'
      },
	  {
        name: '剛好遇見你',
        artist: '李玉剛',
        url: 'https://drive.google.com/uc?export=download&id=1a04cgWHlXsZaZ9SP27SK_4Ku9_mpnJKF',
        cover: '/music/剛好遇見你.jpg',
		lrc: '/music/剛好遇見你.lrc'
      },
	  {
        name: 'Faded',
        artist: 'Alan Walker',
        url: 'https://drive.google.com/uc?export=download&id=1oXmEsZiE0AzctsE7yjE11pKw_a4VlhOP',
        cover: '/music/Faded.jpg',
		lrc: '/music/Faded.lrc'
      },
	  {
        name: 'TT',
        artist: 'TWICE',
        url: 'https://drive.google.com/uc?export=download&id=1k4vT8n6EXH1kejESQQbreV6E37vpIQQf',
        cover: '/music/TT.jpg',
		lrc: '/music/TT.lrc'
      },
	  {
        name: '나팔바지(NAPAL BAJI)',
        artist: 'PSY',
        url: 'https://drive.google.com/uc?export=download&id=1xLqz6K84KVKJWDNYaFPg8ZaSZmNJ7uRz',
        cover: '/music/NAPAL BAJI.jpg',
		lrc: '/music/NAPAL BAJI.lrc'
      },
	  {
        name: 'Break Beat Bark!',
        artist: '神田沙也加',
        url: 'https://drive.google.com/uc?export=download&id=1GbZRNlum1WjsHtXHxRrZh3-LYi7ZXBbx',
        cover: '/music/Break Beat Bark.jpg',
		lrc: '/music/Break Beat Bark.lrc'
      },
	  {
        name: 'Wild Rose',
        artist: "May'n (NC)",
        url: 'https://drive.google.com/uc?export=download&id=1APZ-CPaM4puJSkDJ4kHnQmPrsxJkIpe4',
        cover: '/music/Wild Rose.jpg',
		lrc: '/music/Wild Rose.lrc'
      },
	  {
        name: '布拉格廣場',
        artist: '蔡依林',
        url: 'https://drive.google.com/uc?export=download&id=156_id_AdKKmXWD4i69DWjpfAQ-j9TH29',
        cover: '/music/布拉格廣場.jpg',
		lrc: '/music/布拉格廣場.lrc'
      },
	  {
        name: '說愛你',
        artist: '蔡依林',
        url: 'https://drive.google.com/uc?export=download&id=1AWLgc0xtFrM4vbYBLm27ndan_QjDzhqM',
        cover: '/music/布拉格廣場.jpg',
		lrc: '/music/說愛你.lrc'
      },
	  {
        name: 'My Days',
        artist: '鈴木このみ',
        url: 'https://drive.google.com/uc?export=download&id=1IdeRiWzT7KXMDxo60iZtbJdRO1jAMTMw',
        cover: '/music/My Days.jpg',
		lrc: '/music/My Days.lrc'
      },
	  {
        name: '派對動物',
        artist: '五月天',
        url: 'https://drive.google.com/uc?export=download&id=1QYR-MQRZZO2FmmLvAoZOkUdakoFUx7U-',
        cover: '/music/派對動物.jpg',
		lrc: '/music/派對動物.lrc'
      },
	  {
        name: 'Me and My Broken Heart',
        artist: 'Rixton (NC)',
        url: 'https://drive.google.com/uc?export=download&id=1j-JbMtdnUvZCyIXI4BZv3gBpF6L1NX6L',
        cover: '/music/Me and My Broken Heart.jpg',
		lrc: '/music/Me and My Broken Heart.lrc'
      },
	  {
        name: '幸福了 然後呢',
        artist: 'A-Lin',
        url: 'https://drive.google.com/uc?export=download&id=1aPKdwKYEbmnDR07lcDe0svEj9cfVTfoL',
        cover: '/music/幸福了 然後呢.jpg',
		lrc: '/music/幸福了 然後呢.lrc'
      },
	  {
        name: '帥到分手',
        artist: '周湯豪',
        url: 'https://drive.google.com/uc?export=download&id=1XH4qxHWMVLLvIJk978XMQtZCeViGqjih',
        cover: '/music/帥到分手.jpg',
		lrc: '/music/帥到分手.lrc'
      },
	  {
        name: 'Lemon',
        artist: '米津玄師',
        url: 'https://drive.google.com/uc?export=download&id=1CbWp3q5-a30unNqOpCiCJl_QoIbgSTxR',
        cover: '/music/Lemon.jpg',
		lrc: '/music/Lemon.lrc'
      },
	  {
        name: '學貓叫',
        artist: '小潘潘&小峰峰',
        url: 'https://drive.google.com/uc?export=download&id=1eAj3hkJ3DeT2DBWzw5SEInGWuKbu_Mfz',
        cover: '/music/學貓叫.jpg',
		lrc: '/music/學貓叫.lrc'
      },
	  {
        name: '雨愛',
        artist: '楊丞琳',
        url: 'https://drive.google.com/uc?export=download&id=1jRvGOPniUnc4n4UuFQKlolrcj6tAHaYV',
        cover: '/music/雨愛.jpg',
		lrc: '/music/雨愛.lrc'
      },
	  {
        name: '聲聲慢',
        artist: '鄧福如',
        url: 'https://drive.google.com/uc?export=download&id=1AKQhGL1YOnAqcDeiRl9ZlbIC_daZmPEE',
        cover: '/music/聲聲慢.jpg',
		lrc: '/music/聲聲慢.lrc'
      },
	  {
        name: '稻香',
        artist: '周杰倫',
        url: 'https://drive.google.com/uc?export=download&id=1npCMwhIw-yqflk7q5pQbV6DkncyQl9b2',
        cover: '/music/稻香.jpg',
		lrc: '/music/稻香.lrc'
      },
	  {
        name: '123我愛你',
        artist: '新樂塵符-賀子玲',
        url: 'https://drive.google.com/uc?export=download&id=15P4vkrFSc4j6JDNv0g_D8HsRuIONTNVZ',
        cover: '/music/123我愛你.jpg',
		lrc: '/music/123我愛你.lrc'
      },
	  {
        name: '私奔到月球',
        artist: '五月天 (feat.陳綺貞)',
        url: 'https://drive.google.com/uc?export=download&id=1CsspOL4M4pCKAFagfVUcHl3oQRoKk0eX',
        cover: '/music/私奔到月球.jpg',
		lrc: '/music/私奔到月球.lrc'
      },
	  {
        name: '演員',
        artist: '薛之謙',
        url: 'https://drive.google.com/uc?export=download&id=1zTee-Hu25jKAbCKLKZUeF0BcIsP8bBRH',
        cover: '/music/演員.jpg',
		lrc: '/music/演員.lrc'
      },
	  {
        name: '我是誰 我是誰 我是誰',
        artist: 'MP魔幻力量',
        url: 'https://drive.google.com/uc?export=download&id=1OT62l6jGCjSGncjmbYqizhW-iIvkKSZE',
        cover: '/music/我是誰我是誰我是誰.jpg',
		lrc: '/music/我是誰我是誰我是誰.lrc'
      },
	  {
        name: '偷偷的',
        artist: 'MP魔幻力量',
        url: 'https://drive.google.com/uc?export=download&id=1BvY-vEt0xFgUujSlw9I4nX0yiJquElMK',
        cover: '/music/偷偷的.jpg',
		lrc: '/music/偷偷的.lrc'
      },
	  {
        name: '感覺犯',
        artist: 'MP魔幻力量',
        url: 'https://drive.google.com/uc?export=download&id=10twiA5YE10OXRzZq5HRufZINkRFWgdTA',
        cover: '/music/感覺犯.jpg',
		lrc: '/music/感覺犯.lrc'
      },
	  {
        name: '沒有如果',
        artist: '梁靜茹',
        url: 'https://drive.google.com/uc?export=download&id=1zK2VxyBPcCtXGvRI_mGlsOtcLEHGVdaU',
        cover: '/music/沒有如果.jpg',
		lrc: '/music/沒有如果.lrc'
      },
	  {
        name: 'Hacking to the Gate',
        artist: '伊藤香奈子',
        url: 'https://drive.google.com/uc?export=download&id=10SoFpZxTQaELkm3vq59rOcRRreuEW__j',
        cover: '/music/Hacking to the Gate.jpg',
		lrc: '/music/Hacking to the Gate.lrc'
      },
	  {
        name: 'Last Christmas',
        artist: 'Glee Cast',
        url: 'https://drive.google.com/uc?export=download&id=10hpRQ7K3clrVFog3zhpl73mQTqtI9oYO',
        cover: '/music/Last Christmas.jpg',
		lrc: '/music/Last Christmas.lrc'
      },
	  {
        name: 'Alone',
        artist: 'Alan Walker',
        url: 'https://drive.google.com/uc?export=download&id=1MHkjL4nIATRJ9z4fPYHU3Fk2Q0L_m3z0',
        cover: '/music/Alone.jpg',
		lrc: '/music/Alone.lrc'
      },
	  {
        name: 'Faded (即刻電音版)',
        artist: 'RocketGirls 101 (火箭少女)',
        url: 'https://drive.google.com/uc?export=download&id=10JalP2e5yQ2Fs80CsmfMQ__x0BDgJ0Pv',
        cover: '/music/Faded (即刻電音版).jpg',
		lrc: '/music/Faded (即刻電音版).lrc'
      },
	  {
        name: 'Closer (Aash Mehta Flip)',
        artist: 'The Chainsmokers (ft. Halsey)',
        url: 'https://drive.google.com/uc?export=download&id=1ibl8rOSUtyOx6CXyvOz1NJ8KrzVhW_l-',
        cover: '/music/Closer (Aash Mehta Flip).jpg',
		lrc: '/music/Closer (Aash Mehta Flip).lrc'
      },
	  {
        name: '歐若拉',
        artist: '張韶涵',
        url: 'https://drive.google.com/uc?export=download&id=1S4gUFR75vtxJn5grRKgrHrDLX-7T8by-',
        cover: '/music/歐若拉.jpg',
		lrc: '/music/歐若拉.lrc'
      },
	  {
        name: '好心分手',
        artist: '盧巧音&王力宏',
        url: 'https://drive.google.com/uc?export=download&id=194_6GlEovMm4BURmKLg852og9O74oyvj',
        cover: '/music/好心分手.jpg',
		lrc: '/music/好心分手.lrc'
      },
	  {
        name: '小さな恋のうた',
        artist: 'MONGOL800 (By コバソロ & 杏沙子)',
        url: 'https://drive.google.com/uc?export=download&id=1QAQ6XgHgBq48PGwiodumfqhFCowBazxt',
        cover: '/music/小さな恋のうた.jpg',
		lrc: '/music/小さな恋のうた.lrc'
      },
	  {
        name: 'あとひとつ',
        artist: 'FUNKY MONKEY BABYS (By コバソロ & こぴ)',
        url: 'https://drive.google.com/uc?export=download&id=1uJafY4DsI1YDewaiq1I4iJM9Vbwu3Ku7',
        cover: '/music/あとひとつ.jpg',
		lrc: '/music/あとひとつ.lrc'
      }
    ]
});