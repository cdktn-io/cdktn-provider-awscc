# `codepipelineCustomActionType` Submodule <a name="`codepipelineCustomActionType` Submodule" id="@cdktn/provider-awscc.codepipelineCustomActionType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodepipelineCustomActionType <a name="CodepipelineCustomActionType" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type awscc_codepipeline_custom_action_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionType(scope Construct, id *string, config CodepipelineCustomActionTypeConfig) CodepipelineCustomActionType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig">CodepipelineCustomActionTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig">CodepipelineCustomActionTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperties">PutConfigurationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails">PutInputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails">PutOutputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetConfigurationProperties">ResetConfigurationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigurationProperties` <a name="PutConfigurationProperties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperties"></a>

```go
func PutConfigurationProperties(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperties.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInputArtifactDetails` <a name="PutInputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails"></a>

```go
func PutInputArtifactDetails(value CodepipelineCustomActionTypeInputArtifactDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---

##### `PutOutputArtifactDetails` <a name="PutOutputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails"></a>

```go
func PutOutputArtifactDetails(value CodepipelineCustomActionTypeOutputArtifactDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings"></a>

```go
func PutSettings(value CodepipelineCustomActionTypeSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfigurationProperties` <a name="ResetConfigurationProperties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetConfigurationProperties"></a>

```go
func ResetConfigurationProperties()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodepipelineCustomActionType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

codepipelinecustomactiontype.CodepipelineCustomActionType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

codepipelinecustomactiontype.CodepipelineCustomActionType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

codepipelinecustomactiontype.CodepipelineCustomActionType_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

codepipelinecustomactiontype.CodepipelineCustomActionType_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CodepipelineCustomActionType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CodepipelineCustomActionType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CodepipelineCustomActionType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CodepipelineCustomActionType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationProperties">ConfigurationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList">CodepipelineCustomActionTypeConfigurationPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.customActionTypeId">CustomActionTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetails">InputArtifactDetails</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference">CodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetails">OutputArtifactDetails</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference">CodepipelineCustomActionTypeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList">CodepipelineCustomActionTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationPropertiesInput">ConfigurationPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetailsInput">InputArtifactDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetailsInput">OutputArtifactDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.settingsInput">SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationProperties`<sup>Required</sup> <a name="ConfigurationProperties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationProperties"></a>

```go
func ConfigurationProperties() CodepipelineCustomActionTypeConfigurationPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList">CodepipelineCustomActionTypeConfigurationPropertiesList</a>

---

##### `CustomActionTypeId`<sup>Required</sup> <a name="CustomActionTypeId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.customActionTypeId"></a>

```go
func CustomActionTypeId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputArtifactDetails`<sup>Required</sup> <a name="InputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetails"></a>

```go
func InputArtifactDetails() CodepipelineCustomActionTypeInputArtifactDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference">CodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a>

---

##### `OutputArtifactDetails`<sup>Required</sup> <a name="OutputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetails"></a>

```go
func OutputArtifactDetails() CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a>

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.settings"></a>

```go
func Settings() CodepipelineCustomActionTypeSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference">CodepipelineCustomActionTypeSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tags"></a>

```go
func Tags() CodepipelineCustomActionTypeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList">CodepipelineCustomActionTypeTagsList</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `ConfigurationPropertiesInput`<sup>Optional</sup> <a name="ConfigurationPropertiesInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationPropertiesInput"></a>

```go
func ConfigurationPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `InputArtifactDetailsInput`<sup>Optional</sup> <a name="InputArtifactDetailsInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetailsInput"></a>

```go
func InputArtifactDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `OutputArtifactDetailsInput`<sup>Optional</sup> <a name="OutputArtifactDetailsInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetailsInput"></a>

```go
func OutputArtifactDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.settingsInput"></a>

```go
func SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineCustomActionTypeConfig <a name="CodepipelineCustomActionTypeConfig" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

&codepipelinecustomactiontype.CodepipelineCustomActionTypeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Category: *string,
	InputArtifactDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails,
	OutputArtifactDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails,
	ProviderName: *string,
	Version: *string,
	ConfigurationProperties: interface{},
	Settings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.category">Category</a></code> | <code>*string</code> | The category of the custom action, such as a build action or a test action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.inputArtifactDetails">InputArtifactDetails</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | The details of the input artifact for the action, such as its commit ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.outputArtifactDetails">OutputArtifactDetails</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | The details of the output artifact of the action, such as its commit ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | The provider of the service used in the custom action, such as AWS CodeDeploy. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.version">Version</a></code> | <code>*string</code> | The version identifier of the custom action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.configurationProperties">ConfigurationProperties</a></code> | <code>interface{}</code> | The configuration properties for the custom action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | URLs that provide users information about this custom action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Any tags assigned to the custom action. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.category"></a>

```go
Category *string
```

- *Type:* *string

The category of the custom action, such as a build action or a test action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}

---

##### `InputArtifactDetails`<sup>Required</sup> <a name="InputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.inputArtifactDetails"></a>

```go
InputArtifactDetails CodepipelineCustomActionTypeInputArtifactDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

The details of the input artifact for the action, such as its commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#input_artifact_details CodepipelineCustomActionType#input_artifact_details}

---

##### `OutputArtifactDetails`<sup>Required</sup> <a name="OutputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.outputArtifactDetails"></a>

```go
OutputArtifactDetails CodepipelineCustomActionTypeOutputArtifactDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

The details of the output artifact of the action, such as its commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#output_artifact_details CodepipelineCustomActionType#output_artifact_details}

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

The provider of the service used in the custom action, such as AWS CodeDeploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The version identifier of the custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}

---

##### `ConfigurationProperties`<sup>Optional</sup> <a name="ConfigurationProperties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.configurationProperties"></a>

```go
ConfigurationProperties interface{}
```

- *Type:* interface{}

The configuration properties for the custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#configuration_properties CodepipelineCustomActionType#configuration_properties}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.settings"></a>

```go
Settings CodepipelineCustomActionTypeSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

URLs that provide users information about this custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#settings CodepipelineCustomActionType#settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Any tags assigned to the custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}

---

### CodepipelineCustomActionTypeConfigurationProperties <a name="CodepipelineCustomActionTypeConfigurationProperties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

&codepipelinecustomactiontype.CodepipelineCustomActionTypeConfigurationProperties {
	Description: *string,
	Key: interface{},
	Name: *string,
	Queryable: interface{},
	Required: interface{},
	Secret: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.description">Description</a></code> | <code>*string</code> | The description of the action configuration property that is displayed to users. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.key">Key</a></code> | <code>interface{}</code> | Whether the configuration property is a key. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.name">Name</a></code> | <code>*string</code> | The name of the action configuration property. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.queryable">Queryable</a></code> | <code>interface{}</code> | Indicates that the property is used with PollForJobs. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.required">Required</a></code> | <code>interface{}</code> | Whether the configuration property is a required value. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.secret">Secret</a></code> | <code>interface{}</code> | Whether the configuration property is secret. Secrets are hidden from all calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.type">Type</a></code> | <code>*string</code> | The type of the configuration property. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the action configuration property that is displayed to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#description CodepipelineCustomActionType#description}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.key"></a>

```go
Key interface{}
```

- *Type:* interface{}

Whether the configuration property is a key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the action configuration property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#name CodepipelineCustomActionType#name}

---

##### `Queryable`<sup>Optional</sup> <a name="Queryable" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.queryable"></a>

```go
Queryable interface{}
```

- *Type:* interface{}

Indicates that the property is used with PollForJobs.

When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to other restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#queryable CodepipelineCustomActionType#queryable}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Whether the configuration property is a required value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#required CodepipelineCustomActionType#required}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

Whether the configuration property is secret. Secrets are hidden from all calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#secret CodepipelineCustomActionType#secret}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the configuration property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#type CodepipelineCustomActionType#type}

---

### CodepipelineCustomActionTypeInputArtifactDetails <a name="CodepipelineCustomActionTypeInputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

&codepipelinecustomactiontype.CodepipelineCustomActionTypeInputArtifactDetails {
	MaximumCount: *f64,
	MinimumCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.maximumCount">MaximumCount</a></code> | <code>*f64</code> | The maximum number of artifacts allowed for the action type. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.minimumCount">MinimumCount</a></code> | <code>*f64</code> | The minimum number of artifacts allowed for the action type. |

---

##### `MaximumCount`<sup>Required</sup> <a name="MaximumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.maximumCount"></a>

```go
MaximumCount *f64
```

- *Type:* *f64

The maximum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}

---

##### `MinimumCount`<sup>Required</sup> <a name="MinimumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.minimumCount"></a>

```go
MinimumCount *f64
```

- *Type:* *f64

The minimum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}

---

### CodepipelineCustomActionTypeOutputArtifactDetails <a name="CodepipelineCustomActionTypeOutputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

&codepipelinecustomactiontype.CodepipelineCustomActionTypeOutputArtifactDetails {
	MaximumCount: *f64,
	MinimumCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.maximumCount">MaximumCount</a></code> | <code>*f64</code> | The maximum number of artifacts allowed for the action type. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.minimumCount">MinimumCount</a></code> | <code>*f64</code> | The minimum number of artifacts allowed for the action type. |

---

##### `MaximumCount`<sup>Required</sup> <a name="MaximumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.maximumCount"></a>

```go
MaximumCount *f64
```

- *Type:* *f64

The maximum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}

---

##### `MinimumCount`<sup>Required</sup> <a name="MinimumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.minimumCount"></a>

```go
MinimumCount *f64
```

- *Type:* *f64

The minimum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}

