# Spor Kulübü Web Sitesi — Proje Spesifikasyonu

## 1. Genel Amaç

Bu proje, bir spor kulübünün **bilgilendirme amaçlı** kurumsal web sitesidir.
Referans olarak Fenerbahçe SK gibi büyük spor kulüplerinin web sitelerinin
genel yapısı ve kullanıcı deneyimi örnek alınmıştır.

**Önemli kısıtlar:**
- Sitede **hiçbir ürün satışı, e-ticaret, mağaza veya ödeme sistemi olmayacak.**
- Sitenin amacı yalnızca kulüp hakkında bilgi vermek ve kulüp faaliyetlerini duyurmak/sergilemektir.
- Üyelik/bilet satın alma gibi ticari akışlar bulunmayacak (istenirse yalnızca bilgilendirme metni olarak yer alabilir, "satın al" butonu olmayacak).

---

## 2. Hedef Kitle

- Kulüp taraftarları ve üyeleri
- Basın ve medya mensupları
- Sponsor adayları (yalnızca bilgi amaçlı sayfa, satış değil)
- Genel ziyaretçiler

---

## 3. Site Haritası (Sitemap)

```
Ana Sayfa
├── Kulüp Hakkında
│   ├── Tarihçe
│   ├── Yönetim Kurulu
│   ├── Kulüp Değerleri / Misyon-Vizyon
│   └── Kulüp Amblemi & Renkleri (kurumsal kimlik)
├── Şubeler / Branşlar
│   ├── Futbol (A Takım)
│   ├── Basketbol
│   ├── Voleybol
│   ├── (kulübe göre diğer branşlar)
│   └── Alt Yapı / Akademi
├── Kadro
│   ├── Teknik Ekip
│   └── Oyuncu Profilleri
├── Haberler & Duyurular
│   ├── Kulüp Haberleri
│   ├── Basın Bültenleri
│   └── Etkinlik Duyuruları
├── Maç Sonuçları & Fikstür
│   ├── Gelecek Maçlar
│   ├── Geçmiş Sonuçlar
│   └── Puan Durumu / Lig Tablosu
├── Galeri
│   ├── Fotoğraflar
│   └── Videolar
├── Tesisler
│   ├── Stadyum / Salon Bilgisi
│   └── Antrenman Tesisleri
├── Sosyal Sorumluluk Projeleri
├── Sponsorlar (yalnızca logo/bilgi vitrini, satış yok)
├── İletişim
│   ├── Kulüp Adresi & İletişim Bilgileri
│   └── İletişim Formu
└── Sosyal Medya Bağlantıları (footer)
```

---

## 4. Sayfa Detayları

### 4.1 Ana Sayfa
- Büyük hero görseli/slider (kulüp logosu, son maç fotoğrafı vb.)
- Son haberlerden öne çıkanlar (3-4 kart)
- Bir sonraki maç bilgisi (rakip, tarih, saat, yer) — geri sayım widget'ı olabilir
- Son maç sonucu özeti
- Kulüp faaliyetlerinden kısa bir bölüm (etkinlik/sosyal sorumluluk vurgusu)
- Sosyal medya besleme (opsiyonel, statik gösterim)

### 4.2 Kulüp Hakkında
- Kuruluş yılı, tarihçe zaman çizelgesi (timeline bileşeni)
- Yönetim kurulu üyeleri (fotoğraf + unvan + kısa bio)
- Misyon, vizyon, değerler
- Kulüp amblemi, renkleri ve anlamları

### 4.3 Şubeler / Branşlar
- Her branş için ayrı sayfa: tanıtım, teknik direktör, başarılar
- Alt yapı/akademi için ayrı vurgu (genç yeteneklerin gelişimi anlatımı)

### 4.4 Kadro
- Oyuncu kartları: fotoğraf, forma numarası, pozisyon, kısa istatistik
- Filtreleme: branşa göre, pozisyona göre
- Teknik ekip listesi

### 4.5 Haberler & Duyurular
- Liste + detay sayfası yapısı (blog benzeri)
- Kategori filtreleme (Transfer, Maç Sonrası, Kulüp Duyurusu, Basın Bülteni vb.)
- Tarih sıralı listeleme

### 4.6 Maç Sonuçları & Fikstür
- Takvim/liste görünümü
- Geçmiş sonuçlar tablosu (skor, tarih, rakip, yer)
- Lig puan durumu tablosu

### 4.7 Galeri
- Fotoğraf albümleri (etkinlik bazlı gruplama)
- Video galerisi (YouTube/Vimeo embed, satın alma bağlantısı yok)

