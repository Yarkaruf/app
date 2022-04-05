import React, { useState } from 'react';
import { Button, Htag, TagP, TagDiv, Rating } from '../components'


export default function Home(): JSX.Element {

  const [Raiting, setRaiting] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Заголовок</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <TagP size='big'>Большой</TagP>
      <TagP size='mid'>Мид</TagP>
      <TagP size='min'>Мелкий</TagP>
      <TagDiv size='min'>Мал</TagDiv>
      <TagDiv size='mid' color='red'>hh.ru</TagDiv>
      <TagDiv size='mid' color='green'>Сред</TagDiv>
      <TagDiv color='primary'>Фио</TagDiv>
      <Rating Raiting={Raiting} isEditable setRaiting={setRaiting}></Rating>
    </>
  );
}
