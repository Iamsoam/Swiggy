import {useEffect, useState } from "react";
import ResCard ,{withPromotedLabel} from "./ResCard";
import { Link } from "react-router";

// const reslist = [
//                                     {
//                                         "info": {
//                                             "id": "331881",
//                                             "name": "Kwality Walls Ice Cream and More",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/decf499f-1408-4f67-9e38-26072b2fe760_331881.JPG",
//                                             "locality": "Marunji",
//                                             "areaName": "Hinjawadi",
//                                             "costForTwo": "₹300 for two",
//                                             "cuisines": [
//                                                 "Desserts",
//                                                 "Ice Cream",
//                                                 "Ice Cream Cakes"
//                                             ],
//                                             "avgRating": 4.7,
//                                             "veg": true,
//                                             "parentId": "582",
//                                             "avgRatingString": "4.7",
//                                             "totalRatingsString": "369",
//                                             "sla": {
//                                                 "deliveryTime": 27,
//                                                 "lastMileTravel": 2,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "25-30 mins",
//                                                 "lastMileTravelString": "2.0 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-22 23:15:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "v1695133679/badges/Pure_Veg111.png",
//                                                         "description": "pureveg"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "pureveg",
//                                                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "60% OFF",
//                                                 "subHeader": "UPTO ₹120"
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/kwality-walls-ice-cream-and-more-marunji-hinjawadi-rest331881",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "237669",
//                                             "name": "McDonald's",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/4ea0e7e7-cb06-47b9-9187-c3cb269589ce_237669.JPG",
//                                             "locality": "Hinjewadi",
//                                             "areaName": "Hinjewadi",
//                                             "costForTwo": "₹400 for two",
//                                             "cuisines": [
//                                                 "Burgers",
//                                                 "Beverages",
//                                                 "Cafe",
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 4.6,
//                                             "parentId": "630",
//                                             "avgRatingString": "4.6",
//                                             "totalRatingsString": "6.2K+",
//                                             "sla": {
//                                                 "deliveryTime": 18,
//                                                 "lastMileTravel": 2.4,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "15-20 mins",
//                                                 "lastMileTravelString": "2.4 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-22 23:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "₹80 OFF",
//                                                 "subHeader": "ABOVE ₹349",
//                                                 "discountTag": "FLAT DEAL"
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "4.4",
//                                                     "ratingCount": "2.6K+"
//                                                 },
//                                                 "source": "GOOGLE",
//                                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/mcdonalds-hinjewadi-rest237669",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "732719",
//                                             "name": "Theobroma",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/c7992a34-b80f-476e-b6e9-70c92144253d_732719.jpg",
//                                             "locality": "Near HP Pump",
//                                             "areaName": "Wakad Road",
//                                             "costForTwo": "₹400 for two",
//                                             "cuisines": [
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 4.5,
//                                             "parentId": "1040",
//                                             "avgRatingString": "4.5",
//                                             "totalRatingsString": "1.4K+",
//                                             "sla": {
//                                                 "deliveryTime": 24,
//                                                 "lastMileTravel": 3,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "20-25 mins",
//                                                 "lastMileTravelString": "3.0 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-22 23:59:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "Rxawards/_CATEGORY-Desserts.png",
//                                                         "description": "Delivery!"
//                                                     },
//                                                     {
//                                                         "imageId": "newg.png",
//                                                         "description": "Gourmet"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Delivery!",
//                                                                     "imageId": "Rxawards/_CATEGORY-Desserts.png"
//                                                                 }
//                                                             },
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Gourmet",
//                                                                     "imageId": "newg.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "50% OFF",
//                                                 "discountTag": "FLAT DEAL"
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/theobroma-near-hp-pump-wakad-road-rest732719",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "64066",
//                                             "name": "NIC Ice Creams",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/257e41d8-ebe0-4a97-908c-b513917a4cd3_64066.jpg",
//                                             "locality": "Maan Road",
//                                             "areaName": "Hinjawadi",
//                                             "costForTwo": "₹120 for two",
//                                             "cuisines": [
//                                                 "Ice Cream",
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 4.7,
//                                             "veg": true,
//                                             "parentId": "6249",
//                                             "avgRatingString": "4.7",
//                                             "totalRatingsString": "11K+",
//                                             "sla": {
//                                                 "deliveryTime": 20,
//                                                 "lastMileTravel": 3,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "20-25 mins",
//                                                 "lastMileTravelString": "3.0 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-23 00:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹148"
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/nic-ice-creams-maan-road-hinjawadi-rest64066",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "89140",
//                                             "name": "KFC",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/77e5c742-eb5b-40dc-b72e-25010812c930_89140.JPG",
//                                             "locality": "Wakad Road",
//                                             "areaName": "Hinjawadi",
//                                             "costForTwo": "₹400 for two",
//                                             "cuisines": [
//                                                 "Burgers",
//                                                 "Rolls & Wraps",
//                                                 "Fast Food"
//                                             ],
//                                             "avgRating": 4.3,
//                                             "parentId": "547",
//                                             "avgRatingString": "4.3",
//                                             "totalRatingsString": "17K+",
//                                             "sla": {
//                                                 "deliveryTime": 29,
//                                                 "lastMileTravel": 3,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "25-30 mins",
//                                                 "lastMileTravelString": "3.0 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-23 01:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "70% OFF",
//                                                 "subHeader": "UPTO ₹126",
//                                                 "headerTypeV2": 12
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/kfc-wakad-road-hinjawadi-rest89140",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "441447",
//                                             "name": "Burger King",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/e6ff8fe3-b2ec-4d32-bcad-491f22b447a7_441447.jpg",
//                                             "locality": "Suratwala",
//                                             "areaName": "Hinjewadi",
//                                             "costForTwo": "₹350 for two",
//                                             "cuisines": [
//                                                 "Burgers",
//                                                 "American"
//                                             ],
//                                             "avgRating": 4.1,
//                                             "parentId": "166",
//                                             "avgRatingString": "4.1",
//                                             "totalRatingsString": "15K+",
//                                             "sla": {
//                                                 "deliveryTime": 24,
//                                                 "lastMileTravel": 3,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "20-25 mins",
//                                                 "lastMileTravelString": "3.0 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-22 23:59:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "Rxawards/_CATEGORY-Burger.png",
//                                                         "description": "Delivery!"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Delivery!",
//                                                                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "66% OFF",
//                                                 "subHeader": "UPTO ₹126"
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "4.1",
//                                                     "ratingCount": "10K+"
//                                                 },
//                                                 "source": "GOOGLE",
//                                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/burger-king-suratwala-hinjewadi-rest441447",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "14780",
//                                             "name": "Pizza Hut",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/e65742bd-7530-4376-9fb4-52cc2d83f8af_14780.JPG",
//                                             "locality": "Hinjewadi",
//                                             "areaName": "Hinjewadi",
//                                             "costForTwo": "₹350 for two",
//                                             "cuisines": [
//                                                 "Pizzas"
//                                             ],
//                                             "avgRating": 4.2,
//                                             "parentId": "721",
//                                             "avgRatingString": "4.2",
//                                             "totalRatingsString": "12K+",
//                                             "sla": {
//                                                 "deliveryTime": 20,
//                                                 "lastMileTravel": 0.4,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "20-25 mins",
//                                                 "lastMileTravelString": "0.4 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-23 00:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                                                         "description": "Delivery!"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Delivery!",
//                                                                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹79"
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "3.8",
//                                                     "ratingCount": "1.5K+"
//                                                 },
//                                                 "source": "GOOGLE",
//                                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/pizza-hut-hinjewadi-rest14780",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "745868",
//                                             "name": "Olio - The Wood Fired Pizzeria",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/09444d0e-c2f9-47ed-b83b-3e3d8212171a_745868.JPG",
//                                             "locality": "Hinjawadi",
//                                             "areaName": "Haveli",
//                                             "costForTwo": "₹300 for two",
//                                             "cuisines": [
//                                                 "Pizzas",
//                                                 "Pastas",
//                                                 "Italian",
//                                                 "Fast Food",
//                                                 "Snacks",
//                                                 "Beverages",
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 4.2,
//                                             "parentId": "11633",
//                                             "avgRatingString": "4.2",
//                                             "totalRatingsString": "3.0K+",
//                                             "sla": {
//                                                 "deliveryTime": 34,
//                                                 "lastMileTravel": 2.2,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "30-35 mins",
//                                                 "lastMileTravelString": "2.2 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-23 05:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "newg.png",
//                                                         "description": "Gourmet"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Gourmet",
//                                                                     "imageId": "newg.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "70% OFF",
//                                                 "subHeader": "UPTO ₹136",
//                                                 "headerTypeV2": 12
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "3.3",
//                                                     "ratingCount": "3"
//                                                 },
//                                                 "source": "GOOGLE",
//                                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/olio-the-wood-fired-pizzeria-hinjawadi-haveli-rest745868",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "352810",
//                                             "name": "Grameen Kulfi",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/f5c4e264-e2cd-491f-bc43-cf3960617463_352810.jpg",
//                                             "locality": "Maan Road",
//                                             "areaName": "Hinjawadi",
//                                             "costForTwo": "₹120 for two",
//                                             "cuisines": [
//                                                 "Ice Cream",
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 4.8,
//                                             "veg": true,
//                                             "parentId": "12175",
//                                             "avgRatingString": "4.8",
//                                             "totalRatingsString": "804",
//                                             "sla": {
//                                                 "deliveryTime": 17,
//                                                 "lastMileTravel": 3,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "15-20 mins",
//                                                 "lastMileTravelString": "3.0 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-23 00:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "v1695133679/badges/Pure_Veg111.png",
//                                                         "description": "pureveg"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "pureveg",
//                                                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹99"
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/grameen-kulfi-maan-road-hinjawadi-rest352810",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "428985",
//                                             "name": "Bikkgane Biryani",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/5af415bc-95ec-43e7-a25f-7b246f6a08b6_428985.jpg",
//                                             "locality": "Maan Road",
//                                             "areaName": "Hinjewadi",
//                                             "costForTwo": "₹350 for two",
//                                             "cuisines": [
//                                                 "Biryani",
//                                                 "Hyderabadi",
//                                                 "Andhra",
//                                                 "South Indian",
//                                                 "North Indian",
//                                                 "Mughlai",
//                                                 "Kebabs"
//                                             ],
//                                             "avgRating": 4.2,
//                                             "parentId": "5070",
//                                             "avgRatingString": "4.2",
//                                             "totalRatingsString": "5.8K+",
//                                             "sla": {
//                                                 "deliveryTime": 26,
//                                                 "lastMileTravel": 2.3,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "25-30 mins",
//                                                 "lastMileTravelString": "2.3 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-23 03:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "Rxawards/_CATEGORY-Biryani.png",
//                                                         "description": "Delivery!"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Delivery!",
//                                                                     "imageId": "Rxawards/_CATEGORY-Biryani.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "70% OFF",
//                                                 "subHeader": "UPTO ₹126",
//                                                 "headerTypeV2": 12
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/bikkgane-biryani-maan-road-hinjewadi-rest428985",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "407291",
//                                             "name": "Taco Bell",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/7/2b86d3ca-f32f-48e0-8e49-872eca742066_407291.JPG",
//                                             "locality": "Hinjewadi",
//                                             "areaName": "Hinjewadi",
//                                             "costForTwo": "₹300 for two",
//                                             "cuisines": [
//                                                 "Mexican",
//                                                 "Fast Food",
//                                                 "Snacks"
//                                             ],
//                                             "avgRating": 4.2,
//                                             "parentId": "1557",
//                                             "avgRatingString": "4.2",
//                                             "totalRatingsString": "2.0K+",
//                                             "sla": {
//                                                 "deliveryTime": 19,
//                                                 "lastMileTravel": 0.4,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "15-20 mins",
//                                                 "lastMileTravelString": "0.4 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-22 23:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "70% OFF",
//                                                 "subHeader": "UPTO ₹126",
//                                                 "headerTypeV2": 12
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "3.5",
//                                                     "ratingCount": "152"
//                                                 },
//                                                 "source": "GOOGLE",
//                                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/taco-bell-hinjewadi-rest407291",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "27807",
//                                             "name": "Natural Ice Cream",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/8b5eaccc-2a33-4b81-93a6-6c37e9d09c36_27807.jpg",
//                                             "locality": "Hinjewadi",
//                                             "areaName": "Hinjawadi",
//                                             "costForTwo": "₹150 for two",
//                                             "cuisines": [
//                                                 "Ice Cream",
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 4.7,
//                                             "parentId": "2093",
//                                             "avgRatingString": "4.7",
//                                             "totalRatingsString": "13K+",
//                                             "sla": {
//                                                 "deliveryTime": 28,
//                                                 "lastMileTravel": 5.7,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "25-30 mins",
//                                                 "lastMileTravelString": "5.7 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-22 23:40:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
//                                                         "description": "Delivery!"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Delivery!",
//                                                                     "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "20% OFF",
//                                                 "subHeader": "UPTO ₹50"
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "4.4",
//                                                     "ratingCount": "6.4K+"
//                                                 },
//                                                 "source": "GOOGLE",
//                                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/natural-ice-cream-hinjewadi-hinjawadi-rest27807",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "156082",
//                                             "name": "The Good Bowl",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/2245e655-9929-433c-80b1-7e9069ab20f5_156082.jpg",
//                                             "locality": "Phase 1",
//                                             "areaName": "Hinjawadi",
//                                             "costForTwo": "₹400 for two",
//                                             "cuisines": [
//                                                 "Biryani",
//                                                 "Pastas",
//                                                 "Punjabi",
//                                                 "Desserts",
//                                                 "Beverages"
//                                             ],
//                                             "avgRating": 4.3,
//                                             "parentId": "7918",
//                                             "avgRatingString": "4.3",
//                                             "totalRatingsString": "3.2K+",
//                                             "sla": {
//                                                 "deliveryTime": 24,
//                                                 "lastMileTravel": 2.5,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "20-25 mins",
//                                                 "lastMileTravelString": "2.5 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-22 23:59:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "textExtendedBadges": [
//                                                     {
//                                                         "iconId": "guiltfree/GF_Logo_android_3x",
//                                                         "shortDescription": "options available",
//                                                         "fontColor": "#7E808C"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "",
//                                                                     "fontColor": "#7E808C",
//                                                                     "iconId": "guiltfree/GF_Logo_android_3x",
//                                                                     "shortDescription": "options available"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     }
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "₹165 OFF",
//                                                 "subHeader": "ABOVE ₹499",
//                                                 "discountTag": "FLAT DEAL",
//                                                 "headerTypeV2": 12
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/the-good-bowl-phase-1-hinjawadi-rest156082",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "735280",
//                                             "name": "Madno - House of Sundaes",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/3e0cc740-fce8-4bd4-a05c-843574de0287_735280.jpg",
//                                             "locality": "Blue Ridge",
//                                             "areaName": "Hinjawadi",
//                                             "costForTwo": "₹250 for two",
//                                             "cuisines": [
//                                                 "Ice Cream",
//                                                 "Desserts",
//                                                 "Beverages"
//                                             ],
//                                             "avgRating": 3.9,
//                                             "veg": true,
//                                             "parentId": "264082",
//                                             "avgRatingString": "3.9",
//                                             "totalRatingsString": "186",
//                                             "sla": {
//                                                 "deliveryTime": 45,
//                                                 "lastMileTravel": 3,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "40-45 mins",
//                                                 "lastMileTravelString": "3.0 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-23 01:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "v1695133679/badges/Pure_Veg111.png",
//                                                         "description": "pureveg"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "pureveg",
//                                                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "70% OFF",
//                                                 "subHeader": "UPTO ₹126",
//                                                 "headerTypeV2": 12
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/madno-house-of-sundaes-blue-ridge-hinjawadi-rest735280",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "576382",
//                                             "name": "La Pino'z Pizza",
//                                             "cloudinaryImageId": "qhfw858zccsx8kph6tch",
//                                             "locality": "Hinjewadi",
//                                             "areaName": "Hinjewadi",
//                                             "costForTwo": "₹400 for two",
//                                             "cuisines": [
//                                                 "Pizzas",
//                                                 "Pastas",
//                                                 "Italian",
//                                                 "Desserts",
//                                                 "Beverages"
//                                             ],
//                                             "avgRating": 4,
//                                             "parentId": "4961",
//                                             "avgRatingString": "4.0",
//                                             "totalRatingsString": "3.0K+",
//                                             "sla": {
//                                                 "deliveryTime": 35,
//                                                 "lastMileTravel": 4,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "35-40 mins",
//                                                 "lastMileTravelString": "4.0 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-23 03:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "40% OFF",
//                                                 "subHeader": "UPTO ₹80"
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "3.7",
//                                                     "ratingCount": "397"
//                                                 },
//                                                 "source": "GOOGLE",
//                                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/la-pinoz-pizza-hinjewadi-rest576382",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "3417",
//                                             "name": "Subway",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/9b88775c-2e55-4653-ac27-9ef69d3e2947_3417.jpg",
//                                             "locality": "Blue Ridge Township",
//                                             "areaName": "Hinjawadi",
//                                             "costForTwo": "₹350 for two",
//                                             "cuisines": [
//                                                 "sandwich",
//                                                 "Salads",
//                                                 "wrap",
//                                                 "Healthy Food"
//                                             ],
//                                             "avgRating": 4,
//                                             "parentId": "2",
//                                             "avgRatingString": "4.0",
//                                             "totalRatingsString": "14K+",
//                                             "sla": {
//                                                 "deliveryTime": 34,
//                                                 "lastMileTravel": 3,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "30-35 mins",
//                                                 "lastMileTravelString": "3.0 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-22 23:59:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "₹150 OFF",
//                                                 "subHeader": "ABOVE ₹299",
//                                                 "discountTag": "FLAT DEAL"
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/subway-blue-ridge-township-hinjawadi-rest3417",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "872653",
//                                             "name": "Good Flippin' Burgers",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/73622b9b-a3b9-40cf-91f2-fb91c2693a4e_872653.jpg",
//                                             "locality": "Hinjewadi",
//                                             "areaName": "Hinjewadi",
//                                             "costForTwo": "₹600 for two",
//                                             "cuisines": [
//                                                 "Burgers",
//                                                 "American",
//                                                 "Fast Food"
//                                             ],
//                                             "avgRating": 4.4,
//                                             "parentId": "11748",
//                                             "avgRatingString": "4.4",
//                                             "totalRatingsString": "1.2K+",
//                                             "sla": {
//                                                 "deliveryTime": 30,
//                                                 "lastMileTravel": 2.4,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "30-35 mins",
//                                                 "lastMileTravelString": "2.4 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-23 05:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "Rxawards/_CATEGORY-Burger.png",
//                                                         "description": "Delivery!"
//                                                     },
//                                                     {
//                                                         "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
//                                                         "description": "Delivery!"
//                                                     },
//                                                     {
//                                                         "imageId": "newg.png",
//                                                         "description": "Gourmet"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Delivery!",
//                                                                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                                                                 }
//                                                             },
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Delivery!",
//                                                                     "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
//                                                                 }
//                                                             },
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Gourmet",
//                                                                     "imageId": "newg.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "₹165 OFF",
//                                                 "subHeader": "ABOVE ₹699",
//                                                 "discountTag": "FLAT DEAL",
//                                                 "headerTypeV2": 12
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "4.7",
//                                                     "ratingCount": "235"
//                                                 },
//                                                 "source": "GOOGLE",
//                                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/good-flippin-burgers-hinjewadi-rest872653",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "4872",
//                                             "name": "Ghar Ka Khana - Since 2005",
//                                             "cloudinaryImageId": "f7b365c641d99818f272b5490f034226",
//                                             "locality": "Hinjewadi",
//                                             "areaName": "Hinjawadi",
//                                             "costForTwo": "₹400 for two",
//                                             "cuisines": [
//                                                 "Punjabi",
//                                                 "Thalis",
//                                                 "Kebabs",
//                                                 "Chinese"
//                                             ],
//                                             "avgRating": 4.2,
//                                             "parentId": "472753",
//                                             "avgRatingString": "4.2",
//                                             "totalRatingsString": "37K+",
//                                             "sla": {
//                                                 "deliveryTime": 30,
//                                                 "lastMileTravel": 1.9,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "25-30 mins",
//                                                 "lastMileTravelString": "1.9 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-22 23:30:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "40% OFF",
//                                                 "subHeader": "UPTO ₹80"
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "3.8",
//                                                     "ratingCount": "1.5K+"
//                                                 },
//                                                 "source": "GOOGLE",
//                                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/ghar-ka-khana-since-2005-hinjewadi-hinjawadi-rest4872",
//                                             "type": "WEBLINK"
//                                         }
//                                     },
//                                     {
//                                         "info": {
//                                             "id": "728539",
//                                             "name": "Goila Butter Chicken",
//                                             "cloudinaryImageId": "2acf0681a049dea7dac7271cf7ccc560",
//                                             "locality": "CHINCHWAD",
//                                             "areaName": "WAKAD",
//                                             "costForTwo": "₹600 for two",
//                                             "cuisines": [
//                                                 "North Indian",
//                                                 "Biryani",
//                                                 "Kebabs",
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 3.9,
//                                             "parentId": "322587",
//                                             "avgRatingString": "3.9",
//                                             "totalRatingsString": "1.0K+",
//                                             "sla": {
//                                                 "deliveryTime": 30,
//                                                 "lastMileTravel": 3.6,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "30-35 mins",
//                                                 "lastMileTravelString": "3.6 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-06-23 00:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "newg.png",
//                                                         "description": "Gourmet"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Gourmet",
//                                                                     "imageId": "newg.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "70% OFF",
//                                                 "subHeader": "UPTO ₹126",
//                                                 "headerTypeV2": 12
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/pune/goila-butter-chicken-chinchwad-wakad-rest728539",
//                                             "type": "WEBLINK"
//                                         },
//                                      },
//                                       {
//                                                 "info": {
//                                                     "id": "15517",
//                                                     "name": "Ancient Hyderabad",
//                                                     "cloudinaryImageId": "qq84vbtuxi284xk7sxho",
//                                                     "locality": "Hinjewadi",
//                                                     "areaName": "Hinjewadi",
//                                                     "costForTwo": "₹350 for two",
//                                                     "cuisines": [
//                                                         "Mughlai",
//                                                         "Hyderabadi",
//                                                         "Biryani",
//                                                         "North Indian",
//                                                         "Chinese"
//                                                     ],
//                                                     "avgRating": 4,
//                                                     "parentId": "2630",
//                                                     "avgRatingString": "4.0",
//                                                     "totalRatingsString": "16K+",
//                                                     "sla": {
//                                                         "deliveryTime": 25,
//                                                         "lastMileTravel": 1.7,
//                                                         "serviceability": "SERVICEABLE",
//                                                         "slaString": "20-25 mins",
//                                                         "lastMileTravelString": "1.7 km",
//                                                         "iconType": "ICON_TYPE_EMPTY"
//                                                     },
//                                                     "availability": {
//                                                         "nextCloseTime": "2025-06-23 00:15:00",
//                                                         "opened": true
//                                                     },
//                                                     "badges": {},
//                                                     "isOpen": true,
//                                                     "type": "F",
//                                                     "badgesV2": {
//                                                         "entityBadges": {
//                                                             "imageBased": {},
//                                                             "textBased": {},
//                                                             "textExtendedBadges": {}
//                                                         }
//                                                     },
//                                                     "aggregatedDiscountInfoV3": {
//                                                         "header": "30% OFF",
//                                                         "subHeader": "UPTO ₹150",
//                                                         "discountTag": "SAVE BIG"
//                                                     },
//                                                     "differentiatedUi": {
//                                                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                         "differentiatedUiMediaDetails": {
//                                                             "lottie": {},
//                                                             "video": {}
//                                                         }
//                                                     },
//                                                     "reviewsSummary": {},
//                                                     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                                     "restaurantOfferPresentationInfo": {},
//                                                     "externalRatings": {
//                                                         "aggregatedRating": {
//                                                             "rating": "3.5",
//                                                             "ratingCount": "1.4K+"
//                                                         },
//                                                         "source": "GOOGLE",
//                                                         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                                     },
//                                                     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                                 },
//                                                 "analytics": {
//                                                     "context": "seo-data-cc533121-65ec-47b4-8d14-aadaac2f7fe4"
//                                                 },
//                                                 "cta": {
//                                                     "link": "https://www.swiggy.com/city/pune/ancient-hyderabad-hinjewadi-rest15517",
//                                                     "type": "WEBLINK"
//                                                 }
//                                             }
//                                     ];
                                
                            


