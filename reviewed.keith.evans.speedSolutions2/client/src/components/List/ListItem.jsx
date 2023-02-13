import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../PartsForm.css';
import api from '../../api';

const ListItem = ({ part, setPartInquiry }) => {
  const navigate = useNavigate();
  const viewPart = async (id) => {
    try {
      const viewedPart = await api.viewPart(id);
      const { context } = await viewedPart.data;
      console.log('context in ListItem', context);
      setPartInquiry(context);
      navigate('/userHome/viewPart');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="listItem text-light">
      <p
        id={part._id}
        type="button"
        className="itemStyle"
        role="presentation"
        onClick={(e) => viewPart(e.target.id)}
      >
        {part.part}
        &nbsp;
        $
        {`${part.price} posted: ${new Date(part.createdAt).toString().slice(0, 15)}`}
      </p>
    </div>
  );
};

export default ListItem;
