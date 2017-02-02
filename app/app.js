import styles from './css/main.scss';

// Load here the files to be watched.
const watchFiles = [
  'index.html'
]

for(file in watchFiles) {
  require(`../public/${file}`);
}
