import {
    Panel,
    List,
    Tag
} from 'rsuite';

function CardResult({tokens, onSelect, activeKey, ...props}) {
    //css
    const panelStyle = {
        paddingTop: "5%"
    }

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
                            {tags(item['key'])} &nbsp;&nbsp;&nbsp; {item['value']}
                        </List.Item>
                    ))}
                </List>
            </Panel>
        </div>
    );
}

export default CardResult;
