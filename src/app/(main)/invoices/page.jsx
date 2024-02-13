
import GridContainer from './components/GridContainer';
import "./components/styles.scss"
async function InvoicesPage({params, searchParams}) {
  let pending = false;
  if(searchParams.pending == "true"){
    pending = true;
  }
  
  return (
    <>
      <GridContainer pending={pending} ></GridContainer>
    </>
  )
}

export default InvoicesPage