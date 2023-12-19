import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter( {subsets: ['latin']});

//직접 포트 추가해보기()
//부가 옵션 weight: '400' , '700', subset은 latin으로 적용

export const lusitana = Lusitana({weight: ['400', '700'], subsets: ['latin']});

