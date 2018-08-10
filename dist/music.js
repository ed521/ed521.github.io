const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#FADFA3',
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
        cover: '/music/Butter-Fly.jpg'
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
        artist: 'Nightcore',
        url: 'https://www.dropbox.com/s/z56ylrcmirenxwt/Baby%20Dont%20Know%20Why.mp3?dl=1',
        cover: '/music/Baby Dont Know Why.jpg'
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
      }
    ]
});