// let slider = $(document).ready(function () {
//   $('.your-class').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//     infinite: true
//   });
// });

// const ageOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const ageTwo = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// // const age = ageOne.const(ageTwo);
// const age = [...ageOne, ...ageTwo];
// console.log(age);
// const response = {
//   "data": [
//       {
//           "id": 119,
//           "attributes": {
//               "title": " Шукаю няню у Львові",
//               "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//               "slug": "-shukaiu-nianiu-u-lvovi-1672088266",
//               "createdAt": "2022-12-26T20:57:45.690Z",
//               "updatedAt": "2023-01-24T18:27:37.763Z",
//               "publishedAt": "2022-12-26T20:57:45.682Z",
//               "cost": 10000,
//               "is_urgent": true,
//               "location_title": "Львів, Львівська область, Україна, 79000",
//               "location_lat": 49.839683,
//               "location_lng": 24.029717,
//               "is_active": true,
//               "is_contract": false,
//               "proposals_count": 1,
//               "hires_count": null,
//               "new_proposals_count": 0,
//               "living_with_family": false,
//               "inclusive_kids": false,
//               "driving_licence": false,
//               "additionallies": {
//                   "data": [
//                       {
//                           "id": 7,
//                           "attributes": {
//                               "createdAt": "2022-11-23T13:51:57.274Z",
//                               "updatedAt": "2022-11-23T13:51:59.194Z",
//                               "publishedAt": "2022-11-23T13:51:59.190Z",
//                               "label": "Прибирання",
//                               "value": "cleaning"
//                           }
//                       }
//                   ]
//               },
//               "languages": {
//                   "data": [
//                       {
//                           "id": 5,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:54.216Z",
//                               "updatedAt": "2022-08-16T08:12:55.331Z",
//                               "publishedAt": "2022-08-16T08:12:55.327Z",
//                               "value": "pl",
//                               "label": "Польська"
//                           }
//                       }
//                   ]
//               },
//               "territories": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "parent",
//                               "label": "територія батьків",
//                               "createdAt": "2022-08-16T08:14:46.698Z",
//                               "updatedAt": "2022-08-22T07:29:48.710Z",
//                               "publishedAt": "2022-08-16T08:14:47.844Z"
//                           }
//                       }
//                   ]
//               },
//               "payment_types": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "fixed",
//                               "label": "Одноразова",
//                               "createdAt": "2022-08-16T08:13:51.518Z",
//                               "updatedAt": "2023-01-04T17:39:29.930Z",
//                               "publishedAt": "2022-08-16T08:13:55.169Z"
//                           }
//                       }
//                   ]
//               },
//               "experiences": {
//                   "data": [
//                       {
//                           "id": 3,
//                           "attributes": {
//                               "value": "3 ",
//                               "label": "3 роки",
//                               "createdAt": "2022-08-16T08:10:56.934Z",
//                               "updatedAt": "2022-08-22T07:27:33.849Z",
//                               "publishedAt": "2022-08-16T08:10:58.300Z"
//                           }
//                       }
//                   ]
//               },
//               "author": {
//                   "data": {
//                       "id": 51,
//                       "attributes": {
//                           "username": "client",
//                           "email": "mr.archee@gmail.com",
//                           "provider": "local",
//                           "confirmed": true,
//                           "blocked": false,
//                           "createdAt": "2022-12-02T09:45:48.989Z",
//                           "updatedAt": "2023-01-23T20:11:17.302Z",
//                           "first_name": "Wednesday",
//                           "last_name": "Adams",
//                           "role_user": "client",
//                           "about": "some info about me",
//                           "rating": null,
//                           "location_title": "Трускавець, Львівська область, Україна, 82200",
//                           "slug": "doe",
//                           "location_lat": 49.2813855,
//                           "location_lng": 23.494314,
//                           "saved_jobs": [
//                               130
//                           ],
//                           "saved_profiles": null,
//                           "status": null,
//                           "proposals_count": null,
//                           "views": null,
//                           "phone": "+380632767675",
//                           "notifications_settings": {
//                               "offers": false,
//                               "messages": true,
//                               "contracts": false,
//                               "new_proposal": false,
//                               "answer_on_proposal": false
//                           },
//                           "notifications": {
//                               "data": [
//                                   {
//                                       "id": 241,
//                                       "type": "message",
//                                       "is_seen": false,
//                                       "createdAt": "2022-12-08T12:33:57.204Z",
//                                       "updatedAt": "2022-12-08T12:33:57.204Z",
//                                       "event_name": "new_message",
//                                       "relation_id": 456
//                                   }
//                               ],
//                               "last_updated": "2023-01-02T21:27:51.847Z"
//                           },
//                           "average_rating": 0,
//                           "connects_count": 10,
//                           "picture_url": "https://momseek.fra1.digitaloceanspaces.com/strapi/7f25238e52b2359a6e1854a669e2cffe.png",
//                           "voted_comments": [
//                               {
//                                   "id": 7,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 3,
//                                   "vote": false
//                               },
//                               {
//                                   "id": 6,
//                                   "vote": false
//                               },
//                               {
//                                   "id": 4,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 2,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 8,
//                                   "vote": true
//                               }
//                           ],
//                           "onboarding_completed": null,
//                           "inclusive_kids": false,
//                           "driving_licence": false,
//                           "living_with_family": false
//                       }
//                   }
//               },
//               "terms_work": {
//                   "data": null
//               },
//               "children": {
//                   "data": {
//                       "id": 1,
//                       "attributes": {
//                           "value": "1",
//                           "label": "1 дитина",
//                           "createdAt": "2022-08-16T08:08:36.827Z",
//                           "updatedAt": "2022-12-26T20:55:26.760Z",
//                           "publishedAt": "2022-08-16T08:08:38.401Z"
//                       }
//                   }
//               },
//               "education": {
//                   "data": []
//               }
//           }
//       },
//       {
//           "id": 121,
//           "attributes": {
//               "title": "Шукаю няню для дитини 2 міс",
//               "description": "Доброго дня. Шукаю няню для дитини 2 міс.. Я працюю дома та донечка на ГВ. До обов’язків входить: прогулянки, догляд, ігри та розваги згідно віку.\nГрафік: пн-пт 9:00-18:00\nХарчування: з задоволенням пригощу тим, чим харчуємося ми.\nРозташування: 3 хв від метро Мінська",
//               "slug": "shukaiu-nianiu-dlia-dytyny-2-mis-1672416217",
//               "createdAt": "2022-12-30T16:03:37.449Z",
//               "updatedAt": "2023-01-24T18:26:54.127Z",
//               "publishedAt": "2022-12-30T16:03:37.429Z",
//               "cost": 15000,
//               "is_urgent": false,
//               "location_title": "Київ, Україна, 02000",
//               "location_lat": 50.4501,
//               "location_lng": 30.5234,
//               "is_active": true,
//               "is_contract": false,
//               "proposals_count": 0,
//               "hires_count": null,
//               "new_proposals_count": 0,
//               "living_with_family": false,
//               "inclusive_kids": false,
//               "driving_licence": false,
//               "additionallies": {
//                   "data": []
//               },
//               "languages": {
//                   "data": [
//                       {
//                           "id": 4,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:24.542Z",
//                               "updatedAt": "2022-08-16T08:12:26.070Z",
//                               "publishedAt": "2022-08-16T08:12:26.067Z",
//                               "value": "ua",
//                               "label": "Українська"
//                           }
//                       }
//                   ]
//               },
//               "territories": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "parent",
//                               "label": "територія батьків",
//                               "createdAt": "2022-08-16T08:14:46.698Z",
//                               "updatedAt": "2022-08-22T07:29:48.710Z",
//                               "publishedAt": "2022-08-16T08:14:47.844Z"
//                           }
//                       }
//                   ]
//               },
//               "payment_types": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "fixed",
//                               "label": "Одноразова",
//                               "createdAt": "2022-08-16T08:13:51.518Z",
//                               "updatedAt": "2023-01-04T17:39:29.930Z",
//                               "publishedAt": "2022-08-16T08:13:55.169Z"
//                           }
//                       }
//                   ]
//               },
//               "experiences": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "2 ",
//                               "label": "2 роки",
//                               "createdAt": "2022-08-16T08:10:35.346Z",
//                               "updatedAt": "2022-08-22T07:27:28.274Z",
//                               "publishedAt": "2022-08-16T08:10:36.730Z"
//                           }
//                       }
//                   ]
//               },
//               "author": {
//                   "data": {
//                       "id": 71,
//                       "attributes": {
//                           "username": "Karina",
//                           "email": "test1@gmail.com",
//                           "provider": "local",
//                           "confirmed": true,
//                           "blocked": false,
//                           "createdAt": "2022-12-30T15:58:38.015Z",
//                           "updatedAt": "2023-01-26T17:46:53.481Z",
//                           "first_name": "Каріна",
//                           "last_name": "Мельник",
//                           "role_user": "client",
//                           "about": null,
//                           "rating": null,
//                           "location_title": null,
//                           "slug": "melnik",
//                           "location_lat": null,
//                           "location_lng": null,
//                           "saved_jobs": null,
//                           "saved_profiles": null,
//                           "status": null,
//                           "proposals_count": null,
//                           "views": null,
//                           "phone": "0931112233",
//                           "notifications_settings": null,
//                           "notifications": null,
//                           "average_rating": 0,
//                           "connects_count": 10,
//                           "picture_url": null,
//                           "voted_comments": null,
//                           "onboarding_completed": false,
//                           "inclusive_kids": false,
//                           "driving_licence": false,
//                           "living_with_family": false
//                       }
//                   }
//               },
//               "terms_work": {
//                   "data": null
//               },
//               "children": {
//                   "data": {
//                       "id": 1,
//                       "attributes": {
//                           "value": "1",
//                           "label": "1 дитина",
//                           "createdAt": "2022-08-16T08:08:36.827Z",
//                           "updatedAt": "2022-12-26T20:55:26.760Z",
//                           "publishedAt": "2022-08-16T08:08:38.401Z"
//                       }
//                   }
//               },
//               "education": {
//                   "data": []
//               }
//           }
//       },
//       {
//           "id": 120,
//           "attributes": {
//               "title": "В пошуках няні на новорічні свята",
//               "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//               "slug": "v-poshukakh-niani-na-novorichni-sviata-1672415793",
//               "createdAt": "2022-12-30T15:56:33.359Z",
//               "updatedAt": "2023-01-24T18:27:45.716Z",
//               "publishedAt": "2022-12-30T15:56:33.349Z",
//               "cost": 2400,
//               "is_urgent": true,
//               "location_title": "Сихів, Львів, Львівська область, Україна, 79000",
//               "location_lat": 49.7916616,
//               "location_lng": 24.0645386,
//               "is_active": true,
//               "is_contract": false,
//               "proposals_count": 1,
//               "hires_count": null,
//               "new_proposals_count": 0,
//               "living_with_family": false,
//               "inclusive_kids": false,
//               "driving_licence": false,
//               "additionallies": {
//                   "data": [
//                       {
//                           "id": 7,
//                           "attributes": {
//                               "createdAt": "2022-11-23T13:51:57.274Z",
//                               "updatedAt": "2022-11-23T13:51:59.194Z",
//                               "publishedAt": "2022-11-23T13:51:59.190Z",
//                               "label": "Прибирання",
//                               "value": "cleaning"
//                           }
//                       }
//                   ]
//               },
//               "languages": {
//                   "data": [
//                       {
//                           "id": 4,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:24.542Z",
//                               "updatedAt": "2022-08-16T08:12:26.070Z",
//                               "publishedAt": "2022-08-16T08:12:26.067Z",
//                               "value": "ua",
//                               "label": "Українська"
//                           }
//                       }
//                   ]
//               },
//               "territories": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "parent",
//                               "label": "територія батьків",
//                               "createdAt": "2022-08-16T08:14:46.698Z",
//                               "updatedAt": "2022-08-22T07:29:48.710Z",
//                               "publishedAt": "2022-08-16T08:14:47.844Z"
//                           }
//                       }
//                   ]
//               },
//               "payment_types": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "fixed",
//                               "label": "Одноразова",
//                               "createdAt": "2022-08-16T08:13:51.518Z",
//                               "updatedAt": "2023-01-04T17:39:29.930Z",
//                               "publishedAt": "2022-08-16T08:13:55.169Z"
//                           }
//                       }
//                   ]
//               },
//               "experiences": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "1",
//                               "label": "1 рік",
//                               "createdAt": "2022-08-16T08:10:09.320Z",
//                               "updatedAt": "2022-08-22T07:27:22.882Z",
//                               "publishedAt": "2022-08-16T08:10:11.572Z"
//                           }
//                       }
//                   ]
//               },
//               "author": {
//                   "data": {
//                       "id": 70,
//                       "attributes": {
//                           "username": "client_account",
//                           "email": "client_account@test.com",
//                           "provider": "local",
//                           "confirmed": true,
//                           "blocked": false,
//                           "createdAt": "2022-12-30T15:54:14.986Z",
//                           "updatedAt": "2022-12-30T15:59:30.203Z",
//                           "first_name": "Клієнт",
//                           "last_name": "Сервісу",
//                           "role_user": "client",
//                           "about": null,
//                           "rating": null,
//                           "location_title": null,
//                           "slug": null,
//                           "location_lat": null,
//                           "location_lng": null,
//                           "saved_jobs": null,
//                           "saved_profiles": null,
//                           "status": null,
//                           "proposals_count": null,
//                           "views": null,
//                           "phone": "+380936868250",
//                           "notifications_settings": null,
//                           "notifications": {
//                               "data": [
//                                   {
//                                       "id": 246,
//                                       "type": "message",
//                                       "is_seen": false,
//                                       "createdAt": "2022-12-30T15:59:11.039Z",
//                                       "updatedAt": "2022-12-30T15:59:11.039Z",
//                                       "event_name": "new_message",
//                                       "relation_id": 459
//                                   }
//                               ],
//                               "last_updated": "2022-12-30T15:59:30.196Z"
//                           },
//                           "average_rating": 0,
//                           "connects_count": 10,
//                           "picture_url": null,
//                           "voted_comments": null,
//                           "onboarding_completed": null,
//                           "inclusive_kids": null,
//                           "driving_licence": null,
//                           "living_with_family": null
//                       }
//                   }
//               },
//               "terms_work": {
//                   "data": null
//               },
//               "children": {
//                   "data": {
//                       "id": 1,
//                       "attributes": {
//                           "value": "1",
//                           "label": "1 дитина",
//                           "createdAt": "2022-08-16T08:08:36.827Z",
//                           "updatedAt": "2022-12-26T20:55:26.760Z",
//                           "publishedAt": "2022-08-16T08:08:38.401Z"
//                       }
//                   }
//               },
//               "education": {
//                   "data": []
//               }
//           }
//       },
//       {
//           "id": 122,
//           "attributes": {
//               "title": "Шукаємо няню для хлопчика 10 місяців",
//               "description": "Доброго дня!\nЦікавить повний день з 9.00 до 17.00 ( к обговоренню).\nТериторіально знаходимося с.Софіївська Борщагівка (ЖК Софія).\nЗа деталями прошу писати в приватні.\nБуду вдячна за хороші рекомендації!",
//               "slug": "shukaiemo-nianiu-dlia-khlopchyka-10-misiatsiv-1672416685",
//               "createdAt": "2022-12-30T16:11:25.353Z",
//               "updatedAt": "2023-01-24T18:27:03.541Z",
//               "publishedAt": "2022-12-30T16:11:25.340Z",
//               "cost": 6000,
//               "is_urgent": false,
//               "location_title": "Київ, Україна, 02000",
//               "location_lat": 50.4501,
//               "location_lng": 30.5234,
//               "is_active": true,
//               "is_contract": false,
//               "proposals_count": 0,
//               "hires_count": null,
//               "new_proposals_count": 0,
//               "living_with_family": false,
//               "inclusive_kids": false,
//               "driving_licence": false,
//               "additionallies": {
//                   "data": [
//                       {
//                           "id": 7,
//                           "attributes": {
//                               "createdAt": "2022-11-23T13:51:57.274Z",
//                               "updatedAt": "2022-11-23T13:51:59.194Z",
//                               "publishedAt": "2022-11-23T13:51:59.190Z",
//                               "label": "Прибирання",
//                               "value": "cleaning"
//                           }
//                       }
//                   ]
//               },
//               "languages": {
//                   "data": [
//                       {
//                           "id": 3,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:08.616Z",
//                               "updatedAt": "2022-08-16T08:12:09.897Z",
//                               "publishedAt": "2022-08-16T08:12:09.894Z",
//                               "value": "eng",
//                               "label": "Англійська"
//                           }
//                       }
//                   ]
//               },
//               "territories": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "parent",
//                               "label": "територія батьків",
//                               "createdAt": "2022-08-16T08:14:46.698Z",
//                               "updatedAt": "2022-08-22T07:29:48.710Z",
//                               "publishedAt": "2022-08-16T08:14:47.844Z"
//                           }
//                       }
//                   ]
//               },
//               "payment_types": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "monthly",
//                               "label": "Помісячно",
//                               "createdAt": "2022-08-16T08:13:35.641Z",
//                               "updatedAt": "2023-01-04T17:39:36.033Z",
//                               "publishedAt": "2022-08-16T08:13:37.278Z"
//                           }
//                       }
//                   ]
//               },
//               "experiences": {
//                   "data": [
//                       {
//                           "id": 3,
//                           "attributes": {
//                               "value": "3 ",
//                               "label": "3 роки",
//                               "createdAt": "2022-08-16T08:10:56.934Z",
//                               "updatedAt": "2022-08-22T07:27:33.849Z",
//                               "publishedAt": "2022-08-16T08:10:58.300Z"
//                           }
//                       }
//                   ]
//               },
//               "author": {
//                   "data": {
//                       "id": 73,
//                       "attributes": {
//                           "username": "Sonya",
//                           "email": "test3@gmail.com",
//                           "provider": "local",
//                           "confirmed": true,
//                           "blocked": false,
//                           "createdAt": "2022-12-30T16:08:53.186Z",
//                           "updatedAt": "2022-12-30T16:09:22.561Z",
//                           "first_name": "Софія",
//                           "last_name": "Довгонюк",
//                           "role_user": "client",
//                           "about": null,
//                           "rating": null,
//                           "location_title": null,
//                           "slug": "dovgonyuk",
//                           "location_lat": null,
//                           "location_lng": null,
//                           "saved_jobs": null,
//                           "saved_profiles": null,
//                           "status": null,
//                           "proposals_count": null,
//                           "views": null,
//                           "phone": "0731112233",
//                           "notifications_settings": null,
//                           "notifications": null,
//                           "average_rating": 0,
//                           "connects_count": 10,
//                           "picture_url": null,
//                           "voted_comments": null,
//                           "onboarding_completed": null,
//                           "inclusive_kids": null,
//                           "driving_licence": null,
//                           "living_with_family": null
//                       }
//                   }
//               },
//               "terms_work": {
//                   "data": null
//               },
//               "children": {
//                   "data": {
//                       "id": 1,
//                       "attributes": {
//                           "value": "1",
//                           "label": "1 дитина",
//                           "createdAt": "2022-08-16T08:08:36.827Z",
//                           "updatedAt": "2022-12-26T20:55:26.760Z",
//                           "publishedAt": "2022-08-16T08:08:38.401Z"
//                       }
//                   }
//               },
//               "education": {
//                   "data": []
//               }
//           }
//       },
//       {
//           "id": 118,
//           "attributes": {
//               "title": "Шукаю нняню для доньки, 7 років",
//               "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//               "slug": "shukaiu-nnianiu-dlia-donky-7-rokiv-1672087460",
//               "createdAt": "2022-12-26T20:44:20.204Z",
//               "updatedAt": "2023-01-24T18:27:30.682Z",
//               "publishedAt": "2022-12-26T20:44:20.186Z",
//               "cost": 3000,
//               "is_urgent": false,
//               "location_title": "Трускавець, Львівська область, Україна, 82200",
//               "location_lat": 49.2760303,
//               "location_lng": 23.5105576,
//               "is_active": true,
//               "is_contract": false,
//               "proposals_count": 0,
//               "hires_count": null,
//               "new_proposals_count": 0,
//               "living_with_family": false,
//               "inclusive_kids": false,
//               "driving_licence": false,
//               "additionallies": {
//                   "data": [
//                       {
//                           "id": 7,
//                           "attributes": {
//                               "createdAt": "2022-11-23T13:51:57.274Z",
//                               "updatedAt": "2022-11-23T13:51:59.194Z",
//                               "publishedAt": "2022-11-23T13:51:59.190Z",
//                               "label": "Прибирання",
//                               "value": "cleaning"
//                           }
//                       }
//                   ]
//               },
//               "languages": {
//                   "data": [
//                       {
//                           "id": 4,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:24.542Z",
//                               "updatedAt": "2022-08-16T08:12:26.070Z",
//                               "publishedAt": "2022-08-16T08:12:26.067Z",
//                               "value": "ua",
//                               "label": "Українська"
//                           }
//                       }
//                   ]
//               },
//               "territories": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "babysitter",
//                               "label": "територія няні",
//                               "createdAt": "2022-08-16T08:15:34.802Z",
//                               "updatedAt": "2022-08-22T07:29:34.280Z",
//                               "publishedAt": "2022-08-16T08:15:36.086Z"
//                           }
//                       }
//                   ]
//               },
//               "payment_types": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "monthly",
//                               "label": "Помісячно",
//                               "createdAt": "2022-08-16T08:13:35.641Z",
//                               "updatedAt": "2023-01-04T17:39:36.033Z",
//                               "publishedAt": "2022-08-16T08:13:37.278Z"
//                           }
//                       }
//                   ]
//               },
//               "experiences": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "2 ",
//                               "label": "2 роки",
//                               "createdAt": "2022-08-16T08:10:35.346Z",
//                               "updatedAt": "2022-08-22T07:27:28.274Z",
//                               "publishedAt": "2022-08-16T08:10:36.730Z"
//                           }
//                       }
//                   ]
//               },
//               "author": {
//                   "data": {
//                       "id": 51,
//                       "attributes": {
//                           "username": "client",
//                           "email": "mr.archee@gmail.com",
//                           "provider": "local",
//                           "confirmed": true,
//                           "blocked": false,
//                           "createdAt": "2022-12-02T09:45:48.989Z",
//                           "updatedAt": "2023-01-23T20:11:17.302Z",
//                           "first_name": "Wednesday",
//                           "last_name": "Adams",
//                           "role_user": "client",
//                           "about": "some info about me",
//                           "rating": null,
//                           "location_title": "Трускавець, Львівська область, Україна, 82200",
//                           "slug": "doe",
//                           "location_lat": 49.2813855,
//                           "location_lng": 23.494314,
//                           "saved_jobs": [
//                               130
//                           ],
//                           "saved_profiles": null,
//                           "status": null,
//                           "proposals_count": null,
//                           "views": null,
//                           "phone": "+380632767675",
//                           "notifications_settings": {
//                               "offers": false,
//                               "messages": true,
//                               "contracts": false,
//                               "new_proposal": false,
//                               "answer_on_proposal": false
//                           },
//                           "notifications": {
//                               "data": [
//                                   {
//                                       "id": 241,
//                                       "type": "message",
//                                       "is_seen": false,
//                                       "createdAt": "2022-12-08T12:33:57.204Z",
//                                       "updatedAt": "2022-12-08T12:33:57.204Z",
//                                       "event_name": "new_message",
//                                       "relation_id": 456
//                                   }
//                               ],
//                               "last_updated": "2023-01-02T21:27:51.847Z"
//                           },
//                           "average_rating": 0,
//                           "connects_count": 10,
//                           "picture_url": "https://momseek.fra1.digitaloceanspaces.com/strapi/7f25238e52b2359a6e1854a669e2cffe.png",
//                           "voted_comments": [
//                               {
//                                   "id": 7,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 3,
//                                   "vote": false
//                               },
//                               {
//                                   "id": 6,
//                                   "vote": false
//                               },
//                               {
//                                   "id": 4,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 2,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 8,
//                                   "vote": true
//                               }
//                           ],
//                           "onboarding_completed": null,
//                           "inclusive_kids": false,
//                           "driving_licence": false,
//                           "living_with_family": false
//                       }
//                   }
//               },
//               "terms_work": {
//                   "data": null
//               },
//               "children": {
//                   "data": {
//                       "id": 2,
//                       "attributes": {
//                           "value": "2",
//                           "label": "2 дитини",
//                           "createdAt": "2022-08-16T08:09:04.594Z",
//                           "updatedAt": "2022-12-26T20:55:18.348Z",
//                           "publishedAt": "2022-08-16T08:09:05.991Z"
//                       }
//                   }
//               },
//               "education": {
//                   "data": []
//               }
//           }
//       },
//       {
//           "id": 123,
//           "attributes": {
//               "title": "Шукаю старшого  друга для свого майже трирічки. ",
//               "description": "Доброго дня, спільното.\nСину два роки і десять місяців.\nДва - три рази на тиждень 2-3 години.  Спілкування, заняття по віку.  Надалі, у\nприватних повідомленнях з'ясуємо всі деталі.",
//               "slug": "shukaiu-starshoho--druha-dlia-svoho-maizhe-tryrichky--1672418345",
//               "createdAt": "2022-12-30T16:39:04.756Z",
//               "updatedAt": "2023-01-24T18:28:01.720Z",
//               "publishedAt": "2022-12-30T16:39:04.741Z",
//               "cost": 14000,
//               "is_urgent": false,
//               "location_title": "Львів, Львівська область, Україна, 79000",
//               "location_lat": 49.839683,
//               "location_lng": 24.029717,
//               "is_active": true,
//               "is_contract": false,
//               "proposals_count": 1,
//               "hires_count": null,
//               "new_proposals_count": 1,
//               "living_with_family": false,
//               "inclusive_kids": false,
//               "driving_licence": false,
//               "additionallies": {
//                   "data": []
//               },
//               "languages": {
//                   "data": [
//                       {
//                           "id": 4,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:24.542Z",
//                               "updatedAt": "2022-08-16T08:12:26.070Z",
//                               "publishedAt": "2022-08-16T08:12:26.067Z",
//                               "value": "ua",
//                               "label": "Українська"
//                           }
//                       }
//                   ]
//               },
//               "territories": {
//                   "data": [
//                       {
//                           "id": 3,
//                           "attributes": {
//                               "value": "neutral",
//                               "label": "нейтральна територія",
//                               "createdAt": "2022-08-16T08:16:05.740Z",
//                               "updatedAt": "2022-08-22T07:29:41.157Z",
//                               "publishedAt": "2022-08-16T08:16:06.857Z"
//                           }
//                       }
//                   ]
//               },
//               "payment_types": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "monthly",
//                               "label": "Помісячно",
//                               "createdAt": "2022-08-16T08:13:35.641Z",
//                               "updatedAt": "2023-01-04T17:39:36.033Z",
//                               "publishedAt": "2022-08-16T08:13:37.278Z"
//                           }
//                       }
//                   ]
//               },
//               "experiences": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "1",
//                               "label": "1 рік",
//                               "createdAt": "2022-08-16T08:10:09.320Z",
//                               "updatedAt": "2022-08-22T07:27:22.882Z",
//                               "publishedAt": "2022-08-16T08:10:11.572Z"
//                           }
//                       }
//                   ]
//               },
//               "author": {
//                   "data": {
//                       "id": 74,
//                       "attributes": {
//                           "username": "Anna",
//                           "email": "test4@gmail.com",
//                           "provider": "local",
//                           "confirmed": true,
//                           "blocked": false,
//                           "createdAt": "2022-12-30T16:12:25.367Z",
//                           "updatedAt": "2023-01-26T17:46:36.449Z",
//                           "first_name": "Анна",
//                           "last_name": "Войтович",
//                           "role_user": "client",
//                           "about": null,
//                           "rating": null,
//                           "location_title": null,
//                           "slug": "vojtovich",
//                           "location_lat": null,
//                           "location_lng": null,
//                           "saved_jobs": null,
//                           "saved_profiles": null,
//                           "status": null,
//                           "proposals_count": null,
//                           "views": null,
//                           "phone": "0121112233",
//                           "notifications_settings": null,
//                           "notifications": {
//                               "data": [
//                                   {
//                                       "id": 250,
//                                       "type": "proposal",
//                                       "is_seen": false,
//                                       "createdAt": "2023-01-05T11:40:15.950Z",
//                                       "updatedAt": "2023-01-05T11:40:15.950Z",
//                                       "event_name": "new_proposal",
//                                       "relation_id": 194
//                                   }
//                               ],
//                               "last_updated": "2023-01-05T11:40:16.724Z"
//                           },
//                           "average_rating": 0,
//                           "connects_count": 10,
//                           "picture_url": null,
//                           "voted_comments": null,
//                           "onboarding_completed": false,
//                           "inclusive_kids": false,
//                           "driving_licence": false,
//                           "living_with_family": false
//                       }
//                   }
//               },
//               "terms_work": {
//                   "data": null
//               },
//               "children": {
//                   "data": {
//                       "id": 1,
//                       "attributes": {
//                           "value": "1",
//                           "label": "1 дитина",
//                           "createdAt": "2022-08-16T08:08:36.827Z",
//                           "updatedAt": "2022-12-26T20:55:26.760Z",
//                           "publishedAt": "2022-08-16T08:08:38.401Z"
//                       }
//                   }
//               },
//               "education": {
//                   "data": []
//               }
//           }
//       },
//       {
//           "id": 124,
//           "attributes": {
//               "title": "Працюючі батьки шукають супроводжуючу для 8-ї дівчинки",
//               "description": "Працюючі батьки шукають супроводжуючу для 8-ї дівчинки на 1-2 години в будні дні.\nПотрібно забирати зі школи переважно о 13:20 (Севастопольська площа) та заводити в музичну школу (все в пішій доступності).",
//               "slug": "pratsiuiuchi-batky-shukaiut-suprovodzhuiuchu-dlia-8-i-divchynky-1672418665",
//               "createdAt": "2022-12-30T16:44:25.557Z",
//               "updatedAt": "2023-01-24T18:28:06.554Z",
//               "publishedAt": "2022-12-30T16:44:25.548Z",
//               "cost": 8000,
//               "is_urgent": false,
//               "location_title": "Харків, Харківська область, Україна",
//               "location_lat": 49.9935,
//               "location_lng": 36.230383,
//               "is_active": true,
//               "is_contract": false,
//               "proposals_count": 0,
//               "hires_count": null,
//               "new_proposals_count": 0,
//               "living_with_family": false,
//               "inclusive_kids": false,
//               "driving_licence": false,
//               "additionallies": {
//                   "data": []
//               },
//               "languages": {
//                   "data": [
//                       {
//                           "id": 3,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:08.616Z",
//                               "updatedAt": "2022-08-16T08:12:09.897Z",
//                               "publishedAt": "2022-08-16T08:12:09.894Z",
//                               "value": "eng",
//                               "label": "Англійська"
//                           }
//                       },
//                       {
//                           "id": 4,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:24.542Z",
//                               "updatedAt": "2022-08-16T08:12:26.070Z",
//                               "publishedAt": "2022-08-16T08:12:26.067Z",
//                               "value": "ua",
//                               "label": "Українська"
//                           }
//                       }
//                   ]
//               },
//               "territories": {
//                   "data": [
//                       {
//                           "id": 3,
//                           "attributes": {
//                               "value": "neutral",
//                               "label": "нейтральна територія",
//                               "createdAt": "2022-08-16T08:16:05.740Z",
//                               "updatedAt": "2022-08-22T07:29:41.157Z",
//                               "publishedAt": "2022-08-16T08:16:06.857Z"
//                           }
//                       }
//                   ]
//               },
//               "payment_types": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "fixed",
//                               "label": "Одноразова",
//                               "createdAt": "2022-08-16T08:13:51.518Z",
//                               "updatedAt": "2023-01-04T17:39:29.930Z",
//                               "publishedAt": "2022-08-16T08:13:55.169Z"
//                           }
//                       }
//                   ]
//               },
//               "experiences": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "1",
//                               "label": "1 рік",
//                               "createdAt": "2022-08-16T08:10:09.320Z",
//                               "updatedAt": "2022-08-22T07:27:22.882Z",
//                               "publishedAt": "2022-08-16T08:10:11.572Z"
//                           }
//                       }
//                   ]
//               },
//               "author": {
//                   "data": {
//                       "id": 75,
//                       "attributes": {
//                           "username": "Solomiia",
//                           "email": "test5@gmail.com",
//                           "provider": "local",
//                           "confirmed": true,
//                           "blocked": false,
//                           "createdAt": "2022-12-30T16:41:56.045Z",
//                           "updatedAt": "2022-12-30T16:42:31.238Z",
//                           "first_name": "Соломія",
//                           "last_name": "Бойко",
//                           "role_user": "client",
//                           "about": null,
//                           "rating": null,
//                           "location_title": null,
//                           "slug": "bojko",
//                           "location_lat": null,
//                           "location_lng": null,
//                           "saved_jobs": null,
//                           "saved_profiles": null,
//                           "status": null,
//                           "proposals_count": null,
//                           "views": null,
//                           "phone": "01233344230",
//                           "notifications_settings": null,
//                           "notifications": null,
//                           "average_rating": 0,
//                           "connects_count": 10,
//                           "picture_url": null,
//                           "voted_comments": null,
//                           "onboarding_completed": null,
//                           "inclusive_kids": null,
//                           "driving_licence": null,
//                           "living_with_family": null
//                       }
//                   }
//               },
//               "terms_work": {
//                   "data": null
//               },
//               "children": {
//                   "data": {
//                       "id": 1,
//                       "attributes": {
//                           "value": "1",
//                           "label": "1 дитина",
//                           "createdAt": "2022-08-16T08:08:36.827Z",
//                           "updatedAt": "2022-12-26T20:55:26.760Z",
//                           "publishedAt": "2022-08-16T08:08:38.401Z"
//                       }
//                   }
//               },
//               "education": {
//                   "data": []
//               }
//           }
//       },
//       {
//           "id": 125,
//           "attributes": {
//               "title": "Ищу няню для девочки 1 год 3 месяца ",
//               "description": "Добрый день!\nИщу няню для девочки 1 год 3 месяца очень активная, веселая любит танцевать!\nТребования к няне : Чистоплотная, активная, веселая, терпеливая уравновешенная. Наличие опыта работы. Возраст до 55 лет.\nГлавное требование обеспечение веселого времени препровождения (знание песенок, стишков) и безопасность ребенка!! Девочка, очень активная с легкостью взбирается на поверхности и быстро бегает.\nОбязанности няни:\nГигиена, кормление, чтение книг, прогулки, укладывание на сон( ребенок спит 2 раза в день в коляске на улице) поддержание порядка в комнате имеется ввиду чистота игрушек и порядок в них( уборкой и готовкой занимается мама)\nГрафик работы \nС 7:30 - 8:00 до минимум 16:00 желательно до 17/18:00\nС понедельника по пятницу в выходные по договоренности желательно 1 рабочий выходной график оговаривается.  Другой график не рассматриваем, пожалуйста  просмотрите маршрут прежде чем писать.\nP.S Если вас заинтересовало предложение пишите , пожалуйста, в личные сообщения с указание вашего возраста и пожеланиями по оплате.",
//               "slug": "yshchu-nianiu-dlia-devochky-1-hod-3-mesiatsa--1672419150",
//               "createdAt": "2022-12-30T16:52:30.176Z",
//               "updatedAt": "2023-01-24T18:28:12.668Z",
//               "publishedAt": "2022-12-30T16:52:30.151Z",
//               "cost": 25000,
//               "is_urgent": true,
//               "location_title": "Одеса, Одеська область, Україна, 65000",
//               "location_lat": 46.482526,
//               "location_lng": 30.7233095,
//               "is_active": true,
//               "is_contract": false,
//               "proposals_count": 0,
//               "hires_count": null,
//               "new_proposals_count": 0,
//               "living_with_family": false,
//               "inclusive_kids": false,
//               "driving_licence": false,
//               "additionallies": {
//                   "data": [
//                       {
//                           "id": 7,
//                           "attributes": {
//                               "createdAt": "2022-11-23T13:51:57.274Z",
//                               "updatedAt": "2022-11-23T13:51:59.194Z",
//                               "publishedAt": "2022-11-23T13:51:59.190Z",
//                               "label": "Прибирання",
//                               "value": "cleaning"
//                           }
//                       }
//                   ]
//               },
//               "languages": {
//                   "data": [
//                       {
//                           "id": 3,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:08.616Z",
//                               "updatedAt": "2022-08-16T08:12:09.897Z",
//                               "publishedAt": "2022-08-16T08:12:09.894Z",
//                               "value": "eng",
//                               "label": "Англійська"
//                           }
//                       },
//                       {
//                           "id": 4,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:24.542Z",
//                               "updatedAt": "2022-08-16T08:12:26.070Z",
//                               "publishedAt": "2022-08-16T08:12:26.067Z",
//                               "value": "ua",
//                               "label": "Українська"
//                           }
//                       }
//                   ]
//               },
//               "territories": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "parent",
//                               "label": "територія батьків",
//                               "createdAt": "2022-08-16T08:14:46.698Z",
//                               "updatedAt": "2022-08-22T07:29:48.710Z",
//                               "publishedAt": "2022-08-16T08:14:47.844Z"
//                           }
//                       }
//                   ]
//               },
//               "payment_types": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "monthly",
//                               "label": "Помісячно",
//                               "createdAt": "2022-08-16T08:13:35.641Z",
//                               "updatedAt": "2023-01-04T17:39:36.033Z",
//                               "publishedAt": "2022-08-16T08:13:37.278Z"
//                           }
//                       }
//                   ]
//               },
//               "experiences": {
//                   "data": [
//                       {
//                           "id": 4,
//                           "attributes": {
//                               "value": "4",
//                               "label": "4 роки",
//                               "createdAt": "2022-08-16T08:11:21.413Z",
//                               "updatedAt": "2022-08-22T07:27:39.048Z",
//                               "publishedAt": "2022-08-16T08:11:22.779Z"
//                           }
//                       }
//                   ]
//               },
//               "author": {
//                   "data": {
//                       "id": 76,
//                       "attributes": {
//                           "username": "Mariia",
//                           "email": "test6@gmail.com",
//                           "provider": "local",
//                           "confirmed": true,
//                           "blocked": false,
//                           "createdAt": "2022-12-30T16:49:08.004Z",
//                           "updatedAt": "2022-12-30T16:50:19.783Z",
//                           "first_name": "Марія",
//                           "last_name": "Курочка",
//                           "role_user": "client",
//                           "about": null,
//                           "rating": null,
//                           "location_title": null,
//                           "slug": "kurochka",
//                           "location_lat": null,
//                           "location_lng": null,
//                           "saved_jobs": null,
//                           "saved_profiles": null,
//                           "status": null,
//                           "proposals_count": null,
//                           "views": null,
//                           "phone": "0999999999",
//                           "notifications_settings": null,
//                           "notifications": null,
//                           "average_rating": 0,
//                           "connects_count": 10,
//                           "picture_url": null,
//                           "voted_comments": null,
//                           "onboarding_completed": null,
//                           "inclusive_kids": null,
//                           "driving_licence": null,
//                           "living_with_family": null
//                       }
//                   }
//               },
//               "terms_work": {
//                   "data": null
//               },
//               "children": {
//                   "data": {
//                       "id": 1,
//                       "attributes": {
//                           "value": "1",
//                           "label": "1 дитина",
//                           "createdAt": "2022-08-16T08:08:36.827Z",
//                           "updatedAt": "2022-12-26T20:55:26.760Z",
//                           "publishedAt": "2022-08-16T08:08:38.401Z"
//                       }
//                   }
//               },
//               "education": {
//                   "data": []
//               }
//           }
//       },
//       {
//           "id": 128,
//           "attributes": {
//               "title": "Шукаю нняню для доньки, 7 років",
//               "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//               "slug": "shukayu-nnyanyu-dlya-donki-7-rokiv",
//               "createdAt": "2023-01-15T12:10:57.582Z",
//               "updatedAt": "2023-01-24T18:26:27.600Z",
//               "publishedAt": "2023-01-15T12:11:11.507Z",
//               "cost": 3000,
//               "is_urgent": false,
//               "location_title": "Трускавець, Львівська область, Україна, 82200",
//               "location_lat": 49.2760303,
//               "location_lng": 23.5105576,
//               "is_active": true,
//               "is_contract": false,
//               "proposals_count": 0,
//               "hires_count": null,
//               "new_proposals_count": 0,
//               "living_with_family": false,
//               "inclusive_kids": false,
//               "driving_licence": false,
//               "additionallies": {
//                   "data": [
//                       {
//                           "id": 7,
//                           "attributes": {
//                               "createdAt": "2022-11-23T13:51:57.274Z",
//                               "updatedAt": "2022-11-23T13:51:59.194Z",
//                               "publishedAt": "2022-11-23T13:51:59.190Z",
//                               "label": "Прибирання",
//                               "value": "cleaning"
//                           }
//                       }
//                   ]
//               },
//               "languages": {
//                   "data": [
//                       {
//                           "id": 4,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:24.542Z",
//                               "updatedAt": "2022-08-16T08:12:26.070Z",
//                               "publishedAt": "2022-08-16T08:12:26.067Z",
//                               "value": "ua",
//                               "label": "Українська"
//                           }
//                       }
//                   ]
//               },
//               "territories": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "babysitter",
//                               "label": "територія няні",
//                               "createdAt": "2022-08-16T08:15:34.802Z",
//                               "updatedAt": "2022-08-22T07:29:34.280Z",
//                               "publishedAt": "2022-08-16T08:15:36.086Z"
//                           }
//                       }
//                   ]
//               },
//               "payment_types": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "monthly",
//                               "label": "Помісячно",
//                               "createdAt": "2022-08-16T08:13:35.641Z",
//                               "updatedAt": "2023-01-04T17:39:36.033Z",
//                               "publishedAt": "2022-08-16T08:13:37.278Z"
//                           }
//                       }
//                   ]
//               },
//               "experiences": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "2 ",
//                               "label": "2 роки",
//                               "createdAt": "2022-08-16T08:10:35.346Z",
//                               "updatedAt": "2022-08-22T07:27:28.274Z",
//                               "publishedAt": "2022-08-16T08:10:36.730Z"
//                           }
//                       }
//                   ]
//               },
//               "author": {
//                   "data": {
//                       "id": 51,
//                       "attributes": {
//                           "username": "client",
//                           "email": "mr.archee@gmail.com",
//                           "provider": "local",
//                           "confirmed": true,
//                           "blocked": false,
//                           "createdAt": "2022-12-02T09:45:48.989Z",
//                           "updatedAt": "2023-01-23T20:11:17.302Z",
//                           "first_name": "Wednesday",
//                           "last_name": "Adams",
//                           "role_user": "client",
//                           "about": "some info about me",
//                           "rating": null,
//                           "location_title": "Трускавець, Львівська область, Україна, 82200",
//                           "slug": "doe",
//                           "location_lat": 49.2813855,
//                           "location_lng": 23.494314,
//                           "saved_jobs": [
//                               130
//                           ],
//                           "saved_profiles": null,
//                           "status": null,
//                           "proposals_count": null,
//                           "views": null,
//                           "phone": "+380632767675",
//                           "notifications_settings": {
//                               "offers": false,
//                               "messages": true,
//                               "contracts": false,
//                               "new_proposal": false,
//                               "answer_on_proposal": false
//                           },
//                           "notifications": {
//                               "data": [
//                                   {
//                                       "id": 241,
//                                       "type": "message",
//                                       "is_seen": false,
//                                       "createdAt": "2022-12-08T12:33:57.204Z",
//                                       "updatedAt": "2022-12-08T12:33:57.204Z",
//                                       "event_name": "new_message",
//                                       "relation_id": 456
//                                   }
//                               ],
//                               "last_updated": "2023-01-02T21:27:51.847Z"
//                           },
//                           "average_rating": 0,
//                           "connects_count": 10,
//                           "picture_url": "https://momseek.fra1.digitaloceanspaces.com/strapi/7f25238e52b2359a6e1854a669e2cffe.png",
//                           "voted_comments": [
//                               {
//                                   "id": 7,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 3,
//                                   "vote": false
//                               },
//                               {
//                                   "id": 6,
//                                   "vote": false
//                               },
//                               {
//                                   "id": 4,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 2,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 8,
//                                   "vote": true
//                               }
//                           ],
//                           "onboarding_completed": null,
//                           "inclusive_kids": false,
//                           "driving_licence": false,
//                           "living_with_family": false
//                       }
//                   }
//               },
//               "terms_work": {
//                   "data": null
//               },
//               "children": {
//                   "data": {
//                       "id": 2,
//                       "attributes": {
//                           "value": "2",
//                           "label": "2 дитини",
//                           "createdAt": "2022-08-16T08:09:04.594Z",
//                           "updatedAt": "2022-12-26T20:55:18.348Z",
//                           "publishedAt": "2022-08-16T08:09:05.991Z"
//                       }
//                   }
//               },
//               "education": {
//                   "data": []
//               }
//           }
//       },
//       {
//           "id": 129,
//           "attributes": {
//               "title": "Шукаю нняню для доньки, 7 років",
//               "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//               "slug": "shukayu-nnyanyu-dlya-donki-7-rokiv-1",
//               "createdAt": "2023-01-15T12:11:23.812Z",
//               "updatedAt": "2023-01-24T18:26:22.911Z",
//               "publishedAt": "2023-01-15T12:11:24.800Z",
//               "cost": 3000,
//               "is_urgent": false,
//               "location_title": "Трускавець, Львівська область, Україна, 82200",
//               "location_lat": 49.2760303,
//               "location_lng": 23.5105576,
//               "is_active": true,
//               "is_contract": false,
//               "proposals_count": 0,
//               "hires_count": null,
//               "new_proposals_count": 0,
//               "living_with_family": false,
//               "inclusive_kids": false,
//               "driving_licence": false,
//               "additionallies": {
//                   "data": [
//                       {
//                           "id": 7,
//                           "attributes": {
//                               "createdAt": "2022-11-23T13:51:57.274Z",
//                               "updatedAt": "2022-11-23T13:51:59.194Z",
//                               "publishedAt": "2022-11-23T13:51:59.190Z",
//                               "label": "Прибирання",
//                               "value": "cleaning"
//                           }
//                       }
//                   ]
//               },
//               "languages": {
//                   "data": [
//                       {
//                           "id": 4,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:24.542Z",
//                               "updatedAt": "2022-08-16T08:12:26.070Z",
//                               "publishedAt": "2022-08-16T08:12:26.067Z",
//                               "value": "ua",
//                               "label": "Українська"
//                           }
//                       }
//                   ]
//               },
//               "territories": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "babysitter",
//                               "label": "територія няні",
//                               "createdAt": "2022-08-16T08:15:34.802Z",
//                               "updatedAt": "2022-08-22T07:29:34.280Z",
//                               "publishedAt": "2022-08-16T08:15:36.086Z"
//                           }
//                       }
//                   ]
//               },
//               "payment_types": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "monthly",
//                               "label": "Помісячно",
//                               "createdAt": "2022-08-16T08:13:35.641Z",
//                               "updatedAt": "2023-01-04T17:39:36.033Z",
//                               "publishedAt": "2022-08-16T08:13:37.278Z"
//                           }
//                       }
//                   ]
//               },
//               "experiences": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "2 ",
//                               "label": "2 роки",
//                               "createdAt": "2022-08-16T08:10:35.346Z",
//                               "updatedAt": "2022-08-22T07:27:28.274Z",
//                               "publishedAt": "2022-08-16T08:10:36.730Z"
//                           }
//                       }
//                   ]
//               },
//               "author": {
//                   "data": {
//                       "id": 51,
//                       "attributes": {
//                           "username": "client",
//                           "email": "mr.archee@gmail.com",
//                           "provider": "local",
//                           "confirmed": true,
//                           "blocked": false,
//                           "createdAt": "2022-12-02T09:45:48.989Z",
//                           "updatedAt": "2023-01-23T20:11:17.302Z",
//                           "first_name": "Wednesday",
//                           "last_name": "Adams",
//                           "role_user": "client",
//                           "about": "some info about me",
//                           "rating": null,
//                           "location_title": "Трускавець, Львівська область, Україна, 82200",
//                           "slug": "doe",
//                           "location_lat": 49.2813855,
//                           "location_lng": 23.494314,
//                           "saved_jobs": [
//                               130
//                           ],
//                           "saved_profiles": null,
//                           "status": null,
//                           "proposals_count": null,
//                           "views": null,
//                           "phone": "+380632767675",
//                           "notifications_settings": {
//                               "offers": false,
//                               "messages": true,
//                               "contracts": false,
//                               "new_proposal": false,
//                               "answer_on_proposal": false
//                           },
//                           "notifications": {
//                               "data": [
//                                   {
//                                       "id": 241,
//                                       "type": "message",
//                                       "is_seen": false,
//                                       "createdAt": "2022-12-08T12:33:57.204Z",
//                                       "updatedAt": "2022-12-08T12:33:57.204Z",
//                                       "event_name": "new_message",
//                                       "relation_id": 456
//                                   }
//                               ],
//                               "last_updated": "2023-01-02T21:27:51.847Z"
//                           },
//                           "average_rating": 0,
//                           "connects_count": 10,
//                           "picture_url": "https://momseek.fra1.digitaloceanspaces.com/strapi/7f25238e52b2359a6e1854a669e2cffe.png",
//                           "voted_comments": [
//                               {
//                                   "id": 7,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 3,
//                                   "vote": false
//                               },
//                               {
//                                   "id": 6,
//                                   "vote": false
//                               },
//                               {
//                                   "id": 4,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 2,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 8,
//                                   "vote": true
//                               }
//                           ],
//                           "onboarding_completed": null,
//                           "inclusive_kids": false,
//                           "driving_licence": false,
//                           "living_with_family": false
//                       }
//                   }
//               },
//               "terms_work": {
//                   "data": null
//               },
//               "children": {
//                   "data": {
//                       "id": 2,
//                       "attributes": {
//                           "value": "2",
//                           "label": "2 дитини",
//                           "createdAt": "2022-08-16T08:09:04.594Z",
//                           "updatedAt": "2022-12-26T20:55:18.348Z",
//                           "publishedAt": "2022-08-16T08:09:05.991Z"
//                       }
//                   }
//               },
//               "education": {
//                   "data": []
//               }
//           }
//       },
//       {
//           "id": 130,
//           "attributes": {
//               "title": "Шукаю нняню для доньки, 7 років",
//               "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//               "slug": "shukayu-nnyanyu-dlya-donki-7-rokiv-2",
//               "createdAt": "2023-01-15T12:11:30.378Z",
//               "updatedAt": "2023-01-24T18:26:16.371Z",
//               "publishedAt": "2023-01-15T12:11:32.474Z",
//               "cost": 3000,
//               "is_urgent": false,
//               "location_title": "Трускавець, Львівська область, Україна, 82200",
//               "location_lat": 49.2760303,
//               "location_lng": 23.5105576,
//               "is_active": true,
//               "is_contract": false,
//               "proposals_count": 0,
//               "hires_count": null,
//               "new_proposals_count": 0,
//               "living_with_family": false,
//               "inclusive_kids": false,
//               "driving_licence": false,
//               "additionallies": {
//                   "data": [
//                       {
//                           "id": 7,
//                           "attributes": {
//                               "createdAt": "2022-11-23T13:51:57.274Z",
//                               "updatedAt": "2022-11-23T13:51:59.194Z",
//                               "publishedAt": "2022-11-23T13:51:59.190Z",
//                               "label": "Прибирання",
//                               "value": "cleaning"
//                           }
//                       }
//                   ]
//               },
//               "languages": {
//                   "data": [
//                       {
//                           "id": 4,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:24.542Z",
//                               "updatedAt": "2022-08-16T08:12:26.070Z",
//                               "publishedAt": "2022-08-16T08:12:26.067Z",
//                               "value": "ua",
//                               "label": "Українська"
//                           }
//                       }
//                   ]
//               },
//               "territories": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "babysitter",
//                               "label": "територія няні",
//                               "createdAt": "2022-08-16T08:15:34.802Z",
//                               "updatedAt": "2022-08-22T07:29:34.280Z",
//                               "publishedAt": "2022-08-16T08:15:36.086Z"
//                           }
//                       }
//                   ]
//               },
//               "payment_types": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "monthly",
//                               "label": "Помісячно",
//                               "createdAt": "2022-08-16T08:13:35.641Z",
//                               "updatedAt": "2023-01-04T17:39:36.033Z",
//                               "publishedAt": "2022-08-16T08:13:37.278Z"
//                           }
//                       }
//                   ]
//               },
//               "experiences": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "2 ",
//                               "label": "2 роки",
//                               "createdAt": "2022-08-16T08:10:35.346Z",
//                               "updatedAt": "2022-08-22T07:27:28.274Z",
//                               "publishedAt": "2022-08-16T08:10:36.730Z"
//                           }
//                       }
//                   ]
//               },
//               "author": {
//                   "data": {
//                       "id": 51,
//                       "attributes": {
//                           "username": "client",
//                           "email": "mr.archee@gmail.com",
//                           "provider": "local",
//                           "confirmed": true,
//                           "blocked": false,
//                           "createdAt": "2022-12-02T09:45:48.989Z",
//                           "updatedAt": "2023-01-23T20:11:17.302Z",
//                           "first_name": "Wednesday",
//                           "last_name": "Adams",
//                           "role_user": "client",
//                           "about": "some info about me",
//                           "rating": null,
//                           "location_title": "Трускавець, Львівська область, Україна, 82200",
//                           "slug": "doe",
//                           "location_lat": 49.2813855,
//                           "location_lng": 23.494314,
//                           "saved_jobs": [
//                               130
//                           ],
//                           "saved_profiles": null,
//                           "status": null,
//                           "proposals_count": null,
//                           "views": null,
//                           "phone": "+380632767675",
//                           "notifications_settings": {
//                               "offers": false,
//                               "messages": true,
//                               "contracts": false,
//                               "new_proposal": false,
//                               "answer_on_proposal": false
//                           },
//                           "notifications": {
//                               "data": [
//                                   {
//                                       "id": 241,
//                                       "type": "message",
//                                       "is_seen": false,
//                                       "createdAt": "2022-12-08T12:33:57.204Z",
//                                       "updatedAt": "2022-12-08T12:33:57.204Z",
//                                       "event_name": "new_message",
//                                       "relation_id": 456
//                                   }
//                               ],
//                               "last_updated": "2023-01-02T21:27:51.847Z"
//                           },
//                           "average_rating": 0,
//                           "connects_count": 10,
//                           "picture_url": "https://momseek.fra1.digitaloceanspaces.com/strapi/7f25238e52b2359a6e1854a669e2cffe.png",
//                           "voted_comments": [
//                               {
//                                   "id": 7,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 3,
//                                   "vote": false
//                               },
//                               {
//                                   "id": 6,
//                                   "vote": false
//                               },
//                               {
//                                   "id": 4,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 2,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 8,
//                                   "vote": true
//                               }
//                           ],
//                           "onboarding_completed": null,
//                           "inclusive_kids": false,
//                           "driving_licence": false,
//                           "living_with_family": false
//                       }
//                   }
//               },
//               "terms_work": {
//                   "data": null
//               },
//               "children": {
//                   "data": {
//                       "id": 2,
//                       "attributes": {
//                           "value": "2",
//                           "label": "2 дитини",
//                           "createdAt": "2022-08-16T08:09:04.594Z",
//                           "updatedAt": "2022-12-26T20:55:18.348Z",
//                           "publishedAt": "2022-08-16T08:09:05.991Z"
//                       }
//                   }
//               },
//               "education": {
//                   "data": []
//               }
//           }
//       },
//       {
//           "id": 126,
//           "attributes": {
//               "title": "Шукаємо няню у Дрогобичі",
//               "description": "Добрый день! Ищу няню для девочки 1 год 3 месяца очень активная, веселая любит танцевать! Требования к няне : Чистоплотная, активная, веселая, терпеливая уравновешенная. Наличие опыта работы. Возраст до 55 лет. Главное требование обеспечение веселого времени препровождения (знание песенок, стишков) и безопасность ребенка!! Девочка, очень активная с легкостью взбирается на поверхности и быстро бегает. Обязанности няни: Гигиена, кормление, чтение книг, прогулки, укладывание на сон( ребенок спит 2 раза в день в коляске на улице) поддержание порядка в комнате имеется ввиду чистота игрушек и порядок в них( уборкой и готовкой занимается мама) График работы С 7:30 - 8:00 до минимум 16:00 желательно до 17/18:00 С понедельника по пятницу в выходные по договоренности желательно 1 рабочий выходной график оговаривается. Другой график не рассматриваем, пожалуйста просмотрите маршрут прежде чем писать. P.S Если вас заинтересовало предложение пишите , пожалуйста, в личные сообщения с указание вашего возраста и пожеланиями по оплате.",
//               "slug": "shukaiemo-nianiu-u-drohobychi-1673440517",
//               "createdAt": "2023-01-11T12:35:17.198Z",
//               "updatedAt": "2023-01-24T18:28:21.515Z",
//               "publishedAt": "2023-01-11T12:35:17.185Z",
//               "cost": 10000,
//               "is_urgent": false,
//               "location_title": "Дрогобич, Львівська область, Україна, 82100",
//               "location_lat": 49.3655734,
//               "location_lng": 23.4860479,
//               "is_active": true,
//               "is_contract": false,
//               "proposals_count": 0,
//               "hires_count": null,
//               "new_proposals_count": 0,
//               "living_with_family": false,
//               "inclusive_kids": false,
//               "driving_licence": false,
//               "additionallies": {
//                   "data": [
//                       {
//                           "id": 8,
//                           "attributes": {
//                               "createdAt": "2023-01-09T18:29:08.888Z",
//                               "updatedAt": "2023-01-09T18:29:09.987Z",
//                               "publishedAt": "2023-01-09T18:29:09.984Z",
//                               "label": "готування",
//                               "value": "cooking"
//                           }
//                       }
//                   ]
//               },
//               "languages": {
//                   "data": [
//                       {
//                           "id": 4,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:24.542Z",
//                               "updatedAt": "2022-08-16T08:12:26.070Z",
//                               "publishedAt": "2022-08-16T08:12:26.067Z",
//                               "value": "ua",
//                               "label": "Українська"
//                           }
//                       }
//                   ]
//               },
//               "territories": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "babysitter",
//                               "label": "територія няні",
//                               "createdAt": "2022-08-16T08:15:34.802Z",
//                               "updatedAt": "2022-08-22T07:29:34.280Z",
//                               "publishedAt": "2022-08-16T08:15:36.086Z"
//                           }
//                       }
//                   ]
//               },
//               "payment_types": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "fixed",
//                               "label": "Одноразова",
//                               "createdAt": "2022-08-16T08:13:51.518Z",
//                               "updatedAt": "2023-01-04T17:39:29.930Z",
//                               "publishedAt": "2022-08-16T08:13:55.169Z"
//                           }
//                       }
//                   ]
//               },
//               "experiences": {
//                   "data": [
//                       {
//                           "id": 2,
//                           "attributes": {
//                               "value": "2 ",
//                               "label": "2 роки",
//                               "createdAt": "2022-08-16T08:10:35.346Z",
//                               "updatedAt": "2022-08-22T07:27:28.274Z",
//                               "publishedAt": "2022-08-16T08:10:36.730Z"
//                           }
//                       }
//                   ]
//               },
//               "author": {
//                   "data": {
//                       "id": 51,
//                       "attributes": {
//                           "username": "client",
//                           "email": "mr.archee@gmail.com",
//                           "provider": "local",
//                           "confirmed": true,
//                           "blocked": false,
//                           "createdAt": "2022-12-02T09:45:48.989Z",
//                           "updatedAt": "2023-01-23T20:11:17.302Z",
//                           "first_name": "Wednesday",
//                           "last_name": "Adams",
//                           "role_user": "client",
//                           "about": "some info about me",
//                           "rating": null,
//                           "location_title": "Трускавець, Львівська область, Україна, 82200",
//                           "slug": "doe",
//                           "location_lat": 49.2813855,
//                           "location_lng": 23.494314,
//                           "saved_jobs": [
//                               130
//                           ],
//                           "saved_profiles": null,
//                           "status": null,
//                           "proposals_count": null,
//                           "views": null,
//                           "phone": "+380632767675",
//                           "notifications_settings": {
//                               "offers": false,
//                               "messages": true,
//                               "contracts": false,
//                               "new_proposal": false,
//                               "answer_on_proposal": false
//                           },
//                           "notifications": {
//                               "data": [
//                                   {
//                                       "id": 241,
//                                       "type": "message",
//                                       "is_seen": false,
//                                       "createdAt": "2022-12-08T12:33:57.204Z",
//                                       "updatedAt": "2022-12-08T12:33:57.204Z",
//                                       "event_name": "new_message",
//                                       "relation_id": 456
//                                   }
//                               ],
//                               "last_updated": "2023-01-02T21:27:51.847Z"
//                           },
//                           "average_rating": 0,
//                           "connects_count": 10,
//                           "picture_url": "https://momseek.fra1.digitaloceanspaces.com/strapi/7f25238e52b2359a6e1854a669e2cffe.png",
//                           "voted_comments": [
//                               {
//                                   "id": 7,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 3,
//                                   "vote": false
//                               },
//                               {
//                                   "id": 6,
//                                   "vote": false
//                               },
//                               {
//                                   "id": 4,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 2,
//                                   "vote": true
//                               },
//                               {
//                                   "id": 8,
//                                   "vote": true
//                               }
//                           ],
//                           "onboarding_completed": null,
//                           "inclusive_kids": false,
//                           "driving_licence": false,
//                           "living_with_family": false
//                       }
//                   }
//               },
//               "terms_work": {
//                   "data": null
//               },
//               "children": {
//                   "data": {
//                       "id": 2,
//                       "attributes": {
//                           "value": "2",
//                           "label": "2 дитини",
//                           "createdAt": "2022-08-16T08:09:04.594Z",
//                           "updatedAt": "2022-12-26T20:55:18.348Z",
//                           "publishedAt": "2022-08-16T08:09:05.991Z"
//                       }
//                   }
//               },
//               "education": {
//                   "data": []
//               }
//           }
//       },
//       {
//           "id": 127,
//           "attributes": {
//               "title": "Ищу няню для девочки 1 год 3 месяца ",
//               "description": "Добрый день!\nИщу няню для девочки 1 год 3 месяца очень активная, веселая любит танцевать!\nТребования к няне : Чистоплотная, активная, веселая, терпеливая уравновешенная. Наличие опыта работы. Возраст до 55 лет.\nГлавное требование обеспечение веселого времени препровождения (знание песенок, стишков) и безопасность ребенка!! Девочка, очень активная с легкостью взбирается на поверхности и быстро бегает.\nОбязанности няни:\nГигиена, кормление, чтение книг, прогулки, укладывание на сон( ребенок спит 2 раза в день в коляске на улице) поддержание порядка в комнате имеется ввиду чистота игрушек и порядок в них( уборкой и готовкой занимается мама)\nГрафик работы \nС 7:30 - 8:00 до минимум 16:00 желательно до 17/18:00\nС понедельника по пятницу в выходные по договоренности желательно 1 рабочий выходной график оговаривается.  Другой график не рассматриваем, пожалуйста  просмотрите маршрут прежде чем писать.\nP.S Если вас заинтересовало предложение пишите , пожалуйста, в личные сообщения с указание вашего возраста и пожеланиями по оплате.",
//               "slug": "ishhu-nyanyu-dlya-devochki-1-god-3-mesyacza",
//               "createdAt": "2023-01-15T11:58:03.229Z",
//               "updatedAt": "2023-01-24T18:28:28.891Z",
//               "publishedAt": "2023-01-24T18:28:28.885Z",
//               "cost": 25000,
//               "is_urgent": true,
//               "location_title": "Одеса, Одеська область, Україна, 65000",
//               "location_lat": 46.482526,
//               "location_lng": 30.7233095,
//               "is_active": true,
//               "is_contract": false,
//               "proposals_count": 0,
//               "hires_count": null,
//               "new_proposals_count": 0,
//               "living_with_family": false,
//               "inclusive_kids": false,
//               "driving_licence": false,
//               "additionallies": {
//                   "data": [
//                       {
//                           "id": 7,
//                           "attributes": {
//                               "createdAt": "2022-11-23T13:51:57.274Z",
//                               "updatedAt": "2022-11-23T13:51:59.194Z",
//                               "publishedAt": "2022-11-23T13:51:59.190Z",
//                               "label": "Прибирання",
//                               "value": "cleaning"
//                           }
//                       }
//                   ]
//               },
//               "languages": {
//                   "data": [
//                       {
//                           "id": 3,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:08.616Z",
//                               "updatedAt": "2022-08-16T08:12:09.897Z",
//                               "publishedAt": "2022-08-16T08:12:09.894Z",
//                               "value": "eng",
//                               "label": "Англійська"
//                           }
//                       },
//                       {
//                           "id": 4,
//                           "attributes": {
//                               "createdAt": "2022-08-16T08:12:24.542Z",
//                               "updatedAt": "2022-08-16T08:12:26.070Z",
//                               "publishedAt": "2022-08-16T08:12:26.067Z",
//                               "value": "ua",
//                               "label": "Українська"
//                           }
//                       }
//                   ]
//               },
//               "territories": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "parent",
//                               "label": "територія батьків",
//                               "createdAt": "2022-08-16T08:14:46.698Z",
//                               "updatedAt": "2022-08-22T07:29:48.710Z",
//                               "publishedAt": "2022-08-16T08:14:47.844Z"
//                           }
//                       }
//                   ]
//               },
//               "payment_types": {
//                   "data": [
//                       {
//                           "id": 1,
//                           "attributes": {
//                               "value": "monthly",
//                               "label": "Помісячно",
//                               "createdAt": "2022-08-16T08:13:35.641Z",
//                               "updatedAt": "2023-01-04T17:39:36.033Z",
//                               "publishedAt": "2022-08-16T08:13:37.278Z"
//                           }
//                       }
//                   ]
//               },
//               "experiences": {
//                   "data": [
//                       {
//                           "id": 4,
//                           "attributes": {
//                               "value": "4",
//                               "label": "4 роки",
//                               "createdAt": "2022-08-16T08:11:21.413Z",
//                               "updatedAt": "2022-08-22T07:27:39.048Z",
//                               "publishedAt": "2022-08-16T08:11:22.779Z"
//                           }
//                       }
//                   ]
//               },
//               "author": {
//                   "data": {
//                       "id": 76,
//                       "attributes": {
//                           "username": "Mariia",
//                           "email": "test6@gmail.com",
//                           "provider": "local",
//                           "confirmed": true,
//                           "blocked": false,
//                           "createdAt": "2022-12-30T16:49:08.004Z",
//                           "updatedAt": "2022-12-30T16:50:19.783Z",
//                           "first_name": "Марія",
//                           "last_name": "Курочка",
//                           "role_user": "client",
//                           "about": null,
//                           "rating": null,
//                           "location_title": null,
//                           "slug": "kurochka",
//                           "location_lat": null,
//                           "location_lng": null,
//                           "saved_jobs": null,
//                           "saved_profiles": null,
//                           "status": null,
//                           "proposals_count": null,
//                           "views": null,
//                           "phone": "0999999999",
//                           "notifications_settings": null,
//                           "notifications": null,
//                           "average_rating": 0,
//                           "connects_count": 10,
//                           "picture_url": null,
//                           "voted_comments": null,
//                           "onboarding_completed": null,
//                           "inclusive_kids": null,
//                           "driving_licence": null,
//                           "living_with_family": null
//                       }
//                   }
//               },
//               "terms_work": {
//                   "data": null
//               },
//               "children": {
//                   "data": {
//                       "id": 1,
//                       "attributes": {
//                           "value": "1",
//                           "label": "1 дитина",
//                           "createdAt": "2022-08-16T08:08:36.827Z",
//                           "updatedAt": "2022-12-26T20:55:26.760Z",
//                           "publishedAt": "2022-08-16T08:08:38.401Z"
//                       }
//                   }
//               },
//               "education": {
//                   "data": []
//               }
//           }
//       }
//   ],
//   "meta": {
//       "pagination": {
//           "page": 1,
//           "pageSize": 25,
//           "pageCount": 1,
//           "total": 13
//       }
//   }
// };



