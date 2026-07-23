const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const www = path.join(root, 'www');
const srcDir = path.join(root, 'src');

fs.mkdirSync(www, { recursive: true });
fs.mkdirSync(path.join(www, 'src'), { recursive: true });

fs.copyFileSync(path.join(root, 'index.html'), path.join(www, 'index.html'));
for (const f of fs.readdirSync(srcDir)) {
  fs.copyFileSync(path.join(srcDir, f), path.join(www, 'src', f));
}

const assetsPublic = path.join(
  root,
  'android/app/src/main/assets/public'
);
if (fs.existsSync(path.dirname(assetsPublic))) {
  fs.mkdirSync(path.join(assetsPublic, 'src'), { recursive: true });
  fs.copyFileSync(path.join(www, 'index.html'), path.join(assetsPublic, 'index.html'));
  for (const f of fs.readdirSync(path.join(www, 'src'))) {
    fs.copyFileSync(
      path.join(www, 'src', f),
      path.join(assetsPublic, 'src', f)
    );
  }
}

console.log('✅ www synced (index.html + src/)');
