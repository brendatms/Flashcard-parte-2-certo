// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/company.png';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/company2.png';

const Home = () => (
  <Row>
    <Col m={12} s={10}>
      <h5 className="subtitle">Sobre o curso</h5>
      <Card>
        <div>
          <p><b>Objetivos</b></p>
          <p> O curso de TI junto ao Ensino Médio tem o objetivo de estimular várias aréas de conhecimento misturando o saber comum com a tecnologia, programação e pensameento lógico
            para aprimorar o desenvolvimento do aluno. Dessa forma, ao finalizar o Ensino Básico o aluno está preparado para o mercado de trabalho, proporcionando uma renda,
            experiência e oportunidade de começar a faculdade já focado no que ele realmente deseja. O curso conta com profissionais extremamente qualificados e uma grande 
            rede de apoio para transmitir os conhecimentos da melhor forma possível..</p>
          <br/>
          <p><b>Aulas</b></p>
          <p> São aulas focadas nas partes de hardware e softer, essenciais não apenas para os alunos que seguirão a área de TI,
             mas para todos aqueles que querem inovar em suas profissões.
          </p>
        </div>
      </Card>
      <h5 className="subtitle">Campus</h5>

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Unasp São Paulo"
          description="O Campus por si só é uma grande experiência, possibilitando um grande contato com a natureza, laboratórios científicos e de tecnologia. 
          Além da preservação ao espírito e o religioso"
          avatar={company_avatar}
        />
        <Experience title="CPB educacional"
          description="Plataforma online para auxiliar professores e alunos a postar atividades, trabalhos e realizar provas."
          avatar={company_avatar2}                    
        /> 
    </Col>
  </Row>
);

export default Home;