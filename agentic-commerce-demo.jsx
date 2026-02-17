import React, { useState } from 'react';
import { ShoppingCart, Zap, CheckCircle, Settings, Network, Bot } from 'lucide-react';

const AgenticCommerceDemo = () => {
  const [activeLevel, setActiveLevel] = useState(0);
  const [messages, setMessages] = useState([]);
  const [agentState, setAgentState] = useState({
    budget: 300,
    preferences: {},
    cart: [],
    autoApproved: false
  });

  // Simulated product database (machine-readable format)
  const products = [
    { id: 1, name: 'Noise-Canceling Headphones', price: 89, rating: 4.5, delivery: '2-day', category: 'electronics' },
    { id: 2, name: 'Wireless Earbuds', price: 65, rating: 4.2, delivery: '1-day', category: 'electronics' },
    { id: 3, name: 'Coffee Beans (2lb)', price: 24, rating: 4.7, delivery: '3-day', category: 'groceries' },
    { id: 4, name: 'Organic Pasta (12-pack)', price: 18, rating: 4.3, delivery: '2-day', category: 'groceries' },
    { id: 5, name: 'Premium Olive Oil', price: 32, rating: 4.8, delivery: '2-day', category: 'groceries' }
  ];

  const addMessage = (text, type = 'system') => {
    setMessages(prev => [...prev, { text, type, timestamp: Date.now() }]);
  };

  // Level 0: Programmed - Basic subscription
  const runLevel0 = () => {
    addMessage('🤖 Level 0: Programmed Subscription', 'header');
    addMessage('Setting up basic rule: "Subscribe to Coffee Beans every 30 days"', 'agent');
    setTimeout(() => {
      addMessage('✅ Subscription created. Next delivery: March 19, 2026', 'success');
      addMessage('⚠️ Limitation: If product is out of stock or price changes significantly, subscription fails', 'warning');
    }, 1000);
  };

  // Level 1: Assist - Agent analyzes and recommends
  const runLevel1 = () => {
    addMessage('🤖 Level 1: Assist (Cognitive Sidekick)', 'header');
    addMessage('User Query: "Find me the best noise-canceling headphones"', 'user');
    
    setTimeout(() => {
      addMessage('🔍 Analyzing products using MCP (Model Context Protocol)...', 'agent');
      addMessage('📊 Comparing: Price, Ratings, Delivery Speed', 'agent');
      
      setTimeout(() => {
        const headphones = products.filter(p => p.category === 'electronics');
        const best = headphones.reduce((a, b) => a.rating > b.rating ? a : b);
        addMessage(`💡 Recommendation: ${best.name}`, 'success');
        addMessage(`   Price: $${best.price} | Rating: ${best.rating}⭐ | Delivery: ${best.delivery}`, 'info');
        addMessage('👤 Human must now manually add to cart and checkout', 'warning');
      }, 1500);
    }, 800);
  };

  // Level 2: Assemble - Agent creates purchase-ready basket
  const runLevel2 = () => {
    addMessage('🤖 Level 2: Assemble (Purchase-Ready Basket)', 'header');
    addMessage('User Query: "Get me headphones and weekly groceries"', 'user');
    
    setTimeout(() => {
      addMessage('🛒 Assembling basket with trade-off analysis...', 'agent');
      addMessage('⚖️ Optimizing: Price vs. Delivery Speed vs. Quality', 'agent');
      
      setTimeout(() => {
        const selectedItems = [
          products[0], // Headphones
          products[2], // Coffee
          products[3]  // Pasta
        ];
        
        const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
        const tax = (total * 0.08).toFixed(2);
        const shipping = 5.99;
        const finalTotal = (total + parseFloat(tax) + shipping).toFixed(2);
        
        addMessage('📦 Basket assembled:', 'success');
        selectedItems.forEach(item => {
          addMessage(`   • ${item.name} - $${item.price}`, 'info');
        });
        addMessage(`   Subtotal: $${total}`, 'info');
        addMessage(`   Tax: $${tax}`, 'info');
        addMessage(`   Shipping: $${shipping}`, 'info');
        addMessage(`   💰 Total: $${finalTotal}`, 'success');
        addMessage('✋ Human must click "Buy Now" to complete purchase', 'warning');
        
        setAgentState(prev => ({ ...prev, cart: selectedItems }));
      }, 2000);
    }, 800);
  };

  // Level 3: Authorize - Agent executes within guardrails
  const runLevel3 = () => {
    addMessage('🤖 Level 3: Authorize (Boundary-Based Execution)', 'header');
    addMessage('User sets guardrail: "If headphones drop below $80, buy them"', 'user');
    
    setTimeout(() => {
      addMessage('🎯 Monitoring price using A2A (Agent-to-Agent) protocol...', 'agent');
      addMessage('📡 Polling merchant agent every 6 hours...', 'agent');
      
      setTimeout(() => {
        addMessage('🔔 PRICE DROP DETECTED: Headphones now $75', 'alert');
        addMessage('✅ Guardrail condition met ($75 < $80)', 'success');
        addMessage('💳 Executing purchase autonomously via AP2 (Agent Payment Protocol)...', 'agent');
        
        setTimeout(() => {
          addMessage('✅ PURCHASE COMPLETE', 'success');
          addMessage('📧 Confirmation sent to user', 'info');
          addMessage('🎯 Agent acted within authorized boundaries', 'success');
        }, 1500);
      }, 2500);
    }, 800);
  };

  // Level 4: Autonomize - Long-term goal management
  const runLevel4 = () => {
    addMessage('🤖 Level 4: Autonomize (Goal-Based Management)', 'header');
    addMessage('User goal: "Keep my pantry stocked for under $300/month"', 'user');
    
    setTimeout(() => {
      addMessage('🧠 Agent analyzing consumption patterns...', 'agent');
      addMessage('📊 Historical data: Coffee depletes every 3 weeks, Pasta every 5 weeks', 'agent');
      
      setTimeout(() => {
        addMessage('🤖 Creating autonomous restocking plan:', 'success');
        addMessage('   Week 1: Order Coffee Beans ($24)', 'info');
        addMessage('   Week 3: Order Coffee + Olive Oil ($56)', 'info');
        addMessage('   Week 5: Order Pasta + Coffee ($42)', 'info');
        addMessage('   Monthly total: $122 (under $300 budget ✅)', 'success');
        addMessage('🔄 Agent will execute purchases automatically', 'agent');
        addMessage('⚠️ Human only notified for exceptions (price spikes, out of stock)', 'warning');
        
        setTimeout(() => {
          addMessage('📦 Week 1 purchase executed: Coffee Beans ordered', 'success');
          addMessage('💰 Budget remaining: $276/month', 'info');
        }, 2000);
      }, 2000);
    }, 800);
  };

  // Level 5: Networked Autonomy - Multi-agent ecosystem
  const runLevel5 = () => {
    addMessage('🤖 Level 5: Networked Autonomy (Multi-Agent Ecosystem)', 'header');
    addMessage('Personal Agent: "Maintain pantry inventory while maximizing savings"', 'user');
    
    setTimeout(() => {
      addMessage('🌐 Personal Agent broadcasting to merchant agent network...', 'agent');
      addMessage('📡 Using MCP for context sharing across agents', 'agent');
      
      setTimeout(() => {
        addMessage('🤝 Merchant Agent A (GroceryCo): "Coffee available at $22 (bulk discount)"', 'merchant');
        addMessage('🤝 Merchant Agent B (PantryPlus): "Coffee at $24 + free pasta"', 'merchant');
        addMessage('🤝 Merchant Agent C (FreshMart): "Coffee at $23, 2-hour delivery"', 'merchant');
        
        setTimeout(() => {
          addMessage('🧮 Personal Agent negotiating via A2A protocol...', 'agent');
          addMessage('🎯 Evaluating: Price + Delivery + Bundle Value + Loyalty Points', 'agent');
          
          setTimeout(() => {
            addMessage('✅ NEGOTIATION COMPLETE', 'success');
            addMessage('🏆 Selected: Merchant Agent B (PantryPlus)', 'success');
            addMessage('   Reason: Best total value ($24 coffee + $18 pasta free = $42 value for $24)', 'info');
            addMessage('💳 Payment settled via AP2 protocol', 'agent');
            addMessage('📦 Transaction completed without human interface', 'success');
            addMessage('🔔 Human notified of completed transaction', 'info');
            
            setTimeout(() => {
              addMessage('🌟 PROTOCOL STACK USED:', 'header');
              addMessage('   MCP: Shared user preferences & inventory state', 'info');
              addMessage('   A2A: Direct agent-to-agent negotiation', 'info');
              addMessage('   AP2: Secure autonomous payment settlement', 'info');
            }, 1500);
          }, 2500);
        }, 2000);
      }, 1500);
    }, 800);
  };

  const levels = [
    {
      level: 0,
      name: 'Programmed',
      description: 'Basic rules-based subscriptions',
      icon: Settings,
      color: 'bg-gray-500',
      action: runLevel0
    },
    {
      level: 1,
      name: 'Assist',
      description: 'Cognitive sidekick - analyzes and recommends',
      icon: Bot,
      color: 'bg-blue-500',
      action: runLevel1
    },
    {
      level: 2,
      name: 'Assemble',
      description: 'Creates purchase-ready basket',
      icon: ShoppingCart,
      color: 'bg-green-500',
      action: runLevel2
    },
    {
      level: 3,
      name: 'Authorize',
      description: 'Executes within human-set boundaries',
      icon: CheckCircle,
      color: 'bg-yellow-500',
      action: runLevel3
    },
    {
      level: 4,
      name: 'Autonomize',
      description: 'Manages long-term goals autonomously',
      icon: Zap,
      color: 'bg-orange-500',
      action: runLevel4
    },
    {
      level: 5,
      name: 'Networked Autonomy',
      description: 'Multi-agent ecosystem with direct negotiation',
      icon: Network,
      color: 'bg-purple-500',
      action: runLevel5
    }
  ];

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Agentic Commerce Automation Curve
          </h1>
          <p className="text-xl text-slate-300 mb-2">
            Interactive Demo: 6 Levels of AI-Driven Commerce
          </p>
          <p className="text-sm text-slate-400">
            Based on McKinsey's framework | Protocols: MCP, A2A, AP2
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Level Buttons */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">Automation Levels</h2>
            {levels.map((lvl) => {
              const Icon = lvl.icon;
              return (
                <button
                  key={lvl.level}
                  onClick={() => {
                    setActiveLevel(lvl.level);
                    clearMessages();
                    lvl.action();
                  }}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    activeLevel === lvl.level
                      ? lvl.color + ' shadow-xl scale-105'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-6 h-6 text-white mt-1" />
                    <div className="flex-1">
                      <div className="font-bold text-white text-lg">
                        Level {lvl.level}: {lvl.name}
                      </div>
                      <div className="text-sm text-slate-200 mt-1">
                        {lvl.description}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Message Console */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-slate-700 px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Agent Activity Console</h2>
                <button
                  onClick={clearMessages}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm"
                >
                  Clear
                </button>
              </div>
              
              <div className="h-[600px] overflow-y-auto p-6 space-y-3 font-mono text-sm">
                {messages.length === 0 ? (
                  <div className="text-center text-slate-400 mt-20">
                    <Bot className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Select a level to see the agent in action</p>
                  </div>
                ) : (
                  messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded ${
                        msg.type === 'header'
                          ? 'bg-indigo-900 text-white font-bold text-lg border-l-4 border-indigo-400'
                          : msg.type === 'user'
                          ? 'bg-blue-900 text-blue-100 border-l-4 border-blue-400'
                          : msg.type === 'agent'
                          ? 'bg-slate-700 text-green-300'
                          : msg.type === 'merchant'
                          ? 'bg-purple-900 text-purple-200 border-l-4 border-purple-400'
                          : msg.type === 'success'
                          ? 'bg-green-900 text-green-100 font-semibold'
                          : msg.type === 'warning'
                          ? 'bg-yellow-900 text-yellow-100'
                          : msg.type === 'alert'
                          ? 'bg-red-900 text-red-100 font-bold'
                          : msg.type === 'info'
                          ? 'bg-slate-700 text-slate-200'
                          : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Protocol Explanation */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Core Protocols Explained</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-700 p-4 rounded-lg">
              <h4 className="font-bold text-blue-400 mb-2">MCP (Model Context Protocol)</h4>
              <p className="text-slate-300 text-sm">
                Enables agents to share context, preferences, and state across systems. 
                Allows your personal agent to communicate your needs to merchant systems.
              </p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <h4 className="font-bold text-green-400 mb-2">A2A (Agent-to-Agent)</h4>
              <p className="text-slate-300 text-sm">
                Direct communication protocol between autonomous agents for negotiation, 
                discovery, and coordination without human interfaces.
              </p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <h4 className="font-bold text-purple-400 mb-2">AP2 (Agent Payment Protocol)</h4>
              <p className="text-slate-300 text-sm">
                Secure, autonomous payment settlement allowing agents to complete 
                transactions within pre-authorized boundaries and rules.
              </p>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-4">Strategic Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <div>
              <p className="font-semibold mb-2">🎯 The Delegation Ceiling</p>
              <p className="text-sm text-slate-200">
                Low-regret tasks (groceries, utilities) will be quickly automated. 
                High-identity purchases (luxury, gifts) remain human-controlled.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">🤖 Machine-Readable Brands</p>
              <p className="text-sm text-slate-200">
                If agents can't read your APIs and policies, your brand doesn't exist 
                in the agentic economy. Structured data beats marketing gloss.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">💼 B2B Governance</p>
              <p className="text-sm text-slate-200">
                Enterprise procurement automation ensures strict policy compliance 
                while reducing manual overhead on routine purchases.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">💰 Market Impact</p>
              <p className="text-sm text-slate-200">
                McKinsey predicts $3-5 trillion in global commerce will be mediated 
                by AI agents within the next decade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgenticCommerceDemo;
