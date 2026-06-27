#include <iostream>
using namespace std;
int main()
{
    int n, count = 0;
    cout << "Enter Number";
    cin >> n;

    for (int i = 1; i < n; i++)
    {
        if (n % i == 0)
        {
            count += i;
        }
    }
   if(count==n){
    cout<<"Number is perfect";
   }else{
    cout<<"Number is not Perfect";
   }
}