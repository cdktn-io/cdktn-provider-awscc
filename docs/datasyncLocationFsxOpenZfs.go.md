# `datasyncLocationFsxOpenZfs` Submodule <a name="`datasyncLocationFsxOpenZfs` Submodule" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxOpenZfs <a name="DatasyncLocationFsxOpenZfs" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_open_zfs awscc_datasync_location_fsx_open_zfs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

datasynclocationfsxopenzfs.NewDatasyncLocationFsxOpenZfs(scope Construct, id *string, config DatasyncLocationFsxOpenZfsConfig) DatasyncLocationFsxOpenZfs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig">DatasyncLocationFsxOpenZfsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig">DatasyncLocationFsxOpenZfsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.putProtocol">PutProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.resetFsxFilesystemArn">ResetFsxFilesystemArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.resetSubdirectory">ResetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProtocol` <a name="PutProtocol" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.putProtocol"></a>

```go
func PutProtocol(value DatasyncLocationFsxOpenZfsProtocol)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.putProtocol.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocol">DatasyncLocationFsxOpenZfsProtocol</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFsxFilesystemArn` <a name="ResetFsxFilesystemArn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.resetFsxFilesystemArn"></a>

```go
func ResetFsxFilesystemArn()
```

##### `ResetSubdirectory` <a name="ResetSubdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.resetSubdirectory"></a>

```go
func ResetSubdirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationFsxOpenZfs resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

datasynclocationfsxopenzfs.DatasyncLocationFsxOpenZfs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

datasynclocationfsxopenzfs.DatasyncLocationFsxOpenZfs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

datasynclocationfsxopenzfs.DatasyncLocationFsxOpenZfs_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

datasynclocationfsxopenzfs.DatasyncLocationFsxOpenZfs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatasyncLocationFsxOpenZfs resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatasyncLocationFsxOpenZfs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatasyncLocationFsxOpenZfs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_open_zfs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationFsxOpenZfs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.locationArn">LocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.locationUri">LocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.protocol">Protocol</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference">DatasyncLocationFsxOpenZfsProtocolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList">DatasyncLocationFsxOpenZfsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.fsxFilesystemArnInput">FsxFilesystemArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.protocolInput">ProtocolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.securityGroupArnsInput">SecurityGroupArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.fsxFilesystemArn">FsxFilesystemArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.securityGroupArns">SecurityGroupArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.locationArn"></a>

```go
func LocationArn() *string
```

- *Type:* *string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.locationUri"></a>

```go
func LocationUri() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.protocol"></a>

```go
func Protocol() DatasyncLocationFsxOpenZfsProtocolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference">DatasyncLocationFsxOpenZfsProtocolOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.tags"></a>

```go
func Tags() DatasyncLocationFsxOpenZfsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList">DatasyncLocationFsxOpenZfsTagsList</a>

---

##### `FsxFilesystemArnInput`<sup>Optional</sup> <a name="FsxFilesystemArnInput" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.fsxFilesystemArnInput"></a>

```go
func FsxFilesystemArnInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.protocolInput"></a>

```go
func ProtocolInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupArnsInput`<sup>Optional</sup> <a name="SecurityGroupArnsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.securityGroupArnsInput"></a>

```go
func SecurityGroupArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.subdirectoryInput"></a>

```go
func SubdirectoryInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `FsxFilesystemArn`<sup>Required</sup> <a name="FsxFilesystemArn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.fsxFilesystemArn"></a>

```go
func FsxFilesystemArn() *string
```

- *Type:* *string

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.securityGroupArns"></a>

```go
func SecurityGroupArns() *[]*string
```

- *Type:* *[]*string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.subdirectory"></a>

```go
func Subdirectory() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxOpenZfsConfig <a name="DatasyncLocationFsxOpenZfsConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

&datasynclocationfsxopenzfs.DatasyncLocationFsxOpenZfsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Protocol: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocol,
	SecurityGroupArns: *[]*string,
	FsxFilesystemArn: *string,
	Subdirectory: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.protocol">Protocol</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocol">DatasyncLocationFsxOpenZfsProtocol</a></code> | Configuration settings for an NFS or SMB protocol, currently only support NFS. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.securityGroupArns">SecurityGroupArns</a></code> | <code>*[]*string</code> | The ARNs of the security groups that are to use to configure the FSx OpenZFS file system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.fsxFilesystemArn">FsxFilesystemArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the FSx OpenZFS file system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | A subdirectory in the location's path. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.protocol"></a>

```go
Protocol DatasyncLocationFsxOpenZfsProtocol
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocol">DatasyncLocationFsxOpenZfsProtocol</a>

Configuration settings for an NFS or SMB protocol, currently only support NFS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_open_zfs#protocol DatasyncLocationFsxOpenZfs#protocol}

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.securityGroupArns"></a>

```go
SecurityGroupArns *[]*string
```

- *Type:* *[]*string

The ARNs of the security groups that are to use to configure the FSx OpenZFS file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_open_zfs#security_group_arns DatasyncLocationFsxOpenZfs#security_group_arns}

---

##### `FsxFilesystemArn`<sup>Optional</sup> <a name="FsxFilesystemArn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.fsxFilesystemArn"></a>

```go
FsxFilesystemArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the FSx OpenZFS file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_open_zfs#fsx_filesystem_arn DatasyncLocationFsxOpenZfs#fsx_filesystem_arn}

---

##### `Subdirectory`<sup>Optional</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.subdirectory"></a>

```go
Subdirectory *string
```

- *Type:* *string