const Body = ()=>{

    const [reslist,setreslist]=useState([])
    const [searchlist,setsearchlist]=useState([]);
    const [searchText,setsearchText]=useState([]);

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    

   
   
    setreslist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setsearchlist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

useEffect(() => {
    fetchData();
}, []); 

const HighRating = reslist.filter((res) =>res.info.avgRating >= 4.3);

const highRatingHandler=()=>{
    setsearchlist(HighRating);
}

const handleSearch =reslist.filter((res) => res.info.name.toLowerCase().includes(searchText));

console.log(reslist)

//issuing in adding tolowecase at the end of the searchText to make it case insensitive;

const OpenResCard = withPromotedLabel(ResCard);



return (
    <div className='body'>
        <div className='flex m-3 p-3 gap-6 '>
             <div className="search">
                <input type="text" placeholder='Search for food' value={searchText} onChange={(e)=>setsearchText(e.target.value)} className="rounded-l-lg bg-blue-50 px-2" />
                <button onClick={()=> setsearchlist(handleSearch)} className="bg-sky-500 hover:bg-sky-700 px-2 rounded-r-4xl">
                Search
                </button>
             </div>

            <button onClick={highRatingHandler} className=" bg-sky-500 hover:bg-sky-700 rounded-lg px-2">
             high rating
            </button>
        </div>

        {/* Displaying list of all restuarnts */}


        <div className='res-conatiner flex flex-wrap justify-center gap-4'>

            {searchlist.map((rest) => (
               <Link to ={'/restaurant/'+rest.info.id}  key={rest.info.id} >
               { rest.info.isOpen? <OpenResCard resdata={rest} /> : <ResCard resdata={rest} /> }
               </Link>
            ))}
        </div>
    </div>
)};


export default Body ;