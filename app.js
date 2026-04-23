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

const collectibles = [
  {
    id: 'dawnglass-compass', rarity: 'legendary', name: 'Dawnglass Compass',
    description: 'A cathedral-sized navigator once hung above the first guild caravans crossing the Ashwake salt. This palm-sized heirloom is said to be cut from the same dawnglass core, and its needle does not point north; it swings toward unfinished oaths, sealed vaults, and roads that vanished from every map but memory. When you hold it near the forge, a second horizon glows inside the face as if some lost sun is still trying to come up.',
    art: iconSquare('#1d1638', '#f2c6ff', '<circle cx="40" cy="40" r="24" fill="#2d2460" stroke="#fff0ff" stroke-width="3.5"/><circle cx="40" cy="40" r="18" fill="url(#legendaryCompassGlow)" opacity="0.95"/><path d="M40 14L45 28L59 33L45 38L40 52L35 38L21 33L35 28L40 14Z" fill="#ffd88a" opacity="0.8"/><path d="M47 28L57 23L52 33L61 42L49 41L40 51L39 39L28 34L40 31L47 28Z" fill="#f4a8ff"/><path d="M40 23L46 40L40 57L34 40L40 23Z" fill="#fff3c0" stroke="#ffe28b" stroke-width="2"/><defs><radialGradient id="legendaryCompassGlow"><stop offset="0%" stop-color="#fff5c6"/><stop offset="100%" stop-color="#7d5dff"/></radialGradient></defs>'),
  },
  {
    id: 'thronewire-diadem', rarity: 'legendary', name: 'Thronewire Diadem',
    description: 'The wirework of this crown is woven from moon-silver, furnace gold, and the black singing metal recovered from the empty throne room under Glassmere. Court records claim every ruler who wore it could hear the city walls speaking in their sleep. The diadem still hums with that buried chorus, and the forge answers back in a low, reverent tone like it recognizes the bloodline of an empire that should have stayed a myth.',
    art: iconSquare('#3b180f', '#ffb4f1', '<path d="M14 52L20 28L31 37L40 18L49 37L60 27L66 52Z" fill="#5f2433" stroke="#ffe7bb" stroke-width="3.5" stroke-linejoin="round"/><path d="M20 52H60" stroke="#fff0cc" stroke-width="4" stroke-linecap="round"/><circle cx="20" cy="28" r="4" fill="#ffd46a"/><circle cx="40" cy="18" r="5" fill="#9fe7ff"/><circle cx="60" cy="27" r="4" fill="#ff9ce8"/><path d="M27 41L34 31M46 31L53 41" stroke="#fff3d5" stroke-width="2.4" stroke-linecap="round"/>'),
  },
  {
    id: 'leviathan-heart-lantern', rarity: 'legendary', name: 'Leviathan Heart Lantern',
    description: 'Forged from the rib-hoops of a trench leviathan and set around a living ember pearl, this lantern was carried by the last beacon-keeper of the drowned harbor of Nacre Deep. Sailors believed its light could call entire fleets home through storm, fog, and death itself. Even unlit, it paints slow tides across the glass case and makes every lesser relic look like a souvenir from a story that almost mattered.',
    art: iconSquare('#0f2638', '#8cf6ff', '<path d="M30 18H50L56 28V49L40 62L24 49V28L30 18Z" fill="#153b57" stroke="#ddffff" stroke-width="3" stroke-linejoin="round"/><circle cx="40" cy="39" r="11" fill="#9df8ff" opacity="0.95"/><circle cx="40" cy="39" r="5" fill="#fff0ae"/><path d="M33 14C33 10 36 8 40 8C44 8 47 10 47 14" stroke="#c7fbff" stroke-width="3" stroke-linecap="round"/><path d="M24 49L19 55M56 49L61 55M28 28L22 31M52 28L58 31" stroke="#9feeff" stroke-width="2.4" stroke-linecap="round"/>'),
  },
  {
    id: 'bogberry-charm', rarity: 'uncommon', name: 'Bogberry Charm',
    description: 'Braided from marsh thread and lacquered in sweet bogberry syrup, this is the sort of hedgeward token apprentices buy before their first night watch on the Mire Roads. It is cheap, sticky, sincere, and quietly beloved across the guild frontier.',
    art: iconSquare('#5f4e22', '#9ad059', '<circle cx="40" cy="34" r="12" fill="#9ad059"/><circle cx="28" cy="40" r="10" fill="#7db844"/><circle cx="52" cy="42" r="10" fill="#b7ea6f"/><path d="M40 24V58" stroke="#f6ffc9" stroke-width="4" stroke-linecap="round"/>'),
  },
  {
    id: 'emberfin-scale', rarity: 'uncommon', name: 'Emberfin Scale',
    description: 'A copper-orange plate shed by the emberfin shoals that breed in the warm runoff canals below the forge district. Dockhands tuck them into their gloves for luck before long shifts, swearing the scales keep the fingers quick and the lies quicker.',
    art: iconSquare('#4f2618', '#ff9058', '<path d="M20 40C28 24 48 24 58 40C48 56 28 56 20 40Z" fill="#ff9058"/><path d="M58 40L66 30V50L58 40Z" fill="#ffd07f"/><circle cx="33" cy="38" r="3" fill="#fff0c4"/>'),
  },
  {
    id: 'mossloop-band', rarity: 'uncommon', name: 'Mossloop Band',
    description: 'A low-grade copper ring from the fen markets, left long enough in shade for velvet moss to claim the grooves. Rangers call them patience bands and trade them between shifts when the wild paths go quiet for too long.',
    art: iconSquare('#24351e', '#75bb57', '<circle cx="40" cy="40" r="17" stroke="#c8e8a6" stroke-width="8" fill="none"/><path d="M28 32C32 26 38 24 45 25" stroke="#75bb57" stroke-width="5" stroke-linecap="round"/>'),
  },
  {
    id: 'gilded-grub-token', rarity: 'uncommon', name: 'Gilded Grub Token',
    description: 'Stamped by the Lantern Row snack guild during the hungry years, when a single brass chit could still buy hot bread, pickled roots, and gossip worth more than either. Most are spent; the ones that remain circulate among collectors and suspiciously sentimental merchants.',
    art: iconSquare('#5a3a10', '#ffcf63', '<circle cx="40" cy="40" r="18" fill="#ffcf63" stroke="#fff0bb" stroke-width="4"/><path d="M32 46C35 38 45 38 48 30C50 37 46 47 38 50" stroke="#8b5b00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'),
  },
  {
    id: 'moonquartz-beetle', rarity: 'rare', name: 'Moonquartz Beetle',
    description: 'Its shell grew crystalline feeding on mineral dew in the pale caverns under Hollow Mere. Scholars prize them because moonquartz takes enchantment cleanly, while everyone else prizes them because they look like little nobles in polished armor.',
    art: iconSquare('#1c3154', '#7dd7ff', '<ellipse cx="40" cy="42" rx="14" ry="16" fill="#7dd7ff"/><path d="M40 26V58" stroke="#dcf7ff" stroke-width="4"/><path d="M27 38L18 33M27 46L18 49M53 38L62 33M53 46L62 49" stroke="#dcf7ff" stroke-width="3" stroke-linecap="round"/>'),
  },
  {
    id: 'thunderleaf-seal', rarity: 'rare', name: 'Thunderleaf Seal',
    description: 'A lacquered storm-druid sigil once pressed into travel papers for the high passes above Cindervale. The seal still crackles before rain, and caravans trust it more than most forecasters, which honestly says more about forecasters than magic.',
    art: iconSquare('#22395f', '#96b6ff', '<path d="M40 18L20 32V49L40 62L60 49V32L40 18Z" fill="#96b6ff" stroke="#edf3ff" stroke-width="3"/><path d="M44 26L34 43H41L36 55L48 38H42L44 26Z" fill="#304f9f"/>'),
  },
  {
    id: 'royal-koi-idol', rarity: 'rare', name: 'Royal Koi Idol',
    description: 'Carved in the river courts of Sel Veyra, where koi were fed pomegranate peel and treated with more ceremony than visiting envoys. Pilgrims smooth its edges during long vigils, hoping to inherit the fish-kings’ famous refusal to die quietly.',
    art: iconSquare('#4b2d4c', '#ff9fd6', '<path d="M19 40C27 27 48 26 59 40C48 54 27 53 19 40Z" fill="#ff9fd6"/><path d="M58 40L66 31V49L58 40Z" fill="#ffe4f5"/><path d="M30 33L48 47" stroke="#fff4fb" stroke-width="3"/><circle cx="33" cy="38" r="2.5" fill="#fff"/>'),
  },
  {
    id: 'sunvault-key', rarity: 'rare', name: 'Sunvault Key',
    description: 'One of the ceremonial keys cast for the sealed treasury beneath the old observatory, where sunlight was once stored in mirrored cisterns for winter rationing. No one agrees whether the vault was emptied, buried, or moved, which is exactly why everyone wants the key.',
    art: iconSquare('#5a4112', '#ffd86c', '<circle cx="32" cy="38" r="10" fill="none" stroke="#fff0b9" stroke-width="5"/><path d="M40 38H59V32H64V38H59V45H51V38" stroke="#ffd86c" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>'),
  },
  {
    id: 'starforge-signet', rarity: 'super', name: 'Starforge Signet',
    description: 'A noble signet hammered in the observatory forges where meteor-iron was worked only during eclipses. The inner band is engraved with star routes used by guild captains and oathbreakers alike, which tells you everything about how the city actually ran.',
    art: iconSquare('#593910', '#ffd76a', '<circle cx="40" cy="40" r="15" stroke="#fff1b4" stroke-width="7" fill="none"/><path d="M40 18L44 30L57 30L46 37L50 50L40 42L30 50L34 37L23 30L36 30Z" fill="#ffd76a"/>'),
  },
  {
    id: 'crown-of-cindershard', rarity: 'super', name: 'Crown of Cindershard',
    description: 'A jagged ceremonial circlet from the ash feasts held after the mountain furnaces were banked for winter. Fine ember veins still creep through the metal, pulsing faintly when the forge is hot enough to remember old songs.',
    art: iconSquare('#5c2112', '#ffae62', '<path d="M18 50L24 26L36 40L40 23L48 40L58 28L62 50Z" fill="#ffae62" stroke="#ffe7b5" stroke-width="3" stroke-linejoin="round"/><path d="M24 50H56" stroke="#ffe7b5" stroke-width="4" stroke-linecap="round"/>'),
  },
  {
    id: 'abyssal-lantern-minnow', rarity: 'super', name: 'Abyssal Lantern Minnow',
    description: 'A spectral deepwater fish preserved in blown trenchglass, modeled after the lantern shoals that once guided pearl-divers through the black reefs of Nacre Deep. Its little glow is elegant, eerie, and just bright enough to make liars look tired.',
    art: iconSquare('#13243f', '#88f1ff', '<path d="M18 40C26 27 48 27 58 40C48 53 26 53 18 40Z" fill="#88f1ff"/><path d="M58 40L66 32V48L58 40Z" fill="#dfffff"/><circle cx="40" cy="40" r="9" fill="#dfffff" opacity="0.35"/><circle cx="31" cy="37" r="3" fill="#123"/>'),
  },
  {
    id: 'auric-rift-relic', rarity: 'super', name: 'Auric Rift Relic',
    description: 'A fault-line shard plated in impossible gold and recovered from the split beneath the guild hall after the Year of Three Dawns. The official record calls it inert. The unofficial record says the stone still opens when spoken to in the right dead language.',
    art: iconSquare('#473213', '#ffd978', '<path d="M38 16L52 28L45 39L56 52L38 64L24 47L31 37L22 26L38 16Z" fill="#ffd978" stroke="#fff3c1" stroke-width="3" stroke-linejoin="round"/><path d="M38 20V60" stroke="#a16c12" stroke-width="3" stroke-dasharray="5 5"/>'),
  },
];

