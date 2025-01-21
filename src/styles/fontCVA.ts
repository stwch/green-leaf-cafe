import { cva } from '@styled-system/css';

export const fontCVA = cva({
  variants: {
    title: {
      pageEN: {
        fontFamily: 'LovelyJackie',
        fontSize: '3rem',
        lineHeight: '1.25',
      },
      pageJP: {
        fontFamily: 'Anzu',
        fontSize: '2.5rem',
        lineHeight: '1.25',
      },
      copy: {
        fontFamily: 'Anzu',
        fontSize: '2.5rem',
        lineHeight: '1.5',
        textWrap: 'nowrap',
      },
      sectionEN: {
        fontFamily: 'LovelyJackie',
        fontSize: '2.625rem',
      },
      sectionJP: {
        fontFamily: 'Anzu',
        fontSize: '2.25rem',
      },
      menu: {
        fontFamily: 'GenJyuuGoXP-M',
        lineHeight: '1.5',
      },
    },
    body: {
      page: {
        fontFamily: 'GenJyuuGoXP-R',
        fontSize: '.875rem',
        lineHeight: '1.75',
      },
      menu: {
        fontFamily: 'GenJyuuGoXP-R',
        fontSize: '.875rem',
        lineHeight: '1.75',
      },
    },
    link: {
      feature: {
        fontFamily: 'GenJyuuGoXP-M',
        fontSize: '.75rem',
      },
      nav: {
        fontFamily: 'GenJyuuGoXP-R',
        lineHeight: '1.5',
      },
      article: {
        fontFamily: 'GenJyuuGoXP-M',
        fontSize: '.875rem',
      },
      eventDate: {
        fontFamily: 'GenJyuuGoXP-M',
        fontSize: '1.5rem',
      },
      eventTime: {
        fontFamily: 'GenJyuuGoXP-M',
        fontSize: '.875rem',
      },
      eventName: {
        fontFamily: 'GenJyuuGoXP-M',
        lineHeight: '1.25',
      },
      eventLink: {
        fontFamily: 'GenJyuuGoXP-M',
        fontSize: '.875rem',
      },
    },
    label: {
      menu: {
        fontFamily: 'GenJyuuGoXP-M',
      },
      setMenuName: {
        fontFamily: 'GenJyuuGoXP-M',
        fontSize: '1.125rem',
      },
      setMenuInfo: {
        fontFamily: 'GenJyuuGoXP-L',
        fontSize: '.875rem',
      },
      setMenuPrice: {
        fontFamily: 'GenJyuuGoXP-M',
      },
      setMenuChoice: {
        fontFamily: 'GenJyuuGoXP-M',
        fontSize: '.875rem',
      },
    },
    ui: {
      menu: {
        fontFamily: 'GenJyuuGoXP-M',
        fontSize: '.5rem',
      },
    },
    ex: {
      sns: {
        fontFamily: 'Anzu',
        fontSize: '1.5rem',
      },
      copyright: {
        fontFamily: 'GenJyuuGoXP-R',
        fontSize: '1rem',
      },
    },
  },
});
