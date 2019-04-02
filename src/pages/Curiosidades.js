import React from 'react'
import {
  Container,
  Dropdown,
  Header,
  Image,
  Menu,
  Divider,
  Grid,
  Sticky,
  Rail
} from 'semantic-ui-react'

import Footer from '../components/Footer'

const Curiosidades = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a'>Home</Menu.Item>
        <Menu.Item as='a' header>
          Curiosidades
        </Menu.Item>

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
    <Footer />
  </div>
)

export default Curiosidades

