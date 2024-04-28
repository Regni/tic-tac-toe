

export const useWinner = (squares:string[]) => {

  //all the combinations to check.
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  //cycle through all the combinations, if any of them is has the same string then return that string, x or o in this case.
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a] ;
    }
  }
  //return null if the for loop didnt find a winner
  return null;
}


