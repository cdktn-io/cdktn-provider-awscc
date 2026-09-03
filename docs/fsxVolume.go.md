# `fsxVolume` Submodule <a name="`fsxVolume` Submodule" id="@cdktn/provider-awscc.fsxVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxVolume <a name="FsxVolume" id="@cdktn/provider-awscc.fsxVolume.FsxVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume awscc_fsx_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolume(scope Construct, id *string, config FsxVolumeConfig) FsxVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig">FsxVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig">FsxVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration">PutOntapConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration">PutOpenZfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOntapConfiguration">ResetOntapConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOpenZfsConfiguration">ResetOpenZfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOntapConfiguration` <a name="PutOntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration"></a>

```go
func PutOntapConfiguration(value FsxVolumeOntapConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

---

##### `PutOpenZfsConfiguration` <a name="PutOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration"></a>

```go
func PutOpenZfsConfiguration(value FsxVolumeOpenZfsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBackupId` <a name="ResetBackupId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetBackupId"></a>

```go
func ResetBackupId()
```

##### `ResetOntapConfiguration` <a name="ResetOntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOntapConfiguration"></a>

```go
func ResetOntapConfiguration()
```

##### `ResetOpenZfsConfiguration` <a name="ResetOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOpenZfsConfiguration"></a>

```go
func ResetOpenZfsConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetVolumeType"></a>

```go
func ResetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FsxVolume resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.FsxVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.FsxVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.FsxVolume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.FsxVolume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a FsxVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FsxVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FsxVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the FsxVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfiguration">OntapConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference">FsxVolumeOntapConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfiguration">OpenZfsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference">FsxVolumeOpenZfsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList">FsxVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupIdInput">BackupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfigurationInput">OntapConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfigurationInput">OpenZfsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupId">BackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OntapConfiguration`<sup>Required</sup> <a name="OntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfiguration"></a>

```go
func OntapConfiguration() FsxVolumeOntapConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference">FsxVolumeOntapConfigurationOutputReference</a>

---

##### `OpenZfsConfiguration`<sup>Required</sup> <a name="OpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfiguration"></a>

```go
func OpenZfsConfiguration() FsxVolumeOpenZfsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference">FsxVolumeOpenZfsConfigurationOutputReference</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tags"></a>

```go
func Tags() FsxVolumeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList">FsxVolumeTagsList</a>

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupIdInput"></a>

```go
func BackupIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OntapConfigurationInput`<sup>Optional</sup> <a name="OntapConfigurationInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfigurationInput"></a>

```go
func OntapConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `OpenZfsConfigurationInput`<sup>Optional</sup> <a name="OpenZfsConfigurationInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfigurationInput"></a>

```go
func OpenZfsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupId"></a>

```go
func BackupId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxVolumeConfig <a name="FsxVolumeConfig" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	BackupId: *string,
	OntapConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxVolume.FsxVolumeOntapConfiguration,
	OpenZfsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxVolume.FsxVolumeOpenZfsConfiguration,
	Tags: interface{},
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.name">Name</a></code> | <code>*string</code> | The name of the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.backupId">BackupId</a></code> | <code>*string</code> | Specifies the ID of the volume backup to use to create a new volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.ontapConfiguration">OntapConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a></code> | The configuration of an Amazon FSx for NetApp ONTAP volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.openZfsConfiguration">OpenZfsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a></code> | The configuration of an Amazon FSx for OpenZFS volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.tags">Tags</a></code> | <code>interface{}</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.volumeType">VolumeType</a></code> | <code>*string</code> | The type of the volume. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#name FsxVolume#name}

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.backupId"></a>

```go
BackupId *string
```

- *Type:* *string

Specifies the ID of the volume backup to use to create a new volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#backup_id FsxVolume#backup_id}

---

##### `OntapConfiguration`<sup>Optional</sup> <a name="OntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.ontapConfiguration"></a>

```go
OntapConfiguration FsxVolumeOntapConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

The configuration of an Amazon FSx for NetApp ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#ontap_configuration FsxVolume#ontap_configuration}

---

##### `OpenZfsConfiguration`<sup>Optional</sup> <a name="OpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.openZfsConfiguration"></a>

```go
OpenZfsConfiguration FsxVolumeOpenZfsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

The configuration of an Amazon FSx for OpenZFS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#open_zfs_configuration FsxVolume#open_zfs_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#tags FsxVolume#tags}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

The type of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_type FsxVolume#volume_type}

---

### FsxVolumeOntapConfiguration <a name="FsxVolumeOntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOntapConfiguration {
	AggregateConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration,
	CopyTagsToBackups: *string,
	JunctionPath: *string,
	OntapVolumeType: *string,
	SecurityStyle: *string,
	SizeInBytes: *string,
	SizeInMegabytes: *string,
	SnaplockConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration,
	SnapshotPolicy: *string,
	StorageEfficiencyEnabled: *string,
	StorageVirtualMachineId: *string,
	TieringPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy,
	VolumeStyle: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.aggregateConfiguration">AggregateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a></code> | Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>*string</code> | A boolean flag indicating whether tags for the volume should be copied to backups. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.junctionPath">JunctionPath</a></code> | <code>*string</code> | Specifies the location in the SVM's namespace where the volume is mounted. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.ontapVolumeType">OntapVolumeType</a></code> | <code>*string</code> | Specifies the type of volume you are creating. Valid values are the following: RW or DP. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | Specifies the security style for the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInBytes">SizeInBytes</a></code> | <code>*string</code> | Specifies the configured size of the volume, in bytes. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInMegabytes">SizeInMegabytes</a></code> | <code>*string</code> | Use SizeInBytes instead. Specifies the size of the volume, in megabytes (MB), that you are creating. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snaplockConfiguration">SnaplockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a></code> | The SnapLock configuration object for an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snapshotPolicy">SnapshotPolicy</a></code> | <code>*string</code> | Specifies the snapshot policy for the volume. There are three built-in snapshot policies: default, default-1weekly, none. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageEfficiencyEnabled">StorageEfficiencyEnabled</a></code> | <code>*string</code> | Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageVirtualMachineId">StorageVirtualMachineId</a></code> | <code>*string</code> | Specifies the ONTAP SVM in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a></code> | Describes the data tiering policy for an ONTAP volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.volumeStyle">VolumeStyle</a></code> | <code>*string</code> | Use to specify the style of an ONTAP volume. |

---

##### `AggregateConfiguration`<sup>Optional</sup> <a name="AggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.aggregateConfiguration"></a>

```go
AggregateConfiguration FsxVolumeOntapConfigurationAggregateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#aggregate_configuration FsxVolume#aggregate_configuration}

---

##### `CopyTagsToBackups`<sup>Optional</sup> <a name="CopyTagsToBackups" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.copyTagsToBackups"></a>

```go
CopyTagsToBackups *string
```

- *Type:* *string

A boolean flag indicating whether tags for the volume should be copied to backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_tags_to_backups FsxVolume#copy_tags_to_backups}

---

##### `JunctionPath`<sup>Optional</sup> <a name="JunctionPath" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.junctionPath"></a>

```go
JunctionPath *string
```

- *Type:* *string

Specifies the location in the SVM's namespace where the volume is mounted.

This parameter is required. The JunctionPath must have a leading forward slash, such as /vol3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#junction_path FsxVolume#junction_path}

---

##### `OntapVolumeType`<sup>Optional</sup> <a name="OntapVolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.ontapVolumeType"></a>

```go
OntapVolumeType *string
```

- *Type:* *string

Specifies the type of volume you are creating. Valid values are the following: RW or DP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#ontap_volume_type FsxVolume#ontap_volume_type}

---

##### `SecurityStyle`<sup>Optional</sup> <a name="SecurityStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.securityStyle"></a>

```go
SecurityStyle *string
```

- *Type:* *string

Specifies the security style for the volume.

If a volume's security style is not specified, it is automatically set to the root volume's security style.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#security_style FsxVolume#security_style}

---

##### `SizeInBytes`<sup>Optional</sup> <a name="SizeInBytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInBytes"></a>

```go
SizeInBytes *string
```

- *Type:* *string

Specifies the configured size of the volume, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#size_in_bytes FsxVolume#size_in_bytes}

---

##### `SizeInMegabytes`<sup>Optional</sup> <a name="SizeInMegabytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInMegabytes"></a>

```go
SizeInMegabytes *string
```

- *Type:* *string

Use SizeInBytes instead. Specifies the size of the volume, in megabytes (MB), that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#size_in_megabytes FsxVolume#size_in_megabytes}

---

##### `SnaplockConfiguration`<sup>Optional</sup> <a name="SnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snaplockConfiguration"></a>

```go
SnaplockConfiguration FsxVolumeOntapConfigurationSnaplockConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

The SnapLock configuration object for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snaplock_configuration FsxVolume#snaplock_configuration}

---

##### `SnapshotPolicy`<sup>Optional</sup> <a name="SnapshotPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snapshotPolicy"></a>

```go
SnapshotPolicy *string
```

- *Type:* *string

Specifies the snapshot policy for the volume. There are three built-in snapshot policies: default, default-1weekly, none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snapshot_policy FsxVolume#snapshot_policy}

---

##### `StorageEfficiencyEnabled`<sup>Optional</sup> <a name="StorageEfficiencyEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageEfficiencyEnabled"></a>

```go
StorageEfficiencyEnabled *string
```

- *Type:* *string

Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_efficiency_enabled FsxVolume#storage_efficiency_enabled}

---

##### `StorageVirtualMachineId`<sup>Optional</sup> <a name="StorageVirtualMachineId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageVirtualMachineId"></a>

```go
StorageVirtualMachineId *string
```

- *Type:* *string

Specifies the ONTAP SVM in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_virtual_machine_id FsxVolume#storage_virtual_machine_id}

---

##### `TieringPolicy`<sup>Optional</sup> <a name="TieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.tieringPolicy"></a>

```go
TieringPolicy FsxVolumeOntapConfigurationTieringPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

Describes the data tiering policy for an ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#tiering_policy FsxVolume#tiering_policy}

---

##### `VolumeStyle`<sup>Optional</sup> <a name="VolumeStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.volumeStyle"></a>

```go
VolumeStyle *string
```

- *Type:* *string

Use to specify the style of an ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_style FsxVolume#volume_style}

---

### FsxVolumeOntapConfigurationAggregateConfiguration <a name="FsxVolumeOntapConfigurationAggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOntapConfigurationAggregateConfiguration {
	Aggregates: *[]*string,
	ConstituentsPerAggregate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.aggregates">Aggregates</a></code> | <code>*[]*string</code> | The list of aggregates that this volume resides on. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.constituentsPerAggregate">ConstituentsPerAggregate</a></code> | <code>*f64</code> | Used to explicitly set the number of constituents within the FlexGroup per storage aggregate. |

---

##### `Aggregates`<sup>Optional</sup> <a name="Aggregates" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.aggregates"></a>

```go
Aggregates *[]*string
```

- *Type:* *[]*string

The list of aggregates that this volume resides on.

Aggregates are storage pools which make up your primary storage tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#aggregates FsxVolume#aggregates}

---

##### `ConstituentsPerAggregate`<sup>Optional</sup> <a name="ConstituentsPerAggregate" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.constituentsPerAggregate"></a>

```go
ConstituentsPerAggregate *f64
```

- *Type:* *f64

Used to explicitly set the number of constituents within the FlexGroup per storage aggregate.

This field is optional when creating a FlexGroup volume. If unspecified, the default value will be 8. This field cannot be provided when creating a FlexVol volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#constituents_per_aggregate FsxVolume#constituents_per_aggregate}

---

### FsxVolumeOntapConfigurationSnaplockConfiguration <a name="FsxVolumeOntapConfigurationSnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOntapConfigurationSnaplockConfiguration {
	AuditLogVolume: *string,
	AutocommitPeriod: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod,
	PrivilegedDelete: *string,
	RetentionPeriod: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod,
	SnaplockType: *string,
	VolumeAppendModeEnabled: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.auditLogVolume">AuditLogVolume</a></code> | <code>*string</code> | Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.autocommitPeriod">AutocommitPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a></code> | The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.privilegedDelete">PrivilegedDelete</a></code> | <code>*string</code> | Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.retentionPeriod">RetentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a></code> | Specifies the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.snaplockType">SnaplockType</a></code> | <code>*string</code> | Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.volumeAppendModeEnabled">VolumeAppendModeEnabled</a></code> | <code>*string</code> | Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume. |

---

##### `AuditLogVolume`<sup>Optional</sup> <a name="AuditLogVolume" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.auditLogVolume"></a>

```go
AuditLogVolume *string
```

- *Type:* *string

Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#audit_log_volume FsxVolume#audit_log_volume}

---

##### `AutocommitPeriod`<sup>Optional</sup> <a name="AutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.autocommitPeriod"></a>

```go
AutocommitPeriod FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#autocommit_period FsxVolume#autocommit_period}

---

##### `PrivilegedDelete`<sup>Optional</sup> <a name="PrivilegedDelete" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.privilegedDelete"></a>

```go
PrivilegedDelete *string
```

- *Type:* *string

Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#privileged_delete FsxVolume#privileged_delete}

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.retentionPeriod"></a>

```go
RetentionPeriod FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

Specifies the retention period of an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#retention_period FsxVolume#retention_period}

---

##### `SnaplockType`<sup>Optional</sup> <a name="SnaplockType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.snaplockType"></a>

```go
SnaplockType *string
```

- *Type:* *string

Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snaplock_type FsxVolume#snaplock_type}

---

##### `VolumeAppendModeEnabled`<sup>Optional</sup> <a name="VolumeAppendModeEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.volumeAppendModeEnabled"></a>

```go
VolumeAppendModeEnabled *string
```

- *Type:* *string

Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_append_mode_enabled FsxVolume#volume_append_mode_enabled}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod <a name="FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod {
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.type">Type</a></code> | <code>*string</code> | Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.value">Value</a></code> | <code>*f64</code> | Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.type"></a>

```go
Type *string
```

- *Type:* *string

Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.

Setting this value to NONE disables autocommit. The default value is NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod {
	DefaultRetention: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention,
	MaximumRetention: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention,
	MinimumRetention: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.defaultRetention">DefaultRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.maximumRetention">MaximumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.minimumRetention">MinimumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. |

---

##### `DefaultRetention`<sup>Optional</sup> <a name="DefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.defaultRetention"></a>

```go
DefaultRetention FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#default_retention FsxVolume#default_retention}

---

##### `MaximumRetention`<sup>Optional</sup> <a name="MaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.maximumRetention"></a>

```go
MaximumRetention FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#maximum_retention FsxVolume#maximum_retention}

---

##### `MinimumRetention`<sup>Optional</sup> <a name="MinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.minimumRetention"></a>

```go
MinimumRetention FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#minimum_retention FsxVolume#minimum_retention}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention {
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.type">Type</a></code> | <code>*string</code> | Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.value">Value</a></code> | <code>*f64</code> | Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.type"></a>

```go
Type *string
```

- *Type:* *string

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention {
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.type">Type</a></code> | <code>*string</code> | Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.value">Value</a></code> | <code>*f64</code> | Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.type"></a>

```go
Type *string
```

- *Type:* *string

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention {
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.type">Type</a></code> | <code>*string</code> | Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.value">Value</a></code> | <code>*f64</code> | Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.type"></a>

```go
Type *string
```

- *Type:* *string

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationTieringPolicy <a name="FsxVolumeOntapConfigurationTieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOntapConfigurationTieringPolicy {
	CoolingPeriod: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.coolingPeriod">CoolingPeriod</a></code> | <code>*f64</code> | Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.name">Name</a></code> | <code>*string</code> | Specifies the tiering policy used to transition data. Default value is SNAPSHOT_ONLY. |

---

##### `CoolingPeriod`<sup>Optional</sup> <a name="CoolingPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.coolingPeriod"></a>

```go
CoolingPeriod *f64
```

- *Type:* *f64

Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#cooling_period FsxVolume#cooling_period}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the tiering policy used to transition data. Default value is SNAPSHOT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#name FsxVolume#name}

---

### FsxVolumeOpenZfsConfiguration <a name="FsxVolumeOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOpenZfsConfiguration {
	CopyTagsToSnapshots: interface{},
	DataCompressionType: *string,
	NfsExports: interface{},
	Options: *[]*string,
	OriginSnapshot: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot,
	ParentVolumeId: *string,
	ReadOnly: interface{},
	RecordSizeKiB: *f64,
	StorageCapacityQuotaGiB: *f64,
	StorageCapacityReservationGiB: *f64,
	UserAndGroupQuotas: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.copyTagsToSnapshots">CopyTagsToSnapshots</a></code> | <code>interface{}</code> | A Boolean value indicating whether tags for the volume should be copied to snapshots. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.dataCompressionType">DataCompressionType</a></code> | <code>*string</code> | Specifies the method used to compress the data on the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.nfsExports">NfsExports</a></code> | <code>interface{}</code> | The configuration object for mounting a Network File System (NFS) file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.options">Options</a></code> | <code>*[]*string</code> | The configuration object for mounting a Network File System (NFS) file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.originSnapshot">OriginSnapshot</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a></code> | The configuration of an Amazon FSx for OpenZFS volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.parentVolumeId">ParentVolumeId</a></code> | <code>*string</code> | The ID of the volume to use as the parent volume of the volume that you are creating. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | A Boolean value indicating whether the volume is read-only. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.recordSizeKiB">RecordSizeKiB</a></code> | <code>*f64</code> | Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB). |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityQuotaGiB">StorageCapacityQuotaGiB</a></code> | <code>*f64</code> | Sets the maximum storage size in gibibytes (GiB) for the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityReservationGiB">StorageCapacityReservationGiB</a></code> | <code>*f64</code> | Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.userAndGroupQuotas">UserAndGroupQuotas</a></code> | <code>interface{}</code> | Configures how much storage users and groups can use on the volume. |

---

##### `CopyTagsToSnapshots`<sup>Optional</sup> <a name="CopyTagsToSnapshots" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.copyTagsToSnapshots"></a>

```go
CopyTagsToSnapshots interface{}
```

- *Type:* interface{}

A Boolean value indicating whether tags for the volume should be copied to snapshots.

This value defaults to false. If this value is set to true, and you do not specify any tags, all tags for the original volume are copied over to snapshots. If this value is set to true, and you do specify one or more tags, only the specified tags for the original volume are copied over to snapshots. If you specify one or more tags when creating a new snapshot, no tags are copied over from the original volume, regardless of this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_tags_to_snapshots FsxVolume#copy_tags_to_snapshots}

---

##### `DataCompressionType`<sup>Optional</sup> <a name="DataCompressionType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.dataCompressionType"></a>

```go
DataCompressionType *string
```

- *Type:* *string

Specifies the method used to compress the data on the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#data_compression_type FsxVolume#data_compression_type}

---

##### `NfsExports`<sup>Optional</sup> <a name="NfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.nfsExports"></a>

```go
NfsExports interface{}
```

- *Type:* interface{}

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#nfs_exports FsxVolume#nfs_exports}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.options"></a>

```go
Options *[]*string
```

- *Type:* *[]*string

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#options FsxVolume#options}

---

##### `OriginSnapshot`<sup>Optional</sup> <a name="OriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.originSnapshot"></a>

```go
OriginSnapshot FsxVolumeOpenZfsConfigurationOriginSnapshot
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

The configuration of an Amazon FSx for OpenZFS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#origin_snapshot FsxVolume#origin_snapshot}

---

##### `ParentVolumeId`<sup>Optional</sup> <a name="ParentVolumeId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.parentVolumeId"></a>

```go
ParentVolumeId *string
```

- *Type:* *string

The ID of the volume to use as the parent volume of the volume that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#parent_volume_id FsxVolume#parent_volume_id}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

A Boolean value indicating whether the volume is read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#read_only FsxVolume#read_only}

---

##### `RecordSizeKiB`<sup>Optional</sup> <a name="RecordSizeKiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.recordSizeKiB"></a>

```go
RecordSizeKiB *f64
```

- *Type:* *f64

Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#record_size_ki_b FsxVolume#record_size_ki_b}

---

##### `StorageCapacityQuotaGiB`<sup>Optional</sup> <a name="StorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityQuotaGiB"></a>

```go
StorageCapacityQuotaGiB *f64
```

- *Type:* *f64

Sets the maximum storage size in gibibytes (GiB) for the volume.

You can specify a quota that is larger than the storage on the parent volume. A volume quota limits the amount of storage that the volume can consume to the configured amount, but does not guarantee the space will be available on the parent volume. To guarantee quota space, you must also set StorageCapacityReservationGiB. To not specify a storage capacity quota, set this to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_quota_gi_b FsxVolume#storage_capacity_quota_gi_b}

---

##### `StorageCapacityReservationGiB`<sup>Optional</sup> <a name="StorageCapacityReservationGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityReservationGiB"></a>

```go
StorageCapacityReservationGiB *f64
```

- *Type:* *f64

Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume.

Setting StorageCapacityReservationGiB guarantees that the specified amount of storage space on the parent volume will always be available for the volume. You can't reserve more storage than the parent volume has. To not specify a storage capacity reservation, set this to 0 or -1. For more information, see Volume properties in the Amazon FSx for OpenZFS User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_reservation_gi_b FsxVolume#storage_capacity_reservation_gi_b}

---

##### `UserAndGroupQuotas`<sup>Optional</sup> <a name="UserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.userAndGroupQuotas"></a>

```go
UserAndGroupQuotas interface{}
```

- *Type:* interface{}

Configures how much storage users and groups can use on the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#user_and_group_quotas FsxVolume#user_and_group_quotas}

---

### FsxVolumeOpenZfsConfigurationNfsExports <a name="FsxVolumeOpenZfsConfigurationNfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOpenZfsConfigurationNfsExports {
	ClientConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports.property.clientConfigurations">ClientConfigurations</a></code> | <code>interface{}</code> | The configuration object for mounting a Network File System (NFS) file system. |

---

##### `ClientConfigurations`<sup>Optional</sup> <a name="ClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports.property.clientConfigurations"></a>

```go
ClientConfigurations interface{}
```

- *Type:* interface{}

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#client_configurations FsxVolume#client_configurations}

---

### FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations <a name="FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations {
	Clients: *string,
	Options: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.clients">Clients</a></code> | <code>*string</code> | A value that specifies who can mount the file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.options">Options</a></code> | <code>*[]*string</code> | The configuration object for mounting a Network File System (NFS) file system. |

---

##### `Clients`<sup>Optional</sup> <a name="Clients" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.clients"></a>

```go
Clients *string
```

- *Type:* *string

A value that specifies who can mount the file system.

You can provide a wildcard character (*), an IP address (0.0.0.0), or a CIDR address (192.0.2.0/24). By default, Amazon FSx uses the wildcard character when specifying the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#clients FsxVolume#clients}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.options"></a>

```go
Options *[]*string
```

- *Type:* *[]*string

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#options FsxVolume#options}

---

### FsxVolumeOpenZfsConfigurationOriginSnapshot <a name="FsxVolumeOpenZfsConfigurationOriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOpenZfsConfigurationOriginSnapshot {
	CopyStrategy: *string,
	SnapshotArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.copyStrategy">CopyStrategy</a></code> | <code>*string</code> | The configuration object for mounting a Network File System (NFS) file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.snapshotArn">SnapshotArn</a></code> | <code>*string</code> | Specifies the snapshot to use when creating an OpenZFS volume from a snapshot. |

---

##### `CopyStrategy`<sup>Optional</sup> <a name="CopyStrategy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.copyStrategy"></a>

```go
CopyStrategy *string
```

- *Type:* *string

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_strategy FsxVolume#copy_strategy}

---

##### `SnapshotArn`<sup>Optional</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.snapshotArn"></a>

```go
SnapshotArn *string
```

- *Type:* *string

Specifies the snapshot to use when creating an OpenZFS volume from a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snapshot_arn FsxVolume#snapshot_arn}

---

### FsxVolumeOpenZfsConfigurationUserAndGroupQuotas <a name="FsxVolumeOpenZfsConfigurationUserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas {
	Id: *f64,
	StorageCapacityQuotaGiB: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.id">Id</a></code> | <code>*f64</code> | The ID of the user or group that the quota applies to. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.storageCapacityQuotaGiB">StorageCapacityQuotaGiB</a></code> | <code>*f64</code> | The user or group's storage quota, in gibibytes (GiB). |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.type">Type</a></code> | <code>*string</code> | Specifies whether the quota applies to a user or group. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.id"></a>

```go
Id *f64
```

- *Type:* *f64

The ID of the user or group that the quota applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#id FsxVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageCapacityQuotaGiB`<sup>Optional</sup> <a name="StorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.storageCapacityQuotaGiB"></a>

```go
StorageCapacityQuotaGiB *f64
```

- *Type:* *f64

The user or group's storage quota, in gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_quota_gi_b FsxVolume#storage_capacity_quota_gi_b}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.type"></a>

```go
Type *string
```

- *Type:* *string

Specifies whether the quota applies to a user or group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

### FsxVolumeTags <a name="FsxVolumeTags" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

&fsxvolume.FsxVolumeTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.key">Key</a></code> | <code>*string</code> | A value that specifies the TagKey, the name of the tag. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.value">Value</a></code> | <code>*string</code> | A value that specifies the TagValue, the value assigned to the corresponding tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A value that specifies the TagKey, the name of the tag.

Tag keys must be unique for the resource to which they are attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#key FsxVolume#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

A value that specifies the TagValue, the value assigned to the corresponding tag key.

Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of finances : April and also of payroll : April.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### FsxVolumeOntapConfigurationAggregateConfigurationOutputReference <a name="FsxVolumeOntapConfigurationAggregateConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOntapConfigurationAggregateConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxVolumeOntapConfigurationAggregateConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetAggregates">ResetAggregates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetConstituentsPerAggregate">ResetConstituentsPerAggregate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregates` <a name="ResetAggregates" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetAggregates"></a>

```go
func ResetAggregates()
```

##### `ResetConstituentsPerAggregate` <a name="ResetConstituentsPerAggregate" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetConstituentsPerAggregate"></a>

```go
func ResetConstituentsPerAggregate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregatesInput">AggregatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregateInput">ConstituentsPerAggregateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates">Aggregates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate">ConstituentsPerAggregate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregatesInput`<sup>Optional</sup> <a name="AggregatesInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregatesInput"></a>

```go
func AggregatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConstituentsPerAggregateInput`<sup>Optional</sup> <a name="ConstituentsPerAggregateInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregateInput"></a>

```go
func ConstituentsPerAggregateInput() *f64
```

- *Type:* *f64

---

##### `Aggregates`<sup>Required</sup> <a name="Aggregates" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates"></a>

```go
func Aggregates() *[]*string
```

- *Type:* *[]*string

---

##### `ConstituentsPerAggregate`<sup>Required</sup> <a name="ConstituentsPerAggregate" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate"></a>

```go
func ConstituentsPerAggregate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOntapConfigurationOutputReference <a name="FsxVolumeOntapConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOntapConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxVolumeOntapConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putAggregateConfiguration">PutAggregateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration">PutSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putTieringPolicy">PutTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetAggregateConfiguration">ResetAggregateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetCopyTagsToBackups">ResetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetJunctionPath">ResetJunctionPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetOntapVolumeType">ResetOntapVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSecurityStyle">ResetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInBytes">ResetSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInMegabytes">ResetSizeInMegabytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnaplockConfiguration">ResetSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnapshotPolicy">ResetSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageEfficiencyEnabled">ResetStorageEfficiencyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageVirtualMachineId">ResetStorageVirtualMachineId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetTieringPolicy">ResetTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetVolumeStyle">ResetVolumeStyle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAggregateConfiguration` <a name="PutAggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putAggregateConfiguration"></a>

```go
func PutAggregateConfiguration(value FsxVolumeOntapConfigurationAggregateConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putAggregateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

---

##### `PutSnaplockConfiguration` <a name="PutSnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration"></a>

```go
func PutSnaplockConfiguration(value FsxVolumeOntapConfigurationSnaplockConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

---

##### `PutTieringPolicy` <a name="PutTieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putTieringPolicy"></a>

```go
func PutTieringPolicy(value FsxVolumeOntapConfigurationTieringPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putTieringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

---

##### `ResetAggregateConfiguration` <a name="ResetAggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetAggregateConfiguration"></a>

```go
func ResetAggregateConfiguration()
```

##### `ResetCopyTagsToBackups` <a name="ResetCopyTagsToBackups" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetCopyTagsToBackups"></a>

```go
func ResetCopyTagsToBackups()
```

##### `ResetJunctionPath` <a name="ResetJunctionPath" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetJunctionPath"></a>

```go
func ResetJunctionPath()
```

##### `ResetOntapVolumeType` <a name="ResetOntapVolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetOntapVolumeType"></a>

```go
func ResetOntapVolumeType()
```

##### `ResetSecurityStyle` <a name="ResetSecurityStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSecurityStyle"></a>

```go
func ResetSecurityStyle()
```

##### `ResetSizeInBytes` <a name="ResetSizeInBytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInBytes"></a>

```go
func ResetSizeInBytes()
```

##### `ResetSizeInMegabytes` <a name="ResetSizeInMegabytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInMegabytes"></a>

```go
func ResetSizeInMegabytes()
```

##### `ResetSnaplockConfiguration` <a name="ResetSnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnaplockConfiguration"></a>

```go
func ResetSnaplockConfiguration()
```

##### `ResetSnapshotPolicy` <a name="ResetSnapshotPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnapshotPolicy"></a>

```go
func ResetSnapshotPolicy()
```

##### `ResetStorageEfficiencyEnabled` <a name="ResetStorageEfficiencyEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageEfficiencyEnabled"></a>

```go
func ResetStorageEfficiencyEnabled()
```

##### `ResetStorageVirtualMachineId` <a name="ResetStorageVirtualMachineId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageVirtualMachineId"></a>

```go
func ResetStorageVirtualMachineId()
```

##### `ResetTieringPolicy` <a name="ResetTieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetTieringPolicy"></a>

```go
func ResetTieringPolicy()
```

##### `ResetVolumeStyle` <a name="ResetVolumeStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetVolumeStyle"></a>

```go
func ResetVolumeStyle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration">AggregateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference">FsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration">SnaplockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference">FsxVolumeOntapConfigurationTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfigurationInput">AggregateConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackupsInput">CopyTagsToBackupsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPathInput">JunctionPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeTypeInput">OntapVolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyleInput">SecurityStyleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytesInput">SizeInBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytesInput">SizeInMegabytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfigurationInput">SnaplockConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicyInput">SnapshotPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabledInput">StorageEfficiencyEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineIdInput">StorageVirtualMachineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicyInput">TieringPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyleInput">VolumeStyleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPath">JunctionPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType">OntapVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytes">SizeInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes">SizeInMegabytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy">SnapshotPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled">StorageEfficiencyEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId">StorageVirtualMachineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyle">VolumeStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregateConfiguration`<sup>Required</sup> <a name="AggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration"></a>

```go
func AggregateConfiguration() FsxVolumeOntapConfigurationAggregateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference">FsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a>

---

##### `SnaplockConfiguration`<sup>Required</sup> <a name="SnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration"></a>

```go
func SnaplockConfiguration() FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a>

---

##### `TieringPolicy`<sup>Required</sup> <a name="TieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicy"></a>

```go
func TieringPolicy() FsxVolumeOntapConfigurationTieringPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference">FsxVolumeOntapConfigurationTieringPolicyOutputReference</a>

---

##### `AggregateConfigurationInput`<sup>Optional</sup> <a name="AggregateConfigurationInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfigurationInput"></a>

```go
func AggregateConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `CopyTagsToBackupsInput`<sup>Optional</sup> <a name="CopyTagsToBackupsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackupsInput"></a>

```go
func CopyTagsToBackupsInput() *string
```

- *Type:* *string

---

##### `JunctionPathInput`<sup>Optional</sup> <a name="JunctionPathInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPathInput"></a>

```go
func JunctionPathInput() *string
```

- *Type:* *string

---

##### `OntapVolumeTypeInput`<sup>Optional</sup> <a name="OntapVolumeTypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeTypeInput"></a>

```go
func OntapVolumeTypeInput() *string
```

- *Type:* *string

---

##### `SecurityStyleInput`<sup>Optional</sup> <a name="SecurityStyleInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyleInput"></a>

```go
func SecurityStyleInput() *string
```

- *Type:* *string

---

##### `SizeInBytesInput`<sup>Optional</sup> <a name="SizeInBytesInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytesInput"></a>

```go
func SizeInBytesInput() *string
```

- *Type:* *string

---

##### `SizeInMegabytesInput`<sup>Optional</sup> <a name="SizeInMegabytesInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytesInput"></a>

```go
func SizeInMegabytesInput() *string
```

- *Type:* *string

---

##### `SnaplockConfigurationInput`<sup>Optional</sup> <a name="SnaplockConfigurationInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfigurationInput"></a>

```go
func SnaplockConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotPolicyInput`<sup>Optional</sup> <a name="SnapshotPolicyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicyInput"></a>

```go
func SnapshotPolicyInput() *string
```

- *Type:* *string

---

##### `StorageEfficiencyEnabledInput`<sup>Optional</sup> <a name="StorageEfficiencyEnabledInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabledInput"></a>

```go
func StorageEfficiencyEnabledInput() *string
```

- *Type:* *string

---

##### `StorageVirtualMachineIdInput`<sup>Optional</sup> <a name="StorageVirtualMachineIdInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineIdInput"></a>

```go
func StorageVirtualMachineIdInput() *string
```

- *Type:* *string

---

##### `TieringPolicyInput`<sup>Optional</sup> <a name="TieringPolicyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicyInput"></a>

```go
func TieringPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeStyleInput`<sup>Optional</sup> <a name="VolumeStyleInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyleInput"></a>

```go
func VolumeStyleInput() *string
```

- *Type:* *string

---

##### `CopyTagsToBackups`<sup>Required</sup> <a name="CopyTagsToBackups" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups"></a>

```go
func CopyTagsToBackups() *string
```

- *Type:* *string

---

##### `JunctionPath`<sup>Required</sup> <a name="JunctionPath" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPath"></a>

```go
func JunctionPath() *string
```

- *Type:* *string

---

##### `OntapVolumeType`<sup>Required</sup> <a name="OntapVolumeType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType"></a>

```go
func OntapVolumeType() *string
```

- *Type:* *string

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyle"></a>

```go
func SecurityStyle() *string
```

- *Type:* *string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytes"></a>

```go
func SizeInBytes() *string
```

- *Type:* *string

---

##### `SizeInMegabytes`<sup>Required</sup> <a name="SizeInMegabytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes"></a>

```go
func SizeInMegabytes() *string
```

- *Type:* *string

---

##### `SnapshotPolicy`<sup>Required</sup> <a name="SnapshotPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy"></a>

```go
func SnapshotPolicy() *string
```

- *Type:* *string

---

##### `StorageEfficiencyEnabled`<sup>Required</sup> <a name="StorageEfficiencyEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled"></a>

```go
func StorageEfficiencyEnabled() *string
```

- *Type:* *string

---

##### `StorageVirtualMachineId`<sup>Required</sup> <a name="StorageVirtualMachineId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId"></a>

```go
func StorageVirtualMachineId() *string
```

- *Type:* *string

---

##### `VolumeStyle`<sup>Required</sup> <a name="VolumeStyle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyle"></a>

```go
func VolumeStyle() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putAutocommitPeriod">PutAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod">PutRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAuditLogVolume">ResetAuditLogVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAutocommitPeriod">ResetAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetPrivilegedDelete">ResetPrivilegedDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetSnaplockType">ResetSnaplockType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetVolumeAppendModeEnabled">ResetVolumeAppendModeEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutocommitPeriod` <a name="PutAutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putAutocommitPeriod"></a>

```go
func PutAutocommitPeriod(value FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putAutocommitPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

---

##### `PutRetentionPeriod` <a name="PutRetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod"></a>

```go
func PutRetentionPeriod(value FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

---

##### `ResetAuditLogVolume` <a name="ResetAuditLogVolume" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAuditLogVolume"></a>

```go
func ResetAuditLogVolume()
```

##### `ResetAutocommitPeriod` <a name="ResetAutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAutocommitPeriod"></a>

```go
func ResetAutocommitPeriod()
```

##### `ResetPrivilegedDelete` <a name="ResetPrivilegedDelete" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetPrivilegedDelete"></a>

```go
func ResetPrivilegedDelete()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetRetentionPeriod"></a>

```go
func ResetRetentionPeriod()
```

##### `ResetSnaplockType` <a name="ResetSnaplockType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetSnaplockType"></a>

```go
func ResetSnaplockType()
```

##### `ResetVolumeAppendModeEnabled` <a name="ResetVolumeAppendModeEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetVolumeAppendModeEnabled"></a>

```go
func ResetVolumeAppendModeEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod">AutocommitPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolumeInput">AuditLogVolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriodInput">AutocommitPeriodInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDeleteInput">PrivilegedDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockTypeInput">SnaplockTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabledInput">VolumeAppendModeEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume">AuditLogVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete">PrivilegedDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType">SnaplockType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled">VolumeAppendModeEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutocommitPeriod`<sup>Required</sup> <a name="AutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod"></a>

```go
func AutocommitPeriod() FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a>

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod"></a>

```go
func RetentionPeriod() FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a>

---

##### `AuditLogVolumeInput`<sup>Optional</sup> <a name="AuditLogVolumeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolumeInput"></a>

```go
func AuditLogVolumeInput() *string
```

- *Type:* *string

---

##### `AutocommitPeriodInput`<sup>Optional</sup> <a name="AutocommitPeriodInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriodInput"></a>

```go
func AutocommitPeriodInput() interface{}
```

- *Type:* interface{}

---

##### `PrivilegedDeleteInput`<sup>Optional</sup> <a name="PrivilegedDeleteInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDeleteInput"></a>

```go
func PrivilegedDeleteInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriodInput"></a>

```go
func RetentionPeriodInput() interface{}
```

- *Type:* interface{}

---

##### `SnaplockTypeInput`<sup>Optional</sup> <a name="SnaplockTypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockTypeInput"></a>

```go
func SnaplockTypeInput() *string
```

- *Type:* *string

---

##### `VolumeAppendModeEnabledInput`<sup>Optional</sup> <a name="VolumeAppendModeEnabledInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabledInput"></a>

```go
func VolumeAppendModeEnabledInput() *string
```

- *Type:* *string

---

##### `AuditLogVolume`<sup>Required</sup> <a name="AuditLogVolume" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume"></a>

```go
func AuditLogVolume() *string
```

- *Type:* *string

---

##### `PrivilegedDelete`<sup>Required</sup> <a name="PrivilegedDelete" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete"></a>

```go
func PrivilegedDelete() *string
```

- *Type:* *string

---

##### `SnaplockType`<sup>Required</sup> <a name="SnaplockType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType"></a>

```go
func SnaplockType() *string
```

- *Type:* *string

---

##### `VolumeAppendModeEnabled`<sup>Required</sup> <a name="VolumeAppendModeEnabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled"></a>

```go
func VolumeAppendModeEnabled() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention">PutDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention">PutMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention">PutMinimumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetDefaultRetention">ResetDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMaximumRetention">ResetMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMinimumRetention">ResetMinimumRetention</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultRetention` <a name="PutDefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention"></a>

```go
func PutDefaultRetention(value FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---

##### `PutMaximumRetention` <a name="PutMaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention"></a>

```go
func PutMaximumRetention(value FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---

##### `PutMinimumRetention` <a name="PutMinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention"></a>

```go
func PutMinimumRetention(value FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---

##### `ResetDefaultRetention` <a name="ResetDefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetDefaultRetention"></a>

```go
func ResetDefaultRetention()
```

##### `ResetMaximumRetention` <a name="ResetMaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMaximumRetention"></a>

```go
func ResetMaximumRetention()
```

##### `ResetMinimumRetention` <a name="ResetMinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMinimumRetention"></a>

```go
func ResetMinimumRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention">DefaultRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention">MaximumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention">MinimumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetentionInput">DefaultRetentionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetentionInput">MaximumRetentionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetentionInput">MinimumRetentionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultRetention`<sup>Required</sup> <a name="DefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention"></a>

```go
func DefaultRetention() FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a>

---

##### `MaximumRetention`<sup>Required</sup> <a name="MaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention"></a>

```go
func MaximumRetention() FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a>

---

##### `MinimumRetention`<sup>Required</sup> <a name="MinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention"></a>

```go
func MinimumRetention() FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a>

---

##### `DefaultRetentionInput`<sup>Optional</sup> <a name="DefaultRetentionInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetentionInput"></a>

```go
func DefaultRetentionInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumRetentionInput`<sup>Optional</sup> <a name="MaximumRetentionInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetentionInput"></a>

```go
func MaximumRetentionInput() interface{}
```

- *Type:* interface{}

---

##### `MinimumRetentionInput`<sup>Optional</sup> <a name="MinimumRetentionInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetentionInput"></a>

```go
func MinimumRetentionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOntapConfigurationTieringPolicyOutputReference <a name="FsxVolumeOntapConfigurationTieringPolicyOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOntapConfigurationTieringPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxVolumeOntapConfigurationTieringPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetCoolingPeriod">ResetCoolingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoolingPeriod` <a name="ResetCoolingPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetCoolingPeriod"></a>

```go
func ResetCoolingPeriod()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriodInput">CoolingPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod">CoolingPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoolingPeriodInput`<sup>Optional</sup> <a name="CoolingPeriodInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriodInput"></a>

```go
func CoolingPeriodInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CoolingPeriod`<sup>Required</sup> <a name="CoolingPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod"></a>

```go
func CoolingPeriod() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList <a name="FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get"></a>

```go
func Get(index *f64) FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference <a name="FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetClients">ResetClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClients` <a name="ResetClients" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetClients"></a>

```go
func ResetClients()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetOptions"></a>

```go
func ResetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clientsInput">ClientsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.optionsInput">OptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients">Clients</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options">Options</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientsInput`<sup>Optional</sup> <a name="ClientsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clientsInput"></a>

```go
func ClientsInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.optionsInput"></a>

```go
func OptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Clients`<sup>Required</sup> <a name="Clients" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```go
func Clients() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options"></a>

```go
func Options() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOpenZfsConfigurationNfsExportsList <a name="FsxVolumeOpenZfsConfigurationNfsExportsList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOpenZfsConfigurationNfsExportsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxVolumeOpenZfsConfigurationNfsExportsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.get"></a>

```go
func Get(index *f64) FsxVolumeOpenZfsConfigurationNfsExportsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOpenZfsConfigurationNfsExportsOutputReference <a name="FsxVolumeOpenZfsConfigurationNfsExportsOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOpenZfsConfigurationNfsExportsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxVolumeOpenZfsConfigurationNfsExportsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.putClientConfigurations">PutClientConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resetClientConfigurations">ResetClientConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientConfigurations` <a name="PutClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.putClientConfigurations"></a>

```go
func PutClientConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.putClientConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClientConfigurations` <a name="ResetClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resetClientConfigurations"></a>

```go
func ResetClientConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations">ClientConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurationsInput">ClientConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientConfigurations`<sup>Required</sup> <a name="ClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations"></a>

```go
func ClientConfigurations() FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a>

---

##### `ClientConfigurationsInput`<sup>Optional</sup> <a name="ClientConfigurationsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurationsInput"></a>

```go
func ClientConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference <a name="FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetCopyStrategy">ResetCopyStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetSnapshotArn">ResetSnapshotArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCopyStrategy` <a name="ResetCopyStrategy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetCopyStrategy"></a>

```go
func ResetCopyStrategy()
```

##### `ResetSnapshotArn` <a name="ResetSnapshotArn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetSnapshotArn"></a>

```go
func ResetSnapshotArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategyInput">CopyStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArnInput">SnapshotArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy">CopyStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn">SnapshotArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CopyStrategyInput`<sup>Optional</sup> <a name="CopyStrategyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategyInput"></a>

```go
func CopyStrategyInput() *string
```

- *Type:* *string

---

##### `SnapshotArnInput`<sup>Optional</sup> <a name="SnapshotArnInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArnInput"></a>

```go
func SnapshotArnInput() *string
```

- *Type:* *string

---

##### `CopyStrategy`<sup>Required</sup> <a name="CopyStrategy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy"></a>

```go
func CopyStrategy() *string
```

- *Type:* *string

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn"></a>

```go
func SnapshotArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOpenZfsConfigurationOutputReference <a name="FsxVolumeOpenZfsConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOpenZfsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxVolumeOpenZfsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putNfsExports">PutNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putOriginSnapshot">PutOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putUserAndGroupQuotas">PutUserAndGroupQuotas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetCopyTagsToSnapshots">ResetCopyTagsToSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetDataCompressionType">ResetDataCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetNfsExports">ResetNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOriginSnapshot">ResetOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetParentVolumeId">ResetParentVolumeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetRecordSizeKiB">ResetRecordSizeKiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityQuotaGiB">ResetStorageCapacityQuotaGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityReservationGiB">ResetStorageCapacityReservationGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetUserAndGroupQuotas">ResetUserAndGroupQuotas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNfsExports` <a name="PutNfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putNfsExports"></a>

```go
func PutNfsExports(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putNfsExports.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOriginSnapshot` <a name="PutOriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putOriginSnapshot"></a>

```go
func PutOriginSnapshot(value FsxVolumeOpenZfsConfigurationOriginSnapshot)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putOriginSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

---

##### `PutUserAndGroupQuotas` <a name="PutUserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putUserAndGroupQuotas"></a>

```go
func PutUserAndGroupQuotas(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putUserAndGroupQuotas.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCopyTagsToSnapshots` <a name="ResetCopyTagsToSnapshots" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetCopyTagsToSnapshots"></a>

```go
func ResetCopyTagsToSnapshots()
```

##### `ResetDataCompressionType` <a name="ResetDataCompressionType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetDataCompressionType"></a>

```go
func ResetDataCompressionType()
```

##### `ResetNfsExports` <a name="ResetNfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetNfsExports"></a>

```go
func ResetNfsExports()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetOriginSnapshot` <a name="ResetOriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOriginSnapshot"></a>

```go
func ResetOriginSnapshot()
```

##### `ResetParentVolumeId` <a name="ResetParentVolumeId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetParentVolumeId"></a>

```go
func ResetParentVolumeId()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```

##### `ResetRecordSizeKiB` <a name="ResetRecordSizeKiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetRecordSizeKiB"></a>

```go
func ResetRecordSizeKiB()
```

##### `ResetStorageCapacityQuotaGiB` <a name="ResetStorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityQuotaGiB"></a>

```go
func ResetStorageCapacityQuotaGiB()
```

##### `ResetStorageCapacityReservationGiB` <a name="ResetStorageCapacityReservationGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityReservationGiB"></a>

```go
func ResetStorageCapacityReservationGiB()
```

##### `ResetUserAndGroupQuotas` <a name="ResetUserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetUserAndGroupQuotas"></a>

```go
func ResetUserAndGroupQuotas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports">NfsExports</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList">FsxVolumeOpenZfsConfigurationNfsExportsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot">OriginSnapshot</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas">UserAndGroupQuotas</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshotsInput">CopyTagsToSnapshotsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionTypeInput">DataCompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExportsInput">NfsExportsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.optionsInput">OptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshotInput">OriginSnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeIdInput">ParentVolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiBInput">RecordSizeKiBInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiBInput">StorageCapacityQuotaGiBInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiBInput">StorageCapacityReservationGiBInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotasInput">UserAndGroupQuotasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots">CopyTagsToSnapshots</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType">DataCompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.options">Options</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId">ParentVolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB">RecordSizeKiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB">StorageCapacityQuotaGiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB">StorageCapacityReservationGiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NfsExports`<sup>Required</sup> <a name="NfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports"></a>

```go
func NfsExports() FsxVolumeOpenZfsConfigurationNfsExportsList
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList">FsxVolumeOpenZfsConfigurationNfsExportsList</a>

---

##### `OriginSnapshot`<sup>Required</sup> <a name="OriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot"></a>

```go
func OriginSnapshot() FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a>

---

##### `UserAndGroupQuotas`<sup>Required</sup> <a name="UserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas"></a>

```go
func UserAndGroupQuotas() FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a>

---

##### `CopyTagsToSnapshotsInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshotsInput"></a>

```go
func CopyTagsToSnapshotsInput() interface{}
```

- *Type:* interface{}

---

##### `DataCompressionTypeInput`<sup>Optional</sup> <a name="DataCompressionTypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionTypeInput"></a>

```go
func DataCompressionTypeInput() *string
```

- *Type:* *string

---

##### `NfsExportsInput`<sup>Optional</sup> <a name="NfsExportsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExportsInput"></a>

```go
func NfsExportsInput() interface{}
```

- *Type:* interface{}

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.optionsInput"></a>

```go
func OptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OriginSnapshotInput`<sup>Optional</sup> <a name="OriginSnapshotInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshotInput"></a>

```go
func OriginSnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `ParentVolumeIdInput`<sup>Optional</sup> <a name="ParentVolumeIdInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeIdInput"></a>

```go
func ParentVolumeIdInput() *string
```

- *Type:* *string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `RecordSizeKiBInput`<sup>Optional</sup> <a name="RecordSizeKiBInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiBInput"></a>

```go
func RecordSizeKiBInput() *f64
```

- *Type:* *f64

---

##### `StorageCapacityQuotaGiBInput`<sup>Optional</sup> <a name="StorageCapacityQuotaGiBInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiBInput"></a>

```go
func StorageCapacityQuotaGiBInput() *f64
```

- *Type:* *f64

---

##### `StorageCapacityReservationGiBInput`<sup>Optional</sup> <a name="StorageCapacityReservationGiBInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiBInput"></a>

```go
func StorageCapacityReservationGiBInput() *f64
```

- *Type:* *f64

---

##### `UserAndGroupQuotasInput`<sup>Optional</sup> <a name="UserAndGroupQuotasInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotasInput"></a>

```go
func UserAndGroupQuotasInput() interface{}
```

- *Type:* interface{}

---

##### `CopyTagsToSnapshots`<sup>Required</sup> <a name="CopyTagsToSnapshots" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots"></a>

```go
func CopyTagsToSnapshots() interface{}
```

- *Type:* interface{}

---

##### `DataCompressionType`<sup>Required</sup> <a name="DataCompressionType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType"></a>

```go
func DataCompressionType() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.options"></a>

```go
func Options() *[]*string
```

- *Type:* *[]*string

---

##### `ParentVolumeId`<sup>Required</sup> <a name="ParentVolumeId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId"></a>

```go
func ParentVolumeId() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `RecordSizeKiB`<sup>Required</sup> <a name="RecordSizeKiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB"></a>

```go
func RecordSizeKiB() *f64
```

- *Type:* *f64

---

##### `StorageCapacityQuotaGiB`<sup>Required</sup> <a name="StorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB"></a>

```go
func StorageCapacityQuotaGiB() *f64
```

- *Type:* *f64

---

##### `StorageCapacityReservationGiB`<sup>Required</sup> <a name="StorageCapacityReservationGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB"></a>

```go
func StorageCapacityReservationGiB() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList <a name="FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get"></a>

```go
func Get(index *f64) FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference <a name="FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetStorageCapacityQuotaGiB">ResetStorageCapacityQuotaGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetStorageCapacityQuotaGiB` <a name="ResetStorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetStorageCapacityQuotaGiB"></a>

```go
func ResetStorageCapacityQuotaGiB()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.idInput">IdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiBInput">StorageCapacityQuotaGiBInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB">StorageCapacityQuotaGiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.idInput"></a>

```go
func IdInput() *f64
```

- *Type:* *f64

---

##### `StorageCapacityQuotaGiBInput`<sup>Optional</sup> <a name="StorageCapacityQuotaGiBInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiBInput"></a>

```go
func StorageCapacityQuotaGiBInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `StorageCapacityQuotaGiB`<sup>Required</sup> <a name="StorageCapacityQuotaGiB" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB"></a>

```go
func StorageCapacityQuotaGiB() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeTagsList <a name="FsxVolumeTagsList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxVolumeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.get"></a>

```go
func Get(index *f64) FsxVolumeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxVolumeTagsOutputReference <a name="FsxVolumeTagsOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxvolume"

fsxvolume.NewFsxVolumeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxVolumeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



