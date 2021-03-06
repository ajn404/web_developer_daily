### 基于模型的Javascript Web应用的自动化测试研究

##### 2.2.3DOM事件依赖关系

DOM事件分为三类:

1. 以特定类型对象的属性形式存在的事件:例如常见的onclick事件
2. Listener侦听器
3. 延时回调函数:例如setTimeout(),setInterval()

**当延时回调函数被调⽤后，浏览器将⽤户⾃定义函数放置于执⾏队列，然后当时间达到给定参数时，浏览器才会调⽤这些函数。**

##### 3.3.1FSM模型定义

 (JavaScript 程序的⾏为模型). 使用有限状态机表示⼀个 JavaScript 程序
的⾏为模型 M，M 可被定义为⼀个五元组，M = (S, I, δ, s0, F )：

• S 是⼀个有限的状态集合，程序中的每个页面看做⼀个状态，所有页面的集
合构成了该状态集合；

• I 是可接受的输⼊事件集合，输⼊⼀个事件，执⾏事件后，页面将发⽣变化。
I 是可执⾏的且能使页面发⽣变化的事件集合；

• s0 ∈ S 是程序的⼊⼝状态，即 Web 应用的初始状态；

• F 是程序的最终状态集合，F ⊆ S，表示页面进⼊该状态后将不会跳转到下
⼀个页面，F 在本⽅法中不是必需的；

• δ 是迁移函数，即 δ：S × I → S；

• δ∗ 是本⽂定义的函数，给定符号 e1 · · · en ∈ I∗，δ∗：S × I∗ → S 代表函数，即
δ∗(s, e1 · · · en) = δ∗(δ(s, e1), e2 · · · en) 和 δ∗(s, ϵ) = s，这里的 ϵ 代表空。

