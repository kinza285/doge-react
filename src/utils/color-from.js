import blueGrey from '@material-ui/core/colors/blueGrey';

export default function colorFrom(string) {
  try {
    let colors = [0, 0, 0];
    // eslint-disable-next-line
    string.split('').forEach((ch, i) => (colors[i % 3] += ch.charCodeAt()));
    colors = colors.map(color => (color % 130) + 60);
    return `rgb(${colors.join(',')})`;
  } catch (e) {
    return blueGrey[500];
  }
}
