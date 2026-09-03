# `s3FilesFileSystem` Submodule <a name="`s3FilesFileSystem` Submodule" id="@cdktn/provider-awscc.s3FilesFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesFileSystem <a name="S3FilesFileSystem" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system awscc_s3files_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

s3filesfilesystem.NewS3FilesFileSystem(scope Construct, id *string, config S3FilesFileSystemConfig) S3FilesFileSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig">S3FilesFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig">S3FilesFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putSynchronizationConfiguration">PutSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetAcceptBucketWarning">ResetAcceptBucketWarning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetSynchronizationConfiguration">ResetSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSynchronizationConfiguration` <a name="PutSynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putSynchronizationConfiguration"></a>

```go
func PutSynchronizationConfiguration(value S3FilesFileSystemSynchronizationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putSynchronizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAcceptBucketWarning` <a name="ResetAcceptBucketWarning" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetAcceptBucketWarning"></a>

```go
func ResetAcceptBucketWarning()
```

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetClientToken"></a>

```go
func ResetClientToken()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSynchronizationConfiguration` <a name="ResetSynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetSynchronizationConfiguration"></a>

```go
func ResetSynchronizationConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3FilesFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

s3filesfilesystem.S3FilesFileSystem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

s3filesfilesystem.S3FilesFileSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

s3filesfilesystem.S3FilesFileSystem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

s3filesfilesystem.S3FilesFileSystem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a S3FilesFileSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3FilesFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3FilesFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemArn">FileSystemArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfiguration">SynchronizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference">S3FilesFileSystemSynchronizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList">S3FilesFileSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarningInput">AcceptBucketWarningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientTokenInput">ClientTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfigurationInput">SynchronizationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarning">AcceptBucketWarning</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `FileSystemArn`<sup>Required</sup> <a name="FileSystemArn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemArn"></a>

```go
func FileSystemArn() *string
```

- *Type:* *string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `SynchronizationConfiguration`<sup>Required</sup> <a name="SynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfiguration"></a>

```go
func SynchronizationConfiguration() S3FilesFileSystemSynchronizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference">S3FilesFileSystemSynchronizationConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tags"></a>

```go
func Tags() S3FilesFileSystemTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList">S3FilesFileSystemTagsList</a>

---

##### `AcceptBucketWarningInput`<sup>Optional</sup> <a name="AcceptBucketWarningInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarningInput"></a>

```go
func AcceptBucketWarningInput() interface{}
```

- *Type:* interface{}

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientTokenInput"></a>

```go
func ClientTokenInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SynchronizationConfigurationInput`<sup>Optional</sup> <a name="SynchronizationConfigurationInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfigurationInput"></a>

```go
func SynchronizationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptBucketWarning`<sup>Required</sup> <a name="AcceptBucketWarning" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarning"></a>

```go
func AcceptBucketWarning() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesFileSystemConfig <a name="S3FilesFileSystemConfig" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

&s3filesfilesystem.S3FilesFileSystemConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	RoleArn: *string,
	AcceptBucketWarning: interface{},
	ClientToken: *string,
	KmsKeyId: *string,
	Prefix: *string,
	SynchronizationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#bucket S3FilesFileSystem#bucket}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#role_arn S3FilesFileSystem#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.acceptBucketWarning">AcceptBucketWarning</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#accept_bucket_warning S3FilesFileSystem#accept_bucket_warning}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.clientToken">ClientToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#client_token S3FilesFileSystem#client_token}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#kms_key_id S3FilesFileSystem#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.synchronizationConfiguration">SynchronizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#synchronization_configuration S3FilesFileSystem#synchronization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#tags S3FilesFileSystem#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#bucket S3FilesFileSystem#bucket}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#role_arn S3FilesFileSystem#role_arn}.

---

##### `AcceptBucketWarning`<sup>Optional</sup> <a name="AcceptBucketWarning" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.acceptBucketWarning"></a>

