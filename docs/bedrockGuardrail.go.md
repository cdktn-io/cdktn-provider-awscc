# `bedrockGuardrail` Submodule <a name="`bedrockGuardrail` Submodule" id="@cdktn/provider-awscc.bedrockGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockGuardrail <a name="BedrockGuardrail" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail awscc_bedrock_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrail(scope Construct, id *string, config BedrockGuardrailConfig) BedrockGuardrail
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig">BedrockGuardrailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig">BedrockGuardrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putAutomatedReasoningPolicyConfig">PutAutomatedReasoningPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putContentPolicyConfig">PutContentPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putContextualGroundingPolicyConfig">PutContextualGroundingPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putCrossRegionConfig">PutCrossRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putSensitiveInformationPolicyConfig">PutSensitiveInformationPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putTopicPolicyConfig">PutTopicPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putWordPolicyConfig">PutWordPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetAutomatedReasoningPolicyConfig">ResetAutomatedReasoningPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetContentPolicyConfig">ResetContentPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetContextualGroundingPolicyConfig">ResetContextualGroundingPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetCrossRegionConfig">ResetCrossRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetSensitiveInformationPolicyConfig">ResetSensitiveInformationPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetTopicPolicyConfig">ResetTopicPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetWordPolicyConfig">ResetWordPolicyConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutomatedReasoningPolicyConfig` <a name="PutAutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putAutomatedReasoningPolicyConfig"></a>

```go
func PutAutomatedReasoningPolicyConfig(value BedrockGuardrailAutomatedReasoningPolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putAutomatedReasoningPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfig">BedrockGuardrailAutomatedReasoningPolicyConfig</a>

---

##### `PutContentPolicyConfig` <a name="PutContentPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putContentPolicyConfig"></a>

```go
func PutContentPolicyConfig(value BedrockGuardrailContentPolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putContentPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a>

---

##### `PutContextualGroundingPolicyConfig` <a name="PutContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putContextualGroundingPolicyConfig"></a>

```go
func PutContextualGroundingPolicyConfig(value BedrockGuardrailContextualGroundingPolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putContextualGroundingPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a>

---

##### `PutCrossRegionConfig` <a name="PutCrossRegionConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putCrossRegionConfig"></a>

```go
func PutCrossRegionConfig(value BedrockGuardrailCrossRegionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putCrossRegionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfig">BedrockGuardrailCrossRegionConfig</a>

---

##### `PutSensitiveInformationPolicyConfig` <a name="PutSensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putSensitiveInformationPolicyConfig"></a>

```go
func PutSensitiveInformationPolicyConfig(value BedrockGuardrailSensitiveInformationPolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putSensitiveInformationPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTopicPolicyConfig` <a name="PutTopicPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putTopicPolicyConfig"></a>

```go
func PutTopicPolicyConfig(value BedrockGuardrailTopicPolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putTopicPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a>

---

##### `PutWordPolicyConfig` <a name="PutWordPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putWordPolicyConfig"></a>

```go
func PutWordPolicyConfig(value BedrockGuardrailWordPolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.putWordPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a>

---

##### `ResetAutomatedReasoningPolicyConfig` <a name="ResetAutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetAutomatedReasoningPolicyConfig"></a>

```go
func ResetAutomatedReasoningPolicyConfig()
```

##### `ResetContentPolicyConfig` <a name="ResetContentPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetContentPolicyConfig"></a>

```go
func ResetContentPolicyConfig()
```

##### `ResetContextualGroundingPolicyConfig` <a name="ResetContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetContextualGroundingPolicyConfig"></a>

```go
func ResetContextualGroundingPolicyConfig()
```

##### `ResetCrossRegionConfig` <a name="ResetCrossRegionConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetCrossRegionConfig"></a>

```go
func ResetCrossRegionConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetSensitiveInformationPolicyConfig` <a name="ResetSensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetSensitiveInformationPolicyConfig"></a>

```go
func ResetSensitiveInformationPolicyConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTopicPolicyConfig` <a name="ResetTopicPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetTopicPolicyConfig"></a>

```go
func ResetTopicPolicyConfig()
```

##### `ResetWordPolicyConfig` <a name="ResetWordPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.resetWordPolicyConfig"></a>

```go
func ResetWordPolicyConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.BedrockGuardrail_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.BedrockGuardrail_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.BedrockGuardrail_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.BedrockGuardrail_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockGuardrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.automatedReasoningPolicyConfig">AutomatedReasoningPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference">BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.contentPolicyConfig">ContentPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference">BedrockGuardrailContentPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.contextualGroundingPolicyConfig">ContextualGroundingPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference">BedrockGuardrailContextualGroundingPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.crossRegionConfig">CrossRegionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference">BedrockGuardrailCrossRegionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.failureRecommendations">FailureRecommendations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.guardrailArn">GuardrailArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.guardrailId">GuardrailId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.sensitiveInformationPolicyConfig">SensitiveInformationPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference">BedrockGuardrailSensitiveInformationPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.statusReasons">StatusReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList">BedrockGuardrailTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.topicPolicyConfig">TopicPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference">BedrockGuardrailTopicPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.wordPolicyConfig">WordPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference">BedrockGuardrailWordPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.automatedReasoningPolicyConfigInput">AutomatedReasoningPolicyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.blockedInputMessagingInput">BlockedInputMessagingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.blockedOutputsMessagingInput">BlockedOutputsMessagingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.contentPolicyConfigInput">ContentPolicyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.contextualGroundingPolicyConfigInput">ContextualGroundingPolicyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.crossRegionConfigInput">CrossRegionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.sensitiveInformationPolicyConfigInput">SensitiveInformationPolicyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.topicPolicyConfigInput">TopicPolicyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.wordPolicyConfigInput">WordPolicyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.blockedInputMessaging">BlockedInputMessaging</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.blockedOutputsMessaging">BlockedOutputsMessaging</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomatedReasoningPolicyConfig`<sup>Required</sup> <a name="AutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.automatedReasoningPolicyConfig"></a>

```go
func AutomatedReasoningPolicyConfig() BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference">BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference</a>

---

##### `ContentPolicyConfig`<sup>Required</sup> <a name="ContentPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.contentPolicyConfig"></a>

```go
func ContentPolicyConfig() BedrockGuardrailContentPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference">BedrockGuardrailContentPolicyConfigOutputReference</a>

---

##### `ContextualGroundingPolicyConfig`<sup>Required</sup> <a name="ContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.contextualGroundingPolicyConfig"></a>

```go
func ContextualGroundingPolicyConfig() BedrockGuardrailContextualGroundingPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference">BedrockGuardrailContextualGroundingPolicyConfigOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CrossRegionConfig`<sup>Required</sup> <a name="CrossRegionConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.crossRegionConfig"></a>

```go
func CrossRegionConfig() BedrockGuardrailCrossRegionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference">BedrockGuardrailCrossRegionConfigOutputReference</a>

---

##### `FailureRecommendations`<sup>Required</sup> <a name="FailureRecommendations" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.failureRecommendations"></a>

```go
func FailureRecommendations() *[]*string
```

- *Type:* *[]*string

---

##### `GuardrailArn`<sup>Required</sup> <a name="GuardrailArn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.guardrailArn"></a>

```go
func GuardrailArn() *string
```

- *Type:* *string

---

##### `GuardrailId`<sup>Required</sup> <a name="GuardrailId" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.guardrailId"></a>

```go
func GuardrailId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SensitiveInformationPolicyConfig`<sup>Required</sup> <a name="SensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.sensitiveInformationPolicyConfig"></a>

```go
func SensitiveInformationPolicyConfig() BedrockGuardrailSensitiveInformationPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference">BedrockGuardrailSensitiveInformationPolicyConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReasons`<sup>Required</sup> <a name="StatusReasons" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.statusReasons"></a>

```go
func StatusReasons() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.tags"></a>

```go
func Tags() BedrockGuardrailTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList">BedrockGuardrailTagsList</a>

---

##### `TopicPolicyConfig`<sup>Required</sup> <a name="TopicPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.topicPolicyConfig"></a>

```go
func TopicPolicyConfig() BedrockGuardrailTopicPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference">BedrockGuardrailTopicPolicyConfigOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `WordPolicyConfig`<sup>Required</sup> <a name="WordPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.wordPolicyConfig"></a>

```go
func WordPolicyConfig() BedrockGuardrailWordPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference">BedrockGuardrailWordPolicyConfigOutputReference</a>

---

##### `AutomatedReasoningPolicyConfigInput`<sup>Optional</sup> <a name="AutomatedReasoningPolicyConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.automatedReasoningPolicyConfigInput"></a>

```go
func AutomatedReasoningPolicyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `BlockedInputMessagingInput`<sup>Optional</sup> <a name="BlockedInputMessagingInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.blockedInputMessagingInput"></a>

```go
func BlockedInputMessagingInput() *string
```

- *Type:* *string

---

##### `BlockedOutputsMessagingInput`<sup>Optional</sup> <a name="BlockedOutputsMessagingInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.blockedOutputsMessagingInput"></a>

```go
func BlockedOutputsMessagingInput() *string
```

- *Type:* *string

---

##### `ContentPolicyConfigInput`<sup>Optional</sup> <a name="ContentPolicyConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.contentPolicyConfigInput"></a>

```go
func ContentPolicyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ContextualGroundingPolicyConfigInput`<sup>Optional</sup> <a name="ContextualGroundingPolicyConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.contextualGroundingPolicyConfigInput"></a>

```go
func ContextualGroundingPolicyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `CrossRegionConfigInput`<sup>Optional</sup> <a name="CrossRegionConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.crossRegionConfigInput"></a>

```go
func CrossRegionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SensitiveInformationPolicyConfigInput`<sup>Optional</sup> <a name="SensitiveInformationPolicyConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.sensitiveInformationPolicyConfigInput"></a>

```go
func SensitiveInformationPolicyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TopicPolicyConfigInput`<sup>Optional</sup> <a name="TopicPolicyConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.topicPolicyConfigInput"></a>

```go
func TopicPolicyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `WordPolicyConfigInput`<sup>Optional</sup> <a name="WordPolicyConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.wordPolicyConfigInput"></a>

```go
func WordPolicyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `BlockedInputMessaging`<sup>Required</sup> <a name="BlockedInputMessaging" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.blockedInputMessaging"></a>

```go
func BlockedInputMessaging() *string
```

- *Type:* *string

---

##### `BlockedOutputsMessaging`<sup>Required</sup> <a name="BlockedOutputsMessaging" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.blockedOutputsMessaging"></a>

```go
func BlockedOutputsMessaging() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrail.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockGuardrailAutomatedReasoningPolicyConfig <a name="BedrockGuardrailAutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailAutomatedReasoningPolicyConfig {
	ConfidenceThreshold: *f64,
	Policies: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfig.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>*f64</code> | The confidence threshold for triggering guardrail actions based on Automated Reasoning policy violations. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfig.property.policies">Policies</a></code> | <code>*[]*string</code> | The list of Automated Reasoning policy ARNs to include in the guardrail configuration. |

---

##### `ConfidenceThreshold`<sup>Optional</sup> <a name="ConfidenceThreshold" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfig.property.confidenceThreshold"></a>

```go
ConfidenceThreshold *f64
```

- *Type:* *f64

The confidence threshold for triggering guardrail actions based on Automated Reasoning policy violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#confidence_threshold BedrockGuardrail#confidence_threshold}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfig.property.policies"></a>

```go
Policies *[]*string
```

- *Type:* *[]*string

The list of Automated Reasoning policy ARNs to include in the guardrail configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#policies BedrockGuardrail#policies}

---

### BedrockGuardrailConfig <a name="BedrockGuardrailConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BlockedInputMessaging: *string,
	BlockedOutputsMessaging: *string,
	Name: *string,
	AutomatedReasoningPolicyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfig,
	ContentPolicyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfig,
	ContextualGroundingPolicyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig,
	CrossRegionConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfig,
	Description: *string,
	KmsKeyArn: *string,
	SensitiveInformationPolicyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig,
	Tags: interface{},
	TopicPolicyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig,
	WordPolicyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.blockedInputMessaging">BlockedInputMessaging</a></code> | <code>*string</code> | Messaging for when violations are detected in text. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.blockedOutputsMessaging">BlockedOutputsMessaging</a></code> | <code>*string</code> | Messaging for when violations are detected in text. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.name">Name</a></code> | <code>*string</code> | Name of the guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.automatedReasoningPolicyConfig">AutomatedReasoningPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfig">BedrockGuardrailAutomatedReasoningPolicyConfig</a></code> | Optional configuration for integrating Automated Reasoning policies with the guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.contentPolicyConfig">ContentPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a></code> | Content policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.contextualGroundingPolicyConfig">ContextualGroundingPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a></code> | Contextual grounding policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.crossRegionConfig">CrossRegionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfig">BedrockGuardrailCrossRegionConfig</a></code> | The system-defined guardrail profile that you?re using with your guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.description">Description</a></code> | <code>*string</code> | Description of the guardrail or its version. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The KMS key with which the guardrail was encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.sensitiveInformationPolicyConfig">SensitiveInformationPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a></code> | Sensitive information policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.tags">Tags</a></code> | <code>interface{}</code> | List of Tags. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.topicPolicyConfig">TopicPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a></code> | Topic policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.wordPolicyConfig">WordPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a></code> | Word policy config for a guardrail. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlockedInputMessaging`<sup>Required</sup> <a name="BlockedInputMessaging" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.blockedInputMessaging"></a>

```go
BlockedInputMessaging *string
```

- *Type:* *string

Messaging for when violations are detected in text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#blocked_input_messaging BedrockGuardrail#blocked_input_messaging}

---

##### `BlockedOutputsMessaging`<sup>Required</sup> <a name="BlockedOutputsMessaging" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.blockedOutputsMessaging"></a>

```go
BlockedOutputsMessaging *string
```

- *Type:* *string

Messaging for when violations are detected in text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#blocked_outputs_messaging BedrockGuardrail#blocked_outputs_messaging}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}

---

##### `AutomatedReasoningPolicyConfig`<sup>Optional</sup> <a name="AutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.automatedReasoningPolicyConfig"></a>

```go
AutomatedReasoningPolicyConfig BedrockGuardrailAutomatedReasoningPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfig">BedrockGuardrailAutomatedReasoningPolicyConfig</a>

Optional configuration for integrating Automated Reasoning policies with the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#automated_reasoning_policy_config BedrockGuardrail#automated_reasoning_policy_config}

---

##### `ContentPolicyConfig`<sup>Optional</sup> <a name="ContentPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.contentPolicyConfig"></a>

```go
ContentPolicyConfig BedrockGuardrailContentPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfig">BedrockGuardrailContentPolicyConfig</a>

Content policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#content_policy_config BedrockGuardrail#content_policy_config}

---

##### `ContextualGroundingPolicyConfig`<sup>Optional</sup> <a name="ContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.contextualGroundingPolicyConfig"></a>

```go
ContextualGroundingPolicyConfig BedrockGuardrailContextualGroundingPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig">BedrockGuardrailContextualGroundingPolicyConfig</a>

Contextual grounding policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#contextual_grounding_policy_config BedrockGuardrail#contextual_grounding_policy_config}

---

##### `CrossRegionConfig`<sup>Optional</sup> <a name="CrossRegionConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.crossRegionConfig"></a>

```go
CrossRegionConfig BedrockGuardrailCrossRegionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfig">BedrockGuardrailCrossRegionConfig</a>

The system-defined guardrail profile that you?re using with your guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#cross_region_config BedrockGuardrail#cross_region_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the guardrail or its version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The KMS key with which the guardrail was encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#kms_key_arn BedrockGuardrail#kms_key_arn}

---

##### `SensitiveInformationPolicyConfig`<sup>Optional</sup> <a name="SensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.sensitiveInformationPolicyConfig"></a>

```go
SensitiveInformationPolicyConfig BedrockGuardrailSensitiveInformationPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig">BedrockGuardrailSensitiveInformationPolicyConfig</a>

Sensitive information policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#sensitive_information_policy_config BedrockGuardrail#sensitive_information_policy_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

List of Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#tags BedrockGuardrail#tags}

---

##### `TopicPolicyConfig`<sup>Optional</sup> <a name="TopicPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.topicPolicyConfig"></a>

```go
TopicPolicyConfig BedrockGuardrailTopicPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig">BedrockGuardrailTopicPolicyConfig</a>

Topic policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#topic_policy_config BedrockGuardrail#topic_policy_config}

---

##### `WordPolicyConfig`<sup>Optional</sup> <a name="WordPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailConfig.property.wordPolicyConfig"></a>

```go
WordPolicyConfig BedrockGuardrailWordPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfig">BedrockGuardrailWordPolicyConfig</a>

Word policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#word_policy_config BedrockGuardrail#word_policy_config}

---

### BedrockGuardrailContentPolicyConfig <a name="BedrockGuardrailContentPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailContentPolicyConfig {
	ContentFiltersTierConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfig,
	FiltersConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfig.property.contentFiltersTierConfig">ContentFiltersTierConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfig">BedrockGuardrailContentPolicyConfigContentFiltersTierConfig</a></code> | Guardrail tier config for content policy. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfig.property.filtersConfig">FiltersConfig</a></code> | <code>interface{}</code> | List of content filter configs in content policy. |

---

##### `ContentFiltersTierConfig`<sup>Optional</sup> <a name="ContentFiltersTierConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfig.property.contentFiltersTierConfig"></a>

```go
ContentFiltersTierConfig BedrockGuardrailContentPolicyConfigContentFiltersTierConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfig">BedrockGuardrailContentPolicyConfigContentFiltersTierConfig</a>

Guardrail tier config for content policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#content_filters_tier_config BedrockGuardrail#content_filters_tier_config}

---

##### `FiltersConfig`<sup>Optional</sup> <a name="FiltersConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfig.property.filtersConfig"></a>

```go
FiltersConfig interface{}
```

- *Type:* interface{}

List of content filter configs in content policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}

---

### BedrockGuardrailContentPolicyConfigContentFiltersTierConfig <a name="BedrockGuardrailContentPolicyConfigContentFiltersTierConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfig {
	TierName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfig.property.tierName">TierName</a></code> | <code>*string</code> | Tier name for tier configuration in content filters policy. |

---

##### `TierName`<sup>Optional</sup> <a name="TierName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfig.property.tierName"></a>

```go
TierName *string
```

- *Type:* *string

Tier name for tier configuration in content filters policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#tier_name BedrockGuardrail#tier_name}

---

### BedrockGuardrailContentPolicyConfigFiltersConfig <a name="BedrockGuardrailContentPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailContentPolicyConfigFiltersConfig {
	InputAction: *string,
	InputEnabled: interface{},
	InputModalities: *[]*string,
	InputStrength: *string,
	OutputAction: *string,
	OutputEnabled: interface{},
	OutputModalities: *[]*string,
	OutputStrength: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.inputAction">InputAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.inputEnabled">InputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.inputModalities">InputModalities</a></code> | <code>*[]*string</code> | List of modalities. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.inputStrength">InputStrength</a></code> | <code>*string</code> | Strength for filters. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.outputAction">OutputAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.outputEnabled">OutputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.outputModalities">OutputModalities</a></code> | <code>*[]*string</code> | List of modalities. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.outputStrength">OutputStrength</a></code> | <code>*string</code> | Strength for filters. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.type">Type</a></code> | <code>*string</code> | Type of filter in content policy. |

---

##### `InputAction`<sup>Optional</sup> <a name="InputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.inputAction"></a>

```go
InputAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}.

---

##### `InputEnabled`<sup>Optional</sup> <a name="InputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.inputEnabled"></a>

```go
InputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}.

---

##### `InputModalities`<sup>Optional</sup> <a name="InputModalities" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.inputModalities"></a>

```go
InputModalities *[]*string
```

- *Type:* *[]*string

List of modalities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_modalities BedrockGuardrail#input_modalities}

---

##### `InputStrength`<sup>Optional</sup> <a name="InputStrength" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.inputStrength"></a>

```go
InputStrength *string
```

- *Type:* *string

Strength for filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_strength BedrockGuardrail#input_strength}

---

##### `OutputAction`<sup>Optional</sup> <a name="OutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.outputAction"></a>

```go
OutputAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}.

---

##### `OutputEnabled`<sup>Optional</sup> <a name="OutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.outputEnabled"></a>

```go
OutputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}.

---

##### `OutputModalities`<sup>Optional</sup> <a name="OutputModalities" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.outputModalities"></a>

```go
OutputModalities *[]*string
```

- *Type:* *[]*string

List of modalities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_modalities BedrockGuardrail#output_modalities}

---

##### `OutputStrength`<sup>Optional</sup> <a name="OutputStrength" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.outputStrength"></a>

```go
OutputStrength *string
```

- *Type:* *string

Strength for filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_strength BedrockGuardrail#output_strength}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of filter in content policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}

---

### BedrockGuardrailContextualGroundingPolicyConfig <a name="BedrockGuardrailContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailContextualGroundingPolicyConfig {
	FiltersConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig.property.filtersConfig">FiltersConfig</a></code> | <code>interface{}</code> | List of contextual grounding filter configs. |

---

##### `FiltersConfig`<sup>Optional</sup> <a name="FiltersConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig.property.filtersConfig"></a>

```go
FiltersConfig interface{}
```

- *Type:* interface{}

List of contextual grounding filter configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}

