# `configConfigurationRecorder` Submodule <a name="`configConfigurationRecorder` Submodule" id="@cdktn/provider-awscc.configConfigurationRecorder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigurationRecorder <a name="ConfigConfigurationRecorder" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder awscc_config_configuration_recorder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorder(scope Construct, id *string, config ConfigConfigurationRecorderConfig) ConfigConfigurationRecorder
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig">ConfigConfigurationRecorderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig">ConfigConfigurationRecorderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup">PutRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode">PutRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingGroup">ResetRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingMode">ResetRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetStartedOnCreate">ResetStartedOnCreate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRecordingGroup` <a name="PutRecordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup"></a>

```go
func PutRecordingGroup(value ConfigConfigurationRecorderRecordingGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

---

##### `PutRecordingMode` <a name="PutRecordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode"></a>

```go
func PutRecordingMode(value ConfigConfigurationRecorderRecordingMode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetName"></a>

```go
func ResetName()
```

##### `ResetRecordingGroup` <a name="ResetRecordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingGroup"></a>

```go
func ResetRecordingGroup()
```

##### `ResetRecordingMode` <a name="ResetRecordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingMode"></a>

```go
func ResetRecordingMode()
```

##### `ResetStartedOnCreate` <a name="ResetStartedOnCreate" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetStartedOnCreate"></a>

```go
func ResetStartedOnCreate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigConfigurationRecorder resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

configconfigurationrecorder.ConfigConfigurationRecorder_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

configconfigurationrecorder.ConfigConfigurationRecorder_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

configconfigurationrecorder.ConfigConfigurationRecorder_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

configconfigurationrecorder.ConfigConfigurationRecorder_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConfigConfigurationRecorder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigConfigurationRecorder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigConfigurationRecorder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConfigurationRecorder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroup">RecordingGroup</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference">ConfigConfigurationRecorderRecordingGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingMode">RecordingMode</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference">ConfigConfigurationRecorderRecordingModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroupInput">RecordingGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingModeInput">RecordingModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreateInput">StartedOnCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreate">StartedOnCreate</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RecordingGroup`<sup>Required</sup> <a name="RecordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroup"></a>

```go
func RecordingGroup() ConfigConfigurationRecorderRecordingGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference">ConfigConfigurationRecorderRecordingGroupOutputReference</a>

---

##### `RecordingMode`<sup>Required</sup> <a name="RecordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingMode"></a>

```go
func RecordingMode() ConfigConfigurationRecorderRecordingModeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference">ConfigConfigurationRecorderRecordingModeOutputReference</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecordingGroupInput`<sup>Optional</sup> <a name="RecordingGroupInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroupInput"></a>

```go
func RecordingGroupInput() interface{}
```

- *Type:* interface{}

---

##### `RecordingModeInput`<sup>Optional</sup> <a name="RecordingModeInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingModeInput"></a>

```go
func RecordingModeInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `StartedOnCreateInput`<sup>Optional</sup> <a name="StartedOnCreateInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreateInput"></a>

```go
func StartedOnCreateInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `StartedOnCreate`<sup>Required</sup> <a name="StartedOnCreate" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreate"></a>

```go
func StartedOnCreate() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigurationRecorderConfig <a name="ConfigConfigurationRecorderConfig" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	RoleArn: *string,
	Name: *string,
	RecordingGroup: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup,
	RecordingMode: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode,
	StartedOnCreate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.name">Name</a></code> | <code>*string</code> | The name of the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingGroup">RecordingGroup</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | Specifies which resource types are in scope for the configuration recorder to record. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingMode">RecordingMode</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | Specifies the default recording frequency for the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.startedOnCreate">StartedOnCreate</a></code> | <code>interface{}</code> | Defaults to 'true'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the configuration recorder.

By default, AWS Config assigns the name "default" when creating the configuration recorder. To change the configuration recorder name, you must use the DeleteConfigurationRecorder action to delete your current configuration recorder, and then you must use the PutConfigurationRecorder command to create a configuration recorder that has the desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#name ConfigConfigurationRecorder#name}

---

##### `RecordingGroup`<sup>Optional</sup> <a name="RecordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingGroup"></a>

```go
RecordingGroup ConfigConfigurationRecorderRecordingGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

Specifies which resource types are in scope for the configuration recorder to record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_group ConfigConfigurationRecorder#recording_group}

---

##### `RecordingMode`<sup>Optional</sup> <a name="RecordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingMode"></a>

```go
RecordingMode ConfigConfigurationRecorderRecordingMode
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

Specifies the default recording frequency for the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_mode ConfigConfigurationRecorder#recording_mode}

---

##### `StartedOnCreate`<sup>Optional</sup> <a name="StartedOnCreate" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.startedOnCreate"></a>

```go
StartedOnCreate interface{}
```

- *Type:* interface{}

Defaults to 'true'.

Controls whether the recorder starts recording after the create operation. Set this to 'false' for development and testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#started_on_create ConfigConfigurationRecorder#started_on_create}

---

### ConfigConfigurationRecorderRecordingGroup <a name="ConfigConfigurationRecorderRecordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderRecordingGroup {
	AllSupported: interface{},
	ExclusionByResourceTypes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes,
	IncludeGlobalResourceTypes: interface{},
	RecordingStrategy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy,
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.allSupported">AllSupported</a></code> | <code>interface{}</code> | Specifies whether AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.exclusionByResourceTypes">ExclusionByResourceTypes</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a></code> | An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.includeGlobalResourceTypes">IncludeGlobalResourceTypes</a></code> | <code>interface{}</code> | This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.recordingStrategy">RecordingStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a></code> | An object that specifies the recording strategy for the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | A comma-separated list that specifies which resource types AWS Config records. |

---

##### `AllSupported`<sup>Optional</sup> <a name="AllSupported" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.allSupported"></a>

```go
AllSupported interface{}
```

- *Type:* interface{}

Specifies whether AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}

---

##### `ExclusionByResourceTypes`<sup>Optional</sup> <a name="ExclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.exclusionByResourceTypes"></a>

```go
ExclusionByResourceTypes ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#exclusion_by_resource_types ConfigConfigurationRecorder#exclusion_by_resource_types}

---

##### `IncludeGlobalResourceTypes`<sup>Optional</sup> <a name="IncludeGlobalResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.includeGlobalResourceTypes"></a>

```go
IncludeGlobalResourceTypes interface{}
```

- *Type:* interface{}

This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}

