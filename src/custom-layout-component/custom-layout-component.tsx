import React, { useState } from 'react';
import { uischema } from '../mocks/uischema';
import { schema } from '../mocks/schema';
import { data } from '../mocks/data';
import { JsonForms } from '@jsonforms/react';
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';

const CustomLayout = (props: any) => {
    const [formData, setFormData] = useState(data);

    return (
        <div>
            <JsonForms
                schema={schema}
                uischema={uischema}
                data={data}
                renderers={materialRenderers}
                cells={materialCells}
                onChange={({ data, errors }) => setFormData(data)}
            />

            <div className='formdata-viewer'>
                <pre>
                    {JSON.stringify(formData, null, "  ")}
                </pre>

            </div>
        </div>
    );
}

export default CustomLayout;