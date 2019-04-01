import React from 'react'
import {
  Container,
  Dropdown,
  Header,
  Image,
  Menu
} from 'semantic-ui-react'

import Footer from './../base/Footer'

const ProcessoCalculoServejeiros = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          Project Name
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Processos e cálculos cervejeiros</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        - Priming
        - Cálculos da água
        - Temperaturas de Mosturação
        - Dry Hopping
      </p>

      <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
    </Container>

    
  </div>
)

export default ProcessoCalculoServejeiros
