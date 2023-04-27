// ill be creating a code that prints each number from 1 to 100 on a new line

// for each multiple of 3, print "Fizz" instead of the number

// for each multiple of 5, print "Buzz" instead of the number

// for numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // check if the number is a multiple of 3 and 5
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    // check if the number is a multiple of 5
    console.log("Buzz");
  } else if (i % 3 === 0) {
    // check if the number is a multiple of 3
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
// results printed in order
/* 1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz */
