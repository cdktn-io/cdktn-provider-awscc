# `wisdomAiGuardrail` Submodule <a name="`wisdomAiGuardrail` Submodule" id="@cdktn/provider-awscc.wisdomAiGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomAiGuardrail <a name="WisdomAiGuardrail" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail awscc_wisdom_ai_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrail(scope Construct, id *string, config WisdomAiGuardrailConfig) WisdomAiGuardrail
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig">WisdomAiGuardrailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig">WisdomAiGuardrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContentPolicyConfig">PutContentPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContextualGroundingPolicyConfig">PutContextualGroundingPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putSensitiveInformationPolicyConfig">PutSensitiveInformationPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putTopicPolicyConfig">PutTopicPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putWordPolicyConfig">PutWordPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetContentPolicyConfig">ResetContentPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetContextualGroundingPolicyConfig">ResetContextualGroundingPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetSensitiveInformationPolicyConfig">ResetSensitiveInformationPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetTopicPolicyConfig">ResetTopicPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetWordPolicyConfig">ResetWordPolicyConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContentPolicyConfig` <a name="PutContentPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContentPolicyConfig"></a>

```go
func PutContentPolicyConfig(value WisdomAiGuardrailContentPolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContentPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a>

---

##### `PutContextualGroundingPolicyConfig` <a name="PutContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContextualGroundingPolicyConfig"></a>

```go
func PutContextualGroundingPolicyConfig(value WisdomAiGuardrailContextualGroundingPolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putContextualGroundingPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a>

---

##### `PutSensitiveInformationPolicyConfig` <a name="PutSensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putSensitiveInformationPolicyConfig"></a>

```go
func PutSensitiveInformationPolicyConfig(value WisdomAiGuardrailSensitiveInformationPolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putSensitiveInformationPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a>

---

##### `PutTopicPolicyConfig` <a name="PutTopicPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putTopicPolicyConfig"></a>

```go
func PutTopicPolicyConfig(value WisdomAiGuardrailTopicPolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putTopicPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a>

---

##### `PutWordPolicyConfig` <a name="PutWordPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putWordPolicyConfig"></a>

```go
func PutWordPolicyConfig(value WisdomAiGuardrailWordPolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.putWordPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a>

---

##### `ResetContentPolicyConfig` <a name="ResetContentPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetContentPolicyConfig"></a>

```go
func ResetContentPolicyConfig()
```

##### `ResetContextualGroundingPolicyConfig` <a name="ResetContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetContextualGroundingPolicyConfig"></a>

```go
func ResetContextualGroundingPolicyConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetName"></a>

```go
func ResetName()
```

##### `ResetSensitiveInformationPolicyConfig` <a name="ResetSensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetSensitiveInformationPolicyConfig"></a>

```go
func ResetSensitiveInformationPolicyConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTopicPolicyConfig` <a name="ResetTopicPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetTopicPolicyConfig"></a>

```go
func ResetTopicPolicyConfig()
```

##### `ResetWordPolicyConfig` <a name="ResetWordPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.resetWordPolicyConfig"></a>

```go
func ResetWordPolicyConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomAiGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.WisdomAiGuardrail_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.WisdomAiGuardrail_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.WisdomAiGuardrail_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.WisdomAiGuardrail_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WisdomAiGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WisdomAiGuardrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WisdomAiGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WisdomAiGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.aiGuardrailArn">AiGuardrailArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.aiGuardrailId">AiGuardrailId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantArn">AssistantArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contentPolicyConfig">ContentPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference">WisdomAiGuardrailContentPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contextualGroundingPolicyConfig">ContextualGroundingPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference">WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.modifiedTimeSeconds">ModifiedTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.sensitiveInformationPolicyConfig">SensitiveInformationPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference">WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.topicPolicyConfig">TopicPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference">WisdomAiGuardrailTopicPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.wordPolicyConfig">WordPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference">WisdomAiGuardrailWordPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantIdInput">AssistantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedInputMessagingInput">BlockedInputMessagingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedOutputsMessagingInput">BlockedOutputsMessagingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contentPolicyConfigInput">ContentPolicyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contextualGroundingPolicyConfigInput">ContextualGroundingPolicyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.sensitiveInformationPolicyConfigInput">SensitiveInformationPolicyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.topicPolicyConfigInput">TopicPolicyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.wordPolicyConfigInput">WordPolicyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantId">AssistantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedInputMessaging">BlockedInputMessaging</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedOutputsMessaging">BlockedOutputsMessaging</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AiGuardrailArn`<sup>Required</sup> <a name="AiGuardrailArn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.aiGuardrailArn"></a>

```go
func AiGuardrailArn() *string
```

- *Type:* *string

---

##### `AiGuardrailId`<sup>Required</sup> <a name="AiGuardrailId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.aiGuardrailId"></a>

```go
func AiGuardrailId() *string
```

- *Type:* *string

---

##### `AssistantArn`<sup>Required</sup> <a name="AssistantArn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantArn"></a>

```go
func AssistantArn() *string
```

- *Type:* *string

---

##### `ContentPolicyConfig`<sup>Required</sup> <a name="ContentPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contentPolicyConfig"></a>

```go
func ContentPolicyConfig() WisdomAiGuardrailContentPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference">WisdomAiGuardrailContentPolicyConfigOutputReference</a>

---

##### `ContextualGroundingPolicyConfig`<sup>Required</sup> <a name="ContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contextualGroundingPolicyConfig"></a>

```go
func ContextualGroundingPolicyConfig() WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference">WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedTimeSeconds`<sup>Required</sup> <a name="ModifiedTimeSeconds" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.modifiedTimeSeconds"></a>

```go
func ModifiedTimeSeconds() *f64
```

- *Type:* *f64

---

##### `SensitiveInformationPolicyConfig`<sup>Required</sup> <a name="SensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.sensitiveInformationPolicyConfig"></a>

```go
func SensitiveInformationPolicyConfig() WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference">WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference</a>

---

##### `TopicPolicyConfig`<sup>Required</sup> <a name="TopicPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.topicPolicyConfig"></a>

```go
func TopicPolicyConfig() WisdomAiGuardrailTopicPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference">WisdomAiGuardrailTopicPolicyConfigOutputReference</a>

---

##### `WordPolicyConfig`<sup>Required</sup> <a name="WordPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.wordPolicyConfig"></a>

```go
func WordPolicyConfig() WisdomAiGuardrailWordPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference">WisdomAiGuardrailWordPolicyConfigOutputReference</a>

---

##### `AssistantIdInput`<sup>Optional</sup> <a name="AssistantIdInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantIdInput"></a>

```go
func AssistantIdInput() *string
```

- *Type:* *string

---

##### `BlockedInputMessagingInput`<sup>Optional</sup> <a name="BlockedInputMessagingInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedInputMessagingInput"></a>

```go
func BlockedInputMessagingInput() *string
```

- *Type:* *string

---

##### `BlockedOutputsMessagingInput`<sup>Optional</sup> <a name="BlockedOutputsMessagingInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedOutputsMessagingInput"></a>

```go
func BlockedOutputsMessagingInput() *string
```

- *Type:* *string

---

##### `ContentPolicyConfigInput`<sup>Optional</sup> <a name="ContentPolicyConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contentPolicyConfigInput"></a>

```go
func ContentPolicyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ContextualGroundingPolicyConfigInput`<sup>Optional</sup> <a name="ContextualGroundingPolicyConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.contextualGroundingPolicyConfigInput"></a>

```go
func ContextualGroundingPolicyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SensitiveInformationPolicyConfigInput`<sup>Optional</sup> <a name="SensitiveInformationPolicyConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.sensitiveInformationPolicyConfigInput"></a>

```go
func SensitiveInformationPolicyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TopicPolicyConfigInput`<sup>Optional</sup> <a name="TopicPolicyConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.topicPolicyConfigInput"></a>

```go
func TopicPolicyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `WordPolicyConfigInput`<sup>Optional</sup> <a name="WordPolicyConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.wordPolicyConfigInput"></a>

```go
func WordPolicyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AssistantId`<sup>Required</sup> <a name="AssistantId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.assistantId"></a>

```go
func AssistantId() *string
```

- *Type:* *string

---

##### `BlockedInputMessaging`<sup>Required</sup> <a name="BlockedInputMessaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedInputMessaging"></a>

```go
func BlockedInputMessaging() *string
```

- *Type:* *string

---

##### `BlockedOutputsMessaging`<sup>Required</sup> <a name="BlockedOutputsMessaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.blockedOutputsMessaging"></a>

```go
func BlockedOutputsMessaging() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrail.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomAiGuardrailConfig <a name="WisdomAiGuardrailConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

&wisdomaiguardrail.WisdomAiGuardrailConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AssistantId: *string,
	BlockedInputMessaging: *string,
	BlockedOutputsMessaging: *string,
	ContentPolicyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig,
	ContextualGroundingPolicyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig,
	Description: *string,
	Name: *string,
	SensitiveInformationPolicyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig,
	Tags: *map[string]*string,
	TopicPolicyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig,
	WordPolicyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.assistantId">AssistantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#assistant_id WisdomAiGuardrail#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.blockedInputMessaging">BlockedInputMessaging</a></code> | <code>*string</code> | Messaging for when violations are detected in text. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.blockedOutputsMessaging">BlockedOutputsMessaging</a></code> | <code>*string</code> | Messaging for when violations are detected in text. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.contentPolicyConfig">ContentPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a></code> | Content policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.contextualGroundingPolicyConfig">ContextualGroundingPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a></code> | Contextual grounding policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.description">Description</a></code> | <code>*string</code> | Description of the guardrail or its version. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.sensitiveInformationPolicyConfig">SensitiveInformationPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a></code> | Sensitive information policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#tags WisdomAiGuardrail#tags}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.topicPolicyConfig">TopicPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a></code> | Topic policy config for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.wordPolicyConfig">WordPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a></code> | Word policy config for a guardrail. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssistantId`<sup>Required</sup> <a name="AssistantId" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.assistantId"></a>

```go
AssistantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#assistant_id WisdomAiGuardrail#assistant_id}.

---

##### `BlockedInputMessaging`<sup>Required</sup> <a name="BlockedInputMessaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.blockedInputMessaging"></a>

```go
BlockedInputMessaging *string
```

- *Type:* *string

Messaging for when violations are detected in text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#blocked_input_messaging WisdomAiGuardrail#blocked_input_messaging}

---

##### `BlockedOutputsMessaging`<sup>Required</sup> <a name="BlockedOutputsMessaging" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.blockedOutputsMessaging"></a>

```go
BlockedOutputsMessaging *string
```

- *Type:* *string

Messaging for when violations are detected in text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#blocked_outputs_messaging WisdomAiGuardrail#blocked_outputs_messaging}

---

##### `ContentPolicyConfig`<sup>Optional</sup> <a name="ContentPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.contentPolicyConfig"></a>

```go
ContentPolicyConfig WisdomAiGuardrailContentPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig">WisdomAiGuardrailContentPolicyConfig</a>

Content policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#content_policy_config WisdomAiGuardrail#content_policy_config}

---

##### `ContextualGroundingPolicyConfig`<sup>Optional</sup> <a name="ContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.contextualGroundingPolicyConfig"></a>

```go
ContextualGroundingPolicyConfig WisdomAiGuardrailContextualGroundingPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig">WisdomAiGuardrailContextualGroundingPolicyConfig</a>

Contextual grounding policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#contextual_grounding_policy_config WisdomAiGuardrail#contextual_grounding_policy_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the guardrail or its version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#description WisdomAiGuardrail#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}.

---

##### `SensitiveInformationPolicyConfig`<sup>Optional</sup> <a name="SensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.sensitiveInformationPolicyConfig"></a>

```go
SensitiveInformationPolicyConfig WisdomAiGuardrailSensitiveInformationPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig">WisdomAiGuardrailSensitiveInformationPolicyConfig</a>

Sensitive information policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#sensitive_information_policy_config WisdomAiGuardrail#sensitive_information_policy_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#tags WisdomAiGuardrail#tags}.

---

##### `TopicPolicyConfig`<sup>Optional</sup> <a name="TopicPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.topicPolicyConfig"></a>

```go
TopicPolicyConfig WisdomAiGuardrailTopicPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig">WisdomAiGuardrailTopicPolicyConfig</a>

Topic policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#topic_policy_config WisdomAiGuardrail#topic_policy_config}

---

##### `WordPolicyConfig`<sup>Optional</sup> <a name="WordPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailConfig.property.wordPolicyConfig"></a>

```go
WordPolicyConfig WisdomAiGuardrailWordPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig">WisdomAiGuardrailWordPolicyConfig</a>

Word policy config for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#word_policy_config WisdomAiGuardrail#word_policy_config}

---

### WisdomAiGuardrailContentPolicyConfig <a name="WisdomAiGuardrailContentPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

&wisdomaiguardrail.WisdomAiGuardrailContentPolicyConfig {
	FiltersConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig.property.filtersConfig">FiltersConfig</a></code> | <code>interface{}</code> | List of content filter configs in content policy. |

---

##### `FiltersConfig`<sup>Optional</sup> <a name="FiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfig.property.filtersConfig"></a>

```go
FiltersConfig interface{}
```

- *Type:* interface{}

List of content filter configs in content policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#filters_config WisdomAiGuardrail#filters_config}

---

### WisdomAiGuardrailContentPolicyConfigFiltersConfig <a name="WisdomAiGuardrailContentPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

&wisdomaiguardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig {
	InputStrength: *string,
	OutputStrength: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.inputStrength">InputStrength</a></code> | <code>*string</code> | Strength for filters. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.outputStrength">OutputStrength</a></code> | <code>*string</code> | Strength for filters. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.type">Type</a></code> | <code>*string</code> | Type of text to text filter in content policy. |

---

##### `InputStrength`<sup>Optional</sup> <a name="InputStrength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.inputStrength"></a>

```go
InputStrength *string
```

- *Type:* *string

Strength for filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#input_strength WisdomAiGuardrail#input_strength}

---

##### `OutputStrength`<sup>Optional</sup> <a name="OutputStrength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.outputStrength"></a>

```go
OutputStrength *string
```

- *Type:* *string

Strength for filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#output_strength WisdomAiGuardrail#output_strength}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of text to text filter in content policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailContextualGroundingPolicyConfig <a name="WisdomAiGuardrailContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

&wisdomaiguardrail.WisdomAiGuardrailContextualGroundingPolicyConfig {
	FiltersConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig.property.filtersConfig">FiltersConfig</a></code> | <code>interface{}</code> | List of contextual grounding filter configs. |

---

##### `FiltersConfig`<sup>Optional</sup> <a name="FiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfig.property.filtersConfig"></a>

```go
FiltersConfig interface{}
```

- *Type:* interface{}

List of contextual grounding filter configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#filters_config WisdomAiGuardrail#filters_config}

---

### WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig <a name="WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

&wisdomaiguardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig {
	Threshold: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.property.threshold">Threshold</a></code> | <code>*f64</code> | The threshold for this filter. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.property.type">Type</a></code> | <code>*string</code> | Type of contextual grounding filter. |

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

The threshold for this filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#threshold WisdomAiGuardrail#threshold}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of contextual grounding filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailSensitiveInformationPolicyConfig <a name="WisdomAiGuardrailSensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

&wisdomaiguardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig {
	PiiEntitiesConfig: interface{},
	RegexesConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.property.piiEntitiesConfig">PiiEntitiesConfig</a></code> | <code>interface{}</code> | List of entities. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.property.regexesConfig">RegexesConfig</a></code> | <code>interface{}</code> | List of regex. |

---

##### `PiiEntitiesConfig`<sup>Optional</sup> <a name="PiiEntitiesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.property.piiEntitiesConfig"></a>

```go
PiiEntitiesConfig interface{}
```

- *Type:* interface{}

List of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#pii_entities_config WisdomAiGuardrail#pii_entities_config}

---

##### `RegexesConfig`<sup>Optional</sup> <a name="RegexesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfig.property.regexesConfig"></a>

```go
RegexesConfig interface{}
```

- *Type:* interface{}

List of regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#regexes_config WisdomAiGuardrail#regexes_config}

---

### WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

&wisdomaiguardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig {
	Action: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.action">Action</a></code> | <code>*string</code> | Options for sensitive information action. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.type">Type</a></code> | <code>*string</code> | The currently supported PII entities. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Options for sensitive information action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#action WisdomAiGuardrail#action}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The currently supported PII entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

&wisdomaiguardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig {
	Action: *string,
	Description: *string,
	Name: *string,
	Pattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.action">Action</a></code> | <code>*string</code> | Options for sensitive information action. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.description">Description</a></code> | <code>*string</code> | The regex description. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.name">Name</a></code> | <code>*string</code> | The regex name. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.pattern">Pattern</a></code> | <code>*string</code> | The regex pattern. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Options for sensitive information action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#action WisdomAiGuardrail#action}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The regex description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#description WisdomAiGuardrail#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The regex name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

The regex pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#pattern WisdomAiGuardrail#pattern}

---

### WisdomAiGuardrailTopicPolicyConfig <a name="WisdomAiGuardrailTopicPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

&wisdomaiguardrail.WisdomAiGuardrailTopicPolicyConfig {
	TopicsConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig.property.topicsConfig">TopicsConfig</a></code> | <code>interface{}</code> | List of topic configs in topic policy. |

---

##### `TopicsConfig`<sup>Optional</sup> <a name="TopicsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfig.property.topicsConfig"></a>

```go
TopicsConfig interface{}
```

- *Type:* interface{}

List of topic configs in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#topics_config WisdomAiGuardrail#topics_config}

---

### WisdomAiGuardrailTopicPolicyConfigTopicsConfig <a name="WisdomAiGuardrailTopicPolicyConfigTopicsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

&wisdomaiguardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig {
	Definition: *string,
	Examples: *[]*string,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.definition">Definition</a></code> | <code>*string</code> | Definition of topic in topic policy. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.examples">Examples</a></code> | <code>*[]*string</code> | List of text examples. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.name">Name</a></code> | <code>*string</code> | Name of topic in topic policy. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.type">Type</a></code> | <code>*string</code> | Type of topic in a policy. |

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Definition of topic in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#definition WisdomAiGuardrail#definition}

---

##### `Examples`<sup>Optional</sup> <a name="Examples" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.examples"></a>

```go
Examples *[]*string
```

- *Type:* *[]*string

List of text examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#examples WisdomAiGuardrail#examples}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of topic in topic policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of topic in a policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailWordPolicyConfig <a name="WisdomAiGuardrailWordPolicyConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

&wisdomaiguardrail.WisdomAiGuardrailWordPolicyConfig {
	ManagedWordListsConfig: interface{},
	WordsConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.property.managedWordListsConfig">ManagedWordListsConfig</a></code> | <code>interface{}</code> | A config for the list of managed words. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.property.wordsConfig">WordsConfig</a></code> | <code>interface{}</code> | List of custom word configs. |

---

##### `ManagedWordListsConfig`<sup>Optional</sup> <a name="ManagedWordListsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.property.managedWordListsConfig"></a>

```go
ManagedWordListsConfig interface{}
```

- *Type:* interface{}

A config for the list of managed words.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#managed_word_lists_config WisdomAiGuardrail#managed_word_lists_config}

---

##### `WordsConfig`<sup>Optional</sup> <a name="WordsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfig.property.wordsConfig"></a>

```go
WordsConfig interface{}
```

- *Type:* interface{}

List of custom word configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#words_config WisdomAiGuardrail#words_config}

---

### WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig <a name="WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

&wisdomaiguardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig.property.type">Type</a></code> | <code>*string</code> | Options for managed words. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Options for managed words.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}

---

### WisdomAiGuardrailWordPolicyConfigWordsConfig <a name="WisdomAiGuardrailWordPolicyConfigWordsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

&wisdomaiguardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig {
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig.property.text">Text</a></code> | <code>*string</code> | The custom word text. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfig.property.text"></a>

```go
Text *string
```

- *Type:* *string

The custom word text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_ai_guardrail#text WisdomAiGuardrail#text}

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomAiGuardrailContentPolicyConfigFiltersConfigList <a name="WisdomAiGuardrailContentPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailContentPolicyConfigFiltersConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WisdomAiGuardrailContentPolicyConfigFiltersConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.get"></a>

```go
func Get(index *f64) WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference <a name="WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputStrength">ResetInputStrength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputStrength">ResetOutputStrength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputStrength` <a name="ResetInputStrength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetInputStrength"></a>

```go
func ResetInputStrength()
```

##### `ResetOutputStrength` <a name="ResetOutputStrength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetOutputStrength"></a>

```go
func ResetOutputStrength()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrengthInput">InputStrengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrengthInput">OutputStrengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength">InputStrength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength">OutputStrength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputStrengthInput`<sup>Optional</sup> <a name="InputStrengthInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrengthInput"></a>

```go
func InputStrengthInput() *string
```

- *Type:* *string

---

##### `OutputStrengthInput`<sup>Optional</sup> <a name="OutputStrengthInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrengthInput"></a>

```go
func OutputStrengthInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `InputStrength`<sup>Required</sup> <a name="InputStrength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength"></a>

```go
func InputStrength() *string
```

- *Type:* *string

---

##### `OutputStrength`<sup>Required</sup> <a name="OutputStrength" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength"></a>

```go
func OutputStrength() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailContentPolicyConfigOutputReference <a name="WisdomAiGuardrailContentPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailContentPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomAiGuardrailContentPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.putFiltersConfig">PutFiltersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resetFiltersConfig">ResetFiltersConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFiltersConfig` <a name="PutFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.putFiltersConfig"></a>

```go
func PutFiltersConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.putFiltersConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFiltersConfig` <a name="ResetFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.resetFiltersConfig"></a>

```go
func ResetFiltersConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfig">FiltersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList">WisdomAiGuardrailContentPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfigInput">FiltersConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FiltersConfig`<sup>Required</sup> <a name="FiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfig"></a>

```go
func FiltersConfig() WisdomAiGuardrailContentPolicyConfigFiltersConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigFiltersConfigList">WisdomAiGuardrailContentPolicyConfigFiltersConfigList</a>

---

##### `FiltersConfigInput`<sup>Optional</sup> <a name="FiltersConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.filtersConfigInput"></a>

```go
func FiltersConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContentPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList <a name="WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.get"></a>

```go
func Get(index *f64) WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference <a name="WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference <a name="WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig">PutFiltersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resetFiltersConfig">ResetFiltersConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFiltersConfig` <a name="PutFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig"></a>

```go
func PutFiltersConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFiltersConfig` <a name="ResetFiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.resetFiltersConfig"></a>

```go
func ResetFiltersConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig">FiltersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfigInput">FiltersConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FiltersConfig`<sup>Required</sup> <a name="FiltersConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig"></a>

```go
func FiltersConfig() WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList">WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList</a>

---

##### `FiltersConfigInput`<sup>Optional</sup> <a name="FiltersConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfigInput"></a>

```go
func FiltersConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig">PutPiiEntitiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig">PutRegexesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resetPiiEntitiesConfig">ResetPiiEntitiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resetRegexesConfig">ResetRegexesConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPiiEntitiesConfig` <a name="PutPiiEntitiesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig"></a>

```go
func PutPiiEntitiesConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRegexesConfig` <a name="PutRegexesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig"></a>

```go
func PutRegexesConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPiiEntitiesConfig` <a name="ResetPiiEntitiesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resetPiiEntitiesConfig"></a>

```go
func ResetPiiEntitiesConfig()
```

##### `ResetRegexesConfig` <a name="ResetRegexesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.resetRegexesConfig"></a>

```go
func ResetRegexesConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig">PiiEntitiesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig">RegexesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfigInput">PiiEntitiesConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfigInput">RegexesConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PiiEntitiesConfig`<sup>Required</sup> <a name="PiiEntitiesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig"></a>

```go
func PiiEntitiesConfig() WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a>

---

##### `RegexesConfig`<sup>Required</sup> <a name="RegexesConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig"></a>

```go
func RegexesConfig() WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList">WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a>

---

##### `PiiEntitiesConfigInput`<sup>Optional</sup> <a name="PiiEntitiesConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfigInput"></a>

```go
func PiiEntitiesConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RegexesConfigInput`<sup>Optional</sup> <a name="RegexesConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfigInput"></a>

```go
func RegexesConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get"></a>

```go
func Get(index *f64) WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get"></a>

```go
func Get(index *f64) WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference <a name="WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetPattern"></a>

```go
func ResetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailTopicPolicyConfigOutputReference <a name="WisdomAiGuardrailTopicPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailTopicPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomAiGuardrailTopicPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.putTopicsConfig">PutTopicsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resetTopicsConfig">ResetTopicsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTopicsConfig` <a name="PutTopicsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.putTopicsConfig"></a>

```go
func PutTopicsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.putTopicsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTopicsConfig` <a name="ResetTopicsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.resetTopicsConfig"></a>

```go
func ResetTopicsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfig">TopicsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList">WisdomAiGuardrailTopicPolicyConfigTopicsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfigInput">TopicsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicsConfig`<sup>Required</sup> <a name="TopicsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfig"></a>

```go
func TopicsConfig() WisdomAiGuardrailTopicPolicyConfigTopicsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList">WisdomAiGuardrailTopicPolicyConfigTopicsConfigList</a>

---

##### `TopicsConfigInput`<sup>Optional</sup> <a name="TopicsConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.topicsConfigInput"></a>

```go
func TopicsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailTopicPolicyConfigTopicsConfigList <a name="WisdomAiGuardrailTopicPolicyConfigTopicsConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailTopicPolicyConfigTopicsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WisdomAiGuardrailTopicPolicyConfigTopicsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.get"></a>

```go
func Get(index *f64) WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference <a name="WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetExamples">ResetExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetDefinition"></a>

```go
func ResetDefinition()
```

##### `ResetExamples` <a name="ResetExamples" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetExamples"></a>

```go
func ResetExamples()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examplesInput">ExamplesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples">Examples</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `ExamplesInput`<sup>Optional</sup> <a name="ExamplesInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examplesInput"></a>

```go
func ExamplesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `Examples`<sup>Required</sup> <a name="Examples" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples"></a>

```go
func Examples() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList <a name="WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.get"></a>

```go
func Get(index *f64) WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference <a name="WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailWordPolicyConfigOutputReference <a name="WisdomAiGuardrailWordPolicyConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailWordPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomAiGuardrailWordPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig">PutManagedWordListsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putWordsConfig">PutWordsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resetManagedWordListsConfig">ResetManagedWordListsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resetWordsConfig">ResetWordsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedWordListsConfig` <a name="PutManagedWordListsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig"></a>

```go
func PutManagedWordListsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWordsConfig` <a name="PutWordsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putWordsConfig"></a>

```go
func PutWordsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.putWordsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetManagedWordListsConfig` <a name="ResetManagedWordListsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resetManagedWordListsConfig"></a>

```go
func ResetManagedWordListsConfig()
```

##### `ResetWordsConfig` <a name="ResetWordsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.resetWordsConfig"></a>

```go
func ResetWordsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig">ManagedWordListsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfig">WordsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList">WisdomAiGuardrailWordPolicyConfigWordsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfigInput">ManagedWordListsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfigInput">WordsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedWordListsConfig`<sup>Required</sup> <a name="ManagedWordListsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig"></a>

```go
func ManagedWordListsConfig() WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList">WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList</a>

---

##### `WordsConfig`<sup>Required</sup> <a name="WordsConfig" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfig"></a>

```go
func WordsConfig() WisdomAiGuardrailWordPolicyConfigWordsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList">WisdomAiGuardrailWordPolicyConfigWordsConfigList</a>

---

##### `ManagedWordListsConfigInput`<sup>Optional</sup> <a name="ManagedWordListsConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfigInput"></a>

```go
func ManagedWordListsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `WordsConfigInput`<sup>Optional</sup> <a name="WordsConfigInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.wordsConfigInput"></a>

```go
func WordsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailWordPolicyConfigWordsConfigList <a name="WisdomAiGuardrailWordPolicyConfigWordsConfigList" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailWordPolicyConfigWordsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WisdomAiGuardrailWordPolicyConfigWordsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.get"></a>

```go
func Get(index *f64) WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference <a name="WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdomaiguardrail"

wisdomaiguardrail.NewWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomAiGuardrail.WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



