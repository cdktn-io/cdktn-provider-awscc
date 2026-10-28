# `storagegatewaySmbFileShare` Submodule <a name="`storagegatewaySmbFileShare` Submodule" id="@cdktn/provider-awscc.storagegatewaySmbFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewaySmbFileShare <a name="StoragegatewaySmbFileShare" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share awscc_storagegateway_smb_file_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.NewStoragegatewaySmbFileShare(scope Construct, id *string, config StoragegatewaySmbFileShareConfig) StoragegatewaySmbFileShare
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig">StoragegatewaySmbFileShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig">StoragegatewaySmbFileShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes">PutCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAccessBasedEnumeration">ResetAccessBasedEnumeration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAdminUserList">ResetAdminUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuditDestinationArn">ResetAuditDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetBucketRegion">ResetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCacheAttributes">ResetCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCaseSensitivity">ResetCaseSensitivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetDefaultStorageClass">ResetDefaultStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetFileShareName">ResetFileShareName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetGuessMimeTypeEnabled">ResetGuessMimeTypeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetInvalidUserList">ResetInvalidUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsEncrypted">ResetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetNotificationPolicy">ResetNotificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetObjectAcl">ResetObjectAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOplocksEnabled">ResetOplocksEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetRequesterPays">ResetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetSmbaclEnabled">ResetSmbaclEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetValidUserList">ResetValidUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetVpcEndpointDnsName">ResetVpcEndpointDnsName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCacheAttributes` <a name="PutCacheAttributes" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes"></a>

```go
func PutCacheAttributes(value StoragegatewaySmbFileShareCacheAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putCacheAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessBasedEnumeration` <a name="ResetAccessBasedEnumeration" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAccessBasedEnumeration"></a>

```go
func ResetAccessBasedEnumeration()
```

##### `ResetAdminUserList` <a name="ResetAdminUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAdminUserList"></a>

```go
func ResetAdminUserList()
```

##### `ResetAuditDestinationArn` <a name="ResetAuditDestinationArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuditDestinationArn"></a>

```go
func ResetAuditDestinationArn()
```

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetAuthentication"></a>

```go
func ResetAuthentication()
```

##### `ResetBucketRegion` <a name="ResetBucketRegion" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetBucketRegion"></a>

```go
func ResetBucketRegion()
```

##### `ResetCacheAttributes` <a name="ResetCacheAttributes" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCacheAttributes"></a>

```go
func ResetCacheAttributes()
```

##### `ResetCaseSensitivity` <a name="ResetCaseSensitivity" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetCaseSensitivity"></a>

```go
func ResetCaseSensitivity()
```

##### `ResetDefaultStorageClass` <a name="ResetDefaultStorageClass" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetDefaultStorageClass"></a>

```go
func ResetDefaultStorageClass()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetFileShareName` <a name="ResetFileShareName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetFileShareName"></a>

```go
func ResetFileShareName()
```

##### `ResetGuessMimeTypeEnabled` <a name="ResetGuessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetGuessMimeTypeEnabled"></a>

```go
func ResetGuessMimeTypeEnabled()
```

##### `ResetInvalidUserList` <a name="ResetInvalidUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetInvalidUserList"></a>

```go
func ResetInvalidUserList()
```

##### `ResetKmsEncrypted` <a name="ResetKmsEncrypted" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsEncrypted"></a>

```go
func ResetKmsEncrypted()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetNotificationPolicy` <a name="ResetNotificationPolicy" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetNotificationPolicy"></a>

```go
func ResetNotificationPolicy()
```

##### `ResetObjectAcl` <a name="ResetObjectAcl" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetObjectAcl"></a>

```go
func ResetObjectAcl()
```

##### `ResetOplocksEnabled` <a name="ResetOplocksEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetOplocksEnabled"></a>

```go
func ResetOplocksEnabled()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetReadOnly"></a>

```go
func ResetReadOnly()
```

##### `ResetRequesterPays` <a name="ResetRequesterPays" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetRequesterPays"></a>

```go
func ResetRequesterPays()
```

##### `ResetSmbaclEnabled` <a name="ResetSmbaclEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetSmbaclEnabled"></a>

```go
func ResetSmbaclEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetTags"></a>

