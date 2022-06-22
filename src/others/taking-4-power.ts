/**
 * 给定一个数量 n，先手后手依次从里面拿取 4 的幂大小的值（如1、4、16..）拿剩下 0 的玩家赢，
 * 请问对于数量 n，谁会赢，两个玩家都很聪明
 */

const winner = (n: number) => {
  // baseCase：n 为 0、2 时后手赢；n 为 1、3、4 时先手赢
  if (n < 5) {
    return n === 0 || n === 2 ? '后手' : '先手';
  }

  // 当前玩家选择拿取的值
  let base = 1;

  // 在不超过 n 的情况下，逐个尝试各种拿法
  while (base <= n) {
    // 子过程中的【后手】其实是母过程的【先手】，指的是同一个人，单对于双方来说地位不同
    if (winner(n - base) === '后手') return '先手';
    if (base > n >>> 2) break;
    base <<= 2;
  }

  // 如果所有尝试都不能让当前玩家赢，只能让另外一个玩家赢
  return '后手';
};
