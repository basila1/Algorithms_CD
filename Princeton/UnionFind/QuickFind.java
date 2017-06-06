public class QuickFindUF {
  private int = id[]; //constructor id array, the data structure

  publc QuickFindUF(int N) { //set id of eack object to itself
    id = new int[N];
    for ( int i = 0; i < N ; i++ ) {
      id[i] = i;
    }
  }

  public boolean connected(int p, int q) { //check wether p and q are in the same component
    return id[p] == id[q];
  }

  public void union(int p, int q) {
    int pid = id[p]; //find id corresponding to the first argument
    int qid = id[q]; //find id corresponding to the second argument
    for ( int i = 0; i < id.length ; i++ ) { //And then we go through the whole array, and looking for the entries whose IDs are equal to the ID of the first argument, and set those to the ID of the second argument.
      if (id[i] == pid) { id[i] = qid;

      }
    }
  }
}
