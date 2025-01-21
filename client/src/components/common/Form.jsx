import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const CommonForm = ({ formControls, formData, setformData, onSubmit, buttonText }) => {

    function renderInputsByComponentType(getControlItem) {
        let element = null
        const value = formData[getControlItem.name] || '' //user has typed “user@example.com” into the email field, formData.email would be "user@example.com".


        switch (getControlItem.componentType) {  //to choose input field (text box, dropdown ,textarea) should appear
            case 'input':
                element = <Input
                    name={getControlItem.name}
                    placeholder={getControlItem.placeholder}
                    id={getControlItem.name}
                    type={getControlItem.type}
                    value={value}
                    onChange={event => setformData({
                        ...formData, [getControlItem.name]: event.target.value
                        //email:vj@gmail(e.target.value)
                    })}
                />
                break;

            case 'select':
                element = <Select onValueChange={(value) => setformData({
                    ...formData,
                    [getControlItem.name]: value
                })} value={value}
                >
                    <SelectTrigger className='w-full' >
                        <SelectValue placeholder={getControlItem.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            getControlItem.options &&
                                getControlItem.options.length > 0 ?
                                getControlItem.options.map(optionItem => <SelectItem key={optionItem.id} value={optionItem.id} >{optionItem.label} </SelectItem>) : null
                        }
                    </SelectContent>
                </Select>

                break;
            case 'textarea':
                element = (
                    <Textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.id}
                        value={value}
                        onChange={event => setformData({
                            ...formData,
                            [getControlItem.name]: event.target.value
                        })}
                    />
                )
                break;

            default:
                element = <Input
                    name={getControlItem.name}
                    placeholder={getControlItem.placeholder}
                    id={getControlItem.name}
                    type={getControlItem.type}
                    value={value}
                    onChange={event => setformData({
                        ...formData,
                        [getControlItem.name]: event.target.value
                    })}
                />
                break;
        }
        return element
    }

    return (
        <>
            <form onSubmit={onSubmit} >
                <div className='flex flex-col gap-3'>
                    {
                        formControls.map(controlItem => <div className='grid w-full gap-1.5' key={controlItem.name} >
                            <Label className='mb-1'>
                                {controlItem.label}
                            </Label>
                            {
                                renderInputsByComponentType(controlItem) //it is fnctn
                            }
                        </div>
                        )}
                </div>
                <Button type="submit" className='mt-6 w-full' >{buttonText || 'Submit'}</Button>
            </form>
        </>
    )
}

export default CommonForm

// switch (getControlItem.componentType) {
//     case 'input':
//         // code for text input field
//         break;
//     case 'select':
//         // code for dropdown menu
//         break;
//     case 'textarea':
//         // code for textarea field
//         break;
//     default:
//         // code for default text input
//         break;
// }
