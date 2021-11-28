/* Cart Counter */
document.querySelector('#add-to-cart-button').onclick = function () {
    let cartCount = document.querySelector('#nav-cart-count');
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
};

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
console.dir(carouselList);

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
