import { useSearchParams } from "react-router-dom";

export default function useLang(defaultLang = 'en') {
    const [searchParams, setSearchParams] = useSearchParams();

    return searchParams.get('lang') || defaultLang;
  }