package LEET_CODE.Java;

import java.util.ArrayList;

/**
 * 
 * Example 1:
 * Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled
 * by the battery"
 * Output: "the cat was rat by the bat"
 * 
 * Example 2:
 * Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
 * Output: "a a b c"
 */
public class ReplaceWord {
    public static void main(String[] args) {
        // String sentence = "the cattle was rattled by the battery"; // => output: "the cat was rat by the bat"
        // String[] dictionary = { "cat", "bat", "rat" };

        String sentence = "aadsfasf absbs bbab cadsfafs"; // => output: "the cat was rat by the bat"
        String[] dictionary = { "a","b","c" };

        String[] words = sentence.split(" ");

        ArrayList<String> arrResult = new ArrayList<>();


        for (String word : words) {
            String wordTemp = "";
            for (String wordInDict : dictionary) {
                if(word.startsWith(wordInDict)){
                    if(wordTemp == "") {
                        wordTemp = wordInDict;
                    } else {
                        if(wordInDict.length() < wordTemp.length()) {
                            wordTemp = wordInDict;
                        }
                    }
                }
            }
            
            if(wordTemp == ""){
                arrResult.add(word);
            } else {
                arrResult.add(wordTemp);
            }
        }
    
        String result = String.join(" ", arrResult);
        System.out.println("wordTemp " + result);
    }

}