```go
AcceptBucketWarning interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#accept_bucket_warning S3FilesFileSystem#accept_bucket_warning}.

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.clientToken"></a>

```go
ClientToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#client_token S3FilesFileSystem#client_token}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#kms_key_id S3FilesFileSystem#kms_key_id}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}.

---

##### `SynchronizationConfiguration`<sup>Optional</sup> <a name="SynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.synchronizationConfiguration"></a>

```go
SynchronizationConfiguration S3FilesFileSystemSynchronizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#synchronization_configuration S3FilesFileSystem#synchronization_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#tags S3FilesFileSystem#tags}.

---

### S3FilesFileSystemSynchronizationConfiguration <a name="S3FilesFileSystemSynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

&s3filesfilesystem.S3FilesFileSystemSynchronizationConfiguration {
	ExpirationDataRules: interface{},
	ImportDataRules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.expirationDataRules">ExpirationDataRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#expiration_data_rules S3FilesFileSystem#expiration_data_rules}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.importDataRules">ImportDataRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#import_data_rules S3FilesFileSystem#import_data_rules}. |

---

##### `ExpirationDataRules`<sup>Optional</sup> <a name="ExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.expirationDataRules"></a>

```go
ExpirationDataRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#expiration_data_rules S3FilesFileSystem#expiration_data_rules}.

---

##### `ImportDataRules`<sup>Optional</sup> <a name="ImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.importDataRules"></a>

```go
ImportDataRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#import_data_rules S3FilesFileSystem#import_data_rules}.

---

### S3FilesFileSystemSynchronizationConfigurationExpirationDataRules <a name="S3FilesFileSystemSynchronizationConfigurationExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

&s3filesfilesystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules {
	DaysAfterLastAccess: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules.property.daysAfterLastAccess">DaysAfterLastAccess</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#days_after_last_access S3FilesFileSystem#days_after_last_access}. |

---

##### `DaysAfterLastAccess`<sup>Optional</sup> <a name="DaysAfterLastAccess" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules.property.daysAfterLastAccess"></a>

```go
DaysAfterLastAccess *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#days_after_last_access S3FilesFileSystem#days_after_last_access}.

---

### S3FilesFileSystemSynchronizationConfigurationImportDataRules <a name="S3FilesFileSystemSynchronizationConfigurationImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

&s3filesfilesystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules {
	Prefix: *string,
	SizeLessThan: *f64,
	Trigger: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.sizeLessThan">SizeLessThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#size_less_than S3FilesFileSystem#size_less_than}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.trigger">Trigger</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#trigger S3FilesFileSystem#trigger}. |

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}.

---

##### `SizeLessThan`<sup>Optional</sup> <a name="SizeLessThan" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.sizeLessThan"></a>

```go
SizeLessThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#size_less_than S3FilesFileSystem#size_less_than}.

---

##### `Trigger`<sup>Optional</sup> <a name="Trigger" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.trigger"></a>

```go
Trigger *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#trigger S3FilesFileSystem#trigger}.

---

### S3FilesFileSystemTags <a name="S3FilesFileSystemTags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

&s3filesfilesystem.S3FilesFileSystemTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#key S3FilesFileSystem#key}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#value S3FilesFileSystem#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#key S3FilesFileSystem#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#value S3FilesFileSystem#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList <a name="S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

s3filesfilesystem.NewS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get"></a>

```go
func Get(index *f64) S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference <a name="S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

s3filesfilesystem.NewS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resetDaysAfterLastAccess">ResetDaysAfterLastAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysAfterLastAccess` <a name="ResetDaysAfterLastAccess" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resetDaysAfterLastAccess"></a>

```go
func ResetDaysAfterLastAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccessInput">DaysAfterLastAccessInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccess">DaysAfterLastAccess</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysAfterLastAccessInput`<sup>Optional</sup> <a name="DaysAfterLastAccessInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccessInput"></a>

```go
func DaysAfterLastAccessInput() *f64
```

- *Type:* *f64

---

##### `DaysAfterLastAccess`<sup>Required</sup> <a name="DaysAfterLastAccess" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccess"></a>

