## TodoMVC

### Author Info

name：梁正扬

id：1853562

------

### Project Info

Theme: TodoMVC

deployment: **https://maxleung99.github.io/WebProgramming/todoMVC.html**

github repository: **https://github.com/MaxLeung99/WebProgramming**

**project structure:**

```
|-- web
    |-- README.md
    |-- todoMVC.html
    |-- css
    |   |-- main.css
    |-- js
    |   |-- button.js
    |   |-- main.js
    |-- static
        |-- day.jpeg
        |-- light.png
        |-- moon.png
        |-- moon_2.png
        |-- night.jpeg
        |-- nike.png
        |-- notebook.png
        |-- pencil.jpeg
        |-- pencil.png
        |-- search.png
        |-- sun.png
        |-- trashbin.png
```

todoMVC.html: basic html element and layout if the website

Css: A folder to store customized stylesheet

Js: A folder to store javascript file

static: A folder to store static resources such as images.

------

### Project Introduction

#### Main function

**Basic function:**

- [x] Add、Delete todo
- [x] diplay todolist
- [x] make all todos to be  finished/Cancel all todos to be finished
- [x] delete finished todos
- [x] store data locally and can be recovered when open again

**Advanced function**

- [x] edit a single todo
- [x] todo filter
- [x] search todo containing specific keywords
- [x] A slider with an animation to do highlight, marked as finished, delete with a single todo
- [x] A floating ball that can be dragged in the screen, and doubleclick it, you can switch color mode
- [x] Simple, good style
- [x] highlight todo and put it in the top of the list
- [x] users can see the sum for each category(All, active, finished)
- [x] keyboard shortcut

#### User Interface demo

**MainPage**

1. Day mode MainPage

   <img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625202629518.png" alt="image-20210625202629518" style="zoom:20%;" />

2. Night mode MainPage

<img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625202724444.png" alt="image-20210625202724444" style="zoom:20%;" />

**CRUD operation**

1. add

   A brand new todolist with nothing.

   <img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625202837013.png" alt="image-20210625202837013" style="zoom:20%;" />

   Select the input box and type in a todo， press Enter and you can add a new todo.

   <img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625203125043.png" alt="image-20210625203125043" style="zoom:20%;" />

2. Marked as finished.

   1) first method to mark as finished is choose the todo and press the **task** text with a line through it. 

   <img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625203254169.png" alt="image-20210625203254169" style="zoom:20%;" />

   

<img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625203329098.png" alt="image-20210625203329098" style="zoom:20%;" />

​		2) Edit the todo list with its own slider.

​			First we have to pullout the slider and press the nike button.

<img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625203630954.png" alt="image-20210625203630954" style="zoom:20%;" />

<img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625203701995.png" alt="image-20210625203701995" style="zoom:20%;" />



3. delete finished

   1) press the trashbin button in the brown area. It will delete all finished todo.

   <img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625203851859.png" alt="image-20210625203851859" style="zoom:20%;" />

   2） You can also pullout the slider and delete in the slider by clicking the cross

   ![image-20210625203956054](/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625203956054.png)

**Filter & Search**

1. Search

   1) First you have to press the magnifier in the brown box. A searching box will emerge.

   <img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625204149307.png" alt="image-20210625204149307" style="zoom:20%;" />

   

   2) Input your keyword, then you can get the result.

   <img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625204219375.png" alt="image-20210625204219375" style="zoom:20%;" />

2. Filter

   The three boxes with label 'All', 'Active', 'Finish' can actually be clicked. And the list below will display the todolist for each category.

   ​																						           **origin todolist**

   <img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625204407316.png" alt="image-20210625204407316" style="zoom:20%;" />

   ------

   ​																							    **Active todolist**

<img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625204447199.png" alt="image-20210625204447199" style="zoom:20%;" />

------

​																								**Finished todolist**

<img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625204553349.png" alt="image-20210625204553349" style="zoom:20%;" />

****



**Highlight**

Tasks are not equally important, some tasks that are crucial should be put at the top of the todolist.

In my implementation, we decorate tasks of high emergency with beautiful color.

**How to highlight?**

Pull out the slider and choose the light bulb, and the text will be colorized.

<img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625204945773.png" alt="image-20210625204945773" style="zoom:20%;" />

<img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625205002211.png" alt="image-20210625205002211" style="zoom:20%;" />

<img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625205017826.png" alt="image-20210625205017826" style="zoom:20%;" />

and it will be put at the top of the list currently, 

<img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625205056795.png" alt="image-20210625205056795" style="zoom:20%;" />

**Floating ball to switch the mode**

1. You can drag the ball and when you release, it will goes right to the side of the screen.

   **You will have to first press the ball(sometimes you can first click the ball once and then drag it) and  drag it with your finger or your mouse.**

   **Actually the best way to drag the ball is first click it once and then drag it. **

   <img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625205220484.png" alt="image-20210625205220484" style="zoom:20%;" />

<img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625205254660.png" alt="image-20210625205254660" style="zoom:20%;" />

2. You can doubleclick the ball to switch the day/night mode

   <img src="/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625205447653.png" alt="image-20210625205447653" style="zoom:20%;" />

   ​																									**night version**

**Local storage**

I use localStorage to store the data of the page, you can actually recover the todolist of and even the color of the text in the todolist.



**Dynamic counter for each category**

The three boxes on the top records the number of todos for each category.

![image-20210625210038027](/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625210038027.png)

Originally it is 0,0,0.

When you add or delete or mark as finished. The number in the box will refresh itself dynamically.

![image-20210625210128470](/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625210128470.png)        add

![image-20210625210154583](/Users/liangzhengyang/Library/Application Support/typora-user-images/image-20210625210154583.png)       marked as finished



