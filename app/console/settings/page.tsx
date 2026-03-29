'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { userService } from '@/lib/services/user';
import { ApiError } from '@/lib/api';

export default function SettingsPage() {
  const { user, refreshUser } = useAuth();
  const [name, setName] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [saving, setSaving] = useState(false);
  const [profileMsg, setProfileMsg] = useState('');
  const [profileMsgType, setProfileMsgType] = useState<'success' | 'error'>('success');

  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [changingPwd, setChangingPwd] = useState(false);
  const [pwdMsg, setPwdMsg] = useState('');
  const [pwdMsgType, setPwdMsgType] = useState<'success' | 'error'>('success');

  const handleSaveProfile = async () => {
    setSaving(true);
    setProfileMsg('');
    try {
      await userService.updateProfile({ username: name, email });
      await refreshUser();
      setProfileMsg('保存成功');
      setProfileMsgType('success');
    } catch (e) {
      setProfileMsg(e instanceof ApiError ? e.message : '保存失败');
      setProfileMsgType('error');
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async () => {
    if (newPwd !== confirmPwd) {
      setPwdMsg('两次输入的密码不一致');
      setPwdMsgType('error');
      return;
    }
    if (!currentPwd || !newPwd) {
      setPwdMsg('请填写所有密码字段');
      setPwdMsgType('error');
      return;
    }
    setChangingPwd(true);
    setPwdMsg('');
    try {
      await userService.changePassword({ old_password: currentPwd, new_password: newPwd });
      setPwdMsg('密码修改成功');
      setPwdMsgType('success');
      setCurrentPwd('');
      setNewPwd('');
      setConfirmPwd('');
    } catch (e) {
      setPwdMsg(e instanceof ApiError ? e.message : '修改失败');
      setPwdMsgType('error');
    } finally {
      setChangingPwd(false);
    }
  };

  return (
    <>
      <div className="console-topbar">
        <h1 className="console-page-title">账号设置</h1>
      </div>

      <div className="console-card" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>个人信息</h3>
        <div className="form-group">
          <label htmlFor="settingsName">用户名</label>
          <input id="settingsName" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="settingsEmail">邮箱</label>
          <input id="settingsEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {profileMsg && (
          <p style={{ color: profileMsgType === 'success' ? '#4ade80' : '#ff6b6b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            {profileMsg}
          </p>
        )}
        <button className="btn-primary" style={{ width: 'auto' }} onClick={handleSaveProfile} disabled={saving}>
          {saving ? '保存中...' : '保存'}
        </button>
      </div>

      <div className="console-card" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>修改密码</h3>
        <div className="form-group">
          <label htmlFor="currentPwd">当前密码</label>
          <input id="currentPwd" type="password" placeholder="请输入当前密码" value={currentPwd} onChange={(e) => setCurrentPwd(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="newPwd">新密码</label>
          <input id="newPwd" type="password" placeholder="请输入新密码" value={newPwd} onChange={(e) => setNewPwd(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPwd">确认新密码</label>
          <input id="confirmPwd" type="password" placeholder="请再次输入新密码" value={confirmPwd} onChange={(e) => setConfirmPwd(e.target.value)} />
        </div>
        {pwdMsg && (
          <p style={{ color: pwdMsgType === 'success' ? '#4ade80' : '#ff6b6b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            {pwdMsg}
          </p>
        )}
        <button className="btn-primary" style={{ width: 'auto' }} onClick={handleChangePassword} disabled={changingPwd}>
          {changingPwd ? '修改中...' : '修改密码'}
        </button>
      </div>
    </>
  );
}
