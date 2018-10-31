$ajax({
    url:"http://melkban24.ir/city/json",
    type='GET',
    dataType:'json',
    contentType="application/json",
    secure:true,
    success:function(data){
        console.log(data.tickets.length);
        for(i=0;i<data.tickets.length;i++){
            console.log(data.tickets[i]);

        }
    },
});