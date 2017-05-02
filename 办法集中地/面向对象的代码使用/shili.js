/**
 * Created by lcc on 17-5-2.
 */
//一
//1.这是在定义一个对象等于猫，而且还有name和color这两个属性。
// 大cat包含这两个小cat这样子
var cat = {
     name :'',
     color:''
}
//2.现在需要将这个原型规格的它生成两个实例


var cat1 ={};//创建一个新的空对象;
    cat1.name="大毛";
    cat1.color="黄色";

var cat2 ={};//创建一个新的空对象;
cat2.name="二毛";
cat2.color="黄色";

console.log(cat2.name)
//好了，这就是最简单的封装了，把两个属性封装在一个对象里面。
// 但是，这样的写法有两个缺点，一是如果多生成几个实例，写起来就非常麻烦
// ；二是实例与原型之间，没有任何办法，可以看出有什么联系。


//二原始模型的改变
//
// function cat(name,color) {
//      return{
//          name:name;
//          color:color;
//          }
// }
// function Cat(name,color){
//     return {
//         name:name,
//         color:color
//     };
// }
// var cat1=Cat('朱思喵','blue');
// var cat1=Cat('朱思喵1','red');
// console.log(cat1.name);