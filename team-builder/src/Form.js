import React from 'react';

export default function Form (props) {
    const { value, update, submit } =props;

    const onChange = evt => {
        const name = evt.target.name;
        const { value } = evt.target;
        update( name, value );
        
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group inputs'>
            <label>Name
             
              <input
                type="text"
                name="name"
                value={value.name}
                onChange={onChange}
              />
            </label>
            <label>Email
             
              <input
                type="email"
                name="email"
                value={value.email}
                onChange={onChange}
              />
            </label>
            <label>Role
              <select value={value.role} name="role" onChange={onChange}>
                <option value="">-- Select a Role --</option>
                <option value="Web development">Web development</option>
                <option value="Data Science">Data Science</option>
                <option value="Back End">Back End</option>
                <option value="Alumni">Alumni</option>
              </select>
            </label>
    
            <div className='submit'>
              <button disabled={!value.name || !value.email || !value.role}>Submit</button>
            </div>
          </div>
        </form>
      )

}