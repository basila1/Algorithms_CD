class Solution {
  public static boolean PerfectSqur(long i) {
    long currentsqrt = (long) Math.sqrt(i * 1.0);
    if (currentsqrt * currentsqrt == i) {
      return true;
    }
    return false;
  }

  public static int solution(int A, int B) {
    int Count = 0;

    for (int i = A; i <= B; i++) {
      if (PerfectSqur(i)) {
        Count++;
      }
    }
    return Count;
  }
}
