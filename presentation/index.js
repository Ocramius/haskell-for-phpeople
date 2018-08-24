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

const douchebagHat = require("../assets/scumbag-steve-douchebag-hat.png");
const httpMiddlewareWorkflow = require("../assets/http-middleworld.png");
const frameworkAsFrameWork = require("../assets/framework-as-frame-work.jpg");
const leapOfFaith = require("../assets/leap-of-faith.jpg");

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["none"]} transitionDuration={0} theme={theme} progress="none">
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        From Helpers to Middleware
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
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        2002, first website project
                    </Heading>
                </Slide>
                <Slide bgImage={require("../assets/acme-inc-services.png")}/>
                <Slide bgImage={require("../assets/coyote-roadrunner.png")}>
                    <Heading size={4} fit caps lineHeight={1}>
                        {/* Our customer */}
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
                        { loc: [8, 9], note: "This is fine" }
                    ]}
                />
                <Slide bgImage={require("../assets/lock-fail.jpg")}>
                    <Heading size={4} fit caps lineHeight={1} className="stroke-text">
                        Security? What security?
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Projects used to be "easy"
                    </Heading>
                </Slide>
                <Slide bgImage={require("../assets/safety-fail.jpg")}>
                    <Heading size={4} fit caps lineHeight={1} className="stroke-text">
                        Gets the job done
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        <Code>$GLOBALS</Code>
                    </Heading>
                    <Text>Getting things from "somewhere"</Text>
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
                        Helpers
                    </Heading>
                    <Text>(for transversal concerns)</Text>
                </Slide>
                <Slide/>
                <Slide bgImage={require("../assets/mr-crabs-money-eyes.png")}>
                    <Heading size={4} fit caps lineHeight={1} textColor="white" className="stroke-text-black">
                        Clients will pay...
                    </Heading>
                </Slide>
                <Slide bgImage={require("../assets/customer-rewrite.jpg")} className="stroke-text-black">
                    <Heading size={4} fit caps lineHeight={1} textColor="white">
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
                        the first frameworks
                    </Heading>
                </Slide>
                <Slide bgImage={require("../assets/dr-evil-quotes.jpg")}>
                    <Heading size={5} fit caps lineHeight={1} className="stroke-text">
                        Framework authors<br/>"know" what they do
                    </Heading>
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
                        <ListItem>
                            <span className="good-green">escaping</span> =&gt;
                            <span className="good-orange">XSS</span>
                        </ListItem>
                        <ListItem>
                            <span className="good-green">form</span> =&gt; <span className="good-orange">validation</span>
                        </ListItem>
                        <ListItem>
                            <span className="good-green">tokens</span> =&gt; <span className="good-orange">CSRF</span>
                        </ListItem>
                        <ListItem>
                            <span className="good-green">DAL</span> =&gt; <span className="good-orange">SQL Injections</span>
                        </ListItem>
                        <ListItem>
                            <span className="good-green">Mailer</span> =&gt; <span className="good-orange">SMTP Injections</span>
                        </ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        We still heavily rely on <span class="good-orange">helpers</span>
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
                <Slide bgImage={douchebagHat} className="stroke-text">
                    <Heading size={4} fit caps lineHeight={1}>
                        Users:
                    </Heading>
                    <Text textColor="#ccc">LET'S PUT EVERYTHING IN A CONTROLLER!</Text>
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
                <Slide bgImage={require("../assets/not-testable.jpg")} className="stroke-text">
                    <Heading size={4} fit caps lineHeight={1}>
                        Testing
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Then we evolved again
                    </Heading>
                    <Text>Around 2011~2012</Text>
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
                        The rise of...
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        <span className="good-green">DI</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        <span className="good-green">TDD</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        <span className="good-green">ORM</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        <span className="good-green">DDD</span>
                    </Heading>
                </Slide>
                <Slide/>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Another evolution
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Middleware
                    </Heading>
                    <Text>We're doing HTTP stuff anyway</Text>
                </Slide>
                <Slide bgImage={httpMiddlewareWorkflow}/>
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
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 6] },
                        { loc: [4, 5], note: "Want to write an API? Change this line." }
                    ]}
                />
                <Slide>
                    <Heading size={6} fit caps lineHeight={1} className="stroke-text">
                        <span className="good-orange">PSR-0</span> <span className="good-green">PSR-7</span> <span className="good-orange">PSR-11</span> <span className="good-green">PSR-15</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Look ma! No framework!
                    </Heading>
                </Slide>
                <Slide bgImage={require("../assets/destroy-the-framework.jpg")}>
                    <Heading size={6} fit caps lineHeight={1} className="stroke-text">
                        Kill
                        <br/>
                        the
                        <br/>
                        <span className="good-orange">framework</span>!
                    </Heading>
                </Slide>
                <Slide bgImage={frameworkAsFrameWork} className="stroke-text">
                    <Heading size={5} fit caps lineHeight={1}>
                        "<span className="good-orange">Framework</span>"
                        <br/>
                        back to
                        <br/>
                        "<span className="good-green">Frame</span>" "<span className="good-green">work</span>"
                    </Heading>
                </Slide>
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
                <Slide bgImage={require("../assets/shapes-types.jpg")} className="stroke-text">
                    <Heading size={6} fit caps lineHeight={1}>
                        values as
                        <br/>
                        <span className="good-orange">value objects</span>
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
                <CodeSlide
                    lang="php"
                    code={require("raw-loader!./code-examples/value-object/check_password.php")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 8] },
                    ]}
                />
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        <span className="good-orange">Static</span> <span className="good-green">analysis</span>
                    </Heading>
                    <Text>
                        PHPStan, Psalm, Exakat...
                    </Text>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Maybe <span className="good-green">generics</span>?
                    </Heading>
                    <Appear>
                        <Text>See what I did there?</Text>
                    </Appear>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        <span className="good-green">functional programming</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Text>
                        A class
                        with <Code>__construct</Code> and <Code>__invoke</Code> is
                        a <Appear><span className="good-green">curried function</span></Appear>
                    </Text>
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/functional-classes-are-curried-functions/register_user.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 1] },
                        { loc: [0, 2] }
                    ]}
                />
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
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Pushing <span className="good-green">functional patterns</span> to the <span className="good-orange">storage</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        <span className="good-green">Event Sourcing</span>
                    </Heading>
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/event-sourcing/event-sourcing.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 1] },
                        { loc: [0, 5] }
                    ]}
                />
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        Death of <span className="good-orange">ORM</span>s?
                    </Heading>
                </Slide>
                <Slide>
                    <Image src={require("../assets/pipe-all-the-things.jpg")}/>
                </Slide>
                <CodeSlide
                    lang="haskell"
                    code={require("raw-loader!./code-examples/event-sourcing/purchase-event-sourced.hs")}
                    showLineNumbers={false}
                    ranges={[
                        { loc: [0, 11] },
                        { loc: [0, 1], note: "This is an HTTP application" },
                        { loc: [2, 4], note: "Data flows from one function to the next" },
                        { loc: [3, 5], note: "Data flows from one function to the next" },
                        { loc: [4, 6], note: "Data flows from one function to the next" },
                        { loc: [5, 7], note: "Data flows from one function to the next" },
                        { loc: [6, 8], note: "Data flows from one function to the next" },
                        { loc: [7, 9], note: "Data flows from one function to the next" },
                        { loc: [8, 10], note: "Data flows from one function to the next" },
                        { loc: [9, 11], note: "Data flows from one function to the next" },
                    ]}
                />
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        No more <span className="good-orange">service location</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        No more <span className="good-orange">helpers</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={5} fit caps lineHeight={1}>
                        <span className="good-orange">cross-cutting concerns</span>
                        <br/>
                        become
                        <br/>
                        <span className="good-green">function composition</span>
                    </Heading>
                    <Appear>
                        <Text>Most if/else is gone or isolated!</Text>
                    </Appear>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps lineHeight={1}>
                        No more <span className="good-orange">shared mutable state</span>
                    </Heading>
                </Slide>
                <Slide>
                    <BlockQuote>
                        <Quote textColor="#000">Good object oriented programming is functional programming</Quote>
                        <Cite>Anthony Ferrara</Cite>
                    </BlockQuote>
                </Slide>
                <Slide bgImage={leapOfFaith}>
                    <Heading size={4} fit caps lineHeight={1}>
                        What's the next jump?
                    </Heading>
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
