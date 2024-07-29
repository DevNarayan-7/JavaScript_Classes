const obj = {
    func1 : function f(x){
        console.log("f called");
        return {
            func2: function g() {
                console.log("G called");
            }
        }
    }
}


obj.func1(10).func2();