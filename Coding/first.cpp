#include <bits/stdc++.h>
using namespace std;

void f(int n, int i) {
    if (i < 1) {
        return;
    }
    f(n, i+1); // Recur to the next number before printing
    cout << i << " "; // Print the current number after the recursive call
}

int main() {
    f(3, 1); // Start recursion from 3 to 1
    return 0;
}
