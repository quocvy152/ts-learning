package LEET_CODE.Java;
import java.util.ArrayList;

/**
 * Solution:
 * Step 1: Loop list node to convert to number (example: [2, 4, 3] -> 243)
 * Step 2: Plus two number after convert together
 * Step 3: Revert number after convert to another list node
 */

public class AddTwoNumber {
    public static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }

        public String showListNode(ListNode ln) {
            String listNode = "";

            while (ln != null) {
                System.out.println("RES: " + ln.val);
                ln = ln.next;
            }

            return listNode;
        }
    }

    public static ListNode createListNode(int[] arrayNum) {
        if(arrayNum.length == 0)
            return null;

        if(arrayNum.length == 1) {
            return new ListNode(arrayNum[0]);
        }

        ListNode headNode = new ListNode(arrayNum[0]);

        for(int i = 1; i < arrayNum.length; i++) {
            ListNode newNode = new ListNode(arrayNum[i]);
            ListNode currentNode = headNode;

            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
            currentNode = headNode;
        }

        return headNode;
    }

    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        if (l1 == null || l2 == null) {
            return null;
        }

        ListNode headL1 = l1;
        ListNode headL2 = l2;

        long numberL1 = 0;
        long numberL2 = 0;
        long numberL1Revert = 0;
        long numberL2Revert = 0;

        int counterNumberZeroHeadL1 = 0;
        int counterNumberZeroHeadL2 = 0;

        while (headL1 != null || headL2 != null) {
            if (headL1 != null) {
                numberL1 = numberL1 * 10 + (long)headL1.val;
                System.out.println("numberL1" + numberL1);
                headL1 = headL1.next;

                if(numberL1 == 0) {
                    counterNumberZeroHeadL1 += 1;
                }
            }

            if (headL2 != null) {
                numberL2 = numberL2 * 10 + (long)headL2.val;
                headL2 = headL2.next;

                if(numberL2 == 0) {
                    counterNumberZeroHeadL2 += 1;
                }
            }
        }

        while (numberL1 != 0 || numberL2 != 0) {
            if (numberL1 != 0) {
                numberL1Revert = numberL1Revert * 10 + (numberL1 % 10);
                numberL1 = numberL1 / 10;
            }

            if (numberL2 != 0) {
                numberL2Revert = numberL2Revert * 10 + (numberL2 % 10);
                numberL2 = numberL2 / 10;
            }
        }

        numberL1Revert = counterNumberZeroHeadL1 == 0 ? numberL1Revert : numberL1Revert * (long)Math.pow(10, counterNumberZeroHeadL1);
        numberL2Revert = counterNumberZeroHeadL2 == 0 ? numberL2Revert : numberL2Revert * (long)Math.pow(10, counterNumberZeroHeadL2);

        long numberAddTogether = numberL1Revert + numberL2Revert;

        ArrayList<Integer> arrListNode = new ArrayList<>();

        /**
         * Case đặc biệt cả 2 ListNode đều chỉ có phần tử bằng 0
         */
        if(numberAddTogether == 0) {
            arrListNode.add(0);
        }

        while(numberAddTogether != 0) {
            arrListNode.add((int)(numberAddTogether % 10));
            numberAddTogether = numberAddTogether / 10;
        }

        int[] intArray = new int[arrListNode.size()];
        for (int i = 0; i < arrListNode.size(); i++) {
            intArray[i] = arrListNode.get(i);
        }

        ListNode result = createListNode(intArray);

        return result;
    }

    public static void main(String[] args) {
        // int[] numberListNode1 = { 9 };
        // int[] numberListNode2 = { 1, 9, 9, 9, 9, 9, 9, 9, 9, 9 };

        // int[] numberListNode1 = { 0,8,6,5,6,8,3,5,7 };
        // int[] numberListNode2 = { 6,7,8,0,8,5,8,9,7 };

        int[] numberListNode1 = { 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1 };
        int[] numberListNode2 = { 5,6,4 };

        ListNode l1 = createListNode(numberListNode1);
        ListNode l2 = createListNode(numberListNode2);

        // l1.showListNode(l1);
        // l2.showListNode(l2);

        ListNode resListNode = addTwoNumbers(l1, l2);
        resListNode.showListNode(resListNode);
    }
} 
