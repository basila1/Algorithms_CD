double[] a; //declaration
a = new double[N]; //creation
for (int i = 0; i < N ; i++ ) {
  a[i] = 0.0; //initilization
}

//short form
double[] a = new double[N];

//initilization declaration
int[] a = { 1, 2, 3, 4, 5, 6};
////////////////////////////////////////////
int[] a = new int[N];
...
a[i] = 1234;
...
int[] b = a;
...
b[i] = 5678;   // a[i] is now 5678.
