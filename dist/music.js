const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#004af7',
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
        url: 'https://www.dropbox.com/s/ads6yz9cwc5t7sx/%E5%89%8D%E5%89%8D%E5%89%8D%E4%B8%96.mp3?dl=1',
        cover: '/music/前前前世.jpg',
		lrc: '/music/前前前世.lrc',
      },
      {
        name: 'Butter-Fly',
        artist: 'コバソロ & 七穂',
        url: 'https://www.dropbox.com/s/evy7ro9uzthh23t/Butter-Fly.mp3?dl=1',
        cover: '/music/Butter-Fly.jpg',
		lrc: '/music/Butter-Fly.lrc'
      },
      {
        name: 'Catch the Moment',
        artist: 'LiSA',
        url: 'https://www.dropbox.com/s/pcrwvgtyac7a4dy/Catch%20the%20Moment.mp3?dl=1',
        cover: '/music/Catch the Moment.jpg',
		lrc: '/music/Catch the Moment.lrc'
      },
	  {
        name: 'Baby Dont Know Why',
        artist: 'Ms.OOJA (Nightcore)',
        url: 'https://www.dropbox.com/s/z56ylrcmirenxwt/Baby%20Dont%20Know%20Why.mp3?dl=1',
        cover: '/music/Baby Dont Know Why.jpg',
		lrc: '/music/Baby Dont Know Why.lrc'
      },
	  {
        name: 'LOSER',
        artist: '米津玄師',
        url: 'https://www.dropbox.com/s/ejqhblc330b99bc/LOSER.mp3?dl=1',
        cover: '/music/LOSER.jpg',
		lrc: '/music/LOSER.lrc'
      },
	  {
        name: '打上花火',
        artist: 'DAOKO × 米津玄師',
        url: 'https://www.dropbox.com/s/40rfbozfxpf2t86/%E6%89%93%E4%B8%8A%E8%8A%B1%E7%81%AB.mp3?dl=1',
        cover: '/music/打上花火.jpg',
		lrc: '/music/打上花火.lrc'
      },
	  {
        name: '光年之外',
        artist: '鄧紫棋',
        url: 'https://www.dropbox.com/s/xhyyn6367bt0nb5/%E5%85%89%E5%B9%B4%E4%B9%8B%E5%A4%96.mp3?dl=1',
        cover: '/music/光年之外.jpg',
		lrc: '/music/光年之外.lrc'
      },
	  {
        name: '再見',
        artist: '鄧紫棋',
        url: 'https://www.dropbox.com/s/uaevhz9wieblf7h/%E5%86%8D%E8%A6%8B.mp3?dl=1',
        cover: '/music/再見.jpg',
		lrc: '/music/再見.lrc'
      },
	  {
        name: '漂向北方',
        artist: '黃明志 (ft.王力宏)',
        url: 'https://www.dropbox.com/s/2n3sw9wcuh5m93y/%E6%BC%82%E5%90%91%E5%8C%97%E6%96%B9.mp3?dl=1',
        cover: '/music/漂向北方.jpg',
		lrc: '/music/漂向北方.lrc'
      },
	  {
        name: '等你下課',
        artist: '周杰倫 (ft.楊瑞代)',
        url: 'https://www.dropbox.com/s/qu7dms4tj13lrex/%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AA%B2.mp3?dl=1',
        cover: '/music/等你下課.jpg',
		lrc: '/music/等你下課.lrc'
      },
	  {
        name: '告白氣球',
        artist: '周杰倫',
        url: 'https://www.dropbox.com/s/an8fjqsp6a4j1tz/%E5%91%8A%E7%99%BD%E6%B0%A3%E7%90%83.mp3?dl=1',
        cover: '/music/告白氣球.jpg',
		lrc: '/music/告白氣球.lrc'
      },
	  {
        name: 'I Really Like You',
        artist: 'Carly Rae Jepsen (Nightcore)',
        url: 'https://www.dropbox.com/s/5r2dj9s8bjchid0/I%20Really%20Like%20You.mp3?dl=1',
        cover: '/music/I Really Like You.jpg',
		lrc: '/music/I Really Like You.lrc'
      },
	  {
        name: '終わりの世界から',
        artist: '麻枝 准×やなぎなぎ',
        url: 'https://www.dropbox.com/s/asuc3jusqr4an0p/%E7%B5%82%E3%82%8F%E3%82%8A%E3%81%AE%E4%B8%96%E7%95%8C%E3%81%8B%E3%82%89.mp3?dl=1',
        cover: '/music/終わりの世界から.jpg',
		lrc: '/music/終わりの世界から.lrc'
      },
	  {
        name: '好想你 2.0',
        artist: '黃明志 (feat.四葉草)',
        url: 'https://www.dropbox.com/s/yhxu82qy1x78kn3/%E5%A5%BD%E6%83%B3%E4%BD%A02.0.mp3?dl=1',
        cover: '/music/漂向北方.jpg',
		lrc: '/music/好想你2.0.lrc'
      },
	  {
        name: '體面',
        artist: '于文文',
        url: 'https://www.dropbox.com/s/9opjsua68jsuwyt/%E9%AB%94%E9%9D%A2.mp3?dl=1',
        cover: '/music/體面.jpg',
		lrc: '/music/體面.lrc'
      },
	  {
        name: '追光者',
        artist: '汪蘇瀧',
        url: 'https://www.dropbox.com/s/fde01oreqjgoawa/%E8%BF%BD%E5%85%89%E8%80%85.mp3?dl=1',
        cover: '/music/追光者.jpg',
		lrc: '/music/追光者.lrc'
      },
	  {
        name: '剛好遇見你',
        artist: '李玉剛',
        url: 'https://www.dropbox.com/s/fhjfuv0wvbve98c/%E5%89%9B%E5%A5%BD%E9%81%87%E8%A6%8B%E4%BD%A0.mp3?dl=1',
        cover: '/music/剛好遇見你.jpg',
		lrc: '/music/剛好遇見你.lrc'
      },
	  {
        name: 'Faded',
        artist: 'Alan Walker',
        url: 'https://www.dropbox.com/s/53cnljcol4xr739/Faded.mp3?dl=1',
        cover: '/music/Faded.jpg',
		lrc: '/music/Faded.lrc'
      },
	  {
        name: 'TT',
        artist: 'TWICE',
        url: 'https://www.dropbox.com/s/i698errl6muwnau/TT.mp3?dl=1',
        cover: '/music/TT.jpg',
		lrc: '/music/TT.lrc'
      },
	  {
        name: '나팔바지(NAPAL BAJI)',
        artist: 'PSY',
        url: 'https://www.dropbox.com/s/jkl8dmfdhhihs3h/NAPAL%20BAJI.mp3?dl=1',
        cover: '/music/NAPAL BAJI.jpg',
		lrc: '/music/NAPAL BAJI.lrc'
      }
    ]
});