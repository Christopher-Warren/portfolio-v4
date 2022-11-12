export const markdownSample = `## Table

| Beep |   No.  |   Boop |
| :--- | :----: | -----: |
| beep |  1024  |    xyz |
| boop | 338845 |    tuv |
| foo  |  10106 | qrstuv |
| bar  |   45   |   lmno |

## Tasklist

* [ ] to do
* [x] done


  
Lists
  * [ ] todo 
  * [x] done
  
  ~~~js
  # fn hey man adasd asd 
  export default function isInViewport(el) {
    var rect = el.getBoundingClientRect();
  

    const heyDude = 123;
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  ~~~
  | :exclamation:  This is very important   |
  |-----------------------------------------|

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

  > **Note**
  > This is a note
  
  # Admonitions
  > **Warning**
  > This is a warning

  ![AltTextHere](/images/headshot.png)



  `;