```go
func ResetTags()
```

##### `ResetValidUserList` <a name="ResetValidUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetValidUserList"></a>

```go
func ResetValidUserList()
```

##### `ResetVpcEndpointDnsName` <a name="ResetVpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.resetVpcEndpointDnsName"></a>

```go
func ResetVpcEndpointDnsName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StoragegatewaySmbFileShare resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.StoragegatewaySmbFileShare_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.StoragegatewaySmbFileShare_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.StoragegatewaySmbFileShare_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.StoragegatewaySmbFileShare_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StoragegatewaySmbFileShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StoragegatewaySmbFileShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StoragegatewaySmbFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewaySmbFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes">CacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareArn">FileShareArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareId">FileShareId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareStatus">FileShareStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList">StoragegatewaySmbFileShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput">AccessBasedEnumerationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput">AdminUserListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput">AuditDestinationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput">AuthenticationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput">BucketRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput">CacheAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput">CaseSensitivityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput">DefaultStorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput">FileShareNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput">GatewayArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput">GuessMimeTypeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput">InvalidUserListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput">KmsEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput">LocationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput">NotificationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput">ObjectAclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput">OplocksEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput">RequesterPaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbaclEnabledInput">SmbaclEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput">ValidUserListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput">VpcEndpointDnsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration">AccessBasedEnumeration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList">AdminUserList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn">AuditDestinationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication">Authentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity">CaseSensitivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass">DefaultStorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName">FileShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled">GuessMimeTypeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList">InvalidUserList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted">KmsEncrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn">LocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy">NotificationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl">ObjectAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled">OplocksEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays">RequesterPays</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbaclEnabled">SmbaclEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList">ValidUserList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName">VpcEndpointDnsName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CacheAttributes`<sup>Required</sup> <a name="CacheAttributes" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributes"></a>

```go
func CacheAttributes() StoragegatewaySmbFileShareCacheAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference">StoragegatewaySmbFileShareCacheAttributesOutputReference</a>

---

##### `FileShareArn`<sup>Required</sup> <a name="FileShareArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareArn"></a>

```go
func FileShareArn() *string
```

- *Type:* *string

---

##### `FileShareId`<sup>Required</sup> <a name="FileShareId" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareId"></a>

```go
func FileShareId() *string
```

- *Type:* *string

---

##### `FileShareStatus`<sup>Required</sup> <a name="FileShareStatus" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareStatus"></a>

```go
func FileShareStatus() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tags"></a>

```go
func Tags() StoragegatewaySmbFileShareTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList">StoragegatewaySmbFileShareTagsList</a>

---

##### `AccessBasedEnumerationInput`<sup>Optional</sup> <a name="AccessBasedEnumerationInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumerationInput"></a>

```go
func AccessBasedEnumerationInput() interface{}
```

- *Type:* interface{}

---

##### `AdminUserListInput`<sup>Optional</sup> <a name="AdminUserListInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserListInput"></a>

```go
func AdminUserListInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditDestinationArnInput`<sup>Optional</sup> <a name="AuditDestinationArnInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArnInput"></a>

```go
func AuditDestinationArnInput() *string
```

- *Type:* *string

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authenticationInput"></a>

```go
func AuthenticationInput() *string
```

- *Type:* *string

---

##### `BucketRegionInput`<sup>Optional</sup> <a name="BucketRegionInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegionInput"></a>

```go
func BucketRegionInput() *string
```

- *Type:* *string

---

##### `CacheAttributesInput`<sup>Optional</sup> <a name="CacheAttributesInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.cacheAttributesInput"></a>

```go
func CacheAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `CaseSensitivityInput`<sup>Optional</sup> <a name="CaseSensitivityInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivityInput"></a>

```go
func CaseSensitivityInput() *string
```

- *Type:* *string

---

##### `DefaultStorageClassInput`<sup>Optional</sup> <a name="DefaultStorageClassInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClassInput"></a>

