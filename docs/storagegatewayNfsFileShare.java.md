# `storagegatewayNfsFileShare` Submodule <a name="`storagegatewayNfsFileShare` Submodule" id="@cdktn/provider-awscc.storagegatewayNfsFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayNfsFileShare <a name="StoragegatewayNfsFileShare" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share awscc_storagegateway_nfs_file_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_nfs_file_share.StoragegatewayNfsFileShare;

StoragegatewayNfsFileShare.Builder.create(Construct scope, java.lang.String id)
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
//  .auditDestinationArn(java.lang.String)
//  .bucketRegion(java.lang.String)
//  .cacheAttributes(StoragegatewayNfsFileShareCacheAttributes)
//  .clientList(java.util.List<java.lang.String>)
//  .defaultStorageClass(java.lang.String)
//  .encryptionType(java.lang.String)
//  .fileShareName(java.lang.String)
//  .guessMimeTypeEnabled(java.lang.Boolean|IResolvable)
//  .kmsEncrypted(java.lang.Boolean|IResolvable)
//  .kmsKey(java.lang.String)
//  .nfsFileShareDefaults(StoragegatewayNfsFileShareNfsFileShareDefaults)
//  .notificationPolicy(java.lang.String)
//  .objectAcl(java.lang.String)
//  .readOnly(java.lang.Boolean|IResolvable)
//  .requesterPays(java.lang.Boolean|IResolvable)
//  .squash(java.lang.String)
//  .tags(IResolvable|java.util.List<StoragegatewayNfsFileShareTags>)
//  .vpcEndpointDnsName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | The ARN of the S3 File Gateway that hosts the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.locationArn">locationArn</a></code> | <code>java.lang.String</code> | The ARN of the S3 bucket, or bucket prefix, the share exposes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | The ARN of the IAM role the gateway assumes when it accesses the S3 location. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | The ARN of the CloudWatch log group that receives the share's audit logs. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | Refresh cache information for the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.clientList">clientList</a></code> | <code>java.util.List<java.lang.String></code> | The IPv4 or IPv6 addresses and CIDR blocks permitted to mount the NFS share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.defaultStorageClass">defaultStorageClass</a></code> | <code>java.lang.String</code> | The S3 storage class for new objects. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | The server-side encryption the gateway applies to objects it writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.fileShareName">fileShareName</a></code> | <code>java.lang.String</code> | The name of the file share, which defaults to the bucket name when omitted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the gateway infers the MIME type of uploaded objects from their extension. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key used for encryption, when EncryptionType selects KMS. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.nfsFileShareDefaults">nfsFileShareDefaults</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | Default values for the file and directory permissions of an NFS share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.notificationPolicy">notificationPolicy</a></code> | <code>java.lang.String</code> | The upload-notification settling period, as a JSON document. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.objectAcl">objectAcl</a></code> | <code>java.lang.String</code> | The canned S3 ACL applied to objects the gateway writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether clients may write to the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the bucket is a Requester Pays bucket. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.squash">squash</a></code> | <code>java.lang.String</code> | How the NFS share maps client user IDs. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>></code> | Tags assigned to the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>java.lang.String</code> | The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.gatewayArn"></a>

- *Type:* java.lang.String

The ARN of the S3 File Gateway that hosts the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#gateway_arn StoragegatewayNfsFileShare#gateway_arn}

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.locationArn"></a>

- *Type:* java.lang.String

The ARN of the S3 bucket, or bucket prefix, the share exposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#location_arn StoragegatewayNfsFileShare#location_arn}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.role"></a>

- *Type:* java.lang.String

The ARN of the IAM role the gateway assumes when it accesses the S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#role StoragegatewayNfsFileShare#role}

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="auditDestinationArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.auditDestinationArn"></a>

- *Type:* java.lang.String

The ARN of the CloudWatch log group that receives the share's audit logs.

Removing this property from a template detaches audit logging: the update sends the empty string, which the service treats as the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.bucketRegion"></a>

