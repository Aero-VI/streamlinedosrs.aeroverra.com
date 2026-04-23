const skills = [
  {
    id: 'embercraft',
    name: 'Embercraft',
    icon: `
      <svg viewBox="0 0 80 80" aria-hidden="true" class="button-icon" fill="none">
        <circle cx="40" cy="40" r="34" fill="#5f2d14" stroke="#ffda85" stroke-width="4" />
        <path d="M40 16C47 24 53 29 53 38C53 48 46 56 40 61C34 56 27 48 27 38C27 29 33 24 40 16Z" fill="#ff8c3a" />
        <path d="M40 27C43 31 46 35 46 40C46 46 43 50 40 54C37 50 34 46 34 40C34 35 37 31 40 27Z" fill="#ffe182" />
      </svg>
    `,
  },
  {
    id: 'reefcutting',
    name: 'Reefcutting',
    icon: `
      <svg viewBox="0 0 80 80" aria-hidden="true" class="button-icon" fill="none">
        <circle cx="40" cy="40" r="34" fill="#163f4d" stroke="#b7f6ff" stroke-width="4" />
        <path d="M24 49L40 20L56 49L40 58L24 49Z" fill="#6fd7f2" stroke="#dffcff" stroke-width="2.5" />
        <path d="M40 20V58" stroke="#dffcff" stroke-width="2.5" opacity="0.8" />
        <path d="M24 49L56 49" stroke="#dffcff" stroke-width="2.5" opacity="0.8" />
      </svg>
    `,
  },
  {
    id: 'mossmanship',
    name: 'Mossmanship',
    icon: `
      <svg viewBox="0 0 80 80" aria-hidden="true" class="button-icon" fill="none">
        <circle cx="40" cy="40" r="34" fill="#233f19" stroke="#d6f28d" stroke-width="4" />
        <path d="M41 18C53 25 58 38 56 51C44 53 32 48 24 37C27 27 33 20 41 18Z" fill="#7ac85b" />
        <path d="M27 52C35 44 44 39 54 36" stroke="#efffc6" stroke-width="3" stroke-linecap="round" />
        <path d="M32 45L26 37" stroke="#efffc6" stroke-width="2.2" stroke-linecap="round" />
        <path d="M40 40L35 31" stroke="#efffc6" stroke-width="2.2" stroke-linecap="round" />
      </svg>
    `,
  },
  {
    id: 'stormlore',
    name: 'Stormlore',
    icon: `
      <svg viewBox="0 0 80 80" aria-hidden="true" class="button-icon" fill="none">
        <circle cx="40" cy="40" r="34" fill="#2d2458" stroke="#d7c0ff" stroke-width="4" />
        <path d="M45 17L27 43H39L34 63L54 35H42L45 17Z" fill="#a98cff" stroke="#efe6ff" stroke-width="2.2" stroke-linejoin="round" />
      </svg>
    `,
  },
  {
    id: 'coinwhispering',
    name: 'Coinwhispering',
    icon: `
      <svg viewBox="0 0 80 80" aria-hidden="true" class="button-icon" fill="none">
        <circle cx="40" cy="40" r="34" fill="#4a2f12" stroke="#ffe5a4" stroke-width="4" />
        <circle cx="40" cy="40" r="16" fill="#ffc94d" stroke="#fff1bd" stroke-width="3" />
        <path d="M33 40H47" stroke="#8f5a00" stroke-width="3" stroke-linecap="round" />
        <path d="M40 33V47" stroke="#8f5a00" stroke-width="3" stroke-linecap="round" />
        <circle cx="40" cy="40" r="23" stroke="#d4931f" stroke-width="3" stroke-dasharray="3 5" />
      </svg>
    `,
  },
];

const dopamineButton = document.getElementById('dopamineButton');
const xpLayer = document.getElementById('xpLayer');
const flash = document.getElementById('flash');
const lastGain = document.getElementById('lastGain');
const fakeLevel = document.getElementById('fakeLevel');
const oracleText = document.getElementById('oracleText');

const buttonMessages = [
  'The grind respects your commitment.',
  'Tiny brain fireworks achieved.',
  'A mysterious clerk noted your excellence.',
  'Your fake efficiency is now legendary.',
  'An invisible crowd goes absolutely wild.',
];

let selectedSkill = skills[0];
let displayedLevel = 2;
let audioContext;

