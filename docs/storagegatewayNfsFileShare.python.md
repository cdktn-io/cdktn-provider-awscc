# `storagegatewayNfsFileShare` Submodule <a name="`storagegatewayNfsFileShare` Submodule" id="@cdktn/provider-awscc.storagegatewayNfsFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayNfsFileShare <a name="StoragegatewayNfsFileShare" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share awscc_storagegateway_nfs_file_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_nfs_file_share

storagegatewayNfsFileShare.StoragegatewayNfsFileShare(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gateway_arn: str,
  location_arn: str,
  role: str,
  audit_destination_arn: str = None,
  bucket_region: str = None,
  cache_attributes: StoragegatewayNfsFileShareCacheAttributes = None,
  client_list: typing.List[str] = None,
  default_storage_class: str = None,
  encryption_type: str = None,
  file_share_name: str = None,
  guess_mime_type_enabled: bool | IResolvable = None,
  kms_encrypted: bool | IResolvable = None,
  kms_key: str = None,
  nfs_file_share_defaults: StoragegatewayNfsFileShareNfsFileShareDefaults = None,
  notification_policy: str = None,
  object_acl: str = None,
  read_only: bool | IResolvable = None,
  requester_pays: bool | IResolvable = None,
  squash: str = None,
  tags: IResolvable | typing.List[StoragegatewayNfsFileShareTags] = None,
  vpc_endpoint_dns_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.gatewayArn">gateway_arn</a></code> | <code>str</code> | The ARN of the S3 File Gateway that hosts the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.locationArn">location_arn</a></code> | <code>str</code> | The ARN of the S3 bucket, or bucket prefix, the share exposes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.role">role</a></code> | <code>str</code> | The ARN of the IAM role the gateway assumes when it accesses the S3 location. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.auditDestinationArn">audit_destination_arn</a></code> | <code>str</code> | The ARN of the CloudWatch log group that receives the share's audit logs. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.bucketRegion">bucket_region</a></code> | <code>str</code> | The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.cacheAttributes">cache_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | Refresh cache information for the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.clientList">client_list</a></code> | <code>typing.List[str]</code> | The IPv4 or IPv6 addresses and CIDR blocks permitted to mount the NFS share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.defaultStorageClass">default_storage_class</a></code> | <code>str</code> | The S3 storage class for new objects. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.encryptionType">encryption_type</a></code> | <code>str</code> | The server-side encryption the gateway applies to objects it writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.fileShareName">file_share_name</a></code> | <code>str</code> | The name of the file share, which defaults to the bucket name when omitted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.guessMimeTypeEnabled">guess_mime_type_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the gateway infers the MIME type of uploaded objects from their extension. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.kmsEncrypted">kms_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | The KMS key used for encryption, when EncryptionType selects KMS. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.nfsFileShareDefaults">nfs_file_share_defaults</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | Default values for the file and directory permissions of an NFS share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.notificationPolicy">notification_policy</a></code> | <code>str</code> | The upload-notification settling period, as a JSON document. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.objectAcl">object_acl</a></code> | <code>str</code> | The canned S3 ACL applied to objects the gateway writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether clients may write to the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.requesterPays">requester_pays</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the bucket is a Requester Pays bucket. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.squash">squash</a></code> | <code>str</code> | How the NFS share maps client user IDs. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>]</code> | Tags assigned to the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.vpcEndpointDnsName">vpc_endpoint_dns_name</a></code> | <code>str</code> | The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.gatewayArn"></a>

- *Type:* str

The ARN of the S3 File Gateway that hosts the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#gateway_arn StoragegatewayNfsFileShare#gateway_arn}

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.locationArn"></a>

- *Type:* str

The ARN of the S3 bucket, or bucket prefix, the share exposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#location_arn StoragegatewayNfsFileShare#location_arn}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.role"></a>

- *Type:* str

The ARN of the IAM role the gateway assumes when it accesses the S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#role StoragegatewayNfsFileShare#role}

---

##### `audit_destination_arn`<sup>Optional</sup> <a name="audit_destination_arn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.auditDestinationArn"></a>

- *Type:* str

The ARN of the CloudWatch log group that receives the share's audit logs.

Removing this property from a template detaches audit logging: the update sends the empty string, which the service treats as the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}