const rarityMeta = {
  legendary: { label: 'Legendary pull', chance: 100000, delay: 2400, css: 'legendary', burst: 'The forge opens its oldest secret.', sound: [130.81, 196, 261.63, 392, 523.25, 783.99] },
  uncommon: { label: 'Uncommon pull', chance: 50, delay: 900, css: 'uncommon', burst: 'A curious find appears!', sound: [293.66, 369.99, 440] },
  rare: { label: 'Rare pull', chance: 150, delay: 1200, css: 'rare', burst: 'A rare relic glimmers into view!', sound: [261.63, 392, 523.25, 659.25] },
  super: { label: 'Super rare pull', chance: 1000, delay: 1650, css: 'super', burst: 'A vault-tier treasure erupts from the forge!', sound: [220, 329.63, 440, 659.25, 880] },
};

const shelfConfig = [
  { rarity: 'legendary', label: 'Crown shelf · vault myths' },
  { rarity: 'super', label: 'Top shelf · exalted haul' },
  { rarity: 'rare', label: 'Middle shelf · rare haul' },
  { rarity: 'uncommon', label: 'Bottom shelf · uncommon haul' },
];

const dopamineButton = document.getElementById('dopamineButton');
const xpLayer = document.getElementById('xpLayer');
const flash = document.getElementById('flash');
const lootBurst = document.getElementById('lootBurst');
const lastGain = document.getElementById('lastGain');
const fakeLevel = document.getElementById('fakeLevel');
const oracleText = document.getElementById('oracleText');
const displayCase = document.getElementById('displayCase');
const collectionStatus = document.getElementById('collectionStatus');
const heroSkillName = document.getElementById('heroSkillName');
const itemModal = document.getElementById('itemModal');
const closeModalButton = document.getElementById('closeModalButton');
const modalItemArt = document.getElementById('modalItemArt');
const modalItemRarity = document.getElementById('modalItemRarity');
const itemModalTitle = document.getElementById('itemModalTitle');
const modalItemDescription = document.getElementById('modalItemDescription');

