import './App.css';
import { Button } from './components/ui/button';
import { CustomButton } from './components/customButton/CustomButton';
import { Modal } from './components/Modal/Modal';
import { PhoneInput } from './components/PhoneInput/PhoneInput';

function App() {
  return (
    <>
      <h2>Shadcn UI</h2>
      <h3>Button example</h3>
      <Button>hello</Button>

      <h2 className="mt-5">Scss UI</h2>
      <h3>Button example</h3>
      <div className="w-full flex justify-center items-center">
        <CustomButton>hello2</CustomButton>
      </div>

      <h2 className="mt-5">Shadcn UI</h2>
      <h3>Modal example</h3>
      <Modal />

      <PhoneInput defaultCountry="FR" international />
    </>
  );
}

export default App;
