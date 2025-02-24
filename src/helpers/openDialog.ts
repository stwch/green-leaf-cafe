export function openDialog(dialogID: string): void {
  const dialogDOM = document.getElementById(dialogID) as HTMLDialogElement;
  dialogDOM.showModal();
}
