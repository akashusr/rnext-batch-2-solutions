### MovieDB - A movie database application by Learn With Sumit

This is an Assignment project of reactive accelarator batch 2 from [Learn With Sumit](https://learnwithsumit.com)

[Click here to live view](https://next-lws-movie-db.vercel.app)

## Requirement Analysis

✓ এই এসাইনমেন্টটি করতে আপনাকে TMDB এর API ব্যবহার করতে হবে । TMDB একটি জনপ্রিয় মুভি ডেটাবেজ API । TMDB-এর ডকুমেন্টেশন খুব সুন্দর এবং গুছানো, তাই সেটি পড়ে আপনাকে সিদ্ধান্ত নিতে হবে কখন, কোন API Endpoint ব্যবহার করবেন।

✓ পুরো এসাইনমেন্ট এ, Frontend থেকে সরাসরি TMDB API-এর সার্ভারে কোনো API Request করা যাবে না। যদি ক্লায়েন্ট সাইড থেকে নেটওয়ার্ক কল করার প্রয়োজন হয়, তাহলে অবশ্যই Route Handler ব্যবহার করে একটি কাস্টম API Endpoint তৈরি করতে হবে, যা TMDB API-এর সাথে যোগাযোগ করবে।

✓ আমাদের দেয়া টেমপ্লেট এর index.html কে সার্ভার সাইড এ রেন্ডার করতে হবে। সার্ভার সাইড থেকে মুভি লিস্ট নিয়ে এসে এই পেজ তৈরি করতে হবে । কোন সেকশনে কোন ডেটা দেখাবেন, কোন API ব্যবহার করবেন, সব সিদ্ধান্ত আপনার ।

✓ হোম পেজে বেশ কিছু মুভির কার্ড রয়েছে, যেকোনো কার্ডে ক্লিক করলে আপনাকে মুভি ডিটেইলস পেজে নিয়ে যেতে হবে । মুভি ডিটেইলস পেজটিও আপনাকে সার্ভার এ তৈরি করে নিয়ে আসতে হবে। মুভি পেজের URL দেখতে এমন হবে - http://localhost:3000/movie/movie-id

✓ মুভি ডিটেইল পেজে একটি "More Like This" সেকশন রয়েছে, যা আপনাকে "TMDB API" থেকে রিলেটেড মুভি fetch করে নিয়ে আসতে হবে এবং সেই সাথে এই সেকশনটি Progressive Rendering পদ্ধতি ব্যবহার করে লোড করতে হবে। এরপর, আলাদাভাবে "More Like This" সেকশনটি লোড হবে, যাতে ব্যবহারকারী প্রথমে মুভির তথ্য দেখতে পান এবং পরবর্তীতে রিলেটেড মুভিগুলি প্রদর্শিত হয়।

✓ এক বা একাধিক মুভি Compare করার জন্যে "Compare Movies" নামক একটি পেজ রয়েছে। সেই পেজে গেলে এক বা একাধিক মুভি আপনি এক সাথে কার্ড আকারে Compare করতে পারবেন । "Add Movie" বাটনে ক্লিক করে আপনি মুভির জন্যে স্লট তৈরি করতে পারবেন । আবার Cross বাটনে ক্লিক করে স্লট রিমুভ ও করতে পারবেন । এগুলো হবে ক্লায়েন্ট সাইডে ।

✓ স্লটে থাকা "Select Movie" বাটনে ক্লিক করলে একটি ডায়ালগ বক্স আসবে, যেখানে মুভি সার্চ করার অপশন থাকবে। যখন একটি মুভি সিলেক্ট করা হবে, তখন সেই মুভি স্লটে বসে যাবে এবং UI তে দেখা যাবে।

✓ মুভি সার্চ ফিচারের জন্য আপনাকে Next.js-এর Route Handler ব্যবহার করে একটি কাস্টম API Endpoint তৈরি করতে হবে, যা TMDB API-এর সাথে যোগাযোগ করবে এবং সার্চ রেজাল্ট রিটার্ন করবে।

✓ নেভিগেশন এ একটি "Search Movies" ইনপুট ফিল্ড দেখতে পারছেন। সেখানে কোনো মুভির নাম লিখে সার্চ করলে "SearchResult.html" পেজে সার্চ রেজাল্ট দেখাতে হবে ।

✓ আপনাকে একটি MongoDB ডাটাবেস সেট আপ করতে হবে। ডাটাবেসে দুইটি কালেকশন থাকতে হবে User এবং Watch List । MongoDB ডাটাবেস অবশ্যই Mongo Atlas এ হোস্ট করতে হবে ঠিক যেভাবে আপনাদেরকে মডিউলে দেখিয়ে দেয়া হয়েছে।

✓ লগইন এবং রেজিস্টার এর টেমপ্লেট দেয়া হয়েছে, সেটি আপনাদের Implement করতে হবে । লগইন এবং রেজিস্ট্রেশন এর ডেটা User Collection এ রাখতে হবে ।

✓ মুভি ডিটেইলস পেজে, "Watch Later" নামে একটি বাটন দেখতে পারবেন । লগইন থাকা ব্যাক্তি এই বাটনে ক্লিক করলে, মুভিটি Watch List এ যুক্ত হয়ে যাবে । যদি ইউজার লগইন করা না থাকে সে ক্ষেত্রে, ইউজার কে লগইন পেজে নিয়ে যাবে ।

✓ মুভি ডিটেইলস পেজে এ থাকা বিভিন্ন সোশাল মিডিয়া বাটনে ক্লিক করলে, সেই প্লাটফর্মে মুভি ডিটেইলস পেজের লিংক শেয়ার হবে । মুভি ডিটেইলস শেয়ার হওয়ার সাথে যেন Meta Information এ মুভির Meta Image, Meta Title এবং Meta Description সঠিক ভাবে দেখা যায় ।

✓ Not Found এবং Error পেজ ঠিক ভাবে হ্যান্ডেল করতে হবে ।

### Project Analysis

![Home Page](/project-mapping/home.png)
![Detals Page](/project-mapping/details.png)
![compare Page](/project-mapping/compare.png)
![search result Page](/project-mapping/searchresult.png)
![Watchlist result Page](/project-mapping/watchlist.png)
![login  Page](/project-mapping/login.png)
![registration  Page](/project-mapping/register.png)
![layout  Page](/project-mapping/layout.png)
![Search Modal](/project-mapping/searchBox.png)

