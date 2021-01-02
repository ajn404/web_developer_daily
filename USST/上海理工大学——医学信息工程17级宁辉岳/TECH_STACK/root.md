**[Source Idea](./source_idea.pdf)**

| http://t.cn/A6qHeVlf 计算机科学免费大教材 |
| ----------------------------------------- |
|                                           |
|                                           |
|                                           |



# [逻辑基础](./lf/toc.html)

- 函数式编程

  - haskell

    ```haskell
    primes = filterPrime [2..]
      where filterPrime (p:xs) =
              p : filterPrime [x | x <- xs, x `mod` p /= 0]
    ```

  - Ocaml

    ```bsah
    $ ocaml
            OCaml version 4.11.1
    
    # 1+1;;
    - : int = 2
    ```

  - Scala

    ```scala
    object HelloWorld {
        def main(args: Array[String]): Unit = {
            println("Hello, world!")
        }
    }
    ```

  - Coq

    ```coq
    Definition next_weekday (d:day) : day :=
      match d with
      | monday ⇒ tuesday
      | tuesday ⇒ wednesday
      | wednesday ⇒ thursday
      | thursday ⇒ friday
      | friday ⇒ monday
      | saturday ⇒ monday
      | sunday ⇒ monday
      end.
    ```

- 逻辑

- 计算机辅助定理证明


**[Docker命令速查表](./cheatSheet/Docker_Cheat_Sheet.pdf)**