- *Type:* java.lang.String

The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#bucket_region StoragegatewayNfsFileShare#bucket_region}

---

##### `cacheAttributes`<sup>Optional</sup> <a name="cacheAttributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.cacheAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

Refresh cache information for the file share.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#cache_attributes StoragegatewayNfsFileShare#cache_attributes}

---

##### `clientList`<sup>Optional</sup> <a name="clientList" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.clientList"></a>

- *Type:* java.util.List<java.lang.String>

The IPv4 or IPv6 addresses and CIDR blocks permitted to mount the NFS share.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#client_list StoragegatewayNfsFileShare#client_list}

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="defaultStorageClass" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.defaultStorageClass"></a>

- *Type:* java.lang.String

The S3 storage class for new objects.

The service accepts S3_STANDARD, S3_INTELLIGENT_TIERING, S3_STANDARD_IA and S3_ONEZONE_IA; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#default_storage_class StoragegatewayNfsFileShare#default_storage_class}

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.encryptionType"></a>

- *Type:* java.lang.String

The server-side encryption the gateway applies to objects it writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#encryption_type StoragegatewayNfsFileShare#encryption_type}

---

##### `fileShareName`<sup>Optional</sup> <a name="fileShareName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.fileShareName"></a>

- *Type:* java.lang.String

The name of the file share, which defaults to the bucket name when omitted.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#file_share_name StoragegatewayNfsFileShare#file_share_name}

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="guessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.guessMimeTypeEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the gateway infers the MIME type of uploaded objects from their extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.kmsEncrypted"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

The KMS key used for encryption, when EncryptionType selects KMS.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#kms_key StoragegatewayNfsFileShare#kms_key}

---

##### `nfsFileShareDefaults`<sup>Optional</sup> <a name="nfsFileShareDefaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.nfsFileShareDefaults"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

Default values for the file and directory permissions of an NFS share.

Removing this property from a template leaves the live values unchanged rather than clearing them, because the service has no reset for it: a create that omits the object leaves it absent, but the update path merges member by member keyed on the same internal sentinel that reports absence, so no request can restore that state. Set the members you want rather than relying on removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#nfs_file_share_defaults StoragegatewayNfsFileShare#nfs_file_share_defaults}

---

##### `notificationPolicy`<sup>Optional</sup> <a name="notificationPolicy" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.notificationPolicy"></a>

- *Type:* java.lang.String

The upload-notification settling period, as a JSON document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#notification_policy StoragegatewayNfsFileShare#notification_policy}

---

##### `objectAcl`<sup>Optional</sup> <a name="objectAcl" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.objectAcl"></a>

- *Type:* java.lang.String

The canned S3 ACL applied to objects the gateway writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#object_acl StoragegatewayNfsFileShare#object_acl}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.readOnly"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether clients may write to the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#read_only StoragegatewayNfsFileShare#read_only}

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.requesterPays"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the bucket is a Requester Pays bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#requester_pays StoragegatewayNfsFileShare#requester_pays}

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.squash"></a>

- *Type:* java.lang.String

How the NFS share maps client user IDs.

The service accepts RootSquash, NoSquash and AllSquash; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#squash StoragegatewayNfsFileShare#squash}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>>

Tags assigned to the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#tags StoragegatewayNfsFileShare#tags}

---

##### `vpcEndpointDnsName`<sup>Optional</sup> <a name="vpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.vpcEndpointDnsName"></a>

- *Type:* java.lang.String

The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#vpc_endpoint_dns_name StoragegatewayNfsFileShare#vpc_endpoint_dns_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes">putCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults">putNfsFileShareDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetAuditDestinationArn">resetAuditDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetBucketRegion">resetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetCacheAttributes">resetCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetClientList">resetClientList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetDefaultStorageClass">resetDefaultStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetFileShareName">resetFileShareName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetGuessMimeTypeEnabled">resetGuessMimeTypeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsEncrypted">resetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNfsFileShareDefaults">resetNfsFileShareDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNotificationPolicy">resetNotificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetObjectAcl">resetObjectAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetRequesterPays">resetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetSquash">resetSquash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetVpcEndpointDnsName">resetVpcEndpointDnsName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCacheAttributes` <a name="putCacheAttributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes"></a>

