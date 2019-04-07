import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import { Row, Col, Typography, Anchor, Layout } from 'antd';
import Glass from "components/Glass";

const { Title, Paragraph } = Typography;
const { Link: AnchorLink } = Anchor;
const { Content, Sider } = Layout;

export const createStylesDescription = (styles) => {
    return styles.map((style, index) => {
        const anchorId = 'anchor' + index;
        return <BeerStyleDescription id={anchorId} key={index} {...style}/>
    });
}

class BeerStyleDescription extends Component {

    render() {
        return (
            // <Fragment>
            //     {/* <Title level={4}>Aparência</Title>
            //     <Paragraph>{appearance}</Paragraph>

            //     <Title level={4}>Sabor</Title>
            //     <Paragraph>{flavor}</Paragraph>

            //     <Title level={4}>Sensação na boca</Title>
            //     <Paragraph>{mouthSensation}</Paragraph>

            //     <Title level={4}>Comentários</Title>
            //     <Paragraph>{comments}</Paragraph>

            //     <Title level={4}>História</Title>
            //     <Paragraph>{history}</Paragraph>

            //     <Title level={4}>Ingredientes característicos</Title>
            //     <Paragraph>{characteristicIngredients}</Paragraph>

            //     <Title level={4}>Comparação de estilos</Title>
            //     <Paragraph>{stylesComparison}</Paragraph>

            //     <Title level={4}>Exemplos comerciais</Title>
            //     <Paragraph>{businessExamples}</Paragraph> */}
            // </Fragment>
            
            <Fragment>
                <Layout className="page-layout">
                    <Content className="page-content">
                        <Title className="text-center">Guia de Estilos BJCP 2015</Title>
                        <Paragraph>
                            O Guia de Estilos BJCP 2015 é uma grande revisão da edição de 2008. Os objetivos da nova edição são: (1) melhor abordar estilos de cerveja do mundo na forma como encontrados em seus mercados locais, (2) manter-se atualizado com as tendências do mercado de cerveja artesanal emergentes, (3) descrever cervejas históricas resgatadas e novamente produzidas atualmente em série, (4) descrever melhor as características sensoriais dos modernos ingredientes empregados na produção de cerveja, (5) referendar e prestigiar o resultados e referências obtidos por pesquisas mais recentes de produção de cerveja, e (6) ajudar os organizadores de concurso a melhor gerir seus eventos (que não raras vezes enfrentam questões com alguma complexidade).
                        </Paragraph>
                        <Paragraph>
                            Muitos novos estilos foram adicionados, e alguns estilos existentes foram divididos em várias categorias ou simplesmente renomeados. Os agrupamentos de estilos em categorias têm uma nova filosofia que agrupa estilos com orientação em características semelhantes ao invés de uma herança ou da família nome comum. Não presuma que a mesma característica primária (por exemplo, cor, força, equilíbrio, sabor dominante, país de origem) foi utilizado para determinação de cada classe de categoria; a linha de raciocínio anterior era mais variável e matizada. Algumas mudanças foram feitas para permitir-nos a ser mais ágil na tomada de futuras revisões. Finalmente, fornecemos algumas orientações adicionais sobre como usar as diretrizes do Guia de Estilos para reduzir o potencial de mau uso que temos observado em edições passadas.
                        </Paragraph>
                        <Paragraph>
                            Se você está familiarizado com as diretrizes de 2008, notará que muitos nomes das categorias e os números de sua identificação foram mudados. Note-se que também foi adicionada uma nota introdutória a cada seção de categorias/estilos de cerveja, assim como foi feito em Guias de Estilos do BJCP anteriores com estilos de Hidromel e de Sidra. Essas notas introdutórias abordam características comuns de cada estilo ou sub-estilo de cerveja de cada seção, e atributos que são assumidas por padrão para estar presente ou ausente em cada uma das categorias/estilos, a menos que indicado de outra maneira.
                        </Paragraph>
                    </Content>
                    <Sider width={256} className="page-sider">
                        <Anchor offsetTop={64}>
                            <AnchorLink 
                                href={'#anchorGuiaEstilos'} 
                                title="Guia de Estilos BJCP 2015" 
                            />
                        </Anchor>
                    </Sider>
                </Layout>
            </Fragment>
        );
    }
}

export default withRouter(BeerStyleDescription);
