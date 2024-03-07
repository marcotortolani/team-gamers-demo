import { cookies } from 'next/headers';
import Breadcrumb from '../components-old/ui/Breadcrumb';
import HorizontalLine from '../components-old/ui/HorizontalLine';
import ButtonFilterCategories from '../components-old/ui/ButtonFilterCategories';
import SubscribeCard from '../components-old/SubscribeCard';
import { tokenActiveUser } from '@/utils/userAuth';

export default function layout({ children }) {
  //const activeUser = cookies().get(tokenActiveUser.name);
  const activeUser = { value: 'true' };
  const childrenAuth =
    activeUser && activeUser?.value === 'true' ? children : <SubscribeCard />;

  return (
    <div className=" z-0 w-full h-full relative ">
      <div className=" z-50 absolute top-32 w-full h-fit py-2 flex justify-center ">
        <div className=" w-full mb-4 pb-4 md:h-20 md:w-5/6 md:max-w-3xl lg:max-w-4xl lg:w-4/6 flex flex-col justify-center items-start gap-2 md:gap-2 ">
          {/* <div className=" w-full px-4 flex  items-center justify-between">
            <Breadcrumb homeElement={'home'} separator={'>'} />
            <ButtonFilterCategories />
          </div> */}
          <div className="w-full px-4 md:p-0">
            <HorizontalLine />
          </div>
        </div>
      </div>
      <div className=" relative top-10 w-full h-fit pt-5 ">{childrenAuth}</div>
    </div>
  );
}
