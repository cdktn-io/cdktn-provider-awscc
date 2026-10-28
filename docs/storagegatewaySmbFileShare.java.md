# `storagegatewaySmbFileShare` Submodule <a name="`storagegatewaySmbFileShare` Submodule" id="@cdktn/provider-awscc.storagegatewaySmbFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewaySmbFileShare <a name="StoragegatewaySmbFileShare" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share awscc_storagegateway_smb_file_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_smb_file_share.StoragegatewaySmbFileShare;

StoragegatewaySmbFileShare.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gatewayArn(java.lang.String)
    .locationArn(java.lang.String)
    .role(java.lang.String)
//  .accessBasedEnumeration(java.lang.Boolean|IResolvable)
//  .adminUserList(java.util.List<java.lang.String>)
//  .auditDestinationArn(java.lang.String)
//  .authentication(java.lang.String)
//  .bucketRegion(java.lang.String)
//  .cacheAttributes(StoragegatewaySmbFileShareCacheAttributes)
//  .caseSensitivity(java.lang.String)
//  .defaultStorageClass(java.lang.String)
//  .encryptionType(java.lang.String)
//  .fileShareName(java.lang.String)
//  .guessMimeTypeEnabled(java.lang.Boolean|IResolvable)
//  .invalidUserList(java.util.List<java.lang.String>)
//  .kmsEncrypted(java.lang.Boolean|IResolvable)
//  .kmsKey(java.lang.String)
//  .notificationPolicy(java.lang.String)
//  .objectAcl(java.lang.String)
//  .oplocksEnabled(java.lang.Boolean|IResolvable)
//  .readOnly(java.lang.Boolean|IResolvable)
//  .requesterPays(java.lang.Boolean|IResolvable)
//  .smbaclEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<StoragegatewaySmbFileShareTags>)
//  .validUserList(java.util.List<java.lang.String>)
//  .vpcEndpointDnsName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | The ARN of the S3 File Gateway that hosts the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.locationArn">locationArn</a></code> | <code>java.lang.String</code> | The ARN of the S3 bucket, or bucket prefix, the share exposes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | The ARN of the IAM role the gateway assumes when it accesses the S3 location. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.accessBasedEnumeration">accessBasedEnumeration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether clients see only the files and folders they may access. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.adminUserList">adminUserList</a></code> | <code>java.util.List<java.lang.String></code> | Users and groups granted administrative privileges on the SMB share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | The ARN of the CloudWatch log group that receives the share's audit logs. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.authentication">authentication</a></code> | <code>java.lang.String</code> | The authentication the SMB share uses. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | Refresh cache information for the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.caseSensitivity">caseSensitivity</a></code> | <code>java.lang.String</code> | Whether the SMB share is case sensitive or defers to the client. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.defaultStorageClass">defaultStorageClass</a></code> | <code>java.lang.String</code> | The S3 storage class for new objects. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | The server-side encryption the gateway applies to objects it writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.fileShareName">fileShareName</a></code> | <code>java.lang.String</code> | The name of the file share, which defaults to the bucket name when omitted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the gateway infers the MIME type of uploaded objects from their extension. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.invalidUserList">invalidUserList</a></code> | <code>java.util.List<java.lang.String></code> | Users and groups denied access to the SMB share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key used for encryption, when EncryptionType selects KMS. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.notificationPolicy">notificationPolicy</a></code> | <code>java.lang.String</code> | The upload-notification settling period, as a JSON document. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.objectAcl">objectAcl</a></code> | <code>java.lang.String</code> | The canned S3 ACL applied to objects the gateway writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.oplocksEnabled">oplocksEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the SMB share grants opportunistic locks. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether clients may write to the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the bucket is a Requester Pays bucket. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.smbaclEnabled">smbaclEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the SMB share uses Windows ACLs rather than POSIX permissions. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags">StoragegatewaySmbFileShareTags</a>></code> | Tags assigned to the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.validUserList">validUserList</a></code> | <code>java.util.List<java.lang.String></code> | Users and groups permitted to access the SMB share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>java.lang.String</code> | The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.gatewayArn"></a>