const buttonMessages = [
  'The grind respects your commitment.',
  'Tiny brain fireworks achieved.',
  'A mysterious clerk noted your excellence.',
  'Your fake efficiency is now legendary.',
  'An invisible crowd goes absolutely wild.',
];

const lootOracleMessages = {
  uncommon: [
    'The forge spits out a mildly exciting curiosity.',
    'A side-drop rattles onto the shelf. Respectable.',
  ],
  rare: [
    'A blue flash says the grind noticed you back.',
    'Even the oracle seems impressed by that pull.',
  ],
  legendary: [
    'The hall goes quiet. Even the forge seems surprised it yielded that.',
    'Somewhere, an archivist just felt a shiver and does not know why.',
  ],
  super: [
    'The whole room pauses. That was a ridiculous pull.',
    'The forge just flexed on probability itself.',
  ],
};

const storageKey = 'pixel-dopamine-button-collection';
const DOUBLE_TAP_DELAY_MS = 320;
const DOUBLE_TAP_DISTANCE_PX = 28;

let selectedSkill = skills[0];
let displayedLevel = 2;
let audioContext;
let foundItemIds = loadCollection();
let lastTouchEnd = { time: 0, x: 0, y: 0 };

function iconSquare(bg, accent, inner) {
  return `
    <svg viewBox="0 0 80 80" aria-hidden="true" fill="none">
      <rect x="8" y="8" width="64" height="64" rx="16" fill="${bg}" stroke="#f7e0a2" stroke-width="3" />
      <rect x="15" y="15" width="50" height="50" rx="12" fill="rgba(255,255,255,0.06)" stroke="${accent}" stroke-width="2" />
      ${inner}
    </svg>
  `;
}

