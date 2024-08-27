import React, {useState} from 'react';
import CustomModal from '../components/CustomModal';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return <CustomModal modalVisible={modalVisible} closeModal={closeModal} />;
};

export default Home;
