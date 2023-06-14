import Card from "./Card";

type ModeSwitchBarPropsType = {
   
}

const ModeSwitchBar = (props: ModeSwitchBarPropsType) => {
    return (
        <Card>
            <div className='flex justify-between items-center gap-2'>
              <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
              <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
              <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
            </div>
        </Card>
    );
};

export default ModeSwitchBar;