```go
func DefaultStorageClassInput() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `FileShareNameInput`<sup>Optional</sup> <a name="FileShareNameInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareNameInput"></a>

```go
func FileShareNameInput() *string
```

- *Type:* *string

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArnInput"></a>

```go
func GatewayArnInput() *string
```

- *Type:* *string

---

##### `GuessMimeTypeEnabledInput`<sup>Optional</sup> <a name="GuessMimeTypeEnabledInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabledInput"></a>

```go
func GuessMimeTypeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `InvalidUserListInput`<sup>Optional</sup> <a name="InvalidUserListInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserListInput"></a>

```go
func InvalidUserListInput() *[]*string
```

- *Type:* *[]*string

---

##### `KmsEncryptedInput`<sup>Optional</sup> <a name="KmsEncryptedInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncryptedInput"></a>

```go
func KmsEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `LocationArnInput`<sup>Optional</sup> <a name="LocationArnInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArnInput"></a>

```go
func LocationArnInput() *string
```

- *Type:* *string

---

##### `NotificationPolicyInput`<sup>Optional</sup> <a name="NotificationPolicyInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicyInput"></a>

```go
func NotificationPolicyInput() *string
```

- *Type:* *string

---

##### `ObjectAclInput`<sup>Optional</sup> <a name="ObjectAclInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAclInput"></a>

```go
func ObjectAclInput() *string
```

- *Type:* *string

---

##### `OplocksEnabledInput`<sup>Optional</sup> <a name="OplocksEnabledInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabledInput"></a>

```go
func OplocksEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `RequesterPaysInput`<sup>Optional</sup> <a name="RequesterPaysInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPaysInput"></a>

```go
func RequesterPaysInput() interface{}
```

- *Type:* interface{}

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SmbaclEnabledInput`<sup>Optional</sup> <a name="SmbaclEnabledInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbaclEnabledInput"></a>

```go
func SmbaclEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidUserListInput`<sup>Optional</sup> <a name="ValidUserListInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserListInput"></a>

```go
func ValidUserListInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointDnsNameInput`<sup>Optional</sup> <a name="VpcEndpointDnsNameInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsNameInput"></a>

```go
func VpcEndpointDnsNameInput() *string
```

- *Type:* *string

---

##### `AccessBasedEnumeration`<sup>Required</sup> <a name="AccessBasedEnumeration" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.accessBasedEnumeration"></a>

```go
func AccessBasedEnumeration() interface{}
```

- *Type:* interface{}

---

##### `AdminUserList`<sup>Required</sup> <a name="AdminUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.adminUserList"></a>

```go
func AdminUserList() *[]*string
```

- *Type:* *[]*string

---

##### `AuditDestinationArn`<sup>Required</sup> <a name="AuditDestinationArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.auditDestinationArn"></a>

```go
func AuditDestinationArn() *string
```

- *Type:* *string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.authentication"></a>

```go
func Authentication() *string
```

- *Type:* *string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.bucketRegion"></a>

```go
func BucketRegion() *string
```

- *Type:* *string

---

##### `CaseSensitivity`<sup>Required</sup> <a name="CaseSensitivity" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.caseSensitivity"></a>

```go
func CaseSensitivity() *string
```

- *Type:* *string

---

##### `DefaultStorageClass`<sup>Required</sup> <a name="DefaultStorageClass" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.defaultStorageClass"></a>

```go
func DefaultStorageClass() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `FileShareName`<sup>Required</sup> <a name="FileShareName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.fileShareName"></a>

```go
func FileShareName() *string
```

- *Type:* *string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.gatewayArn"></a>

```go
func GatewayArn() *string
```

- *Type:* *string

---

##### `GuessMimeTypeEnabled`<sup>Required</sup> <a name="GuessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.guessMimeTypeEnabled"></a>

```go
func GuessMimeTypeEnabled() interface{}
```

- *Type:* interface{}

---

##### `InvalidUserList`<sup>Required</sup> <a name="InvalidUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.invalidUserList"></a>

```go
func InvalidUserList() *[]*string
```

- *Type:* *[]*string

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsEncrypted"></a>

```go
func KmsEncrypted() interface{}
```

- *Type:* interface{}

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.locationArn"></a>

```go
func LocationArn() *string
```

- *Type:* *string

---

##### `NotificationPolicy`<sup>Required</sup> <a name="NotificationPolicy" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.notificationPolicy"></a>

```go
func NotificationPolicy() *string
```

