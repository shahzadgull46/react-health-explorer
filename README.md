
# Grocery App (React)

## Features
- Component based architecture
- Product filtering (Top rated)
- State management using useState
- Modular folder structure

## Tech Used
- React
- JavaScript
- Vite

## Concepts Practiced
- React Hooks (useState)
- Component reusability
- Props drilling
- Array methods (filter/map)
- Folder structuring (industry standard)

## How to run
npm install
npm run dev


## vidoe 5 lets get hooked full notes:

Its not good pratice to keep all things in one file. Make separate file for seperate things. 

Break our app into multiple files. Let us destructure our app. 

Visit given link and read the react answer about structuring files:

https://legacy.reactjs.org/docs/faq-structure.html

All the code files are loacted in src file folder. 

1. We have almost 4 components which are in one file we have to create one folder for one component.
2. When we separrate the components into separate files then how to use them? The answer is by using import export. First always write export then write import. 
3. If you are making component file write the same name as your component name 
4. When you are importing lot of people write the full name of file like import Header from "./components/Header.jsx"; Its okay to write but no need to write jsx or js etc
5. Whenever you have hardcoded data or mock data never keep it in component file This is industry standard
6. One more thing is also hard coded data which is url in our app. and we have to keep it in separate file. 

<img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdORZOyvu57qJGM6Zx9lMy2KwhB8cwUN0_CQ&s" />

Never keep hard coded string in component file. common pratice is to keep it in seprate file like utils or constants or common 

### Methods of using Import & Export:

There are two methods of using import & export

1. using default export/import
2. using name export

### Using  default export/import:

  export default component 

  import component from “path” 

### Using name export:

export const component 

import {component }from “path”

```
 In one file we can use only one export we can not write export twice it will throw an error

  Throws error:
  export default LOGO_URL
  export default LOGO_URL

  IF we have to export multiple things then how we can export them ? 
   - Then we use something as name export 

   How to use this:
   You can just to write export infront of your variable or constant whatever you have
   Like this one:
```

```jsx
export const LOGO_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdORZOyvu57qJGM6Zx9lMy2KwhB8cwUN0_CQ&s";

```

```jsx
This is how you can export multiple things from one file
The question is how i will import it?
  There would be a slight difference in import 
  You have to write it in { } curly braces
```

 import { LOGO_URL } from "../../public/utils/constants";

```jsx
if we have used default export then we don't use curly braces in import
  how to use this:
```

```jsx
<img className="logo" src={LOGO_URL} />
  always write it in curly braces not in double quetation because it is constant

```

Example:

```jsx
(in constants file)
export const IMG_URL =
"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"

export const THUMBNAIL_URL=
   "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"

```

```jsx
(in body component)
import { IMG_URL } from "../../public/utils/constants";
import { THUMBNAIL_URL } from "../../public/utils/constants";

      images: [
      [IMG_URL],
      ],
      thumbnail:
      THUMBNAIL_URL
```

# Part 2:

We add a button of top rating products and also add a click event:

```jsx
<div className="filter">
        <button className="filter-btn" onClick={() => console.log("Clicked")}>
          Top Rated Products
        </button>
      </div>

```

### Our goal is that when we click on button our top rated products(rating>4) shows on web page

Lets make our own product list to understand better:

```jsx
// This is normal js variable
import Product from "./Product";

import { IMG_URL } from "../../public/utils/constants";
import { THUMBNAIL_URL } from "../../public/utils/constants";

  let productListJs = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      category: "beauty",
      price: 9.99,
      rating: 2.56,
      stock: 99,
      images: [
      [IMG_URL],
      ],
      thumbnail:
      THUMBNAIL_URL
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      price: 19.99,
      rating: 2.86,
      stock: 34,

      images: [
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    },
  ];
```

Now onclick we have to filter our products and shows only top rated products :

```jsx
<div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = productListJs.filter(
              (product) => product.rating > 4,
            );
            console.log(filteredList);
          }}
        >
          Top Rated Products
        </button>
      </div>
```

The following code will show our products on web :

```jsx
 <div className="super-saver">
        {productListJs.map((product) => (
          <Product key={product.id} groData={product} />
        ))}
      </div>
    </div>
```

