public class UF //contains two methods 1. connect and 2.union
UF(int N) // initilization union find data structure with N objects (0 to N - 1)
void union(int p, int q) //add connection between p and q
boolean connecten(int p, intq) //are p and q in the same component?
int find(int p) //component identifier for p(0 to N-1)
int count() //number of components
