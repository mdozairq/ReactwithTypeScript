
const EventComponent : React.FC = () => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        
    }
    const onDragStart = (event: React.DragEvent<HTMLDivElement>) =>{
        console.log('I am being Dragged');
    }
  return (
    <div>
        EventComponent
        <input onChange={changeHandler}/>
        <div draggable onDragStart={onDragStart}>Hey Drag Me!</div>
    </div>
  )
}

export default EventComponent