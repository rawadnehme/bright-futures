#!/usr/bin/env node
/**
 * Generates OG image + favicon PNGs from the brand.
 * Output: public/og-image.png (1200x630), public/favicon-32.png, public/apple-touch-icon.png
 *
 * Runs as `prebuild`, so every deploy ships fresh images that match current copy.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const pub = resolve(root, 'public');

const INK = '#0B1220';
const PAPER = '#FEFAF1';
const PAPER_DEEP = '#F9F1DF';
const AMBER = '#F5A524';

async function loadFont(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch font ${url}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function buildOg() {
  const [fraunces700, inter500, inter700] = await Promise.all([
    loadFont('https://github.com/undefinedbehavior/fraunces/raw/main/fonts/static/Fraunces-SemiBold.ttf'),
    loadFont('https://github.com/rsms/inter/raw/master/docs/font-files/Inter-Medium.woff'),
    loadFont('https://github.com/rsms/inter/raw/master/docs/font-files/Inter-Bold.woff'),
  ]).catch(async () => {
    // Fallback: use Google Fonts github mirror via jsdelivr
    const [a, b, c] = await Promise.all([
      loadFont('https://cdn.jsdelivr.net/fontsource/fonts/fraunces@latest/latin-600-normal.ttf'),
      loadFont('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500-normal.ttf'),
      loadFont('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf'),
    ]);
    return [a, b, c];
  });

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: `linear-gradient(135deg, ${PAPER} 0%, ${PAPER_DEEP} 100%)`,
          position: 'relative',
          fontFamily: 'Inter',
          color: INK,
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: '-120px',
                right: '-120px',
                width: '520px',
                height: '520px',
                borderRadius: '9999px',
                background: `${AMBER}`,
                opacity: 0.18,
                filter: 'blur(60px)',
              },
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '14px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      width: '48px',
                      height: '48px',
                      borderRadius: '9999px',
                      background: AMBER,
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: INK,
                      fontWeight: 700,
                      fontSize: '22px',
                    },
                    children: '★',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { fontFamily: 'Fraunces', fontSize: '30px', fontWeight: 600, letterSpacing: '-0.02em' },
                    children: 'BrightFutures',
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '24px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontFamily: 'Fraunces',
                      fontSize: '78px',
                      fontWeight: 600,
                      lineHeight: 1.04,
                      letterSpacing: '-0.025em',
                      maxWidth: '1060px',
                      display: 'flex',
                      flexDirection: 'column',
                    },
                    children: [
                      { type: 'span', props: { style: { display: 'flex' }, children: 'Every kid shows up.' } },
                      {
                        type: 'span',
                        props: {
                          style: { display: 'flex' },
                          children: 'We help them show up',
                        },
                      },
                      {
                        type: 'span',
                        props: {
                          style: { display: 'flex', color: AMBER },
                          children: 'ready.',
                        },
                      },
                    ],
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { fontSize: '26px', color: '#1e293b', maxWidth: '840px', fontWeight: 500 },
                    children:
                      'A student-run charity helping classmates at Bryant Middle School get the supplies they need to succeed.',
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: `1px solid ${INK}22`,
                paddingTop: '24px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: { fontSize: '20px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: INK },
                    children: 'Dearborn · Michigan',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      background: INK,
                      color: PAPER,
                      padding: '14px 24px',
                      borderRadius: '9999px',
                      fontSize: '22px',
                      fontWeight: 700,
                      gap: '10px',
                    },
                    children: ['♥', '  100% direct to students'],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Fraunces', data: fraunces700, weight: 600, style: 'normal' },
        { name: 'Inter', data: inter500, weight: 500, style: 'normal' },
        { name: 'Inter', data: inter700, weight: 700, style: 'normal' },
      ],
    },
  );

  const og = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  await writeFile(resolve(pub, 'og-image.png'), og);
  console.log('✓ og-image.png (1200×630)');

  return svg;
}

async function buildIcons() {
  const favSvg = await readFile(resolve(pub, 'favicon.svg'), 'utf8');
  const fav32 = new Resvg(favSvg, { fitTo: { mode: 'width', value: 32 } }).render().asPng();
  const apple = new Resvg(favSvg, {
    fitTo: { mode: 'width', value: 180 },
    background: PAPER,
  })
    .render()
    .asPng();
  await writeFile(resolve(pub, 'favicon-32.png'), fav32);
  await writeFile(resolve(pub, 'apple-touch-icon.png'), apple);
  console.log('✓ favicon-32.png, apple-touch-icon.png');
}

try {
  await buildOg();
  await buildIcons();
} catch (err) {
  console.error('OG generation failed:', err);
  process.exit(1);
}
