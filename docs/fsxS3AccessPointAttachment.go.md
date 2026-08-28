# `fsxS3AccessPointAttachment` Submodule <a name="`fsxS3AccessPointAttachment` Submodule" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxS3AccessPointAttachment <a name="FsxS3AccessPointAttachment" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment awscc_fsx_s3_access_point_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachment(scope Construct, id *string, config FsxS3AccessPointAttachmentConfig) FsxS3AccessPointAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig">FsxS3AccessPointAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig">FsxS3AccessPointAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOntapConfiguration">PutOntapConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOpenZfsConfiguration">PutOpenZfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putS3AccessPoint">PutS3AccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOntapConfiguration">ResetOntapConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOpenZfsConfiguration">ResetOpenZfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetS3AccessPoint">ResetS3AccessPoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOntapConfiguration` <a name="PutOntapConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOntapConfiguration"></a>

```go
func PutOntapConfiguration(value FsxS3AccessPointAttachmentOntapConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOntapConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration">FsxS3AccessPointAttachmentOntapConfiguration</a>

---

##### `PutOpenZfsConfiguration` <a name="PutOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOpenZfsConfiguration"></a>

```go
func PutOpenZfsConfiguration(value FsxS3AccessPointAttachmentOpenZfsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOpenZfsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration">FsxS3AccessPointAttachmentOpenZfsConfiguration</a>

---

##### `PutS3AccessPoint` <a name="PutS3AccessPoint" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putS3AccessPoint"></a>

```go
func PutS3AccessPoint(value FsxS3AccessPointAttachmentS3AccessPoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putS3AccessPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint">FsxS3AccessPointAttachmentS3AccessPoint</a>

---

##### `ResetOntapConfiguration` <a name="ResetOntapConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOntapConfiguration"></a>

```go
func ResetOntapConfiguration()
```

##### `ResetOpenZfsConfiguration` <a name="ResetOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOpenZfsConfiguration"></a>

```go
func ResetOpenZfsConfiguration()
```

##### `ResetS3AccessPoint` <a name="ResetS3AccessPoint" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetS3AccessPoint"></a>

```go
func ResetS3AccessPoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FsxS3AccessPointAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.FsxS3AccessPointAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.FsxS3AccessPointAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.FsxS3AccessPointAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.FsxS3AccessPointAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a FsxS3AccessPointAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FsxS3AccessPointAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FsxS3AccessPointAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the FsxS3AccessPointAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.ontapConfiguration">OntapConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference">FsxS3AccessPointAttachmentOntapConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.openZfsConfiguration">OpenZfsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference">FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPoint">S3AccessPoint</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference">FsxS3AccessPointAttachmentS3AccessPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.ontapConfigurationInput">OntapConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.openZfsConfigurationInput">OpenZfsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPointInput">S3AccessPointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OntapConfiguration`<sup>Required</sup> <a name="OntapConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.ontapConfiguration"></a>

```go
func OntapConfiguration() FsxS3AccessPointAttachmentOntapConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference">FsxS3AccessPointAttachmentOntapConfigurationOutputReference</a>

---

##### `OpenZfsConfiguration`<sup>Required</sup> <a name="OpenZfsConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.openZfsConfiguration"></a>

```go
func OpenZfsConfiguration() FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference">FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference</a>

---

##### `S3AccessPoint`<sup>Required</sup> <a name="S3AccessPoint" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPoint"></a>

```go
func S3AccessPoint() FsxS3AccessPointAttachmentS3AccessPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference">FsxS3AccessPointAttachmentS3AccessPointOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OntapConfigurationInput`<sup>Optional</sup> <a name="OntapConfigurationInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.ontapConfigurationInput"></a>

```go
func OntapConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `OpenZfsConfigurationInput`<sup>Optional</sup> <a name="OpenZfsConfigurationInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.openZfsConfigurationInput"></a>

```go
func OpenZfsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `S3AccessPointInput`<sup>Optional</sup> <a name="S3AccessPointInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPointInput"></a>

```go
func S3AccessPointInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxS3AccessPointAttachmentConfig <a name="FsxS3AccessPointAttachmentConfig" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	OntapConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration,
	OpenZfsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration,
	S3AccessPoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.name">Name</a></code> | <code>*string</code> | The name of the S3 access point attachment; also used for the name of the S3 access point. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.type">Type</a></code> | <code>*string</code> | The type of Amazon FSx volume that the S3 access point is attached to. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.ontapConfiguration">OntapConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration">FsxS3AccessPointAttachmentOntapConfiguration</a></code> | The OntapConfiguration of the S3 access point attachment. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.openZfsConfiguration">OpenZfsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration">FsxS3AccessPointAttachmentOpenZfsConfiguration</a></code> | The OpenZFSConfiguration of the S3 access point attachment. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.s3AccessPoint">S3AccessPoint</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint">FsxS3AccessPointAttachmentS3AccessPoint</a></code> | The S3 access point configuration of the S3 access point attachment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the S3 access point attachment; also used for the name of the S3 access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of Amazon FSx volume that the S3 access point is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}

---

##### `OntapConfiguration`<sup>Optional</sup> <a name="OntapConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.ontapConfiguration"></a>

```go
OntapConfiguration FsxS3AccessPointAttachmentOntapConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration">FsxS3AccessPointAttachmentOntapConfiguration</a>

The OntapConfiguration of the S3 access point attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#ontap_configuration FsxS3AccessPointAttachment#ontap_configuration}

---

##### `OpenZfsConfiguration`<sup>Optional</sup> <a name="OpenZfsConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.openZfsConfiguration"></a>

```go
OpenZfsConfiguration FsxS3AccessPointAttachmentOpenZfsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration">FsxS3AccessPointAttachmentOpenZfsConfiguration</a>

The OpenZFSConfiguration of the S3 access point attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#open_zfs_configuration FsxS3AccessPointAttachment#open_zfs_configuration}

---

##### `S3AccessPoint`<sup>Optional</sup> <a name="S3AccessPoint" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.s3AccessPoint"></a>

```go
S3AccessPoint FsxS3AccessPointAttachmentS3AccessPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint">FsxS3AccessPointAttachmentS3AccessPoint</a>

The S3 access point configuration of the S3 access point attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#s3_access_point FsxS3AccessPointAttachment#s3_access_point}

---

### FsxS3AccessPointAttachmentOntapConfiguration <a name="FsxS3AccessPointAttachmentOntapConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentOntapConfiguration {
	FileSystemIdentity: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity,
	VolumeId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration.property.fileSystemIdentity">FileSystemIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a></code> | The file system identity used to authorize file access requests made using the S3 access point. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration.property.volumeId">VolumeId</a></code> | <code>*string</code> | The ID of the FSx for ONTAP volume that the S3 access point is attached to. |

---

##### `FileSystemIdentity`<sup>Optional</sup> <a name="FileSystemIdentity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration.property.fileSystemIdentity"></a>

```go
FileSystemIdentity FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a>

The file system identity used to authorize file access requests made using the S3 access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#file_system_identity FsxS3AccessPointAttachment#file_system_identity}

---

##### `VolumeId`<sup>Optional</sup> <a name="VolumeId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration.property.volumeId"></a>

```go
VolumeId *string
```

- *Type:* *string

The ID of the FSx for ONTAP volume that the S3 access point is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#volume_id FsxS3AccessPointAttachment#volume_id}

---

### FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity <a name="FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity {
	Type: *string,
	UnixUser: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser,
	WindowsUser: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.property.type">Type</a></code> | <code>*string</code> | Specifies the FSx for ONTAP user identity type, accepts either UNIX or WINDOWS. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.property.unixUser">UnixUser</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a></code> | Specifies the properties of the file system UNIX user. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.property.windowsUser">WindowsUser</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a></code> | Specifies the properties of the file system Windows user. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Specifies the FSx for ONTAP user identity type, accepts either UNIX or WINDOWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}

---

##### `UnixUser`<sup>Optional</sup> <a name="UnixUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.property.unixUser"></a>

```go
UnixUser FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a>

Specifies the properties of the file system UNIX user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#unix_user FsxS3AccessPointAttachment#unix_user}

---

##### `WindowsUser`<sup>Optional</sup> <a name="WindowsUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.property.windowsUser"></a>

```go
WindowsUser FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a>

Specifies the properties of the file system Windows user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#windows_user FsxS3AccessPointAttachment#windows_user}

---

### FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser <a name="FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser.property.name">Name</a></code> | <code>*string</code> | The name of the UNIX user. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the UNIX user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}

---

### FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser <a name="FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser.property.name">Name</a></code> | <code>*string</code> | The name of the Windows user. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Windows user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}

---

### FsxS3AccessPointAttachmentOpenZfsConfiguration <a name="FsxS3AccessPointAttachmentOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentOpenZfsConfiguration {
	FileSystemIdentity: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity,
	VolumeId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration.property.fileSystemIdentity">FileSystemIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a></code> | The file system identity used to authorize file access requests made using the S3 access point. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration.property.volumeId">VolumeId</a></code> | <code>*string</code> | The ID of the FSx for OpenZFS volume that the S3 access point is attached to. |

---

##### `FileSystemIdentity`<sup>Optional</sup> <a name="FileSystemIdentity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration.property.fileSystemIdentity"></a>

```go
FileSystemIdentity FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a>

The file system identity used to authorize file access requests made using the S3 access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#file_system_identity FsxS3AccessPointAttachment#file_system_identity}

---

##### `VolumeId`<sup>Optional</sup> <a name="VolumeId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration.property.volumeId"></a>

```go
VolumeId *string
```

- *Type:* *string

The ID of the FSx for OpenZFS volume that the S3 access point is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#volume_id FsxS3AccessPointAttachment#volume_id}

---

### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity {
	PosixUser: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity.property.posixUser">PosixUser</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a></code> | Specifies the UID and GIDs of the file system POSIX user. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity.property.type">Type</a></code> | <code>*string</code> | Specifies the FSx for OpenZFS user identity type, accepts only POSIX. |

---

##### `PosixUser`<sup>Optional</sup> <a name="PosixUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity.property.posixUser"></a>

```go
PosixUser FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a>

Specifies the UID and GIDs of the file system POSIX user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#posix_user FsxS3AccessPointAttachment#posix_user}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Specifies the FSx for OpenZFS user identity type, accepts only POSIX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}

---

### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser {
	Gid: *f64,
	SecondaryGids: interface{},
	Uid: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.property.gid">Gid</a></code> | <code>*f64</code> | The GID of the file system user. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.property.secondaryGids">SecondaryGids</a></code> | <code>interface{}</code> | The list of secondary GIDs for the file system user. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.property.uid">Uid</a></code> | <code>*f64</code> | The UID of the file system user. |

---

##### `Gid`<sup>Optional</sup> <a name="Gid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.property.gid"></a>

```go
Gid *f64
```

- *Type:* *f64

The GID of the file system user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#gid FsxS3AccessPointAttachment#gid}

---

##### `SecondaryGids`<sup>Optional</sup> <a name="SecondaryGids" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.property.secondaryGids"></a>

```go
SecondaryGids interface{}
```

- *Type:* interface{}

The list of secondary GIDs for the file system user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#secondary_gids FsxS3AccessPointAttachment#secondary_gids}

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.property.uid"></a>

```go
Uid *f64
```

- *Type:* *f64

The UID of the file system user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#uid FsxS3AccessPointAttachment#uid}

---

### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids {
	Gid: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids.property.gid">Gid</a></code> | <code>*f64</code> | The GID of the file system user. |

---

##### `Gid`<sup>Optional</sup> <a name="Gid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids.property.gid"></a>

```go
Gid *f64
```

- *Type:* *f64

The GID of the file system user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#gid FsxS3AccessPointAttachment#gid}

---

### FsxS3AccessPointAttachmentS3AccessPoint <a name="FsxS3AccessPointAttachmentS3AccessPoint" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentS3AccessPoint {
	Policy: *string,
	VpcConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.property.policy">Policy</a></code> | <code>*string</code> | The S3 access point's policy. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a></code> | The S3 access point's virtual private cloud (VPC) configuration. |

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

The S3 access point's policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#policy FsxS3AccessPointAttachment#policy}

---

##### `VpcConfiguration`<sup>Optional</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.property.vpcConfiguration"></a>

```go
VpcConfiguration FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a>

The S3 access point's virtual private cloud (VPC) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#vpc_configuration FsxS3AccessPointAttachment#vpc_configuration}

---

### FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration <a name="FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration {
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration.property.vpcId">VpcId</a></code> | <code>*string</code> | Specifies the virtual private cloud (VPC) for the S3 access point VPC configuration, if one exists. |

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Specifies the virtual private cloud (VPC) for the S3 access point VPC configuration, if one exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/fsx_s3_access_point_attachment#vpc_id FsxS3AccessPointAttachment#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference <a name="FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.putUnixUser">PutUnixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.putWindowsUser">PutWindowsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resetUnixUser">ResetUnixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resetWindowsUser">ResetWindowsUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUnixUser` <a name="PutUnixUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.putUnixUser"></a>

```go
func PutUnixUser(value FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.putUnixUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a>

---

##### `PutWindowsUser` <a name="PutWindowsUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.putWindowsUser"></a>

```go
func PutWindowsUser(value FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.putWindowsUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a>

---

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUnixUser` <a name="ResetUnixUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resetUnixUser"></a>

```go
func ResetUnixUser()
```

##### `ResetWindowsUser` <a name="ResetWindowsUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resetWindowsUser"></a>

```go
func ResetWindowsUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.unixUser">UnixUser</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.windowsUser">WindowsUser</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.unixUserInput">UnixUserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.windowsUserInput">WindowsUserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnixUser`<sup>Required</sup> <a name="UnixUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.unixUser"></a>

```go
func UnixUser() FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference</a>

---

##### `WindowsUser`<sup>Required</sup> <a name="WindowsUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.windowsUser"></a>

```go
func WindowsUser() FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UnixUserInput`<sup>Optional</sup> <a name="UnixUserInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.unixUserInput"></a>

```go
func UnixUserInput() interface{}
```

- *Type:* interface{}

---

##### `WindowsUserInput`<sup>Optional</sup> <a name="WindowsUserInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.windowsUserInput"></a>

```go
func WindowsUserInput() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference <a name="FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference <a name="FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentOntapConfigurationOutputReference <a name="FsxS3AccessPointAttachmentOntapConfigurationOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOntapConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxS3AccessPointAttachmentOntapConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.putFileSystemIdentity">PutFileSystemIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resetFileSystemIdentity">ResetFileSystemIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resetVolumeId">ResetVolumeId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFileSystemIdentity` <a name="PutFileSystemIdentity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.putFileSystemIdentity"></a>

```go
func PutFileSystemIdentity(value FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.putFileSystemIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a>

---

##### `ResetFileSystemIdentity` <a name="ResetFileSystemIdentity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resetFileSystemIdentity"></a>

```go
func ResetFileSystemIdentity()
```

##### `ResetVolumeId` <a name="ResetVolumeId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resetVolumeId"></a>

```go
func ResetVolumeId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fileSystemIdentity">FileSystemIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fileSystemIdentityInput">FileSystemIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.volumeIdInput">VolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileSystemIdentity`<sup>Required</sup> <a name="FileSystemIdentity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fileSystemIdentity"></a>

```go
func FileSystemIdentity() FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference</a>

---

##### `FileSystemIdentityInput`<sup>Optional</sup> <a name="FileSystemIdentityInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fileSystemIdentityInput"></a>

```go
func FileSystemIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.volumeIdInput"></a>

```go
func VolumeIdInput() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.putPosixUser">PutPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resetPosixUser">ResetPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPosixUser` <a name="PutPosixUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.putPosixUser"></a>

```go
func PutPosixUser(value FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.putPosixUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a>

---

##### `ResetPosixUser` <a name="ResetPosixUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resetPosixUser"></a>

```go
func ResetPosixUser()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.posixUser">PosixUser</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.posixUserInput">PosixUserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PosixUser`<sup>Required</sup> <a name="PosixUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.posixUser"></a>

```go
func PosixUser() FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference</a>

---

##### `PosixUserInput`<sup>Optional</sup> <a name="PosixUserInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.posixUserInput"></a>

```go
func PosixUserInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.putSecondaryGids">PutSecondaryGids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resetGid">ResetGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resetSecondaryGids">ResetSecondaryGids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resetUid">ResetUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecondaryGids` <a name="PutSecondaryGids" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.putSecondaryGids"></a>

```go
func PutSecondaryGids(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.putSecondaryGids.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGid` <a name="ResetGid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resetGid"></a>

```go
func ResetGid()
```

##### `ResetSecondaryGids` <a name="ResetSecondaryGids" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resetSecondaryGids"></a>

```go
func ResetSecondaryGids()
```

##### `ResetUid` <a name="ResetUid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resetUid"></a>

```go
func ResetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGids">SecondaryGids</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gidInput">GidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGidsInput">SecondaryGidsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uidInput">UidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gid">Gid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uid">Uid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecondaryGids`<sup>Required</sup> <a name="SecondaryGids" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGids"></a>

```go
func SecondaryGids() FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList</a>

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gidInput"></a>

```go
func GidInput() *f64
```

- *Type:* *f64

---

##### `SecondaryGidsInput`<sup>Optional</sup> <a name="SecondaryGidsInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGidsInput"></a>

```go
func SecondaryGidsInput() interface{}
```

- *Type:* interface{}

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uidInput"></a>

```go
func UidInput() *f64
```

- *Type:* *f64

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gid"></a>

```go
func Gid() *f64
```

- *Type:* *f64

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uid"></a>

```go
func Uid() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.get"></a>

```go
func Get(index *f64) FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resetGid">ResetGid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGid` <a name="ResetGid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resetGid"></a>

```go
func ResetGid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.gidInput">GidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.gid">Gid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.gidInput"></a>

```go
func GidInput() *f64
```

- *Type:* *f64

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.gid"></a>

```go
func Gid() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.putFileSystemIdentity">PutFileSystemIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resetFileSystemIdentity">ResetFileSystemIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resetVolumeId">ResetVolumeId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFileSystemIdentity` <a name="PutFileSystemIdentity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.putFileSystemIdentity"></a>

```go
func PutFileSystemIdentity(value FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.putFileSystemIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a>

---

##### `ResetFileSystemIdentity` <a name="ResetFileSystemIdentity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resetFileSystemIdentity"></a>

```go
func ResetFileSystemIdentity()
```

##### `ResetVolumeId` <a name="ResetVolumeId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resetVolumeId"></a>

```go
func ResetVolumeId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fileSystemIdentity">FileSystemIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fileSystemIdentityInput">FileSystemIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.volumeIdInput">VolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileSystemIdentity`<sup>Required</sup> <a name="FileSystemIdentity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fileSystemIdentity"></a>

```go
func FileSystemIdentity() FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference</a>

---

##### `FileSystemIdentityInput`<sup>Optional</sup> <a name="FileSystemIdentityInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fileSystemIdentityInput"></a>

```go
func FileSystemIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.volumeIdInput"></a>

```go
func VolumeIdInput() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentS3AccessPointOutputReference <a name="FsxS3AccessPointAttachmentS3AccessPointOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentS3AccessPointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxS3AccessPointAttachmentS3AccessPointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resetVpcConfiguration">ResetVpcConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.putVpcConfiguration"></a>

```go
func PutVpcConfiguration(value FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a>

---

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetVpcConfiguration` <a name="ResetVpcConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resetVpcConfiguration"></a>

```go
func ResetVpcConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference">FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfiguration"></a>

```go
func VpcConfiguration() FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference">FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfigurationInput"></a>

```go
func VpcConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference <a name="FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resetVpcId"></a>

```go
func ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



