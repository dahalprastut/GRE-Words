import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import data from "./../data/data";

export default function AlphabetPage() {
  const location = useLocation();
  const [shownData, setShownData] = useState([]);
  useEffect(() => {
    const pathName = location.pathname.split("/")[2];
    setShownData(
      data
        .filter((elem) => elem.name.charAt(0) === pathName)
        .sort((a, b) => a.name.localeCompare(b.name))
    );
  }, [location.key]);
  return (
    <div className='main'>
      <div className='center'>
        <div className='characters d-flex jc-between f-wrap'>
          <Link to={`/alphabet/a`}>a</Link>
          <Link to={`/alphabet/b`}>b</Link>
          <Link to={`/alphabet/c`}>c</Link>
          <Link to={`/alphabet/d`}>d</Link>
          <Link to={`/alphabet/e`}>e</Link>
          <Link to={`/alphabet/f`}>f</Link>
          <Link to={`/alphabet/g`}>g</Link>
          <Link to={`/alphabet/h`}>h</Link>
          <Link to={`/alphabet/i`}>i</Link>
          <Link to={`/alphabet/j`}>j</Link>
          <Link to={`/alphabet/k`}>k</Link>
          <Link to={`/alphabet/l`}>l</Link>
          <Link to={`/alphabet/m`}>m</Link>
          <Link to={`/alphabet/n`}>n</Link>
          <Link to={`/alphabet/o`}>o</Link>
          <Link to={`/alphabet/p`}>p</Link>
          <Link to={`/alphabet/q`}>q</Link>
          <Link to={`/alphabet/r`}>r</Link>
          <Link to={`/alphabet/s`}>s</Link>
          <Link to={`/alphabet/t`}>t</Link>
          <Link to={`/alphabet/u`}>u</Link>
          <Link to={`/alphabet/v`}>v</Link>
          <Link to={`/alphabet/w`}>w</Link>
          <Link to={`/alphabet/x`}>x</Link>
          <Link to={`/alphabet/y`}>y</Link>
          <Link to={`/alphabet/z`}>z</Link>
        </div>
        <div className='m-2-0'>
          {shownData.length > 0 ? (
            shownData?.map((el) => {
              return <h4>{el.name}</h4>;
            })
          ) : (
            <h4>No Data Available</h4>
          )}
        </div>
      </div>
    </div>
  );
}
