import React, { useState } from 'react';
import { X, Utensils, MessageSquare, Sparkles, ChefHat } from 'lucide-react';
import { MENU_CATEGORIES, buildWhatsAppLink } from '../data/hotelData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>(MENU_CATEGORIES[0].id);

  if (!isOpen) return null;

  const currentCategory = MENU_CATEGORIES.find((cat) => cat.id === activeTab) || MENU_CATEGORIES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-menu-title"
      >
        {/* Header */}
        <div className="p-6 bg-[#FAF8F5] border-b border-zinc-200 flex items-start justify-between relative shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89762] mb-1">
              <ChefHat className="w-4 h-4" />
              <span>In-House Restaurant & Room Service</span>
            </div>
            <h3 id="modal-menu-title" className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900">
              The Grand Holiday Dining Menu
            </h3>
            <p className="text-xs text-zinc-500 mt-1">
              Freshly prepared with pure local ingredients · Available in restaurant & in-room
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/60 transition-colors"
            aria-label="Close dining menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-2 bg-zinc-100/80 border-b border-zinc-200 overflow-x-auto shrink-0">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap min-h-[40px] ${
                activeTab === cat.id
                  ? 'bg-white text-zinc-900 shadow-xs border border-zinc-200'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-white/50'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Scrollable Dishes List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="divide-y divide-zinc-100">
            {currentCategory.items.map((dish) => (
              <div key={dish.name} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-serif font-bold text-zinc-900 group-hover:text-[#B89762] transition-colors">
                      {dish.name}
                    </h4>
                    {dish.isPopular && (
                      <span className="text-[10px] font-bold text-[#B89762] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E4E4E7]">
                        House Special
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <span className="text-sm sm:text-base font-bold text-zinc-900 tabular-nums">
                    PKR {dish.pricePKR.toLocaleString()}
                  </span>

                  <a
                    href={buildWhatsAppLink({
                      customMessage: `Hello Grand Holiday Restaurant, I would like to order "${dish.name}" (PKR ${dish.pricePKR.toLocaleString()}) for room delivery / table dining.`
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#B89762] hover:text-white bg-[#FAF8F5] hover:bg-[#B89762] border border-[#E4E4E7] rounded-lg transition-colors whitespace-nowrap min-h-[36px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FAF8F5] border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 shrink-0">
          <p>
            * All dishes freshly cooked upon order. Kitchen operates 24/7 for resident hotel guests.
          </p>
          <a
            href={buildWhatsAppLink({
              customMessage: "Hello, I would like to inquire about full catering or group family dinner arrangements at Grand Holiday Hotel."
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#B89762] hover:text-[#A3834F] underline underline-offset-2"
          >
            Custom Family Feast Inquiry →
          </a>
        </div>
      </div>
    </div>
  );
};