---

### BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig <a name="BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig {
	Action: *string,
	Enabled: interface{},
	Threshold: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#enabled BedrockGuardrail#enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.threshold">Threshold</a></code> | <code>*f64</code> | The threshold for this filter. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.type">Type</a></code> | <code>*string</code> | Type of contextual grounding filter. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#enabled BedrockGuardrail#enabled}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

The threshold for this filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#threshold BedrockGuardrail#threshold}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of contextual grounding filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}

---

### BedrockGuardrailCrossRegionConfig <a name="BedrockGuardrailCrossRegionConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailCrossRegionConfig {
	GuardrailProfileArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfig.property.guardrailProfileArn">GuardrailProfileArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the guardrail profile. |

---

##### `GuardrailProfileArn`<sup>Optional</sup> <a name="GuardrailProfileArn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfig.property.guardrailProfileArn"></a>

```go
GuardrailProfileArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the guardrail profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#guardrail_profile_arn BedrockGuardrail#guardrail_profile_arn}

---

### BedrockGuardrailSensitiveInformationPolicyConfig <a name="BedrockGuardrailSensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailSensitiveInformationPolicyConfig {
	PiiEntitiesConfig: interface{},
	RegexesConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.property.piiEntitiesConfig">PiiEntitiesConfig</a></code> | <code>interface{}</code> | List of entities. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.property.regexesConfig">RegexesConfig</a></code> | <code>interface{}</code> | List of regex. |

---

##### `PiiEntitiesConfig`<sup>Optional</sup> <a name="PiiEntitiesConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.property.piiEntitiesConfig"></a>

```go
PiiEntitiesConfig interface{}
```

- *Type:* interface{}

List of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#pii_entities_config BedrockGuardrail#pii_entities_config}

---

##### `RegexesConfig`<sup>Optional</sup> <a name="RegexesConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.property.regexesConfig"></a>

```go
RegexesConfig interface{}
```

- *Type:* interface{}

List of regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#regexes_config BedrockGuardrail#regexes_config}

---

### BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig <a name="BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig {
	Action: *string,
	InputAction: *string,
	InputEnabled: interface{},
	OutputAction: *string,
	OutputEnabled: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.action">Action</a></code> | <code>*string</code> | Options for sensitive information action. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.inputAction">InputAction</a></code> | <code>*string</code> | Options for sensitive information action. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.inputEnabled">InputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.outputAction">OutputAction</a></code> | <code>*string</code> | Options for sensitive information action. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.outputEnabled">OutputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.type">Type</a></code> | <code>*string</code> | The currently supported PII entities. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Options for sensitive information action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}

---

##### `InputAction`<sup>Optional</sup> <a name="InputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.inputAction"></a>

```go
InputAction *string
```

- *Type:* *string

Options for sensitive information action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}

---

##### `InputEnabled`<sup>Optional</sup> <a name="InputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.inputEnabled"></a>

```go
InputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}.

