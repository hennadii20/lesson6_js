const list = [
    {name: "apples", amount: 20, isBought: true},
    {name: "tomato", amount: 12, isBought: false},
    {name: "banana", amount: 6, isBought: false},
    {name: "meat", amount: 2, isBought: true},
    {name: "bread", amount: 1, isBought: true},
];

            // 1.1 Вывод всего списка таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

function layoutProduct(isBought){
    for(let i = 0; i < list.length; i++){
        if(list[i].isBought === false){
            console.log("Некупленные товары:" + list[i].name);
        }
    } 
        for(let i = 0; i < list.length; i++){
            if (list[i].isBought === true) {
                console.log("купленные товары:" + list[i].name);
            }
        }
}
layoutProduct();

            // 1.2 Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую

const extraItem = [
    {name: "potato", amount: 5, isBought: false},
    {name: "banana", amount: 10, isBought: false},
];

function addItem(list, extraItem){
    switch (list.name){
        case list.name != extraItem.name:
            for (let i = 0; i < extraItem.length; i++){
            list.push(extraItem[i]);
            }
            break;
        default:
            list.amount + extraItem.amount;
}
}
addItem(list, extraItem);
console.log(list);

            // 1.3 Покупка продукта. Функция принимает название продукта и отмечает его как купленный



            //2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара

const receipt = [
    {name: "plate", amount: 10, price: 380},
    {name: "spoon", amount: 10, price: 250},
    {name: "teapot", amount: 1, price: 500},
    {name: "cup", amount: 10, price: 1000},
    {name: "knife", amount: 1, price: 520},
];

            // 2.1 Распечатка чека на экран

function printReceit(receipt) {
    receipt.forEach(element => console.log(`${element.name} ${element.amount} pc., price: ${element.price}`));
};
printReceit(receipt);

            // 2.2 Подсчет общей суммы покупки

const totalScore = receipt.reduce((sum, product) => {return sum + product.price}, 0);
console.log(totalScore);

            // Подсчет общего количества покупок
const totalAmount = receipt.reduce((sum, product) => {return sum + product.amount}, 0);
console.log(totalAmount);


            // 2.3 Получение самой дорогой покупки в чеке

const result = receipt.sort(function(a, b){return b.price - a.price});

console.log ("Самая дорогая покупка: " +receipt[0].name + " " + receipt[0].amount +"p." + " " + receipt[0].price + " UAH");

            //2.4 Подсчет средней стоимости одного товара в чеке

 function toAvaragePrice(a,b) {
    console.log(Math.floor(totalScore / totalAmount) + " UAH");
}
toAvaragePrice(totalScore, totalAmount);


         // 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

const styles = [  
    {"color": "blue"},
    {"font-size": "20px"},
    {"text-aligne": "center"},
    {"font-weight": "bold"},
];

styles.forEach(element => console.log(`<p style = ${styles}></p>`));

            //4.  Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. 


const university = [
    {name: "philosophy", seats: 20, faculty: "Humanitarian"},
    {name: "history", seats: 18, faculty: "Humanitarian"},
    {name: "web-security", seats: 15, faculty: "IT-tehnology"},
    {name: "physics", seats: 10, faculty: "Exact-sciences"},
    {name: "mathematics", seats: 12, faculty: "Exact-sciences"},
    {name: "programming", seats: 16, faculty: "IT-tehnology"},
];

             // 4.1 Вывод всех аудиторий

function printClassroom(university) {
    university.forEach(element => console.log(`Classroom: ${element.name}, seats amount: ${element.seats}, faculty: ${element.faculty};`));
};
printClassroom(university);

             //4.2 Вывод аудиторий для указанного факультета

let showFaculty = university.filter(function (item, index){
    return item.faculty === "IT-tehnology";
});
console.log(showFaculty);

            // 4.3 Вывод только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета

let showGroup = university.filter(function (item){
    return item.faculty === "Humanitarian" &&  item.seats === 20;
});
console.log(showGroup);

            // 4.4 Функция сортировки аудиторий по количеству мест

console.log(university.sort((a, b) => a.seats > b.seats ? 1 : -1));

            //4.5 Функция сортировки аудиторий по названию (по алфавиту).

console.log(university.sort((a, b) => a.name > b.name ? 1 : -1));