```java
public void putCacheAttributes(StoragegatewayNfsFileShareCacheAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---

##### `putNfsFileShareDefaults` <a name="putNfsFileShareDefaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults"></a>

```java
public void putNfsFileShareDefaults(StoragegatewayNfsFileShareNfsFileShareDefaults value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<StoragegatewayNfsFileShareTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>>

---

##### `resetAuditDestinationArn` <a name="resetAuditDestinationArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetAuditDestinationArn"></a>

```java
public void resetAuditDestinationArn()
```

##### `resetBucketRegion` <a name="resetBucketRegion" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetBucketRegion"></a>

```java
public void resetBucketRegion()
```

##### `resetCacheAttributes` <a name="resetCacheAttributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetCacheAttributes"></a>

```java
public void resetCacheAttributes()
```

##### `resetClientList` <a name="resetClientList" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetClientList"></a>

```java
public void resetClientList()
```

##### `resetDefaultStorageClass` <a name="resetDefaultStorageClass" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetDefaultStorageClass"></a>

```java
public void resetDefaultStorageClass()
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetFileShareName` <a name="resetFileShareName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetFileShareName"></a>

```java
public void resetFileShareName()
```

##### `resetGuessMimeTypeEnabled` <a name="resetGuessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetGuessMimeTypeEnabled"></a>

```java
public void resetGuessMimeTypeEnabled()
```

##### `resetKmsEncrypted` <a name="resetKmsEncrypted" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsEncrypted"></a>

```java
public void resetKmsEncrypted()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetNfsFileShareDefaults` <a name="resetNfsFileShareDefaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNfsFileShareDefaults"></a>

```java
public void resetNfsFileShareDefaults()
```

##### `resetNotificationPolicy` <a name="resetNotificationPolicy" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNotificationPolicy"></a>

```java
public void resetNotificationPolicy()
```

##### `resetObjectAcl` <a name="resetObjectAcl" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetObjectAcl"></a>

```java
public void resetObjectAcl()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetRequesterPays` <a name="resetRequesterPays" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetRequesterPays"></a>

```java
public void resetRequesterPays()
```

##### `resetSquash` <a name="resetSquash" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetSquash"></a>

```java
public void resetSquash()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTags"></a>

```java
public void resetTags()
```

##### `resetVpcEndpointDnsName` <a name="resetVpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetVpcEndpointDnsName"></a>

```java
public void resetVpcEndpointDnsName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct"></a>

```java
import io.cdktn.providers.awscc.storagegateway_nfs_file_share.StoragegatewayNfsFileShare;

StoragegatewayNfsFileShare.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.storagegateway_nfs_file_share.StoragegatewayNfsFileShare;

StoragegatewayNfsFileShare.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.storagegateway_nfs_file_share.StoragegatewayNfsFileShare;

StoragegatewayNfsFileShare.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.storagegateway_nfs_file_share.StoragegatewayNfsFileShare;

StoragegatewayNfsFileShare.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StoragegatewayNfsFileShare.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StoragegatewayNfsFileShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StoragegatewayNfsFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewayNfsFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference">StoragegatewayNfsFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareArn">fileShareArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareId">fileShareId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareStatus">fileShareStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaults">nfsFileShareDefaults</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList">StoragegatewayNfsFileShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArnInput">auditDestinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegionInput">bucketRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributesInput">cacheAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientListInput">clientListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClassInput">defaultStorageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareNameInput">fileShareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArnInput">gatewayArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabledInput">guessMimeTypeEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncryptedInput">kmsEncryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArnInput">locationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaultsInput">nfsFileShareDefaultsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicyInput">notificationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAclInput">objectAclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPaysInput">requesterPaysInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squashInput">squashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsNameInput">vpcEndpointDnsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientList">clientList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClass">defaultStorageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareName">fileShareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicy">notificationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAcl">objectAcl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squash">squash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cacheAttributes`<sup>Required</sup> <a name="cacheAttributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributes"></a>

```java
public StoragegatewayNfsFileShareCacheAttributesOutputReference getCacheAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference">StoragegatewayNfsFileShareCacheAttributesOutputReference</a>

---

##### `fileShareArn`<sup>Required</sup> <a name="fileShareArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareArn"></a>

```java
public java.lang.String getFileShareArn();
```

- *Type:* java.lang.String

---

##### `fileShareId`<sup>Required</sup> <a name="fileShareId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareId"></a>

```java
public java.lang.String getFileShareId();
```

- *Type:* java.lang.String

---

##### `fileShareStatus`<sup>Required</sup> <a name="fileShareStatus" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareStatus"></a>

```java
public java.lang.String getFileShareStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nfsFileShareDefaults`<sup>Required</sup> <a name="nfsFileShareDefaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaults"></a>

```java
public StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference getNfsFileShareDefaults();
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tags"></a>

```java
public StoragegatewayNfsFileShareTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList">StoragegatewayNfsFileShareTagsList</a>

---

##### `auditDestinationArnInput`<sup>Optional</sup> <a name="auditDestinationArnInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArnInput"></a>

```java
public java.lang.String getAuditDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `bucketRegionInput`<sup>Optional</sup> <a name="bucketRegionInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegionInput"></a>

```java
public java.lang.String getBucketRegionInput();
```

- *Type:* java.lang.String

---

##### `cacheAttributesInput`<sup>Optional</sup> <a name="cacheAttributesInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributesInput"></a>

```java
public IResolvable|StoragegatewayNfsFileShareCacheAttributes getCacheAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---

##### `clientListInput`<sup>Optional</sup> <a name="clientListInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientListInput"></a>

```java
public java.util.List<java.lang.String> getClientListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultStorageClassInput`<sup>Optional</sup> <a name="defaultStorageClassInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClassInput"></a>

```java
public java.lang.String getDefaultStorageClassInput();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `fileShareNameInput`<sup>Optional</sup> <a name="fileShareNameInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareNameInput"></a>

```java
public java.lang.String getFileShareNameInput();
```

- *Type:* java.lang.String

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArnInput"></a>

```java
public java.lang.String getGatewayArnInput();
```

- *Type:* java.lang.String

---

##### `guessMimeTypeEnabledInput`<sup>Optional</sup> <a name="guessMimeTypeEnabledInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getGuessMimeTypeEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsEncryptedInput`<sup>Optional</sup> <a name="kmsEncryptedInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getKmsEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `locationArnInput`<sup>Optional</sup> <a name="locationArnInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArnInput"></a>

```java
public java.lang.String getLocationArnInput();
```

- *Type:* java.lang.String

---

##### `nfsFileShareDefaultsInput`<sup>Optional</sup> <a name="nfsFileShareDefaultsInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaultsInput"></a>

```java
public IResolvable|StoragegatewayNfsFileShareNfsFileShareDefaults getNfsFileShareDefaultsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---

##### `notificationPolicyInput`<sup>Optional</sup> <a name="notificationPolicyInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicyInput"></a>

```java
public java.lang.String getNotificationPolicyInput();
```

- *Type:* java.lang.String

---

##### `objectAclInput`<sup>Optional</sup> <a name="objectAclInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAclInput"></a>

```java
public java.lang.String getObjectAclInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getReadOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requesterPaysInput`<sup>Optional</sup> <a name="requesterPaysInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPaysInput"></a>

```java
public java.lang.Boolean|IResolvable getRequesterPaysInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `squashInput`<sup>Optional</sup> <a name="squashInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squashInput"></a>

```java
public java.lang.String getSquashInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsInput"></a>

```java
public IResolvable|java.util.List<StoragegatewayNfsFileShareTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>>

---

##### `vpcEndpointDnsNameInput`<sup>Optional</sup> <a name="vpcEndpointDnsNameInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsNameInput"></a>

```java
public java.lang.String getVpcEndpointDnsNameInput();
```

- *Type:* java.lang.String

---

##### `auditDestinationArn`<sup>Required</sup> <a name="auditDestinationArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArn"></a>

```java
public java.lang.String getAuditDestinationArn();
```

- *Type:* java.lang.String

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegion"></a>

```java
public java.lang.String getBucketRegion();
```

- *Type:* java.lang.String

---

##### `clientList`<sup>Required</sup> <a name="clientList" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientList"></a>

```java
public java.util.List<java.lang.String> getClientList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultStorageClass`<sup>Required</sup> <a name="defaultStorageClass" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClass"></a>

```java
public java.lang.String getDefaultStorageClass();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `fileShareName`<sup>Required</sup> <a name="fileShareName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareName"></a>

```java
public java.lang.String getFileShareName();
```

- *Type:* java.lang.String

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

---

##### `guessMimeTypeEnabled`<sup>Required</sup> <a name="guessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGuessMimeTypeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getKmsEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

---

##### `notificationPolicy`<sup>Required</sup> <a name="notificationPolicy" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicy"></a>

```java
public java.lang.String getNotificationPolicy();
```

- *Type:* java.lang.String

---

##### `objectAcl`<sup>Required</sup> <a name="objectAcl" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAcl"></a>

```java
public java.lang.String getObjectAcl();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requesterPays`<sup>Required</sup> <a name="requesterPays" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPays"></a>

```java
public java.lang.Boolean|IResolvable getRequesterPays();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `squash`<sup>Required</sup> <a name="squash" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squash"></a>

```java
public java.lang.String getSquash();
```

- *Type:* java.lang.String

---

##### `vpcEndpointDnsName`<sup>Required</sup> <a name="vpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsName"></a>

```java
public java.lang.String getVpcEndpointDnsName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayNfsFileShareCacheAttributes <a name="StoragegatewayNfsFileShareCacheAttributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_nfs_file_share.StoragegatewayNfsFileShareCacheAttributes;

StoragegatewayNfsFileShareCacheAttributes.builder()
//  .cacheStaleTimeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | How long the directory contents cached by the gateway are considered valid. |

---

##### `cacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSeconds();
```

- *Type:* java.lang.Number

How long the directory contents cached by the gateway are considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#cache_stale_timeout_in_seconds StoragegatewayNfsFileShare#cache_stale_timeout_in_seconds}

---

### StoragegatewayNfsFileShareConfig <a name="StoragegatewayNfsFileShareConfig" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_nfs_file_share.StoragegatewayNfsFileShareConfig;

StoragegatewayNfsFileShareConfig.builder()
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
//  .auditDestinationArn(java.lang.String)
//  .bucketRegion(java.lang.String)
//  .cacheAttributes(StoragegatewayNfsFileShareCacheAttributes)
//  .clientList(java.util.List<java.lang.String>)
//  .defaultStorageClass(java.lang.String)
//  .encryptionType(java.lang.String)
//  .fileShareName(java.lang.String)
//  .guessMimeTypeEnabled(java.lang.Boolean|IResolvable)
//  .kmsEncrypted(java.lang.Boolean|IResolvable)
//  .kmsKey(java.lang.String)
//  .nfsFileShareDefaults(StoragegatewayNfsFileShareNfsFileShareDefaults)
//  .notificationPolicy(java.lang.String)
//  .objectAcl(java.lang.String)
//  .readOnly(java.lang.Boolean|IResolvable)
//  .requesterPays(java.lang.Boolean|IResolvable)
//  .squash(java.lang.String)
//  .tags(IResolvable|java.util.List<StoragegatewayNfsFileShareTags>)
//  .vpcEndpointDnsName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | The ARN of the S3 File Gateway that hosts the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | The ARN of the S3 bucket, or bucket prefix, the share exposes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.role">role</a></code> | <code>java.lang.String</code> | The ARN of the IAM role the gateway assumes when it accesses the S3 location. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | The ARN of the CloudWatch log group that receives the share's audit logs. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | Refresh cache information for the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.clientList">clientList</a></code> | <code>java.util.List<java.lang.String></code> | The IPv4 or IPv6 addresses and CIDR blocks permitted to mount the NFS share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.defaultStorageClass">defaultStorageClass</a></code> | <code>java.lang.String</code> | The S3 storage class for new objects. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | The server-side encryption the gateway applies to objects it writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.fileShareName">fileShareName</a></code> | <code>java.lang.String</code> | The name of the file share, which defaults to the bucket name when omitted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the gateway infers the MIME type of uploaded objects from their extension. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key used for encryption, when EncryptionType selects KMS. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.nfsFileShareDefaults">nfsFileShareDefaults</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | Default values for the file and directory permissions of an NFS share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.notificationPolicy">notificationPolicy</a></code> | <code>java.lang.String</code> | The upload-notification settling period, as a JSON document. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.objectAcl">objectAcl</a></code> | <code>java.lang.String</code> | The canned S3 ACL applied to objects the gateway writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether clients may write to the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the bucket is a Requester Pays bucket. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.squash">squash</a></code> | <code>java.lang.String</code> | How the NFS share maps client user IDs. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>></code> | Tags assigned to the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>java.lang.String</code> | The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

The ARN of the S3 File Gateway that hosts the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#gateway_arn StoragegatewayNfsFileShare#gateway_arn}

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

The ARN of the S3 bucket, or bucket prefix, the share exposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#location_arn StoragegatewayNfsFileShare#location_arn}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The ARN of the IAM role the gateway assumes when it accesses the S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#role StoragegatewayNfsFileShare#role}

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="auditDestinationArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.auditDestinationArn"></a>

```java
public java.lang.String getAuditDestinationArn();
```

- *Type:* java.lang.String

The ARN of the CloudWatch log group that receives the share's audit logs.

Removing this property from a template detaches audit logging: the update sends the empty string, which the service treats as the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.bucketRegion"></a>

```java
public java.lang.String getBucketRegion();
```

- *Type:* java.lang.String

The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#bucket_region StoragegatewayNfsFileShare#bucket_region}

---

##### `cacheAttributes`<sup>Optional</sup> <a name="cacheAttributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.cacheAttributes"></a>

```java
public StoragegatewayNfsFileShareCacheAttributes getCacheAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

Refresh cache information for the file share.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#cache_attributes StoragegatewayNfsFileShare#cache_attributes}

---

##### `clientList`<sup>Optional</sup> <a name="clientList" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.clientList"></a>

```java
public java.util.List<java.lang.String> getClientList();
```

- *Type:* java.util.List<java.lang.String>

The IPv4 or IPv6 addresses and CIDR blocks permitted to mount the NFS share.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#client_list StoragegatewayNfsFileShare#client_list}

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="defaultStorageClass" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.defaultStorageClass"></a>

```java
public java.lang.String getDefaultStorageClass();
```

- *Type:* java.lang.String

The S3 storage class for new objects.

The service accepts S3_STANDARD, S3_INTELLIGENT_TIERING, S3_STANDARD_IA and S3_ONEZONE_IA; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#default_storage_class StoragegatewayNfsFileShare#default_storage_class}

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

The server-side encryption the gateway applies to objects it writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#encryption_type StoragegatewayNfsFileShare#encryption_type}

---

##### `fileShareName`<sup>Optional</sup> <a name="fileShareName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.fileShareName"></a>

```java
public java.lang.String getFileShareName();
```

- *Type:* java.lang.String

The name of the file share, which defaults to the bucket name when omitted.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#file_share_name StoragegatewayNfsFileShare#file_share_name}

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="guessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.guessMimeTypeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGuessMimeTypeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the gateway infers the MIME type of uploaded objects from their extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getKmsEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The KMS key used for encryption, when EncryptionType selects KMS.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#kms_key StoragegatewayNfsFileShare#kms_key}

---

##### `nfsFileShareDefaults`<sup>Optional</sup> <a name="nfsFileShareDefaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.nfsFileShareDefaults"></a>

```java
public StoragegatewayNfsFileShareNfsFileShareDefaults getNfsFileShareDefaults();
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

Default values for the file and directory permissions of an NFS share.

Removing this property from a template leaves the live values unchanged rather than clearing them, because the service has no reset for it: a create that omits the object leaves it absent, but the update path merges member by member keyed on the same internal sentinel that reports absence, so no request can restore that state. Set the members you want rather than relying on removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#nfs_file_share_defaults StoragegatewayNfsFileShare#nfs_file_share_defaults}

---

##### `notificationPolicy`<sup>Optional</sup> <a name="notificationPolicy" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.notificationPolicy"></a>

```java
public java.lang.String getNotificationPolicy();
```

- *Type:* java.lang.String

The upload-notification settling period, as a JSON document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#notification_policy StoragegatewayNfsFileShare#notification_policy}

---

##### `objectAcl`<sup>Optional</sup> <a name="objectAcl" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.objectAcl"></a>

```java
public java.lang.String getObjectAcl();
```

- *Type:* java.lang.String

The canned S3 ACL applied to objects the gateway writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#object_acl StoragegatewayNfsFileShare#object_acl}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether clients may write to the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#read_only StoragegatewayNfsFileShare#read_only}

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.requesterPays"></a>

```java
public java.lang.Boolean|IResolvable getRequesterPays();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the bucket is a Requester Pays bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#requester_pays StoragegatewayNfsFileShare#requester_pays}

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.squash"></a>

```java
public java.lang.String getSquash();
```

- *Type:* java.lang.String

How the NFS share maps client user IDs.

The service accepts RootSquash, NoSquash and AllSquash; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#squash StoragegatewayNfsFileShare#squash}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tags"></a>

```java
public IResolvable|java.util.List<StoragegatewayNfsFileShareTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>>

Tags assigned to the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#tags StoragegatewayNfsFileShare#tags}

---

##### `vpcEndpointDnsName`<sup>Optional</sup> <a name="vpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.vpcEndpointDnsName"></a>

```java
public java.lang.String getVpcEndpointDnsName();
```

- *Type:* java.lang.String

The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#vpc_endpoint_dns_name StoragegatewayNfsFileShare#vpc_endpoint_dns_name}

---

### StoragegatewayNfsFileShareNfsFileShareDefaults <a name="StoragegatewayNfsFileShareNfsFileShareDefaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_nfs_file_share.StoragegatewayNfsFileShareNfsFileShareDefaults;

StoragegatewayNfsFileShareNfsFileShareDefaults.builder()
//  .directoryMode(java.lang.String)
//  .fileMode(java.lang.String)
//  .groupId(java.lang.Number)
//  .ownerId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.directoryMode">directoryMode</a></code> | <code>java.lang.String</code> | The Unix directory mode in the form nnnn. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.fileMode">fileMode</a></code> | <code>java.lang.String</code> | The Unix file mode in the form nnnn. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | The default group ID for files in the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.ownerId">ownerId</a></code> | <code>java.lang.Number</code> | The default owner ID for files in the file share. |

---

##### `directoryMode`<sup>Optional</sup> <a name="directoryMode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.directoryMode"></a>

```java
public java.lang.String getDirectoryMode();
```

- *Type:* java.lang.String

The Unix directory mode in the form nnnn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#directory_mode StoragegatewayNfsFileShare#directory_mode}

---

##### `fileMode`<sup>Optional</sup> <a name="fileMode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.fileMode"></a>

```java
public java.lang.String getFileMode();
```

- *Type:* java.lang.String

The Unix file mode in the form nnnn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#file_mode StoragegatewayNfsFileShare#file_mode}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

The default group ID for files in the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#group_id StoragegatewayNfsFileShare#group_id}

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.ownerId"></a>

```java
public java.lang.Number getOwnerId();
```

- *Type:* java.lang.Number

The default owner ID for files in the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#owner_id StoragegatewayNfsFileShare#owner_id}

---

### StoragegatewayNfsFileShareTags <a name="StoragegatewayNfsFileShareTags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_nfs_file_share.StoragegatewayNfsFileShareTags;

StoragegatewayNfsFileShareTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#key StoragegatewayNfsFileShare#key}. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#value StoragegatewayNfsFileShare#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#key StoragegatewayNfsFileShare#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#value StoragegatewayNfsFileShare#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayNfsFileShareCacheAttributesOutputReference <a name="StoragegatewayNfsFileShareCacheAttributesOutputReference" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_nfs_file_share.StoragegatewayNfsFileShareCacheAttributesOutputReference;

new StoragegatewayNfsFileShareCacheAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">resetCacheStaleTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheStaleTimeoutInSeconds` <a name="resetCacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```java
public void resetCacheStaleTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">cacheStaleTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheStaleTimeoutInSecondsInput`<sup>Optional</sup> <a name="cacheStaleTimeoutInSecondsInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `cacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|StoragegatewayNfsFileShareCacheAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---


### StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference <a name="StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_nfs_file_share.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference;

new StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetDirectoryMode">resetDirectoryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetFileMode">resetFileMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetOwnerId">resetOwnerId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectoryMode` <a name="resetDirectoryMode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetDirectoryMode"></a>

```java
public void resetDirectoryMode()
```

##### `resetFileMode` <a name="resetFileMode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetFileMode"></a>

```java
public void resetFileMode()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetOwnerId` <a name="resetOwnerId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetOwnerId"></a>

```java
public void resetOwnerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryModeInput">directoryModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileModeInput">fileModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerIdInput">ownerIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode">directoryMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode">fileMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId">ownerId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directoryModeInput`<sup>Optional</sup> <a name="directoryModeInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryModeInput"></a>

```java
public java.lang.String getDirectoryModeInput();
```

- *Type:* java.lang.String

---

##### `fileModeInput`<sup>Optional</sup> <a name="fileModeInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileModeInput"></a>

```java
public java.lang.String getFileModeInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerIdInput"></a>

```java
public java.lang.Number getOwnerIdInput();
```

- *Type:* java.lang.Number

---

##### `directoryMode`<sup>Required</sup> <a name="directoryMode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode"></a>

```java
public java.lang.String getDirectoryMode();
```

- *Type:* java.lang.String

---

##### `fileMode`<sup>Required</sup> <a name="fileMode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode"></a>

```java
public java.lang.String getFileMode();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId"></a>

```java
public java.lang.Number getOwnerId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue"></a>

```java
public IResolvable|StoragegatewayNfsFileShareNfsFileShareDefaults getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---


### StoragegatewayNfsFileShareTagsList <a name="StoragegatewayNfsFileShareTagsList" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_nfs_file_share.StoragegatewayNfsFileShareTagsList;

new StoragegatewayNfsFileShareTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.get"></a>

```java
public StoragegatewayNfsFileShareTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StoragegatewayNfsFileShareTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>>

---


### StoragegatewayNfsFileShareTagsOutputReference <a name="StoragegatewayNfsFileShareTagsOutputReference" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.storagegateway_nfs_file_share.StoragegatewayNfsFileShareTagsOutputReference;

new StoragegatewayNfsFileShareTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|StoragegatewayNfsFileShareTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>

---



