#include<bits/stdc++.h>
#include<vector>
using namespace std;
int main()
{
     int n;
    cin>>n;
    int count =0;
    int x = 5, y = 1;
    while(pow(x, y)<=n){
        count += n/pow(x, y);
        y++;
    }
    cout << count << endl;
    return 0;
}