---

##### `OutputAction`<sup>Optional</sup> <a name="OutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.outputAction"></a>

```go
OutputAction *string
```

- *Type:* *string

Options for sensitive information action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}

---

##### `OutputEnabled`<sup>Optional</sup> <a name="OutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.outputEnabled"></a>

```go
OutputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The currently supported PII entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}

---

### BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig <a name="BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig {
	Action: *string,
	Description: *string,
	InputAction: *string,
	InputEnabled: interface{},
	Name: *string,
	OutputAction: *string,
	OutputEnabled: interface{},
	Pattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.action">Action</a></code> | <code>*string</code> | Options for sensitive information action. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.description">Description</a></code> | <code>*string</code> | The regex description. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.inputAction">InputAction</a></code> | <code>*string</code> | Options for sensitive information action. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.inputEnabled">InputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.name">Name</a></code> | <code>*string</code> | The regex name. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.outputAction">OutputAction</a></code> | <code>*string</code> | Options for sensitive information action. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.outputEnabled">OutputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.pattern">Pattern</a></code> | <code>*string</code> | The regex pattern. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Options for sensitive information action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The regex description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}

---

##### `InputAction`<sup>Optional</sup> <a name="InputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.inputAction"></a>

```go
InputAction *string
```

- *Type:* *string

Options for sensitive information action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}

---

##### `InputEnabled`<sup>Optional</sup> <a name="InputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.inputEnabled"></a>

```go
InputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The regex name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}

