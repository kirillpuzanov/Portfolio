import {v1} from "uuid";
import counterImg from "../assets/img/counter.png";
import clock from "../assets/img/clock.png";


export const dataBase = {

   skillsPage: [
      {
         id: v1(),
         title: 'Js',
         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
         href: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
      },
      {
         id: v1(),
         title: 'React',
         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur, deleniti id illum ipsa magnam modi obcaecati optio porro repellendus voluptas voluptate?',
         href: 'https://facebook.github.io/react-360/img/logo.svg'
      },
      {
         id: v1(),
         title: 'HTML',
         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
         href: 'https://images.vexels.com/media/users/3/166382/isolated/preview/1ad81b62ad0ec81a584bc22016fd016f-html-programming-language-flat-by-vexels.png'
      },
      {
         id: v1(),
         title: 'CSS',
         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur, deleniti id illum ipsa magnam modi obcaecati optio porro repellendus voluptas voluptate? Animi cupiditate dignissimos doloremque excepturi quos similique voluptas.',
         href: 'https://www.iconninja.com/files/237/231/643/css-technology-website-web-internet-css3-style-icon.svg'
      },
   ],
   projectsPage: [
      {
         id: 1,
         title: 'Todolist',
         hrefProject: '#',
         hrefImg: 'https://icon-library.com/images/374-512_17150.png',
         descr: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',

      },
      {
         id: 2,
         title: 'Counter',
         hrefProject: 'https://kirillpuzanov.github.io/myCounter',
         hrefImg: counterImg,
         descr: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit suscipit vero vitae voluptas voluptate voluptatem voluptates.',

      },
      {
         id: 3,
         title: 'Social Network',
         hrefProject: '#',
         hrefImg: 'https://lh3.googleusercontent.com/proxy/zV8GUPkH5Rdtrogemu0gka0N88b7cEdwFta0GqKQyDTIvBkHD6jqwL_RmcL7sScwZialHSX4tR23B8MoPydH7oj48y1dC_-v17udHuJgXsKu5_43Kipntfsge1Ejn6I',
         descr: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit suscipit vero vitae voluptas voluptate voluptatem voluptates.',

      },
      {
         id: 4,
         title: 'Clock',
         hrefProject: '#',
         hrefImg: clock,
         descr: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit suscipit vero vitae voluptas voluptate voluptatem voluptates.',

      },
   ]
}