---

##### `bucket_region`<sup>Optional</sup> <a name="bucket_region" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.bucketRegion"></a>

- *Type:* str

The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#bucket_region StoragegatewayNfsFileShare#bucket_region}

---

##### `cache_attributes`<sup>Optional</sup> <a name="cache_attributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.cacheAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

Refresh cache information for the file share.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#cache_attributes StoragegatewayNfsFileShare#cache_attributes}

---

##### `client_list`<sup>Optional</sup> <a name="client_list" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.clientList"></a>

- *Type:* typing.List[str]

The IPv4 or IPv6 addresses and CIDR blocks permitted to mount the NFS share.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#client_list StoragegatewayNfsFileShare#client_list}

---

##### `default_storage_class`<sup>Optional</sup> <a name="default_storage_class" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.defaultStorageClass"></a>

- *Type:* str

The S3 storage class for new objects.

The service accepts S3_STANDARD, S3_INTELLIGENT_TIERING, S3_STANDARD_IA and S3_ONEZONE_IA; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#default_storage_class StoragegatewayNfsFileShare#default_storage_class}

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.encryptionType"></a>

- *Type:* str

The server-side encryption the gateway applies to objects it writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#encryption_type StoragegatewayNfsFileShare#encryption_type}

---

##### `file_share_name`<sup>Optional</sup> <a name="file_share_name" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.fileShareName"></a>

- *Type:* str

The name of the file share, which defaults to the bucket name when omitted.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#file_share_name StoragegatewayNfsFileShare#file_share_name}

---

##### `guess_mime_type_enabled`<sup>Optional</sup> <a name="guess_mime_type_enabled" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.guessMimeTypeEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the gateway infers the MIME type of uploaded objects from their extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}

---

##### `kms_encrypted`<sup>Optional</sup> <a name="kms_encrypted" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.kmsEncrypted"></a>

- *Type:* bool | cdktn.IResolvable

Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.kmsKey"></a>

- *Type:* str

The KMS key used for encryption, when EncryptionType selects KMS.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#kms_key StoragegatewayNfsFileShare#kms_key}

---

##### `nfs_file_share_defaults`<sup>Optional</sup> <a name="nfs_file_share_defaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.nfsFileShareDefaults"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

Default values for the file and directory permissions of an NFS share.

Removing this property from a template leaves the live values unchanged rather than clearing them, because the service has no reset for it: a create that omits the object leaves it absent, but the update path merges member by member keyed on the same internal sentinel that reports absence, so no request can restore that state. Set the members you want rather than relying on removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#nfs_file_share_defaults StoragegatewayNfsFileShare#nfs_file_share_defaults}

---

##### `notification_policy`<sup>Optional</sup> <a name="notification_policy" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.notificationPolicy"></a>

- *Type:* str

The upload-notification settling period, as a JSON document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#notification_policy StoragegatewayNfsFileShare#notification_policy}

---

##### `object_acl`<sup>Optional</sup> <a name="object_acl" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.objectAcl"></a>

- *Type:* str

The canned S3 ACL applied to objects the gateway writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#object_acl StoragegatewayNfsFileShare#object_acl}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.readOnly"></a>

- *Type:* bool | cdktn.IResolvable

Whether clients may write to the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#read_only StoragegatewayNfsFileShare#read_only}

---

##### `requester_pays`<sup>Optional</sup> <a name="requester_pays" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.requesterPays"></a>

- *Type:* bool | cdktn.IResolvable

Whether the bucket is a Requester Pays bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#requester_pays StoragegatewayNfsFileShare#requester_pays}

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.squash"></a>

- *Type:* str

How the NFS share maps client user IDs.

The service accepts RootSquash, NoSquash and AllSquash; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#squash StoragegatewayNfsFileShare#squash}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>]

Tags assigned to the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#tags StoragegatewayNfsFileShare#tags}

---

##### `vpc_endpoint_dns_name`<sup>Optional</sup> <a name="vpc_endpoint_dns_name" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.vpcEndpointDnsName"></a>

