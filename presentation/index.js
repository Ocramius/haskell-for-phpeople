// Import React
import React from "react";
// Import Spectacle Core tags
import {Appear, BlockQuote, Cite, Code, Deck, Heading, List, ListItem, Quote, Slide, Text, Image} from "spectacle";

import CodeSlide from "spectacle-code-slide";

import createTheme from "spectacle/lib/themes/default";

window.Prism = require("prismjs");

const loadLanguages = require("prismjs/components/index");

loadLanguages(["php", "haskell"]);

require("normalize.css");
require("prismjs/themes/prism.css");
require("./index.css");

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["none"]} transitionDuration={0} theme={theme} progress="none" controls={false}>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        <span className="good-orange">Haskell</span>
                        <br/>
                        for
                        <br/>
                        <span className="good-green">PHPeople</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Image src={require("../assets/ocramius.gif")} width="30%" className="crisp-image"/>
                    <Heading size={4} fit caps lineHeight={1}>
                        @Ocramius
                    </Heading>
                </Slide>
                <Slide>
                    <Image src={require("../assets/roave.svg")}/>
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/hello-world/hello-world.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 4] }
                    ]}
                />
                <Slide>
                    <Image src={require("../assets/Haskell-Logo.svg")}/>
                </Slide>
                <Slide>
                    <Image src={require("../assets/HaskellBCurry.jpg")}/>
                </Slide>
                <Slide>
                    Haskell 1.0, 1990
                </Slide>
                <Slide>
                    committee-based, designed, specified
                </Slide>
                <Slide>
                    Academia, for educational purposes
                </Slide>
                <Slide>
                    Small user-base, can change language often
                </Slide>
                <Slide>
                    Current: Haskell 2010
                </Slide>
                <Slide>
                    (GHC Haskell)
                </Slide>
                <Slide>
                    Functional language
                </Slide>
                <Slide>
                    Pure functional language
                </Slide>
                <Slide>
                    Non-strict pure functional language
                </Slide>
                <Slide>
                    <strike>Non-strict</strike> Lazy pure functional language
                </Slide>
                <Slide>
                    Mathematical syntax
                </Slide>
                <Slide>
                    <Image src={require("../assets/list-comprehension.png")}/>
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/mathematical-syntax/list-comprehension.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 6] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/mathematical-syntax/list-comprehension-matrix.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 6] }
                    ]}
                />
                <Slide>
                    AST is much simpler than PHP though!
                </Slide>
                <Slide>
                    Community posts are mostly "mumbo jumbo"
                </Slide>
                <Slide>
                    "A monad is a monoid in the category of endofunctors"
                </Slide>
                <Slide>
                    "If it compiles, it runs"
                </Slide>
                <Slide>
                    Bad reputation of "hard to learn"
                </Slide>
                <Slide>
                    Let's debunk that.
                </Slide>
                <Slide>
                    Functions
                </Slide>
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/functions/add-two-numbers.php")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 6] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functions/add-two-numbers.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 3] },
                        { loc: [2, 3], note: "We sum two numbers together" },
                        { loc: [1, 2], note: "A type signature" },
                        { loc: [1, 2], note: "2 parameters of type \"Int\" lead to a result of type \"Int\"" }
                    ]}
                />
                <Slide>
                    Let's simplify that.
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functions/add-two-numbers-without-type-signature.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] }
                    ]}
                />
                <Slide>
                    Types can be inferred.
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functions/add-two-numbers-without-type-signature-output.txt")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 4] }
                    ]}
                />
                <Slide>
                    Let's use it
                </Slide>
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/functions/call-add-two-numbers.php")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [2, 4] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functions/call-add-two-numbers.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functions/call-add-two-numbers-no-parentheses.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] }
                    ]}
                />
                <Slide>
                    Types!
                </Slide>
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/type-mismatch/mixing-types.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 6] }
                    ]}
                />
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/type-mismatch/mixing-types-error.txt")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 8] }
                    ]}
                />
                <Slide>
                    Quiz:
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functions/a-function-with-only-one-possible-implementation-quiz.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2], note: "\"a\" is a type variable: means \"any type\"" },
                        { loc: [0, 2], note: "This is only the type signature" },
                        { loc: [0, 2], note: "How many implementations are possible?" }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functions/a-function-with-only-one-possible-implementation-quiz-solved.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2], note: "Only one possible implementation!" }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functions/a-function-with-only-no-possible-implementation-quiz.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2], note: "What about this one?" },
                        { loc: [0, 2], note: "No possible implementation!" },
                        { loc: [0, 2], note: "\"I give you apples, and I want potatoes!\"" }
                    ]}
                />
                <Slide>
                    Some functions
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functions/add-two-numbers-without-type-signature-output.txt")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 4] }
                    ]}
                />
                <Slide>
                    What about constants?
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functions/constant-is-a-function.txt")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] }
                    ]}
                />
                <Slide>
                    Operators are also functions
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functions/operators-are-functions.txt")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] },
                        { loc: [2, 4] },
                        { loc: [4, 6] },
                        { loc: [6, 8] },
                        { loc: [8, 10] }
                    ]}
                />
                <Slide>
                    Variables?
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/error/shadowing-value.txt")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 1] },
                        { loc: [1, 2], note: "Works in repl" },
                        { loc: [0, 7], note: "Repl complains - would fail compile" }
                    ]}
                />
                <Slide>
                    Errors
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functions/error.txt")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 9] }
                    ]}
                />
                <Slide>
                    They can look damn complex, but you need to read them!
                </Slide>
                <Slide>
                    A type is a restriction declaring that something belongs to a certain "set"
                </Slide>
                <Slide>
                    Declaring new types
                </Slide>
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/declaring-new-types/user-id.php")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 29] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/declaring-new-types/user-id.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 1], note: "\"UserId\" can be constructed as \"UserId\" with an \"Int\"" },
                        { loc: [0, 10] }
                    ]}
                />
                <Slide>
                    WTF is "Maybe"?
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/declaring-new-types/what-is-maybe.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] }
                    ]}
                />
                <Slide>
                    We can do better.
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/declaring-new-types/user-id-natural.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 10] }
                    ]}
                />
                <Slide>
                    <Image src={require("../assets/we-need-to-go-deeper.jpg")}/>
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/declaring-new-types/user-id-non-zero-natural.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 10] }
                    ]}
                />
                <Slide>
                    Make runtime errors type declarations!
                </Slide>
                <Slide>
                    Collections
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/collections/defining-a-collection.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/collections/defining-a-range-collection.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/collections/counting-a-collection-length.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/collections/type-of-length.txt")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/collections/counting-a-collection-foldl.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/collections/type-of-foldl.txt")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] }
                    ]}
                />
                <Slide>
                    Quicksort
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/collections/quicksort.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 6] },
                        { loc: [2, 4], note: "\"where\" is defining local scope" },
                        { loc: [1, 2], note: "\"(x:xs)\" is pattern matching" }
                    ]}
                />
                <Slide>
                    Type classes
                </Slide>
                <Slide>
                    Type => "belongs" to a "set"
                </Slide>
                <Slide>
                    Classes?
                </Slide>
                <Slide>
                    Type class => type satisfies a property
                </Slide>
                <Slide>
                    "Sortable" is a property
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/type-classes/ord.txt")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 9] },
                        { loc: [9, 12], note: "GHC says this is the \"minimal\" property" }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/type-classes/pizza.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 1], note: "No, Hawaii is not pizza" },
                        { loc: [1, 7], note: "Pizza satisfies the property \"Eq\"" },
                        { loc: [8, 15], note: "Pizza satisfies the property \"Ord\"" }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/type-classes/sort-pizza.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 1] }
                    ]}
                />
                <Slide>
                    (Many properties can be derived)
                </Slide>
                <Slide>
                    Laziness
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/laziness/pick-from-infinite-collection.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 1] }
                    ]}
                />
                <Slide>
                    Laziness is sometimes tricky
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/laziness/which-exception.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 7] },
                        { loc: [0, 6], note: "a and b are lies."},
                        { loc: [6, 7], note: "Which exception will be thrown?" }
                    ]}
                />
                <Slide>
                    The IO Monad
                </Slide>
                <Slide>
                    (it's a type class)
                </Slide>
                <Slide>
                    It has the property of "binding"
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/monad/promise-analogy.php")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 20] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/monad/promise-analogy.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 20] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/monad/promise-analogy-desugared.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 20], note: "The compiler will turn it into callback hell" }
                    ]}
                />
                <Slide>
                    <ul>
                        <li>promise</li>
                        <li>try-catch</li>
                        <li>async-await</li>
                        <li>optional</li>
                        <li>threads</li>
                        <li>locking</li>
                        <li>collections</li>
                    </ul>
                </Slide>
                <Slide>
                    Good when things depend on each other
                </Slide>
                <Slide>
                    Write imperative code in a functionally pure language
                </Slide>
                <Slide>
                    Haskell has a bad legacy library
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/broken-prelude/head.txt")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/broken-prelude/head-error.txt")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 5], note: "Exceptions in haskell are bad, and nobody uses them" }
                    ]}
                />
                <Slide>
                    Fortunately, there are replacements for the standard library
                </Slide>
                <Slide>
                    <Heading>
                        Why haskell?
                    </Heading>
                </Slide>
                <Slide>
                    <Heading>
                        WHY?!
                    </Heading>
                </Slide>
                <Slide>
                    Learn to think in FP
                </Slide>
                <Slide>
                    Learn to think in Types
                </Slide>
                <Slide>
                    Performance
                </Slide>
                <Slide>
                    Performance (holy shit!)
                </Slide>
                <Slide>
                    Stability
                </Slide>
                <Slide>
                    "Correct" programs
                </Slide>
                <Slide>
                    <Heading size={3} lineHeight={1}>
                        @Ocramius
                    </Heading>
                    <Heading size={3} lineHeight={1}>
                        @RoaveTeam
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}
