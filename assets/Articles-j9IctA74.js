import{j as e,f as j,d as n,F as w,a as u,r as c,L as m}from"./index-CfSwxC_E.js";import{A as y,T as $}from"./ArticleAuthor-CazMeyaA.js";function b({likeCount:t}){let i=!1;return e.jsxs(k,{children:[e.jsx(T,{icon:j,$token:i}),e.jsx(C,{$token:i,children:t})]})}const k=n.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid ${({theme:t})=>t.colors.green};
  border-radius: 8px;
  gap: 12px;
  cursor: pointer;
`,T=n(w)`
  width: 16px;
  height: 16px;
  color: ${({theme:t,$token:i})=>i?t.colors.green:t.colors.grey};
`,C=n.p`
  font-size: 12.8px;
  color: ${({theme:t,$token:i})=>i?t.colors.green:t.colors.grey};
`;function v({article:t}){return e.jsxs(A,{children:[e.jsxs(L,{children:[e.jsx(y,{author:t.author,createdAt:t.createdAt}),e.jsx(b,{likeCount:t.favoritesCount})]}),e.jsxs(S,{children:[e.jsx(z,{children:t.title}),e.jsx(W,{children:t.description}),e.jsx(E,{children:t.tagList.map((i,o)=>i?e.jsx(B,{children:i},o):e.jsx("div",{},o))})]})]})}const A=n.li`
  width: 800px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${({theme:t})=>t.colors.grey};
  gap: 10px;
`,L=n.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
`,S=n.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  gap: 16px;
`,z=n.p`
  font-family: 'Titillium Web';
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: ${({theme:t})=>t.colors.black};
`,W=n.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  color: ${({theme:t})=>t.colors.grey};
`,E=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,B=n.p`
  border: 1px solid ${({theme:t})=>t.colors.grey};
  color: ${({theme:t})=>t.colors.grey};
  border-radius: 12px;
  padding: 6px 16px;
  font-size: 12.8px;
  font-weight: 600;
`;async function F(t=0,i=0){const o=await fetch(`https://realworld.habsida.net/api/articles?limit=${t}&offset=${i}`);if(!o.ok)throw new Error("Failed to load articles");return await o.json()}function H({articlesCount:t,onPageChange:i,currentPage:o,limit:a}){const s=Math.ceil(t/a);let l=[];return console.log(o),o<=4?l=[1,2,3,4,5,"...",s]:s-4<=o?l=[1,"...",s-5,s-4,s-3,s-2,s-1,s]:l=[1,"...",o-2,o-1,o,o+1,o+2,"...",s],e.jsx(M,{children:l.map(r=>r==="..."?e.jsx(g,{$active:o===r,children:r},r.index):e.jsx(g,{$active:o===r,onClick:()=>i(r),children:r},r.index))})}const M=n.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px 20px 0px;
`,g=n.span`
  border: 1px solid ${({theme:t})=>t.colors.green};
  padding: 12px 16px;
  cursor: pointer;
  color: ${({$active:t,theme:i})=>t?"white":i.colors.green};
  background-color: ${({$active:t,theme:i})=>t?i.colors.green:"white"};
  transition: 0.2s;
`;function R(){return e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(N,{children:"Real World Blog"}),e.jsx(O,{children:"A place to share your knowledge."})]})})}const D=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 190px;
  margin: 0 auto;
  background-color: ${({theme:t})=>t.colors.green};
`,I=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,N=n(u)`
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  font-family: 'Titillium Web';
  color: white;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 6px;
`,O=n.p`
  color: white;
  font-size: 24px;
`;async function q(){const t=await fetch("https://realworld.habsida.net/api/tags");if(!t.ok)throw new Error("Failed to load tags");return await t.json()}function G(){const[t,i]=c.useState([]),[o,a]=c.useState(!1);return c.useEffect(()=>{async function s(){const l=await q();i(l.tags)}s()},[]),e.jsxs(J,{$toggle:o,children:[e.jsx(K,{children:"Popular tags"}),e.jsx($,{newTags:o?t:t.slice(0,7)}),e.jsx(Q,{children:e.jsx(U,{onClick:()=>a(!o),children:o?"Hide":"Show more"})})]})}const J=n.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${({theme:t})=>t.colors.grey};
  border-radius: 12px;
  gap: 12px;
  margin: 20px 0 16px 0;
  width: 800px;
`,K=n.p`
  font-family: 'Titillium Web';
  font-weight: 700;
  font-size: 16px;
  color: ${({theme:t})=>t.colors.black};
`,Q=n.div`
  display: flex;
  justify-content: end;
  align-items: center;
`,U=n.button`
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
`;function P(){const[t,i]=c.useState(!0),[o,a]=c.useState([]),[s,l]=c.useState(1),[r,h]=c.useState(0),x=3,p=(s-1)*x;return c.useEffect(()=>{async function d(){const f=await F(x,p);h(f.articlesCount),a(f.articles),i(!1)}d()},[p]),t?e.jsx(m,{}):e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsxs(V,{children:[e.jsx(G,{}),e.jsx(X,{children:o.map(d=>e.jsx(Y,{to:`/articles/${d.slug}`,children:e.jsx(v,{article:d})},d.slug))}),e.jsx(H,{articlesCount:r,limit:x,onPageChange:l,currentPage:s})]})]})}const V=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  justify-content: center;
  align-items: center;
`,X=n.ul`
  list-style: none;
  padding: 0;
`,Y=n(u)`
  text-decoration: none;
  color: inherit;
  cursor: auto;
`;export{P as default};
