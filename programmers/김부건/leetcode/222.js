// 222. Count Complete Tree Nodes
var countNodes = function (root) {
  if (!root) return 0;

  const height = getHeight(root);
  if (height === 0) return 1;

  let left = 1,
    right = 2 ** height;
  while (left <= right) {
    const mid = parseInt((left + right) / 2);

    if (findNode(mid, root, height)) left = left + 1;
    else right = right - 1;
  }

  return 2 ** height - 1 + left - 1;
};

const getHeight = (node) => {
  let height = 0;

  while (node.left) {
    node = node.left;
    height++;
  }

  return height;
};

const findNode = (target, node, height) => {
  let left = 1,
    right = 2 ** height;
  while (left < right) {
    const mid = parseInt((left + right) / 2);

    if (target <= mid) {
      node = node.left;
      right = mid;
    } else {
      node = node.right;
      left = mid + 1;
    }
  }

  return node !== null;
};

// var countNodes = function (root) {
//   if (!root) return 0;

//   return 1 + countNodes(root.left) + countNodes(root.right);
// };
