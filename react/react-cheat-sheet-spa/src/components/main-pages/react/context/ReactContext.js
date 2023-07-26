import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faFlag as farFlag } from '@fortawesome/free-regular-svg-icons';

import contextPic from '../../../../res/react-context.png';
import contextExPic from '../../../../res/react-context-ex.png';
import UserCreate from './UserCreate';
import UserCreateFunct from './UserCreateFunc';

// Use Context here
import LangContext, { Provider } from './LangContext';

const ReactContext = () => {
    const [lang, setLang] = useState('eng');

    return (
        <Container>
            <Row className="mb-3">
                <Col sm="12">
                    <h1>React Context</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className="mb-3 p-0">
                    <img src={contextPic} alt="React Context" width="50%" />
                    <img src={contextExPic} alt="Context Example" width="50%" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col sm="12">
                    <h3>Functional Component with Context</h3>
                </Col>
            </Row>
            <div className="border">
                <Row >
                    <Col sm="12">
                        <p>(Context Provider)</p>
                    </Col>
                    <Col sm="4">
                        <p>Select a language:</p>
                    </Col>
                    <Col sm="2">
                        <button onClick={() => setLang('eng')}>
                            <FontAwesomeIcon icon={faFlag} />{` En`}
                        </button>
                    </Col>
                    <Col sm="2">
                        <button onClick={() => setLang('cn')}>
                            <FontAwesomeIcon icon={farFlag} />{` Cn`}
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <Provider value={lang}>
                            <UserCreateFunct />
                        </Provider>
                    </Col>
                </Row>
            </div>
            <Row className="mt-3 mb-3">
                <Col sm="12">
                    <h3>Class Component with Context</h3>
                </Col>
            </Row>
            <div className="border">
                <Row >
                    <Col sm="12">
                        <p>(Context Provider)</p>
                    </Col>
                    <Col sm="4">
                        <p>Select a language:</p>
                    </Col>
                    <Col sm="2">
                        <button onClick={() => setLang('eng')}>
                            <FontAwesomeIcon icon={faFlag} />{` En`}
                        </button>
                    </Col>
                    <Col sm="2">
                        <button onClick={() => setLang('cn')}>
                            <FontAwesomeIcon icon={farFlag} />{` Cn`}
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <LangContext.Provider value={lang}>
                            <UserCreate />
                        </LangContext.Provider>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default ReactContext;