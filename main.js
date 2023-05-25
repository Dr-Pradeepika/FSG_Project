function generateFibonacci() {
    var limit = parseInt(document.getElementById("limit").value);
  
    var sequence = [0, 1];
  
    for (var i = 2; i < limit; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  
    document.getElementById("result").innerHTML = "Fibonacci Sequence: " + sequence.join(", ");
  }
  