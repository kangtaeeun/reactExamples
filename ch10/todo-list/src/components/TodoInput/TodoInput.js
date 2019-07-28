import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);


const TodoInput = ({onChange, onInsert, value}) => {
    
    const handleKeyPress = (e) => {
        if(e.key ==='Enter'){
            onInsert();
        }
    }
    // console.log("inputValue: " + value);
    return (
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
            <div className={cx('add-button')} onClick={onInsert} >추가</div> 
        </div>
    );
};

export default TodoInput;