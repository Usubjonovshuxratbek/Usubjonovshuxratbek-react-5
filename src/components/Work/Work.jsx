import React from 'react'
import GroupLogo from '../../assets/img/group-logo.png'
import Container from '../Container/Container'

function Work() {
  return (
    <section>
        <Container>
            <div className="work-inner">
                <h2>Почему выбирают нас</h2>
                <div className="groups">
                    <div className="group-1">
                        <img src={GroupLogo} alt="" />
                        <h3>Аутентичность</h3>
                        <p>Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.</p>
                        <select>
                        <option value="Читать больше">Читать больше</option>
                        <option value="Читать больше">Читать больше</option>
                        </select>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Work