---

### CodepipelineCustomActionTypeSettings <a name="CodepipelineCustomActionTypeSettings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

&codepipelinecustomactiontype.CodepipelineCustomActionTypeSettings {
	EntityUrlTemplate: *string,
	ExecutionUrlTemplate: *string,
	RevisionUrlTemplate: *string,
	ThirdPartyConfigurationUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.entityUrlTemplate">EntityUrlTemplate</a></code> | <code>*string</code> | The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.executionUrlTemplate">ExecutionUrlTemplate</a></code> | <code>*string</code> | The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for AWS CodeDeploy. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.revisionUrlTemplate">RevisionUrlTemplate</a></code> | <code>*string</code> | The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.thirdPartyConfigurationUrl">ThirdPartyConfigurationUrl</a></code> | <code>*string</code> | The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service. |

---

##### `EntityUrlTemplate`<sup>Optional</sup> <a name="EntityUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.entityUrlTemplate"></a>

```go
EntityUrlTemplate *string
```

- *Type:* *string

The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group.

This link is provided as part of the action display in the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}

---

##### `ExecutionUrlTemplate`<sup>Optional</sup> <a name="ExecutionUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.executionUrlTemplate"></a>

```go
ExecutionUrlTemplate *string
```

- *Type:* *string

The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for AWS CodeDeploy.

