import React from "react";
import { Edit, SimpleForm, TextInput, } from 'react-admin';
const PostEdit = (props) => {
    return (
        <Edit title='Edit a post' {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Edit>
    )
}
export default PostEdit