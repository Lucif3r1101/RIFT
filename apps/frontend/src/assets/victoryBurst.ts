// Hand-authored Lottie victory confetti burst, generated programmatically so we
// get many pieces without writing each layer by hand. 300x300, 60fps, 150-frame
// loop: pieces shoot out from center, tumble with gravity, then fade.
const PALETTE: [number, number, number][] = [
  [0.18, 0.9, 1], // cyan
  [0.21, 0.95, 0.69], // teal
  [1, 0.82, 0.33], // gold
  [0.79, 0.51, 1], // violet
  [1, 1, 1] // white
];

const CENTER = 150;
const PIECES = 26;
const OP = 150;

function piece(i: number) {
  // Deterministic-ish spread around the circle with jitter.
  const angle = (i / PIECES) * Math.PI * 2 + (i % 3) * 0.4;
  const radius = 70 + ((i * 37) % 60);
  const tx = CENTER + Math.cos(angle) * radius;
  const ty = CENTER + Math.sin(angle) * radius * 0.8 + 60; // gravity drop
  const color = PALETTE[i % PALETTE.length];
  const spin = (i % 2 === 0 ? 1 : -1) * (180 + (i * 53) % 360);
  const w = 8 + (i % 3) * 4;
  const h = 12 + (i % 2) * 6;

  return {
    ddd: 0,
    ind: i + 1,
    ty: 4,
    nm: `c${i}`,
    sr: 1,
    ks: {
      o: { a: 1, k: [ { t: 0, s: [0] }, { t: 8, s: [100] }, { t: 95, s: [100] }, { t: 130, s: [0] } ] },
      r: { a: 1, k: [ { t: 0, s: [0] }, { t: OP, s: [spin] } ] },
      p: {
        a: 1,
        k: [
          { t: 0, s: [CENTER, CENTER, 0], i: { x: 0.2, y: 1 }, o: { x: 0.4, y: 0 } },
          { t: 55, s: [tx, ty, 0], i: { x: 0.4, y: 1 }, o: { x: 0.6, y: 0 } },
          { t: OP, s: [tx, ty + 26, 0] }
        ]
      },
      a: { a: 0, k: [0, 0, 0] },
      s: { a: 0, k: [100, 100, 100] }
    },
    shapes: [
      {
        ty: "gr",
        it: [
          { ty: "rc", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [w, h] }, r: { a: 0, k: 2 } },
          { ty: "fl", c: { a: 0, k: [color[0], color[1], color[2], 1] }, o: { a: 0, k: 100 } },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 0,
    op: OP,
    st: 0,
    bm: 0
  };
}

// A central flash ring that expands and fades.
const flash = {
  ddd: 0,
  ind: PIECES + 1,
  ty: 4,
  nm: "flash",
  sr: 1,
  ks: {
    o: { a: 1, k: [ { t: 0, s: [0] }, { t: 6, s: [70] }, { t: 40, s: [0] } ] },
    r: { a: 0, k: 0 },
    p: { a: 0, k: [CENTER, CENTER, 0] },
    a: { a: 0, k: [0, 0, 0] },
    s: { a: 1, k: [ { t: 0, s: [20, 20, 100] }, { t: 40, s: [140, 140, 100] } ] }
  },
  shapes: [
    {
      ty: "gr",
      it: [
        { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [120, 120] } },
        { ty: "st", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 4 }, lc: 2, lj: 2 },
        { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
      ]
    }
  ],
  ip: 0,
  op: OP,
  st: 0,
  bm: 0
};

const victoryBurst = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: OP,
  w: 300,
  h: 300,
  nm: "victory-burst",
  ddd: 0,
  assets: [],
  layers: [flash, ...Array.from({ length: PIECES }, (_, i) => piece(i))]
};

export default victoryBurst;