A subdirectory in the location's path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_open_zfs#subdirectory DatasyncLocationFsxOpenZfs#subdirectory}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_open_zfs#tags DatasyncLocationFsxOpenZfs#tags}

---

### DatasyncLocationFsxOpenZfsProtocol <a name="DatasyncLocationFsxOpenZfsProtocol" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocol.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

&datasynclocationfsxopenzfs.DatasyncLocationFsxOpenZfsProtocol {
	Nfs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocol.property.nfs">Nfs</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfs">DatasyncLocationFsxOpenZfsProtocolNfs</a></code> | FSx OpenZFS file system NFS protocol information. |

---

##### `Nfs`<sup>Optional</sup> <a name="Nfs" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocol.property.nfs"></a>

```go
Nfs DatasyncLocationFsxOpenZfsProtocolNfs
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfs">DatasyncLocationFsxOpenZfsProtocolNfs</a>

FSx OpenZFS file system NFS protocol information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_open_zfs#nfs DatasyncLocationFsxOpenZfs#nfs}

---

### DatasyncLocationFsxOpenZfsProtocolNfs <a name="DatasyncLocationFsxOpenZfsProtocolNfs" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

&datasynclocationfsxopenzfs.DatasyncLocationFsxOpenZfsProtocolNfs {
	MountOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfs.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptions">DatasyncLocationFsxOpenZfsProtocolNfsMountOptions</a></code> | The NFS mount options that DataSync can use to mount your NFS share. |

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfs.property.mountOptions"></a>

```go
MountOptions DatasyncLocationFsxOpenZfsProtocolNfsMountOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptions">DatasyncLocationFsxOpenZfsProtocolNfsMountOptions</a>

The NFS mount options that DataSync can use to mount your NFS share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_open_zfs#mount_options DatasyncLocationFsxOpenZfs#mount_options}

---

### DatasyncLocationFsxOpenZfsProtocolNfsMountOptions <a name="DatasyncLocationFsxOpenZfsProtocolNfsMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

&datasynclocationfsxopenzfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptions {
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptions.property.version">Version</a></code> | <code>*string</code> | The specific NFS version that you want DataSync to use to mount your NFS share. |

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptions.property.version"></a>

```go
Version *string
```

- *Type:* *string

The specific NFS version that you want DataSync to use to mount your NFS share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_open_zfs#version DatasyncLocationFsxOpenZfs#version}

---

### DatasyncLocationFsxOpenZfsTags <a name="DatasyncLocationFsxOpenZfsTags" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

&datasynclocationfsxopenzfs.DatasyncLocationFsxOpenZfsTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTags.property.key">Key</a></code> | <code>*string</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTags.property.value">Value</a></code> | <code>*string</code> | The value for an AWS resource tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_open_zfs#key DatasyncLocationFsxOpenZfs#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_open_zfs#value DatasyncLocationFsxOpenZfs#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference <a name="DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

datasynclocationfsxopenzfs.NewDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationFsxOpenZfsProtocolNfsOutputReference <a name="DatasyncLocationFsxOpenZfsProtocolNfsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

datasynclocationfsxopenzfs.NewDatasyncLocationFsxOpenZfsProtocolNfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationFsxOpenZfsProtocolNfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.putMountOptions">PutMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMountOptions` <a name="PutMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.putMountOptions"></a>

```go
func PutMountOptions(value DatasyncLocationFsxOpenZfsProtocolNfsMountOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptions">DatasyncLocationFsxOpenZfsProtocolNfsMountOptions</a>

---

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.resetMountOptions"></a>

```go
func ResetMountOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference">DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.mountOptions"></a>

```go
func MountOptions() DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference">DatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference</a>

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.mountOptionsInput"></a>

```go
func MountOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationFsxOpenZfsProtocolOutputReference <a name="DatasyncLocationFsxOpenZfsProtocolOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

datasynclocationfsxopenzfs.NewDatasyncLocationFsxOpenZfsProtocolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationFsxOpenZfsProtocolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.putNfs">PutNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.resetNfs">ResetNfs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNfs` <a name="PutNfs" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.putNfs"></a>

```go
func PutNfs(value DatasyncLocationFsxOpenZfsProtocolNfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfs">DatasyncLocationFsxOpenZfsProtocolNfs</a>

---

##### `ResetNfs` <a name="ResetNfs" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.resetNfs"></a>

```go
func ResetNfs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.property.nfs">Nfs</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference">DatasyncLocationFsxOpenZfsProtocolNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.property.nfsInput">NfsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nfs`<sup>Required</sup> <a name="Nfs" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.property.nfs"></a>

```go
func Nfs() DatasyncLocationFsxOpenZfsProtocolNfsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolNfsOutputReference">DatasyncLocationFsxOpenZfsProtocolNfsOutputReference</a>

---

##### `NfsInput`<sup>Optional</sup> <a name="NfsInput" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.property.nfsInput"></a>

```go
func NfsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsProtocolOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationFsxOpenZfsTagsList <a name="DatasyncLocationFsxOpenZfsTagsList" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

datasynclocationfsxopenzfs.NewDatasyncLocationFsxOpenZfsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatasyncLocationFsxOpenZfsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.get"></a>

```go
func Get(index *f64) DatasyncLocationFsxOpenZfsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationFsxOpenZfsTagsOutputReference <a name="DatasyncLocationFsxOpenZfsTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationfsxopenzfs"

datasynclocationfsxopenzfs.NewDatasyncLocationFsxOpenZfsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatasyncLocationFsxOpenZfsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationFsxOpenZfs.DatasyncLocationFsxOpenZfsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



