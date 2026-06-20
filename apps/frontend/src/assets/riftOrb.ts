// Hand-authored Lottie animation: a pulsing energy core, a breathing ring, and a
// spinning arc — in the Rift cyan/teal palette. Bundled (no fetch needed).
// 200x200, 60fps, 120-frame loop.
const riftOrb = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: "rift-orb",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "arc",
      sr: 1,
      ks: {
        o: { a: 0, k: 80 },
        r: { a: 1, k: [ { t: 0, s: [0] }, { t: 120, s: [360] } ] },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [150, 150] } },
            { ty: "st", c: { a: 0, k: [0.18, 0.9, 1, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 }, lc: 2, lj: 2 },
            { ty: "tm", s: { a: 0, k: 6 }, e: { a: 0, k: 64 }, o: { a: 0, k: 0 }, m: 1 },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 120,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "ring",
      sr: 1,
      ks: {
        o: { a: 1, k: [ { t: 0, s: [55] }, { t: 60, s: [12] }, { t: 120, s: [55] } ] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [
          { t: 0, s: [72, 72, 100], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
          { t: 60, s: [108, 108, 100], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
          { t: 120, s: [72, 72, 100] }
        ] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [120, 120] } },
            { ty: "st", c: { a: 0, k: [0.21, 0.95, 0.69, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 }, lc: 2, lj: 2 },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 120,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "core",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [
          { t: 0, s: [88, 88, 100], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
          { t: 60, s: [104, 104, 100], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
          { t: 120, s: [88, 88, 100] }
        ] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [58, 58] } },
            { ty: "fl", c: { a: 0, k: [0.18, 0.9, 1, 1] }, o: { a: 0, k: 85 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ],
      ip: 0,
      op: 120,
      st: 0,
      bm: 0
    }
  ]
};

export default riftOrb;
