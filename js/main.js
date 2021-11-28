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
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
    },
    {
        title: ``,
        ref: ``,
        src: ``,
        description: ``,
        stars: '',
        reviews: '',
        price: '',
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
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
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
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
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
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
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
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
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
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
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
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
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
        title: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse with Attached USB Cord for Laptops Notebooks Chromebook - Purple`,
        ref: `https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A0053634386260X5S3QR5&amp;qualifier=1638050252&amp;id=5088878319970409&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB08SWJXKQ6%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB08SWJXKQ6%26pd_rd_w%3DjJVXn%26pf_rd_p%3D9fd3ea7c-b77c-42ac-b43b-c872d3f37c38%26pd_rd_wg%3Div6MA%26pf_rd_r%3D6GBBE5SDDG1SZ7CG6HXK%26pd_rd_r%3D7c831f61-2b4e-4fd6-b757-14d10a23659e%26smid%3DA17A56QUH976SG`,
        src: `https://m.media-amazon.com/images/I/41JHTZeQwcL._AC_SR160,160_.jpg`,
        description: `seenda Wired Mouse - USB Computer Mouse Wired with RGB Backlit Optical LED Mouse wi...`,
        stars: 'a-star-4-5',
        reviews: '1,095',
        price: '$9.95',
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
];

let currentStart = 0;
let stop = 7;
let pages = 5;

let carouselList = document.querySelectorAll('.cs__card');
// console.dir(carouselList);

function fillCarousel() {
    for (let i = currentStart; i < stop; i++) {
        const card = carousel[i];

        carouselList[i].innerHTML = `<div>
            <a class="a--base"
                title="${card.title}"
                href="${card.ref}">
                <img src="${card.src}"
                    class="a-dynamic-image">
                <div>${card.description}</div>
            </a>
            <div>
                <a class="a--base"
                    href="${card.ref}#customerReviews">
                    <i class="a-icon a-icon-star ${card.stars}"></i> <span class="a--base">${card.reviews}</span>
                </a>
            </div>
            <div>
                <a class="a--base"
                    href="${card.ref}">
                    <span class="a-size-medium a-color-price">${card.price}</span>
                </a>
                <a class="a--base"
                    href="${card.ref}">
                    <span class="a-icon-prime-span">
                        <i class="a-icon a-icon-prime"></i>
                    </span>
                </a>
            </div>
        </div>`;
    }
}

fillCarousel();

document.querySelector('#carousel-next').onclick = function () {
    currentStart += stop;
    currentStart %= stop; //cycle
    fillCarousel();

    let pageCount = document.querySelector('#page-current');
    pageCount.textContent = (parseInt(pageCount.textContent) + 1) % pages;
};

document.querySelector('#carousel-previous').onclick = function () {
    currentStart -= stop;
    currentStart %= stop; //cycle
    fillCarousel();

    let pageCount = document.querySelector('#page-current');
    pageCount.textContent = (parseInt(pageCount.textContent) - 1) % pages;
};