function loadCollection() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCollection() {
  window.localStorage.setItem(storageKey, JSON.stringify(foundItemIds));
}

function renderButton() {
  dopamineButton.innerHTML = `
    <span class="button-core">
      ${selectedSkill.icon}
      <span>CLAIM XP</span>
    </span>
  `;
  heroSkillName.textContent = selectedSkill.name;
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

function renderDisplayCase() {
  displayCase.innerHTML = shelfConfig
    .map(({ rarity, label }) => {
      const items = collectibles.filter((item) => item.rarity === rarity);
      const foundCount = items.filter((item) => foundItemIds.includes(item.id)).length;
      return `
        <section class="display-shelf ${rarity}">
          <div class="shelf-header">
            <span class="shelf-label">${label}</span>
            <span class="shelf-count">${foundCount} / ${items.length}</span>
          </div>
          <div class="shelf-items">
            ${items.map(renderCollectionItem).join('')}
          </div>
        </section>
      `;
    })
    .join('');

  collectionStatus.textContent = `${foundItemIds.length} / ${collectibles.length} relics found`;
}

function renderCollectionItem(item) {
  const found = foundItemIds.includes(item.id);
  if (!found) {
    return `
      <button class="collection-item ${item.rarity} locked" type="button" disabled aria-label="Unknown ${item.rarity} collectible">
        <div class="placeholder-glyph">?</div>
        <span class="collection-empty">Unknown ${titleCase(item.rarity)} Relic</span>
      </button>
    `;
  }

  return `
    <button class="collection-item ${item.rarity} found" type="button" data-item-id="${item.id}">
      <div class="collection-item-art">${item.art}</div>
      <span class="collection-name">${item.name}</span>
    </button>
  `;
}

function randomXp() {
  return 12 + Math.floor(Math.random() * 389);
}

function spawnXpDrop(text, className, xOffset, yOffset, color = '') {
  const el = document.createElement('div');
  el.className = className;
  el.textContent = text;
  el.style.left = `calc(50% + ${xOffset}px)`;
  el.style.top = `calc(50% + ${yOffset}px)`;
  if (color) el.style.color = color;
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

function scheduleVoice(master, { start, freq, duration, gain = 0.08, type = 'triangle', attack = 0.015, release = 0.22, detune = 0, vibrato = 0 }) {
  const osc = audioContext.createOscillator();
  const amp = audioContext.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  if (detune) osc.detune.setValueAtTime(detune, start);
  if (vibrato) {
    osc.frequency.linearRampToValueAtTime(freq * (1 + vibrato), start + duration * 0.45);
    osc.frequency.linearRampToValueAtTime(freq, start + duration);
  }
  amp.gain.setValueAtTime(0.0001, start);
  amp.gain.exponentialRampToValueAtTime(gain, start + attack);
  amp.gain.exponentialRampToValueAtTime(0.0001, start + duration + release);
  osc.connect(amp);
  amp.connect(master);
  osc.start(start);
  osc.stop(start + duration + release + 0.02);
}

function playOriginalChime() {
  return ensureAudioContext().then(() => {
    const now = audioContext.currentTime + 0.01;
    const master = audioContext.createGain();
    master.connect(audioContext.destination);
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.19, now + 0.04);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 1.55);

    const melody = [
      { freq: 392, time: 0, duration: 0.2, gain: 0.075 },
      { freq: 523.25, time: 0.12, duration: 0.23, gain: 0.09 },
      { freq: 587.33, time: 0.27, duration: 0.26, gain: 0.085 },
      { freq: 783.99, time: 0.46, duration: 0.34, gain: 0.1, vibrato: 0.02 },
      { freq: 1046.5, time: 0.72, duration: 0.42, gain: 0.08, vibrato: 0.03 },
    ];

    const harmony = [
      { freq: 196, time: 0, duration: 0.34, gain: 0.03, type: 'sine' },
      { freq: 261.63, time: 0.12, duration: 0.34, gain: 0.035, type: 'sine' },
      { freq: 293.66, time: 0.27, duration: 0.38, gain: 0.034, type: 'sine' },
      { freq: 392, time: 0.46, duration: 0.46, gain: 0.038, type: 'triangle' },
    ];

    melody.forEach((note) => scheduleVoice(master, { start: now + note.time, freq: note.freq, duration: note.duration, gain: note.gain, type: 'triangle', vibrato: note.vibrato ?? 0 }));
    harmony.forEach((note) => scheduleVoice(master, { start: now + note.time, freq: note.freq, duration: note.duration, gain: note.gain, type: note.type }));
    scheduleVoice(master, { start: now + 0.74, freq: 1567.98, duration: 0.25, gain: 0.036, type: 'sine' });
    scheduleVoice(master, { start: now + 0.84, freq: 1760, duration: 0.2, gain: 0.028, type: 'triangle' });

    return Promise.resolve();
  });
}

