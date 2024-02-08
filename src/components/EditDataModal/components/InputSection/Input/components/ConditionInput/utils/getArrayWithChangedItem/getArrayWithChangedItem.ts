export const getArrayWithChangedItem = <T>(arr: T[], element: T, idx: number) =>
  arr.reduce<T[]>((acc, _, curIdx) => {
    acc[curIdx] = curIdx === idx ? element : arr[curIdx];

    return acc;
  }, []);
