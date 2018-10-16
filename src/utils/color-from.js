import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import blueGrey from '@material-ui/core/colors/blueGrey';

const colors = [
  red,
  pink,
  purple,
  indigo,
  blue,
  teal,
  green,
  lightGreen,
  amber,
  orange,
  deepOrange,
  deepPurple,
  blueGrey,
];

export default function colorFrom(string) {
  try {
    let colors = [0,0,0];
    string.split('').forEach((ch,i) =>colors[i%3] += ch.charCodeAt());
    colors = colors.map(color => color % 130 + 60);
    return `rgb(${colors.join(',')})`
//    const index = string
//      .toString()
//      .split('')
//      .map(char => char.charCodeAt())
 //     .reduce((sum, num) => sum + num, 0);

//    const colorIndex = index % colors.length;

//    return colors[colorIndex][500];
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
    return blueGrey[500];
  }
}