---

##### `OutputAction`<sup>Optional</sup> <a name="OutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.outputAction"></a>

```go
OutputAction *string
```

- *Type:* *string

Options for sensitive information action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}

---

##### `OutputEnabled`<sup>Optional</sup> <a name="OutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.outputEnabled"></a>

```go
OutputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}.

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

The regex pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#pattern BedrockGuardrail#pattern}

---

### BedrockGuardrailTags <a name="BedrockGuardrailTags" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTags.property.key">Key</a></code> | <code>*string</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTags.property.value">Value</a></code> | <code>*string</code> | Tag Value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#key BedrockGuardrail#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#value BedrockGuardrail#value}

---

### BedrockGuardrailTopicPolicyConfig <a name="BedrockGuardrailTopicPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailTopicPolicyConfig {
	TopicsConfig: interface{},
	TopicsTierConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig.property.topicsConfig">TopicsConfig</a></code> | <code>interface{}</code> | List of topic configs in topic policy. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig.property.topicsTierConfig">TopicsTierConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfig">BedrockGuardrailTopicPolicyConfigTopicsTierConfig</a></code> | Guardrail tier config for topic policy. |

---

##### `TopicsConfig`<sup>Optional</sup> <a name="TopicsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig.property.topicsConfig"></a>

```go
TopicsConfig interface{}
```

- *Type:* interface{}

List of topic configs in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#topics_config BedrockGuardrail#topics_config}

---

##### `TopicsTierConfig`<sup>Optional</sup> <a name="TopicsTierConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig.property.topicsTierConfig"></a>

```go
TopicsTierConfig BedrockGuardrailTopicPolicyConfigTopicsTierConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfig">BedrockGuardrailTopicPolicyConfigTopicsTierConfig</a>

Guardrail tier config for topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#topics_tier_config BedrockGuardrail#topics_tier_config}

---

### BedrockGuardrailTopicPolicyConfigTopicsConfig <a name="BedrockGuardrailTopicPolicyConfigTopicsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig {
	Definition: *string,
	Examples: *[]*string,
	InputAction: *string,
	InputEnabled: interface{},
	Name: *string,
	OutputAction: *string,
	OutputEnabled: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.definition">Definition</a></code> | <code>*string</code> | Definition of topic in topic policy. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.examples">Examples</a></code> | <code>*[]*string</code> | List of text examples. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.inputAction">InputAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.inputEnabled">InputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.name">Name</a></code> | <code>*string</code> | Name of topic in topic policy. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.outputAction">OutputAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.outputEnabled">OutputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.type">Type</a></code> | <code>*string</code> | Type of topic in a policy. |

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Definition of topic in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#definition BedrockGuardrail#definition}

---

##### `Examples`<sup>Optional</sup> <a name="Examples" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.examples"></a>

```go
Examples *[]*string
```

- *Type:* *[]*string

List of text examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#examples BedrockGuardrail#examples}

---

##### `InputAction`<sup>Optional</sup> <a name="InputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.inputAction"></a>

```go
InputAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}.

---

##### `InputEnabled`<sup>Optional</sup> <a name="InputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.inputEnabled"></a>

```go
InputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of topic in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}

---

##### `OutputAction`<sup>Optional</sup> <a name="OutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.outputAction"></a>

```go
OutputAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}.

---

##### `OutputEnabled`<sup>Optional</sup> <a name="OutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.outputEnabled"></a>

```go
OutputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of topic in a policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}

---

### BedrockGuardrailTopicPolicyConfigTopicsTierConfig <a name="BedrockGuardrailTopicPolicyConfigTopicsTierConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfig {
	TierName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfig.property.tierName">TierName</a></code> | <code>*string</code> | Tier name for tier configuration in topic policy. |

---

##### `TierName`<sup>Optional</sup> <a name="TierName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfig.property.tierName"></a>

```go
TierName *string
```

- *Type:* *string

Tier name for tier configuration in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#tier_name BedrockGuardrail#tier_name}

---

### BedrockGuardrailWordPolicyConfig <a name="BedrockGuardrailWordPolicyConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailWordPolicyConfig {
	ManagedWordListsConfig: interface{},
	WordsConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.property.managedWordListsConfig">ManagedWordListsConfig</a></code> | <code>interface{}</code> | A config for the list of managed words. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.property.wordsConfig">WordsConfig</a></code> | <code>interface{}</code> | List of custom word configs. |

