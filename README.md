## steps
## Reviewed by Akhilesh on 23 Nov
1. Set Folder structure as discussed acc webapp repo => `repoV2/pages/sale/templates/Template6`
2. Remove Animation
3. Set Css as discussed and remove from cdn css
4. Faq's section => Mui accordion => Remove Jquery implementation for accordion
5. Remove slick carousel and use react multi-carousel see here `repoV2/pages/sale/templates/Template9/components/sections/ReviewSection/Carousel/index.tsx`
6. Separate dynamic/static data 
dynamic => data that will change from CT => extract object
static => will be hard coded for now later will be moved to constants
as discussed here `src/Template9/components/sections/LearnSection/index.js`