- *Type:* str

The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#vpc_endpoint_dns_name StoragegatewayNfsFileShare#vpc_endpoint_dns_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes">put_cache_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults">put_nfs_file_share_defaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetAuditDestinationArn">reset_audit_destination_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetBucketRegion">reset_bucket_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetCacheAttributes">reset_cache_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetClientList">reset_client_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetDefaultStorageClass">reset_default_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetFileShareName">reset_file_share_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetGuessMimeTypeEnabled">reset_guess_mime_type_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsEncrypted">reset_kms_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNfsFileShareDefaults">reset_nfs_file_share_defaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNotificationPolicy">reset_notification_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetObjectAcl">reset_object_acl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetRequesterPays">reset_requester_pays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetSquash">reset_squash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetVpcEndpointDnsName">reset_vpc_endpoint_dns_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cache_attributes` <a name="put_cache_attributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes"></a>

```python
def put_cache_attributes(
  cache_stale_timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `cache_stale_timeout_in_seconds`<sup>Optional</sup> <a name="cache_stale_timeout_in_seconds" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes.parameter.cacheStaleTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

How long the directory contents cached by the gateway are considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#cache_stale_timeout_in_seconds StoragegatewayNfsFileShare#cache_stale_timeout_in_seconds}

---

##### `put_nfs_file_share_defaults` <a name="put_nfs_file_share_defaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults"></a>

```python
def put_nfs_file_share_defaults(
  directory_mode: str = None,
  file_mode: str = None,
  group_id: typing.Union[int, float] = None,
  owner_id: typing.Union[int, float] = None
) -> None
```

###### `directory_mode`<sup>Optional</sup> <a name="directory_mode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults.parameter.directoryMode"></a>

- *Type:* str

The Unix directory mode in the form nnnn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#directory_mode StoragegatewayNfsFileShare#directory_mode}

---

###### `file_mode`<sup>Optional</sup> <a name="file_mode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults.parameter.fileMode"></a>

- *Type:* str

The Unix file mode in the form nnnn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#file_mode StoragegatewayNfsFileShare#file_mode}

---

###### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults.parameter.groupId"></a>

- *Type:* typing.Union[int, float]

The default group ID for files in the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#group_id StoragegatewayNfsFileShare#group_id}

---

###### `owner_id`<sup>Optional</sup> <a name="owner_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults.parameter.ownerId"></a>

- *Type:* typing.Union[int, float]

The default owner ID for files in the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#owner_id StoragegatewayNfsFileShare#owner_id}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[StoragegatewayNfsFileShareTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>]

---

##### `reset_audit_destination_arn` <a name="reset_audit_destination_arn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetAuditDestinationArn"></a>

```python
def reset_audit_destination_arn() -> None
```

##### `reset_bucket_region` <a name="reset_bucket_region" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetBucketRegion"></a>

```python
def reset_bucket_region() -> None
```

##### `reset_cache_attributes` <a name="reset_cache_attributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetCacheAttributes"></a>

```python
def reset_cache_attributes() -> None
```

##### `reset_client_list` <a name="reset_client_list" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetClientList"></a>

```python
def reset_client_list() -> None
```

##### `reset_default_storage_class` <a name="reset_default_storage_class" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetDefaultStorageClass"></a>

```python
def reset_default_storage_class() -> None
```

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_file_share_name` <a name="reset_file_share_name" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetFileShareName"></a>

```python
def reset_file_share_name() -> None
```

##### `reset_guess_mime_type_enabled` <a name="reset_guess_mime_type_enabled" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetGuessMimeTypeEnabled"></a>

```python
def reset_guess_mime_type_enabled() -> None
```

##### `reset_kms_encrypted` <a name="reset_kms_encrypted" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsEncrypted"></a>

```python
def reset_kms_encrypted() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_nfs_file_share_defaults` <a name="reset_nfs_file_share_defaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNfsFileShareDefaults"></a>

```python
def reset_nfs_file_share_defaults() -> None
```

##### `reset_notification_policy` <a name="reset_notification_policy" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNotificationPolicy"></a>

