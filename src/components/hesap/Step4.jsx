import React from "react";

const Step4 = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">ŞİFRE</h1>
        <div className="w-full mb-4">
          <label htmlFor="street">Mevcut Şifre</label>
          <input
            className="border-2 rounded-md p-2"
            type="text"
            name="street"
            id="street"
          />
          <label htmlFor="street">Yeni Şifre</label>
          <input
            className="border-2 rounded-md p-2"
            type="text"
            name="street"
            id="street"
          />
        </div>
        <div className="">
          <button className="py-1 px-4 rounded-md bg-red-600 text-white mb-4">
            Kaydet
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-center">E-MAİL</h1>
        <div className="w-full mb-4">
          <label htmlFor="street">Mevcut E-mail</label>
          <input
            className="border-2 rounded-md p-2"
            type="text"
            name="street"
            id="street"
          />
          <label htmlFor="street">Yeni E-mail</label>
          <input
            className="border-2 rounded-md p-2"
            type="text"
            name="street"
            id="street"
          />
        </div>
        <div className="">
          <button className="py-1 px-4 rounded-md bg-red-600 text-white mb-4">
            Kaydet
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-center">KARTLARIM</h1>
        <h3>Henüz kayıtlı bir ödeme seçeneğiniz yok.</h3>
        <div className="">
          <button className="py-1 px-4 rounded-md bg-red-600 text-white mb-4">
            Kart Ekle
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-center">TERCİHLER</h1>
        <div className=" flex">
          <input className="w-4 mr-2" type="checkbox" name="sart1" id="sart1" />
          <label htmlFor="sart1">
            Eleska'nın sunduğu kampanyalar, indirimler ve haberler ile ilgili
            e-posta almak istiyorum.
          </label>
        </div>
        <div className="flex">
          <input className="w-4 mr-2" type="checkbox" name="sart2" id="sart2" />
          <label htmlFor="sart2">
            Eleska'nın sunduğu kampanyalar, indirimler ve haberler ile ilgili
            sms almak istiyorum.
          </label>
        </div>

        <div className="">
          <button className="py-1 px-4 rounded-md bg-red-600 text-white mb-4">
            Kart Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
