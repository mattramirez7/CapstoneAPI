## Overview:


Imagine the convenience of comparing prices, shipping options, and other product details for identical items sold on various websites with just a click of a button. This powerful tool can save you both time and money.

Our API is designed to meet this need by leveraging web crawling and scraping technologies to collect product links from different meta-search engines and websites. By specifying your search query, our API will generate a list of product links that match your requirements

Our API crawls the Google and Yahoo shopping meta-search engines. It will return product links that are relevant to your query in JSON format.


## Get Started 

Depending on your use case, you can simply navigate to the hosted end-point, and submit your search query via https://etelligence-crawler.herokuapp.com/scrape/?searchQuery={Insert Your Product HERE}

## Tech

E-telligence uses a number of open source projects to work properly:

- [Scrapy](https://scrapy.org/) - Open Source Scraping and Crawling Library!
- [Fast API](https://fastapi.tiangolo.com/) - Web framework for building APIs with Python 3.7+

And of course E-Telligence itself is a [repository](https://github.com/andrewjumanca/E-Telligence-Crawler)
on GitHub.

## Installation

**No Installation Needed!** All you have to do is just make a call to our API to get the product links! 


## API Endpoint
[https://etelligence-crawler.herokuapp.com/](https://github.com/andrewjumanca/E-Telligence-Crawler)




## Endpoints:
**Request Format:** “/scrape/?searchQuery={Insert Product}”


**Request Type:** GET


**Returned Data Format:** JSON


**Description:**
This endpoint is responsible for both crawling to cache to crawled data to our database and also returning the crawled result back to the user. For this endpoint you should use a query parameter “searchQuery”. With this query parameter you could enter any valid phrase and the endpoint should return valid URLs from crawling the internet using the given “searchQuery” parameter.

**Example Request:**
  ```sh
  /?searchQuery=nike+shoes
  ```

**Example Response:**

```
"searchQuery":"nike shoes",
   "URLs":
    ["https://www.kohls.com/product/prd-5180051/nike-flex-experience-run-11-next-nature-mens-shoes.jsp?skuid=69584505&CID=seo_offers&utm_campaign=SAG&utm_medium=organic&utm_source=google&utm_product=69584505",
        "https://www.rei.com/product/221110/nike-air-zoom-pegasus-40-road-running-shoes-mens?sku=2211100046&CAWELAID=120217890016394034&srsltid=AfAwrE5fhbBxgqDght12BXIQfLG2TRMf6WJgqAR_Sf7YYFNazNGO5Z_B0ic",
        "https://www.nordstrom.com/s/7116728?color=BLACK%2F+UNIVERSITY+RED&country=US&currency=USD&utm_source=google&utm_medium=organic&utm_campaign=seo_shopping&utm_channel=low_nd_seo_shopping&srsltid=AfAwrE5Vxpa8Rko3OTmrPkVIpcA0EDuWfTSFbbgMBT_NQq6LvIDvdpfTv_8",
        "https://www.macys.com/shop/product/nike-big-boys-court-borough-mid-2-stay-put-casual-sneakers-from-finish-line?ID=11966884&pla_country=US&CAGPSPN=pla",
        "https://www.dickssportinggoods.com/p/nike-kids-preschool-air-max-90-shoes-22nikyrmx90whtpnksok/22nikyrmx90whtpnksok?sku=22337978&srsltid=AfAwrE6wMW4LnPXOzIagnRQqCuUg7jffU-UzKzo5Z6BHkptMuEzTRWrEMKU",
        "https://mrulaynatuh.myshopify.com/products/dior-x-air-jordan-1-high-cn8607-002-70783?variants=8572&ads=730503168",
        "https://www.nike.com/t/revolution-5-mens-road-running-shoes-ZXqS6C/BQ3204-002?nikemt=true&srsltid=AfAwrE4YISdE4d3htvWnBvNawimo_xiDT2JIE0AbGeN8vI3-bqZCfYFRlt8",
        "https://www.walmart.com/ip/NIKE-Male-Adult-Men-7-875695-015-Black-White/1744698991?wmlspartner=wlpa&selectedSellerId=4418",
        "https://www.famousfootwear.com/product/nike-mens-run-swift-3-running-shoe-1053959/grey-black-41222?partnerid=google_free_shopping",
        "https://www.rackroomshoes.com/p/waffle-debut-sneaker/601228?utm_source=google&utm_medium=organicshopping&utm_campaign=nike",
        "https://www.flightclub.com/dunk-low-gs-black-white-cw1590-100?srsltid=AfAwrE78c1ZIyAzAPMGLODi5FazK20ZpaHgpOeikqn_gkCizEMXTgE1l7nk",
        "https://www.nike.com/t/free-run-5-premium-mens-road-running-shoes-Xp40hf/DZ3191-100?nikemt=true&srsltid=AfAwrE5mBP1gOC5EiWnAo9r9r4Fsvevq_IRiCNKXF2R0p1zxnd8s_AEmDqY",
        "https://www.shoecarnival.com/mens_nike_air_max_sc_sneakers/67-2326287.html",
        "https://www.finishline.com/store/browse/productDetail.jsp?productId=prod796065&brand_name=NIKE&styleId=DH2920&colorId=111"]
}
```