---

##### `RecordingStrategy`<sup>Optional</sup> <a name="RecordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.recordingStrategy"></a>

```go
RecordingStrategy ConfigConfigurationRecorderRecordingGroupRecordingStrategy
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

An object that specifies the recording strategy for the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_strategy ConfigConfigurationRecorder#recording_strategy}

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

A comma-separated list that specifies which resource types AWS Config records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

### ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes <a name="ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes {
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | A comma-separated list of resource types to exclude from recording by the configuration recorder. |

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

A comma-separated list of resource types to exclude from recording by the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

### ConfigConfigurationRecorderRecordingGroupRecordingStrategy <a name="ConfigConfigurationRecorderRecordingGroupRecordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy {
	UseOnly: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.property.useOnly">UseOnly</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}. |

---

##### `UseOnly`<sup>Optional</sup> <a name="UseOnly" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.property.useOnly"></a>

```go
UseOnly *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}.

---

### ConfigConfigurationRecorderRecordingMode <a name="ConfigConfigurationRecorderRecordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderRecordingMode {
	RecordingFrequency: *string,
	RecordingModeOverrides: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingFrequency">RecordingFrequency</a></code> | <code>*string</code> | The default recording frequency that AWS Config uses to record configuration changes. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingModeOverrides">RecordingModeOverrides</a></code> | <code>interface{}</code> | An array of 'RecordingModeOverride' objects for you to specify your overrides for the recording mode. |

---

##### `RecordingFrequency`<sup>Optional</sup> <a name="RecordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingFrequency"></a>

```go
RecordingFrequency *string
```

- *Type:* *string

The default recording frequency that AWS Config uses to record configuration changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}

---

##### `RecordingModeOverrides`<sup>Optional</sup> <a name="RecordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingModeOverrides"></a>

```go
RecordingModeOverrides interface{}
```

- *Type:* interface{}

An array of 'RecordingModeOverride' objects for you to specify your overrides for the recording mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_mode_overrides ConfigConfigurationRecorder#recording_mode_overrides}

---

### ConfigConfigurationRecorderRecordingModeRecordingModeOverrides <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

&configconfigurationrecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides {
	Description: *string,
	RecordingFrequency: *string,
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.description">Description</a></code> | <code>*string</code> | A description that you provide for the override. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.recordingFrequency">RecordingFrequency</a></code> | <code>*string</code> | The recording frequency that will be applied to all the resource types specified in the override. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | A comma-separated list that specifies which resource types AWS Config includes in the override. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description that you provide for the override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#description ConfigConfigurationRecorder#description}

---

##### `RecordingFrequency`<sup>Optional</sup> <a name="RecordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.recordingFrequency"></a>

```go
RecordingFrequency *string
```

- *Type:* *string

The recording frequency that will be applied to all the resource types specified in the override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

A comma-separated list that specifies which resource types AWS Config includes in the override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference <a name="ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigurationRecorderRecordingGroupOutputReference <a name="ConfigConfigurationRecorderRecordingGroupOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorderRecordingGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConfigurationRecorderRecordingGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes">PutExclusionByResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy">PutRecordingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetAllSupported">ResetAllSupported</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetExclusionByResourceTypes">ResetExclusionByResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetIncludeGlobalResourceTypes">ResetIncludeGlobalResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetRecordingStrategy">ResetRecordingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusionByResourceTypes` <a name="PutExclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes"></a>

```go
func PutExclusionByResourceTypes(value ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

---

##### `PutRecordingStrategy` <a name="PutRecordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy"></a>

```go
func PutRecordingStrategy(value ConfigConfigurationRecorderRecordingGroupRecordingStrategy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

---

##### `ResetAllSupported` <a name="ResetAllSupported" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetAllSupported"></a>

```go
func ResetAllSupported()
```

##### `ResetExclusionByResourceTypes` <a name="ResetExclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetExclusionByResourceTypes"></a>

```go
func ResetExclusionByResourceTypes()
```

##### `ResetIncludeGlobalResourceTypes` <a name="ResetIncludeGlobalResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetIncludeGlobalResourceTypes"></a>

```go
func ResetIncludeGlobalResourceTypes()
```

##### `ResetRecordingStrategy` <a name="ResetRecordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetRecordingStrategy"></a>

```go
func ResetRecordingStrategy()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypes">ExclusionByResourceTypes</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategy">RecordingStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference">ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupportedInput">AllSupportedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypesInput">ExclusionByResourceTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypesInput">IncludeGlobalResourceTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategyInput">RecordingStrategyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupported">AllSupported</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypes">IncludeGlobalResourceTypes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExclusionByResourceTypes`<sup>Required</sup> <a name="ExclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypes"></a>

```go
func ExclusionByResourceTypes() ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference</a>

---

##### `RecordingStrategy`<sup>Required</sup> <a name="RecordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategy"></a>

```go
func RecordingStrategy() ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference">ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference</a>

---

##### `AllSupportedInput`<sup>Optional</sup> <a name="AllSupportedInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupportedInput"></a>

```go
func AllSupportedInput() interface{}
```

- *Type:* interface{}

---

##### `ExclusionByResourceTypesInput`<sup>Optional</sup> <a name="ExclusionByResourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypesInput"></a>

```go
func ExclusionByResourceTypesInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeGlobalResourceTypesInput`<sup>Optional</sup> <a name="IncludeGlobalResourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypesInput"></a>

```go
func IncludeGlobalResourceTypesInput() interface{}
```

- *Type:* interface{}

---

##### `RecordingStrategyInput`<sup>Optional</sup> <a name="RecordingStrategyInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategyInput"></a>

```go
func RecordingStrategyInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllSupported`<sup>Required</sup> <a name="AllSupported" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupported"></a>

```go
func AllSupported() interface{}
```

- *Type:* interface{}

---

##### `IncludeGlobalResourceTypes`<sup>Required</sup> <a name="IncludeGlobalResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypes"></a>

```go
func IncludeGlobalResourceTypes() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference <a name="ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resetUseOnly">ResetUseOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseOnly` <a name="ResetUseOnly" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resetUseOnly"></a>

```go
func ResetUseOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnlyInput">UseOnlyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnly">UseOnly</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UseOnlyInput`<sup>Optional</sup> <a name="UseOnlyInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnlyInput"></a>

```go
func UseOnlyInput() *string
```

- *Type:* *string

---

##### `UseOnly`<sup>Required</sup> <a name="UseOnly" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnly"></a>

```go
func UseOnly() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigurationRecorderRecordingModeOutputReference <a name="ConfigConfigurationRecorderRecordingModeOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorderRecordingModeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConfigurationRecorderRecordingModeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverrides">PutRecordingModeOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingFrequency">ResetRecordingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingModeOverrides">ResetRecordingModeOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecordingModeOverrides` <a name="PutRecordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverrides"></a>

```go
func PutRecordingModeOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRecordingFrequency` <a name="ResetRecordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingFrequency"></a>

```go
func ResetRecordingFrequency()
```

##### `ResetRecordingModeOverrides` <a name="ResetRecordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingModeOverrides"></a>

```go
func ResetRecordingModeOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverrides">RecordingModeOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList">ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequencyInput">RecordingFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverridesInput">RecordingModeOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequency">RecordingFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecordingModeOverrides`<sup>Required</sup> <a name="RecordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverrides"></a>

```go
func RecordingModeOverrides() ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList">ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList</a>

---

##### `RecordingFrequencyInput`<sup>Optional</sup> <a name="RecordingFrequencyInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequencyInput"></a>

```go
func RecordingFrequencyInput() *string
```

- *Type:* *string

---

##### `RecordingModeOverridesInput`<sup>Optional</sup> <a name="RecordingModeOverridesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverridesInput"></a>

```go
func RecordingModeOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `RecordingFrequency`<sup>Required</sup> <a name="RecordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequency"></a>

```go
func RecordingFrequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorderRecordingModeRecordingModeOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get"></a>

```go
func Get(index *f64) ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationrecorder"

configconfigurationrecorder.NewConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetRecordingFrequency">ResetRecordingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRecordingFrequency` <a name="ResetRecordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetRecordingFrequency"></a>

```go
func ResetRecordingFrequency()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequencyInput">RecordingFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequency">RecordingFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `RecordingFrequencyInput`<sup>Optional</sup> <a name="RecordingFrequencyInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequencyInput"></a>

```go
func RecordingFrequencyInput() *string
```

- *Type:* *string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `RecordingFrequency`<sup>Required</sup> <a name="RecordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequency"></a>

```go
func RecordingFrequency() *string
```

- *Type:* *string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