- *Type:* java.lang.String

The ARN of the S3 File Gateway that hosts the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.locationArn"></a>

- *Type:* java.lang.String

The ARN of the S3 bucket, or bucket prefix, the share exposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.role"></a>

- *Type:* java.lang.String

The ARN of the IAM role the gateway assumes when it accesses the S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#role StoragegatewaySmbFileShare#role}

---

##### `accessBasedEnumeration`<sup>Optional</sup> <a name="accessBasedEnumeration" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.accessBasedEnumeration"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether clients see only the files and folders they may access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}

---

##### `adminUserList`<sup>Optional</sup> <a name="adminUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.adminUserList"></a>

- *Type:* java.util.List<java.lang.String>

Users and groups granted administrative privileges on the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="auditDestinationArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.auditDestinationArn"></a>

- *Type:* java.lang.String

The ARN of the CloudWatch log group that receives the share's audit logs.

Removing this property from a template detaches audit logging: the update sends the empty string, which the service treats as the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.authentication"></a>

- *Type:* java.lang.String

The authentication the SMB share uses.

The service accepts ActiveDirectory and GuestAccess; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.bucketRegion"></a>

- *Type:* java.lang.String

The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}

---

##### `cacheAttributes`<sup>Optional</sup> <a name="cacheAttributes" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.cacheAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

Refresh cache information for the file share.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#cache_attributes StoragegatewaySmbFileShare#cache_attributes}

---

##### `caseSensitivity`<sup>Optional</sup> <a name="caseSensitivity" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.caseSensitivity"></a>

- *Type:* java.lang.String

Whether the SMB share is case sensitive or defers to the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="defaultStorageClass" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.defaultStorageClass"></a>

- *Type:* java.lang.String

The S3 storage class for new objects.

The service accepts S3_STANDARD, S3_INTELLIGENT_TIERING, S3_STANDARD_IA and S3_ONEZONE_IA; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.encryptionType"></a>

- *Type:* java.lang.String

The server-side encryption the gateway applies to objects it writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#encryption_type StoragegatewaySmbFileShare#encryption_type}

---

##### `fileShareName`<sup>Optional</sup> <a name="fileShareName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.fileShareName"></a>

- *Type:* java.lang.String

The name of the file share, which defaults to the bucket name when omitted.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="guessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.guessMimeTypeEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the gateway infers the MIME type of uploaded objects from their extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}

---

##### `invalidUserList`<sup>Optional</sup> <a name="invalidUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.invalidUserList"></a>

- *Type:* java.util.List<java.lang.String>

Users and groups denied access to the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.kmsEncrypted"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

The KMS key used for encryption, when EncryptionType selects KMS.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#kms_key StoragegatewaySmbFileShare#kms_key}

---

##### `notificationPolicy`<sup>Optional</sup> <a name="notificationPolicy" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.notificationPolicy"></a>

- *Type:* java.lang.String

The upload-notification settling period, as a JSON document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}

---

##### `objectAcl`<sup>Optional</sup> <a name="objectAcl" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.objectAcl"></a>

- *Type:* java.lang.String

The canned S3 ACL applied to objects the gateway writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}

---

##### `oplocksEnabled`<sup>Optional</sup> <a name="oplocksEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.oplocksEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the SMB share grants opportunistic locks.

Removing this property from a template leaves the live value unchanged rather than restoring the created default, because that default depends on the gateway's software version -- opportunistic locking is enabled by default only on appliances at 1.19.0.0 or above -- and the version is not part of this resource. Set the value explicitly rather than relying on removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.readOnly"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether clients may write to the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.requesterPays"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the bucket is a Requester Pays bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}

---

##### `smbaclEnabled`<sup>Optional</sup> <a name="smbaclEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.smbaclEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the SMB share uses Windows ACLs rather than POSIX permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#smbacl_enabled StoragegatewaySmbFileShare#smbacl_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags">StoragegatewaySmbFileShareTags</a>>