```go
func DaysAfterLastAccess() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3FilesFileSystemSynchronizationConfigurationImportDataRulesList <a name="S3FilesFileSystemSynchronizationConfigurationImportDataRulesList" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

s3filesfilesystem.NewS3FilesFileSystemSynchronizationConfigurationImportDataRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3FilesFileSystemSynchronizationConfigurationImportDataRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get"></a>

```go
func Get(index *f64) S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference <a name="S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

s3filesfilesystem.NewS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetSizeLessThan">ResetSizeLessThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetTrigger">ResetTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSizeLessThan` <a name="ResetSizeLessThan" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetSizeLessThan"></a>

```go
func ResetSizeLessThan()
```

##### `ResetTrigger` <a name="ResetTrigger" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetTrigger"></a>

```go
func ResetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThanInput">SizeLessThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.triggerInput">TriggerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThan">SizeLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.trigger">Trigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SizeLessThanInput`<sup>Optional</sup> <a name="SizeLessThanInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThanInput"></a>

```go
func SizeLessThanInput() *f64
```

- *Type:* *f64

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.triggerInput"></a>

```go
func TriggerInput() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `SizeLessThan`<sup>Required</sup> <a name="SizeLessThan" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThan"></a>

```go
func SizeLessThan() *f64
```

- *Type:* *f64

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.trigger"></a>

```go
func Trigger() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3FilesFileSystemSynchronizationConfigurationOutputReference <a name="S3FilesFileSystemSynchronizationConfigurationOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

s3filesfilesystem.NewS3FilesFileSystemSynchronizationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3FilesFileSystemSynchronizationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putExpirationDataRules">PutExpirationDataRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putImportDataRules">PutImportDataRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetExpirationDataRules">ResetExpirationDataRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetImportDataRules">ResetImportDataRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpirationDataRules` <a name="PutExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putExpirationDataRules"></a>

```go
func PutExpirationDataRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putExpirationDataRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImportDataRules` <a name="PutImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putImportDataRules"></a>

```go
func PutImportDataRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putImportDataRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExpirationDataRules` <a name="ResetExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetExpirationDataRules"></a>

```go
func ResetExpirationDataRules()
```

##### `ResetImportDataRules` <a name="ResetImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetImportDataRules"></a>

```go
func ResetImportDataRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRules">ExpirationDataRules</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList">S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRules">ImportDataRules</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList">S3FilesFileSystemSynchronizationConfigurationImportDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.latestVersionNumber">LatestVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRulesInput">ExpirationDataRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRulesInput">ImportDataRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationDataRules`<sup>Required</sup> <a name="ExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRules"></a>

```go
func ExpirationDataRules() S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList">S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList</a>

---

##### `ImportDataRules`<sup>Required</sup> <a name="ImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRules"></a>

```go
func ImportDataRules() S3FilesFileSystemSynchronizationConfigurationImportDataRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList">S3FilesFileSystemSynchronizationConfigurationImportDataRulesList</a>

---

##### `LatestVersionNumber`<sup>Required</sup> <a name="LatestVersionNumber" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.latestVersionNumber"></a>

```go
func LatestVersionNumber() *f64
```

- *Type:* *f64

---

##### `ExpirationDataRulesInput`<sup>Optional</sup> <a name="ExpirationDataRulesInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRulesInput"></a>

```go
func ExpirationDataRulesInput() interface{}
```

- *Type:* interface{}

---

##### `ImportDataRulesInput`<sup>Optional</sup> <a name="ImportDataRulesInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRulesInput"></a>

```go
func ImportDataRulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3FilesFileSystemTagsList <a name="S3FilesFileSystemTagsList" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

s3filesfilesystem.NewS3FilesFileSystemTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3FilesFileSystemTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.get"></a>

```go
func Get(index *f64) S3FilesFileSystemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3FilesFileSystemTagsOutputReference <a name="S3FilesFileSystemTagsOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3filesfilesystem"

s3filesfilesystem.NewS3FilesFileSystemTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3FilesFileSystemTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



