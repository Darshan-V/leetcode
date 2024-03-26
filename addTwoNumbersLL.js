const addTwoNumbers = function (l1, l2) {
  let head = null
  let temp = null
  let carry = 0
  while (l1 !== null || l2 !== null) {
    let sum = carry
    if (l1 != null) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2 != null) {
      sum += l2.val
      l2 = l2.next
    }
    let node = new ListNode(Math.floor(sum) % 10)
    carry = Math.floor(sum / 10)
    if (temp == null) {
      temp = head = node
    } else {
      temp.next = node
      temp = temp.next
    }
  }

  if (carry > 0) {
    temp.next = new ListNode(carry)
  }
  return head
}

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

let head1 = new ListNode(2)
head1.next = new ListNode(4)
head1.next.next = new ListNode(3)

let head2 = new ListNode(5)
head2.next = new ListNode(6)
head2.next.next = new ListNode(4)

let result = addTwoNumbers(head1, head2)
let s = ""
while (result !== null) {
  s += result.val + " "
  result = result.next
}

addTwoNumbers([1, 0, 2], [3, 0, 1, 4])
