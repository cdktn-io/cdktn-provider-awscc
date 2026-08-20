# `efsFileSystem` Submodule <a name="`efsFileSystem` Submodule" id="@cdktn/provider-awscc.efsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsFileSystem <a name="EfsFileSystem" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system awscc_efs_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.NewEfsFileSystem(scope Construct, id *string, config EfsFileSystemConfig) EfsFileSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy">PutBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection">PutFileSystemProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags">PutFileSystemTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies">PutLifecyclePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration">PutReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName">ResetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBackupPolicy">ResetBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBypassPolicyLockoutSafetyCheck">ResetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemPolicy">ResetFileSystemPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemProtection">ResetFileSystemProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemTags">ResetFileSystemTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetLifecyclePolicies">ResetLifecyclePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetPerformanceMode">ResetPerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps">ResetProvisionedThroughputInMibps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetReplicationConfiguration">ResetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetThroughputMode">ResetThroughputMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupPolicy` <a name="PutBackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy"></a>

```go
func PutBackupPolicy(value EfsFileSystemBackupPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

---

##### `PutFileSystemProtection` <a name="PutFileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection"></a>

```go
func PutFileSystemProtection(value EfsFileSystemFileSystemProtection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

---

##### `PutFileSystemTags` <a name="PutFileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags"></a>

```go
func PutFileSystemTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLifecyclePolicies` <a name="PutLifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies"></a>

```go
func PutLifecyclePolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutReplicationConfiguration` <a name="PutReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration"></a>

```go
func PutReplicationConfiguration(value EfsFileSystemReplicationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

---

##### `ResetAvailabilityZoneName` <a name="ResetAvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName"></a>

```go
func ResetAvailabilityZoneName()
```

##### `ResetBackupPolicy` <a name="ResetBackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBackupPolicy"></a>

```go
func ResetBackupPolicy()
```

##### `ResetBypassPolicyLockoutSafetyCheck` <a name="ResetBypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBypassPolicyLockoutSafetyCheck"></a>

```go
func ResetBypassPolicyLockoutSafetyCheck()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetFileSystemPolicy` <a name="ResetFileSystemPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemPolicy"></a>

```go
func ResetFileSystemPolicy()
```

##### `ResetFileSystemProtection` <a name="ResetFileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemProtection"></a>

```go
func ResetFileSystemProtection()
```

##### `ResetFileSystemTags` <a name="ResetFileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemTags"></a>

```go
func ResetFileSystemTags()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLifecyclePolicies` <a name="ResetLifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetLifecyclePolicies"></a>

```go
func ResetLifecyclePolicies()
```

##### `ResetPerformanceMode` <a name="ResetPerformanceMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetPerformanceMode"></a>

```go
func ResetPerformanceMode()
```

##### `ResetProvisionedThroughputInMibps` <a name="ResetProvisionedThroughputInMibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps"></a>

```go
func ResetProvisionedThroughputInMibps()
```

##### `ResetReplicationConfiguration` <a name="ResetReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetReplicationConfiguration"></a>

```go
func ResetReplicationConfiguration()
```

##### `ResetThroughputMode` <a name="ResetThroughputMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetThroughputMode"></a>

```go
func ResetThroughputMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EfsFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.EfsFileSystem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.EfsFileSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.EfsFileSystem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.EfsFileSystem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EfsFileSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EfsFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EfsFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EfsFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference">EfsFileSystemBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtection">FileSystemProtection</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference">EfsFileSystemFileSystemProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTags">FileSystemTags</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList">EfsFileSystemFileSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePolicies">LifecyclePolicies</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList">EfsFileSystemLifecyclePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference">EfsFileSystemReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput">AvailabilityZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicyInput">BackupPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheckInput">BypassPolicyLockoutSafetyCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicyInput">FileSystemPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtectionInput">FileSystemProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTagsInput">FileSystemTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePoliciesInput">LifecyclePoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceModeInput">PerformanceModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput">ProvisionedThroughputInMibpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfigurationInput">ReplicationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputModeInput">ThroughputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicy">FileSystemPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceMode">PerformanceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps">ProvisionedThroughputInMibps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputMode">ThroughputMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicy"></a>

```go
func BackupPolicy() EfsFileSystemBackupPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference">EfsFileSystemBackupPolicyOutputReference</a>

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `FileSystemProtection`<sup>Required</sup> <a name="FileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtection"></a>

```go
func FileSystemProtection() EfsFileSystemFileSystemProtectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference">EfsFileSystemFileSystemProtectionOutputReference</a>

---

##### `FileSystemTags`<sup>Required</sup> <a name="FileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTags"></a>

```go
func FileSystemTags() EfsFileSystemFileSystemTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList">EfsFileSystemFileSystemTagsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecyclePolicies`<sup>Required</sup> <a name="LifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePolicies"></a>

```go
func LifecyclePolicies() EfsFileSystemLifecyclePoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList">EfsFileSystemLifecyclePoliciesList</a>

---

##### `ReplicationConfiguration`<sup>Required</sup> <a name="ReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfiguration"></a>

```go
func ReplicationConfiguration() EfsFileSystemReplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference">EfsFileSystemReplicationConfigurationOutputReference</a>

---

##### `AvailabilityZoneNameInput`<sup>Optional</sup> <a name="AvailabilityZoneNameInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput"></a>

```go
func AvailabilityZoneNameInput() *string
```

- *Type:* *string

---

##### `BackupPolicyInput`<sup>Optional</sup> <a name="BackupPolicyInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicyInput"></a>

```go
func BackupPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `BypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheckInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheckInput"></a>

```go
func BypassPolicyLockoutSafetyCheckInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `FileSystemPolicyInput`<sup>Optional</sup> <a name="FileSystemPolicyInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicyInput"></a>

```go
func FileSystemPolicyInput() *string
```

- *Type:* *string

---

##### `FileSystemProtectionInput`<sup>Optional</sup> <a name="FileSystemProtectionInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtectionInput"></a>

```go
func FileSystemProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `FileSystemTagsInput`<sup>Optional</sup> <a name="FileSystemTagsInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTagsInput"></a>

```go
func FileSystemTagsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LifecyclePoliciesInput`<sup>Optional</sup> <a name="LifecyclePoliciesInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePoliciesInput"></a>

```go
func LifecyclePoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `PerformanceModeInput`<sup>Optional</sup> <a name="PerformanceModeInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceModeInput"></a>

```go
func PerformanceModeInput() *string
```

- *Type:* *string

---

##### `ProvisionedThroughputInMibpsInput`<sup>Optional</sup> <a name="ProvisionedThroughputInMibpsInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput"></a>

```go
func ProvisionedThroughputInMibpsInput() *f64
```

- *Type:* *f64

---

##### `ReplicationConfigurationInput`<sup>Optional</sup> <a name="ReplicationConfigurationInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfigurationInput"></a>

```go
func ReplicationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ThroughputModeInput`<sup>Optional</sup> <a name="ThroughputModeInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputModeInput"></a>

```go
func ThroughputModeInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneName"></a>

```go
func AvailabilityZoneName() *string
```

- *Type:* *string

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheck"></a>

```go
func BypassPolicyLockoutSafetyCheck() interface{}
```

- *Type:* interface{}

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `FileSystemPolicy`<sup>Required</sup> <a name="FileSystemPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicy"></a>

```go
func FileSystemPolicy() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `PerformanceMode`<sup>Required</sup> <a name="PerformanceMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceMode"></a>

```go
func PerformanceMode() *string
```

- *Type:* *string

---

##### `ProvisionedThroughputInMibps`<sup>Required</sup> <a name="ProvisionedThroughputInMibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps"></a>

```go
func ProvisionedThroughputInMibps() *f64
```

- *Type:* *f64

---

##### `ThroughputMode`<sup>Required</sup> <a name="ThroughputMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputMode"></a>

```go
func ThroughputMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EfsFileSystemBackupPolicy <a name="EfsFileSystemBackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

&efsfilesystem.EfsFileSystemBackupPolicy {
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.property.status">Status</a></code> | <code>*string</code> | Set the backup policy status for the file system. |

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.property.status"></a>

```go
Status *string
```

- *Type:* *string

Set the backup policy status for the file system.

* *ENABLED* - Turns automatic backups on for the file system.
* *DISABLED* - Turns automatic backups off for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#status EfsFileSystem#status}

---

### EfsFileSystemConfig <a name="EfsFileSystemConfig" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

&efsfilesystem.EfsFileSystemConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZoneName: *string,
	BackupPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.efsFileSystem.EfsFileSystemBackupPolicy,
	BypassPolicyLockoutSafetyCheck: interface{},
	Encrypted: interface{},
	FileSystemPolicy: *string,
	FileSystemProtection: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.efsFileSystem.EfsFileSystemFileSystemProtection,
	FileSystemTags: interface{},
	KmsKeyId: *string,
	LifecyclePolicies: interface{},
	PerformanceMode: *string,
	ProvisionedThroughputInMibps: *f64,
	ReplicationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.efsFileSystem.EfsFileSystemReplicationConfiguration,
	ThroughputMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>*string</code> | For One Zone file systems, specify the AWS Availability Zone in which to create the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | Use the ``BackupPolicy`` to turn automatic backups on or off for the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>interface{}</code> | (Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | A Boolean value that, if true, creates an encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemPolicy">FileSystemPolicy</a></code> | <code>*string</code> | The ``FileSystemPolicy`` for the EFS file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemProtection">FileSystemProtection</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | Describes the protection on the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemTags">FileSystemTags</a></code> | <code>interface{}</code> | Use to create one or more tags associated with the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The ID of the kms-key-long to be used to protect the encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicies">LifecyclePolicies</a></code> | <code>interface{}</code> | An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.performanceMode">PerformanceMode</a></code> | <code>*string</code> | The performance mode of the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps">ProvisionedThroughputInMibps</a></code> | <code>*f64</code> | The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | Describes the replication configuration for a specific file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.throughputMode">ThroughputMode</a></code> | <code>*string</code> | Specifies the throughput mode for the file system. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZoneName`<sup>Optional</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName"></a>

```go
AvailabilityZoneName *string
```

- *Type:* *string

For One Zone file systems, specify the AWS Availability Zone in which to create the file system.

Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type) in the *Amazon EFS User Guide*.
One Zone file systems are not available in all Availability Zones in AWS-Regions where Amazon EFS is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}

---

##### `BackupPolicy`<sup>Optional</sup> <a name="BackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.backupPolicy"></a>

```go
BackupPolicy EfsFileSystemBackupPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

Use the ``BackupPolicy`` to turn automatic backups on or off for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#backup_policy EfsFileSystem#backup_policy}

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```go
BypassPolicyLockoutSafetyCheck interface{}
```

- *Type:* interface{}

(Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check.

The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future `PutFileSystemPolicy` requests on this file system. Set `BypassPolicyLockoutSafetyCheck` to `True` only when you intend to prevent the IAM principal that is making the request from making subsequent `PutFileSystemPolicy` requests on this file system. The default value is `False`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#bypass_policy_lockout_safety_check EfsFileSystem#bypass_policy_lockout_safety_check}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

A Boolean value that, if true, creates an encrypted file system.

When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing kms-key-long. If you don't specify a kms-key, then the default kms-key for EFS, `/aws/elasticfilesystem`, is used to protect the encrypted file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#encrypted EfsFileSystem#encrypted}

---

##### `FileSystemPolicy`<sup>Optional</sup> <a name="FileSystemPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemPolicy"></a>

```go
FileSystemPolicy *string
```

- *Type:* *string

The ``FileSystemPolicy`` for the EFS file system.

A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see [Using to control NFS access to Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#file_system_policy EfsFileSystem#file_system_policy}

---

##### `FileSystemProtection`<sup>Optional</sup> <a name="FileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemProtection"></a>

```go
FileSystemProtection EfsFileSystemFileSystemProtection
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

Describes the protection on the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#file_system_protection EfsFileSystem#file_system_protection}

---

##### `FileSystemTags`<sup>Optional</sup> <a name="FileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemTags"></a>

```go
FileSystemTags interface{}
```

- *Type:* interface{}

Use to create one or more tags associated with the file system.

Each tag is a user-defined key-value pair. Name your file system on creation by including a `"Key":"Name","Value":"{value}"` key-value pair. Each key must be unique. For more information, see [Tagging resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *General Reference Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#file_system_tags EfsFileSystem#file_system_tags}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The ID of the kms-key-long to be used to protect the encrypted file system.

This parameter is only required if you want to use a nondefault kms-key. If this parameter is not specified, the default kms-key for EFS is used. This ID can be in one of the following formats:

* Key ID - A unique identifier of the key, for example `1234abcd-12ab-34cd-56ef-1234567890ab`.
* ARN - An Amazon Resource Name (ARN) for the key, for example `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
* Key alias - A previously created display name for a key, for example `alias/projectKey1`.
* Key alias ARN - An ARN for a key alias, for example `arn:aws:kms:us-west-2:444455556666:alias/projectKey1`.

If `KmsKeyId` is specified, the `Encrypted` parameter must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}

---

##### `LifecyclePolicies`<sup>Optional</sup> <a name="LifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicies"></a>

```go
LifecyclePolicies interface{}
```

- *Type:* interface{}

An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object.

A `LifecycleConfiguration` object informs Lifecycle management of the following:

* When to move files in the file system from primary storage to IA storage.
* When to move files in the file system from primary storage or IA storage to Archive storage.
* When to move files that are in IA or Archive storage to primary storage.

EFS requires that each `LifecyclePolicy` object have only a single transition. This means that in a request body, `LifecyclePolicies` needs to be structured as an array of `LifecyclePolicy` objects, one object for each transition, `TransitionToIA`, `TransitionToArchive````TransitionToPrimaryStorageClass`. See the example requests in the following section for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#lifecycle_policies EfsFileSystem#lifecycle_policies}

---

##### `PerformanceMode`<sup>Optional</sup> <a name="PerformanceMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.performanceMode"></a>

```go
PerformanceMode *string
```

- *Type:* *string

The performance mode of the file system.

We recommend `generalPurpose` performance mode for all file systems. File systems using the `maxIO` performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The `maxIO` mode is not supported on One Zone file systems.
Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.
Default is `generalPurpose`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#performance_mode EfsFileSystem#performance_mode}

---

##### `ProvisionedThroughputInMibps`<sup>Optional</sup> <a name="ProvisionedThroughputInMibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps"></a>

```go
ProvisionedThroughputInMibps *f64
```

- *Type:* *f64

The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating.

Required if `ThroughputMode` is set to `provisioned`. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact SUP. For more information, see [Amazon EFS quotas that you can increase](https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}

---

##### `ReplicationConfiguration`<sup>Optional</sup> <a name="ReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.replicationConfiguration"></a>

```go
ReplicationConfiguration EfsFileSystemReplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

Describes the replication configuration for a specific file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#replication_configuration EfsFileSystem#replication_configuration}

---

##### `ThroughputMode`<sup>Optional</sup> <a name="ThroughputMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.throughputMode"></a>

```go
ThroughputMode *string
```

- *Type:* *string

Specifies the throughput mode for the file system.

The mode can be `bursting`, `provisioned`, or `elastic`. If you set `ThroughputMode` to `provisioned`, you must also set a value for `ProvisionedThroughputInMibps`. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see [Specifying throughput with provisioned mode](https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the *Amazon EFS User Guide*.
Default is `bursting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}

---

### EfsFileSystemFileSystemProtection <a name="EfsFileSystemFileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

&efsfilesystem.EfsFileSystemFileSystemProtection {
	ReplicationOverwriteProtection: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.property.replicationOverwriteProtection">ReplicationOverwriteProtection</a></code> | <code>*string</code> | The status of the file system's replication overwrite protection. |

---

##### `ReplicationOverwriteProtection`<sup>Optional</sup> <a name="ReplicationOverwriteProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.property.replicationOverwriteProtection"></a>

```go
ReplicationOverwriteProtection *string
```

- *Type:* *string

The status of the file system's replication overwrite protection.

* `ENABLED` ? The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is `ENABLED` by default.
* `DISABLED` ? The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.
* `REPLICATING` ? The file system is being used as the destination file system in a replication configuration. The file system is read-only and is modified only by EFS replication.

If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#replication_overwrite_protection EfsFileSystem#replication_overwrite_protection}

---

### EfsFileSystemFileSystemTags <a name="EfsFileSystemFileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

&efsfilesystem.EfsFileSystemFileSystemTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.key">Key</a></code> | <code>*string</code> | The tag key (String). The key can't start with ``aws:``. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key (String). The key can't start with ``aws:``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#key EfsFileSystem#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#value EfsFileSystem#value}

---

### EfsFileSystemLifecyclePolicies <a name="EfsFileSystemLifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

&efsfilesystem.EfsFileSystemLifecyclePolicies {
	TransitionToArchive: *string,
	TransitionToIa: *string,
	TransitionToPrimaryStorageClass: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToArchive">TransitionToArchive</a></code> | <code>*string</code> | The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToIa">TransitionToIa</a></code> | <code>*string</code> | The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToPrimaryStorageClass">TransitionToPrimaryStorageClass</a></code> | <code>*string</code> | Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage. |

---

##### `TransitionToArchive`<sup>Optional</sup> <a name="TransitionToArchive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToArchive"></a>

```go
TransitionToArchive *string
```

- *Type:* *string

The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#transition_to_archive EfsFileSystem#transition_to_archive}

---

##### `TransitionToIa`<sup>Optional</sup> <a name="TransitionToIa" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToIa"></a>

```go
TransitionToIa *string
```

- *Type:* *string

The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}

---

##### `TransitionToPrimaryStorageClass`<sup>Optional</sup> <a name="TransitionToPrimaryStorageClass" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToPrimaryStorageClass"></a>

```go
TransitionToPrimaryStorageClass *string
```

- *Type:* *string

Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}

---

### EfsFileSystemReplicationConfiguration <a name="EfsFileSystemReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

&efsfilesystem.EfsFileSystemReplicationConfiguration {
	Destinations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.property.destinations">Destinations</a></code> | <code>interface{}</code> | An array of destination objects. Only one destination object is supported. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

An array of destination objects. Only one destination object is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#destinations EfsFileSystem#destinations}

---

### EfsFileSystemReplicationConfigurationDestinations <a name="EfsFileSystemReplicationConfigurationDestinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

&efsfilesystem.EfsFileSystemReplicationConfigurationDestinations {
	AvailabilityZoneName: *string,
	FileSystemId: *string,
	KmsKeyId: *string,
	Region: *string,
	RoleArn: *string,
	Status: *string,
	StatusMessage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>*string</code> | For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | The ID of the destination Amazon EFS file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The ID of an kms-key-long used to protect the encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.region">Region</a></code> | <code>*string</code> | The AWS-Region in which the destination file system is located. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the current source file system in the replication configuration. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.status">Status</a></code> | <code>*string</code> | Describes the status of the replication configuration. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | Message that provides details about the ``PAUSED`` or ``ERRROR`` state of the replication destination configuration. |

---

##### `AvailabilityZoneName`<sup>Optional</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.availabilityZoneName"></a>

```go
AvailabilityZoneName *string
```

- *Type:* *string

For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located.

Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html) in the *Amazon EFS User Guide*.
One Zone file system type is not available in all Availability Zones in AWS-Regions where Amazon EFS is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}

---

##### `FileSystemId`<sup>Optional</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.fileSystemId"></a>

```go
FileSystemId *string
```

- *Type:* *string

The ID of the destination Amazon EFS file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#file_system_id EfsFileSystem#file_system_id}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The ID of an kms-key-long used to protect the encrypted file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.region"></a>

```go
Region *string
```

- *Type:* *string

The AWS-Region in which the destination file system is located.

For One Zone file systems, the replication configuration must specify the AWS-Region in which the destination file system is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#region EfsFileSystem#region}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the current source file system in the replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#role_arn EfsFileSystem#role_arn}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.status"></a>

```go
Status *string
```

- *Type:* *string

Describes the status of the replication configuration.

For more information about replication status, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#status EfsFileSystem#status}

---

##### `StatusMessage`<sup>Optional</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.statusMessage"></a>

```go
StatusMessage *string
```

- *Type:* *string

Message that provides details about the ``PAUSED`` or ``ERRROR`` state of the replication destination configuration.

For more information about replication status messages, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_file_system#status_message EfsFileSystem#status_message}

---

## Classes <a name="Classes" id="Classes"></a>

### EfsFileSystemBackupPolicyOutputReference <a name="EfsFileSystemBackupPolicyOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.NewEfsFileSystemBackupPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EfsFileSystemBackupPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EfsFileSystemFileSystemProtectionOutputReference <a name="EfsFileSystemFileSystemProtectionOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.NewEfsFileSystemFileSystemProtectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EfsFileSystemFileSystemProtectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resetReplicationOverwriteProtection">ResetReplicationOverwriteProtection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplicationOverwriteProtection` <a name="ResetReplicationOverwriteProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resetReplicationOverwriteProtection"></a>

```go
func ResetReplicationOverwriteProtection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtectionInput">ReplicationOverwriteProtectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtection">ReplicationOverwriteProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplicationOverwriteProtectionInput`<sup>Optional</sup> <a name="ReplicationOverwriteProtectionInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtectionInput"></a>

```go
func ReplicationOverwriteProtectionInput() *string
```

- *Type:* *string

---

##### `ReplicationOverwriteProtection`<sup>Required</sup> <a name="ReplicationOverwriteProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtection"></a>

```go
func ReplicationOverwriteProtection() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EfsFileSystemFileSystemTagsList <a name="EfsFileSystemFileSystemTagsList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.NewEfsFileSystemFileSystemTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EfsFileSystemFileSystemTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get"></a>

```go
func Get(index *f64) EfsFileSystemFileSystemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EfsFileSystemFileSystemTagsOutputReference <a name="EfsFileSystemFileSystemTagsOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.NewEfsFileSystemFileSystemTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EfsFileSystemFileSystemTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EfsFileSystemLifecyclePoliciesList <a name="EfsFileSystemLifecyclePoliciesList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.NewEfsFileSystemLifecyclePoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EfsFileSystemLifecyclePoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get"></a>

```go
func Get(index *f64) EfsFileSystemLifecyclePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EfsFileSystemLifecyclePoliciesOutputReference <a name="EfsFileSystemLifecyclePoliciesOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.NewEfsFileSystemLifecyclePoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EfsFileSystemLifecyclePoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToArchive">ResetTransitionToArchive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToIa">ResetTransitionToIa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToPrimaryStorageClass">ResetTransitionToPrimaryStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransitionToArchive` <a name="ResetTransitionToArchive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToArchive"></a>

```go
func ResetTransitionToArchive()
```

##### `ResetTransitionToIa` <a name="ResetTransitionToIa" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToIa"></a>

```go
func ResetTransitionToIa()
```

##### `ResetTransitionToPrimaryStorageClass` <a name="ResetTransitionToPrimaryStorageClass" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToPrimaryStorageClass"></a>

```go
func ResetTransitionToPrimaryStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchiveInput">TransitionToArchiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIaInput">TransitionToIaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClassInput">TransitionToPrimaryStorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchive">TransitionToArchive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIa">TransitionToIa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClass">TransitionToPrimaryStorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TransitionToArchiveInput`<sup>Optional</sup> <a name="TransitionToArchiveInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchiveInput"></a>

```go
func TransitionToArchiveInput() *string
```

- *Type:* *string

---

##### `TransitionToIaInput`<sup>Optional</sup> <a name="TransitionToIaInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIaInput"></a>

```go
func TransitionToIaInput() *string
```

- *Type:* *string

---

##### `TransitionToPrimaryStorageClassInput`<sup>Optional</sup> <a name="TransitionToPrimaryStorageClassInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClassInput"></a>

```go
func TransitionToPrimaryStorageClassInput() *string
```

- *Type:* *string

---

##### `TransitionToArchive`<sup>Required</sup> <a name="TransitionToArchive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchive"></a>

```go
func TransitionToArchive() *string
```

- *Type:* *string

---

##### `TransitionToIa`<sup>Required</sup> <a name="TransitionToIa" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIa"></a>

```go
func TransitionToIa() *string
```

- *Type:* *string

---

##### `TransitionToPrimaryStorageClass`<sup>Required</sup> <a name="TransitionToPrimaryStorageClass" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClass"></a>

```go
func TransitionToPrimaryStorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EfsFileSystemReplicationConfigurationDestinationsList <a name="EfsFileSystemReplicationConfigurationDestinationsList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.NewEfsFileSystemReplicationConfigurationDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EfsFileSystemReplicationConfigurationDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get"></a>

```go
func Get(index *f64) EfsFileSystemReplicationConfigurationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EfsFileSystemReplicationConfigurationDestinationsOutputReference <a name="EfsFileSystemReplicationConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.NewEfsFileSystemReplicationConfigurationDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EfsFileSystemReplicationConfigurationDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetAvailabilityZoneName">ResetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetFileSystemId">ResetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatusMessage">ResetStatusMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZoneName` <a name="ResetAvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetAvailabilityZoneName"></a>

```go
func ResetAvailabilityZoneName()
```

##### `ResetFileSystemId` <a name="ResetFileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetFileSystemId"></a>

```go
func ResetFileSystemId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetStatusMessage` <a name="ResetStatusMessage" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatusMessage"></a>

```go
func ResetStatusMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneNameInput">AvailabilityZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessageInput">StatusMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneNameInput`<sup>Optional</sup> <a name="AvailabilityZoneNameInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneNameInput"></a>

```go
func AvailabilityZoneNameInput() *string
```

- *Type:* *string

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemIdInput"></a>

```go
func FileSystemIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `StatusMessageInput`<sup>Optional</sup> <a name="StatusMessageInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessageInput"></a>

```go
func StatusMessageInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneName"></a>

```go
func AvailabilityZoneName() *string
```

- *Type:* *string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EfsFileSystemReplicationConfigurationOutputReference <a name="EfsFileSystemReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/efsfilesystem"

efsfilesystem.NewEfsFileSystemReplicationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EfsFileSystemReplicationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList">EfsFileSystemReplicationConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinations"></a>

```go
func Destinations() EfsFileSystemReplicationConfigurationDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList">EfsFileSystemReplicationConfigurationDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



