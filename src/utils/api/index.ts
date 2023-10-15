import { PersonalDataForm } from "@/components/FormOrder";

import {
  API_URL,
  CHAT_ID,
  SITE_URL,
  STRAPI_API_TOKEN,
  TELEGRAM_TOKEN,
} from "../urls";

export type ProductResponse = {
  data: Product;
  meta: any;
};

export type ProductListResponse = {
  data: Product[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
    };
  };
};

export type CategoryListResponse = {
  data: Category[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
    };
  };
};

export const fetchDataFromApi = async (
  endpoint: string,
  method: "GET" | "POST" = "GET"
) => {
  const options = {
    method: method,
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await fetch(API_URL + endpoint, options);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const telegramUriApi = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

export const sendOrderApi = async (
  data: PersonalDataForm,
  cartItems: OrderItem[]
) => {
  let message = `<u>Заявка с сайта! </u> \n`;
  message += `<b>Имя: </b> ${data.name} \n`;
  message += `<b>Телефон: </b> ${data.phone} \n`;
  message += `<b>Доставка: </b> ${data.delivery} \n`;
  message += `<b>Город: </b> ${data.city} \n`;
  message += `<b>Улица: </b> ${data.street} \n`;
  message += `<b>Дом: </b> ${data.house} \n`;
  message += `<b>Квартира: </b> ${data.flat} \n`;
  message += `<b>Оплата: </b> ${data.pay} \n`;
  {
    data.changeFrom && (message += `<b>Сдача с: </b> ${data.changeFrom} \n`);
  }
  message += `<b>Комментарий: </b> ${data.comment} \n \n`;

  cartItems.forEach((item, i) => {
    let product = `<b>Товар №${i + 1}</b> \n`;
    product += `<b>Ссылка на товар: </b> ${
      SITE_URL + "/product/" + item.slug
    } \n`;

    product += `<b>Количество: </b> ${item.count} \n \n`;
    // product += `<b>id: </b> ${item.slug} \n`;
    // product += `<b>Название: </b> ${item.name} \n`;
    // product += `<b>Артикул: </b> ${item.article} \n`;
    // product += `<b>Выбранный размер: </b> ${item.selectedSize} \n`;

    message += product;
  });

  try {
    const res = await fetch(telegramUriApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      }),
    });

    return res;
  } catch (error) {
    console.log(error);

    return error;
  }
};

export const sendOrderCall = async (
  phone: string,
  mode: "Заказал звонок" | "Покупка в 1 клик",
  productSlug: string
) => {
  let message = `<u>${mode}! </u> \n`;
  message += `<b>Телефон: </b> ${phone} \n`;
  message += `<b>Ссылка на товар: </b> ${
    SITE_URL + "/product/" + productSlug
  } \n`;

  try {
    const res = await fetch(telegramUriApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      }),
    });

    return res;
  } catch (error) {
    console.log(error);

    return error;
  }
};
