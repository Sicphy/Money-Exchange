// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var some = currency;
    var h = 50, q = 25, d = 10, n = 5, p = 1;

    var o = {H: 0, Q: 0, D: 0, N: 0, P: 0};

    if(some <= 0) {
        o = {};
        return o;
    }

    if(some > 10000) {
        o = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return o;
    }

    while(some != 0) {
        some -= h;
        if(some < 0) {
            some +=h;
            some -=q;
            if(some < 0) {
                some += q;
                some -=d;
                if(some < 0) {
                    some +=d;
                    some -= n;
                    if(some < 0) {
                        some +=n;
                        some -=p;
                        o.P++;
                    }
                    else
                        o.N++;
                }
                else
                    o.D++;
            }
            else
                o.Q++;
        }
        else
            o.H++;

    }


    if(o.H === 0)
        delete o.H;

    if(o.P === 0)
        delete o.P;

    if(o.N === 0)
        delete o.N;

    if(o.D === 0)
        delete o.D;

    if(o.Q === 0)
        delete o.Q;

    return o;

}