Tags assigned to the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}

---

##### `validUserList`<sup>Optional</sup> <a name="validUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.validUserList"></a>

- *Type:* java.util.List<java.lang.String>

Users and groups permitted to access the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}

---

##### `vpcEndpointDnsName`<sup>Optional</sup> <a name="vpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.vpcEndpointDnsName"></a>

- *Type:* java.lang.String

The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes">putCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAccessBasedEnumeration">resetAccessBasedEnumeration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAdminUserList">resetAdminUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuditDestinationArn">resetAuditDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetBucketRegion">resetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCacheAttributes">resetCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCaseSensitivity">resetCaseSensitivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetDefaultStorageClass">resetDefaultStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetFileShareName">resetFileShareName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetGuessMimeTypeEnabled">resetGuessMimeTypeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetInvalidUserList">resetInvalidUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsEncrypted">resetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetNotificationPolicy">resetNotificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetObjectAcl">resetObjectAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOplocksEnabled">resetOplocksEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetRequesterPays">resetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetSmbaclEnabled">resetSmbaclEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetValidUserList">resetValidUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetVpcEndpointDnsName">resetVpcEndpointDnsName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCacheAttributes` <a name="putCacheAttributes" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes"></a>

```java
public void putCacheAttributes(StoragegatewaySmbFileShareCacheAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<StoragegatewaySmbFileShareTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags">StoragegatewaySmbFileShareTags</a>>

---

##### `resetAccessBasedEnumeration` <a name="resetAccessBasedEnumeration" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAccessBasedEnumeration"></a>

```java
public void resetAccessBasedEnumeration()
```

##### `resetAdminUserList` <a name="resetAdminUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAdminUserList"></a>

```java
public void resetAdminUserList()
```

##### `resetAuditDestinationArn` <a name="resetAuditDestinationArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuditDestinationArn"></a>

```java
public void resetAuditDestinationArn()
```

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuthentication"></a>

```java
public void resetAuthentication()
```

##### `resetBucketRegion` <a name="resetBucketRegion" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetBucketRegion"></a>

```java
public void resetBucketRegion()
```

##### `resetCacheAttributes` <a name="resetCacheAttributes" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCacheAttributes"></a>

```java
public void resetCacheAttributes()
```

##### `resetCaseSensitivity` <a name="resetCaseSensitivity" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCaseSensitivity"></a>

```java
public void resetCaseSensitivity()
```

##### `resetDefaultStorageClass` <a name="resetDefaultStorageClass" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetDefaultStorageClass"></a>

```java
public void resetDefaultStorageClass()
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetFileShareName` <a name="resetFileShareName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetFileShareName"></a>

```java
public void resetFileShareName()
```

##### `resetGuessMimeTypeEnabled` <a name="resetGuessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetGuessMimeTypeEnabled"></a>

```java
public void resetGuessMimeTypeEnabled()
```

##### `resetInvalidUserList` <a name="resetInvalidUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetInvalidUserList"></a>

```java
public void resetInvalidUserList()
```

##### `resetKmsEncrypted` <a name="resetKmsEncrypted" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsEncrypted"></a>

```java
public void resetKmsEncrypted()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetNotificationPolicy` <a name="resetNotificationPolicy" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetNotificationPolicy"></a>

```java
public void resetNotificationPolicy()
```

##### `resetObjectAcl` <a name="resetObjectAcl" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetObjectAcl"></a>

```java
public void resetObjectAcl()
```

##### `resetOplocksEnabled` <a name="resetOplocksEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOplocksEnabled"></a>

```java
public void resetOplocksEnabled()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetRequesterPays` <a name="resetRequesterPays" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetRequesterPays"></a>

```java
public void resetRequesterPays()
```

##### `resetSmbaclEnabled` <a name="resetSmbaclEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetSmbaclEnabled"></a>

```java
public void resetSmbaclEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTags"></a>

```java
public void resetTags()
```

