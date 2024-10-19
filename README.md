# Meyve Bilgi Merkezi

Bu proje, çeşitli meyveler hakkında bilgiler, besin değerleri, mineralleri ve sağlık faydalarını gösteren bir web sitesidir. Modern ve flat bir tasarıma sahip olan site, kullanıcılara meyveleri keşfetme ve yapay zeka ile etkileşimde bulunma imkanı sunar.

## Özellikler

- Ana sayfa ile genel bilgi ve navigasyon
- Meyveler sayfasında çeşitli meyvelerin detaylı bilgileri
- Hakkımızda sayfası ile proje hakkında bilgi
- Yapay Zeka ile soru-cevap özelliği (Google Gemini API kullanılarak)
- Responsive tasarım

## Teknolojiler

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Google Generative AI (Gemini)

## Kurulum

1. Projeyi klonlayın:
   ```
   git clone https://github.com/alibaztomars/fruit-website.git
   cd fruit-website
   ```

2. Bağımlılıkları yükleyin:
   ```
   npm install
   ```

3. `.env` dosyasını oluşturun ve Gemini API anahtarınızı ekleyin:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. Geliştirme sunucusunu başlatın:
   ```
   npm run dev
   ```

5. Tarayıcınızda `http://localhost:5173` adresine giderek uygulamayı görüntüleyin.

## Kullanım

- Ana Sayfa: Sitenin genel amacını ve mevcut özellikleri gösterir.
- Meyveler: Çeşitli meyvelerin detaylı bilgilerini listeler.
- Hakkımızda: Proje ve ekip hakkında bilgi verir.
- Yapay Zekaya Sor: Kullanıcıların meyveler hakkında sorular sorabileceği bir arayüz sunar.

## Dağıtım

Projeyi dağıtmak için:

```
npm run build
```

Bu komut, `dist` klasöründe dağıtıma hazır dosyalar oluşturacaktır.

## Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir özellik dalı oluşturun (`git checkout -b yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik: Açıklama'`)
4. Dalınıza push yapın (`git push origin yeni-ozellik`)
5. Bir Pull Request oluşturun

## Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.