---

##### `ManagedWordListsConfig`<sup>Optional</sup> <a name="ManagedWordListsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.property.managedWordListsConfig"></a>

```go
ManagedWordListsConfig interface{}
```

- *Type:* interface{}

A config for the list of managed words.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#managed_word_lists_config BedrockGuardrail#managed_word_lists_config}

---

##### `WordsConfig`<sup>Optional</sup> <a name="WordsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.property.wordsConfig"></a>

```go
WordsConfig interface{}
```

- *Type:* interface{}

List of custom word configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#words_config BedrockGuardrail#words_config}

---

### BedrockGuardrailWordPolicyConfigManagedWordListsConfig <a name="BedrockGuardrailWordPolicyConfigManagedWordListsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig {
	InputAction: *string,
	InputEnabled: interface{},
	OutputAction: *string,
	OutputEnabled: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.inputAction">InputAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.inputEnabled">InputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.outputAction">OutputAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.outputEnabled">OutputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.type">Type</a></code> | <code>*string</code> | Options for managed words. |

---

##### `InputAction`<sup>Optional</sup> <a name="InputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.inputAction"></a>

```go
InputAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}.

---

##### `InputEnabled`<sup>Optional</sup> <a name="InputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.inputEnabled"></a>

```go
InputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}.

---

##### `OutputAction`<sup>Optional</sup> <a name="OutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.outputAction"></a>

```go
OutputAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}.

---

##### `OutputEnabled`<sup>Optional</sup> <a name="OutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.outputEnabled"></a>

```go
OutputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Options for managed words.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}

---

### BedrockGuardrailWordPolicyConfigWordsConfig <a name="BedrockGuardrailWordPolicyConfigWordsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

&bedrockguardrail.BedrockGuardrailWordPolicyConfigWordsConfig {
	InputAction: *string,
	InputEnabled: interface{},
	OutputAction: *string,
	OutputEnabled: interface{},
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.inputAction">InputAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.inputEnabled">InputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.outputAction">OutputAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.outputEnabled">OutputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.text">Text</a></code> | <code>*string</code> | The custom word text. |

---

##### `InputAction`<sup>Optional</sup> <a name="InputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.inputAction"></a>

```go
InputAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}.

---

##### `InputEnabled`<sup>Optional</sup> <a name="InputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.inputEnabled"></a>

```go
InputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}.

---

##### `OutputAction`<sup>Optional</sup> <a name="OutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.outputAction"></a>

```go
OutputAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}.

---

##### `OutputEnabled`<sup>Optional</sup> <a name="OutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.outputEnabled"></a>

```go
OutputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.text"></a>

```go
Text *string
```

- *Type:* *string

The custom word text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_guardrail#text BedrockGuardrail#text}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference <a name="BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.resetConfidenceThreshold">ResetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.resetPolicies">ResetPolicies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidenceThreshold` <a name="ResetConfidenceThreshold" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.resetConfidenceThreshold"></a>

```go
func ResetConfidenceThreshold()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.resetPolicies"></a>

```go
func ResetPolicies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.confidenceThresholdInput">ConfidenceThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.policiesInput">PoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfidenceThresholdInput`<sup>Optional</sup> <a name="ConfidenceThresholdInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.confidenceThresholdInput"></a>

```go
func ConfidenceThresholdInput() *f64
```

- *Type:* *f64

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.policiesInput"></a>

```go
func PoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConfidenceThreshold`<sup>Required</sup> <a name="ConfidenceThreshold" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.confidenceThreshold"></a>

```go
func ConfidenceThreshold() *f64
```

- *Type:* *f64

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference <a name="BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.resetTierName">ResetTierName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTierName` <a name="ResetTierName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.resetTierName"></a>

```go
func ResetTierName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.tierNameInput">TierNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.tierName">TierName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TierNameInput`<sup>Optional</sup> <a name="TierNameInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.tierNameInput"></a>

```go
func TierNameInput() *string
```

- *Type:* *string

---

##### `TierName`<sup>Required</sup> <a name="TierName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.tierName"></a>

```go
func TierName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailContentPolicyConfigFiltersConfigList <a name="BedrockGuardrailContentPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailContentPolicyConfigFiltersConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockGuardrailContentPolicyConfigFiltersConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.get"></a>

```go
func Get(index *f64) BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference <a name="BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputAction">ResetInputAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputEnabled">ResetInputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputModalities">ResetInputModalities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputStrength">ResetInputStrength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputAction">ResetOutputAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputEnabled">ResetOutputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputModalities">ResetOutputModalities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputStrength">ResetOutputStrength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputAction` <a name="ResetInputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputAction"></a>

```go
func ResetInputAction()
```

##### `ResetInputEnabled` <a name="ResetInputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputEnabled"></a>

```go
func ResetInputEnabled()
```

##### `ResetInputModalities` <a name="ResetInputModalities" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputModalities"></a>

```go
func ResetInputModalities()
```

##### `ResetInputStrength` <a name="ResetInputStrength" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputStrength"></a>

```go
func ResetInputStrength()
```

##### `ResetOutputAction` <a name="ResetOutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputAction"></a>

```go
func ResetOutputAction()
```

##### `ResetOutputEnabled` <a name="ResetOutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputEnabled"></a>

```go
func ResetOutputEnabled()
```

##### `ResetOutputModalities` <a name="ResetOutputModalities" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputModalities"></a>

```go
func ResetOutputModalities()
```

##### `ResetOutputStrength` <a name="ResetOutputStrength" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputStrength"></a>

```go
func ResetOutputStrength()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputActionInput">InputActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputEnabledInput">InputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputModalitiesInput">InputModalitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrengthInput">InputStrengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputActionInput">OutputActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputEnabledInput">OutputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputModalitiesInput">OutputModalitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrengthInput">OutputStrengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputAction">InputAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputEnabled">InputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputModalities">InputModalities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength">InputStrength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputAction">OutputAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputEnabled">OutputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputModalities">OutputModalities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength">OutputStrength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputActionInput`<sup>Optional</sup> <a name="InputActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputActionInput"></a>

```go
func InputActionInput() *string
```

- *Type:* *string

---

##### `InputEnabledInput`<sup>Optional</sup> <a name="InputEnabledInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputEnabledInput"></a>

```go
func InputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `InputModalitiesInput`<sup>Optional</sup> <a name="InputModalitiesInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputModalitiesInput"></a>

```go
func InputModalitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InputStrengthInput`<sup>Optional</sup> <a name="InputStrengthInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrengthInput"></a>

```go
func InputStrengthInput() *string
```

- *Type:* *string

---

##### `OutputActionInput`<sup>Optional</sup> <a name="OutputActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputActionInput"></a>

```go
func OutputActionInput() *string
```

- *Type:* *string

---

##### `OutputEnabledInput`<sup>Optional</sup> <a name="OutputEnabledInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputEnabledInput"></a>

```go
func OutputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OutputModalitiesInput`<sup>Optional</sup> <a name="OutputModalitiesInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputModalitiesInput"></a>

```go
func OutputModalitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OutputStrengthInput`<sup>Optional</sup> <a name="OutputStrengthInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrengthInput"></a>

```go
func OutputStrengthInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `InputAction`<sup>Required</sup> <a name="InputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputAction"></a>

```go
func InputAction() *string
```

- *Type:* *string

---

##### `InputEnabled`<sup>Required</sup> <a name="InputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputEnabled"></a>

```go
func InputEnabled() interface{}
```

- *Type:* interface{}

---

##### `InputModalities`<sup>Required</sup> <a name="InputModalities" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputModalities"></a>

```go
func InputModalities() *[]*string
```

