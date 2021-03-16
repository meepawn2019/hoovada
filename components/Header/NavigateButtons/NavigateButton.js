import React from 'react'
import styles from './NavigateButton.module.css'
import { Dropdown } from 'react-bootstrap'

export default function NavigateButton() {
    return (
        <div className="my-2 my-lg-0 d-flex align-items-center justify-content-between">
            <div className='d-flex'>
                <button className={`buttonMain ${styles['button--main']} mr-2`}>
                    Đặt câu hỏi
                </button>
                <button className={`buttonMain ${styles['button--light']} mr-3`}>
                    Viết bài
                </button>
            </div>
            <div className='align-items-center d-flex'>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: 'gray' }}>
                    </Dropdown.Toggle>
                </Dropdown>
            </div>
        </div >
    )
}
