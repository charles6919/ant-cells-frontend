'use client';

import { useState } from 'react';
import { myPageApi } from '../../infrastructure/api/myPageApi';
import { authAtom } from '@/features/auth/application/atoms/authAtom';
import { authStore } from '@/features/auth/application/atoms/authStore';
import { myPageStyles as s } from '../myPageStyles';

export default function DeleteAccountSection() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await myPageApi.deleteAccount();
      authStore.set(authAtom, { status: 'UNAUTHENTICATED' });
      window.location.replace('/login');
    } catch {
      setIsDeleting(false);
      setShowConfirm(false);
    }
  };

  return (
    <>
      <div className={s.dangerSection}>
        <span className={s.dangerLabel}>회원 탈퇴</span>
        <p className={s.dangerDescription}>
          탈퇴 시 모든 데이터가 삭제되며 복구할 수 없습니다.
        </p>
        <button className={s.deleteButton} onClick={() => setShowConfirm(true)}>
          회원 탈퇴
        </button>
      </div>

      {showConfirm && (
        <div className={s.confirmOverlay} onClick={() => setShowConfirm(false)}>
          <div className={s.confirmPanel} onClick={(e) => e.stopPropagation()}>
            <h2 className={s.confirmTitle}>정말 탈퇴하시겠습니까?</h2>
            <p className={s.confirmMessage}>
              탈퇴하면 계정과 관련된 모든 데이터가 영구 삭제됩니다.
            </p>
            <div className={s.confirmButtons}>
              <button
                className={s.confirmCancel}
                onClick={() => setShowConfirm(false)}
                disabled={isDeleting}
              >
                취소
              </button>
              <button
                className={s.confirmDelete}
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? '탈퇴 처리 중...' : '탈퇴하기'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