##### `resetValidUserList` <a name="resetValidUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetValidUserList"></a>

```java
public void resetValidUserList()
```

##### `resetVpcEndpointDnsName` <a name="resetVpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetVpcEndpointDnsName"></a>

```java
public void resetVpcEndpointDnsName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StoragegatewaySmbFileShare resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct"></a>

```java
import io.cdktn.providers.awscc.storagegateway_smb_file_share.StoragegatewaySmbFileShare;

StoragegatewaySmbFileShare.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.storagegateway_smb_file_share.StoragegatewaySmbFileShare;

StoragegatewaySmbFileShare.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.storagegateway_smb_file_share.StoragegatewaySmbFileShare;

StoragegatewaySmbFileShare.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.storagegateway_smb_file_share.StoragegatewaySmbFileShare;

StoragegatewaySmbFileShare.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StoragegatewaySmbFileShare.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StoragegatewaySmbFileShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StoragegatewaySmbFileShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StoragegatewaySmbFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewaySmbFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareArn">fileShareArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareId">fileShareId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareStatus">fileShareStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList">StoragegatewaySmbFileShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput">accessBasedEnumerationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput">adminUserListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput">auditDestinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput">authenticationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput">bucketRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput">cacheAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput">caseSensitivityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput">defaultStorageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput">fileShareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput">gatewayArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput">guessMimeTypeEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput">invalidUserListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput">kmsEncryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput">locationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput">notificationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput">objectAclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput">oplocksEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput">requesterPaysInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbaclEnabledInput">smbaclEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags">StoragegatewaySmbFileShareTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput">validUserListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput">vpcEndpointDnsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration">accessBasedEnumeration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList">adminUserList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication">authentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity">caseSensitivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass">defaultStorageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName">fileShareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList">invalidUserList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy">notificationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl">objectAcl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled">oplocksEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbaclEnabled">smbaclEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList">validUserList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cacheAttributes`<sup>Required</sup> <a name="cacheAttributes" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes"></a>

```java
public StoragegatewaySmbFileShareCacheAttributesOutputReference getCacheAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a>

---

##### `fileShareArn`<sup>Required</sup> <a name="fileShareArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareArn"></a>

```java
public java.lang.String getFileShareArn();
```

- *Type:* java.lang.String

---

##### `fileShareId`<sup>Required</sup> <a name="fileShareId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareId"></a>

```java
public java.lang.String getFileShareId();
```

- *Type:* java.lang.String

---

##### `fileShareStatus`<sup>Required</sup> <a name="fileShareStatus" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareStatus"></a>

```java
public java.lang.String getFileShareStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags"></a>

```java
public StoragegatewaySmbFileShareTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList">StoragegatewaySmbFileShareTagsList</a>

---

##### `accessBasedEnumerationInput`<sup>Optional</sup> <a name="accessBasedEnumerationInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput"></a>

```java
public java.lang.Boolean|IResolvable getAccessBasedEnumerationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `adminUserListInput`<sup>Optional</sup> <a name="adminUserListInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput"></a>

```java
public java.util.List<java.lang.String> getAdminUserListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditDestinationArnInput`<sup>Optional</sup> <a name="auditDestinationArnInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput"></a>

```java
public java.lang.String getAuditDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput"></a>

```java
public java.lang.String getAuthenticationInput();
```

- *Type:* java.lang.String

---

##### `bucketRegionInput`<sup>Optional</sup> <a name="bucketRegionInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput"></a>

```java
public java.lang.String getBucketRegionInput();
```

- *Type:* java.lang.String

---

##### `cacheAttributesInput`<sup>Optional</sup> <a name="cacheAttributesInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput"></a>

```java
public IResolvable|StoragegatewaySmbFileShareCacheAttributes getCacheAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---

##### `caseSensitivityInput`<sup>Optional</sup> <a name="caseSensitivityInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput"></a>

```java
public java.lang.String getCaseSensitivityInput();
```

- *Type:* java.lang.String

---

##### `defaultStorageClassInput`<sup>Optional</sup> <a name="defaultStorageClassInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput"></a>

```java
public java.lang.String getDefaultStorageClassInput();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `fileShareNameInput`<sup>Optional</sup> <a name="fileShareNameInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput"></a>

