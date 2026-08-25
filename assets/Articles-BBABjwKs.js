import{j as e,f as m,a as o,F as y,b as h,r as l,L as $}from"./index-DojLpHbX.js";import{A as b,T as k,E as T}from"./ErrorMessage-BDGzsrrH.js";function C({likeCount:t}){let n=!1;return e.jsxs(v,{children:[e.jsx(A,{icon:m,$token:n}),e.jsx(S,{$token:n,children:t})]})}const v=o.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid ${({theme:t})=>t.colors.green};
  border-radius: 8px;
  gap: 12px;
  cursor: pointer;
`,A=o(y)`
  width: 16px;
  height: 16px;
  color: ${({theme:t,$token:n})=>n?t.colors.green:t.colors.grey};
`,S=o.p`
  font-size: 12.8px;
  color: ${({theme:t,$token:n})=>n?t.colors.green:t.colors.grey};
`;function E({article:t}){return e.jsxs(L,{children:[e.jsxs(z,{children:[e.jsx(b,{author:t.author,createdAt:t.createdAt}),e.jsx(C,{likeCount:t.favoritesCount})]}),e.jsxs(W,{children:[e.jsx(F,{children:t.title}),e.jsx(B,{children:t.description}),e.jsx(M,{children:t.tagList.map((n,r)=>n?e.jsx(H,{children:n},r):e.jsx("div",{},r))})]})]})}const L=o.li`
  width: 800px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${({theme:t})=>t.colors.grey};
  gap: 10px;
`,z=o.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
`,W=o.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  gap: 16px;
`,F=o.p`
  font-family: 'Titillium Web';
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: ${({theme:t})=>t.colors.black};
`,B=o.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  color: ${({theme:t})=>t.colors.grey};
`,M=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,H=o.p`
  border: 1px solid ${({theme:t})=>t.colors.grey};
  color: ${({theme:t})=>t.colors.grey};
  border-radius: 12px;
  padding: 6px 16px;
  font-size: 12.8px;
  font-weight: 600;
`;async function R(t=0,n=0){const r=await fetch(`https://realworld.habsida.net/api/articles?limit=${t}&offset=${n}`);if(!r.ok)throw new Error("Failed to load articles");return await r.json()}function D({articlesCount:t,onPageChange:n,currentPage:r,limit:d}){const s=Math.ceil(t/d);let c=[];return console.log(r),s<=5?c=Array.from({length:s},(i,a)=>a+1):r<=4?c=[1,2,3,4,5,"...",s]:s-4<=r?c=[1,"...",s-5,s-4,s-3,s-2,s-1,s]:c=[1,"...",r-2,r-1,r,r+1,r+2,"...",s],e.jsx(I,{children:c.map((i,a)=>i==="..."?e.jsx(u,{$active:r===i,children:i},`${i}-${a}`):e.jsx(u,{$active:r===i,onClick:()=>n(i),children:i},`${i}-${a}`))})}const I=o.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px 20px 0px;
`,u=o.span`
  border: 1px solid ${({theme:t})=>t.colors.green};
  padding: 12px 16px;
  cursor: pointer;
  color: ${({$active:t,theme:n})=>t?"white":n.colors.green};
  background-color: ${({$active:t,theme:n})=>t?n.colors.green:"white"};
  transition: 0.2s;
`;function N(){return e.jsx(O,{children:e.jsxs(_,{children:[e.jsx(q,{children:"Real World Blog"}),e.jsx(G,{children:"A place to share your knowledge."})]})})}const O=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 190px;
  margin: 0 auto;
  background-color: ${({theme:t})=>t.colors.green};
`,_=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,q=o(h)`
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  font-family: 'Titillium Web';
  color: white;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 6px;
`,G=o.p`
  color: white;
  font-size: 24px;
`;async function J(){const t=await fetch("https://realworld.habsida.net/api/tags");if(!t.ok)throw new Error("Failed to load tags");return await t.json()}function K(){const[t,n]=l.useState(!1),[r,d]=l.useState([]),[s,c]=l.useState(!1);return l.useEffect(()=>{async function i(){try{const a=await J();d(a.tags)}catch{n(!0)}}i()},[]),e.jsxs(Q,{$toggle:s,children:[e.jsx(U,{children:"Popular tags"}),t?e.jsx(Y,{children:"Something went wrong. We couldn't load the tags."}):e.jsx(k,{newTags:s?r:r.slice(0,7)}),t?e.jsx(e.Fragment,{}):e.jsx(V,{children:e.jsx(X,{onClick:()=>c(!s),children:s?"Hide":"Show more"})})]})}const Q=o.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${({theme:t})=>t.colors.grey};
  border-radius: 12px;
  gap: 12px;
  margin: 20px 0 16px 0;
  width: 800px;
`,U=o.p`
  font-family: 'Titillium Web';
  font-weight: 700;
  font-size: 16px;
  color: ${({theme:t})=>t.colors.black};
`,V=o.div`
  display: flex;
  justify-content: end;
  align-items: center;
`,X=o.button`
  border: 1px solid ${({theme:t})=>t.colors.green};
  border-radius: 8px;
  padding: 4px 8px;
  background-color: white;
  color: ${({theme:t})=>t.colors.green};
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${({theme:t})=>t.colors.green};
  }
`,Y=o.p`
  font-size: 24px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
`;function nt(){const[t,n]=l.useState(!0),[r,d]=l.useState(!1),[s,c]=l.useState([]),[i,a]=l.useState(1),[j,w]=l.useState(0),p=3,f=(i-1)*p;return l.useEffect(()=>{async function x(){try{const g=await R(p,f);w(g.articlesCount),c(g.articles)}catch{d(!0)}finally{n(!1)}}x()},[f]),t?e.jsx($,{}):r?e.jsx(T,{message:"articles"}):e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsxs(Z,{children:[e.jsx(K,{}),e.jsx(P,{children:s.map(x=>e.jsx(tt,{to:`/articles/${x.slug}`,children:e.jsx(E,{article:x})},x.slug))}),e.jsx(D,{articlesCount:j,limit:p,onPageChange:a,currentPage:i})]})]})}const Z=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  justify-content: center;
  align-items: center;
`,P=o.ul`
  list-style: none;
  padding: 0;
`,tt=o(h)`
  text-decoration: none;
  color: inherit;
  cursor: auto;
`;export{nt as default};
