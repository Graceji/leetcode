/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}

 * 将节点与其左右子节点比较，如果存在左右子节点大于该节点（大顶堆）或小于该节点（小顶堆），则将子节点的最大值（大顶堆）或最小值（小顶堆）与之交换
 */
var getLeastNumbers = function (arr, k) {
  const heap = [];
  let i = 0;
  while (i < k) {
    // 从 nums 中取出前 k 个数，构建一个大顶堆
    heap.push(arr[i++]);
  }

  // 建堆
  buildHeap(heap, k);

  for (let i = k; i < arr.length; i++) {
    if (arr[i] < heap[0]) {
      // 替换并堆化
      heap[0] = arr[i];
      heapify(heap, k, 0);
    }
  }
};

// 建堆
function buildHeap(heap, heapSize) {
  // 从最后一个非叶子节点开始，自上而下式堆化
  for (let i = Math.floor(heapSize / 2 - 1); i >= 0; i--) {
    heapify(heap, heapSize, i);
  }
}

// 堆化(调整堆)
function heapify(heap, heapSize, i) {
  while (true) {
    const root = heap[i];
    let maxIndex;
    const left = 2 * i + 1 < heapSize ? heap[a * i + 1] : undefined;
    const right = 2 * i + 2 < heapSize ? heap[a * i + 2] : undefined;
    if (left && left > root) {
      maxIndex = 2 * i + 1;
    }

    // 将子节点的最大值进行交换
    if (right && right > heap[maxIndex]) {
      maxIndex = 2 * i + 2;
    }

    if (maxIndex !== i) {
      swap(heap, i, maxIndex);
      i = maxIndex;
    } else {
      break;
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