- *Type:* *string

---

##### `ObjectAcl`<sup>Required</sup> <a name="ObjectAcl" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.objectAcl"></a>

```go
func ObjectAcl() *string
```

- *Type:* *string

---

##### `OplocksEnabled`<sup>Required</sup> <a name="OplocksEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.oplocksEnabled"></a>

```go
func OplocksEnabled() interface{}
```

- *Type:* interface{}

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `RequesterPays`<sup>Required</sup> <a name="RequesterPays" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.requesterPays"></a>

```go
func RequesterPays() interface{}
```

- *Type:* interface{}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SmbaclEnabled`<sup>Required</sup> <a name="SmbaclEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.smbaclEnabled"></a>

```go
func SmbaclEnabled() interface{}
```

- *Type:* interface{}

---

##### `ValidUserList`<sup>Required</sup> <a name="ValidUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.validUserList"></a>

```go
func ValidUserList() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointDnsName`<sup>Required</sup> <a name="VpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.vpcEndpointDnsName"></a>

```go
func VpcEndpointDnsName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShare.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewaySmbFileShareCacheAttributes <a name="StoragegatewaySmbFileShareCacheAttributes" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/storagegatewaysmbfileshare"

&storagegatewaysmbfileshare.StoragegatewaySmbFileShareCacheAttributes {
	CacheStaleTimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</a></code> | <code>*f64</code> | How long the directory contents cached by the gateway are considered valid. |

---

##### `CacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="CacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```go
CacheStaleTimeoutInSeconds *f64
```

- *Type:* *f64

How long the directory contents cached by the gateway are considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}

---

### StoragegatewaySmbFileShareConfig <a name="StoragegatewaySmbFileShareConfig" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/storagegatewaysmbfileshare"

&storagegatewaysmbfileshare.StoragegatewaySmbFileShareConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayArn: *string,
	LocationArn: *string,
	Role: *string,
	AccessBasedEnumeration: interface{},
	AdminUserList: *[]*string,
	AuditDestinationArn: *string,
	Authentication: *string,
	BucketRegion: *string,
	CacheAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes,
	CaseSensitivity: *string,
	DefaultStorageClass: *string,
	EncryptionType: *string,
	FileShareName: *string,
	GuessMimeTypeEnabled: interface{},
	InvalidUserList: *[]*string,
	KmsEncrypted: interface{},
	KmsKey: *string,
	NotificationPolicy: *string,
	ObjectAcl: *string,
	OplocksEnabled: interface{},
	ReadOnly: interface{},
	RequesterPays: interface{},
	SmbaclEnabled: interface{},
	Tags: interface{},
	ValidUserList: *[]*string,
	VpcEndpointDnsName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | The ARN of the S3 File Gateway that hosts the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn">LocationArn</a></code> | <code>*string</code> | The ARN of the S3 bucket, or bucket prefix, the share exposes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.role">Role</a></code> | <code>*string</code> | The ARN of the IAM role the gateway assumes when it accesses the S3 location. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration">AccessBasedEnumeration</a></code> | <code>interface{}</code> | Whether clients see only the files and folders they may access. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList">AdminUserList</a></code> | <code>*[]*string</code> | Users and groups granted administrative privileges on the SMB share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn">AuditDestinationArn</a></code> | <code>*string</code> | The ARN of the CloudWatch log group that receives the share's audit logs. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication">Authentication</a></code> | <code>*string</code> | The authentication the SMB share uses. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes">CacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a></code> | Refresh cache information for the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity">CaseSensitivity</a></code> | <code>*string</code> | Whether the SMB share is case sensitive or defers to the client. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass">DefaultStorageClass</a></code> | <code>*string</code> | The S3 storage class for new objects. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | The server-side encryption the gateway applies to objects it writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName">FileShareName</a></code> | <code>*string</code> | The name of the file share, which defaults to the bucket name when omitted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled">GuessMimeTypeEnabled</a></code> | <code>interface{}</code> | Whether the gateway infers the MIME type of uploaded objects from their extension. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList">InvalidUserList</a></code> | <code>*[]*string</code> | Users and groups denied access to the SMB share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted">KmsEncrypted</a></code> | <code>interface{}</code> | Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The KMS key used for encryption, when EncryptionType selects KMS. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy">NotificationPolicy</a></code> | <code>*string</code> | The upload-notification settling period, as a JSON document. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl">ObjectAcl</a></code> | <code>*string</code> | The canned S3 ACL applied to objects the gateway writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled">OplocksEnabled</a></code> | <code>interface{}</code> | Whether the SMB share grants opportunistic locks. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | Whether clients may write to the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays">RequesterPays</a></code> | <code>interface{}</code> | Whether the bucket is a Requester Pays bucket. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbaclEnabled">SmbaclEnabled</a></code> | <code>interface{}</code> | Whether the SMB share uses Windows ACLs rather than POSIX permissions. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags assigned to the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList">ValidUserList</a></code> | <code>*[]*string</code> | Users and groups permitted to access the SMB share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName">VpcEndpointDnsName</a></code> | <code>*string</code> | The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.gatewayArn"></a>

```go
GatewayArn *string
```

- *Type:* *string

The ARN of the S3 File Gateway that hosts the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.locationArn"></a>

```go
LocationArn *string
```

- *Type:* *string

The ARN of the S3 bucket, or bucket prefix, the share exposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

The ARN of the IAM role the gateway assumes when it accesses the S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#role StoragegatewaySmbFileShare#role}

---

##### `AccessBasedEnumeration`<sup>Optional</sup> <a name="AccessBasedEnumeration" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.accessBasedEnumeration"></a>

```go
AccessBasedEnumeration interface{}
```

- *Type:* interface{}

Whether clients see only the files and folders they may access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}

---

##### `AdminUserList`<sup>Optional</sup> <a name="AdminUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.adminUserList"></a>

```go
AdminUserList *[]*string
```

- *Type:* *[]*string

Users and groups granted administrative privileges on the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}

---

##### `AuditDestinationArn`<sup>Optional</sup> <a name="AuditDestinationArn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.auditDestinationArn"></a>

```go
AuditDestinationArn *string
```

- *Type:* *string

The ARN of the CloudWatch log group that receives the share's audit logs.

Removing this property from a template detaches audit logging: the update sends the empty string, which the service treats as the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.authentication"></a>

```go
Authentication *string
```

- *Type:* *string

The authentication the SMB share uses.

The service accepts ActiveDirectory and GuestAccess; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}

---

##### `BucketRegion`<sup>Optional</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.bucketRegion"></a>

```go
BucketRegion *string
```

- *Type:* *string

The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}

---

##### `CacheAttributes`<sup>Optional</sup> <a name="CacheAttributes" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.cacheAttributes"></a>

```go
CacheAttributes StoragegatewaySmbFileShareCacheAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributes">StoragegatewaySmbFileShareCacheAttributes</a>

Refresh cache information for the file share.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#cache_attributes StoragegatewaySmbFileShare#cache_attributes}

---

##### `CaseSensitivity`<sup>Optional</sup> <a name="CaseSensitivity" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.caseSensitivity"></a>

```go
CaseSensitivity *string
```

- *Type:* *string

Whether the SMB share is case sensitive or defers to the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}

