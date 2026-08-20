# `medialiveMultiplexprogram` Submodule <a name="`medialiveMultiplexprogram` Submodule" id="@cdktn/provider-awscc.medialiveMultiplexprogram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveMultiplexprogram <a name="MedialiveMultiplexprogram" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram awscc_medialive_multiplexprogram}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexprogram(scope Construct, id *string, config MedialiveMultiplexprogramConfig) MedialiveMultiplexprogram
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig">MedialiveMultiplexprogramConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig">MedialiveMultiplexprogramConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putMultiplexProgramSettings">PutMultiplexProgramSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPacketIdentifiersMap">PutPacketIdentifiersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPipelineDetails">PutPipelineDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexId">ResetMultiplexId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexProgramSettings">ResetMultiplexProgramSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPacketIdentifiersMap">ResetPacketIdentifiersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPipelineDetails">ResetPipelineDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPreferredChannelPipeline">ResetPreferredChannelPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetProgramName">ResetProgramName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMultiplexProgramSettings` <a name="PutMultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putMultiplexProgramSettings"></a>

```go
func PutMultiplexProgramSettings(value MedialiveMultiplexprogramMultiplexProgramSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putMultiplexProgramSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

---

##### `PutPacketIdentifiersMap` <a name="PutPacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPacketIdentifiersMap"></a>

```go
func PutPacketIdentifiersMap(value MedialiveMultiplexprogramPacketIdentifiersMap)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPacketIdentifiersMap.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

---

##### `PutPipelineDetails` <a name="PutPipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPipelineDetails"></a>

```go
func PutPipelineDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPipelineDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMultiplexId` <a name="ResetMultiplexId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexId"></a>

```go
func ResetMultiplexId()
```

##### `ResetMultiplexProgramSettings` <a name="ResetMultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexProgramSettings"></a>

```go
func ResetMultiplexProgramSettings()
```

##### `ResetPacketIdentifiersMap` <a name="ResetPacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPacketIdentifiersMap"></a>

```go
func ResetPacketIdentifiersMap()
```

##### `ResetPipelineDetails` <a name="ResetPipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPipelineDetails"></a>

```go
func ResetPipelineDetails()
```

##### `ResetPreferredChannelPipeline` <a name="ResetPreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPreferredChannelPipeline"></a>

```go
func ResetPreferredChannelPipeline()
```

##### `ResetProgramName` <a name="ResetProgramName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetProgramName"></a>

```go
func ResetProgramName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

medialivemultiplexprogram.MedialiveMultiplexprogram_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

medialivemultiplexprogram.MedialiveMultiplexprogram_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

medialivemultiplexprogram.MedialiveMultiplexprogram_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

medialivemultiplexprogram.MedialiveMultiplexprogram_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MedialiveMultiplexprogram to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MedialiveMultiplexprogram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveMultiplexprogram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettings">MultiplexProgramSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMap">PacketIdentifiersMap</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference">MedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetails">PipelineDetails</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList">MedialiveMultiplexprogramPipelineDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexIdInput">MultiplexIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettingsInput">MultiplexProgramSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMapInput">PacketIdentifiersMapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetailsInput">PipelineDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipelineInput">PreferredChannelPipelineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programNameInput">ProgramNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexId">MultiplexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipeline">PreferredChannelPipeline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programName">ProgramName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MultiplexProgramSettings`<sup>Required</sup> <a name="MultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettings"></a>

```go
func MultiplexProgramSettings() MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a>

---

##### `PacketIdentifiersMap`<sup>Required</sup> <a name="PacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMap"></a>

```go
func PacketIdentifiersMap() MedialiveMultiplexprogramPacketIdentifiersMapOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference">MedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a>

---

##### `PipelineDetails`<sup>Required</sup> <a name="PipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetails"></a>

```go
func PipelineDetails() MedialiveMultiplexprogramPipelineDetailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList">MedialiveMultiplexprogramPipelineDetailsList</a>

---

##### `MultiplexIdInput`<sup>Optional</sup> <a name="MultiplexIdInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexIdInput"></a>

```go
func MultiplexIdInput() *string
```

- *Type:* *string

---

##### `MultiplexProgramSettingsInput`<sup>Optional</sup> <a name="MultiplexProgramSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettingsInput"></a>

```go
func MultiplexProgramSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `PacketIdentifiersMapInput`<sup>Optional</sup> <a name="PacketIdentifiersMapInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMapInput"></a>