This link is shown on the pipeline view page in the AWS CodePipeline console and provides a link to the execution entity of the external action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}

---

##### `RevisionUrlTemplate`<sup>Optional</sup> <a name="RevisionUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.revisionUrlTemplate"></a>

```go
RevisionUrlTemplate *string
```

- *Type:* *string

The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}

---

##### `ThirdPartyConfigurationUrl`<sup>Optional</sup> <a name="ThirdPartyConfigurationUrl" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.thirdPartyConfigurationUrl"></a>

```go
ThirdPartyConfigurationUrl *string
```

- *Type:* *string

The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}

---

### CodepipelineCustomActionTypeTags <a name="CodepipelineCustomActionTypeTags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

&codepipelinecustomactiontype.CodepipelineCustomActionTypeTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#value CodepipelineCustomActionType#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#value CodepipelineCustomActionType#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineCustomActionTypeConfigurationPropertiesList <a name="CodepipelineCustomActionTypeConfigurationPropertiesList" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionTypeConfigurationPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodepipelineCustomActionTypeConfigurationPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.get"></a>

```go
func Get(index *f64) CodepipelineCustomActionTypeConfigurationPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodepipelineCustomActionTypeConfigurationPropertiesOutputReference <a name="CodepipelineCustomActionTypeConfigurationPropertiesOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionTypeConfigurationPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodepipelineCustomActionTypeConfigurationPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetQueryable">ResetQueryable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetQueryable` <a name="ResetQueryable" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetQueryable"></a>

```go
func ResetQueryable()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.keyInput">KeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryableInput">QueryableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.key">Key</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryable">Queryable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secret">Secret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.keyInput"></a>

```go
func KeyInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryableInput`<sup>Optional</sup> <a name="QueryableInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryableInput"></a>

```go
func QueryableInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.key"></a>

```go
func Key() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Queryable`<sup>Required</sup> <a name="Queryable" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryable"></a>

```go
func Queryable() interface{}
```

- *Type:* interface{}

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secret"></a>

```go
func Secret() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodepipelineCustomActionTypeInputArtifactDetailsOutputReference <a name="CodepipelineCustomActionTypeInputArtifactDetailsOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionTypeInputArtifactDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodepipelineCustomActionTypeInputArtifactDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCountInput">MaximumCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCountInput">MinimumCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount">MaximumCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount">MinimumCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumCountInput`<sup>Optional</sup> <a name="MaximumCountInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCountInput"></a>

```go
func MaximumCountInput() *f64
```

- *Type:* *f64

---

##### `MinimumCountInput`<sup>Optional</sup> <a name="MinimumCountInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCountInput"></a>

