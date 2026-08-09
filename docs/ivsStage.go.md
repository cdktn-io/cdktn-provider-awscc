# `ivsStage` Submodule <a name="`ivsStage` Submodule" id="@cdktn/provider-awscc.ivsStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsStage <a name="IvsStage" id="@cdktn/provider-awscc.ivsStage.IvsStage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage awscc_ivs_stage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

ivsstage.NewIvsStage(scope Construct, id *string, config IvsStageConfig) IvsStage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig">IvsStageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig">IvsStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.putAutoParticipantRecordingConfiguration">PutAutoParticipantRecordingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.resetAutoParticipantRecordingConfiguration">ResetAutoParticipantRecordingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsStage.IvsStage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ivsStage.IvsStage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ivsStage.IvsStage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ivsStage.IvsStage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ivsStage.IvsStage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ivsStage.IvsStage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ivsStage.IvsStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ivsStage.IvsStage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ivsStage.IvsStage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ivsStage.IvsStage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ivsStage.IvsStage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ivsStage.IvsStage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsStage.IvsStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ivsStage.IvsStage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ivsStage.IvsStage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStage.IvsStage.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoParticipantRecordingConfiguration` <a name="PutAutoParticipantRecordingConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStage.putAutoParticipantRecordingConfiguration"></a>

```go
func PutAutoParticipantRecordingConfiguration(value IvsStageAutoParticipantRecordingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStage.putAutoParticipantRecordingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ivsStage.IvsStage.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStage.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoParticipantRecordingConfiguration` <a name="ResetAutoParticipantRecordingConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStage.resetAutoParticipantRecordingConfiguration"></a>

```go
func ResetAutoParticipantRecordingConfiguration()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ivsStage.IvsStage.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ivsStage.IvsStage.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IvsStage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ivsStage.IvsStage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

ivsstage.IvsStage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsStage.IvsStage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

ivsstage.IvsStage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

ivsstage.IvsStage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

ivsstage.IvsStage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IvsStage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IvsStage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IvsStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IvsStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.activeSessionId">ActiveSessionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.autoParticipantRecordingConfiguration">AutoParticipantRecordingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList">IvsStageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.autoParticipantRecordingConfigurationInput">AutoParticipantRecordingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActiveSessionId`<sup>Required</sup> <a name="ActiveSessionId" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.activeSessionId"></a>

```go
func ActiveSessionId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoParticipantRecordingConfiguration`<sup>Required</sup> <a name="AutoParticipantRecordingConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.autoParticipantRecordingConfiguration"></a>

```go
func AutoParticipantRecordingConfiguration() IvsStageAutoParticipantRecordingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.tags"></a>

```go
func Tags() IvsStageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList">IvsStageTagsList</a>

---

##### `AutoParticipantRecordingConfigurationInput`<sup>Optional</sup> <a name="AutoParticipantRecordingConfigurationInput" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.autoParticipantRecordingConfigurationInput"></a>

```go
func AutoParticipantRecordingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IvsStageAutoParticipantRecordingConfiguration <a name="IvsStageAutoParticipantRecordingConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

&ivsstage.IvsStageAutoParticipantRecordingConfiguration {
	HlsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration,
	MediaTypes: *[]*string,
	RecordingReconnectWindowSeconds: *f64,
	StorageConfigurationArn: *string,
	ThumbnailConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.hlsConfiguration">HlsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a></code> | HLS configuration object for individual participant recording. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.mediaTypes">MediaTypes</a></code> | <code>*[]*string</code> | Types of media to be recorded. Default: AUDIO_VIDEO. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.recordingReconnectWindowSeconds">RecordingReconnectWindowSeconds</a></code> | <code>*f64</code> | If a stage publisher disconnects and then reconnects within the specified interval, the multiple recordings will be considered a single recording and merged together. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.storageConfigurationArn">StorageConfigurationArn</a></code> | <code>*string</code> | ARN of the StorageConfiguration resource to use for individual participant recording. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.thumbnailConfiguration">ThumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a></code> | A complex type that allows you to enable/disable the recording of thumbnails for individual participant recording and modify the interval at which thumbnails are generated for the live session. |

---

##### `HlsConfiguration`<sup>Optional</sup> <a name="HlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.hlsConfiguration"></a>

```go
HlsConfiguration IvsStageAutoParticipantRecordingConfigurationHlsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a>

HLS configuration object for individual participant recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#hls_configuration IvsStage#hls_configuration}

---

##### `MediaTypes`<sup>Optional</sup> <a name="MediaTypes" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.mediaTypes"></a>

```go
MediaTypes *[]*string
```

- *Type:* *[]*string

Types of media to be recorded. Default: AUDIO_VIDEO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#media_types IvsStage#media_types}

---

##### `RecordingReconnectWindowSeconds`<sup>Optional</sup> <a name="RecordingReconnectWindowSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.recordingReconnectWindowSeconds"></a>

```go
RecordingReconnectWindowSeconds *f64
```

- *Type:* *f64

If a stage publisher disconnects and then reconnects within the specified interval, the multiple recordings will be considered a single recording and merged together.

The default value is 0, which disables merging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#recording_reconnect_window_seconds IvsStage#recording_reconnect_window_seconds}

---

##### `StorageConfigurationArn`<sup>Optional</sup> <a name="StorageConfigurationArn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.storageConfigurationArn"></a>

```go
StorageConfigurationArn *string
```

- *Type:* *string

ARN of the StorageConfiguration resource to use for individual participant recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#storage_configuration_arn IvsStage#storage_configuration_arn}

---

##### `ThumbnailConfiguration`<sup>Optional</sup> <a name="ThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.thumbnailConfiguration"></a>

```go
ThumbnailConfiguration IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a>

A complex type that allows you to enable/disable the recording of thumbnails for individual participant recording and modify the interval at which thumbnails are generated for the live session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#thumbnail_configuration IvsStage#thumbnail_configuration}

---

### IvsStageAutoParticipantRecordingConfigurationHlsConfiguration <a name="IvsStageAutoParticipantRecordingConfigurationHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

&ivsstage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration {
	ParticipantRecordingHlsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration.property.participantRecordingHlsConfiguration">ParticipantRecordingHlsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a></code> | An object representing a configuration of participant HLS recordings for individual participant recording. |

---

##### `ParticipantRecordingHlsConfiguration`<sup>Optional</sup> <a name="ParticipantRecordingHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration.property.participantRecordingHlsConfiguration"></a>

```go
ParticipantRecordingHlsConfiguration IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a>

An object representing a configuration of participant HLS recordings for individual participant recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#participant_recording_hls_configuration IvsStage#participant_recording_hls_configuration}

---

### IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration <a name="IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

&ivsstage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration {
	TargetSegmentDurationSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration.property.targetSegmentDurationSeconds">TargetSegmentDurationSeconds</a></code> | <code>*f64</code> | Defines the target duration for recorded segments generated when recording a stage participant. |

---

##### `TargetSegmentDurationSeconds`<sup>Optional</sup> <a name="TargetSegmentDurationSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration.property.targetSegmentDurationSeconds"></a>

```go
TargetSegmentDurationSeconds *f64
```

- *Type:* *f64

Defines the target duration for recorded segments generated when recording a stage participant.

Segments may have durations longer than the specified value when needed to ensure each segment begins with a keyframe. Default: 6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#target_segment_duration_seconds IvsStage#target_segment_duration_seconds}

---

### IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration <a name="IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

&ivsstage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration {
	ParticipantThumbnailConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration.property.participantThumbnailConfiguration">ParticipantThumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a></code> | An object representing a configuration of thumbnails for recorded video from an individual participant. |

---

##### `ParticipantThumbnailConfiguration`<sup>Optional</sup> <a name="ParticipantThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration.property.participantThumbnailConfiguration"></a>

```go
ParticipantThumbnailConfiguration IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a>

An object representing a configuration of thumbnails for recorded video from an individual participant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#participant_thumbnail_configuration IvsStage#participant_thumbnail_configuration}

---

### IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration <a name="IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

&ivsstage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration {
	RecordingMode: *string,
	Storage: *[]*string,
	TargetIntervalSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.recordingMode">RecordingMode</a></code> | <code>*string</code> | Thumbnail recording mode. Default: DISABLED. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.storage">Storage</a></code> | <code>*[]*string</code> | Indicates the format in which thumbnails are recorded. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.targetIntervalSeconds">TargetIntervalSeconds</a></code> | <code>*f64</code> | The targeted thumbnail-generation interval in seconds. This is configurable only if recordingMode is INTERVAL. Default: 60. |

---

##### `RecordingMode`<sup>Optional</sup> <a name="RecordingMode" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.recordingMode"></a>

```go
RecordingMode *string
```

- *Type:* *string

Thumbnail recording mode. Default: DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#recording_mode IvsStage#recording_mode}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.storage"></a>

```go
Storage *[]*string
```

- *Type:* *[]*string

Indicates the format in which thumbnails are recorded.

SEQUENTIAL records all generated thumbnails in a serial manner, to the media/thumbnails/high directory. LATEST saves the latest thumbnail in media/latest_thumbnail/high/thumb.jpg and overwrites it at the interval specified by targetIntervalSeconds. You can enable both SEQUENTIAL and LATEST. Default: SEQUENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#storage IvsStage#storage}

---

##### `TargetIntervalSeconds`<sup>Optional</sup> <a name="TargetIntervalSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.targetIntervalSeconds"></a>

```go
TargetIntervalSeconds *f64
```

- *Type:* *f64

The targeted thumbnail-generation interval in seconds. This is configurable only if recordingMode is INTERVAL. Default: 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#target_interval_seconds IvsStage#target_interval_seconds}

---

### IvsStageConfig <a name="IvsStageConfig" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

&ivsstage.IvsStageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AutoParticipantRecordingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration,
	Name: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.autoParticipantRecordingConfiguration">AutoParticipantRecordingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a></code> | Configuration object for individual participant recording, to attach to the new stage. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.name">Name</a></code> | <code>*string</code> | Stage name. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoParticipantRecordingConfiguration`<sup>Optional</sup> <a name="AutoParticipantRecordingConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.autoParticipantRecordingConfiguration"></a>

```go
AutoParticipantRecordingConfiguration IvsStageAutoParticipantRecordingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a>

Configuration object for individual participant recording, to attach to the new stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#auto_participant_recording_configuration IvsStage#auto_participant_recording_configuration}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Stage name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#name IvsStage#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#tags IvsStage#tags}

---

### IvsStageTags <a name="IvsStageTags" id="@cdktn/provider-awscc.ivsStage.IvsStageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

&ivsstage.IvsStageTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ivsStage.IvsStageTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#key IvsStage#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ivsStage.IvsStageTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ivs_stage#value IvsStage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

ivsstage.NewIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.putParticipantRecordingHlsConfiguration">PutParticipantRecordingHlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resetParticipantRecordingHlsConfiguration">ResetParticipantRecordingHlsConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParticipantRecordingHlsConfiguration` <a name="PutParticipantRecordingHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.putParticipantRecordingHlsConfiguration"></a>

```go
func PutParticipantRecordingHlsConfiguration(value IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.putParticipantRecordingHlsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a>

---

##### `ResetParticipantRecordingHlsConfiguration` <a name="ResetParticipantRecordingHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resetParticipantRecordingHlsConfiguration"></a>

```go
func ResetParticipantRecordingHlsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfiguration">ParticipantRecordingHlsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfigurationInput">ParticipantRecordingHlsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParticipantRecordingHlsConfiguration`<sup>Required</sup> <a name="ParticipantRecordingHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfiguration"></a>

```go
func ParticipantRecordingHlsConfiguration() IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference</a>

---

##### `ParticipantRecordingHlsConfigurationInput`<sup>Optional</sup> <a name="ParticipantRecordingHlsConfigurationInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfigurationInput"></a>

```go
func ParticipantRecordingHlsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

ivsstage.NewIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resetTargetSegmentDurationSeconds">ResetTargetSegmentDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetSegmentDurationSeconds` <a name="ResetTargetSegmentDurationSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resetTargetSegmentDurationSeconds"></a>

```go
func ResetTargetSegmentDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSecondsInput">TargetSegmentDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSeconds">TargetSegmentDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetSegmentDurationSecondsInput`<sup>Optional</sup> <a name="TargetSegmentDurationSecondsInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSecondsInput"></a>

```go
func TargetSegmentDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `TargetSegmentDurationSeconds`<sup>Required</sup> <a name="TargetSegmentDurationSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSeconds"></a>

```go
func TargetSegmentDurationSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IvsStageAutoParticipantRecordingConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

ivsstage.NewIvsStageAutoParticipantRecordingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IvsStageAutoParticipantRecordingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putHlsConfiguration">PutHlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putThumbnailConfiguration">PutThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetHlsConfiguration">ResetHlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetMediaTypes">ResetMediaTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetRecordingReconnectWindowSeconds">ResetRecordingReconnectWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetStorageConfigurationArn">ResetStorageConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetThumbnailConfiguration">ResetThumbnailConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHlsConfiguration` <a name="PutHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putHlsConfiguration"></a>

```go
func PutHlsConfiguration(value IvsStageAutoParticipantRecordingConfigurationHlsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putHlsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a>

---

##### `PutThumbnailConfiguration` <a name="PutThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putThumbnailConfiguration"></a>

```go
func PutThumbnailConfiguration(value IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putThumbnailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a>

---

##### `ResetHlsConfiguration` <a name="ResetHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetHlsConfiguration"></a>

```go
func ResetHlsConfiguration()
```

##### `ResetMediaTypes` <a name="ResetMediaTypes" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetMediaTypes"></a>

```go
func ResetMediaTypes()
```

##### `ResetRecordingReconnectWindowSeconds` <a name="ResetRecordingReconnectWindowSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetRecordingReconnectWindowSeconds"></a>

```go
func ResetRecordingReconnectWindowSeconds()
```

##### `ResetStorageConfigurationArn` <a name="ResetStorageConfigurationArn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetStorageConfigurationArn"></a>

```go
func ResetStorageConfigurationArn()
```

##### `ResetThumbnailConfiguration` <a name="ResetThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetThumbnailConfiguration"></a>

```go
func ResetThumbnailConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfiguration">HlsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfiguration">ThumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfigurationInput">HlsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypesInput">MediaTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSecondsInput">RecordingReconnectWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArnInput">StorageConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfigurationInput">ThumbnailConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypes">MediaTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSeconds">RecordingReconnectWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArn">StorageConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HlsConfiguration`<sup>Required</sup> <a name="HlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfiguration"></a>

```go
func HlsConfiguration() IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference</a>

---

##### `ThumbnailConfiguration`<sup>Required</sup> <a name="ThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfiguration"></a>

```go
func ThumbnailConfiguration() IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference</a>

---

##### `HlsConfigurationInput`<sup>Optional</sup> <a name="HlsConfigurationInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfigurationInput"></a>

```go
func HlsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MediaTypesInput`<sup>Optional</sup> <a name="MediaTypesInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypesInput"></a>

```go
func MediaTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RecordingReconnectWindowSecondsInput`<sup>Optional</sup> <a name="RecordingReconnectWindowSecondsInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSecondsInput"></a>

```go
func RecordingReconnectWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `StorageConfigurationArnInput`<sup>Optional</sup> <a name="StorageConfigurationArnInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArnInput"></a>

```go
func StorageConfigurationArnInput() *string
```

- *Type:* *string

---

##### `ThumbnailConfigurationInput`<sup>Optional</sup> <a name="ThumbnailConfigurationInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfigurationInput"></a>

```go
func ThumbnailConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MediaTypes`<sup>Required</sup> <a name="MediaTypes" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypes"></a>

```go
func MediaTypes() *[]*string
```

- *Type:* *[]*string

---

##### `RecordingReconnectWindowSeconds`<sup>Required</sup> <a name="RecordingReconnectWindowSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSeconds"></a>

```go
func RecordingReconnectWindowSeconds() *f64
```

- *Type:* *f64

---

##### `StorageConfigurationArn`<sup>Required</sup> <a name="StorageConfigurationArn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArn"></a>

```go
func StorageConfigurationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

ivsstage.NewIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.putParticipantThumbnailConfiguration">PutParticipantThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resetParticipantThumbnailConfiguration">ResetParticipantThumbnailConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParticipantThumbnailConfiguration` <a name="PutParticipantThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.putParticipantThumbnailConfiguration"></a>

```go
func PutParticipantThumbnailConfiguration(value IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.putParticipantThumbnailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a>

---

##### `ResetParticipantThumbnailConfiguration` <a name="ResetParticipantThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resetParticipantThumbnailConfiguration"></a>

```go
func ResetParticipantThumbnailConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfiguration">ParticipantThumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfigurationInput">ParticipantThumbnailConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParticipantThumbnailConfiguration`<sup>Required</sup> <a name="ParticipantThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfiguration"></a>

```go
func ParticipantThumbnailConfiguration() IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference</a>

---

##### `ParticipantThumbnailConfigurationInput`<sup>Optional</sup> <a name="ParticipantThumbnailConfigurationInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfigurationInput"></a>

```go
func ParticipantThumbnailConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

ivsstage.NewIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetRecordingMode">ResetRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetTargetIntervalSeconds">ResetTargetIntervalSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRecordingMode` <a name="ResetRecordingMode" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetRecordingMode"></a>

```go
func ResetRecordingMode()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetStorage"></a>

```go
func ResetStorage()
```

##### `ResetTargetIntervalSeconds` <a name="ResetTargetIntervalSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetTargetIntervalSeconds"></a>

```go
func ResetTargetIntervalSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingModeInput">RecordingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storageInput">StorageInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSecondsInput">TargetIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingMode">RecordingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storage">Storage</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSeconds">TargetIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecordingModeInput`<sup>Optional</sup> <a name="RecordingModeInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingModeInput"></a>

```go
func RecordingModeInput() *string
```

- *Type:* *string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storageInput"></a>

```go
func StorageInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetIntervalSecondsInput`<sup>Optional</sup> <a name="TargetIntervalSecondsInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSecondsInput"></a>

```go
func TargetIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `RecordingMode`<sup>Required</sup> <a name="RecordingMode" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingMode"></a>

```go
func RecordingMode() *string
```

- *Type:* *string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storage"></a>

```go
func Storage() *[]*string
```

- *Type:* *[]*string

---

##### `TargetIntervalSeconds`<sup>Required</sup> <a name="TargetIntervalSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSeconds"></a>

```go
func TargetIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IvsStageTagsList <a name="IvsStageTagsList" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

ivsstage.NewIvsStageTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IvsStageTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.get"></a>

```go
func Get(index *f64) IvsStageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IvsStageTagsOutputReference <a name="IvsStageTagsOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ivsstage"

ivsstage.NewIvsStageTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IvsStageTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



