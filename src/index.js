import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
<div className='ui container comments'>
    <ApprovalCard>
< CommentDetail author = 'Sam' timeAgo = 'Today at 4:45pm' text = 'interesting topic' avatar={faker.image.image()}/> </ApprovalCard>
<ApprovalCard>< CommentDetail author = 'Alex' timeAgo = 'Today at 5:45pm' text = 'nice views' avatar={faker.image.image()}/></ApprovalCard>
<ApprovalCard><CommentDetail author = 'Jane' timeAgo = 'Today at 6:45pm' text = 'good job author' avatar={faker.image.image()}/></ApprovalCard>
</div>
    );
}

ReactDOM.render(<App /> , document.querySelector('#root'))