### 4.8 Tesisler
- Stadyum/salon kapasitesi, konum, kısa tanıtım
- Antrenman tesisleri hakkında bilgi

### 4.9 Sosyal Sorumluluk Projeleri
- Kulübün toplumsal projeleri, bağışlar, gönüllülük faaliyetleri

### 4.10 Sponsorlar
- Yalnızca sponsor logoları ve kısa açıklama (vitrin amaçlı, tıklanabilir dış link olabilir ama site içinde satış akışı yok)

### 4.11 İletişim
- Adres, telefon, e-posta
- Google Maps embed
- Basit iletişim formu (isim, e-posta, konu, mesaj)

---

## 5. Tasarım Yönergeleri

- **Renk paleti:** Kulübün resmi renkleri baz alınmalı (örn. lacivert/sarı gibi kurumsal renkler — gerçek kulübün amblemi/renkleri kullanılmayacaksa nötr/örnek bir palet tercih edilebilir).
- **Tipografi:** Güçlü, spor temalı başlık fontu + okunaklı gövde fontu.
- **Görseller:** Geniş, etkileyici hero görselleri; kart tabanlı içerik blokları.
- **Duyarlı tasarım (responsive):** Mobil öncelikli, tablet ve masaüstü uyumlu.
- **Navigasyon:** Üstte sabit (sticky) menü, mobilde hamburger menü.
- **Footer:** Hızlı bağlantılar, sosyal medya ikonları, iletişim özet bilgisi, telif hakkı metni.
- **Erişilebilirlik:** Yeterli kontrast oranı, alt metinler, klavye ile gezinme desteği.

---

## 6. Teknik Öneriler (Claude Code için)

- **Frontend:** React (Next.js) veya sade HTML/CSS/JS — proje karmaşıklığına göre karar verilebilir. Statik içerik ağırlıklı olduğu için **Next.js (statik export)** önerilir.
- **Stil:** Tailwind CSS
- **İçerik yönetimi:** Başlangıç için içerikler JSON/Markdown dosyalarından statik olarak çekilebilir (haberler, oyuncular, maçlar için ayrı veri dosyaları). İleride bir CMS (örn. Sanity, Strapi) entegre edilebilir.
- **Görsel optimizasyonu:** Lazy loading, responsive image
- **SEO:** Her sayfa için meta başlık/açıklama, Open Graph etiketleri
- **Form:** İletişim formu için basit bir backend (örn. e-posta gönderimi için serverless fonksiyon) — ödeme veya ürün ile ilgisi yok
- **Barındırılabilir yapı:** Vercel/Netlify gibi platformlarda kolayca yayınlanabilecek statik/hibrit yapı

---

## 7. Örnek Veri Yapısı (Placeholder İçerik)

Claude Code, gerçek kulüp bilgisi verilmediği sürece aşağıdaki gibi placeholder/örnek veriler üretebilir:

```json
// data/news.json
[
  {
    "id": 1,
    "title": "Takımımız Sezonun İlk Maçını Kazandı",
    "date": "2026-07-15",
    "category": "Maç Sonrası",
    "summary": "Kısa özet metni...",
    "image": "/images/news/1.jpg"
  }
]
```

```json
// data/players.json
[
  {
    "id": 1,
    "name": "Örnek Oyuncu",
    "position": "Forvet",
    "number": 9,
    "branch": "Futbol",
    "photo": "/images/players/1.jpg"
  }
]
```

```json
// data/matches.json
[
  {
    "date": "2026-08-01",
    "home": "Kulübümüz",
    "away": "Rakip Takım",
    "score": null,
    "venue": "Ev Sahibi Stadyumu",
    "status": "upcoming"
  }
]
```

---

## 8. Kapsam Dışı (Bu Projede Olmayacaklar)

- Ürün/forma/aksesuar satışı
- Sepet, ödeme, sipariş takibi
- Bilet satın alma akışı (yalnızca bilgilendirme amaçlı bilet bilgisi olabilir)
- Kullanıcı hesabı/üyelik sistemi (ilk aşamada gerekli değil)

---

## 9. Claude Code İçin Görev Özeti

> Yukarıdaki site haritası, sayfa detayları ve tasarım yönergelerine göre,
> Next.js + Tailwind CSS kullanarak, tamamen bilgilendirme amaçlı, satış
> içermeyen bir spor kulübü web sitesi oluştur. Placeholder içerik ve
> görselleri örnek veri dosyalarından kullan. Responsive ve erişilebilir
> bir tasarım uygula.