```go
func MinimumCountInput() *f64
```

- *Type:* *f64

---

##### `MaximumCount`<sup>Required</sup> <a name="MaximumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount"></a>

```go
func MaximumCount() *f64
```

- *Type:* *f64

---

##### `MinimumCount`<sup>Required</sup> <a name="MinimumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount"></a>

```go
func MinimumCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference <a name="CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCountInput">MaximumCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCountInput">MinimumCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount">MaximumCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount">MinimumCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumCountInput`<sup>Optional</sup> <a name="MaximumCountInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCountInput"></a>

```go
func MaximumCountInput() *f64
```

- *Type:* *f64

---

##### `MinimumCountInput`<sup>Optional</sup> <a name="MinimumCountInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCountInput"></a>

```go
func MinimumCountInput() *f64
```

- *Type:* *f64

---

##### `MaximumCount`<sup>Required</sup> <a name="MaximumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount"></a>

```go
func MaximumCount() *f64
```

- *Type:* *f64

---

##### `MinimumCount`<sup>Required</sup> <a name="MinimumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount"></a>

```go
func MinimumCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodepipelineCustomActionTypeSettingsOutputReference <a name="CodepipelineCustomActionTypeSettingsOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionTypeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodepipelineCustomActionTypeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetEntityUrlTemplate">ResetEntityUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetExecutionUrlTemplate">ResetExecutionUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetRevisionUrlTemplate">ResetRevisionUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetThirdPartyConfigurationUrl">ResetThirdPartyConfigurationUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityUrlTemplate` <a name="ResetEntityUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetEntityUrlTemplate"></a>

```go
func ResetEntityUrlTemplate()
```

##### `ResetExecutionUrlTemplate` <a name="ResetExecutionUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetExecutionUrlTemplate"></a>

```go
func ResetExecutionUrlTemplate()
```

##### `ResetRevisionUrlTemplate` <a name="ResetRevisionUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetRevisionUrlTemplate"></a>

```go
func ResetRevisionUrlTemplate()
```

##### `ResetThirdPartyConfigurationUrl` <a name="ResetThirdPartyConfigurationUrl" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetThirdPartyConfigurationUrl"></a>

```go
func ResetThirdPartyConfigurationUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplateInput">EntityUrlTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplateInput">ExecutionUrlTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplateInput">RevisionUrlTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrlInput">ThirdPartyConfigurationUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate">EntityUrlTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate">ExecutionUrlTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate">RevisionUrlTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl">ThirdPartyConfigurationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityUrlTemplateInput`<sup>Optional</sup> <a name="EntityUrlTemplateInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplateInput"></a>

```go
func EntityUrlTemplateInput() *string
```

- *Type:* *string

---

##### `ExecutionUrlTemplateInput`<sup>Optional</sup> <a name="ExecutionUrlTemplateInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplateInput"></a>

```go
func ExecutionUrlTemplateInput() *string
```

- *Type:* *string

---

##### `RevisionUrlTemplateInput`<sup>Optional</sup> <a name="RevisionUrlTemplateInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplateInput"></a>

```go
func RevisionUrlTemplateInput() *string
```

- *Type:* *string

---

##### `ThirdPartyConfigurationUrlInput`<sup>Optional</sup> <a name="ThirdPartyConfigurationUrlInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrlInput"></a>

```go
func ThirdPartyConfigurationUrlInput() *string
```

- *Type:* *string

---

##### `EntityUrlTemplate`<sup>Required</sup> <a name="EntityUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate"></a>

```go
func EntityUrlTemplate() *string
```

- *Type:* *string

---

##### `ExecutionUrlTemplate`<sup>Required</sup> <a name="ExecutionUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate"></a>

```go
func ExecutionUrlTemplate() *string
```

- *Type:* *string

---

##### `RevisionUrlTemplate`<sup>Required</sup> <a name="RevisionUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate"></a>

```go
func RevisionUrlTemplate() *string
```

- *Type:* *string

---

##### `ThirdPartyConfigurationUrl`<sup>Required</sup> <a name="ThirdPartyConfigurationUrl" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl"></a>

```go
func ThirdPartyConfigurationUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodepipelineCustomActionTypeTagsList <a name="CodepipelineCustomActionTypeTagsList" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionTypeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodepipelineCustomActionTypeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.get"></a>

```go
func Get(index *f64) CodepipelineCustomActionTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodepipelineCustomActionTypeTagsOutputReference <a name="CodepipelineCustomActionTypeTagsOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionTypeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodepipelineCustomActionTypeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



