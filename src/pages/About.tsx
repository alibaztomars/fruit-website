import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Hakkımızda</h1>
      <p className="mb-4">
        Meyve Bilgi Merkezi, sağlıklı beslenme konusunda farkındalık yaratmak ve meyvelerin faydalarını tanıtmak amacıyla kurulmuş bir platformdur.
      </p>
      <p className="mb-4">
        Misyonumuz, insanlara meyvelerin besin değerleri, mineral içerikleri ve sağlık faydaları hakkında doğru ve güncel bilgiler sunmaktır.
      </p>
      <p>
        Sitemizde bulacağınız bilgiler, alanında uzman diyetisyenler ve gıda mühendisleri tarafından hazırlanmakta ve düzenli olarak güncellenmektedir.
      </p>
    </div>
  );
};

export default About;