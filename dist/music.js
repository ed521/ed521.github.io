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
    listMaxHeight: 120,
    lrcType: 3,
    audio: [
      {
        name: "前前前世",
        artist: 'RADWIMPS',
        url: '/music/前前前世.mp3',
        cover: '/music/前前前世.jpg',
		lrc: '/music/前前前世.lrc',
      },
      {
        name: 'Butter-Fly',
        artist: 'コバソロ & 七穂',
        url: '/music/Butter-Fly.mp3',
        cover: '/music/Butter-Fly.jpg'
      },
      {
        name: 'Catch the Moment',
        artist: 'LiSA',
        url: '/music/Catch the Moment.mp3',
        cover: '/music/Catch the Moment.jpg',
		lrc: '/music/Catch the Moment.lrc'
      },
	  {
        name: 'Baby Dont Know Why',
        artist: 'Nightcore',
        url: '/music/Baby Dont Know Why.mp3',
        cover: '/music/Baby Dont Know Why.jpg'
      },
	  {
        name: '打上花火',
        artist: 'DAOKO × 米津玄師',
        url: '/music/打上花火.mp3',
        cover: '/music/打上花火.jpg',
		lrc: '/music/打上花火.lrc'
      },
	  {
        name: '光年之外',
        artist: '鄧紫棋',
        url: '/music/光年之外.mp3',
        cover: '/music/光年之外.jpg',
		lrc: '/music/光年之外.lrc'
      },
	  {
        name: '漂向北方',
        artist: '黃明志 (ft.王力宏)',
        url: '/music/漂向北方.mp3',
        cover: '/music/漂向北方.jpg',
		lrc: '/music/漂向北方.lrc'
      }
    ]
});