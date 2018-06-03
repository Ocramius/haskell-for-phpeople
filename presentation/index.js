// Import React
import React from "react";
// Import Spectacle Core tags
import {Appear, BlockQuote, Cite, Code, Deck, Heading, List, ListItem, Quote, Slide, Text} from "spectacle";

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

const douchebagHat = require("../assets/scumbag-steve-douchebag-hat.png");
const httpMiddlewareWorkflow = require("../assets/http-middleworld.png");
const frameworkAsFrameWork = require("../assets/framework-as-frame-work.jpg");

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["none"]} transitionDuration={0} theme={theme} controls={false} progress="none">
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        2002, first website project
                        {/* add acme pic */}
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Our customer
                        {/* add coyote pic */}
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Unstructured code
                    </Heading>
                </Slide>
                <Slide bgColor={"#000"}>
                    <Heading size={4} fit caps lineHeight={1} style={"color: red"}>
                        WARNING
                    </Heading>
                    <Text textColor="white">The following content may contain elements that are not suitable for some
                        audiences.</Text>
                    <Text textColor="white">Accordingly, viewer discretion is advised </Text>
                </Slide>
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/primitive/register-globals.php")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 8] },
                        { loc: [6, 8], note: "Obviously." }
                    ]}
                />
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/primitive/purchase.php")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [2, 22] },
                        { loc: [1, 3], note: "Security" },
                        { loc: [3, 7], note: "SQL skillz" },
                        { loc: [3, 7], note: "Forgot `or die(mysql_error());`!" },
                        { loc: [7, 9], note: "Input validation" },
                        { loc: [9, 10] },
                        { loc: [9, 10], note: "Imagine `$success = false;`!" },
                        { loc: [10, 14] },
                        { loc: [14, 19] }
                    ]}
                />
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/primitive/purchase-output.php")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 18] },
                        { loc: [4, 5] },
                        { loc: [4, 5], note: "A success can also not exist!" },
                        { loc: [9, 10], note: "This is fine" }
                    ]}
                />
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/primitive/purchase-output.php")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 18] },
                        { loc: [4, 5] },
                        { loc: [4, 5], note: "A success can also not exist!" },
                        { loc: [9, 10], note: "This is fine" }
                    ]}
                />
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Projects used to be "easy"
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Relaxed requirements
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Security issues
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Security? What security?
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Gets the job done
                    </Heading>
                </Slide>
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/primitive/register-globals.php")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [1, 3], note: "The birth of helpers" }
                    ]}
                />
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        <Code>$GLOBALS</Code>
                    </Heading>
                    <Text>Getting things from "somewhere"</Text>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Clients will pay...
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        ...for a rewrite
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Few years later...
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Then came the first frameworks
                    </Heading>
                    <Appear>
                        <Text>Framework authors "know" what they do</Text>
                    </Appear>
                </Slide>

                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Concerns being separated
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        MVC
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        MVC-ish
                    </Heading>
                    <Text>MVC over HTTP is not really a thing</Text>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Controllers
                    </Heading>
                </Slide>

                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/framework/zf1/controller.php")}
                    showLineNumbers
                    ranges={[
                        { loc: [0, 26] },
                        { loc: [0, 4], note: "Always extend from the framework" },
                        { loc: [0, 4], note: "(for maximum coupling)" },
                        { loc: [4, 5], note: "Our action has a name!" },
                        { loc: [6, 9], note: "(some) security!" },
                        { loc: [10, 17], note: "Data validation, done properly" },
                        { loc: [18, 20], note: "Database abstractions" },
                        { loc: [23, 24], note: "Rendering is done somewhere else" }
                    ]}
                />
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Progress!
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Most basic security issues removed!
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Rendering in <span className="good-green">views</span>,
                                escaping fixes <span className="good-orange">XSS</span>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Proper <span className="good-green">form validation</span>,
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                <span className="good-green">CSRF</span> protection
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                <span className="good-green">SQL</span> abstractions,
                                removed most <span className="good-orange">SQL injections</span>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                <span className="good-green">Mailer</span> abstractions,
                                removed most <span className="good-orange">SMTP header injections</span>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide bgImage={douchebagHat}>
                    <Heading size={4} fit caps lineHeight={1} textColor="#ccc">
                        Users:
                    </Heading>
                    <Text textColor="#ccc">LET'S PUT EVERYTHING IN A CONTROLLER!</Text>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        We still heavily rely on helpers
                    </Heading>
                </Slide>

                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/framework/zf1/base-controller.php")}
                    showLineNumbers
                    ranges={[
                        { loc: [0, 9] }
                    ]}
                />
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Registries
                    </Heading>
                    <Text>Not much better than globals...</Text>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Anyone recognize this?
                    </Heading>
                </Slide>
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/framework/larval/facade.php")}
                    showLineNumbers
                    ranges={[
                        { loc: [237, 256] }
                    ]}
                />
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Tip: it's not from 2007.
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Too much <span className="good-orange">coupling</span> with the framework
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Singleton <span className="good-green">framework kernel</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Forced <span className="good-green">0-argument constructors</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        <span className="good-green">Autoloading</span> as service-location
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Then we evolved again
                    </Heading>
                    <Appear>
                        <Text>Around 2011~2012</Text>
                    </Appear>
                </Slide>
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/framework/zf2/controller.php")}
                    showLineNumbers
                    ranges={[
                        { loc: [0, 48] },
                        { loc: [4, 14], note: "Make the implicit explicit" },
                        { loc: [15, 28], note: "Services built before runtime" },
                        { loc: [29, 47], note: "Statically analysable code" },
                        { loc: [29, 47], note: "Testable code" },
                        { loc: [29, 47], note: "No magic" },
                    ]}
                />
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Progress!
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Still a lot of framework <span className="good-orange">coupling</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        <span className="good-green">Upgrade</span> = <span className="good-orange">rewrite</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        The rise of <span className="good-green">DDD</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        The rise of <span className="good-green">DI</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        The rise of <span className="good-green">DDD</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        The rise of <span className="good-green">ORM</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Another evolution
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Middleware
                    </Heading>
                    <Appear>
                        <Text>We're doing HTTP stuff anyway</Text>
                    </Appear>
                </Slide>
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/framework/expressive/PurchaseAction.php")}
                    showLineNumbers
                    ranges={[
                        { loc: [0, 34] },
                        { loc: [21, 22], note: "Request in, response out" },
                        { loc: [21, 33], note: "Just the actual action" },
                    ]}
                />
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/framework/expressive/OnlyCoyotes.php")}
                    showLineNumbers
                    ranges={[
                        { loc: [0, 28] },
                        { loc: [18, 24], note: "Intercept only when needed" },
                        { loc: [25, 26], note: "Delegate everything else" },
                    ]}
                />
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/framework/expressive/OnlyAuthenticated.php")}
                    showLineNumbers
                    ranges={[
                        { loc: [0, 33] },
                        { loc: [17, 32] }
                    ]}
                />
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/framework/expressive/OnlyWithValidFormData.php")}
                    showLineNumbers
                    ranges={[
                        { loc: [0, 29] },
                        { loc: [15, 28] }
                    ]}
                />
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/framework/expressive/pipeline.php")}
                    showLineNumbers
                    ranges={[
                        { loc: [0, 8] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/framework/expressive/pipeline.hs")}
                    showLineNumbers
                    ranges={[
                        { loc: [0, 6] }
                    ]}
                />
                <Slide bgImage={httpMiddlewareWorkflow}/>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        What survived:
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>PSR-0</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>PSR-7</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>PSR-11</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>PSR-15</ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Kill the <span className="good-orange">framework</span>!
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Fighting framework <span className="good-orange">coupling</span>
                    </Heading>
                    <Appear>
                        <Text>No framework in those middleware</Text>
                    </Appear>
                </Slide>
                <Slide>
                    <Heading size={5} fit caps lineHeight={1}>
                        "<span className="good-orange">Framework</span>"
                        <br/>
                        back to
                        <br/>
                        "<span className="good-green">Frame</span>" "<span className="good-green">work</span>"
                    </Heading>
                </Slide>
                <Slide bgImage={frameworkAsFrameWork}/>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Reduce the <span className="good-green">risk</span> of another <span className="good-orange">rewrite</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Pushing <span className="good-green">immutability</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Pushing <span className="good-green">value objects</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Explicit, typed, well defined <span className="good-green">services</span> instead
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Typed: values as <span className="good-green">value objects</span>
                    </Heading>
                </Slide>
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/value-object/UserId.php")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 22] },
                        { loc: [11, 12], note: "Invariants encapsulated" }
                    ]}
                />
                <Slide>
                    <Text>
                        Static analysis saves you time and hair!
                    </Text>
                    <Appear>
                        <Text>
                            PHPStan, Psalm, Exakat...
                        </Text>
                    </Appear>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Maybe <span className="good-green">generics</span>?
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Pushing <span className="good-green">functional programming</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Text>
                        A class
                        with <Code>__construct</Code> and <Code>__invoke</Code> is
                        a <span className="good-green">curried function</span>
                    </Text>
                </Slide>
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/functional-classes-are-curried-functions/RegisterUser.php")}
                    showLineNumbers
                    ranges={[
                        { loc: [0, 14] }
                    ]}
                />
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/functional-classes-are-curried-functions/register_user.php")}
                    showLineNumbers
                    ranges={[
                        { loc: [0, 14] }
                    ]}
                />
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/functional-classes-are-curried-functions/register_user_curried.php")}
                    showLineNumbers
                    ranges={[
                        { loc: [0, 14] }
                    ]}
                />
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functional-classes-are-curried-functions/register_user.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 2] }
                    ]}
                />
                <Slide>
                    <BlockQuote>
                        <Quote textColor="#000">Good object oriented programming is functional programming</Quote>
                        <Cite>Anthony Ferrara</Cite>
                    </BlockQuote>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        There's no more space for <span className="good-orange">helpers</span>
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}