function renderButton() {
  dopamineButton.innerHTML = `
    <span class="button-core">
      ${selectedSkill.icon}
      <span>CLAIM XP</span>
    </span>
  `;
}

function renderSkillOptions() {
  const grid = document.getElementById('skillGrid');
  grid.innerHTML = skills
    .map((skill, index) => {
      const bragLevel = 100 + index;
      return `
        <button class="skill-option ${skill.id === selectedSkill.id ? 'active' : ''}" data-skill="${skill.id}" type="button">
          ${skill.icon.replace('button-icon', 'skill-icon')}
          <span>
            <span class="skill-name">${skill.name}</span>
            <span class="skill-level">Lv. ${bragLevel + 1} (everyone else: ${bragLevel})</span>
          </span>
        </button>
      `;
    })
    .join('');
}

function randomXp() {
  return 12 + Math.floor(Math.random() * 389);
}

function spawnXpDrop(text, className, xOffset, yOffset) {
  const el = document.createElement('div');
  el.className = className;
  el.textContent = text;
  el.style.left = `calc(50% + ${xOffset}px)`;
  el.style.top = `calc(50% + ${yOffset}px)`;
  xpLayer.appendChild(el);
  el.addEventListener('animationend', () => el.remove(), { once: true });
}

function ensureAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    return audioContext.resume();
  }
  return Promise.resolve();
}

function playOriginalChime() {
  return ensureAudioContext().then(() => {
    const now = audioContext.currentTime + 0.02;
    const master = audioContext.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.connect(audioContext.destination);
    master.gain.exponentialRampToValueAtTime(0.22, now + 0.04);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 1.42);

    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, index) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = index % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.12);
      gain.gain.setValueAtTime(0.0001, now + index * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.17 - index * 0.02, now + index * 0.12 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.12 + 0.5);
      osc.connect(gain);
      gain.connect(master);
      osc.start(now + index * 0.12);
      osc.stop(now + index * 0.12 + 0.55);
    });

    const sparkle = audioContext.createOscillator();
    const sparkleGain = audioContext.createGain();
    sparkle.type = 'square';
    sparkle.frequency.setValueAtTime(1318.51, now + 0.42);
    sparkle.frequency.exponentialRampToValueAtTime(1760, now + 0.82);
    sparkleGain.gain.setValueAtTime(0.0001, now + 0.42);
    sparkleGain.gain.exponentialRampToValueAtTime(0.08, now + 0.46);
    sparkleGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.24);
    sparkle.connect(sparkleGain);
    sparkleGain.connect(master);
    sparkle.start(now + 0.42);
    sparkle.stop(now + 1.26);

    return new Promise((resolve) => {
      setTimeout(resolve, 1450);
    });
  });
}

async function triggerReward() {
  dopamineButton.disabled = true;
  dopamineButton.classList.add('is-firing');
  flash.classList.remove('active');
  void flash.offsetWidth;
  flash.classList.add('active');

  const xp = randomXp();
  const shouldLevel = Math.random() > 0.42;
  lastGain.textContent = `+${xp} xp`;
  if (shouldLevel) {
    displayedLevel += 1;
    fakeLevel.textContent = String(displayedLevel);
  }
  oracleText.textContent = buttonMessages[Math.floor(Math.random() * buttonMessages.length)];

  spawnXpDrop(`+${xp} ${selectedSkill.name} xp`, 'xp-drop', -4, 22);
  spawnXpDrop(`+${Math.max(7, Math.floor(xp / 3))} bonus morale`, 'xp-drop', 26, 38);
  if (shouldLevel) {
    spawnXpDrop(`${selectedSkill.name} level up!`, 'level-toast', 0, -4);
  }

  try {
    await playOriginalChime();
    await new Promise((resolve) => setTimeout(resolve, 320));
  } finally {
    dopamineButton.disabled = false;
    dopamineButton.classList.remove('is-firing');
  }
}

function setSkill(skillId) {
  const nextSkill = skills.find((skill) => skill.id === skillId);
  if (!nextSkill) return;
  selectedSkill = nextSkill;
  renderButton();
  renderSkillOptions();
}

document.addEventListener('click', (event) => {
  const skillButton = event.target.closest('.skill-option');
  if (skillButton) {
    setSkill(skillButton.dataset.skill);
  }
});

dopamineButton.addEventListener('click', triggerReward);

renderButton();
renderSkillOptions();
