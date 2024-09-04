package LEET_CODE.Java;

import java.math.BigInteger;
import java.util.ArrayList;

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
        if (arrayNum.length == 0)
            return null;

        if (arrayNum.length == 1) {
            return new ListNode(arrayNum[0]);
        }

        ListNode headNode = new ListNode(arrayNum[0]);

        for (int i = 1; i < arrayNum.length; i++) {
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

        BigInteger numberL1 = BigInteger.ZERO;
        BigInteger numberL2 = BigInteger.ZERO;

        int counterNumberZeroHeadL1 = 0;
        int counterNumberZeroHeadL2 = 0;

        while (headL1 != null || headL2 != null) {
            if (headL1 != null) {
                numberL1 = numberL1.multiply(BigInteger.TEN).add(BigInteger.valueOf(headL1.val));
                headL1 = headL1.next;

                if (numberL1.equals(BigInteger.ZERO)) {
                    counterNumberZeroHeadL1 += 1;
                }
            }

            if (headL2 != null) {
                numberL2 = numberL2.multiply(BigInteger.TEN).add(BigInteger.valueOf(headL2.val));
                headL2 = headL2.next;

                if (numberL2.equals(BigInteger.ZERO)) {
                    counterNumberZeroHeadL2 += 1;
                }
            }
        }

        BigInteger numberL1Revert = BigInteger.ZERO;
        BigInteger numberL2Revert = BigInteger.ZERO;

        while (!numberL1.equals(BigInteger.ZERO) || !numberL2.equals(BigInteger.ZERO)) {
            if (!numberL1.equals(BigInteger.ZERO)) {
                numberL1Revert = numberL1Revert.multiply(BigInteger.TEN).add(numberL1.mod(BigInteger.TEN));
                numberL1 = numberL1.divide(BigInteger.TEN);
            }

            if (!numberL2.equals(BigInteger.ZERO)) {
                numberL2Revert = numberL2Revert.multiply(BigInteger.TEN).add(numberL2.mod(BigInteger.TEN));
                numberL2 = numberL2.divide(BigInteger.TEN);
            }
        }

        numberL1Revert = counterNumberZeroHeadL1 == 0 ? numberL1Revert
                : numberL1Revert.multiply(BigInteger.TEN.pow(counterNumberZeroHeadL1));
        numberL2Revert = counterNumberZeroHeadL2 == 0 ? numberL2Revert
                : numberL2Revert.multiply(BigInteger.TEN.pow(counterNumberZeroHeadL2));

        BigInteger numberAddTogether = numberL1Revert.add(numberL2Revert);

        ArrayList<Integer> arrListNode = new ArrayList<>();

        if (numberAddTogether.equals(BigInteger.ZERO)) {
            arrListNode.add(0);
        }

        while (!numberAddTogether.equals(BigInteger.ZERO)) {
            arrListNode.add(numberAddTogether.mod(BigInteger.TEN).intValue());
            numberAddTogether = numberAddTogether.divide(BigInteger.TEN);
        }

        int[] intArray = new int[arrListNode.size()];
        for (int i = 0; i < arrListNode.size(); i++) {
            intArray[i] = arrListNode.get(i);
        }

        ListNode result = createListNode(intArray);

        return result;
    }

    public static void main(String[] args) {
        int[] numberListNode1 = { 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 };
        int[] numberListNode2 = { 5, 6, 4 };

        ListNode l1 = createListNode(numberListNode1);
        ListNode l2 = createListNode(numberListNode2);

        ListNode resListNode = addTwoNumbers(l1, l2);
        resListNode.showListNode(resListNode);
    }
}