---

##### `DefaultStorageClass`<sup>Optional</sup> <a name="DefaultStorageClass" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.defaultStorageClass"></a>

```go
DefaultStorageClass *string
```

- *Type:* *string

The S3 storage class for new objects.

The service accepts S3_STANDARD, S3_INTELLIGENT_TIERING, S3_STANDARD_IA and S3_ONEZONE_IA; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

The server-side encryption the gateway applies to objects it writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#encryption_type StoragegatewaySmbFileShare#encryption_type}

---

##### `FileShareName`<sup>Optional</sup> <a name="FileShareName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.fileShareName"></a>

```go
FileShareName *string
```

- *Type:* *string

The name of the file share, which defaults to the bucket name when omitted.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}

---

##### `GuessMimeTypeEnabled`<sup>Optional</sup> <a name="GuessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.guessMimeTypeEnabled"></a>

```go
GuessMimeTypeEnabled interface{}
```

- *Type:* interface{}

Whether the gateway infers the MIME type of uploaded objects from their extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}

---

##### `InvalidUserList`<sup>Optional</sup> <a name="InvalidUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.invalidUserList"></a>

```go
InvalidUserList *[]*string
```

- *Type:* *[]*string

Users and groups denied access to the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}

---

##### `KmsEncrypted`<sup>Optional</sup> <a name="KmsEncrypted" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsEncrypted"></a>

