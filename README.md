# my-course-roster-NFRIDOY
## React + Vite + TailwindCSS + DaisyUI

##  Questions
### Questions 1:- Add at least 3 Project features 

1. This project has the feature of selecting courses and added to course list (cart).
2. It has the feature of giving alart when you exceed the course credit hour limit. Limit is 20 hrs
3. It has the feature of show the remaining credit hour and total Price of all courses combind.
 

### Questions 2:- Discuss how you managed the state in your assignment project.
<p>
I have used sevrel State in this project. By calling state i mean useState hook.
</p>
<p>
I declared a useState in Main.jsx for maintaine selected Cousers. Main.jsx is the Parent component of two child components ex. Cards.jsx and Cart.jsx. This useStates' set Function is set insine the child of Cards.jsx Card.jsx. The set function is set on onClick Select Button. From their useState of Main.jsx is updating the selected array. Then the value is send as props in Cart.jsx component. In the Cart.jsx component the selected array list is shown.
</p>
<p>
I declared another useState in Cards.jsx for 
</p>