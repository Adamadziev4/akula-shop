import React from "react";
import Link from "next/link";

import Modal from "./Modal";
import { OrderCall } from "./OrderCall";

const footerData = [
  { name: "Акции", url: "/sales" },
  { name: "Доставка", url: "/delivery" },
  { name: "Часто <br /> задаваемые вопросы", url: "/questions" },
  { name: "Политика <br /> конфиденциальности", url: "/privacy-policy" },
  { name: "О компании", url: "/about-us" },
  { name: "Наш магазин", url: "/our-store" },
  { name: "Договор оферты", url: "/offer-agreement" },
  { name: "Обмен и возврат", url: "/exchange-refund" },
];

export const Footer = () => {
  const [modalActive, setModalActive] = React.useState(false);
  return (
    <>
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <OrderCall title="Заказать звонок!" setModalActive={setModalActive} />
      </Modal>

      <div className="mt-[80px] md:mt-[150px] bg-primary text-gray-300 px-6 py-4 sm:text-base lg:text-lg w-full">
        <div className="md:grid md:grid-cols-[43%_57%] md:justify-between">
          <div className="flex md:flex-col justify-between md:justify-start md:gap-6">
            <span>
              <p>+7 988 221-42-70</p>
              <p
                className="opacity-70 cursor-pointer sm:text-base text-sm"
                onClick={() => setModalActive(true)}
              >
                г. Махачкала, <br /> ул. Коркмасова 5 <br /> (Университетская
                площадь)
                {/* {"(заказать звонок)"} */}
              </p>
            </span>
            <Link href={"http://wa.me/89882214270"}>
              <p>Наш WhatsApp</p>
              <p className="opacity-70 sm:text-base text-sm">
                {"(обратная связь)"}
              </p>
            </Link>
          </div>
          <div className="flex gap-6 mt-6 md:mt-0 w-full justify-between md:pr-10">
            <div className="flex flex-col gap-3 sm:justify-between justify-around">
              {footerData.slice(0, 4).map(({ name, url }, i) => (
                <Link
                  href={url}
                  key={i}
                  className="hover:text-white cursor-pointer"
                  dangerouslySetInnerHTML={{ __html: name }}
                />
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:justify-between justify-around">
              {footerData.slice(4).map(({ name, url }, i) => (
                <Link
                  href={url}
                  key={i}
                  className="hover:text-white cursor-pointer"
                  dangerouslySetInnerHTML={{ __html: name }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
