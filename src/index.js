import { Scan, CallName, Add } from './utils';

function ScanMiddle() {
  return Scan;
}

function AddMiddle() {
  return Add;
}
function CallNameMiddle() {
  return CallName;
}

export default {
  ScanMiddle,
  AddMiddle,
  CallNameMiddle,
};