```python
def reset_notification_policy() -> None
```

##### `reset_object_acl` <a name="reset_object_acl" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetObjectAcl"></a>

```python
def reset_object_acl() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_requester_pays` <a name="reset_requester_pays" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetRequesterPays"></a>

```python
def reset_requester_pays() -> None
```

##### `reset_squash` <a name="reset_squash" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetSquash"></a>

```python
def reset_squash() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_endpoint_dns_name` <a name="reset_vpc_endpoint_dns_name" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetVpcEndpointDnsName"></a>

```python
def reset_vpc_endpoint_dns_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct"></a>

```python
from cdktn_provider_awscc import storagegateway_nfs_file_share

storagegatewayNfsFileShare.StoragegatewayNfsFileShare.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement"></a>

```python
from cdktn_provider_awscc import storagegateway_nfs_file_share

storagegatewayNfsFileShare.StoragegatewayNfsFileShare.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource"></a>

```python
from cdktn_provider_awscc import storagegateway_nfs_file_share

storagegatewayNfsFileShare.StoragegatewayNfsFileShare.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import storagegateway_nfs_file_share

storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StoragegatewayNfsFileShare to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StoragegatewayNfsFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewayNfsFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributes">cache_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference">StoragegatewayNfsFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareArn">file_share_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareId">file_share_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareStatus">file_share_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaults">nfs_file_share_defaults</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList">StoragegatewayNfsFileShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArnInput">audit_destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegionInput">bucket_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributesInput">cache_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientListInput">client_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClassInput">default_storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareNameInput">file_share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArnInput">gateway_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabledInput">guess_mime_type_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncryptedInput">kms_encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArnInput">location_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaultsInput">nfs_file_share_defaults_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicyInput">notification_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAclInput">object_acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnlyInput">read_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPaysInput">requester_pays_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squashInput">squash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsNameInput">vpc_endpoint_dns_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArn">audit_destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegion">bucket_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientList">client_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClass">default_storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareName">file_share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabled">guess_mime_type_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncrypted">kms_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArn">location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicy">notification_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAcl">object_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPays">requester_pays</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squash">squash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsName">vpc_endpoint_dns_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cache_attributes`<sup>Required</sup> <a name="cache_attributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributes"></a>

```python
cache_attributes: StoragegatewayNfsFileShareCacheAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference">StoragegatewayNfsFileShareCacheAttributesOutputReference</a>

---

##### `file_share_arn`<sup>Required</sup> <a name="file_share_arn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareArn"></a>

```python
file_share_arn: str
```

- *Type:* str

---

##### `file_share_id`<sup>Required</sup> <a name="file_share_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareId"></a>

```python
file_share_id: str
```

- *Type:* str

---

##### `file_share_status`<sup>Required</sup> <a name="file_share_status" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareStatus"></a>

```python
file_share_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `nfs_file_share_defaults`<sup>Required</sup> <a name="nfs_file_share_defaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaults"></a>

```python
nfs_file_share_defaults: StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tags"></a>

```python
tags: StoragegatewayNfsFileShareTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList">StoragegatewayNfsFileShareTagsList</a>

---

##### `audit_destination_arn_input`<sup>Optional</sup> <a name="audit_destination_arn_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArnInput"></a>

```python
audit_destination_arn_input: str
```

- *Type:* str

---

##### `bucket_region_input`<sup>Optional</sup> <a name="bucket_region_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegionInput"></a>

```python
bucket_region_input: str
```

- *Type:* str

---

##### `cache_attributes_input`<sup>Optional</sup> <a name="cache_attributes_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributesInput"></a>

