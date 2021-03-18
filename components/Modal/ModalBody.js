import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { useQuill } from 'react-quilljs';
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
import 'quill/dist/quill.snow.css';


export default function ModalBody(props) {

    const [value, setValue] = useState('')
    const { modalType } = props;
    const { quill, quillRef } = useQuill();

    if (modalType === 'postQuestion') {
        return (
            <Form>
                <div className="my-2 d-flex justify-content-between align-items-center">
                </div>
                <Form.Group className="my-3">
                    <Form.Label>Câu hỏi
                        <span>*</span>
                    </Form.Label>
                    <Form.Control as='input' type="text" placeholder="Bắt đầu bằng câu hỏi tại sao vì sao ..." />
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label>Chi tiết câu hỏi
                    </Form.Label>
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
                </Form.Group>
                <Form.Group className="my-3">

                </Form.Group>
                <Form.Group className="my-3">

                </Form.Group>

            </Form>
        )
    }

    return (
        <div>

        </div>
    )
}
