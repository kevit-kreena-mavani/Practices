import { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";



const AllQuote = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if(status === 'pending'){
    return<div className="centered">
        <LoadingSpinner />
    </div>
  }

  if(error){
    return <div className="centered focused">{error}</div>
  }


  if(status === 'completed' && (!loadedQuote || loadedQuote.length === 0)){
    return <NoQuotesFound></NoQuotesFound>
  }
  return <QuoteList quotes={loadedQuote} />;
};

export default AllQuote;