- *Type:* *[]*string

---

##### `InputStrength`<sup>Required</sup> <a name="InputStrength" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength"></a>

```go
func InputStrength() *string
```

- *Type:* *string

---

##### `OutputAction`<sup>Required</sup> <a name="OutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputAction"></a>

```go
func OutputAction() *string
```

- *Type:* *string

---

##### `OutputEnabled`<sup>Required</sup> <a name="OutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputEnabled"></a>

```go
func OutputEnabled() interface{}
```

- *Type:* interface{}

---

##### `OutputModalities`<sup>Required</sup> <a name="OutputModalities" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputModalities"></a>

```go
func OutputModalities() *[]*string
```

- *Type:* *[]*string

---

##### `OutputStrength`<sup>Required</sup> <a name="OutputStrength" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength"></a>

```go
func OutputStrength() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailContentPolicyConfigOutputReference <a name="BedrockGuardrailContentPolicyConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailContentPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockGuardrailContentPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putContentFiltersTierConfig">PutContentFiltersTierConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putFiltersConfig">PutFiltersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resetContentFiltersTierConfig">ResetContentFiltersTierConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resetFiltersConfig">ResetFiltersConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContentFiltersTierConfig` <a name="PutContentFiltersTierConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putContentFiltersTierConfig"></a>

```go
func PutContentFiltersTierConfig(value BedrockGuardrailContentPolicyConfigContentFiltersTierConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putContentFiltersTierConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfig">BedrockGuardrailContentPolicyConfigContentFiltersTierConfig</a>

---

##### `PutFiltersConfig` <a name="PutFiltersConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putFiltersConfig"></a>

```go
func PutFiltersConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putFiltersConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContentFiltersTierConfig` <a name="ResetContentFiltersTierConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resetContentFiltersTierConfig"></a>

```go
func ResetContentFiltersTierConfig()
```

##### `ResetFiltersConfig` <a name="ResetFiltersConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resetFiltersConfig"></a>

```go
func ResetFiltersConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.contentFiltersTierConfig">ContentFiltersTierConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference">BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfig">FiltersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList">BedrockGuardrailContentPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.contentFiltersTierConfigInput">ContentFiltersTierConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfigInput">FiltersConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentFiltersTierConfig`<sup>Required</sup> <a name="ContentFiltersTierConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.contentFiltersTierConfig"></a>

```go
func ContentFiltersTierConfig() BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference">BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference</a>

---

##### `FiltersConfig`<sup>Required</sup> <a name="FiltersConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfig"></a>

```go
func FiltersConfig() BedrockGuardrailContentPolicyConfigFiltersConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList">BedrockGuardrailContentPolicyConfigFiltersConfigList</a>

---

##### `ContentFiltersTierConfigInput`<sup>Optional</sup> <a name="ContentFiltersTierConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.contentFiltersTierConfigInput"></a>

```go
func ContentFiltersTierConfigInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersConfigInput`<sup>Optional</sup> <a name="FiltersConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfigInput"></a>

```go
func FiltersConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList <a name="BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get"></a>

```go
func Get(index *f64) BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference <a name="BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailContextualGroundingPolicyConfigOutputReference <a name="BedrockGuardrailContextualGroundingPolicyConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailContextualGroundingPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockGuardrailContextualGroundingPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig">PutFiltersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resetFiltersConfig">ResetFiltersConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFiltersConfig` <a name="PutFiltersConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig"></a>

```go
func PutFiltersConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFiltersConfig` <a name="ResetFiltersConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resetFiltersConfig"></a>

```go
func ResetFiltersConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig">FiltersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfigInput">FiltersConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FiltersConfig`<sup>Required</sup> <a name="FiltersConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig"></a>

```go
func FiltersConfig() BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList</a>

---

##### `FiltersConfigInput`<sup>Optional</sup> <a name="FiltersConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfigInput"></a>

```go
func FiltersConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailCrossRegionConfigOutputReference <a name="BedrockGuardrailCrossRegionConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailCrossRegionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockGuardrailCrossRegionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.resetGuardrailProfileArn">ResetGuardrailProfileArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGuardrailProfileArn` <a name="ResetGuardrailProfileArn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.resetGuardrailProfileArn"></a>

```go
func ResetGuardrailProfileArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.guardrailProfileArnInput">GuardrailProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.guardrailProfileArn">GuardrailProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuardrailProfileArnInput`<sup>Optional</sup> <a name="GuardrailProfileArnInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.guardrailProfileArnInput"></a>

```go
func GuardrailProfileArnInput() *string
```

- *Type:* *string

---

##### `GuardrailProfileArn`<sup>Required</sup> <a name="GuardrailProfileArn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.guardrailProfileArn"></a>

```go
func GuardrailProfileArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailSensitiveInformationPolicyConfigOutputReference <a name="BedrockGuardrailSensitiveInformationPolicyConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailSensitiveInformationPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockGuardrailSensitiveInformationPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig">PutPiiEntitiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig">PutRegexesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resetPiiEntitiesConfig">ResetPiiEntitiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resetRegexesConfig">ResetRegexesConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPiiEntitiesConfig` <a name="PutPiiEntitiesConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig"></a>

```go
func PutPiiEntitiesConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRegexesConfig` <a name="PutRegexesConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig"></a>

```go
func PutRegexesConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPiiEntitiesConfig` <a name="ResetPiiEntitiesConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resetPiiEntitiesConfig"></a>

```go
func ResetPiiEntitiesConfig()
```

##### `ResetRegexesConfig` <a name="ResetRegexesConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resetRegexesConfig"></a>

```go
func ResetRegexesConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig">PiiEntitiesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig">RegexesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfigInput">PiiEntitiesConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfigInput">RegexesConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PiiEntitiesConfig`<sup>Required</sup> <a name="PiiEntitiesConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig"></a>

```go
func PiiEntitiesConfig() BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a>

---

##### `RegexesConfig`<sup>Required</sup> <a name="RegexesConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig"></a>

```go
func RegexesConfig() BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a>

---

##### `PiiEntitiesConfigInput`<sup>Optional</sup> <a name="PiiEntitiesConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfigInput"></a>

```go
func PiiEntitiesConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RegexesConfigInput`<sup>Optional</sup> <a name="RegexesConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfigInput"></a>

```go
func RegexesConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList <a name="BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get"></a>

```go
func Get(index *f64) BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference <a name="BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetInputAction">ResetInputAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetInputEnabled">ResetInputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetOutputAction">ResetOutputAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetOutputEnabled">ResetOutputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetInputAction` <a name="ResetInputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetInputAction"></a>

```go
func ResetInputAction()
```

##### `ResetInputEnabled` <a name="ResetInputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetInputEnabled"></a>

```go
func ResetInputEnabled()
```

##### `ResetOutputAction` <a name="ResetOutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetOutputAction"></a>

```go
func ResetOutputAction()
```

##### `ResetOutputEnabled` <a name="ResetOutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetOutputEnabled"></a>

