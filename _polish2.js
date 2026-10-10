const fs = require('fs');
let h = fs.readFileSync('index.html','utf8');

// 1. Idées du moment → nouveautés des dernières passes
h = h.replace(/const tips=\[[^\]]*\]/,
`const tips=["🎬 Orahala, le Sahara en grand écran : mardi 13 oct, 20h, Ecrin d'Éghezée","🎶 DINE en concert : jeudi 15 oct, Ecrin d'Éghezée","🎹 Hans Zimmer & Silvestri en symphonique : mer 11 nov, Mons","🎤 Kody « Évolué » : jeu 12 nov, Théâtre Royal de Mons","🌙 Bains de gongs nocturnes : 9 nov & 7 déc, La Tricoterie","✨ Mons en Lumières : 27-31 janvier 2027 (gratuit)","🦋 Vrouwenfestival à Oud-Heverlee : 18-22 août 2027 — à 20 min de chez toi","🌅 Edenya à Pairi Daiza : 750 papillons sous un dôme de 1 500 m²"]`);

// 2. Version footer + compteur dynamique
h = h.replace(/\$\("#upd"\)\.textContent="[^"]*";/,
`$("#upd").textContent="10 octobre 2026 · v28 — 2026 & 2027, veille 8 canaux";
$("#cnt").textContent=E.length;`);

fs.writeFileSync('index.html', h);
const m = h.match(/<script>([\s\S]*?)<\/script>/);
try{ new Function(m[1]); console.log('JS SYNTAX OK'); }
catch(e){ console.log('SYNTAX ERROR:', e.message); process.exit(1); }
console.log('tips nouveaux :', h.includes('Orahala, le Sahara') ? '✓' : '✗',
            '| compteur :', h.includes('$("#cnt").textContent=E.length') ? '✓' : '✗',
            '| version :', h.includes('v28 — 2026') ? '✓' : '✗');