```java
public java.lang.String getFileShareNameInput();
```

- *Type:* java.lang.String

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput"></a>

```java
public java.lang.String getGatewayArnInput();
```

- *Type:* java.lang.String

---

##### `guessMimeTypeEnabledInput`<sup>Optional</sup> <a name="guessMimeTypeEnabledInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getGuessMimeTypeEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `invalidUserListInput`<sup>Optional</sup> <a name="invalidUserListInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput"></a>

```java
public java.util.List<java.lang.String> getInvalidUserListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsEncryptedInput`<sup>Optional</sup> <a name="kmsEncryptedInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getKmsEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `locationArnInput`<sup>Optional</sup> <a name="locationArnInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput"></a>

```java
public java.lang.String getLocationArnInput();
```

- *Type:* java.lang.String

---

##### `notificationPolicyInput`<sup>Optional</sup> <a name="notificationPolicyInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput"></a>

```java
public java.lang.String getNotificationPolicyInput();
```

- *Type:* java.lang.String

---

##### `objectAclInput`<sup>Optional</sup> <a name="objectAclInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput"></a>

```java
public java.lang.String getObjectAclInput();
```

- *Type:* java.lang.String

---

##### `oplocksEnabledInput`<sup>Optional</sup> <a name="oplocksEnabledInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getOplocksEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getReadOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requesterPaysInput`<sup>Optional</sup> <a name="requesterPaysInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput"></a>

```java
public java.lang.Boolean|IResolvable getRequesterPaysInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `smbaclEnabledInput`<sup>Optional</sup> <a name="smbaclEnabledInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbaclEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSmbaclEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput"></a>

```java
public IResolvable|java.util.List<StoragegatewaySmbFileShareTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags">StoragegatewaySmbFileShareTags</a>>

---

##### `validUserListInput`<sup>Optional</sup> <a name="validUserListInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput"></a>

```java
public java.util.List<java.lang.String> getValidUserListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcEndpointDnsNameInput`<sup>Optional</sup> <a name="vpcEndpointDnsNameInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput"></a>

```java
public java.lang.String getVpcEndpointDnsNameInput();
```

- *Type:* java.lang.String

---

##### `accessBasedEnumeration`<sup>Required</sup> <a name="accessBasedEnumeration" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration"></a>

```java
public java.lang.Boolean|IResolvable getAccessBasedEnumeration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `adminUserList`<sup>Required</sup> <a name="adminUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList"></a>

```java
public java.util.List<java.lang.String> getAdminUserList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditDestinationArn`<sup>Required</sup> <a name="auditDestinationArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn"></a>

```java
public java.lang.String getAuditDestinationArn();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication"></a>

```java
public java.lang.String getAuthentication();
```

- *Type:* java.lang.String

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion"></a>

```java
public java.lang.String getBucketRegion();
```

- *Type:* java.lang.String

---

##### `caseSensitivity`<sup>Required</sup> <a name="caseSensitivity" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity"></a>

```java
public java.lang.String getCaseSensitivity();
```

- *Type:* java.lang.String

---

##### `defaultStorageClass`<sup>Required</sup> <a name="defaultStorageClass" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass"></a>

```java
public java.lang.String getDefaultStorageClass();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `fileShareName`<sup>Required</sup> <a name="fileShareName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName"></a>

```java
public java.lang.String getFileShareName();
```

- *Type:* java.lang.String

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

---

##### `guessMimeTypeEnabled`<sup>Required</sup> <a name="guessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGuessMimeTypeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `invalidUserList`<sup>Required</sup> <a name="invalidUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList"></a>

```java
public java.util.List<java.lang.String> getInvalidUserList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getKmsEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

---