```python
cache_attributes_input: IResolvable | StoragegatewayNfsFileShareCacheAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---

##### `client_list_input`<sup>Optional</sup> <a name="client_list_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientListInput"></a>

```python
client_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_storage_class_input`<sup>Optional</sup> <a name="default_storage_class_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClassInput"></a>

```python
default_storage_class_input: str
```

- *Type:* str

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `file_share_name_input`<sup>Optional</sup> <a name="file_share_name_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareNameInput"></a>

```python
file_share_name_input: str
```

- *Type:* str

---

##### `gateway_arn_input`<sup>Optional</sup> <a name="gateway_arn_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArnInput"></a>

```python
gateway_arn_input: str
```

- *Type:* str

---

##### `guess_mime_type_enabled_input`<sup>Optional</sup> <a name="guess_mime_type_enabled_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabledInput"></a>

```python
guess_mime_type_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_encrypted_input`<sup>Optional</sup> <a name="kms_encrypted_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncryptedInput"></a>

```python
kms_encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `location_arn_input`<sup>Optional</sup> <a name="location_arn_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArnInput"></a>

```python
location_arn_input: str
```

- *Type:* str

---

##### `nfs_file_share_defaults_input`<sup>Optional</sup> <a name="nfs_file_share_defaults_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaultsInput"></a>

```python
nfs_file_share_defaults_input: IResolvable | StoragegatewayNfsFileShareNfsFileShareDefaults
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---

##### `notification_policy_input`<sup>Optional</sup> <a name="notification_policy_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicyInput"></a>

```python
notification_policy_input: str
```

- *Type:* str

---

##### `object_acl_input`<sup>Optional</sup> <a name="object_acl_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAclInput"></a>

```python
object_acl_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnlyInput"></a>

```python
read_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `requester_pays_input`<sup>Optional</sup> <a name="requester_pays_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPaysInput"></a>

```python
requester_pays_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `squash_input`<sup>Optional</sup> <a name="squash_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squashInput"></a>

```python
squash_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[StoragegatewayNfsFileShareTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>]

---

##### `vpc_endpoint_dns_name_input`<sup>Optional</sup> <a name="vpc_endpoint_dns_name_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsNameInput"></a>

```python
vpc_endpoint_dns_name_input: str
```

- *Type:* str

---

##### `audit_destination_arn`<sup>Required</sup> <a name="audit_destination_arn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArn"></a>

```python
audit_destination_arn: str
```

- *Type:* str

---

##### `bucket_region`<sup>Required</sup> <a name="bucket_region" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

---

##### `client_list`<sup>Required</sup> <a name="client_list" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientList"></a>

```python
client_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_storage_class`<sup>Required</sup> <a name="default_storage_class" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClass"></a>

```python
default_storage_class: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `file_share_name`<sup>Required</sup> <a name="file_share_name" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareName"></a>

```python
file_share_name: str
```

- *Type:* str

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `guess_mime_type_enabled`<sup>Required</sup> <a name="guess_mime_type_enabled" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabled"></a>

```python
guess_mime_type_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_encrypted`<sup>Required</sup> <a name="kms_encrypted" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncrypted"></a>

```python
kms_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

---

##### `notification_policy`<sup>Required</sup> <a name="notification_policy" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicy"></a>

```python
notification_policy: str
```

- *Type:* str

---

##### `object_acl`<sup>Required</sup> <a name="object_acl" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAcl"></a>

```python
object_acl: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `requester_pays`<sup>Required</sup> <a name="requester_pays" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPays"></a>

```python
requester_pays: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `squash`<sup>Required</sup> <a name="squash" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squash"></a>

```python
squash: str
```

- *Type:* str

---

##### `vpc_endpoint_dns_name`<sup>Required</sup> <a name="vpc_endpoint_dns_name" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsName"></a>

```python
vpc_endpoint_dns_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayNfsFileShareCacheAttributes <a name="StoragegatewayNfsFileShareCacheAttributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_nfs_file_share

storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes(
  cache_stale_timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds">cache_stale_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | How long the directory contents cached by the gateway are considered valid. |

---

##### `cache_stale_timeout_in_seconds`<sup>Optional</sup> <a name="cache_stale_timeout_in_seconds" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```python
cache_stale_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How long the directory contents cached by the gateway are considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#cache_stale_timeout_in_seconds StoragegatewayNfsFileShare#cache_stale_timeout_in_seconds}

---

### StoragegatewayNfsFileShareConfig <a name="StoragegatewayNfsFileShareConfig" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_nfs_file_share

storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gateway_arn: str,
  location_arn: str,
  role: str,
  audit_destination_arn: str = None,
  bucket_region: str = None,
  cache_attributes: StoragegatewayNfsFileShareCacheAttributes = None,
  client_list: typing.List[str] = None,
  default_storage_class: str = None,
  encryption_type: str = None,
  file_share_name: str = None,
  guess_mime_type_enabled: bool | IResolvable = None,
  kms_encrypted: bool | IResolvable = None,
  kms_key: str = None,
  nfs_file_share_defaults: StoragegatewayNfsFileShareNfsFileShareDefaults = None,
  notification_policy: str = None,
  object_acl: str = None,
  read_only: bool | IResolvable = None,
  requester_pays: bool | IResolvable = None,
  squash: str = None,
  tags: IResolvable | typing.List[StoragegatewayNfsFileShareTags] = None,
  vpc_endpoint_dns_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | The ARN of the S3 File Gateway that hosts the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.locationArn">location_arn</a></code> | <code>str</code> | The ARN of the S3 bucket, or bucket prefix, the share exposes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.role">role</a></code> | <code>str</code> | The ARN of the IAM role the gateway assumes when it accesses the S3 location. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.auditDestinationArn">audit_destination_arn</a></code> | <code>str</code> | The ARN of the CloudWatch log group that receives the share's audit logs. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.bucketRegion">bucket_region</a></code> | <code>str</code> | The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.cacheAttributes">cache_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | Refresh cache information for the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.clientList">client_list</a></code> | <code>typing.List[str]</code> | The IPv4 or IPv6 addresses and CIDR blocks permitted to mount the NFS share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.defaultStorageClass">default_storage_class</a></code> | <code>str</code> | The S3 storage class for new objects. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.encryptionType">encryption_type</a></code> | <code>str</code> | The server-side encryption the gateway applies to objects it writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.fileShareName">file_share_name</a></code> | <code>str</code> | The name of the file share, which defaults to the bucket name when omitted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.guessMimeTypeEnabled">guess_mime_type_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the gateway infers the MIME type of uploaded objects from their extension. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsEncrypted">kms_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The KMS key used for encryption, when EncryptionType selects KMS. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.nfsFileShareDefaults">nfs_file_share_defaults</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | Default values for the file and directory permissions of an NFS share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.notificationPolicy">notification_policy</a></code> | <code>str</code> | The upload-notification settling period, as a JSON document. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.objectAcl">object_acl</a></code> | <code>str</code> | The canned S3 ACL applied to objects the gateway writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether clients may write to the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.requesterPays">requester_pays</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the bucket is a Requester Pays bucket. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.squash">squash</a></code> | <code>str</code> | How the NFS share maps client user IDs. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>]</code> | Tags assigned to the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.vpcEndpointDnsName">vpc_endpoint_dns_name</a></code> | <code>str</code> | The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

The ARN of the S3 File Gateway that hosts the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#gateway_arn StoragegatewayNfsFileShare#gateway_arn}

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

The ARN of the S3 bucket, or bucket prefix, the share exposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#location_arn StoragegatewayNfsFileShare#location_arn}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.role"></a>

```python
role: str
```

- *Type:* str

The ARN of the IAM role the gateway assumes when it accesses the S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#role StoragegatewayNfsFileShare#role}

---

##### `audit_destination_arn`<sup>Optional</sup> <a name="audit_destination_arn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.auditDestinationArn"></a>

```python
audit_destination_arn: str
```

- *Type:* str

The ARN of the CloudWatch log group that receives the share's audit logs.

Removing this property from a template detaches audit logging: the update sends the empty string, which the service treats as the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}

---

##### `bucket_region`<sup>Optional</sup> <a name="bucket_region" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#bucket_region StoragegatewayNfsFileShare#bucket_region}

---

##### `cache_attributes`<sup>Optional</sup> <a name="cache_attributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.cacheAttributes"></a>