function playLootFanfare(rarity) {
  const meta = rarityMeta[rarity];
  return ensureAudioContext().then(() => {
    const now = audioContext.currentTime + 0.01;
    const master = audioContext.createGain();
    master.connect(audioContext.destination);
    const isLegendary = rarity === 'legendary';
    const isSuper = rarity === 'super';
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(isLegendary ? 0.26 : isSuper ? 0.22 : 0.16, now + 0.03);
    master.gain.exponentialRampToValueAtTime(0.0001, now + (isLegendary ? 2.1 : isSuper ? 1.45 : 1.05));

    meta.sound.forEach((freq, index) => {
      scheduleVoice(master, {
        start: now + index * (isLegendary ? 0.11 : 0.08),
        freq,
        duration: isLegendary ? 0.32 : isSuper ? 0.22 : 0.18,
        gain: isLegendary ? 0.085 : isSuper ? 0.08 : 0.065,
        type: rarity === 'uncommon' ? 'triangle' : 'sine',
        vibrato: isLegendary ? 0.04 : isSuper ? 0.025 : 0.01,
      });
    });

    scheduleVoice(master, {
      start: now + (isLegendary ? 0.28 : 0.16),
      freq: isLegendary ? 659.25 : isSuper ? 987.77 : 783.99,
      duration: isLegendary ? 0.8 : 0.44,
      gain: isLegendary ? 0.06 : isSuper ? 0.055 : 0.035,
      type: 'triangle',
    });

    if (rarity !== 'uncommon') {
      scheduleVoice(master, {
        start: now + (isLegendary ? 0.56 : 0.34),
        freq: rarity === 'rare' ? 1174.66 : isLegendary ? 1760 : 1567.98,
        duration: isLegendary ? 0.5 : 0.28,
        gain: isLegendary ? 0.04 : 0.032,
        type: 'sine',
        vibrato: 0.04,
      });
    }

    if (isLegendary) {
      scheduleVoice(master, {
        start: now + 0.88,
        freq: 1046.5,
        duration: 0.9,
        gain: 0.036,
        type: 'triangle',
        vibrato: 0.05,
      });
    }

    return Promise.resolve(meta.delay);
  });
}