##### `notificationPolicy`<sup>Required</sup> <a name="notificationPolicy" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy"></a>

```java
public java.lang.String getNotificationPolicy();
```

- *Type:* java.lang.String

---

##### `objectAcl`<sup>Required</sup> <a name="objectAcl" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl"></a>

```java
public java.lang.String getObjectAcl();
```

- *Type:* java.lang.String

---

##### `oplocksEnabled`<sup>Required</sup> <a name="oplocksEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled"></a>

```java
public java.lang.Boolean|IResolvable getOplocksEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requesterPays`<sup>Required</sup> <a name="requesterPays" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays"></a>

```java
public java.lang.Boolean|IResolvable getRequesterPays();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `smbaclEnabled`<sup>Required</sup> <a name="smbaclEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbaclEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSmbaclEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `validUserList`<sup>Required</sup> <a name="validUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList"></a>

```java
public java.util.List<java.lang.String> getValidUserList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcEndpointDnsName`<sup>Required</sup> <a name="vpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName"></a>

```java
public java.lang.String getVpcEndpointDnsName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewaySmbFileShareCacheAttributes <a name="StoragegatewaySmbFileShareCacheAttributes" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_smb_file_share.StoragegatewaySmbFileShareCacheAttributes;

StoragegatewaySmbFileShareCacheAttributes.builder()
//  .cacheStaleTimeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | How long the directory contents cached by the gateway are considered valid. |

---

##### `cacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSeconds();
```

- *Type:* java.lang.Number

How long the directory contents cached by the gateway are considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}

---

### StoragegatewaySmbFileShareConfig <a name="StoragegatewaySmbFileShareConfig" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_smb_file_share.StoragegatewaySmbFileShareConfig;

StoragegatewaySmbFileShareConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gatewayArn(java.lang.String)
    .locationArn(java.lang.String)
    .role(java.lang.String)
//  .accessBasedEnumeration(java.lang.Boolean|IResolvable)
//  .adminUserList(java.util.List<java.lang.String>)
//  .auditDestinationArn(java.lang.String)
//  .authentication(java.lang.String)
//  .bucketRegion(java.lang.String)
//  .cacheAttributes(StoragegatewaySmbFileShareCacheAttributes)
//  .caseSensitivity(java.lang.String)
//  .defaultStorageClass(java.lang.String)
//  .encryptionType(java.lang.String)
//  .fileShareName(java.lang.String)
//  .guessMimeTypeEnabled(java.lang.Boolean|IResolvable)
//  .invalidUserList(java.util.List<java.lang.String>)
//  .kmsEncrypted(java.lang.Boolean|IResolvable)
//  .kmsKey(java.lang.String)
//  .notificationPolicy(java.lang.String)
//  .objectAcl(java.lang.String)
//  .oplocksEnabled(java.lang.Boolean|IResolvable)
//  .readOnly(java.lang.Boolean|IResolvable)
//  .requesterPays(java.lang.Boolean|IResolvable)
//  .smbaclEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<StoragegatewaySmbFileShareTags>)
//  .validUserList(java.util.List<java.lang.String>)
//  .vpcEndpointDnsName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | The ARN of the S3 File Gateway that hosts the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | The ARN of the S3 bucket, or bucket prefix, the share exposes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.role">role</a></code> | <code>java.lang.String</code> | The ARN of the IAM role the gateway assumes when it accesses the S3 location. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration">accessBasedEnumeration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether clients see only the files and folders they may access. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList">adminUserList</a></code> | <code>java.util.List<java.lang.String></code> | Users and groups granted administrative privileges on the SMB share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | The ARN of the CloudWatch log group that receives the share's audit logs. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication">authentication</a></code> | <code>java.lang.String</code> | The authentication the SMB share uses. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | Refresh cache information for the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity">caseSensitivity</a></code> | <code>java.lang.String</code> | Whether the SMB share is case sensitive or defers to the client. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass">defaultStorageClass</a></code> | <code>java.lang.String</code> | The S3 storage class for new objects. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | The server-side encryption the gateway applies to objects it writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName">fileShareName</a></code> | <code>java.lang.String</code> | The name of the file share, which defaults to the bucket name when omitted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the gateway infers the MIME type of uploaded objects from their extension. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList">invalidUserList</a></code> | <code>java.util.List<java.lang.String></code> | Users and groups denied access to the SMB share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key used for encryption, when EncryptionType selects KMS. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy">notificationPolicy</a></code> | <code>java.lang.String</code> | The upload-notification settling period, as a JSON document. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl">objectAcl</a></code> | <code>java.lang.String</code> | The canned S3 ACL applied to objects the gateway writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled">oplocksEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the SMB share grants opportunistic locks. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether clients may write to the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the bucket is a Requester Pays bucket. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbaclEnabled">smbaclEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the SMB share uses Windows ACLs rather than POSIX permissions. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags">StoragegatewaySmbFileShareTags</a>></code> | Tags assigned to the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList">validUserList</a></code> | <code>java.util.List<java.lang.String></code> | Users and groups permitted to access the SMB share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>java.lang.String</code> | The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

The ARN of the S3 File Gateway that hosts the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

The ARN of the S3 bucket, or bucket prefix, the share exposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The ARN of the IAM role the gateway assumes when it accesses the S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#role StoragegatewaySmbFileShare#role}

---

##### `accessBasedEnumeration`<sup>Optional</sup> <a name="accessBasedEnumeration" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration"></a>

```java
public java.lang.Boolean|IResolvable getAccessBasedEnumeration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether clients see only the files and folders they may access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}