```python
cache_attributes: StoragegatewayNfsFileShareCacheAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

Refresh cache information for the file share.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#cache_attributes StoragegatewayNfsFileShare#cache_attributes}

---

##### `client_list`<sup>Optional</sup> <a name="client_list" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.clientList"></a>

```python
client_list: typing.List[str]
```

- *Type:* typing.List[str]

The IPv4 or IPv6 addresses and CIDR blocks permitted to mount the NFS share.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#client_list StoragegatewayNfsFileShare#client_list}

---

##### `default_storage_class`<sup>Optional</sup> <a name="default_storage_class" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.defaultStorageClass"></a>

```python
default_storage_class: str
```

- *Type:* str

The S3 storage class for new objects.

The service accepts S3_STANDARD, S3_INTELLIGENT_TIERING, S3_STANDARD_IA and S3_ONEZONE_IA; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#default_storage_class StoragegatewayNfsFileShare#default_storage_class}

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

The server-side encryption the gateway applies to objects it writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#encryption_type StoragegatewayNfsFileShare#encryption_type}

---

##### `file_share_name`<sup>Optional</sup> <a name="file_share_name" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.fileShareName"></a>

```python
file_share_name: str
```

- *Type:* str

The name of the file share, which defaults to the bucket name when omitted.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#file_share_name StoragegatewayNfsFileShare#file_share_name}

---

##### `guess_mime_type_enabled`<sup>Optional</sup> <a name="guess_mime_type_enabled" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.guessMimeTypeEnabled"></a>

```python
guess_mime_type_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the gateway infers the MIME type of uploaded objects from their extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}

---

##### `kms_encrypted`<sup>Optional</sup> <a name="kms_encrypted" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsEncrypted"></a>

```python
kms_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The KMS key used for encryption, when EncryptionType selects KMS.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#kms_key StoragegatewayNfsFileShare#kms_key}

---

##### `nfs_file_share_defaults`<sup>Optional</sup> <a name="nfs_file_share_defaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.nfsFileShareDefaults"></a>

```python
nfs_file_share_defaults: StoragegatewayNfsFileShareNfsFileShareDefaults
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

Default values for the file and directory permissions of an NFS share.

Removing this property from a template leaves the live values unchanged rather than clearing them, because the service has no reset for it: a create that omits the object leaves it absent, but the update path merges member by member keyed on the same internal sentinel that reports absence, so no request can restore that state. Set the members you want rather than relying on removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#nfs_file_share_defaults StoragegatewayNfsFileShare#nfs_file_share_defaults}

---

##### `notification_policy`<sup>Optional</sup> <a name="notification_policy" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.notificationPolicy"></a>

```python
notification_policy: str
```

- *Type:* str

The upload-notification settling period, as a JSON document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#notification_policy StoragegatewayNfsFileShare#notification_policy}

---

##### `object_acl`<sup>Optional</sup> <a name="object_acl" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.objectAcl"></a>

```python
object_acl: str
```

- *Type:* str

The canned S3 ACL applied to objects the gateway writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#object_acl StoragegatewayNfsFileShare#object_acl}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether clients may write to the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#read_only StoragegatewayNfsFileShare#read_only}

---

##### `requester_pays`<sup>Optional</sup> <a name="requester_pays" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.requesterPays"></a>

