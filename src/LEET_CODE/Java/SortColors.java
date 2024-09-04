package LEET_CODE.Java;

public class SortColors {
    public static void sortColors(int[] nums) {
        for(int i = 0; i < nums.length - 1; i++) {
            int tempMin = i;
            for(int j = i + 1; j < nums.length; j++) {
                if(nums[tempMin] > nums[j]) {
                    tempMin = j;
                }
            }
            int tempValue = nums[i];
            nums[i] = nums[tempMin];
            nums[tempMin] = tempValue;
        }
    }

    public static void showColors(int[] nums) {
        for(int i = 0; i < nums.length; i++) {
            System.out.println("a[" + i +"]" + " = " + nums[i]);
        }
    }

    public static void main(String[] args) {
        // int[] testcaseOne = {2,0,2,1,1,0};
        // sortColors(testcaseOne);

        int[] testcaseTwo = {2,0,1};
        sortColors(testcaseTwo);

        showColors(testcaseTwo);

        System.out.println("Main program");
    }
}