---

##### `adminUserList`<sup>Optional</sup> <a name="adminUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList"></a>

```java
public java.util.List<java.lang.String> getAdminUserList();
```

- *Type:* java.util.List<java.lang.String>

Users and groups granted administrative privileges on the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="auditDestinationArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn"></a>

```java
public java.lang.String getAuditDestinationArn();
```

- *Type:* java.lang.String

The ARN of the CloudWatch log group that receives the share's audit logs.

Removing this property from a template detaches audit logging: the update sends the empty string, which the service treats as the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication"></a>

```java
public java.lang.String getAuthentication();
```

- *Type:* java.lang.String

The authentication the SMB share uses.

The service accepts ActiveDirectory and GuestAccess; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion"></a>

```java
public java.lang.String getBucketRegion();
```

- *Type:* java.lang.String

The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}

---

##### `cacheAttributes`<sup>Optional</sup> <a name="cacheAttributes" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes"></a>

```java
public StoragegatewaySmbFileShareCacheAttributes getCacheAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

Refresh cache information for the file share.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#cache_attributes StoragegatewaySmbFileShare#cache_attributes}

---

##### `caseSensitivity`<sup>Optional</sup> <a name="caseSensitivity" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity"></a>

```java
public java.lang.String getCaseSensitivity();
```

- *Type:* java.lang.String

Whether the SMB share is case sensitive or defers to the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="defaultStorageClass" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass"></a>

```java
public java.lang.String getDefaultStorageClass();
```

- *Type:* java.lang.String

The S3 storage class for new objects.

The service accepts S3_STANDARD, S3_INTELLIGENT_TIERING, S3_STANDARD_IA and S3_ONEZONE_IA; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

The server-side encryption the gateway applies to objects it writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#encryption_type StoragegatewaySmbFileShare#encryption_type}

---

##### `fileShareName`<sup>Optional</sup> <a name="fileShareName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName"></a>

```java
public java.lang.String getFileShareName();
```

- *Type:* java.lang.String

The name of the file share, which defaults to the bucket name when omitted.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="guessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGuessMimeTypeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the gateway infers the MIME type of uploaded objects from their extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}

---

##### `invalidUserList`<sup>Optional</sup> <a name="invalidUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList"></a>

```java
public java.util.List<java.lang.String> getInvalidUserList();
```

- *Type:* java.util.List<java.lang.String>

Users and groups denied access to the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getKmsEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The KMS key used for encryption, when EncryptionType selects KMS.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#kms_key StoragegatewaySmbFileShare#kms_key}

---

##### `notificationPolicy`<sup>Optional</sup> <a name="notificationPolicy" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy"></a>

```java
public java.lang.String getNotificationPolicy();
```

- *Type:* java.lang.String

The upload-notification settling period, as a JSON document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}

---

##### `objectAcl`<sup>Optional</sup> <a name="objectAcl" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl"></a>

```java
public java.lang.String getObjectAcl();
```

- *Type:* java.lang.String

The canned S3 ACL applied to objects the gateway writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}

---

##### `oplocksEnabled`<sup>Optional</sup> <a name="oplocksEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled"></a>

```java
public java.lang.Boolean|IResolvable getOplocksEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the SMB share grants opportunistic locks.

