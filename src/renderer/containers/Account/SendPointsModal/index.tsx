import React, {FC} from 'react';

import {FormButton, FormInput, FormSelectDetailed} from '@renderer/components/FormComponents';
import Modal from '@renderer/components/Modal';
import RequiredAsterisk from '@renderer/components/RequiredAsterisk';
import {SelectOption} from '@renderer/types/forms';

const initialValues = {
  fromAccount: '',
  points: '0.00',
  toAccount: '',
};

type FormValues = typeof initialValues;

const accountFromSelectFieldOptions: SelectOption[] = [
  '0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb',
  '2cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdq',
  '4cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdw',
  '3cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acde',
  '5cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdr',
  '6cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdt',
].map((acc) => ({label: 'Amy', value: acc}));

const accountToSelectFieldOptions: SelectOption[] = [
  '0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb',
  '2cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdq',
  '4cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdw',
].map((acc) => ({label: 'Amy', value: acc}));

interface ComponentProps {
  close(): void;
}

const SendPointsModal: FC<ComponentProps> = ({close}) => {
  const handleSubmit = ({points}: FormValues): void => {
    console.log(points);
  };

  return (
    <Modal
      className="Account__SendPointsModal"
      style={{left: '50%', transform: 'translate(-50%, -50%)', top: '50%', width: 384}}
      close={close}
      initialValues={initialValues}
      footer={
        <>
          <FormButton className="Modal__default-cancel" onClick={close} variant="link">
            Cancel
          </FormButton>
          <FormButton className="Modal__default-submit" type="submit">
            Send
          </FormButton>
        </>
      }
      header={
        <>
          <h2>Send Points</h2>
        </>
      }
      onSubmit={handleSubmit}
    >
      <>
        <FormSelectDetailed
          className="acc-form-select"
          required
          label="From: Account"
          options={accountFromSelectFieldOptions}
          name="fromAccount"
        />
        <FormSelectDetailed
          className="acc-form-select"
          required
          label="To: Friend"
          options={accountToSelectFieldOptions}
          name="toAccount"
        />
        <table>
          <tr>
            <td>Account Balance</td>
            <td>
              <span className="acc-balance">0.00</span>
            </td>
          </tr>
          <tr>
            <td>
              Points
              <RequiredAsterisk />
            </td>
            <td>
              <FormInput className="points-input" name="points" placeholder="0.00" type="number" />
            </td>
          </tr>
          <tr>
            <td>Bank Registration Fee</td>
            <td>0.01</td>
          </tr>
          <tr>
            <td>Validator Tx Fee</td>
            <td>0.02</td>
          </tr>
          <tr>
            <td>TOTAL Tx</td>
            <td>
              <b>0.00</b>
            </td>
          </tr>
        </table>
      </>
    </Modal>
  );
};

export default SendPointsModal;