Now go to console and check. After clicking on the button we have our top rated products from our list were on console in the form of object. Our data is filtered but our ui does not updated.

 

### How to update our Ui automatically? (if my list changes it automatically changes our Ui how to do this?)

This is the super power which react has. react is fast in dom manipulation 

If my data changes my Ui will change. why react is fast? Because it can do faster dom manipulation

If we click on button our list will be updating but our UI is not changing. Our Ui will change according to the data. It should automatically change. Do react give us this super power?

Now our product list variable is normal js variable and we want to create a super powerful variable which is know as state variable.

 state variable =⇒ super powerful variable 

### How do we create state var? For that we use react hook .

What is react hook ? =⇒ normal javasrcipt function given by react. It is prebuild(function is utility function which has some logic )

### React Hooks:

Normal js functions/ Normal js utility functions (written by facebook developers. written inside react)

There are multiple react hooks but 2 very imp hooks are given below:

1. useState()
2. useEffect()

### How to use?

### 1. useState =⇒ Use to create state variable =⇒ powerful variable

First of all we need to import useState from react. How we will import it? Import like a named import.  we have imported react. React is imported as default import

```jsx
import{useState} from "react"

```

### How to create a local state variable?

local =⇒ means its access is only in component

Whenever you write useState() its creates a variable. how do you receive this var inside array []

```jsx
// Local state Variable
const [productList]=useState([]);

```

Let give some data to our useState:

```jsx
const [productList]=useState([{
      id: 1,
      title: "Essence Mascara Lash Princess",
      category: "beauty",
      price: 9.99,
      rating: 2.56,
      stock: 99,
      images: [IMG_URL],
      thumbnail: THUMBNAIL_URL,
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      price: 19.99,
      rating: 4.3,
      stock: 34,

      images: [
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    },
    {
      id: 6,
      title: "Eyeshadow Palette with Mirror",
      price: 19.99,
      rating: 4.3,
      stock: 34,

      images: [
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    },]);

```

State variable acts like normal js. It renders 3 products on the web page according to given data 

### Because it is special state/react variable How to modify it?

We can not modify it like normally we do:

productList=[];

This is not correct. Then how we will modify it?

### We will modify/update it by function and it comes as second parameter. (add set with the state variable name)

We can name whatever we wish but it is good pratice to write same as state variable name

how to update ?

we will write the function name and pass it new data which we want to show

```jsx
// Written in body component
const [productList, setproductList] = useState(groProducts);

onClick={() => {
            const filteredList = productList.filter(
              (product) => product.rating > 4,
            );
            setproductList(filteredList)
          }}
```

If our product is normal js variable and we update our list The Ui will not be updated. But if we have super react variable it will keep the Ui insink with that varibale

When our state variable product list changes it automatically updates the Ui. This is called rendering

### Whenever state variable updates react will rerenders the components quickly

Lets use our mock data now instead of our product list:

```jsx
import groProducts from "../../public/utils/mockdata";

 const [productList, setproductList] = useState(groProducts);

```

This is the power of react. If we have to do this in js we have write a lot of code but here we are writing simple and short code. This is the beauty of react. This is why react is most popular language in building Ui 

The logic of updating this Ui is known as rerendring

React is only good at Dom operation 

### We can also write it in different way:

```jsx
const [productList, setproductList] = useState(groProducts);

```

What is it ? This is array destructuring. useState returns an array. 

```jsx
// We can also write like this
const arr = useState(groProducts);

const [productList, setproductList] = arr;
```

or like this:

```jsx
const arr = useState(groProducts);

const productList =arr[0]
const setproductList =arr[1]
```

### How react is doing this?

### Reconciliation algorithm(React fiber(new way of finding diff and updating data)):

Reconciliation =⇒ Whenever something change on Ui its called …

Virtual Dom(normal js object) =⇒ Representation of actual Dom like body component (object)

Actual Dom =⇒ tags like div inside div inside img tag

<div>

<div>

<img>

### Diff algorithm:

finds out the difference between two virtual Dom. The updated virtual Dom & The previous virtual Dom

