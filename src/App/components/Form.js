import React, {useState} from 'react';
import automaton from "../Automaton/automaton";
import CardResult from './CardResult';
import {CodeEditorEditable} from 'react-code-editor-editable'
import 'highlight.js/styles/atom-one-light.css';
import {
    Form,
    FormGroup,
    ControlLabel,
    Button,
    ButtonToolbar,
    Panel
} from 'rsuite';


const panelStyle = {
    /* Extra small devices (phones, 600px and down) */
    width: "60rem"
}


function FormSirio({onSelect, activeKey, ...props}) {
    const [card, setCard] = useState();
    const [textArea, setTextArea] = useState("void main() {\n  print('Hello, World!');\n}");

    function showCard() {
        if (0 !== textArea.trim().localeCompare("")) {
            let tokens = []
            setCard()
            tokens = automaton(textArea.trim())
            setCard(
                <CardResult
                    tokens={tokens}
                />
            )
        } else {
            setCard()
        }
    }

    function clear() {
        setTextArea("")
        setCard()
    }

    return (
        <div>
            <Panel header="Analizador léxico" bordered style={panelStyle}>
                <p/>
                <Form fluid>
                    <FormGroup>
                        <ControlLabel>Código Dart</ControlLabel>
                        <CodeEditorEditable
                            value={textArea}
                            setValue={setTextArea}
                            width='100%'
                            height='45vh'
                            language='dart'
                            inlineNumbers
                            borderRadius="8px"
                        />

                    </FormGroup>
                    <FormGroup>
                        <ButtonToolbar>
                            <Button appearance="default" color="green" onClick={showCard}>Analizar</Button>
                            <Button appearance="default" onClick={clear}>Limpiar</Button>
                        </ButtonToolbar>
                    </FormGroup>
                </Form>
            </Panel>
            {card}

        </div>
    );
}

export default FormSirio;
