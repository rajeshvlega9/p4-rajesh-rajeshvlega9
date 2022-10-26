import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CopyToClipboard from "react-copy-to-clipboard";

const ShortendResult = ({ inputValue }) => {
    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);    
    console.log(inputValue);

    async function fetchLink() {
        try {
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortenLink(res.data.result.full_short_link);
            console.log(res.data.result.full_short_link);
        } catch (error) {
            
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (inputValue.length) {
            fetchLink();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [copied]);

   
    if (loading) {
        return (<p>loading...</p>);
    }

    return (
        <div>
        {shortenLink && 
        (<div>
            <p1>{shortenLink}</p1>
            <CopyToClipboard 
                text={shortenLink}
                onCopy={() => setCopied(true)}>
                <button>Copy to Clipboard</button>
            </CopyToClipboard>
        </div>)
            }
    </div>
    );
};

export default ShortendResult;