It calcultes the difference and actually updates on every render cycle

……………………………………………………………………………………………………………………………………………………………

## Reconciliation (very important)

When data changes:

1. React creates a **new virtual tree**
2. Compares it with old one
3. Updates only what changed

Fiber makes this:

- faster
- interruptible
- prioritized

# **React Fiber Architecture(Ai explains):**

## 🧠 What React Fiber really is (simple)

**React Fiber = a smarter engine inside React**

Old React:

- When something changed → React updated the whole UI **in one go**
- If UI was big → app could lag or freeze

Fiber changed that.

---

## ⚡ Core idea

👉 Instead of doing all work at once, React now:

- Breaks work into **small pieces (fibers)**
- Works on them **step by step**
- Can **pause, resume, skip, or cancel**

Think like this:

- Old React = one long task (no breaks)
- Fiber = task split into chunks (like levels in a game)
- 

## 🧩 What is a “Fiber”?

👉 A fiber = **one unit of work**

It represents:

- A component
- Its props
- Its state
- What needs to be updated

Think of **React Fiber** as React getting a "brain upgrade" that allows it to multi-task.

Before Fiber, React was like a worker who had to finish every single task on their desk before taking a break. If a huge task came in, the worker would stay glued to their seat, ignoring everything else—including the phone ringing or someone knocking at the door. In browser terms, this meant if React was busy rendering a huge list, the page would "freeze" and couldn't respond to clicks or typing.

Fiber changed that. Here is the breakdown of how it works from a high-level engineering perspective:

---

## 1. The Core Shift: From "Stack" to "Fiber"

In the old days (React 15 and earlier), React used the built-in JavaScript **Call Stack**. Once it started rendering, it didn't stop until the stack was empty.

**Fiber** is essentially a **virtual re-implementation of the call stack.**

- Instead of using the engine's stack, React now creates "Fiber objects" (units of work).
- Because React now "owns" the stack, it can stop execution, go do something else (like handle a click), and then come back to exactly where it left off.

---

## 2. Scheduling: The "Smart Manager"

The headline feature of Fiber is **Scheduling**. It treats updates like a priority queue rather than "first come, first served."

- **High Priority:** User typing, animations, button clicks. These need immediate feedback (60fps).
- **Low Priority:** Fetching data for a hidden list, logging analytics, or rendering off-screen content.

If React is busy rendering a heavy background report and the user clicks a "Cancel" button, Fiber **pauses** the low-priority report work, handles the click immediately, and then decides whether to finish the report or throw it away.

---

## 3. The "Two-Phase" System

To make this pausing and resuming safe, Fiber splits work into two phases:

### Phase 1: Reconciliation (The "Drafting" Phase)

- **What happens:** React builds a "Work-in-Progress" tree. It figures out what needs to change (diffing).
- **Key trait:** This phase is **asynchronous**. It can be paused, aborted, or restarted without the user seeing anything broken.
- **Why it matters:** This is where the heavy lifting happens.

### Phase 2: Commit (The "Publishing" Phase)

- **What happens:** React takes the computed changes and applies them to the actual DOM.
- **Key trait:** This phase is **synchronous**. Once it starts, it doesn't stop. This ensures the UI doesn't look "half-finished" or glitchy.

---

## 4. The Linked List Structure

Standard trees are hard to traverse if you need to stop in the middle. Fiber solves this by turning the tree into a **Singly Linked List** of "work units."

Each Fiber node points to:

- **Child:** Its first child.
- **Sibling:** The next element next to it.
- **Return:** Its parent (where to go back to after work is done).

This structure allows React to walk the tree manually. If it runs out of time in the current "frame," it just saves a pointer to the current Fiber node and resumes from that pointer in the next frame.

---

## Summary for the Dev Standup

- **The Problem:** Synchronous rendering blocks the main thread (jank).
- **The Solution:** Fiber breaks rendering into small, incremental chunks.
- **The Result:** **Concurrency.** The ability to work on multiple tasks at once, prioritizing the ones that keep the app feeling snappy.

Essentially, Fiber turned React from a "rendering engine" into a **"work scheduler."**