```go
func ResetOutputEnabled()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputActionInput">InputActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputEnabledInput">InputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputActionInput">OutputActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputEnabledInput">OutputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputAction">InputAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputEnabled">InputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputAction">OutputAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputEnabled">OutputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `InputActionInput`<sup>Optional</sup> <a name="InputActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputActionInput"></a>

```go
func InputActionInput() *string
```

- *Type:* *string

---

##### `InputEnabledInput`<sup>Optional</sup> <a name="InputEnabledInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputEnabledInput"></a>

```go
func InputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OutputActionInput`<sup>Optional</sup> <a name="OutputActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputActionInput"></a>

```go
func OutputActionInput() *string
```

- *Type:* *string

---

##### `OutputEnabledInput`<sup>Optional</sup> <a name="OutputEnabledInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputEnabledInput"></a>

```go
func OutputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InputAction`<sup>Required</sup> <a name="InputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputAction"></a>

```go
func InputAction() *string
```

- *Type:* *string

---

##### `InputEnabled`<sup>Required</sup> <a name="InputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputEnabled"></a>

```go
func InputEnabled() interface{}
```

- *Type:* interface{}

---

##### `OutputAction`<sup>Required</sup> <a name="OutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputAction"></a>

```go
func OutputAction() *string
```

- *Type:* *string

---

##### `OutputEnabled`<sup>Required</sup> <a name="OutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputEnabled"></a>

```go
func OutputEnabled() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList <a name="BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get"></a>

```go
func Get(index *f64) BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference <a name="BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetInputAction">ResetInputAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetInputEnabled">ResetInputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetOutputAction">ResetOutputAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetOutputEnabled">ResetOutputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInputAction` <a name="ResetInputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetInputAction"></a>

```go
func ResetInputAction()
```

##### `ResetInputEnabled` <a name="ResetInputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetInputEnabled"></a>

```go
func ResetInputEnabled()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOutputAction` <a name="ResetOutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetOutputAction"></a>

```go
func ResetOutputAction()
```

##### `ResetOutputEnabled` <a name="ResetOutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetOutputEnabled"></a>

