// import axios from "axios";

// import { PersonalDataForm } from "@/components/FormOrder";

// export const sendOrderApi = async (
//   data: PersonalDataForm,
//   cartItems: OrderItem[]
// ) => {
//   const token = "6190587445:AAGETpCmUtaXvymWJpEkQUguIqaQdvXMBHg";
//   const chatId = "-1001806155949";
//   const uriApi = `https://api.telegram.org/bot${token}/sendMessage`;

//   let message = `<u>Заявка с сайта! </u> \n`;
//   message += `<b>Имя: </b> ${data.name} \n`;
//   message += `<b>Телефон: </b> ${data.phone} \n`;
//   message += `<b>Доставка: </b> ${data.delivery} \n`;
//   message += `<b>Город: </b> ${data.city} \n`;
//   message += `<b>Улица: </b> ${data.street} \n`;
//   message += `<b>Дом: </b> ${data.house} \n`;
//   message += `<b>Квартира: </b> ${data.flat} \n`;
//   message += `<b>Оплата: </b> ${data.pay} \n`;
//   message += `<b>Комментарий: </b> ${data.comment} \n \n`;

//   cartItems.forEach((item, i) => {
//     let product = `<b>Товар №${i + 1}</b> \n`;
//     product += `<b>id: </b> ${item.slug} \n`;
//     product += `<b>Название: </b> ${item.name} \n`;
//     product += `<b>Артикул: </b> ${item.article} \n`;
//     product += `<b>Выбранный размер: </b> ${item.selectedSize} \n`;
//     product += `<b>Количество: </b> ${item.count} \n \n`;

//     message += product;
//   });

//   try {
//     const res = axios.post(uriApi, {
//       chat_id: chatId,
//       parse_mode: "html",
//       text: message,
//     });

//     return res;
//   } catch (error) {
//     console.log(error);

//     return error;
//   }
// };
