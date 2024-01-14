import tw, { styled } from 'twin.macro';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NftCard from '../components/NftCard';
import { Divider, Select, Input } from 'antd';
import { selectRaffles } from "../store/raffles/raffles.selectors";
import { getAllRaffles } from '../store/raffles/raffles.actions';

const StyledPage = styled.div`
  ${tw`w-full`}
  min-height: calc(100vh - 268px);
  // background-color: #E5E5E5;
`;

const LiveRaffles = () => {
  const { Option } = Select;

  const dispatch = useDispatch();
  const raffles = useSelector(selectRaffles);

  useEffect(() => {
    dispatch(getAllRaffles());
  }, [dispatch]);


  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  return (
    <StyledPage>
      <div tw="mx-auto max-w-6xl px-6 pt-14 mb-16 sm:px-3">
        <div className='desktop'>
          <div tw="text-gray-300 text-3xl font-semibold leading-[50px] mb-1">
            Explore all NFTs
          </div>
          {raffles.length > 0 && <div tw="text-[18px] font-medium text-[#5204A8] mb-12">
            {raffles.length} items listed
          </div>}
        </div>
        <div className='mobile'>
          <div tw="text-black text-4xl font-semibold text-center mb-2">
            Explore all NFTs
          </div>
          {raffles.length > 0 && <div tw="text-[18px] font-medium text-[#5204A8] text-center mb-16">
            {raffles.length} items listed
          </div>}
        </div>

        <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {raffles.length !== 0 && raffles.map((item, index) => {
            return (<div key={index} tw="text-gray-300"><NftCard raffle={item} state={"buy"}></NftCard></div>)
          })}
        </div>
        {raffles.length === 0 && (
          <div tw="flex justify-center mt-20 text-[#818181] text-4xl font-semibold">
            No items to display
          </div>)}
      </div>
    </StyledPage>
  );
};

export default LiveRaffles;
