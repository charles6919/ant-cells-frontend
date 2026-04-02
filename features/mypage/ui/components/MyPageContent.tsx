'use client';

import { useState } from 'react';
import { MyPageUser } from '../../domain/model/myPageUser';
import InterestThemeEditorModal from './InterestStockEditorModal';
import DeleteAccountSection from './DeleteAccountSection';
import { myPageStyles as s } from '../myPageStyles';

interface MyPageContentProps {
  user: MyPageUser;
  onReload: () => void;
}

export default function MyPageContent({ user, onReload }: MyPageContentProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className={s.header}>
        <div className={s.avatar}>{user.nickname.charAt(0).toUpperCase()}</div>
        <span className={s.nickname}>{user.nickname}</span>
        <span className={s.email}>{user.email}</span>
      </div>

      <div className={s.section}>
        <div className={s.sectionTitle}>
          <span className={s.sectionLabel}>관심 테마</span>
          <button className={s.editButton} onClick={() => setIsEditing(true)}>
            수정
          </button>
        </div>

        {user.interestThemes.length > 0 ? (
          <div className={s.stockList}>
            {user.interestThemes.map((theme) => (
              <span key={theme.seq} className={s.stockTag}>
                {theme.theme}
              </span>
            ))}
          </div>
        ) : (
          <p className={s.emptyText}>등록된 관심 테마가 없습니다.</p>
        )}
      </div>

      <DeleteAccountSection />

      {isEditing && (
        <InterestThemeEditorModal
          currentThemes={user.interestThemes}
          onClose={() => setIsEditing(false)}
          onSaved={onReload}
        />
      )}
    </>
  );
}