```python
requester_pays: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the bucket is a Requester Pays bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#requester_pays StoragegatewayNfsFileShare#requester_pays}

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.squash"></a>

```python
squash: str
```

- *Type:* str

How the NFS share maps client user IDs.

The service accepts RootSquash, NoSquash and AllSquash; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#squash StoragegatewayNfsFileShare#squash}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[StoragegatewayNfsFileShareTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>]

Tags assigned to the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#tags StoragegatewayNfsFileShare#tags}

---

##### `vpc_endpoint_dns_name`<sup>Optional</sup> <a name="vpc_endpoint_dns_name" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.vpcEndpointDnsName"></a>

```python
vpc_endpoint_dns_name: str
```

- *Type:* str

The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#vpc_endpoint_dns_name StoragegatewayNfsFileShare#vpc_endpoint_dns_name}

---

### StoragegatewayNfsFileShareNfsFileShareDefaults <a name="StoragegatewayNfsFileShareNfsFileShareDefaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_nfs_file_share

storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults(
  directory_mode: str = None,
  file_mode: str = None,
  group_id: typing.Union[int, float] = None,
  owner_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.directoryMode">directory_mode</a></code> | <code>str</code> | The Unix directory mode in the form nnnn. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.fileMode">file_mode</a></code> | <code>str</code> | The Unix file mode in the form nnnn. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The default group ID for files in the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.ownerId">owner_id</a></code> | <code>typing.Union[int, float]</code> | The default owner ID for files in the file share. |

---

##### `directory_mode`<sup>Optional</sup> <a name="directory_mode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.directoryMode"></a>

```python
directory_mode: str
```

- *Type:* str

The Unix directory mode in the form nnnn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#directory_mode StoragegatewayNfsFileShare#directory_mode}

---

##### `file_mode`<sup>Optional</sup> <a name="file_mode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.fileMode"></a>

```python
file_mode: str
```

- *Type:* str

The Unix file mode in the form nnnn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#file_mode StoragegatewayNfsFileShare#file_mode}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default group ID for files in the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#group_id StoragegatewayNfsFileShare#group_id}

---

##### `owner_id`<sup>Optional</sup> <a name="owner_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.ownerId"></a>

```python
owner_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default owner ID for files in the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#owner_id StoragegatewayNfsFileShare#owner_id}

---

### StoragegatewayNfsFileShareTags <a name="StoragegatewayNfsFileShareTags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_nfs_file_share

storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#key StoragegatewayNfsFileShare#key}. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#value StoragegatewayNfsFileShare#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#key StoragegatewayNfsFileShare#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#value StoragegatewayNfsFileShare#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayNfsFileShareCacheAttributesOutputReference <a name="StoragegatewayNfsFileShareCacheAttributesOutputReference" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_nfs_file_share

storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">reset_cache_stale_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cache_stale_timeout_in_seconds` <a name="reset_cache_stale_timeout_in_seconds" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```python
def reset_cache_stale_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">cache_stale_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cache_stale_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_stale_timeout_in_seconds_input`<sup>Optional</sup> <a name="cache_stale_timeout_in_seconds_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```python
cache_stale_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_stale_timeout_in_seconds`<sup>Required</sup> <a name="cache_stale_timeout_in_seconds" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```python
cache_stale_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StoragegatewayNfsFileShareCacheAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---


### StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference <a name="StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_nfs_file_share

storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetDirectoryMode">reset_directory_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetFileMode">reset_file_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetOwnerId">reset_owner_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_directory_mode` <a name="reset_directory_mode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetDirectoryMode"></a>

```python
def reset_directory_mode() -> None
```

##### `reset_file_mode` <a name="reset_file_mode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetFileMode"></a>

```python
def reset_file_mode() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_owner_id` <a name="reset_owner_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetOwnerId"></a>

```python
def reset_owner_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryModeInput">directory_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileModeInput">file_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerIdInput">owner_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode">directory_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode">file_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId">owner_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_mode_input`<sup>Optional</sup> <a name="directory_mode_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryModeInput"></a>

```python
directory_mode_input: str
```

- *Type:* str

---

##### `file_mode_input`<sup>Optional</sup> <a name="file_mode_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileModeInput"></a>

```python
file_mode_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_id_input`<sup>Optional</sup> <a name="owner_id_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerIdInput"></a>

```python
owner_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `directory_mode`<sup>Required</sup> <a name="directory_mode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode"></a>

```python
directory_mode: str
```

- *Type:* str

---

##### `file_mode`<sup>Required</sup> <a name="file_mode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode"></a>

```python
file_mode: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId"></a>

```python
owner_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StoragegatewayNfsFileShareNfsFileShareDefaults
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---


### StoragegatewayNfsFileShareTagsList <a name="StoragegatewayNfsFileShareTagsList" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_nfs_file_share

storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StoragegatewayNfsFileShareTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StoragegatewayNfsFileShareTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>]

---


### StoragegatewayNfsFileShareTagsOutputReference <a name="StoragegatewayNfsFileShareTagsOutputReference" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import storagegateway_nfs_file_share

storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StoragegatewayNfsFileShareTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>

---



