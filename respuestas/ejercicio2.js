
function movie(cardes, ticket, perc) 
{
    var n=3;
    var tick_price;
    var temp=ticket;
    var total=0;
    
    while(true)
    {
        tick_price=ticket*n;
        temp*=perc;
        total+=temp;

        if(tick_price>Math.ceil(total+cardes))

        {
            break;
        }
        n++;
    }
    console.log(n)
    return n;
} 
