let read = require('readline-sync');
let myjson = require('./hotel.json');

search = () => {
    let name = read.question('Enetr the Hotel name');
    let result = myjson.Hotels.forEach(value => {
        //console.log("Hotel name is :" +value.Name );
        if (value.Name == name) {
            console.log("successfully found hotel:\n" + value.Name);
            console.log("----------------------------------------");
            console.log("check the availablity of Hotel");
            
             areBookingsPossible= (arrival, departure, n, k) => {
                var ans = [];

                // create a common vector both arrivals
                // and departures.
                for (var i = 0; i < n; i++) {
                    ans.push([arrival[i], 1]);
                    ans.push([departure[i], 0]);
                }

                // sort the vector
                ans.sort();

                var curr_active = 0, max_active = 0;

                for (var i = 0; i < ans.length; i++) {

                    // if new arrival, increment current
                    // guests count and update max active
                    // guests so far
                    if (ans[i][1] == 1) {
                        curr_active++;
                        max_active = Math.max(max_active,
                            curr_active);
                    }

                    // if a guest departs, decrement
                    // current guests count.
                    else
                        curr_active--;
                }

                // if max active guests at any instant
                // were more than the available rooms,
                // return false. Else return true.
                return (k >= max_active);
            }

            var arrival = [1, 3, 5];
            var departure = [2, 6, 8];
            var n = arrival.length;
            console.log(areBookingsPossible(arrival,
                departure, n, 3)
                ? "Yes Romm is available on that Days"
                : "No Room  is not available on that Day");



        }
    })
}

check = () => {
 let name = read.question('Enter the name of hotel')
 let res = myjson.Hotels.forEach(value => {
     if(value.Name == name) {
         console.log("CheckIn date is :"   +value.CheckIn);
         console.log(" CheckOut Date is :" + value.CheckOut);
         let price = value.price;
         console.log("Per day Price of the  Hotel is:" +price);
         console.log("---------------------------------------");
         let date1 = new Date(value.CheckIn);
         let date2 = new Date(value.CheckOut);
         let Difference_in_Time  = date2.getTime() -date1.getTime();
         let Difference_in_Days = Difference_in_Time / (1000 * 3600 * 24);
        console.log("Total no of Days stayed in hotel is : " + Difference_in_Days);
        let totalPrice = Difference_in_Days * price ;
        console.log("total amount he paid For the hotel :" +totalPrice);
     }
 }
    )

}
module: { search ,check}
