/* Cart Counter */
document.querySelector('#add-to-cart-button').onclick = function () {
    let cartCount = document.querySelector('#nav-cart-count');
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
};

/* Product showcase */
const showcaseImages = [
    'https://m.media-amazon.com/images/I/71XhSL25ZWL._AC_SX466_.jpg',
    'https://m.media-amazon.com/images/I/61xQMV-ylvL._AC_SX466_.jpg',
    'https://m.media-amazon.com/images/I/61Cfw0MdYTL._AC_SX466_.jpg',
    'https://m.media-amazon.com/images/I/51ldIlEwIWL._AC_SX466_.jpg',
    'https://m.media-amazon.com/images/I/61OMQE+Jv8L._AC_SX466_.jpg',
    'https://m.media-amazon.com/images/I/61Yk5kk0fSL._AC_SX466_.jpg',
    'https://m.media-amazon.com/images/I/51hwPV9TPgL.SS40_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg',
];

document
    .querySelectorAll('.image-selection__list li img')
    .forEach((elem, key) => {
        elem.addEventListener('mouseover', function () {
            let showcase = document.querySelector(
                '.product-showcase__image img'
            );
            // console.dir(showcase);
            showcase.src = showcaseImages[key];
        });
    });

/* Carousel */
const carousel = [
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
    },
    {
        title: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7 Buttons Premium and Portable,Computer Mice Wired for Windows PC, Laptop, Desktop,Notebook,Black`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A06489243H5AX1GYJI7M7&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08M649LRY%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB08M649LRY%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e`,
        src: `https://m.media-amazon.com/images/I/51xAIfnKVQL._AC_SR160,160_.jpg`,
        description: `USB Wired Mouse,RGB Optical Computer Mouse,7200 DPI Office and Home Mice,7…`,
        stars: 'a-star-4-5',
        reviews: '304',
        price: '$6.99',
    },
    {
        title: 'Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable Buttons 14 Backlights Modes up to 12800 DPI for Windows PC Laptop Gamers',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A01905001F374TNY4WMRW&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB098B9FCPF%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_i%3DB098B9FCPF%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41w2qymX-xL._AC_SR160,160_.jpg',
        description: `Wired Gaming Mouse, UHURU WM-07L RGB Computer Wired Mouse with 7 Programmable…`,
        stars: 'a-star-4',
        reviews: '4',
        price: '$19.99',
    },
    {
        title: 'USB Wired Mouse,Rainbow Lights Optical Corded Computer Mouse,Comfortable Click for Office and Home Mice,Computer mice for Windows PC,Laptop,Desktop,MacBook,Notebook(Black)',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A09762711AQRBEJNALD7E&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08JPVMXSL%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1%26pd_rd_i%3DB08JPVMXSL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/51W6Rc7DugS._AC_SR160,160_.jpg',
        description: `USB Wired Mouse,Rainbow Lights Optical Corded Computer…`,
        stars: 'a-star-4-5',
        reviews: '208',
        price: '$5.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: 'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000, Tunable Weights Ergonomic Mouse ,7 Programmable Buttons, PC/Mac Computer White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A05095262IVL3AFD1EA28&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09J29C3DM%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1%26pd_rd_i%3DB09J29C3DM%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41tZwNPC-8L._AC_SR160,160_.jpg',
        description:
            'EKSA Gaming Mouse Wired, USB Mice with 13 RGB Backlit, 6 Adjustable DPI Up to 12000...',
        stars: 'a-star-3',
        reviews: '1',
        price: '$14.99',
    },
    {
        title: 'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gaming Mice for Office and Home, Compatible with Laptop, PC, Desktop, Windows 7/8/10/Xp, Vista Linux and Mac',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A057453829DZL2XVQQT1M&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08LL1JTZ1%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB08LL1JTZ1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41KcZwjN6rL._AC_SR160,160_.jpg',
        description:
            'Computer Gaming Mouse Wired , 7 Buttons RGB USB Optical Sensor High Performance Gam...',
        stars: 'a-star-4',
        reviews: '81',
        price: '$12.99',
    },
    {
        title: 'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Buttons Corded Computer Mouse for Office and Home,Wired Mouse for Laptop Windows PC Desktop Notebook-Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A10194761OOYGFET10ZF5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08HRJDB1P%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB08HRJDB1P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31oORFkBQyL._AC_SR160,160_.jpg',
        description:
            'Wired Mouse,USB Wired Computer Mouse with RGB Backlit LED, 6 Adjustable DPI,7 Butto...',
        stars: 'a-star-4-5',
        reviews: '306',
        price: '$6.99',
    },
    {
        title: 'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, Black',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&amp;adId=A0203991HN9V0J5WJ3V6&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07NPPQWQL%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1%26pd_rd_i%3DB07NPPQWQL%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/315BCThSQhL._AC_SR160,160_.jpg',
        description:
            'RAPOO N100 Wired Mouse – Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4 Levels Adjustable DPI up to 4800 Ergonomic 8 Programmable Buttons Design PC Computer Mice for Mac Windows Gamer',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&amp;adId=A05633672XIU09MNP5HWQ&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09DS642WW%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1%26pd_rd_i%3DB09DS642WW%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31bYo4nsUQL._AC_SR160,160_.jpg',
        description:
            'Pink Wired Gaming Mouse, iTopschy USB Optical Wired Mouse with RGB Backlight 4…',
        stars: 'a-star-5',
        reviews: '14',
        price: '$19.99',
    },
    {
        title: 'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB Connection Plus Jestik Microfiber Cloth - Value Bundle',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&amp;adId=A063689132CGUG5YRVIJV&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08XY9BY3P%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1%26pd_rd_i%3DB08XY9BY3P%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41fGohqwecL._AC_SR160,160_.jpg',
        description:
            'Evoluent VMDL VerticalMouse D Large Right-Hand Ergonomic Mouse with Wired USB…',
        price: '$99.95',
    },
    {
        title: 'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse, 800/1200 DPI Corded Mouse for Laptop Desktop Computer PC Chromebook',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A094935223YC4QUVHS7Q8&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB082X1KFGS%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/41QPQo5JMTL._AC_SR160,160_.jpg',
        description:
            'YUMQUA G222 Silent Computer Mouse Wired 2 Pack, Home &amp; Office Optical USB Mouse,…',
        stars: 'a-star-4-5',
        reviews: '686',
        price: '$12.49',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
    {
        title: 'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop/Desktop, for Right or Left Hand Use, White',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A01205761MEO45I5KBQDQ&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07WJYSHFF%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31pajWDzkfL._AC_SR160,160_.jpg',
        description:
            'rapoo N100 Wired Mouse â€“ Corded USB Mouse for Mac or Windows PC Laptop…',
        stars: 'a-star-4',
        reviews: '119',
        price: '$8.99',
    },
    {
        title: 'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor Ergonomic Palm-Grip with Cord for PC/Computer/Laptop Home or Office Use',
        ref: 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A06908232RKCSV7J5I6CU&amp;qualifier=1638085446&amp;id=8617555869684873&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB09JDL6T1M%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e',
        src: 'https://m.media-amazon.com/images/I/31Z8KgIxB-S._AC_SR160,160_.jpg',
        description:
            'PHILIPS USB Wired Optical Mouse High-Performance 3-Button Optical LED Sensor…',
        stars: 'a-star-5',
        reviews: '1',
        price: '$6.99',
    },
];

