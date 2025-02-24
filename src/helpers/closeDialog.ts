export function closeDialog(dialogID: string): void {
  const dialogDOM = document.getElementById(dialogID) as HTMLDialogElement;
  dialogDOM.close();
}
