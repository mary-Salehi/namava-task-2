export const filterSections = [
  {
    id: "type",
    inputType: "checkbox",
    options: [
      { id: "movie", label: "فیلم" },
      { id: "series", label: "سریال" },
    ],
  },
  {
    id: "genre",
    title: "ژانرها",
    inputType: "checkbox",
    options: [
      { id: "action", label: "اکشن" },
      { id: "comedy", label: "کمدی" },
      { id: "drama", label: "درام" },
      { id: "sci-fi", label: "علمی تخیلی" },
      { id: "romance", label: "عاشقانه" },
      { id: "horror", label: "ترسناک" },
    ],
  },
  {
    id: "country",
    title: "کشور سازنده",
    inputType: "checkbox",
    options: [
      { id: "iran", label: "ایران" },
      { id: "usa", label: "آمریکا" },
      { id: "korea", label: "کره جنوبی" },
      { id: "uk", label: "انگلستان" },
      { id: "france", label: "فرانسه" },
    ],
  },
  {
    id: "cognition",
    title: "صدا و زیرنویس",
    inputType: "checkbox",
    options: [
      { id: "english", label: "انگلیسی" },
      { id: "persian", label: "فارسی" },
    ]
  },
  {
    id: "year",
    title: "سال ساخت",
    inputType: "radio",
    options: [
      { id: "fromSelectedDate", label: "از ۱۹۰۰" },
      { id: "toSelectedDate", label: " تا۲۰۲۵ " },
    ]
  },
  {
    id: "sort",
    title: "مرتب سازی",
    inputType: "radio",
    options: [
      { id: "newest", label: "جدیدترین" },
      { id: "popular", label: "محبوب‌ترین" },
      { id: "rating", label: "امتیاز" },
      { id: "year", label: "سال ساخت" },
    ],
  },
];