console.log(carousel.length);

let currentStart = 0;
let cardListSize = 7;
let currentPage = 1;
const totalPages = carousel.length / cardListSize;

document.querySelector('#page-total').textContent = `${totalPages}`;

function fillCarousel() {
    let carouselList = document.querySelectorAll('.cs__card');
    let start = currentStart % cardListSize;
    for (let i = start; i < cardListSize; i++) {
        const card = carousel[currentStart + i];
        let inner = `<div>
            <a class="a--base"
                title="${card.title}"
                href="${card.ref}">
                <img src="${card.src}"
                    class="a-dynamic-image">
                <div>${card.description}</div>
            </a>`;

        if (card.stars) {
            inner += `
                <div>
                    <a class="a--base"
                        href="${card.ref}#customerReviews">
                        <i class="a-icon a-icon-star ${card.stars}"></i> <span class="a--base">${card.reviews}</span>
                    </a>
                </div>`;
        }

        inner += `
            <div>
                    <a class="a--base"
                        href="${card.ref}">
                        <span class="a-card--price">${card.price}</span>
                    </a>
                    <a class="a--base"
                        href="${card.ref}">
                        <span class="a-icon-prime-span">
                            <i class="a-icon a-icon-prime"></i>
                        </span>
                    </a>
                </div>
        </div>`;

        carouselList[i].innerHTML = inner;
    }

    document.querySelector('#page-current').textContent = currentPage;
}

document.querySelector('#carousel-next').onclick = function () {
    if (currentPage <= totalPages) {
        currentStart += cardListSize;
        currentPage++;
        fillCarousel();
    }
};

document.querySelector('#carousel-previous').onclick = function () {
    if (currentPage >= 1) {
        currentStart -= cardListSize;
        currentPage--;
        fillCarousel();
    }
};

fillCarousel();
