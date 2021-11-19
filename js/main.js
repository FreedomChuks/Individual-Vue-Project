var app = new Vue ({
    el: "#app-container",
    data:{
        homepage: 'Browse Lessons',
        cartpage: 'Shopping Cart',
        showProduct: true,
        term: '',
        user:{
            name: '',
            phone: '',
        },
        lessons: lessons,
        cart: [],
        sort: {
            sortingMethod: "location",
            sortingOrder: "ascending",
        },
    },
    methods: {
        // Adds Product to cart
        addToCart: function (lesson) {
            this.cart.push(lesson);    
        },
        // Removes an item from the cart
        removeFromCart: function(lesson, cart){
            this.cart.splice(this.cart.indexOf(lesson), 1);
        },
        // Checks the amount of each product in the cart
        canAddToCart(lesson){
            return lesson.availablespace > this.cartCount(lesson);
        },
        // Returns the number of a product type in the cart
        cartCount(id){
            let count = 0;
            for(let i = 0; i < this.cart.length; i++){
                if(this.cart[i] === id){
                    count++;
                }
            }
            return count;
        },
        // Display shopping cart page
        showShoppingCartPage: function(){
            this.showProduct = this.showProduct ? false : true;
        },
        // Search For lessons
        searchLessons: function(){
            this.lessons = lessons;
            this.lessons = this.lessons.filter(lesson => lesson.subject.toLowerCase().includes(this.term) == true || lesson.location.toLowerCase().includes(this.term));
        },
        submitForm(user) {
            alert('Cheers '+ user.name + ' ,your order has been successfully submitted');   
        },
    },
    computed: {
        //returns length of the cart items
            cartItemCount: function() {
                return this.cart.length || "";
            },
            sortedLessons(lessons, sort){
                //the comparison that defines the order

                if(this.sort.sortingMethod == "location" && this.sort.sortingOrder === "ascending" ){
                function compare (a, b){
                    if (a.location > b.location) return 1;
                    if (a.location < b.location) return -1;
                    return 0;
                }
                
                }else if(this.sort.sortingMethod == "location" && this.sort.sortingOrder === "descending" ){
                    function compare (a, b){
                        if (a.location < b.location) return 1;
                        if (a.location > b.location) return -1;
                        return 0;
                    }
                }else if(this.sort.sortingMethod === "price" && this.sort.sortingOrder === "ascending" ){
                    function compare (a, b){
                        if (a.price > b.price) return 1;
                        if (a.price < b.price) return -1;
                        return 0;
                    }
                }else if(this.sort.sortingMethod === "price" && this.sort.sortingOrder === "descending" ){
                    function compare (a, b){
                        if (a.price < b.price) return 1;
                        if (a.price > b.price) return -1;
                        return 0;
                    }
                }else if(this.sort.sortingMethod == "subject" && this.sort.sortingOrder === "ascending" ){
                    function compare (a, b){
                        if (a.subject > b.subject) return 1;
                        if (a.subject < b.subject) return -1;
                        return 0;
                    }
                }else if(this.sort.sortingMethod == "subject" && this.sort.sortingOrder === "descending" ){
                    function compare (a, b){
                        if (a.subject < b.subject) return 1;
                        if (a.subject > b.subject) return -1;
                        return 0;
                    }
                }else if(this.sort.sortingMethod == "availablespace" && this.sort.sortingOrder === "ascending" ){
                    function compare (a, b){
                        if (a.availablespace > b.availablespace) return 1;
                        if (a.availablespace < b.availablespace) return -1;
                        return 0;
                    }
                }else if(this.sort.sortingMethod == "availablespace" && this.sort.sortingOrder === "descending" ){
                    function compare (a, b){
                        if (a.availablespace < b.availablespace) return 1;
                        if (a.availablespace > b.availablespace) return -1;
                        return 0;
                    }
                }
                    //sort 'productArray' array and return it
                    return this.lessons.sort(compare);
            },
    }
})