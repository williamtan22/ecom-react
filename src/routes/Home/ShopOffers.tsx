import React, { FC } from "react";
import FreeDeliveryIMG from "../../images/free-delivery.png";
import CashBackIMG from "../../images/cash-back.png";
import QualityProductIMG from "../../images/quality-product.png";
import Support from "../../images/24-7-support.png";
import { ShopOfferContent, TShopOffer } from "../../types/public.types";

const ShopOffers: FC<TShopOffer> = ({ sectionTitle, classes }) => {
  const content: ShopOfferContent[] = [
    {
      text: "For orders above 50%, we will have free shipping.",
      title: "Free Delivery",
      image: FreeDeliveryIMG,
    },
    {
      text: "If you are not satisfied, we will refund your money.",
      title: "100% Cash Back",
      image: CashBackIMG,
    },
    {
      text: "The quality of all products is checked at the time of entry",
      title: "Quality Product",
      image: QualityProductIMG,
    },
    {
      text: "24/7 support to respond to customers",
      title: "24/7 Support",
      image: Support,
    },
  ];

  return (
    <div className="mt-14 mb-40">
      <div className="container mx-auto">
        <h1 className={classes}>{sectionTitle}</h1>
        <div className="flex items-center justify-center">
          <div className="md:columns-4 sm:columns-2 columns-1 gap-y-4">
            {content.map((item) => (
              <div
                className="flex flex-col items-center justify-center h-[320px] drop-shadow-[0_8px_40px_rgba(49,32,138,0.05)] bg-white px-7"
                key={item.title}
              >
                <img src={item.image} alt="" className="mb-2" />
                <h4 className="mb-4 font-JosefinSans font-[22px] text-navy-blue">
                  {item.title}
                </h4>
                <p className="text-center font-Lato font-bold text-base text-[#1A0B5B4D]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopOffers;