function rollDrop() {
  if (Math.floor(Math.random() * rarityMeta.legendary.chance) === 0) {
    return chooseMissingItem('legendary');
  }
  if (Math.floor(Math.random() * rarityMeta.super.chance) === 0) {
    return chooseMissingItem('super');
  }
  if (Math.floor(Math.random() * rarityMeta.rare.chance) === 0) {
    return chooseMissingItem('rare');
  }
  if (Math.floor(Math.random() * rarityMeta.uncommon.chance) === 0) {
    return chooseMissingItem('uncommon');
  }
  return null;
}

function chooseMissingItem(rarity) {
  const pool = collectibles.filter((item) => item.rarity === rarity && !foundItemIds.includes(item.id));
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function celebrateLoot(item) {
  const meta = rarityMeta[item.rarity];
  lootBurst.innerHTML = `
    <div class="loot-banner ${meta.css}">
      <p class="loot-rarity">${meta.label}</p>
      <h3 class="loot-title">${item.name}</h3>
      <p class="loot-copy">${meta.burst}</p>
    </div>
  `;

  spawnXpDrop(`Loot: ${item.name}!`, 'loot-trail', 0, 8, item.rarity === 'legendary' ? '#ffd8ff' : item.rarity === 'super' ? '#ffe88d' : item.rarity === 'rare' ? '#a7d7ff' : '#bef08b');
  if (item.rarity !== 'uncommon') {
    spawnXpDrop(
      item.rarity === 'legendary' ? '✦ LEGENDARY FIND ✦' : item.rarity === 'super' ? '✦ VAULT DROP ✦' : '✦ Rare find ✦',
      'loot-trail',
      0,
      -18,
      item.rarity === 'legendary' ? '#ffe4ff' : item.rarity === 'super' ? '#fff2bc' : '#cde7ff'
    );
  }

  setTimeout(() => {
    lootBurst.innerHTML = '';
  }, 1900);
}

function unlockItem(item) {
  if (foundItemIds.includes(item.id)) return;
  foundItemIds = [...foundItemIds, item.id];
  saveCollection();
  renderDisplayCase();
}

function openItemModal(itemId) {
  const item = collectibles.find((entry) => entry.id === itemId);
  if (!item || !foundItemIds.includes(item.id)) return;
  modalItemArt.innerHTML = item.art;
  modalItemRarity.textContent = `${titleCase(item.rarity)} collectible`;
  itemModalTitle.textContent = item.name;
  modalItemDescription.textContent = item.description;
  itemModal.classList.add('open');
  itemModal.setAttribute('aria-hidden', 'false');
}

function closeItemModal() {
  itemModal.classList.remove('open');
  itemModal.setAttribute('aria-hidden', 'true');
}

function triggerReward() {
  dopamineButton.classList.remove('is-firing');
  void dopamineButton.offsetWidth;
  dopamineButton.classList.add('is-firing');
  setTimeout(() => dopamineButton.classList.remove('is-firing'), 140);

  flash.classList.remove('active');
  void flash.offsetWidth;
  flash.classList.add('active');

  const xp = randomXp();
  const shouldLevel = Math.random() > 0.42;
  const lootDrop = rollDrop();

  lastGain.textContent = `+${xp} xp`;
  if (shouldLevel) {
    displayedLevel += 1;
    fakeLevel.textContent = String(displayedLevel);
  }

  oracleText.textContent = lootDrop
    ? lootOracleMessages[lootDrop.rarity][Math.floor(Math.random() * lootOracleMessages[lootDrop.rarity].length)]
    : buttonMessages[Math.floor(Math.random() * buttonMessages.length)];

  spawnXpDrop(`+${xp} ${selectedSkill.name} xp`, 'xp-drop', -4, 22);
  spawnXpDrop(`+${Math.max(7, Math.floor(xp / 3))} bonus morale`, 'xp-drop', 26, 38);
  if (shouldLevel) {
    spawnXpDrop(`${selectedSkill.name} level up!`, 'level-toast', 0, -4);
  }

  playOriginalChime().catch(() => {});
  if (lootDrop) {
    celebrateLoot(lootDrop);
    playLootFanfare(lootDrop.rarity).catch(() => {});
    unlockItem(lootDrop);
  }
}

function setSkill(skillId) {
  const nextSkill = skills.find((skill) => skill.id === skillId);
  if (!nextSkill) return;
  selectedSkill = nextSkill;
  renderButton();
  renderSkillOptions();
}

function titleCase(value) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function shouldIgnoreDoubleTapTarget(target) {
  return Boolean(
    target.closest('input, textarea, select, option, label, [contenteditable="true"]')
  );
}

function preventRapidTapZoom(event) {
  if (event.touches.length > 0 || shouldIgnoreDoubleTapTarget(event.target)) {
    return;
  }

  const touch = event.changedTouches[0];
  if (!touch) {
    return;
  }

  const now = event.timeStamp;
  const withinTime = now - lastTouchEnd.time > 0 && now - lastTouchEnd.time < DOUBLE_TAP_DELAY_MS;
  const withinDistance =
    Math.abs(touch.clientX - lastTouchEnd.x) < DOUBLE_TAP_DISTANCE_PX
    && Math.abs(touch.clientY - lastTouchEnd.y) < DOUBLE_TAP_DISTANCE_PX;

  lastTouchEnd = {
    time: now,
    x: touch.clientX,
    y: touch.clientY,
  };

  if (withinTime && withinDistance) {
    event.preventDefault();
  }
}

document.addEventListener('click', (event) => {
  const skillButton = event.target.closest('.skill-option');
  if (skillButton) {
    setSkill(skillButton.dataset.skill);
    return;
  }

  const collectionButton = event.target.closest('.collection-item[data-item-id]');
  if (collectionButton) {
    openItemModal(collectionButton.dataset.itemId);
    return;
  }

  if (event.target.closest('[data-close-modal="true"]')) {
    closeItemModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && itemModal.classList.contains('open')) {
    closeItemModal();
  }
});

document.addEventListener('touchend', preventRapidTapZoom, { passive: false });

closeModalButton.addEventListener('click', closeItemModal);
dopamineButton.addEventListener('click', triggerReward);

renderButton();
renderSkillOptions();
renderDisplayCase();