```go
func ResetOutputEnabled()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetPattern"></a>

```go
func ResetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputActionInput">InputActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputEnabledInput">InputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputActionInput">OutputActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputEnabledInput">OutputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputAction">InputAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputEnabled">InputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputAction">OutputAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputEnabled">OutputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InputActionInput`<sup>Optional</sup> <a name="InputActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputActionInput"></a>

```go
func InputActionInput() *string
```

- *Type:* *string

---

##### `InputEnabledInput`<sup>Optional</sup> <a name="InputEnabledInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputEnabledInput"></a>

```go
func InputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputActionInput`<sup>Optional</sup> <a name="OutputActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputActionInput"></a>

```go
func OutputActionInput() *string
```

- *Type:* *string

---

##### `OutputEnabledInput`<sup>Optional</sup> <a name="OutputEnabledInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputEnabledInput"></a>

```go
func OutputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InputAction`<sup>Required</sup> <a name="InputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputAction"></a>

```go
func InputAction() *string
```

- *Type:* *string

---

##### `InputEnabled`<sup>Required</sup> <a name="InputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputEnabled"></a>

```go
func InputEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputAction`<sup>Required</sup> <a name="OutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputAction"></a>

```go
func OutputAction() *string
```

- *Type:* *string

---

##### `OutputEnabled`<sup>Required</sup> <a name="OutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputEnabled"></a>

```go
func OutputEnabled() interface{}
```

- *Type:* interface{}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailTagsList <a name="BedrockGuardrailTagsList" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockGuardrailTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.get"></a>

```go
func Get(index *f64) BedrockGuardrailTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailTagsOutputReference <a name="BedrockGuardrailTagsOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockGuardrailTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailTopicPolicyConfigOutputReference <a name="BedrockGuardrailTopicPolicyConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailTopicPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockGuardrailTopicPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTopicsConfig">PutTopicsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTopicsTierConfig">PutTopicsTierConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resetTopicsConfig">ResetTopicsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resetTopicsTierConfig">ResetTopicsTierConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTopicsConfig` <a name="PutTopicsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTopicsConfig"></a>

```go
func PutTopicsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTopicsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTopicsTierConfig` <a name="PutTopicsTierConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTopicsTierConfig"></a>

```go
func PutTopicsTierConfig(value BedrockGuardrailTopicPolicyConfigTopicsTierConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTopicsTierConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfig">BedrockGuardrailTopicPolicyConfigTopicsTierConfig</a>

---

##### `ResetTopicsConfig` <a name="ResetTopicsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resetTopicsConfig"></a>

```go
func ResetTopicsConfig()
```

##### `ResetTopicsTierConfig` <a name="ResetTopicsTierConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resetTopicsTierConfig"></a>

```go
func ResetTopicsTierConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfig">TopicsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList">BedrockGuardrailTopicPolicyConfigTopicsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsTierConfig">TopicsTierConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference">BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfigInput">TopicsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsTierConfigInput">TopicsTierConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicsConfig`<sup>Required</sup> <a name="TopicsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfig"></a>

```go
func TopicsConfig() BedrockGuardrailTopicPolicyConfigTopicsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList">BedrockGuardrailTopicPolicyConfigTopicsConfigList</a>

---

##### `TopicsTierConfig`<sup>Required</sup> <a name="TopicsTierConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsTierConfig"></a>

```go
func TopicsTierConfig() BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference">BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference</a>

---

##### `TopicsConfigInput`<sup>Optional</sup> <a name="TopicsConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfigInput"></a>

```go
func TopicsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TopicsTierConfigInput`<sup>Optional</sup> <a name="TopicsTierConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsTierConfigInput"></a>

```go
func TopicsTierConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailTopicPolicyConfigTopicsConfigList <a name="BedrockGuardrailTopicPolicyConfigTopicsConfigList" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailTopicPolicyConfigTopicsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockGuardrailTopicPolicyConfigTopicsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.get"></a>

```go
func Get(index *f64) BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference <a name="BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetExamples">ResetExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetInputAction">ResetInputAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetInputEnabled">ResetInputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetOutputAction">ResetOutputAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetOutputEnabled">ResetOutputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetDefinition"></a>

```go
func ResetDefinition()
```

##### `ResetExamples` <a name="ResetExamples" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetExamples"></a>

```go
func ResetExamples()
```

##### `ResetInputAction` <a name="ResetInputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetInputAction"></a>

```go
func ResetInputAction()
```

##### `ResetInputEnabled` <a name="ResetInputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetInputEnabled"></a>

```go
func ResetInputEnabled()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOutputAction` <a name="ResetOutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetOutputAction"></a>

```go
func ResetOutputAction()
```

##### `ResetOutputEnabled` <a name="ResetOutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetOutputEnabled"></a>

```go
func ResetOutputEnabled()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examplesInput">ExamplesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputActionInput">InputActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputEnabledInput">InputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputActionInput">OutputActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputEnabledInput">OutputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples">Examples</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputAction">InputAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputEnabled">InputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputAction">OutputAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputEnabled">OutputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `ExamplesInput`<sup>Optional</sup> <a name="ExamplesInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examplesInput"></a>

```go
func ExamplesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InputActionInput`<sup>Optional</sup> <a name="InputActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputActionInput"></a>

```go
func InputActionInput() *string
```

- *Type:* *string

---

##### `InputEnabledInput`<sup>Optional</sup> <a name="InputEnabledInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputEnabledInput"></a>

```go
func InputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputActionInput`<sup>Optional</sup> <a name="OutputActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputActionInput"></a>

```go
func OutputActionInput() *string
```

- *Type:* *string

---

##### `OutputEnabledInput`<sup>Optional</sup> <a name="OutputEnabledInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputEnabledInput"></a>

```go
func OutputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `Examples`<sup>Required</sup> <a name="Examples" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples"></a>

```go
func Examples() *[]*string
```

- *Type:* *[]*string

---

##### `InputAction`<sup>Required</sup> <a name="InputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputAction"></a>

```go
func InputAction() *string
```

- *Type:* *string

---

##### `InputEnabled`<sup>Required</sup> <a name="InputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputEnabled"></a>

```go
func InputEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputAction`<sup>Required</sup> <a name="OutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputAction"></a>

```go
func OutputAction() *string
```

- *Type:* *string

---

##### `OutputEnabled`<sup>Required</sup> <a name="OutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputEnabled"></a>

```go
func OutputEnabled() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference <a name="BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.resetTierName">ResetTierName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTierName` <a name="ResetTierName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.resetTierName"></a>

```go
func ResetTierName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.tierNameInput">TierNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.tierName">TierName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TierNameInput`<sup>Optional</sup> <a name="TierNameInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.tierNameInput"></a>

```go
func TierNameInput() *string
```

- *Type:* *string

---

##### `TierName`<sup>Required</sup> <a name="TierName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.tierName"></a>

```go
func TierName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailWordPolicyConfigManagedWordListsConfigList <a name="BedrockGuardrailWordPolicyConfigManagedWordListsConfigList" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailWordPolicyConfigManagedWordListsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockGuardrailWordPolicyConfigManagedWordListsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get"></a>

```go
func Get(index *f64) BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference <a name="BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetInputAction">ResetInputAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetInputEnabled">ResetInputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetOutputAction">ResetOutputAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetOutputEnabled">ResetOutputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputAction` <a name="ResetInputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetInputAction"></a>

```go
func ResetInputAction()
```

##### `ResetInputEnabled` <a name="ResetInputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetInputEnabled"></a>

```go
func ResetInputEnabled()
```

##### `ResetOutputAction` <a name="ResetOutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetOutputAction"></a>

```go
func ResetOutputAction()
```

##### `ResetOutputEnabled` <a name="ResetOutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetOutputEnabled"></a>

```go
func ResetOutputEnabled()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputActionInput">InputActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputEnabledInput">InputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputActionInput">OutputActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputEnabledInput">OutputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputAction">InputAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputEnabled">InputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputAction">OutputAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputEnabled">OutputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputActionInput`<sup>Optional</sup> <a name="InputActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputActionInput"></a>

```go
func InputActionInput() *string
```

- *Type:* *string

---

##### `InputEnabledInput`<sup>Optional</sup> <a name="InputEnabledInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputEnabledInput"></a>

```go
func InputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OutputActionInput`<sup>Optional</sup> <a name="OutputActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputActionInput"></a>

```go
func OutputActionInput() *string
```

- *Type:* *string

---

##### `OutputEnabledInput`<sup>Optional</sup> <a name="OutputEnabledInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputEnabledInput"></a>

```go
func OutputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `InputAction`<sup>Required</sup> <a name="InputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputAction"></a>

```go
func InputAction() *string
```

- *Type:* *string

---

##### `InputEnabled`<sup>Required</sup> <a name="InputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputEnabled"></a>

```go
func InputEnabled() interface{}
```

- *Type:* interface{}

---

##### `OutputAction`<sup>Required</sup> <a name="OutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputAction"></a>

```go
func OutputAction() *string
```

- *Type:* *string

---

##### `OutputEnabled`<sup>Required</sup> <a name="OutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputEnabled"></a>

```go
func OutputEnabled() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailWordPolicyConfigOutputReference <a name="BedrockGuardrailWordPolicyConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailWordPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockGuardrailWordPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig">PutManagedWordListsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putWordsConfig">PutWordsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resetManagedWordListsConfig">ResetManagedWordListsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resetWordsConfig">ResetWordsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedWordListsConfig` <a name="PutManagedWordListsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig"></a>

```go
func PutManagedWordListsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWordsConfig` <a name="PutWordsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putWordsConfig"></a>

```go
func PutWordsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putWordsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetManagedWordListsConfig` <a name="ResetManagedWordListsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resetManagedWordListsConfig"></a>

```go
func ResetManagedWordListsConfig()
```

##### `ResetWordsConfig` <a name="ResetWordsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resetWordsConfig"></a>

```go
func ResetWordsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig">ManagedWordListsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList">BedrockGuardrailWordPolicyConfigManagedWordListsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfig">WordsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList">BedrockGuardrailWordPolicyConfigWordsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfigInput">ManagedWordListsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfigInput">WordsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedWordListsConfig`<sup>Required</sup> <a name="ManagedWordListsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig"></a>

```go
func ManagedWordListsConfig() BedrockGuardrailWordPolicyConfigManagedWordListsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList">BedrockGuardrailWordPolicyConfigManagedWordListsConfigList</a>

---

##### `WordsConfig`<sup>Required</sup> <a name="WordsConfig" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfig"></a>

```go
func WordsConfig() BedrockGuardrailWordPolicyConfigWordsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList">BedrockGuardrailWordPolicyConfigWordsConfigList</a>

---

##### `ManagedWordListsConfigInput`<sup>Optional</sup> <a name="ManagedWordListsConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfigInput"></a>

```go
func ManagedWordListsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `WordsConfigInput`<sup>Optional</sup> <a name="WordsConfigInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfigInput"></a>

```go
func WordsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailWordPolicyConfigWordsConfigList <a name="BedrockGuardrailWordPolicyConfigWordsConfigList" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailWordPolicyConfigWordsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockGuardrailWordPolicyConfigWordsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.get"></a>

```go
func Get(index *f64) BedrockGuardrailWordPolicyConfigWordsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockGuardrailWordPolicyConfigWordsConfigOutputReference <a name="BedrockGuardrailWordPolicyConfigWordsConfigOutputReference" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockguardrail"

bedrockguardrail.NewBedrockGuardrailWordPolicyConfigWordsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockGuardrailWordPolicyConfigWordsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetInputAction">ResetInputAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetInputEnabled">ResetInputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetOutputAction">ResetOutputAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetOutputEnabled">ResetOutputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputAction` <a name="ResetInputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetInputAction"></a>

```go
func ResetInputAction()
```

##### `ResetInputEnabled` <a name="ResetInputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetInputEnabled"></a>

```go
func ResetInputEnabled()
```

##### `ResetOutputAction` <a name="ResetOutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetOutputAction"></a>

```go
func ResetOutputAction()
```

##### `ResetOutputEnabled` <a name="ResetOutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetOutputEnabled"></a>

```go
func ResetOutputEnabled()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputActionInput">InputActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputEnabledInput">InputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputActionInput">OutputActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputEnabledInput">OutputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputAction">InputAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputEnabled">InputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputAction">OutputAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputEnabled">OutputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputActionInput`<sup>Optional</sup> <a name="InputActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputActionInput"></a>

```go
func InputActionInput() *string
```

- *Type:* *string

---

##### `InputEnabledInput`<sup>Optional</sup> <a name="InputEnabledInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputEnabledInput"></a>

```go
func InputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OutputActionInput`<sup>Optional</sup> <a name="OutputActionInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputActionInput"></a>

```go
func OutputActionInput() *string
```

- *Type:* *string

---

##### `OutputEnabledInput`<sup>Optional</sup> <a name="OutputEnabledInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputEnabledInput"></a>

```go
func OutputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `InputAction`<sup>Required</sup> <a name="InputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputAction"></a>

```go
func InputAction() *string
```

- *Type:* *string

---

##### `InputEnabled`<sup>Required</sup> <a name="InputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputEnabled"></a>

```go
func InputEnabled() interface{}
```

- *Type:* interface{}

---

##### `OutputAction`<sup>Required</sup> <a name="OutputAction" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputAction"></a>

```go
func OutputAction() *string
```

- *Type:* *string

---

##### `OutputEnabled`<sup>Required</sup> <a name="OutputEnabled" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputEnabled"></a>

```go
func OutputEnabled() interface{}
```

- *Type:* interface{}

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



