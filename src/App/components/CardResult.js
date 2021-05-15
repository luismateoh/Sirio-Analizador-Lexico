import {
    Panel,
    List,
    Tag, FlexboxGrid
} from 'rsuite';


function CardResult({tokens, onSelect, activeKey, ...props}) {
    //css
    const panelStyle = {
        paddingTop: "5%"
    }

    const styleCenter = {
        display: 'flex',
        weight: "20px"
    };

    const dataStyle = {
        fontSize: '1.2em',
        fontWeight: 500,
        justifyContent: 'left',
    };
    const numberStyle = {
        fontSize: '1.2em',
        fontWeight: 500,
        textAlign:"right",
        paddingLeft:"1.2em"
    };

    function tags(key) {
        let tag = <Tag>No encontrado</Tag>

        if (0 === key.localeCompare("Cadena de texto")) {
            tag = <Tag color="orange">Cadena de texto</Tag>
        }
        if (0 === key.localeCompare("Palabra reservada")) {
            tag = <Tag color="blue">Palabra reservadas</Tag>
        }
        if (0 === key.localeCompare("Identificador")) {
            tag = <Tag color="green">Identificador</Tag>
        }
        if (0 === key.localeCompare("Constante Numerica")) {
            tag = <Tag color="violet">Constante Numerica</Tag>
        }
        if (0 === key.localeCompare("Operador")) {
            tag = <Tag color="cyan">Operador</Tag>
        }
        if (0 === key.localeCompare("Separador")) {
            tag = <Tag color="red">Separador</Tag>
        }

        return tag
    }

    return (
        <div style={panelStyle}>
            <Panel bordered>
                <List size="sm" hover>
                    {tokens.map((item, index) => (
                        <List.Item key={item['key']} index={index}>
                            <FlexboxGrid justify={"left"}>
                                <FlexboxGrid.Item colspan={2} style={styleCenter}>
                                    <div style={numberStyle}>
                                        {index+1}.
                                    </div>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={4} style={styleCenter}>
                                    <div style={{textAlign: 'right'}}>
                                        <div>{tags(item['key'])}</div>
                                    </div>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={9} style={styleCenter}>
                                    <div style={{textAlign: 'left'}}>
                                        <div style={dataStyle}>{item['value']}</div>
                                    </div>
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </List.Item>

                    ))}
                </List>
            </Panel>
        </div>
    );
}

export default CardResult;
