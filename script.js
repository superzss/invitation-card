const musicBtn = document.getElementById('musicBtn');
const bgm = document.getElementById('bgm');
const rsvpBtn = document.getElementById('rsvpBtn');
const rsvpDialog = document.getElementById('rsvpDialog');
const closeDialog = document.getElementById('closeDialog');
const rsvpForm = document.getElementById('rsvpForm');

let musicReady = false;

function toggleMusic() {
  if (!musicReady) {
    bgm.volume = 0.4;
    musicReady = true;
  }

  if (bgm.paused) {
    bgm.play().then(() => {
      musicBtn.classList.add('playing');
    }).catch(() => {});
  } else {
    bgm.pause();
    musicBtn.classList.remove('playing');
  }
}

musicBtn.addEventListener('click', toggleMusic);

rsvpBtn.addEventListener('click', () => {
  if (typeof rsvpDialog.showModal === 'function') {
    rsvpDialog.showModal();
  } else {
    alert('当前浏览器不支持弹窗表单，请直接联系新人回复。');
  }
});

closeDialog.addEventListener('click', () => {
  rsvpDialog.close();
});

rsvpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(rsvpForm);
  const payload = {
    name: data.get('name'),
    attend: data.get('attend'),
    count: data.get('count'),
    message: data.get('message')
  };

  localStorage.setItem('wedding-rsvp', JSON.stringify(payload));
  alert('感谢回复，已收到您的回执！');
  rsvpDialog.close();
  rsvpForm.reset();
});
