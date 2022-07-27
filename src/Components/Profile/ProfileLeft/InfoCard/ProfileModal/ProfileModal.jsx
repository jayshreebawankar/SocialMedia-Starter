import { Modal, useMantineTheme } from '@mantine/core';
import './ProfileModal.css';

function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return(
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened= {modalOpened}
      onClose= {()=>setModalOpened(false)}
    >
      {/* Modal content */}

    <div>
      <form className='statusform'>
            <h3 style={{alignItem:'center'}}>Your Status</h3>

            <div className='statusForm-div'>
              <input 
                  type='text' 
                  name='firstName'
                  className='infoInput' 
                  placeholder="First Name"
              />

              <input 
                  type='text' 
                  name='lastName'
                  className='infoInput' 
                  placeholder="Last Name"
              />
            </div>

            <div className='statusForm-div'>
              <input 
                    type='text' 
                    name='workAt'
                    className='infoInput' 
                    placeholder="Works At"
                />
            </div>

            <div className='statusForm-div'>
              <input 
                  type='text' 
                  name='livesIn'
                  className='infoInput' 
                  placeholder="Lives In"
              />

              <input 
                  type='text' 
                  name='country'
                  className='infoInput' 
                  placeholder="Country"
              />
            </div>

            <div className='statusForm-div'>
              <input 
                    type='text' 
                    name='relStatus'
                    className='infoInput' 
                    placeholder="Relationship Status"
                />
            </div>
 
            <div className='statusForm-div'>
                Profile Image
                <input type='file' name='profileImg'/>
                Cover Image
                <input type='file' name='coverImg'/>
            </div>

            {/* <button className='statusForm-div button updateBtn'> */}
            <button className='button update-button'>  
              Update
            </button>
        </form>
    </div>
    </Modal>
  );
}

export default ProfileModal;