```go
func PacketIdentifiersMapInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineDetailsInput`<sup>Optional</sup> <a name="PipelineDetailsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetailsInput"></a>

```go
func PipelineDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `PreferredChannelPipelineInput`<sup>Optional</sup> <a name="PreferredChannelPipelineInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipelineInput"></a>

```go
func PreferredChannelPipelineInput() *string
```

- *Type:* *string

---

##### `ProgramNameInput`<sup>Optional</sup> <a name="ProgramNameInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programNameInput"></a>

```go
func ProgramNameInput() *string
```

- *Type:* *string

---

##### `MultiplexId`<sup>Required</sup> <a name="MultiplexId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexId"></a>

```go
func MultiplexId() *string
```

- *Type:* *string

---

##### `PreferredChannelPipeline`<sup>Required</sup> <a name="PreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipeline"></a>

```go
func PreferredChannelPipeline() *string
```

- *Type:* *string

---

##### `ProgramName`<sup>Required</sup> <a name="ProgramName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programName"></a>

```go
func ProgramName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveMultiplexprogramConfig <a name="MedialiveMultiplexprogramConfig" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

&medialivemultiplexprogram.MedialiveMultiplexprogramConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MultiplexId: *string,
	MultiplexProgramSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings,
	PacketIdentifiersMap: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap,
	PipelineDetails: interface{},
	PreferredChannelPipeline: *string,
	ProgramName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexId">MultiplexId</a></code> | <code>*string</code> | The ID of the multiplex that the program belongs to. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexProgramSettings">MultiplexProgramSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a></code> | The settings for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.packetIdentifiersMap">PacketIdentifiersMap</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a></code> | The packet identifier map for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.pipelineDetails">PipelineDetails</a></code> | <code>interface{}</code> | Contains information about the current sources for the specified program in the specified multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.preferredChannelPipeline">PreferredChannelPipeline</a></code> | <code>*string</code> | The settings for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.programName">ProgramName</a></code> | <code>*string</code> | The name of the multiplex program. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MultiplexId`<sup>Optional</sup> <a name="MultiplexId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexId"></a>

```go
MultiplexId *string
```

- *Type:* *string

The ID of the multiplex that the program belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#multiplex_id MedialiveMultiplexprogram#multiplex_id}

---

##### `MultiplexProgramSettings`<sup>Optional</sup> <a name="MultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexProgramSettings"></a>

```go
MultiplexProgramSettings MedialiveMultiplexprogramMultiplexProgramSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

The settings for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#multiplex_program_settings MedialiveMultiplexprogram#multiplex_program_settings}

---

##### `PacketIdentifiersMap`<sup>Optional</sup> <a name="PacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.packetIdentifiersMap"></a>

