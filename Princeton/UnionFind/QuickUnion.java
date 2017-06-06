public class QuickUnionUF {
  private int id[];

  public QuickUnionUF(int N){ //set id of each object to itself!!
    id = new int[N];
    for ( int i = 0 ; i < N ; i++ ) {
      id[i] = i;
    }
  }

  private int root(int i) { //private method that implements this process of finding the root by chasing parent pointers until we get to the point where I is equal to ID of I, and if it's not equal, we just move I up one level in the tree, set I equals ID of I and return it.
    while ( i != id[i]) {
    id[i] = id[id[i]];
    i = id[i];
    }
    return i;
  }

  public boolean connected(int p, int q) { //find the root of P and the root of Q and if you check if they're equal.
    return root(p) === root(q);
  }

  public void union(int p, int q) { //change root of p to point to root of q
    int i = root(p);
    int j = root(q);
    id[i] = j;
  }
}