Removing this property from a template leaves the live value unchanged rather than restoring the created default, because that default depends on the gateway's software version -- opportunistic locking is enabled by default only on appliances at 1.19.0.0 or above -- and the version is not part of this resource. Set the value explicitly rather than relying on removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether clients may write to the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays"></a>

```java
public java.lang.Boolean|IResolvable getRequesterPays();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the bucket is a Requester Pays bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}

---

##### `smbaclEnabled`<sup>Optional</sup> <a name="smbaclEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbaclEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSmbaclEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the SMB share uses Windows ACLs rather than POSIX permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#smbacl_enabled StoragegatewaySmbFileShare#smbacl_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags"></a>

```java
public IResolvable|java.util.List<StoragegatewaySmbFileShareTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags">StoragegatewaySmbFileShareTags</a>>

Tags assigned to the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}

---

##### `validUserList`<sup>Optional</sup> <a name="validUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList"></a>

```java
public java.util.List<java.lang.String> getValidUserList();
```

- *Type:* java.util.List<java.lang.String>

Users and groups permitted to access the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}

---

##### `vpcEndpointDnsName`<sup>Optional</sup> <a name="vpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName"></a>

```java
public java.lang.String getVpcEndpointDnsName();
```

- *Type:* java.lang.String

The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}

---

### StoragegatewaySmbFileShareTags <a name="StoragegatewaySmbFileShareTags" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_smb_file_share.StoragegatewaySmbFileShareTags;

StoragegatewaySmbFileShareTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#key StoragegatewaySmbFileShare#key}. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#value StoragegatewaySmbFileShare#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#key StoragegatewaySmbFileShare#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#value StoragegatewaySmbFileShare#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewaySmbFileShareCacheAttributesOutputReference <a name="StoragegatewaySmbFileShareCacheAttributesOutputReference" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_smb_file_share.StoragegatewaySmbFileShareCacheAttributesOutputReference;

new StoragegatewaySmbFileShareCacheAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">resetCacheStaleTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheStaleTimeoutInSeconds` <a name="resetCacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```java
public void resetCacheStaleTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">cacheStaleTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheStaleTimeoutInSecondsInput`<sup>Optional</sup> <a name="cacheStaleTimeoutInSecondsInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `cacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|StoragegatewaySmbFileShareCacheAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---


### StoragegatewaySmbFileShareTagsList <a name="StoragegatewaySmbFileShareTagsList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_smb_file_share.StoragegatewaySmbFileShareTagsList;

new StoragegatewaySmbFileShareTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.get"></a>

```java
public StoragegatewaySmbFileShareTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags">StoragegatewaySmbFileShareTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StoragegatewaySmbFileShareTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags">StoragegatewaySmbFileShareTags</a>>

---


### StoragegatewaySmbFileShareTagsOutputReference <a name="StoragegatewaySmbFileShareTagsOutputReference" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_smb_file_share.StoragegatewaySmbFileShareTagsOutputReference;

new StoragegatewaySmbFileShareTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags">StoragegatewaySmbFileShareTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|StoragegatewaySmbFileShareTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags">StoragegatewaySmbFileShareTags</a>

---