```go
KmsEncrypted interface{}
```

- *Type:* interface{}

Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The KMS key used for encryption, when EncryptionType selects KMS.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#kms_key StoragegatewaySmbFileShare#kms_key}

---

##### `NotificationPolicy`<sup>Optional</sup> <a name="NotificationPolicy" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.notificationPolicy"></a>

```go
NotificationPolicy *string
```

- *Type:* *string

The upload-notification settling period, as a JSON document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}

---

##### `ObjectAcl`<sup>Optional</sup> <a name="ObjectAcl" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.objectAcl"></a>

```go
ObjectAcl *string
```

- *Type:* *string

The canned S3 ACL applied to objects the gateway writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}

---

##### `OplocksEnabled`<sup>Optional</sup> <a name="OplocksEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.oplocksEnabled"></a>

```go
OplocksEnabled interface{}
```

- *Type:* interface{}

Whether the SMB share grants opportunistic locks.

Removing this property from a template leaves the live value unchanged rather than restoring the created default, because that default depends on the gateway's software version -- opportunistic locking is enabled by default only on appliances at 1.19.0.0 or above -- and the version is not part of this resource. Set the value explicitly rather than relying on removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

Whether clients may write to the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}

---

##### `RequesterPays`<sup>Optional</sup> <a name="RequesterPays" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.requesterPays"></a>

```go
RequesterPays interface{}
```

- *Type:* interface{}

Whether the bucket is a Requester Pays bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}

---

##### `SmbaclEnabled`<sup>Optional</sup> <a name="SmbaclEnabled" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.smbaclEnabled"></a>

```go
SmbaclEnabled interface{}
```

- *Type:* interface{}

Whether the SMB share uses Windows ACLs rather than POSIX permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#smbacl_enabled StoragegatewaySmbFileShare#smbacl_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags assigned to the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}

---

##### `ValidUserList`<sup>Optional</sup> <a name="ValidUserList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.validUserList"></a>

```go
ValidUserList *[]*string
```

- *Type:* *[]*string

Users and groups permitted to access the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}

---

##### `VpcEndpointDnsName`<sup>Optional</sup> <a name="VpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareConfig.property.vpcEndpointDnsName"></a>

```go
VpcEndpointDnsName *string
```

- *Type:* *string

The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}

---

### StoragegatewaySmbFileShareTags <a name="StoragegatewaySmbFileShareTags" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/storagegatewaysmbfileshare"

&storagegatewaysmbfileshare.StoragegatewaySmbFileShareTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#key StoragegatewaySmbFileShare#key}. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#value StoragegatewaySmbFileShare#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#key StoragegatewaySmbFileShare#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_smb_file_share#value StoragegatewaySmbFileShare#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewaySmbFileShareCacheAttributesOutputReference <a name="StoragegatewaySmbFileShareCacheAttributesOutputReference" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.NewStoragegatewaySmbFileShareCacheAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StoragegatewaySmbFileShareCacheAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">ResetCacheStaleTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheStaleTimeoutInSeconds` <a name="ResetCacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```go
func ResetCacheStaleTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">CacheStaleTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheStaleTimeoutInSecondsInput`<sup>Optional</sup> <a name="CacheStaleTimeoutInSecondsInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```go
func CacheStaleTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `CacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="CacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```go
func CacheStaleTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StoragegatewaySmbFileShareTagsList <a name="StoragegatewaySmbFileShareTagsList" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.NewStoragegatewaySmbFileShareTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StoragegatewaySmbFileShareTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.get"></a>

```go
func Get(index *f64) StoragegatewaySmbFileShareTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StoragegatewaySmbFileShareTagsOutputReference <a name="StoragegatewaySmbFileShareTagsOutputReference" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/storagegatewaysmbfileshare"

storagegatewaysmbfileshare.NewStoragegatewaySmbFileShareTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StoragegatewaySmbFileShareTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.storagegatewaySmbFileShare.StoragegatewaySmbFileShareTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