```go
PacketIdentifiersMap MedialiveMultiplexprogramPacketIdentifiersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

The packet identifier map for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#packet_identifiers_map MedialiveMultiplexprogram#packet_identifiers_map}

---

##### `PipelineDetails`<sup>Optional</sup> <a name="PipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.pipelineDetails"></a>

```go
PipelineDetails interface{}
```

- *Type:* interface{}

Contains information about the current sources for the specified program in the specified multiplex.

Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#pipeline_details MedialiveMultiplexprogram#pipeline_details}

---

##### `PreferredChannelPipeline`<sup>Optional</sup> <a name="PreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.preferredChannelPipeline"></a>

```go
PreferredChannelPipeline *string
```

- *Type:* *string

The settings for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#preferred_channel_pipeline MedialiveMultiplexprogram#preferred_channel_pipeline}

---

##### `ProgramName`<sup>Optional</sup> <a name="ProgramName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.programName"></a>

```go
ProgramName *string
```

- *Type:* *string

The name of the multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#program_name MedialiveMultiplexprogram#program_name}

---

### MedialiveMultiplexprogramMultiplexProgramSettings <a name="MedialiveMultiplexprogramMultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

&medialivemultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings {
	PreferredChannelPipeline: *string,
	ProgramNumber: *f64,
	ServiceDescriptor: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor,
	VideoSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.preferredChannelPipeline">PreferredChannelPipeline</a></code> | <code>*string</code> | Indicates which pipeline is preferred by the multiplex for program ingest. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.programNumber">ProgramNumber</a></code> | <code>*f64</code> | Unique program number. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.serviceDescriptor">ServiceDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a></code> | Transport stream service descriptor configuration for the Multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.videoSettings">VideoSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a></code> | Program video settings configuration. |

---

##### `PreferredChannelPipeline`<sup>Optional</sup> <a name="PreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.preferredChannelPipeline"></a>

```go
PreferredChannelPipeline *string
```

- *Type:* *string

Indicates which pipeline is preferred by the multiplex for program ingest.

If set to "PIPELINE_0" or "PIPELINE_1" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
it will switch back once that ingest is healthy again. If set to "CURRENTLY_ACTIVE",
it will not switch back to the other pipeline based on it recovering to a healthy state,
it will only switch if the active pipeline becomes unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#preferred_channel_pipeline MedialiveMultiplexprogram#preferred_channel_pipeline}

---

##### `ProgramNumber`<sup>Optional</sup> <a name="ProgramNumber" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.programNumber"></a>

```go
ProgramNumber *f64
```

- *Type:* *f64

Unique program number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#program_number MedialiveMultiplexprogram#program_number}

---

##### `ServiceDescriptor`<sup>Optional</sup> <a name="ServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.serviceDescriptor"></a>

```go
ServiceDescriptor MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

Transport stream service descriptor configuration for the Multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#service_descriptor MedialiveMultiplexprogram#service_descriptor}

---

##### `VideoSettings`<sup>Optional</sup> <a name="VideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.videoSettings"></a>

```go
VideoSettings MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

Program video settings configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#video_settings MedialiveMultiplexprogram#video_settings}

---

### MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor <a name="MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

&medialivemultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor {
	ProviderName: *string,
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.providerName">ProviderName</a></code> | <code>*string</code> | Name of the provider. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.serviceName">ServiceName</a></code> | <code>*string</code> | Name of the service. |

---

##### `ProviderName`<sup>Optional</sup> <a name="ProviderName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#provider_name MedialiveMultiplexprogram#provider_name}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#service_name MedialiveMultiplexprogram#service_name}

---

### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

&medialivemultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings {
	ConstantBitrate: *f64,
	StatmuxSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.constantBitrate">ConstantBitrate</a></code> | <code>*f64</code> | The constant bitrate configuration for the video encode. When this field is defined, StatmuxSettings must be undefined. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.statmuxSettings">StatmuxSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a></code> | Statmux rate control settings. When this field is defined, ConstantBitrate must be undefined. |

---

##### `ConstantBitrate`<sup>Optional</sup> <a name="ConstantBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.constantBitrate"></a>

```go
ConstantBitrate *f64
```

- *Type:* *f64

The constant bitrate configuration for the video encode. When this field is defined, StatmuxSettings must be undefined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#constant_bitrate MedialiveMultiplexprogram#constant_bitrate}

---

##### `StatmuxSettings`<sup>Optional</sup> <a name="StatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.statmuxSettings"></a>

```go
StatmuxSettings MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

Statmux rate control settings. When this field is defined, ConstantBitrate must be undefined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#statmux_settings MedialiveMultiplexprogram#statmux_settings}

---

### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

&medialivemultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings {
	MaximumBitrate: *f64,
	MinimumBitrate: *f64,
	Priority: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate">MaximumBitrate</a></code> | <code>*f64</code> | Maximum statmux bitrate. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate">MinimumBitrate</a></code> | <code>*f64</code> | Minimum statmux bitrate. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority">Priority</a></code> | <code>*f64</code> | The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others. |

---

##### `MaximumBitrate`<sup>Optional</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate"></a>

```go
MaximumBitrate *f64
```

- *Type:* *f64

Maximum statmux bitrate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#maximum_bitrate MedialiveMultiplexprogram#maximum_bitrate}

---

##### `MinimumBitrate`<sup>Optional</sup> <a name="MinimumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate"></a>

```go
MinimumBitrate *f64
```

- *Type:* *f64

Minimum statmux bitrate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#minimum_bitrate MedialiveMultiplexprogram#minimum_bitrate}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others.

Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#priority MedialiveMultiplexprogram#priority}

---

### MedialiveMultiplexprogramPacketIdentifiersMap <a name="MedialiveMultiplexprogramPacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

&medialivemultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap {
	AudioPids: *[]*f64,
	DvbSubPids: *[]*f64,
	DvbTeletextPid: *f64,
	EtvPlatformPid: *f64,
	EtvSignalPid: *f64,
	KlvDataPids: *[]*f64,
	PcrPid: *f64,
	PmtPid: *f64,
	PrivateMetadataPid: *f64,
	Scte27Pids: *[]*f64,
	Scte35Pid: *f64,
	TimedMetadataPid: *f64,
	VideoPid: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.audioPids">AudioPids</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#audio_pids MedialiveMultiplexprogram#audio_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbSubPids">DvbSubPids</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#dvb_sub_pids MedialiveMultiplexprogram#dvb_sub_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbTeletextPid">DvbTeletextPid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#dvb_teletext_pid MedialiveMultiplexprogram#dvb_teletext_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvPlatformPid">EtvPlatformPid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#etv_platform_pid MedialiveMultiplexprogram#etv_platform_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvSignalPid">EtvSignalPid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#etv_signal_pid MedialiveMultiplexprogram#etv_signal_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.klvDataPids">KlvDataPids</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#klv_data_pids MedialiveMultiplexprogram#klv_data_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pcrPid">PcrPid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#pcr_pid MedialiveMultiplexprogram#pcr_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pmtPid">PmtPid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#pmt_pid MedialiveMultiplexprogram#pmt_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.privateMetadataPid">PrivateMetadataPid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#private_metadata_pid MedialiveMultiplexprogram#private_metadata_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte27Pids">Scte27Pids</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#scte_27_pids MedialiveMultiplexprogram#scte_27_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte35Pid">Scte35Pid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#scte_35_pid MedialiveMultiplexprogram#scte_35_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.timedMetadataPid">TimedMetadataPid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#timed_metadata_pid MedialiveMultiplexprogram#timed_metadata_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.videoPid">VideoPid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#video_pid MedialiveMultiplexprogram#video_pid}. |

---

##### `AudioPids`<sup>Optional</sup> <a name="AudioPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.audioPids"></a>

```go
AudioPids *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#audio_pids MedialiveMultiplexprogram#audio_pids}.

---

##### `DvbSubPids`<sup>Optional</sup> <a name="DvbSubPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbSubPids"></a>

```go
DvbSubPids *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#dvb_sub_pids MedialiveMultiplexprogram#dvb_sub_pids}.

---

##### `DvbTeletextPid`<sup>Optional</sup> <a name="DvbTeletextPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbTeletextPid"></a>

```go
DvbTeletextPid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#dvb_teletext_pid MedialiveMultiplexprogram#dvb_teletext_pid}.

---

##### `EtvPlatformPid`<sup>Optional</sup> <a name="EtvPlatformPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvPlatformPid"></a>

```go
EtvPlatformPid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#etv_platform_pid MedialiveMultiplexprogram#etv_platform_pid}.

---

##### `EtvSignalPid`<sup>Optional</sup> <a name="EtvSignalPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvSignalPid"></a>

```go
EtvSignalPid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#etv_signal_pid MedialiveMultiplexprogram#etv_signal_pid}.

---

##### `KlvDataPids`<sup>Optional</sup> <a name="KlvDataPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.klvDataPids"></a>

```go
KlvDataPids *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#klv_data_pids MedialiveMultiplexprogram#klv_data_pids}.

---

##### `PcrPid`<sup>Optional</sup> <a name="PcrPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pcrPid"></a>

```go
PcrPid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#pcr_pid MedialiveMultiplexprogram#pcr_pid}.

---

##### `PmtPid`<sup>Optional</sup> <a name="PmtPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pmtPid"></a>

```go
PmtPid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#pmt_pid MedialiveMultiplexprogram#pmt_pid}.

---

##### `PrivateMetadataPid`<sup>Optional</sup> <a name="PrivateMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.privateMetadataPid"></a>

```go
PrivateMetadataPid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#private_metadata_pid MedialiveMultiplexprogram#private_metadata_pid}.

---

##### `Scte27Pids`<sup>Optional</sup> <a name="Scte27Pids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte27Pids"></a>

```go
Scte27Pids *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#scte_27_pids MedialiveMultiplexprogram#scte_27_pids}.

---

##### `Scte35Pid`<sup>Optional</sup> <a name="Scte35Pid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte35Pid"></a>

```go
Scte35Pid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#scte_35_pid MedialiveMultiplexprogram#scte_35_pid}.

---

##### `TimedMetadataPid`<sup>Optional</sup> <a name="TimedMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.timedMetadataPid"></a>

```go
TimedMetadataPid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#timed_metadata_pid MedialiveMultiplexprogram#timed_metadata_pid}.

---

##### `VideoPid`<sup>Optional</sup> <a name="VideoPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.videoPid"></a>

```go
VideoPid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#video_pid MedialiveMultiplexprogram#video_pid}.

---

### MedialiveMultiplexprogramPipelineDetails <a name="MedialiveMultiplexprogramPipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

&medialivemultiplexprogram.MedialiveMultiplexprogramPipelineDetails {
	ActiveChannelPipeline: *string,
	PipelineId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.activeChannelPipeline">ActiveChannelPipeline</a></code> | <code>*string</code> | Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.pipelineId">PipelineId</a></code> | <code>*string</code> | Identifies a specific pipeline in the multiplex. |

---

##### `ActiveChannelPipeline`<sup>Optional</sup> <a name="ActiveChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.activeChannelPipeline"></a>

```go
ActiveChannelPipeline *string
```

- *Type:* *string

Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#active_channel_pipeline MedialiveMultiplexprogram#active_channel_pipeline}

---

##### `PipelineId`<sup>Optional</sup> <a name="PipelineId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.pipelineId"></a>

```go
PipelineId *string
```

- *Type:* *string

Identifies a specific pipeline in the multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplexprogram#pipeline_id MedialiveMultiplexprogram#pipeline_id}

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putServiceDescriptor">PutServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putVideoSettings">PutVideoSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetPreferredChannelPipeline">ResetPreferredChannelPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetProgramNumber">ResetProgramNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetServiceDescriptor">ResetServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetVideoSettings">ResetVideoSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceDescriptor` <a name="PutServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putServiceDescriptor"></a>

```go
func PutServiceDescriptor(value MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putServiceDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

---

##### `PutVideoSettings` <a name="PutVideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putVideoSettings"></a>

```go
func PutVideoSettings(value MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putVideoSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

---

##### `ResetPreferredChannelPipeline` <a name="ResetPreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetPreferredChannelPipeline"></a>

```go
func ResetPreferredChannelPipeline()
```

##### `ResetProgramNumber` <a name="ResetProgramNumber" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetProgramNumber"></a>

```go
func ResetProgramNumber()
```

##### `ResetServiceDescriptor` <a name="ResetServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetServiceDescriptor"></a>

```go
func ResetServiceDescriptor()
```

##### `ResetVideoSettings` <a name="ResetVideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetVideoSettings"></a>

```go
func ResetVideoSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor">ServiceDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings">VideoSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput">PreferredChannelPipelineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumberInput">ProgramNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput">ServiceDescriptorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettingsInput">VideoSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline">PreferredChannelPipeline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber">ProgramNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceDescriptor`<sup>Required</sup> <a name="ServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor"></a>

```go
func ServiceDescriptor() MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a>

---

##### `VideoSettings`<sup>Required</sup> <a name="VideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings"></a>

```go
func VideoSettings() MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a>

---

##### `PreferredChannelPipelineInput`<sup>Optional</sup> <a name="PreferredChannelPipelineInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput"></a>

```go
func PreferredChannelPipelineInput() *string
```

- *Type:* *string

---

##### `ProgramNumberInput`<sup>Optional</sup> <a name="ProgramNumberInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumberInput"></a>

```go
func ProgramNumberInput() *f64
```

- *Type:* *f64

---

##### `ServiceDescriptorInput`<sup>Optional</sup> <a name="ServiceDescriptorInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput"></a>

```go
func ServiceDescriptorInput() interface{}
```

- *Type:* interface{}

---

##### `VideoSettingsInput`<sup>Optional</sup> <a name="VideoSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettingsInput"></a>

```go
func VideoSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `PreferredChannelPipeline`<sup>Required</sup> <a name="PreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline"></a>

```go
func PreferredChannelPipeline() *string
```

- *Type:* *string

---

##### `ProgramNumber`<sup>Required</sup> <a name="ProgramNumber" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber"></a>

```go
func ProgramNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetProviderName">ResetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProviderName` <a name="ResetProviderName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetProviderName"></a>

```go
func ResetProviderName()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings">PutStatmuxSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate">ResetConstantBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings">ResetStatmuxSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStatmuxSettings` <a name="PutStatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings"></a>

```go
func PutStatmuxSettings(value MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

---

##### `ResetConstantBitrate` <a name="ResetConstantBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate"></a>

```go
func ResetConstantBitrate()
```

##### `ResetStatmuxSettings` <a name="ResetStatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings"></a>

```go
func ResetStatmuxSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings">StatmuxSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput">ConstantBitrateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput">StatmuxSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate">ConstantBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatmuxSettings`<sup>Required</sup> <a name="StatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings"></a>

```go
func StatmuxSettings() MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a>

---

##### `ConstantBitrateInput`<sup>Optional</sup> <a name="ConstantBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput"></a>

```go
func ConstantBitrateInput() *f64
```

- *Type:* *f64

---

##### `StatmuxSettingsInput`<sup>Optional</sup> <a name="StatmuxSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput"></a>

```go
func StatmuxSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ConstantBitrate`<sup>Required</sup> <a name="ConstantBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate"></a>

```go
func ConstantBitrate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate">ResetMaximumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate">ResetMinimumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumBitrate` <a name="ResetMaximumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate"></a>

```go
func ResetMaximumBitrate()
```

##### `ResetMinimumBitrate` <a name="ResetMinimumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate"></a>

```go
func ResetMinimumBitrate()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority"></a>

```go
func ResetPriority()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput">MaximumBitrateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput">MinimumBitrateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate">MaximumBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate">MinimumBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumBitrateInput`<sup>Optional</sup> <a name="MaximumBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput"></a>

```go
func MaximumBitrateInput() *f64
```

- *Type:* *f64

---

##### `MinimumBitrateInput`<sup>Optional</sup> <a name="MinimumBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput"></a>

```go
func MinimumBitrateInput() *f64
```

- *Type:* *f64

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `MaximumBitrate`<sup>Required</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate"></a>

```go
func MaximumBitrate() *f64
```

- *Type:* *f64

---

##### `MinimumBitrate`<sup>Required</sup> <a name="MinimumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate"></a>

```go
func MinimumBitrate() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveMultiplexprogramPacketIdentifiersMapOutputReference <a name="MedialiveMultiplexprogramPacketIdentifiersMapOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexprogramPacketIdentifiersMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MedialiveMultiplexprogramPacketIdentifiersMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetAudioPids">ResetAudioPids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbSubPids">ResetDvbSubPids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbTeletextPid">ResetDvbTeletextPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvPlatformPid">ResetEtvPlatformPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvSignalPid">ResetEtvSignalPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetKlvDataPids">ResetKlvDataPids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPcrPid">ResetPcrPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPmtPid">ResetPmtPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPrivateMetadataPid">ResetPrivateMetadataPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte27Pids">ResetScte27Pids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte35Pid">ResetScte35Pid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetTimedMetadataPid">ResetTimedMetadataPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetVideoPid">ResetVideoPid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudioPids` <a name="ResetAudioPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetAudioPids"></a>

```go
func ResetAudioPids()
```

##### `ResetDvbSubPids` <a name="ResetDvbSubPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbSubPids"></a>

```go
func ResetDvbSubPids()
```

##### `ResetDvbTeletextPid` <a name="ResetDvbTeletextPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbTeletextPid"></a>

```go
func ResetDvbTeletextPid()
```

##### `ResetEtvPlatformPid` <a name="ResetEtvPlatformPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvPlatformPid"></a>

```go
func ResetEtvPlatformPid()
```

##### `ResetEtvSignalPid` <a name="ResetEtvSignalPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvSignalPid"></a>

```go
func ResetEtvSignalPid()
```

##### `ResetKlvDataPids` <a name="ResetKlvDataPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetKlvDataPids"></a>

```go
func ResetKlvDataPids()
```

##### `ResetPcrPid` <a name="ResetPcrPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPcrPid"></a>

```go
func ResetPcrPid()
```

##### `ResetPmtPid` <a name="ResetPmtPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPmtPid"></a>

```go
func ResetPmtPid()
```

##### `ResetPrivateMetadataPid` <a name="ResetPrivateMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPrivateMetadataPid"></a>

```go
func ResetPrivateMetadataPid()
```

##### `ResetScte27Pids` <a name="ResetScte27Pids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte27Pids"></a>

```go
func ResetScte27Pids()
```

##### `ResetScte35Pid` <a name="ResetScte35Pid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte35Pid"></a>

```go
func ResetScte35Pid()
```

##### `ResetTimedMetadataPid` <a name="ResetTimedMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetTimedMetadataPid"></a>

```go
func ResetTimedMetadataPid()
```

##### `ResetVideoPid` <a name="ResetVideoPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetVideoPid"></a>

```go
func ResetVideoPid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPidsInput">AudioPidsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPidsInput">DvbSubPidsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPidInput">DvbTeletextPidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPidInput">EtvPlatformPidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPidInput">EtvSignalPidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPidsInput">KlvDataPidsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPidInput">PcrPidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPidInput">PmtPidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPidInput">PrivateMetadataPidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27PidsInput">Scte27PidsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35PidInput">Scte35PidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPidInput">TimedMetadataPidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPidInput">VideoPidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids">AudioPids</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids">DvbSubPids</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid">DvbTeletextPid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid">EtvPlatformPid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid">EtvSignalPid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids">KlvDataPids</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid">PcrPid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid">PmtPid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid">PrivateMetadataPid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids">Scte27Pids</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid">Scte35Pid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid">TimedMetadataPid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid">VideoPid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioPidsInput`<sup>Optional</sup> <a name="AudioPidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPidsInput"></a>

```go
func AudioPidsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `DvbSubPidsInput`<sup>Optional</sup> <a name="DvbSubPidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPidsInput"></a>

```go
func DvbSubPidsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `DvbTeletextPidInput`<sup>Optional</sup> <a name="DvbTeletextPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPidInput"></a>

```go
func DvbTeletextPidInput() *f64
```

- *Type:* *f64

---

##### `EtvPlatformPidInput`<sup>Optional</sup> <a name="EtvPlatformPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPidInput"></a>

```go
func EtvPlatformPidInput() *f64
```

- *Type:* *f64

---

##### `EtvSignalPidInput`<sup>Optional</sup> <a name="EtvSignalPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPidInput"></a>

```go
func EtvSignalPidInput() *f64
```

- *Type:* *f64

---

##### `KlvDataPidsInput`<sup>Optional</sup> <a name="KlvDataPidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPidsInput"></a>

```go
func KlvDataPidsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `PcrPidInput`<sup>Optional</sup> <a name="PcrPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPidInput"></a>

```go
func PcrPidInput() *f64
```

- *Type:* *f64

---

##### `PmtPidInput`<sup>Optional</sup> <a name="PmtPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPidInput"></a>

```go
func PmtPidInput() *f64
```

- *Type:* *f64

---

##### `PrivateMetadataPidInput`<sup>Optional</sup> <a name="PrivateMetadataPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPidInput"></a>

```go
func PrivateMetadataPidInput() *f64
```

- *Type:* *f64

---

##### `Scte27PidsInput`<sup>Optional</sup> <a name="Scte27PidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27PidsInput"></a>

```go
func Scte27PidsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Scte35PidInput`<sup>Optional</sup> <a name="Scte35PidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35PidInput"></a>

```go
func Scte35PidInput() *f64
```

- *Type:* *f64

---

##### `TimedMetadataPidInput`<sup>Optional</sup> <a name="TimedMetadataPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPidInput"></a>

```go
func TimedMetadataPidInput() *f64
```

- *Type:* *f64

---

##### `VideoPidInput`<sup>Optional</sup> <a name="VideoPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPidInput"></a>

```go
func VideoPidInput() *f64
```

- *Type:* *f64

---

##### `AudioPids`<sup>Required</sup> <a name="AudioPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids"></a>

```go
func AudioPids() *[]*f64
```

- *Type:* *[]*f64

---

##### `DvbSubPids`<sup>Required</sup> <a name="DvbSubPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids"></a>

```go
func DvbSubPids() *[]*f64
```

- *Type:* *[]*f64

---

##### `DvbTeletextPid`<sup>Required</sup> <a name="DvbTeletextPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid"></a>

```go
func DvbTeletextPid() *f64
```

- *Type:* *f64

---

##### `EtvPlatformPid`<sup>Required</sup> <a name="EtvPlatformPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid"></a>

```go
func EtvPlatformPid() *f64
```

- *Type:* *f64

---

##### `EtvSignalPid`<sup>Required</sup> <a name="EtvSignalPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid"></a>

```go
func EtvSignalPid() *f64
```

- *Type:* *f64

---

##### `KlvDataPids`<sup>Required</sup> <a name="KlvDataPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids"></a>

```go
func KlvDataPids() *[]*f64
```

- *Type:* *[]*f64

---

##### `PcrPid`<sup>Required</sup> <a name="PcrPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid"></a>

```go
func PcrPid() *f64
```

- *Type:* *f64

---

##### `PmtPid`<sup>Required</sup> <a name="PmtPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid"></a>

```go
func PmtPid() *f64
```

- *Type:* *f64

---

##### `PrivateMetadataPid`<sup>Required</sup> <a name="PrivateMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid"></a>

```go
func PrivateMetadataPid() *f64
```

- *Type:* *f64

---

##### `Scte27Pids`<sup>Required</sup> <a name="Scte27Pids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids"></a>

```go
func Scte27Pids() *[]*f64
```

- *Type:* *[]*f64

---

##### `Scte35Pid`<sup>Required</sup> <a name="Scte35Pid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid"></a>

```go
func Scte35Pid() *f64
```

- *Type:* *f64

---

##### `TimedMetadataPid`<sup>Required</sup> <a name="TimedMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid"></a>

```go
func TimedMetadataPid() *f64
```

- *Type:* *f64

---

##### `VideoPid`<sup>Required</sup> <a name="VideoPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid"></a>

```go
func VideoPid() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveMultiplexprogramPipelineDetailsList <a name="MedialiveMultiplexprogramPipelineDetailsList" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexprogramPipelineDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MedialiveMultiplexprogramPipelineDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.get"></a>

```go
func Get(index *f64) MedialiveMultiplexprogramPipelineDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveMultiplexprogramPipelineDetailsOutputReference <a name="MedialiveMultiplexprogramPipelineDetailsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexprogramPipelineDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MedialiveMultiplexprogramPipelineDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetActiveChannelPipeline">ResetActiveChannelPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetPipelineId">ResetPipelineId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveChannelPipeline` <a name="ResetActiveChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetActiveChannelPipeline"></a>

```go
func ResetActiveChannelPipeline()
```

##### `ResetPipelineId` <a name="ResetPipelineId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetPipelineId"></a>

```go
func ResetPipelineId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipelineInput">ActiveChannelPipelineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineIdInput">PipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline">ActiveChannelPipeline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveChannelPipelineInput`<sup>Optional</sup> <a name="ActiveChannelPipelineInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipelineInput"></a>

```go
func ActiveChannelPipelineInput() *string
```

- *Type:* *string

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineIdInput"></a>

```go
func PipelineIdInput() *string
```

- *Type:* *string

---

##### `ActiveChannelPipeline`<sup>Required</sup> <a name="ActiveChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline"></a>

```go
func ActiveChannelPipeline() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



