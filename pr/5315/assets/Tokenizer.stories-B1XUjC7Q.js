import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{o as i}from"./useTheme-CwJEN0rX.js";import{t as a}from"./Button-fVfwTJeB.js";import{t as o}from"./Button-CyypW4m4.js";import{t as s}from"./hooks-toDrWkGn.js";import{i as c,n as l,t as u}from"./Tokenizer-DcAhWIh3.js";import{Ti as d,wi as f}from"./iframe-CJwxvsfy.js";import{W as p,t as m}from"./esm-CL1f8dHF.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{h=t(n()),u(),f(),o(),s(),m(),g=r(),_=[{id:`1`,label:`Alice Johnson`},{id:`2`,label:`Bob Smith`},{id:`3`,label:`Charlie Brown`},{id:`4`,label:`Diana Prince`},{id:`5`,label:`Eve Williams`},{id:`6`,label:`Frank Miller`},{id:`7`,label:`Grace Lee`},{id:`8`,label:`Henry Davis`}],v={search:e=>_.filter(t=>t.label.toLowerCase().includes(e.toLowerCase())),bootstrap:()=>_.slice(0,5)},y=[{id:`react`,label:`React`},{id:`typescript`,label:`TypeScript`},{id:`stylex`,label:`StyleX`},{id:`node`,label:`Node`},{id:`graphql`,label:`GraphQL`},{id:`rust`,label:`Rust`},{id:`go`,label:`Go`},{id:`python`,label:`Python`},{id:`swift`,label:`Swift`},{id:`kotlin`,label:`Kotlin`},{id:`figma`,label:`Figma`},{id:`docker`,label:`Docker`}],b={search:e=>y.filter(t=>t.label.toLowerCase().includes(e.toLowerCase())),bootstrap:()=>y},x={title:`Core/Tokenizer`,component:l,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},isDisabled:{control:`boolean`},disabledMessage:{control:`text`,description:`Explains why the tokenizer is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the input focusable via aria-disabled (input stays blocked). Use this instead of wrapping a disabled Tokenizer in Tooltip.`},isRequired:{control:`boolean`},isOptional:{control:`boolean`},hasClear:{control:`boolean`},maxEntries:{control:`number`},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`Input size`}},decorators:[e=>(0,g.jsx)(`div`,{style:{width:400},children:(0,g.jsx)(e,{})})]},S={render:e=>{let[t,n]=(0,h.useState)([]);return(0,g.jsx)(l,{...e,searchSource:v,value:t,onChange:e=>n(e)})},args:{label:`Team Members`,placeholder:`Search people...`}},C={render:e=>{let[t,n]=(0,h.useState)([_[0],_[2]]);return(0,g.jsx)(l,{...e,searchSource:v,value:t,onChange:e=>n(e)})},args:{label:`Team Members`,placeholder:`Add more...`},name:`Pre-selected Items`},w={...S,args:{...S.args,hasClear:!0},name:`With Clear All Button`},T={...S,args:{...S.args,maxEntries:3},name:`Max 3 Entries`},E={...S,args:{...S.args,isRequired:!0}},D={...S,args:{...S.args,description:`Select up to 5 team members for this project`}},O={...S,args:{...S.args,status:{type:`error`,message:`At least one member is required`}}},k={...S,args:{...S.args,status:{type:`warning`,message:`Some members may not have access`}}},A={...S,args:{...S.args,status:{type:`success`,message:`Team is ready!`}}},j={render:e=>{let[t]=(0,h.useState)([_[0],_[1]]);return(0,g.jsx)(l,{...e,searchSource:v,value:t,onChange:()=>{}})},args:{label:`Team Members`,isDisabled:!0}},M={...S,args:{...S.args,startIcon:p},name:`With Start Icon`},N={render:e=>{let[t,n]=(0,h.useState)([_[0],_[2]]);return(0,g.jsx)(l,{...e,searchSource:v,value:t,onChange:e=>n(e)})},args:{label:`Team Members`,startIcon:p},name:`With Start Icon and Tokens`},P={render:e=>{let[t,n]=(0,h.useState)([]);return(0,g.jsx)(l,{...e,searchSource:v,value:t,onChange:e=>n(e),hasEntriesOnFocus:!0})},args:{label:`Team Members`,placeholder:`Click to see suggestions...`},name:`With Entries On Focus`},F={render:e=>{let[t,n]=(0,h.useState)([_[0],_[1],_[2],_[3],_[4],_[5]]);return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(l,{...e,searchSource:v,value:t,onChange:e=>n(e),tokenOverflowBehavior:`unfocusedInline`}),(0,g.jsx)(`p`,{style:{marginTop:8},children:`This text will shift down when the tokenizer expands on focus.`})]})},args:{label:`Team Members`,placeholder:`Add more...`},name:`Overflow Inline`},I={render:e=>{let[t,n]=(0,h.useState)([_[0],_[1],_[2],_[3],_[4],_[5]]);return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(l,{...e,searchSource:v,value:t,onChange:e=>n(e),tokenOverflowBehavior:`unfocusedLayer`}),(0,g.jsx)(`p`,{style:{marginTop:8},children:`This text should not shift when the tokenizer expands on focus.`})]})},args:{label:`Team Members`,placeholder:`Add more...`},name:`Overflow Layer`},L={render:e=>{let[t,n]=(0,h.useState)([_[0],_[2]]);return(0,g.jsx)(l,{...e,searchSource:v,value:t,onChange:e=>n(e),endContent:(0,g.jsx)(a,{label:`Apply`,variant:`primary`,size:`sm`})})},args:{label:`Team Members`},name:`With End Content`},R={search:()=>[],bootstrap:()=>[]},z={render:e=>{let[t,n]=(0,h.useState)([]);return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(l,{...e,searchSource:R,value:t,onChange:(e,t)=>{n(e)},hasCreate:!0,placeholder:`Type a tag and press Enter...`}),(0,g.jsxs)(`p`,{style:{marginTop:8,fontSize:14,color:`#666`},children:[t.length,` tag`,t.length===1?``:`s`,` added`]})]})},args:{label:`Tags`},name:`Creatable (Free Text)`},B={render:()=>{let[e,t]=(0,h.useState)([]),[n,r]=(0,h.useState)([_[0],_[2]]),[i,a]=(0,h.useState)([]);return(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,g.jsx)(l,{label:`Small (28px)`,searchSource:v,value:e,onChange:e=>t(e),placeholder:`Small size`,size:`sm`,hasClear:!0}),(0,g.jsx)(l,{label:`Medium (32px)`,searchSource:v,value:n,onChange:e=>r(e),placeholder:`Medium size (default)`,size:`md`,hasClear:!0}),(0,g.jsx)(l,{label:`Large (36px)`,searchSource:v,value:i,onChange:e=>a(e),placeholder:`Large size`,size:`lg`,hasClear:!0})]})}},V={render:e=>{let[t,n]=(0,h.useState)([]);return(0,g.jsx)(l,{...e,searchSource:v,value:t,onChange:(e,t)=>{n(e)},hasCreate:!0,hasEntriesOnFocus:!0,placeholder:`Search or type a new name...`})},args:{label:`Team Members`},name:`Creatable + Search`},H={render:e=>{let[t]=(0,h.useState)([_[0],_[1]]);return(0,g.jsx)(l,{...e,searchSource:v,value:t,onChange:()=>{}})},args:{label:`Team Members`,isDisabled:!0,disabledMessage:`You need edit access to change members`}},U={render:()=>{let[e,t]=(0,h.useState)([]),[n,r]=(0,h.useState)([]);return(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,width:320},children:[(0,g.jsx)(l,{label:`Attached (default)`,searchSource:v,value:e,onChange:e=>t(e),status:{type:`error`,message:`Select at least one member`}}),(0,g.jsx)(l,{label:`Detached`,searchSource:v,value:n,onChange:e=>r(e),status:{type:`error`,message:`Select at least one member`},statusVariant:`detached`})]})}},W={name:`Touch: the surface for your pointer`,parameters:{docs:{description:{story:`On a desktop browser this is the pointer surface. Open it on a phone, or in a device-emulated tab that reports a coarse pointer, and the same markup becomes a scrolling chip row with an Add button. Nothing at the call site changes.`}}},render:()=>{let[e,t]=(0,h.useState)([y[0],y[1]]),n=i(`(pointer: coarse)`);return(0,g.jsxs)(`div`,{className:`xqujd4m x193iq5w x78zum5 xdt5ytf xou54vl`,children:[(0,g.jsx)(d,{status:n?`success`:`info`,title:n?`Coarse pointer: the touch surface`:`Fine pointer: the pointer surface`}),(0,g.jsx)(l,{label:`Skills`,searchSource:b,value:e,onChange:e=>t(e),placeholder:`Search skills`,width:`100%`})]})}},G={name:`Touch: default`,parameters:{docs:{description:{story:`Three chips and the Add button. Tap Add to open the suggestion sheet; tapping a row adds that token and leaves the sheet up for the next one.`}}},render:()=>{let[e,t]=(0,h.useState)([y[0],y[1],y[2]]);return(0,g.jsx)(`div`,{className:`xqujd4m x193iq5w x78zum5 xdt5ytf xou54vl`,children:(0,g.jsx)(c,{label:`Skills`,searchSource:b,value:e,onChange:e=>t(e),placeholder:`Search skills`,width:`100%`})})}},K={name:`Touch: more tokens than fit`,parameters:{docs:{description:{story:`The chips scroll sideways within the field. The field stays exactly one line tall however many there are, so adding and removing never reflows the form below it, and Add stays put at the trailing edge rather than scrolling away with the chips.`}}},render:()=>{let[e,t]=(0,h.useState)(y.slice(0,8));return(0,g.jsx)(`div`,{className:`xqujd4m x193iq5w x78zum5 xdt5ytf xou54vl`,children:(0,g.jsx)(c,{label:`Skills`,searchSource:b,value:e,onChange:e=>t(e),placeholder:`Search skills`,hasClear:!0,width:`100%`})})}},q={name:`Touch: nothing selected`,parameters:{docs:{description:{story:`With no tokens the placeholder holds the line. It doubles as the sheet's search placeholder, so write it as a search hint.`}}},render:()=>{let[e,t]=(0,h.useState)([]);return(0,g.jsx)(`div`,{className:`xqujd4m x193iq5w x78zum5 xdt5ytf xou54vl`,children:(0,g.jsx)(c,{label:`Skills`,searchSource:b,value:e,onChange:e=>t(e),placeholder:`Search skills`,width:`100%`})})}},J={name:`Touch: free-text tags`,parameters:{docs:{description:{story:"With `hasCreate`, typing something the source does not have puts a Create row at the end of the list. The keyboard’s return key commits it too."}}},render:()=>{let[e,t]=(0,h.useState)([]);return(0,g.jsx)(`div`,{className:`xqujd4m x193iq5w x78zum5 xdt5ytf xou54vl`,children:(0,g.jsx)(c,{label:`Tags`,searchSource:b,value:e,onChange:e=>t(e),placeholder:`Search or add a tag`,hasCreate:!0,width:`100%`})})}},Y={name:`Touch: capped at maxEntries`,parameters:{docs:{description:{story:`Add is disabled once the cap is reached, and the token that reaches it closes the sheet: there is nothing left to offer.`}}},render:()=>{let[e,t]=(0,h.useState)([y[0]]);return(0,g.jsx)(`div`,{className:`xqujd4m x193iq5w x78zum5 xdt5ytf xou54vl`,children:(0,g.jsx)(c,{label:`Skills`,description:`Up to 3`,searchSource:b,value:e,onChange:e=>t(e),placeholder:`Search skills`,maxEntries:3,width:`100%`})})}},X={name:`Touch: validation status`,parameters:{docs:{description:{story:`Status, description, and required treatment come from the same Field wrapper the pointer surface uses, so they look and behave identically on both.`}}},render:()=>{let[e,t]=(0,h.useState)([]);return(0,g.jsx)(`div`,{className:`xqujd4m x193iq5w x78zum5 xdt5ytf xou54vl`,children:(0,g.jsx)(c,{label:`Skills`,searchSource:b,value:e,onChange:e=>t(e),placeholder:`Search skills`,isRequired:!0,status:{type:`error`,message:`Pick at least one skill`},width:`100%`})})}},Z={name:`Touch: disabled, with a reason`,parameters:{docs:{description:{story:"With `disabledMessage` the Add button stays focusable under `aria-disabled` so the reason is reachable by keyboard and by tap, while the sheet stays shut."}}},render:()=>(0,g.jsx)(`div`,{className:`xqujd4m x193iq5w x78zum5 xdt5ytf xou54vl`,children:(0,g.jsx)(c,{label:`Skills`,searchSource:b,value:[y[0],y[1]],onChange:()=>{},placeholder:`Search skills`,isDisabled:!0,disabledMessage:`Ask an admin to unlock this field`,width:`100%`})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem[]>([]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} />;
  },
  args: {
    label: 'Team Members',
    placeholder: 'Search people...'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState([users[0], users[2]]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} />;
  },
  args: {
    label: 'Team Members',
    placeholder: 'Add more...'
  },
  name: 'Pre-selected Items'
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    hasClear: true
  },
  name: 'With Clear All Button'
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    maxEntries: 3
  },
  name: 'Max 3 Entries'
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    isRequired: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    description: 'Select up to 5 team members for this project'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    status: {
      type: 'error',
      message: 'At least one member is required'
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    status: {
      type: 'warning',
      message: 'Some members may not have access'
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    status: {
      type: 'success',
      message: 'Team is ready!'
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value] = useState([users[0], users[1]]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={() => {}} />;
  },
  args: {
    label: 'Team Members',
    isDisabled: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    startIcon: MagnifyingGlassIcon
  },
  name: 'With Start Icon'
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState([users[0], users[2]]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} />;
  },
  args: {
    label: 'Team Members',
    startIcon: MagnifyingGlassIcon
  },
  name: 'With Start Icon and Tokens'
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem[]>([]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} hasEntriesOnFocus />;
  },
  args: {
    label: 'Team Members',
    placeholder: 'Click to see suggestions...'
  },
  name: 'With Entries On Focus'
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem[]>([users[0], users[1], users[2], users[3], users[4], users[5]]);
    return <div>
        <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} tokenOverflowBehavior="unfocusedInline" />
        <p style={{
        marginTop: 8
      }}>
          This text will shift down when the tokenizer expands on focus.
        </p>
      </div>;
  },
  args: {
    label: 'Team Members',
    placeholder: 'Add more...'
  },
  name: 'Overflow Inline'
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem[]>([users[0], users[1], users[2], users[3], users[4], users[5]]);
    return <div>
        <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} tokenOverflowBehavior="unfocusedLayer" />
        <p style={{
        marginTop: 8
      }}>
          This text should not shift when the tokenizer expands on focus.
        </p>
      </div>;
  },
  args: {
    label: 'Team Members',
    placeholder: 'Add more...'
  },
  name: 'Overflow Layer'
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem[]>([users[0], users[2]]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} endContent={<Button label="Apply" variant="primary" size="sm" />} />;
  },
  args: {
    label: 'Team Members'
  },
  name: 'With End Content'
}`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tags, setTags] = useState<SearchableItem[]>([]);
    return <div>
        <Tokenizer {...args} searchSource={emptySource} value={tags} onChange={(items, _change) => {
        setTags(items);
      }} hasCreate placeholder="Type a tag and press Enter..." />
        <p style={{
        marginTop: 8,
        fontSize: 14,
        color: '#666'
      }}>
          {tags.length} tag{tags.length !== 1 ? 's' : ''} added
        </p>
      </div>;
  },
  args: {
    label: 'Tags'
  },
  name: 'Creatable (Free Text)'
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sm, setSm] = useState<SearchableItem[]>([]);
    const [md, setMd] = useState<SearchableItem[]>([users[0], users[2]]);
    const [lg, setLg] = useState<SearchableItem[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <Tokenizer label="Small (28px)" searchSource={userSource} value={sm} onChange={items => setSm(items)} placeholder="Small size" size="sm" hasClear />
        <Tokenizer label="Medium (32px)" searchSource={userSource} value={md} onChange={items => setMd(items)} placeholder="Medium size (default)" size="md" hasClear />
        <Tokenizer label="Large (36px)" searchSource={userSource} value={lg} onChange={items => setLg(items)} placeholder="Large size" size="lg" hasClear />
      </div>;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem[]>([]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={(items, _change) => {
      setValue(items);
    }} hasCreate hasEntriesOnFocus placeholder="Search or type a new name..." />;
  },
  args: {
    label: 'Team Members'
  },
  name: 'Creatable + Search'
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value] = useState([users[0], users[1]]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={() => {}} />;
  },
  args: {
    label: 'Team Members',
    isDisabled: true,
    disabledMessage: 'You need edit access to change members'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [a, setA] = useState<SearchableItem[]>([]);
    const [b, setB] = useState<SearchableItem[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      width: 320
    }}>
        <Tokenizer label="Attached (default)" searchSource={userSource} value={a} onChange={items => setA(items)} status={{
        type: 'error',
        message: 'Select at least one member'
      }} />
        <Tokenizer label="Detached" searchSource={userSource} value={b} onChange={items => setB(items)} status={{
        type: 'error',
        message: 'Select at least one member'
      }} statusVariant="detached" />
      </div>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Touch: the surface for your pointer',
  parameters: {
    docs: {
      description: {
        story: 'On a desktop browser this is the pointer surface. Open it on a ' + 'phone, or in a device-emulated tab that reports a coarse pointer, ' + 'and the same markup becomes a scrolling chip row with an Add ' + 'button. Nothing at the call site changes.'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState<SearchableItem[]>([skills[0], skills[1]]);
    // Report the surface actually on screen, rather than assuming a desktop.
    const isTouch = useMediaQuery('(pointer: coarse)');
    return <div {...stylex.props(touchStyles.phone)}>
        <Banner status={isTouch ? 'success' : 'info'} title={isTouch ? 'Coarse pointer: the touch surface' : 'Fine pointer: the pointer surface'} />
        <Tokenizer label="Skills" searchSource={skillSource} value={value} onChange={items => setValue(items)} placeholder="Search skills" width="100%" />
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Touch: default',
  parameters: {
    docs: {
      description: {
        story: 'Three chips and the Add button. Tap Add to open the suggestion ' + 'sheet; tapping a row adds that token and leaves the sheet up for ' + 'the next one.'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState<SearchableItem[]>([skills[0], skills[1], skills[2]]);
    return <div {...stylex.props(touchStyles.phone)}>
        <TokenizerTouchSurface label="Skills" searchSource={skillSource} value={value} onChange={items => setValue(items)} placeholder="Search skills" width="100%" />
      </div>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Touch: more tokens than fit',
  parameters: {
    docs: {
      description: {
        story: 'The chips scroll sideways within the field. The field stays ' + 'exactly one line tall however many there are, so adding and ' + 'removing never reflows the form below it, and Add stays put at ' + 'the trailing edge rather than scrolling away with the chips.'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState<SearchableItem[]>(skills.slice(0, 8));
    return <div {...stylex.props(touchStyles.phone)}>
        <TokenizerTouchSurface label="Skills" searchSource={skillSource} value={value} onChange={items => setValue(items)} placeholder="Search skills" hasClear width="100%" />
      </div>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Touch: nothing selected',
  parameters: {
    docs: {
      description: {
        story: 'With no tokens the placeholder holds the line. It doubles as the ' + "sheet's search placeholder, so write it as a search hint."
      }
    }
  },
  render: () => {
    const [value, setValue] = useState<SearchableItem[]>([]);
    return <div {...stylex.props(touchStyles.phone)}>
        <TokenizerTouchSurface label="Skills" searchSource={skillSource} value={value} onChange={items => setValue(items)} placeholder="Search skills" width="100%" />
      </div>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Touch: free-text tags',
  parameters: {
    docs: {
      description: {
        story: 'With \`hasCreate\`, typing something the source does not have puts ' + 'a Create row at the end of the list. The keyboard\\u2019s return ' + 'key commits it too.'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState<SearchableItem[]>([]);
    return <div {...stylex.props(touchStyles.phone)}>
        <TokenizerTouchSurface label="Tags" searchSource={skillSource} value={value} onChange={items => setValue(items)} placeholder="Search or add a tag" hasCreate width="100%" />
      </div>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Touch: capped at maxEntries',
  parameters: {
    docs: {
      description: {
        story: 'Add is disabled once the cap is reached, and the token that ' + 'reaches it closes the sheet: there is nothing left to offer.'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState<SearchableItem[]>([skills[0]]);
    return <div {...stylex.props(touchStyles.phone)}>
        <TokenizerTouchSurface label="Skills" description="Up to 3" searchSource={skillSource} value={value} onChange={items => setValue(items)} placeholder="Search skills" maxEntries={3} width="100%" />
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Touch: validation status',
  parameters: {
    docs: {
      description: {
        story: 'Status, description, and required treatment come from the same ' + 'Field wrapper the pointer surface uses, so they look and behave ' + 'identically on both.'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState<SearchableItem[]>([]);
    return <div {...stylex.props(touchStyles.phone)}>
        <TokenizerTouchSurface label="Skills" searchSource={skillSource} value={value} onChange={items => setValue(items)} placeholder="Search skills" isRequired status={{
        type: 'error',
        message: 'Pick at least one skill'
      }} width="100%" />
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Touch: disabled, with a reason',
  parameters: {
    docs: {
      description: {
        story: 'With \`disabledMessage\` the Add button stays focusable under ' + '\`aria-disabled\` so the reason is reachable by keyboard and by ' + 'tap, while the sheet stays shut.'
      }
    }
  },
  render: () => <div {...stylex.props(touchStyles.phone)}>
      <TokenizerTouchSurface label="Skills" searchSource={skillSource} value={[skills[0], skills[1]]} onChange={() => {}} placeholder="Search skills" isDisabled disabledMessage="Ask an admin to unlock this field" width="100%" />
    </div>
}`,...Z.parameters?.docs?.source}}},Q=`Default.WithPreselected.WithClear.MaxEntries.Required.WithDescription.WithError.WithWarning.WithSuccess.Disabled.WithStartIcon.WithStartIconAndTokens.WithEntriesOnFocus.OverflowInline.OverflowLayer.WithEndContent.Creatable.SizeVariants.CreatableWithSearch.DisabledWithMessage.StatusVariantComparison.TouchResponsive.TouchDefault.TouchManyTokens.TouchEmpty.TouchCreatable.TouchBounded.TouchStatus.TouchDisabled`.split(`.`)}))();export{z as Creatable,V as CreatableWithSearch,S as Default,j as Disabled,H as DisabledWithMessage,T as MaxEntries,F as OverflowInline,I as OverflowLayer,E as Required,B as SizeVariants,U as StatusVariantComparison,Y as TouchBounded,J as TouchCreatable,G as TouchDefault,Z as TouchDisabled,q as TouchEmpty,K as TouchManyTokens,W as TouchResponsive,X as TouchStatus,w as WithClear,D as WithDescription,L as WithEndContent,P as WithEntriesOnFocus,O as WithError,C as WithPreselected,M as WithStartIcon,N as WithStartIconAndTokens,A as WithSuccess,k as WithWarning,Q as __namedExportsOrder,x as default};