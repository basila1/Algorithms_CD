class Solution {
	public static int solution2(String S) {
		int count_current = 0;
		int highest_count = 0;

		//Checks for punctuation, and interprets them as a new sentence
		for (int i = 0; i < S.length(); i++) {
			if (S.substring(i, i + 1).equals(".")
					|| S.substring(i, i + 1).equals("?")
					|| S.substring(i, i + 1).equals("!")) {
				//Compares the highest word count to the current count
				if (count_current > highest_count) {
					highest_count = count_current;
					count_current = 0;
				}
				//Checks for Space between words and increment word count
			} else if (S.substring(i, i + 1).equals(" ")) {

				count_current++;

			}
		}

		return highest_count;
	}
}
