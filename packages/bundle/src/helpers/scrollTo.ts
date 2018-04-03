import jump from 'jump.js';
import { debounce } from './debounce';

const nodes = new Map();

const registerNode = (string) => {
  const node = document.querySelector(string.split(' ').map(i => '.' + i).join(''));
  nodes.set(string, node);
  return node;
}

export const scrollTo = debounce((selector) => {
  if (!document) return;
  const node = nodes.get(selector) || registerNode(selector);
  const { top } = node.getBoundingClientRect();
  if (top > 0) return;
  return jump(node);
}, 200);