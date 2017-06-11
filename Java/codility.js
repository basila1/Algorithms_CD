function solution(A){
            var sum
            var l_sum = 0
            var r_sum

            if (!A || A.length == 0) {
                return -1
            } else if (A.length == 1) {
                sum = A[0]
            } else {
                sum = A.reduce(function(total, num){ return total + num })
            }

            for(var i = 0; i < A.length; i++){
                r_sum = sum - l_sum - A[i]
                if(l_sum == r_sum){
                  return i
                 }
                l_sum += A[i]
            }

            return -1
        }

test1 = [-1, 3, -4, 5, 1, -6, 2, 1];
console.log(solution(test1));

// function solution(A) {
//   var sum = A.reduce((a,b)=> a+b,0);
//   var sum_right;
//   var sum_left = 0;
//
//   for(i = 0; i < A.length; i++) {
//     sum_right = sum - sum_left - A[i];
//     if (sum_left === sum_right) return i;
//     sum_left += A[i];
//   }
//
//   return -1;
// }
//
// test1 = [];
// console.log(solution(test1));
