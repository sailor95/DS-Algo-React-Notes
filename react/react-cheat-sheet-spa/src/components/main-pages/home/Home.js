import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <h1 id="aboutthisspa">About this SPA </h1>
            <p>This is my cheat sheet of React development skills.</p>
            <p><a href="https://www.browserling.com/tools/markdown-to-html">(markdown to html)</a></p>
            <h3 id="mainfeaturebranches">Main Feature Branches</h3>

            <ul>
                <li>React</li>

                <li>Redux</li>

                <li>Util</li>
            </ul>

            <h2 id="react">React</h2>

            <h3 id="basicform">Basic Form</h3>

            <ul>
                <li>[x] Controlled form</li>
            </ul>

            <h3 id="context">Context</h3>

            <ul>
                <li>[x] React Context</li>
            </ul>

            <h3 id="hooks">Hooks</h3>

            <ul>
                <li>[ ] useState</li>

                <li>[ ] useEffect</li>

                <li>[ ] useContext</li>

                <li>[ ] useReducer</li>

                <li>[ ] useCallback</li>

                <li>[ ] useMemo</li>

                <li>[ ] useRef</li>
            </ul>

            <h3 id="unittest">Unit Test</h3>

            <ul>
                <li>[ ] enzyme</li>
            </ul>

            <h2 id="redux">Redux</h2>

            <h3 id="store">Store</h3>

            <ul>
                <li>[ ] ConfigStore boilerplate</li>

                <li>[ ] redux-persistant</li>
            </ul>

            <h3 id="reduxform">Redux Form</h3>

            <ul>
                <li>[x] <a href="https://redux-form.com/8.2.2/">redux-form</a></li>
            </ul>

            <h3 id="middleware">Middleware</h3>

            <ul>
                <li>[ ] How to create middleware</li>

                <li>[ ] Thunk</li>

                <li>[ ] Saga</li>
            </ul>

            <h3 id="enhancers">Enhancers</h3>

            <ul>
                <li>[ ] Redux dev tool</li>
            </ul>

            <h2 id="usefulnpmpackages">Useful NPM Packages</h2>

            <h3 id="utility">Utility</h3>

            <ul>
                <li>[ ] <a href="https://lodash.com/">lodash</a></li>
            </ul>

            <h3 id="http">HTTP</h3>

            <ul>
                <li>[ ] <a href="https://github.com/axios/axios">axios</a></li>
            </ul>

            <h3 id="form">Form</h3>

            <ul>
                <li>[ ] <a href="https://jaredpalmer.com/formik/docs/overview">formik</a></li>
            </ul>

            <h3 id="uicomponents">UI Components</h3>

            <ul>
                <li>[ ] react-bootstrap-table-next</li>
            </ul>

            <h3 id="css">CSS</h3>

            <ul>
                <li>[ ] bootstrap</li>

                <li>[ ] react-bootstrap</li>

                <li>[ ] material-ui</li>

                <li>[ ] font-awesome</li>
            </ul>
        </Container>
    );
}

export default Home;