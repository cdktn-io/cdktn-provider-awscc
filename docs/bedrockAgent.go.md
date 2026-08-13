# `bedrockAgent` Submodule <a name="`bedrockAgent` Submodule" id="@cdktn/provider-awscc.bedrockAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAgent <a name="BedrockAgent" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent awscc_bedrock_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgent(scope Construct, id *string, config BedrockAgentConfig) BedrockAgent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig">BedrockAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig">BedrockAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups">PutActionGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators">PutAgentCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration">PutCustomOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration">PutGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases">PutKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration">PutMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration">PutPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetActionGroups">ResetActionGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaboration">ResetAgentCollaboration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaborators">ResetAgentCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentResourceRoleArn">ResetAgentResourceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAutoPrepare">ResetAutoPrepare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomerEncryptionKeyArn">ResetCustomerEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomOrchestration">ResetCustomOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetFoundationModel">ResetFoundationModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetGuardrailConfiguration">ResetGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetIdleSessionTtlInSeconds">ResetIdleSessionTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetKnowledgeBases">ResetKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetMemoryConfiguration">ResetMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOrchestrationType">ResetOrchestrationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetPromptOverrideConfiguration">ResetPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetSkipResourceInUseCheckOnDelete">ResetSkipResourceInUseCheckOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTestAliasTags">ResetTestAliasTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionGroups` <a name="PutActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups"></a>

```go
func PutActionGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putActionGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAgentCollaborators` <a name="PutAgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators"></a>

```go
func PutAgentCollaborators(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putAgentCollaborators.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCustomOrchestration` <a name="PutCustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration"></a>

```go
func PutCustomOrchestration(value BedrockAgentCustomOrchestration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putCustomOrchestration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

---

##### `PutGuardrailConfiguration` <a name="PutGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration"></a>

```go
func PutGuardrailConfiguration(value BedrockAgentGuardrailConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putGuardrailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

---

##### `PutKnowledgeBases` <a name="PutKnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases"></a>

```go
func PutKnowledgeBases(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putKnowledgeBases.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMemoryConfiguration` <a name="PutMemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration"></a>

```go
func PutMemoryConfiguration(value BedrockAgentMemoryConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putMemoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

---

##### `PutPromptOverrideConfiguration` <a name="PutPromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration"></a>

```go
func PutPromptOverrideConfiguration(value BedrockAgentPromptOverrideConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.putPromptOverrideConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

---

##### `ResetActionGroups` <a name="ResetActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetActionGroups"></a>

```go
func ResetActionGroups()
```

##### `ResetAgentCollaboration` <a name="ResetAgentCollaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaboration"></a>

```go
func ResetAgentCollaboration()
```

##### `ResetAgentCollaborators` <a name="ResetAgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentCollaborators"></a>

```go
func ResetAgentCollaborators()
```

##### `ResetAgentResourceRoleArn` <a name="ResetAgentResourceRoleArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAgentResourceRoleArn"></a>

```go
func ResetAgentResourceRoleArn()
```

##### `ResetAutoPrepare` <a name="ResetAutoPrepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetAutoPrepare"></a>

```go
func ResetAutoPrepare()
```

##### `ResetCustomerEncryptionKeyArn` <a name="ResetCustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomerEncryptionKeyArn"></a>

```go
func ResetCustomerEncryptionKeyArn()
```

##### `ResetCustomOrchestration` <a name="ResetCustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetCustomOrchestration"></a>

```go
func ResetCustomOrchestration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFoundationModel` <a name="ResetFoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetFoundationModel"></a>

```go
func ResetFoundationModel()
```

##### `ResetGuardrailConfiguration` <a name="ResetGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetGuardrailConfiguration"></a>

```go
func ResetGuardrailConfiguration()
```

##### `ResetIdleSessionTtlInSeconds` <a name="ResetIdleSessionTtlInSeconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetIdleSessionTtlInSeconds"></a>

```go
func ResetIdleSessionTtlInSeconds()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetInstruction"></a>

```go
func ResetInstruction()
```

##### `ResetKnowledgeBases` <a name="ResetKnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetKnowledgeBases"></a>

```go
func ResetKnowledgeBases()
```

##### `ResetMemoryConfiguration` <a name="ResetMemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetMemoryConfiguration"></a>

```go
func ResetMemoryConfiguration()
```

##### `ResetOrchestrationType` <a name="ResetOrchestrationType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetOrchestrationType"></a>

```go
func ResetOrchestrationType()
```

##### `ResetPromptOverrideConfiguration` <a name="ResetPromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetPromptOverrideConfiguration"></a>

```go
func ResetPromptOverrideConfiguration()
```

##### `ResetSkipResourceInUseCheckOnDelete` <a name="ResetSkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetSkipResourceInUseCheckOnDelete"></a>

```go
func ResetSkipResourceInUseCheckOnDelete()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTestAliasTags` <a name="ResetTestAliasTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.resetTestAliasTags"></a>

```go
func ResetTestAliasTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.BedrockAgent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.BedrockAgent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.BedrockAgent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.BedrockAgent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroups">ActionGroups</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList">BedrockAgentActionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentArn">AgentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborators">AgentCollaborators</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList">BedrockAgentAgentCollaboratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentVersion">AgentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestration">CustomOrchestration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference">BedrockAgentCustomOrchestrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.failureReasons">FailureReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfiguration">GuardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference">BedrockAgentGuardrailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBases">KnowledgeBases</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList">BedrockAgentKnowledgeBasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfiguration">MemoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference">BedrockAgentMemoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.preparedAt">PreparedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfiguration">PromptOverrideConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.recommendedActions">RecommendedActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroupsInput">ActionGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborationInput">AgentCollaborationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboratorsInput">AgentCollaboratorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentNameInput">AgentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArnInput">AgentResourceRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepareInput">AutoPrepareInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArnInput">CustomerEncryptionKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestrationInput">CustomOrchestrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModelInput">FoundationModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfigurationInput">GuardrailConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSecondsInput">IdleSessionTtlInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instructionInput">InstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBasesInput">KnowledgeBasesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfigurationInput">MemoryConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationTypeInput">OrchestrationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfigurationInput">PromptOverrideConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDeleteInput">SkipResourceInUseCheckOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTagsInput">TestAliasTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboration">AgentCollaboration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentName">AgentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArn">AgentResourceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepare">AutoPrepare</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModel">FoundationModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSeconds">IdleSessionTtlInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instruction">Instruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationType">OrchestrationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDelete">SkipResourceInUseCheckOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTags">TestAliasTags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionGroups`<sup>Required</sup> <a name="ActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroups"></a>

```go
func ActionGroups() BedrockAgentActionGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList">BedrockAgentActionGroupsList</a>

---

##### `AgentArn`<sup>Required</sup> <a name="AgentArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentArn"></a>

```go
func AgentArn() *string
```

- *Type:* *string

---

##### `AgentCollaborators`<sup>Required</sup> <a name="AgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborators"></a>

```go
func AgentCollaborators() BedrockAgentAgentCollaboratorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList">BedrockAgentAgentCollaboratorsList</a>

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentStatus"></a>

```go
func AgentStatus() *string
```

- *Type:* *string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentVersion"></a>

```go
func AgentVersion() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomOrchestration`<sup>Required</sup> <a name="CustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestration"></a>

```go
func CustomOrchestration() BedrockAgentCustomOrchestrationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference">BedrockAgentCustomOrchestrationOutputReference</a>

---

##### `FailureReasons`<sup>Required</sup> <a name="FailureReasons" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.failureReasons"></a>

```go
func FailureReasons() *[]*string
```

- *Type:* *[]*string

---

##### `GuardrailConfiguration`<sup>Required</sup> <a name="GuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfiguration"></a>

```go
func GuardrailConfiguration() BedrockAgentGuardrailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference">BedrockAgentGuardrailConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KnowledgeBases`<sup>Required</sup> <a name="KnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBases"></a>

```go
func KnowledgeBases() BedrockAgentKnowledgeBasesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList">BedrockAgentKnowledgeBasesList</a>

---

##### `MemoryConfiguration`<sup>Required</sup> <a name="MemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfiguration"></a>

```go
func MemoryConfiguration() BedrockAgentMemoryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference">BedrockAgentMemoryConfigurationOutputReference</a>

---

##### `PreparedAt`<sup>Required</sup> <a name="PreparedAt" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.preparedAt"></a>

```go
func PreparedAt() *string
```

- *Type:* *string

---

##### `PromptOverrideConfiguration`<sup>Required</sup> <a name="PromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfiguration"></a>

```go
func PromptOverrideConfiguration() BedrockAgentPromptOverrideConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationOutputReference</a>

---

##### `RecommendedActions`<sup>Required</sup> <a name="RecommendedActions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.recommendedActions"></a>

```go
func RecommendedActions() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ActionGroupsInput`<sup>Optional</sup> <a name="ActionGroupsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.actionGroupsInput"></a>

```go
func ActionGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `AgentCollaborationInput`<sup>Optional</sup> <a name="AgentCollaborationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaborationInput"></a>

```go
func AgentCollaborationInput() *string
```

- *Type:* *string

---

##### `AgentCollaboratorsInput`<sup>Optional</sup> <a name="AgentCollaboratorsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboratorsInput"></a>

```go
func AgentCollaboratorsInput() interface{}
```

- *Type:* interface{}

---

##### `AgentNameInput`<sup>Optional</sup> <a name="AgentNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentNameInput"></a>

```go
func AgentNameInput() *string
```

- *Type:* *string

---

##### `AgentResourceRoleArnInput`<sup>Optional</sup> <a name="AgentResourceRoleArnInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArnInput"></a>

```go
func AgentResourceRoleArnInput() *string
```

- *Type:* *string

---

##### `AutoPrepareInput`<sup>Optional</sup> <a name="AutoPrepareInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepareInput"></a>

```go
func AutoPrepareInput() interface{}
```

- *Type:* interface{}

---

##### `CustomerEncryptionKeyArnInput`<sup>Optional</sup> <a name="CustomerEncryptionKeyArnInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArnInput"></a>

```go
func CustomerEncryptionKeyArnInput() *string
```

- *Type:* *string

---

##### `CustomOrchestrationInput`<sup>Optional</sup> <a name="CustomOrchestrationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customOrchestrationInput"></a>

```go
func CustomOrchestrationInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FoundationModelInput`<sup>Optional</sup> <a name="FoundationModelInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModelInput"></a>

```go
func FoundationModelInput() *string
```

- *Type:* *string

---

##### `GuardrailConfigurationInput`<sup>Optional</sup> <a name="GuardrailConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.guardrailConfigurationInput"></a>

```go
func GuardrailConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `IdleSessionTtlInSecondsInput`<sup>Optional</sup> <a name="IdleSessionTtlInSecondsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSecondsInput"></a>

```go
func IdleSessionTtlInSecondsInput() *f64
```

- *Type:* *f64

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instructionInput"></a>

```go
func InstructionInput() *string
```

- *Type:* *string

---

##### `KnowledgeBasesInput`<sup>Optional</sup> <a name="KnowledgeBasesInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.knowledgeBasesInput"></a>

```go
func KnowledgeBasesInput() interface{}
```

- *Type:* interface{}

---

##### `MemoryConfigurationInput`<sup>Optional</sup> <a name="MemoryConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.memoryConfigurationInput"></a>

```go
func MemoryConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `OrchestrationTypeInput`<sup>Optional</sup> <a name="OrchestrationTypeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationTypeInput"></a>

```go
func OrchestrationTypeInput() *string
```

- *Type:* *string

---

##### `PromptOverrideConfigurationInput`<sup>Optional</sup> <a name="PromptOverrideConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.promptOverrideConfigurationInput"></a>

```go
func PromptOverrideConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SkipResourceInUseCheckOnDeleteInput`<sup>Optional</sup> <a name="SkipResourceInUseCheckOnDeleteInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDeleteInput"></a>

```go
func SkipResourceInUseCheckOnDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TestAliasTagsInput`<sup>Optional</sup> <a name="TestAliasTagsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTagsInput"></a>

```go
func TestAliasTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AgentCollaboration`<sup>Required</sup> <a name="AgentCollaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentCollaboration"></a>

```go
func AgentCollaboration() *string
```

- *Type:* *string

---

##### `AgentName`<sup>Required</sup> <a name="AgentName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentName"></a>

```go
func AgentName() *string
```

- *Type:* *string

---

##### `AgentResourceRoleArn`<sup>Required</sup> <a name="AgentResourceRoleArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.agentResourceRoleArn"></a>

```go
func AgentResourceRoleArn() *string
```

- *Type:* *string

---

##### `AutoPrepare`<sup>Required</sup> <a name="AutoPrepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.autoPrepare"></a>

```go
func AutoPrepare() interface{}
```

- *Type:* interface{}

---

##### `CustomerEncryptionKeyArn`<sup>Required</sup> <a name="CustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.customerEncryptionKeyArn"></a>

```go
func CustomerEncryptionKeyArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FoundationModel`<sup>Required</sup> <a name="FoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.foundationModel"></a>

```go
func FoundationModel() *string
```

- *Type:* *string

---

##### `IdleSessionTtlInSeconds`<sup>Required</sup> <a name="IdleSessionTtlInSeconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.idleSessionTtlInSeconds"></a>

```go
func IdleSessionTtlInSeconds() *f64
```

- *Type:* *f64

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.instruction"></a>

```go
func Instruction() *string
```

- *Type:* *string

---

##### `OrchestrationType`<sup>Required</sup> <a name="OrchestrationType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.orchestrationType"></a>

```go
func OrchestrationType() *string
```

- *Type:* *string

---

##### `SkipResourceInUseCheckOnDelete`<sup>Required</sup> <a name="SkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.skipResourceInUseCheckOnDelete"></a>

```go
func SkipResourceInUseCheckOnDelete() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TestAliasTags`<sup>Required</sup> <a name="TestAliasTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.testAliasTags"></a>

```go
func TestAliasTags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAgentActionGroups <a name="BedrockAgentActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentActionGroups {
	ActionGroupExecutor: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor,
	ActionGroupName: *string,
	ActionGroupState: *string,
	ApiSchema: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema,
	Description: *string,
	FunctionSchema: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema,
	ParentActionGroupSignature: *string,
	SkipResourceInUseCheckOnDelete: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupExecutor">ActionGroupExecutor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a></code> | Type of Executors for an Action Group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupName">ActionGroupName</a></code> | <code>*string</code> | Name of the action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupState">ActionGroupState</a></code> | <code>*string</code> | State of the action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.apiSchema">ApiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a></code> | Contains information about the API Schema for the Action Group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.description">Description</a></code> | <code>*string</code> | Description of action group. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.functionSchema">FunctionSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a></code> | Schema of Functions. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.parentActionGroupSignature">ParentActionGroupSignature</a></code> | <code>*string</code> | Action Group Signature for a BuiltIn Action. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.skipResourceInUseCheckOnDelete">SkipResourceInUseCheckOnDelete</a></code> | <code>interface{}</code> | Specifies whether to allow deleting action group while it is in use. |

---

##### `ActionGroupExecutor`<sup>Optional</sup> <a name="ActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupExecutor"></a>

```go
ActionGroupExecutor BedrockAgentActionGroupsActionGroupExecutor
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

Type of Executors for an Action Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#action_group_executor BedrockAgent#action_group_executor}

---

##### `ActionGroupName`<sup>Optional</sup> <a name="ActionGroupName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupName"></a>

```go
ActionGroupName *string
```

- *Type:* *string

Name of the action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#action_group_name BedrockAgent#action_group_name}

---

##### `ActionGroupState`<sup>Optional</sup> <a name="ActionGroupState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.actionGroupState"></a>

```go
ActionGroupState *string
```

- *Type:* *string

State of the action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#action_group_state BedrockAgent#action_group_state}

---

##### `ApiSchema`<sup>Optional</sup> <a name="ApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.apiSchema"></a>

```go
ApiSchema BedrockAgentActionGroupsApiSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

Contains information about the API Schema for the Action Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#api_schema BedrockAgent#api_schema}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of action group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `FunctionSchema`<sup>Optional</sup> <a name="FunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.functionSchema"></a>

```go
FunctionSchema BedrockAgentActionGroupsFunctionSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

Schema of Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#function_schema BedrockAgent#function_schema}

---

##### `ParentActionGroupSignature`<sup>Optional</sup> <a name="ParentActionGroupSignature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.parentActionGroupSignature"></a>

```go
ParentActionGroupSignature *string
```

- *Type:* *string

Action Group Signature for a BuiltIn Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#parent_action_group_signature BedrockAgent#parent_action_group_signature}

---

##### `SkipResourceInUseCheckOnDelete`<sup>Optional</sup> <a name="SkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroups.property.skipResourceInUseCheckOnDelete"></a>

```go
SkipResourceInUseCheckOnDelete interface{}
```

- *Type:* interface{}

Specifies whether to allow deleting action group while it is in use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete BedrockAgent#skip_resource_in_use_check_on_delete}

---

### BedrockAgentActionGroupsActionGroupExecutor <a name="BedrockAgentActionGroupsActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentActionGroupsActionGroupExecutor {
	CustomControl: *string,
	Lambda: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.customControl">CustomControl</a></code> | <code>*string</code> | Custom control of action execution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.lambda">Lambda</a></code> | <code>*string</code> | ARN of a Lambda. |

---

##### `CustomControl`<sup>Optional</sup> <a name="CustomControl" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.customControl"></a>

```go
CustomControl *string
```

- *Type:* *string

Custom control of action execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#custom_control BedrockAgent#custom_control}

---

##### `Lambda`<sup>Optional</sup> <a name="Lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor.property.lambda"></a>

```go
Lambda *string
```

- *Type:* *string

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#lambda BedrockAgent#lambda}

---

### BedrockAgentActionGroupsApiSchema <a name="BedrockAgentActionGroupsApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentActionGroupsApiSchema {
	Payload: *string,
	S3: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.payload">Payload</a></code> | <code>*string</code> | String OpenAPI Payload. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a></code> | The identifier for the S3 resource. |

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.payload"></a>

```go
Payload *string
```

- *Type:* *string

String OpenAPI Payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#payload BedrockAgent#payload}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema.property.s3"></a>

```go
S3 BedrockAgentActionGroupsApiSchemaS3
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

The identifier for the S3 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#s3 BedrockAgent#s3}

---

### BedrockAgentActionGroupsApiSchemaS3 <a name="BedrockAgentActionGroupsApiSchemaS3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentActionGroupsApiSchemaS3 {
	S3BucketName: *string,
	S3ObjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | A bucket in S3. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3ObjectKey">S3ObjectKey</a></code> | <code>*string</code> | A object key in S3. |

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3BucketName"></a>

```go
S3BucketName *string
```

- *Type:* *string

A bucket in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#s3_bucket_name BedrockAgent#s3_bucket_name}

---

##### `S3ObjectKey`<sup>Optional</sup> <a name="S3ObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3.property.s3ObjectKey"></a>

```go
S3ObjectKey *string
```

- *Type:* *string

A object key in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#s3_object_key BedrockAgent#s3_object_key}

---

### BedrockAgentActionGroupsFunctionSchema <a name="BedrockAgentActionGroupsFunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentActionGroupsFunctionSchema {
	Functions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.property.functions">Functions</a></code> | <code>interface{}</code> | List of Function definitions. |

---

##### `Functions`<sup>Optional</sup> <a name="Functions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema.property.functions"></a>

```go
Functions interface{}
```

- *Type:* interface{}

List of Function definitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#functions BedrockAgent#functions}

---

### BedrockAgentActionGroupsFunctionSchemaFunctions <a name="BedrockAgentActionGroupsFunctionSchemaFunctions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentActionGroupsFunctionSchemaFunctions {
	Description: *string,
	Name: *string,
	Parameters: interface{},
	RequireConfirmation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.description">Description</a></code> | <code>*string</code> | Description of function. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.name">Name</a></code> | <code>*string</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.parameters">Parameters</a></code> | <code>interface{}</code> | A map of parameter name and detail. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.requireConfirmation">RequireConfirmation</a></code> | <code>*string</code> | ENUM to check if action requires user confirmation. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#name BedrockAgent#name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

A map of parameter name and detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#parameters BedrockAgent#parameters}

---

##### `RequireConfirmation`<sup>Optional</sup> <a name="RequireConfirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctions.property.requireConfirmation"></a>

```go
RequireConfirmation *string
```

- *Type:* *string

ENUM to check if action requires user confirmation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#require_confirmation BedrockAgent#require_confirmation}

---

### BedrockAgentActionGroupsFunctionSchemaFunctionsParameters <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters {
	Description: *string,
	Required: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.description">Description</a></code> | <code>*string</code> | Description of function parameter. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.required">Required</a></code> | <code>interface{}</code> | Information about if a parameter is required for function call. Default to false. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.type">Type</a></code> | <code>*string</code> | Parameter Type. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of function parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Information about if a parameter is required for function call. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#required BedrockAgent#required}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParameters.property.type"></a>

```go
Type *string
```

- *Type:* *string

Parameter Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#type BedrockAgent#type}

---

### BedrockAgentAgentCollaborators <a name="BedrockAgentAgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentAgentCollaborators {
	AgentDescriptor: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor,
	CollaborationInstruction: *string,
	CollaboratorName: *string,
	RelayConversationHistory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.agentDescriptor">AgentDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a></code> | Agent descriptor for agent collaborator. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaborationInstruction">CollaborationInstruction</a></code> | <code>*string</code> | Agent collaborator instruction. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaboratorName">CollaboratorName</a></code> | <code>*string</code> | Agent collaborator name. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.relayConversationHistory">RelayConversationHistory</a></code> | <code>*string</code> | Relay conversation history state. |

---

##### `AgentDescriptor`<sup>Optional</sup> <a name="AgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.agentDescriptor"></a>

```go
AgentDescriptor BedrockAgentAgentCollaboratorsAgentDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

Agent descriptor for agent collaborator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#agent_descriptor BedrockAgent#agent_descriptor}

---

##### `CollaborationInstruction`<sup>Optional</sup> <a name="CollaborationInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaborationInstruction"></a>

```go
CollaborationInstruction *string
```

- *Type:* *string

Agent collaborator instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#collaboration_instruction BedrockAgent#collaboration_instruction}

---

##### `CollaboratorName`<sup>Optional</sup> <a name="CollaboratorName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.collaboratorName"></a>

```go
CollaboratorName *string
```

- *Type:* *string

Agent collaborator name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#collaborator_name BedrockAgent#collaborator_name}

---

##### `RelayConversationHistory`<sup>Optional</sup> <a name="RelayConversationHistory" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaborators.property.relayConversationHistory"></a>

```go
RelayConversationHistory *string
```

- *Type:* *string

Relay conversation history state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#relay_conversation_history BedrockAgent#relay_conversation_history}

---

### BedrockAgentAgentCollaboratorsAgentDescriptor <a name="BedrockAgentAgentCollaboratorsAgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentAgentCollaboratorsAgentDescriptor {
	AliasArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.property.aliasArn">AliasArn</a></code> | <code>*string</code> | Alias ARN for agent descriptor. |

---

##### `AliasArn`<sup>Optional</sup> <a name="AliasArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor.property.aliasArn"></a>

```go
AliasArn *string
```

- *Type:* *string

Alias ARN for agent descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#alias_arn BedrockAgent#alias_arn}

---

### BedrockAgentConfig <a name="BedrockAgentConfig" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AgentName: *string,
	ActionGroups: interface{},
	AgentCollaboration: *string,
	AgentCollaborators: interface{},
	AgentResourceRoleArn: *string,
	AutoPrepare: interface{},
	CustomerEncryptionKeyArn: *string,
	CustomOrchestration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockAgent.BedrockAgentCustomOrchestration,
	Description: *string,
	FoundationModel: *string,
	GuardrailConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockAgent.BedrockAgentGuardrailConfiguration,
	IdleSessionTtlInSeconds: *f64,
	Instruction: *string,
	KnowledgeBases: interface{},
	MemoryConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockAgent.BedrockAgentMemoryConfiguration,
	OrchestrationType: *string,
	PromptOverrideConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration,
	SkipResourceInUseCheckOnDelete: interface{},
	Tags: *map[string]*string,
	TestAliasTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentName">AgentName</a></code> | <code>*string</code> | Name for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.actionGroups">ActionGroups</a></code> | <code>interface{}</code> | List of ActionGroups. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaboration">AgentCollaboration</a></code> | <code>*string</code> | Agent collaboration state. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaborators">AgentCollaborators</a></code> | <code>interface{}</code> | List of Agent Collaborators. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentResourceRoleArn">AgentResourceRoleArn</a></code> | <code>*string</code> | ARN of a IAM role. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.autoPrepare">AutoPrepare</a></code> | <code>interface{}</code> | Specifies whether to automatically prepare after creating or updating the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>*string</code> | A KMS key ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customOrchestration">CustomOrchestration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a></code> | Structure for custom orchestration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.description">Description</a></code> | <code>*string</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.foundationModel">FoundationModel</a></code> | <code>*string</code> | ARN or name of a Bedrock model. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.guardrailConfiguration">GuardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a></code> | Configuration for a guardrail. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.idleSessionTtlInSeconds">IdleSessionTtlInSeconds</a></code> | <code>*f64</code> | Max Session Time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.instruction">Instruction</a></code> | <code>*string</code> | Instruction for the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.knowledgeBases">KnowledgeBases</a></code> | <code>interface{}</code> | List of Agent Knowledge Bases. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.memoryConfiguration">MemoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a></code> | Configuration for memory storage. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.orchestrationType">OrchestrationType</a></code> | <code>*string</code> | Types of orchestration strategy for agents. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.promptOverrideConfiguration">PromptOverrideConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a></code> | Configuration for prompt override. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.skipResourceInUseCheckOnDelete">SkipResourceInUseCheckOnDelete</a></code> | <code>interface{}</code> | Specifies whether to allow deleting agent while it is in use. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A map of tag keys and values. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.testAliasTags">TestAliasTags</a></code> | <code>*map[string]*string</code> | A map of tag keys and values. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentName`<sup>Required</sup> <a name="AgentName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentName"></a>

```go
AgentName *string
```

- *Type:* *string

Name for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#agent_name BedrockAgent#agent_name}

---

##### `ActionGroups`<sup>Optional</sup> <a name="ActionGroups" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.actionGroups"></a>

```go
ActionGroups interface{}
```

- *Type:* interface{}

List of ActionGroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#action_groups BedrockAgent#action_groups}

---

##### `AgentCollaboration`<sup>Optional</sup> <a name="AgentCollaboration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaboration"></a>

```go
AgentCollaboration *string
```

- *Type:* *string

Agent collaboration state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#agent_collaboration BedrockAgent#agent_collaboration}

---

##### `AgentCollaborators`<sup>Optional</sup> <a name="AgentCollaborators" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentCollaborators"></a>

```go
AgentCollaborators interface{}
```

- *Type:* interface{}

List of Agent Collaborators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#agent_collaborators BedrockAgent#agent_collaborators}

---

##### `AgentResourceRoleArn`<sup>Optional</sup> <a name="AgentResourceRoleArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.agentResourceRoleArn"></a>

```go
AgentResourceRoleArn *string
```

- *Type:* *string

ARN of a IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#agent_resource_role_arn BedrockAgent#agent_resource_role_arn}

---

##### `AutoPrepare`<sup>Optional</sup> <a name="AutoPrepare" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.autoPrepare"></a>

```go
AutoPrepare interface{}
```

- *Type:* interface{}

Specifies whether to automatically prepare after creating or updating the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#auto_prepare BedrockAgent#auto_prepare}

---

##### `CustomerEncryptionKeyArn`<sup>Optional</sup> <a name="CustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customerEncryptionKeyArn"></a>

```go
CustomerEncryptionKeyArn *string
```

- *Type:* *string

A KMS key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#customer_encryption_key_arn BedrockAgent#customer_encryption_key_arn}

---

##### `CustomOrchestration`<sup>Optional</sup> <a name="CustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.customOrchestration"></a>

```go
CustomOrchestration BedrockAgentCustomOrchestration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration">BedrockAgentCustomOrchestration</a>

Structure for custom orchestration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#custom_orchestration BedrockAgent#custom_orchestration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `FoundationModel`<sup>Optional</sup> <a name="FoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.foundationModel"></a>

```go
FoundationModel *string
```

- *Type:* *string

ARN or name of a Bedrock model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#foundation_model BedrockAgent#foundation_model}

---

##### `GuardrailConfiguration`<sup>Optional</sup> <a name="GuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.guardrailConfiguration"></a>

```go
GuardrailConfiguration BedrockAgentGuardrailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration">BedrockAgentGuardrailConfiguration</a>

Configuration for a guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#guardrail_configuration BedrockAgent#guardrail_configuration}

---

##### `IdleSessionTtlInSeconds`<sup>Optional</sup> <a name="IdleSessionTtlInSeconds" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.idleSessionTtlInSeconds"></a>

```go
IdleSessionTtlInSeconds *f64
```

- *Type:* *f64

Max Session Time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#idle_session_ttl_in_seconds BedrockAgent#idle_session_ttl_in_seconds}

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.instruction"></a>

```go
Instruction *string
```

- *Type:* *string

Instruction for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#instruction BedrockAgent#instruction}

---

##### `KnowledgeBases`<sup>Optional</sup> <a name="KnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.knowledgeBases"></a>

```go
KnowledgeBases interface{}
```

- *Type:* interface{}

List of Agent Knowledge Bases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#knowledge_bases BedrockAgent#knowledge_bases}

---

##### `MemoryConfiguration`<sup>Optional</sup> <a name="MemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.memoryConfiguration"></a>

```go
MemoryConfiguration BedrockAgentMemoryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration">BedrockAgentMemoryConfiguration</a>

Configuration for memory storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#memory_configuration BedrockAgent#memory_configuration}

---

##### `OrchestrationType`<sup>Optional</sup> <a name="OrchestrationType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.orchestrationType"></a>

```go
OrchestrationType *string
```

- *Type:* *string

Types of orchestration strategy for agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#orchestration_type BedrockAgent#orchestration_type}

---

##### `PromptOverrideConfiguration`<sup>Optional</sup> <a name="PromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.promptOverrideConfiguration"></a>

```go
PromptOverrideConfiguration BedrockAgentPromptOverrideConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration">BedrockAgentPromptOverrideConfiguration</a>

Configuration for prompt override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#prompt_override_configuration BedrockAgent#prompt_override_configuration}

---

##### `SkipResourceInUseCheckOnDelete`<sup>Optional</sup> <a name="SkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.skipResourceInUseCheckOnDelete"></a>

```go
SkipResourceInUseCheckOnDelete interface{}
```

- *Type:* interface{}

Specifies whether to allow deleting agent while it is in use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#skip_resource_in_use_check_on_delete BedrockAgent#skip_resource_in_use_check_on_delete}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#tags BedrockAgent#tags}

---

##### `TestAliasTags`<sup>Optional</sup> <a name="TestAliasTags" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentConfig.property.testAliasTags"></a>

```go
TestAliasTags *map[string]*string
```

- *Type:* *map[string]*string

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#test_alias_tags BedrockAgent#test_alias_tags}

---

### BedrockAgentCustomOrchestration <a name="BedrockAgentCustomOrchestration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentCustomOrchestration {
	Executor: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.property.executor">Executor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a></code> | Types of executors for custom orchestration strategy. |

---

##### `Executor`<sup>Optional</sup> <a name="Executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestration.property.executor"></a>

```go
Executor BedrockAgentCustomOrchestrationExecutor
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

Types of executors for custom orchestration strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#executor BedrockAgent#executor}

---

### BedrockAgentCustomOrchestrationExecutor <a name="BedrockAgentCustomOrchestrationExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentCustomOrchestrationExecutor {
	Lambda: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.property.lambda">Lambda</a></code> | <code>*string</code> | ARN of a Lambda. |

---

##### `Lambda`<sup>Optional</sup> <a name="Lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor.property.lambda"></a>

```go
Lambda *string
```

- *Type:* *string

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#lambda BedrockAgent#lambda}

---

### BedrockAgentGuardrailConfiguration <a name="BedrockAgentGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentGuardrailConfiguration {
	GuardrailIdentifier: *string,
	GuardrailVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailIdentifier">GuardrailIdentifier</a></code> | <code>*string</code> | Identifier for the guardrail, could be the id or the arn. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailVersion">GuardrailVersion</a></code> | <code>*string</code> | Version of the guardrail. |

---

##### `GuardrailIdentifier`<sup>Optional</sup> <a name="GuardrailIdentifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailIdentifier"></a>

```go
GuardrailIdentifier *string
```

- *Type:* *string

Identifier for the guardrail, could be the id or the arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#guardrail_identifier BedrockAgent#guardrail_identifier}

---

##### `GuardrailVersion`<sup>Optional</sup> <a name="GuardrailVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfiguration.property.guardrailVersion"></a>

```go
GuardrailVersion *string
```

- *Type:* *string

Version of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#guardrail_version BedrockAgent#guardrail_version}

---

### BedrockAgentKnowledgeBases <a name="BedrockAgentKnowledgeBases" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentKnowledgeBases {
	Description: *string,
	KnowledgeBaseId: *string,
	KnowledgeBaseState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.description">Description</a></code> | <code>*string</code> | Description of the Resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | Identifier for a resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseState">KnowledgeBaseState</a></code> | <code>*string</code> | State of the knowledge base; whether it is enabled or disabled. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#description BedrockAgent#description}

---

##### `KnowledgeBaseId`<sup>Optional</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseId"></a>

```go
KnowledgeBaseId *string
```

- *Type:* *string

Identifier for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#knowledge_base_id BedrockAgent#knowledge_base_id}

---

##### `KnowledgeBaseState`<sup>Optional</sup> <a name="KnowledgeBaseState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBases.property.knowledgeBaseState"></a>

```go
KnowledgeBaseState *string
```

- *Type:* *string

State of the knowledge base; whether it is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#knowledge_base_state BedrockAgent#knowledge_base_state}

---

### BedrockAgentMemoryConfiguration <a name="BedrockAgentMemoryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentMemoryConfiguration {
	EnabledMemoryTypes: *[]*string,
	SessionSummaryConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration,
	StorageDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.enabledMemoryTypes">EnabledMemoryTypes</a></code> | <code>*[]*string</code> | Types of session storage persisted in memory. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.sessionSummaryConfiguration">SessionSummaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a></code> | Configuration for Session Summarization. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.storageDays">StorageDays</a></code> | <code>*f64</code> | Maximum number of days to store session details. |

---

##### `EnabledMemoryTypes`<sup>Optional</sup> <a name="EnabledMemoryTypes" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.enabledMemoryTypes"></a>

```go
EnabledMemoryTypes *[]*string
```

- *Type:* *[]*string

Types of session storage persisted in memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#enabled_memory_types BedrockAgent#enabled_memory_types}

---

##### `SessionSummaryConfiguration`<sup>Optional</sup> <a name="SessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.sessionSummaryConfiguration"></a>

```go
SessionSummaryConfiguration BedrockAgentMemoryConfigurationSessionSummaryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

Configuration for Session Summarization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#session_summary_configuration BedrockAgent#session_summary_configuration}

---

##### `StorageDays`<sup>Optional</sup> <a name="StorageDays" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfiguration.property.storageDays"></a>

```go
StorageDays *f64
```

- *Type:* *f64

Maximum number of days to store session details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#storage_days BedrockAgent#storage_days}

---

### BedrockAgentMemoryConfigurationSessionSummaryConfiguration <a name="BedrockAgentMemoryConfigurationSessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration {
	MaxRecentSessions: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.property.maxRecentSessions">MaxRecentSessions</a></code> | <code>*f64</code> | Maximum number of Sessions to Summarize. |

---

##### `MaxRecentSessions`<sup>Optional</sup> <a name="MaxRecentSessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration.property.maxRecentSessions"></a>

```go
MaxRecentSessions *f64
```

- *Type:* *f64

Maximum number of Sessions to Summarize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#max_recent_sessions BedrockAgent#max_recent_sessions}

---

### BedrockAgentPromptOverrideConfiguration <a name="BedrockAgentPromptOverrideConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentPromptOverrideConfiguration {
	OverrideLambda: *string,
	PromptConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.overrideLambda">OverrideLambda</a></code> | <code>*string</code> | ARN of a Lambda. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.promptConfigurations">PromptConfigurations</a></code> | <code>interface{}</code> | List of BasePromptConfiguration. |

---

##### `OverrideLambda`<sup>Optional</sup> <a name="OverrideLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.overrideLambda"></a>

```go
OverrideLambda *string
```

- *Type:* *string

ARN of a Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#override_lambda BedrockAgent#override_lambda}

---

##### `PromptConfigurations`<sup>Optional</sup> <a name="PromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfiguration.property.promptConfigurations"></a>

```go
PromptConfigurations interface{}
```

- *Type:* interface{}

List of BasePromptConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#prompt_configurations BedrockAgent#prompt_configurations}

---

### BedrockAgentPromptOverrideConfigurationPromptConfigurations <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentPromptOverrideConfigurationPromptConfigurations {
	AdditionalModelRequestFields: *string,
	BasePromptTemplate: *string,
	FoundationModel: *string,
	InferenceConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration,
	ParserMode: *string,
	PromptCreationMode: *string,
	PromptState: *string,
	PromptType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.additionalModelRequestFields">AdditionalModelRequestFields</a></code> | <code>*string</code> | Additional Model Request Fields for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate">BasePromptTemplate</a></code> | <code>*string</code> | Base Prompt Template. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.foundationModel">FoundationModel</a></code> | <code>*string</code> | ARN or name of a Bedrock model. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration">InferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | Configuration for inference in prompt configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode">ParserMode</a></code> | <code>*string</code> | Creation Mode for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode">PromptCreationMode</a></code> | <code>*string</code> | Creation Mode for Prompt Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptState">PromptState</a></code> | <code>*string</code> | Prompt State. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptType">PromptType</a></code> | <code>*string</code> | Prompt Type. |

---

##### `AdditionalModelRequestFields`<sup>Optional</sup> <a name="AdditionalModelRequestFields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.additionalModelRequestFields"></a>

```go
AdditionalModelRequestFields *string
```

- *Type:* *string

Additional Model Request Fields for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#additional_model_request_fields BedrockAgent#additional_model_request_fields}

---

##### `BasePromptTemplate`<sup>Optional</sup> <a name="BasePromptTemplate" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate"></a>

```go
BasePromptTemplate *string
```

- *Type:* *string

Base Prompt Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#base_prompt_template BedrockAgent#base_prompt_template}

---

##### `FoundationModel`<sup>Optional</sup> <a name="FoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.foundationModel"></a>

```go
FoundationModel *string
```

- *Type:* *string

ARN or name of a Bedrock model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#foundation_model BedrockAgent#foundation_model}

---

##### `InferenceConfiguration`<sup>Optional</sup> <a name="InferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration"></a>

```go
InferenceConfiguration BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

Configuration for inference in prompt configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#inference_configuration BedrockAgent#inference_configuration}

---

##### `ParserMode`<sup>Optional</sup> <a name="ParserMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode"></a>

```go
ParserMode *string
```

- *Type:* *string

Creation Mode for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#parser_mode BedrockAgent#parser_mode}

---

##### `PromptCreationMode`<sup>Optional</sup> <a name="PromptCreationMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode"></a>

```go
PromptCreationMode *string
```

- *Type:* *string

Creation Mode for Prompt Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#prompt_creation_mode BedrockAgent#prompt_creation_mode}

---

##### `PromptState`<sup>Optional</sup> <a name="PromptState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptState"></a>

```go
PromptState *string
```

- *Type:* *string

Prompt State.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#prompt_state BedrockAgent#prompt_state}

---

##### `PromptType`<sup>Optional</sup> <a name="PromptType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurations.property.promptType"></a>

```go
PromptType *string
```

- *Type:* *string

Prompt Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#prompt_type BedrockAgent#prompt_type}

---

### BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

&bedrockagent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration {
	MaximumLength: *f64,
	StopSequences: *[]*string,
	Temperature: *f64,
	TopK: *f64,
	TopP: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maximumLength">MaximumLength</a></code> | <code>*f64</code> | Maximum length of output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences">StopSequences</a></code> | <code>*[]*string</code> | List of stop sequences. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature">Temperature</a></code> | <code>*f64</code> | Controls randomness, higher values increase diversity. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK">TopK</a></code> | <code>*f64</code> | Sample from the k most likely next tokens. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP">TopP</a></code> | <code>*f64</code> | Cumulative probability cutoff for token selection. |

---

##### `MaximumLength`<sup>Optional</sup> <a name="MaximumLength" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maximumLength"></a>

```go
MaximumLength *f64
```

- *Type:* *f64

Maximum length of output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#maximum_length BedrockAgent#maximum_length}

---

##### `StopSequences`<sup>Optional</sup> <a name="StopSequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences"></a>

```go
StopSequences *[]*string
```

- *Type:* *[]*string

List of stop sequences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#stop_sequences BedrockAgent#stop_sequences}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

Controls randomness, higher values increase diversity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#temperature BedrockAgent#temperature}

---

##### `TopK`<sup>Optional</sup> <a name="TopK" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK"></a>

```go
TopK *f64
```

- *Type:* *f64

Sample from the k most likely next tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#top_k BedrockAgent#top_k}

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP"></a>

```go
TopP *f64
```

- *Type:* *f64

Cumulative probability cutoff for token selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_agent#top_p BedrockAgent#top_p}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAgentActionGroupsActionGroupExecutorOutputReference <a name="BedrockAgentActionGroupsActionGroupExecutorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentActionGroupsActionGroupExecutorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAgentActionGroupsActionGroupExecutorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetCustomControl">ResetCustomControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetLambda">ResetLambda</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomControl` <a name="ResetCustomControl" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetCustomControl"></a>

```go
func ResetCustomControl()
```

##### `ResetLambda` <a name="ResetLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.resetLambda"></a>

```go
func ResetLambda()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControlInput">CustomControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambdaInput">LambdaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControl">CustomControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambda">Lambda</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomControlInput`<sup>Optional</sup> <a name="CustomControlInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControlInput"></a>

```go
func CustomControlInput() *string
```

- *Type:* *string

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambdaInput"></a>

```go
func LambdaInput() *string
```

- *Type:* *string

---

##### `CustomControl`<sup>Required</sup> <a name="CustomControl" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.customControl"></a>

```go
func CustomControl() *string
```

- *Type:* *string

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.lambda"></a>

```go
func Lambda() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentActionGroupsApiSchemaOutputReference <a name="BedrockAgentActionGroupsApiSchemaOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentActionGroupsApiSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAgentActionGroupsApiSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3"></a>

```go
func PutS3(value BedrockAgentActionGroupsApiSchemaS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3">BedrockAgentActionGroupsApiSchemaS3</a>

---

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetPayload"></a>

```go
func ResetPayload()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference">BedrockAgentActionGroupsApiSchemaS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payloadInput">PayloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3Input">S3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payload">Payload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3"></a>

```go
func S3() BedrockAgentActionGroupsApiSchemaS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference">BedrockAgentActionGroupsApiSchemaS3OutputReference</a>

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payloadInput"></a>

```go
func PayloadInput() *string
```

- *Type:* *string

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.s3Input"></a>

```go
func S3Input() interface{}
```

- *Type:* interface{}

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.payload"></a>

```go
func Payload() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentActionGroupsApiSchemaS3OutputReference <a name="BedrockAgentActionGroupsApiSchemaS3OutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentActionGroupsApiSchemaS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAgentActionGroupsApiSchemaS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3BucketName">ResetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3ObjectKey">ResetS3ObjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3BucketName"></a>

```go
func ResetS3BucketName()
```

##### `ResetS3ObjectKey` <a name="ResetS3ObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.resetS3ObjectKey"></a>

```go
func ResetS3ObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKeyInput">S3ObjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKey">S3ObjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketNameInput"></a>

```go
func S3BucketNameInput() *string
```

- *Type:* *string

---

##### `S3ObjectKeyInput`<sup>Optional</sup> <a name="S3ObjectKeyInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKeyInput"></a>

```go
func S3ObjectKeyInput() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `S3ObjectKey`<sup>Required</sup> <a name="S3ObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.s3ObjectKey"></a>

```go
func S3ObjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsList <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentActionGroupsFunctionSchemaFunctionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockAgentActionGroupsFunctionSchemaFunctionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get"></a>

```go
func Get(index *f64) BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetRequireConfirmation">ResetRequireConfirmation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetRequireConfirmation` <a name="ResetRequireConfirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.resetRequireConfirmation"></a>

```go
func ResetRequireConfirmation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap">BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmationInput">RequireConfirmationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmation">RequireConfirmation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parameters"></a>

```go
func Parameters() BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap">BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `RequireConfirmationInput`<sup>Optional</sup> <a name="RequireConfirmationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmationInput"></a>

```go
func RequireConfirmationInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RequireConfirmation`<sup>Required</sup> <a name="RequireConfirmation" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.requireConfirmation"></a>

```go
func RequireConfirmation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get"></a>

```go
func Get(key *string) BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentActionGroupsFunctionSchemaOutputReference <a name="BedrockAgentActionGroupsFunctionSchemaOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentActionGroupsFunctionSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAgentActionGroupsFunctionSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions">PutFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resetFunctions">ResetFunctions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFunctions` <a name="PutFunctions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions"></a>

```go
func PutFunctions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.putFunctions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFunctions` <a name="ResetFunctions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.resetFunctions"></a>

```go
func ResetFunctions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functions">Functions</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList">BedrockAgentActionGroupsFunctionSchemaFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functionsInput">FunctionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functions"></a>

```go
func Functions() BedrockAgentActionGroupsFunctionSchemaFunctionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaFunctionsList">BedrockAgentActionGroupsFunctionSchemaFunctionsList</a>

---

##### `FunctionsInput`<sup>Optional</sup> <a name="FunctionsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.functionsInput"></a>

```go
func FunctionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentActionGroupsList <a name="BedrockAgentActionGroupsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentActionGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockAgentActionGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get"></a>

```go
func Get(index *f64) BedrockAgentActionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentActionGroupsOutputReference <a name="BedrockAgentActionGroupsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentActionGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockAgentActionGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor">PutActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema">PutApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema">PutFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupExecutor">ResetActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupName">ResetActionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupState">ResetActionGroupState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetApiSchema">ResetApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetFunctionSchema">ResetFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetParentActionGroupSignature">ResetParentActionGroupSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetSkipResourceInUseCheckOnDelete">ResetSkipResourceInUseCheckOnDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActionGroupExecutor` <a name="PutActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor"></a>

```go
func PutActionGroupExecutor(value BedrockAgentActionGroupsActionGroupExecutor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putActionGroupExecutor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutor">BedrockAgentActionGroupsActionGroupExecutor</a>

---

##### `PutApiSchema` <a name="PutApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema"></a>

```go
func PutApiSchema(value BedrockAgentActionGroupsApiSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putApiSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchema">BedrockAgentActionGroupsApiSchema</a>

---

##### `PutFunctionSchema` <a name="PutFunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema"></a>

```go
func PutFunctionSchema(value BedrockAgentActionGroupsFunctionSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.putFunctionSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchema">BedrockAgentActionGroupsFunctionSchema</a>

---

##### `ResetActionGroupExecutor` <a name="ResetActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupExecutor"></a>

```go
func ResetActionGroupExecutor()
```

##### `ResetActionGroupName` <a name="ResetActionGroupName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupName"></a>

```go
func ResetActionGroupName()
```

##### `ResetActionGroupState` <a name="ResetActionGroupState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetActionGroupState"></a>

```go
func ResetActionGroupState()
```

##### `ResetApiSchema` <a name="ResetApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetApiSchema"></a>

```go
func ResetApiSchema()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFunctionSchema` <a name="ResetFunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetFunctionSchema"></a>

```go
func ResetFunctionSchema()
```

##### `ResetParentActionGroupSignature` <a name="ResetParentActionGroupSignature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetParentActionGroupSignature"></a>

```go
func ResetParentActionGroupSignature()
```

##### `ResetSkipResourceInUseCheckOnDelete` <a name="ResetSkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.resetSkipResourceInUseCheckOnDelete"></a>

```go
func ResetSkipResourceInUseCheckOnDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutor">ActionGroupExecutor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference">BedrockAgentActionGroupsActionGroupExecutorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchema">ApiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference">BedrockAgentActionGroupsApiSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchema">FunctionSchema</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference">BedrockAgentActionGroupsFunctionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutorInput">ActionGroupExecutorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupNameInput">ActionGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupStateInput">ActionGroupStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchemaInput">ApiSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchemaInput">FunctionSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignatureInput">ParentActionGroupSignatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDeleteInput">SkipResourceInUseCheckOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupName">ActionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupState">ActionGroupState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignature">ParentActionGroupSignature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDelete">SkipResourceInUseCheckOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionGroupExecutor`<sup>Required</sup> <a name="ActionGroupExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutor"></a>

```go
func ActionGroupExecutor() BedrockAgentActionGroupsActionGroupExecutorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsActionGroupExecutorOutputReference">BedrockAgentActionGroupsActionGroupExecutorOutputReference</a>

---

##### `ApiSchema`<sup>Required</sup> <a name="ApiSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchema"></a>

```go
func ApiSchema() BedrockAgentActionGroupsApiSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsApiSchemaOutputReference">BedrockAgentActionGroupsApiSchemaOutputReference</a>

---

##### `FunctionSchema`<sup>Required</sup> <a name="FunctionSchema" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchema"></a>

```go
func FunctionSchema() BedrockAgentActionGroupsFunctionSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsFunctionSchemaOutputReference">BedrockAgentActionGroupsFunctionSchemaOutputReference</a>

---

##### `ActionGroupExecutorInput`<sup>Optional</sup> <a name="ActionGroupExecutorInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupExecutorInput"></a>

```go
func ActionGroupExecutorInput() interface{}
```

- *Type:* interface{}

---

##### `ActionGroupNameInput`<sup>Optional</sup> <a name="ActionGroupNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupNameInput"></a>

```go
func ActionGroupNameInput() *string
```

- *Type:* *string

---

##### `ActionGroupStateInput`<sup>Optional</sup> <a name="ActionGroupStateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupStateInput"></a>

```go
func ActionGroupStateInput() *string
```

- *Type:* *string

---

##### `ApiSchemaInput`<sup>Optional</sup> <a name="ApiSchemaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.apiSchemaInput"></a>

```go
func ApiSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FunctionSchemaInput`<sup>Optional</sup> <a name="FunctionSchemaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.functionSchemaInput"></a>

```go
func FunctionSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `ParentActionGroupSignatureInput`<sup>Optional</sup> <a name="ParentActionGroupSignatureInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignatureInput"></a>

```go
func ParentActionGroupSignatureInput() *string
```

- *Type:* *string

---

##### `SkipResourceInUseCheckOnDeleteInput`<sup>Optional</sup> <a name="SkipResourceInUseCheckOnDeleteInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDeleteInput"></a>

```go
func SkipResourceInUseCheckOnDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `ActionGroupName`<sup>Required</sup> <a name="ActionGroupName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupName"></a>

```go
func ActionGroupName() *string
```

- *Type:* *string

---

##### `ActionGroupState`<sup>Required</sup> <a name="ActionGroupState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.actionGroupState"></a>

```go
func ActionGroupState() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ParentActionGroupSignature`<sup>Required</sup> <a name="ParentActionGroupSignature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.parentActionGroupSignature"></a>

```go
func ParentActionGroupSignature() *string
```

- *Type:* *string

---

##### `SkipResourceInUseCheckOnDelete`<sup>Required</sup> <a name="SkipResourceInUseCheckOnDelete" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.skipResourceInUseCheckOnDelete"></a>

```go
func SkipResourceInUseCheckOnDelete() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentActionGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference <a name="BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resetAliasArn">ResetAliasArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAliasArn` <a name="ResetAliasArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.resetAliasArn"></a>

```go
func ResetAliasArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArnInput">AliasArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArn">AliasArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasArnInput`<sup>Optional</sup> <a name="AliasArnInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArnInput"></a>

```go
func AliasArnInput() *string
```

- *Type:* *string

---

##### `AliasArn`<sup>Required</sup> <a name="AliasArn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.aliasArn"></a>

```go
func AliasArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentAgentCollaboratorsList <a name="BedrockAgentAgentCollaboratorsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentAgentCollaboratorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockAgentAgentCollaboratorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get"></a>

```go
func Get(index *f64) BedrockAgentAgentCollaboratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentAgentCollaboratorsOutputReference <a name="BedrockAgentAgentCollaboratorsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentAgentCollaboratorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockAgentAgentCollaboratorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor">PutAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetAgentDescriptor">ResetAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaborationInstruction">ResetCollaborationInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaboratorName">ResetCollaboratorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetRelayConversationHistory">ResetRelayConversationHistory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentDescriptor` <a name="PutAgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor"></a>

```go
func PutAgentDescriptor(value BedrockAgentAgentCollaboratorsAgentDescriptor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.putAgentDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptor">BedrockAgentAgentCollaboratorsAgentDescriptor</a>

---

##### `ResetAgentDescriptor` <a name="ResetAgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetAgentDescriptor"></a>

```go
func ResetAgentDescriptor()
```

##### `ResetCollaborationInstruction` <a name="ResetCollaborationInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaborationInstruction"></a>

```go
func ResetCollaborationInstruction()
```

##### `ResetCollaboratorName` <a name="ResetCollaboratorName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetCollaboratorName"></a>

```go
func ResetCollaboratorName()
```

##### `ResetRelayConversationHistory` <a name="ResetRelayConversationHistory" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.resetRelayConversationHistory"></a>

```go
func ResetRelayConversationHistory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptor">AgentDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference">BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptorInput">AgentDescriptorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstructionInput">CollaborationInstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorNameInput">CollaboratorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistoryInput">RelayConversationHistoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstruction">CollaborationInstruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorName">CollaboratorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistory">RelayConversationHistory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentDescriptor`<sup>Required</sup> <a name="AgentDescriptor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptor"></a>

```go
func AgentDescriptor() BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference">BedrockAgentAgentCollaboratorsAgentDescriptorOutputReference</a>

---

##### `AgentDescriptorInput`<sup>Optional</sup> <a name="AgentDescriptorInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.agentDescriptorInput"></a>

```go
func AgentDescriptorInput() interface{}
```

- *Type:* interface{}

---

##### `CollaborationInstructionInput`<sup>Optional</sup> <a name="CollaborationInstructionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstructionInput"></a>

```go
func CollaborationInstructionInput() *string
```

- *Type:* *string

---

##### `CollaboratorNameInput`<sup>Optional</sup> <a name="CollaboratorNameInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorNameInput"></a>

```go
func CollaboratorNameInput() *string
```

- *Type:* *string

---

##### `RelayConversationHistoryInput`<sup>Optional</sup> <a name="RelayConversationHistoryInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistoryInput"></a>

```go
func RelayConversationHistoryInput() *string
```

- *Type:* *string

---

##### `CollaborationInstruction`<sup>Required</sup> <a name="CollaborationInstruction" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaborationInstruction"></a>

```go
func CollaborationInstruction() *string
```

- *Type:* *string

---

##### `CollaboratorName`<sup>Required</sup> <a name="CollaboratorName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.collaboratorName"></a>

```go
func CollaboratorName() *string
```

- *Type:* *string

---

##### `RelayConversationHistory`<sup>Required</sup> <a name="RelayConversationHistory" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.relayConversationHistory"></a>

```go
func RelayConversationHistory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentAgentCollaboratorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentCustomOrchestrationExecutorOutputReference <a name="BedrockAgentCustomOrchestrationExecutorOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentCustomOrchestrationExecutorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAgentCustomOrchestrationExecutorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resetLambda">ResetLambda</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambda` <a name="ResetLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.resetLambda"></a>

```go
func ResetLambda()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambdaInput">LambdaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambda">Lambda</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambdaInput"></a>

```go
func LambdaInput() *string
```

- *Type:* *string

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.lambda"></a>

```go
func Lambda() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentCustomOrchestrationOutputReference <a name="BedrockAgentCustomOrchestrationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentCustomOrchestrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAgentCustomOrchestrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor">PutExecutor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resetExecutor">ResetExecutor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExecutor` <a name="PutExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor"></a>

```go
func PutExecutor(value BedrockAgentCustomOrchestrationExecutor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.putExecutor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutor">BedrockAgentCustomOrchestrationExecutor</a>

---

##### `ResetExecutor` <a name="ResetExecutor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.resetExecutor"></a>

```go
func ResetExecutor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executor">Executor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference">BedrockAgentCustomOrchestrationExecutorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executorInput">ExecutorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Executor`<sup>Required</sup> <a name="Executor" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executor"></a>

```go
func Executor() BedrockAgentCustomOrchestrationExecutorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationExecutorOutputReference">BedrockAgentCustomOrchestrationExecutorOutputReference</a>

---

##### `ExecutorInput`<sup>Optional</sup> <a name="ExecutorInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.executorInput"></a>

```go
func ExecutorInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentCustomOrchestrationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentGuardrailConfigurationOutputReference <a name="BedrockAgentGuardrailConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentGuardrailConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAgentGuardrailConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier">ResetGuardrailIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailVersion">ResetGuardrailVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGuardrailIdentifier` <a name="ResetGuardrailIdentifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier"></a>

```go
func ResetGuardrailIdentifier()
```

##### `ResetGuardrailVersion` <a name="ResetGuardrailVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.resetGuardrailVersion"></a>

```go
func ResetGuardrailVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput">GuardrailIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput">GuardrailVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier">GuardrailIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersion">GuardrailVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuardrailIdentifierInput`<sup>Optional</sup> <a name="GuardrailIdentifierInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput"></a>

```go
func GuardrailIdentifierInput() *string
```

- *Type:* *string

---

##### `GuardrailVersionInput`<sup>Optional</sup> <a name="GuardrailVersionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput"></a>

```go
func GuardrailVersionInput() *string
```

- *Type:* *string

---

##### `GuardrailIdentifier`<sup>Required</sup> <a name="GuardrailIdentifier" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```go
func GuardrailIdentifier() *string
```

- *Type:* *string

---

##### `GuardrailVersion`<sup>Required</sup> <a name="GuardrailVersion" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```go
func GuardrailVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentGuardrailConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentKnowledgeBasesList <a name="BedrockAgentKnowledgeBasesList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentKnowledgeBasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockAgentKnowledgeBasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get"></a>

```go
func Get(index *f64) BedrockAgentKnowledgeBasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentKnowledgeBasesOutputReference <a name="BedrockAgentKnowledgeBasesOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentKnowledgeBasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockAgentKnowledgeBasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseId">ResetKnowledgeBaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseState">ResetKnowledgeBaseState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKnowledgeBaseId` <a name="ResetKnowledgeBaseId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseId"></a>

```go
func ResetKnowledgeBaseId()
```

##### `ResetKnowledgeBaseState` <a name="ResetKnowledgeBaseState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.resetKnowledgeBaseState"></a>

```go
func ResetKnowledgeBaseState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseIdInput">KnowledgeBaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseStateInput">KnowledgeBaseStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseState">KnowledgeBaseState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KnowledgeBaseIdInput`<sup>Optional</sup> <a name="KnowledgeBaseIdInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseIdInput"></a>

```go
func KnowledgeBaseIdInput() *string
```

- *Type:* *string

---

##### `KnowledgeBaseStateInput`<sup>Optional</sup> <a name="KnowledgeBaseStateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseStateInput"></a>

```go
func KnowledgeBaseStateInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseId"></a>

```go
func KnowledgeBaseId() *string
```

- *Type:* *string

---

##### `KnowledgeBaseState`<sup>Required</sup> <a name="KnowledgeBaseState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.knowledgeBaseState"></a>

```go
func KnowledgeBaseState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentKnowledgeBasesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentMemoryConfigurationOutputReference <a name="BedrockAgentMemoryConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentMemoryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAgentMemoryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration">PutSessionSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes">ResetEnabledMemoryTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetSessionSummaryConfiguration">ResetSessionSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetStorageDays">ResetStorageDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionSummaryConfiguration` <a name="PutSessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration"></a>

```go
func PutSessionSummaryConfiguration(value BedrockAgentMemoryConfigurationSessionSummaryConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.putSessionSummaryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfiguration">BedrockAgentMemoryConfigurationSessionSummaryConfiguration</a>

---

##### `ResetEnabledMemoryTypes` <a name="ResetEnabledMemoryTypes" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes"></a>

```go
func ResetEnabledMemoryTypes()
```

##### `ResetSessionSummaryConfiguration` <a name="ResetSessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetSessionSummaryConfiguration"></a>

```go
func ResetSessionSummaryConfiguration()
```

##### `ResetStorageDays` <a name="ResetStorageDays" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.resetStorageDays"></a>

```go
func ResetStorageDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfiguration">SessionSummaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference">BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput">EnabledMemoryTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfigurationInput">SessionSummaryConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDaysInput">StorageDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes">EnabledMemoryTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDays">StorageDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SessionSummaryConfiguration`<sup>Required</sup> <a name="SessionSummaryConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfiguration"></a>

```go
func SessionSummaryConfiguration() BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference">BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference</a>

---

##### `EnabledMemoryTypesInput`<sup>Optional</sup> <a name="EnabledMemoryTypesInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput"></a>

```go
func EnabledMemoryTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SessionSummaryConfigurationInput`<sup>Optional</sup> <a name="SessionSummaryConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.sessionSummaryConfigurationInput"></a>

```go
func SessionSummaryConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `StorageDaysInput`<sup>Optional</sup> <a name="StorageDaysInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDaysInput"></a>

```go
func StorageDaysInput() *f64
```

- *Type:* *f64

---

##### `EnabledMemoryTypes`<sup>Required</sup> <a name="EnabledMemoryTypes" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes"></a>

```go
func EnabledMemoryTypes() *[]*string
```

- *Type:* *[]*string

---

##### `StorageDays`<sup>Required</sup> <a name="StorageDays" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.storageDays"></a>

```go
func StorageDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference <a name="BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resetMaxRecentSessions">ResetMaxRecentSessions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxRecentSessions` <a name="ResetMaxRecentSessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.resetMaxRecentSessions"></a>

```go
func ResetMaxRecentSessions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessionsInput">MaxRecentSessionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessions">MaxRecentSessions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRecentSessionsInput`<sup>Optional</sup> <a name="MaxRecentSessionsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessionsInput"></a>

```go
func MaxRecentSessionsInput() *f64
```

- *Type:* *f64

---

##### `MaxRecentSessions`<sup>Required</sup> <a name="MaxRecentSessions" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.maxRecentSessions"></a>

```go
func MaxRecentSessions() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentPromptOverrideConfigurationOutputReference <a name="BedrockAgentPromptOverrideConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentPromptOverrideConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAgentPromptOverrideConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations">PutPromptConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda">ResetOverrideLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations">ResetPromptConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPromptConfigurations` <a name="PutPromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations"></a>

```go
func PutPromptConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOverrideLambda` <a name="ResetOverrideLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda"></a>

```go
func ResetOverrideLambda()
```

##### `ResetPromptConfigurations` <a name="ResetPromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations"></a>

```go
func ResetPromptConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations">PromptConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockAgentPromptOverrideConfigurationPromptConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput">OverrideLambdaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput">PromptConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambda">OverrideLambda</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PromptConfigurations`<sup>Required</sup> <a name="PromptConfigurations" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations"></a>

```go
func PromptConfigurations() BedrockAgentPromptOverrideConfigurationPromptConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockAgentPromptOverrideConfigurationPromptConfigurationsList</a>

---

##### `OverrideLambdaInput`<sup>Optional</sup> <a name="OverrideLambdaInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput"></a>

```go
func OverrideLambdaInput() *string
```

- *Type:* *string

---

##### `PromptConfigurationsInput`<sup>Optional</sup> <a name="PromptConfigurationsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput"></a>

```go
func PromptConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `OverrideLambda`<sup>Required</sup> <a name="OverrideLambda" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.overrideLambda"></a>

```go
func OverrideLambda() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaximumLength">ResetMaximumLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences">ResetStopSequences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK">ResetTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumLength` <a name="ResetMaximumLength" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaximumLength"></a>

```go
func ResetMaximumLength()
```

##### `ResetStopSequences` <a name="ResetStopSequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences"></a>

```go
func ResetStopSequences()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```

##### `ResetTopK` <a name="ResetTopK" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK"></a>

```go
func ResetTopK()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP"></a>

```go
func ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLengthInput">MaximumLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput">StopSequencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput">TopKInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput">TopPInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLength">MaximumLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences">StopSequences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK">TopK</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP">TopP</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumLengthInput`<sup>Optional</sup> <a name="MaximumLengthInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLengthInput"></a>

```go
func MaximumLengthInput() *f64
```

- *Type:* *f64

---

##### `StopSequencesInput`<sup>Optional</sup> <a name="StopSequencesInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput"></a>

```go
func StopSequencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `TopKInput`<sup>Optional</sup> <a name="TopKInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput"></a>

```go
func TopKInput() *f64
```

- *Type:* *f64

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput"></a>

```go
func TopPInput() *f64
```

- *Type:* *f64

---

##### `MaximumLength`<sup>Required</sup> <a name="MaximumLength" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maximumLength"></a>

```go
func MaximumLength() *f64
```

- *Type:* *f64

---

##### `StopSequences`<sup>Required</sup> <a name="StopSequences" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences"></a>

```go
func StopSequences() *[]*string
```

- *Type:* *[]*string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `TopK`<sup>Required</sup> <a name="TopK" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK"></a>

```go
func TopK() *f64
```

- *Type:* *f64

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP"></a>

```go
func TopP() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsList <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsList" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentPromptOverrideConfigurationPromptConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockAgentPromptOverrideConfigurationPromptConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get"></a>

```go
func Get(index *f64) BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference <a name="BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagent"

bedrockagent.NewBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration">PutInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetAdditionalModelRequestFields">ResetAdditionalModelRequestFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate">ResetBasePromptTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetFoundationModel">ResetFoundationModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration">ResetInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode">ResetParserMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode">ResetPromptCreationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState">ResetPromptState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType">ResetPromptType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInferenceConfiguration` <a name="PutInferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration"></a>

```go
func PutInferenceConfiguration(value BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---

##### `ResetAdditionalModelRequestFields` <a name="ResetAdditionalModelRequestFields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetAdditionalModelRequestFields"></a>

```go
func ResetAdditionalModelRequestFields()
```

##### `ResetBasePromptTemplate` <a name="ResetBasePromptTemplate" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate"></a>

```go
func ResetBasePromptTemplate()
```

##### `ResetFoundationModel` <a name="ResetFoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetFoundationModel"></a>

```go
func ResetFoundationModel()
```

##### `ResetInferenceConfiguration` <a name="ResetInferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration"></a>

```go
func ResetInferenceConfiguration()
```

##### `ResetParserMode` <a name="ResetParserMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode"></a>

```go
func ResetParserMode()
```

##### `ResetPromptCreationMode` <a name="ResetPromptCreationMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode"></a>

```go
func ResetPromptCreationMode()
```

##### `ResetPromptState` <a name="ResetPromptState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState"></a>

```go
func ResetPromptState()
```

##### `ResetPromptType` <a name="ResetPromptType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType"></a>

```go
func ResetPromptType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration">InferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFieldsInput">AdditionalModelRequestFieldsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput">BasePromptTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModelInput">FoundationModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput">InferenceConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput">ParserModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput">PromptCreationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput">PromptStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput">PromptTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFields">AdditionalModelRequestFields</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate">BasePromptTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModel">FoundationModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode">ParserMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode">PromptCreationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState">PromptState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType">PromptType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InferenceConfiguration`<sup>Required</sup> <a name="InferenceConfiguration" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration"></a>

```go
func InferenceConfiguration() BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference">BedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference</a>

---

##### `AdditionalModelRequestFieldsInput`<sup>Optional</sup> <a name="AdditionalModelRequestFieldsInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFieldsInput"></a>

```go
func AdditionalModelRequestFieldsInput() *string
```

- *Type:* *string

---

##### `BasePromptTemplateInput`<sup>Optional</sup> <a name="BasePromptTemplateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput"></a>

```go
func BasePromptTemplateInput() *string
```

- *Type:* *string

---

##### `FoundationModelInput`<sup>Optional</sup> <a name="FoundationModelInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModelInput"></a>

```go
func FoundationModelInput() *string
```

- *Type:* *string

---

##### `InferenceConfigurationInput`<sup>Optional</sup> <a name="InferenceConfigurationInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput"></a>

```go
func InferenceConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ParserModeInput`<sup>Optional</sup> <a name="ParserModeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput"></a>

```go
func ParserModeInput() *string
```

- *Type:* *string

---

##### `PromptCreationModeInput`<sup>Optional</sup> <a name="PromptCreationModeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput"></a>

```go
func PromptCreationModeInput() *string
```

- *Type:* *string

---

##### `PromptStateInput`<sup>Optional</sup> <a name="PromptStateInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput"></a>

```go
func PromptStateInput() *string
```

- *Type:* *string

---

##### `PromptTypeInput`<sup>Optional</sup> <a name="PromptTypeInput" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput"></a>

```go
func PromptTypeInput() *string
```

- *Type:* *string

---

##### `AdditionalModelRequestFields`<sup>Required</sup> <a name="AdditionalModelRequestFields" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.additionalModelRequestFields"></a>

```go
func AdditionalModelRequestFields() *string
```

- *Type:* *string

---

##### `BasePromptTemplate`<sup>Required</sup> <a name="BasePromptTemplate" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate"></a>

```go
func BasePromptTemplate() *string
```

- *Type:* *string

---

##### `FoundationModel`<sup>Required</sup> <a name="FoundationModel" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.foundationModel"></a>

```go
func FoundationModel() *string
```

- *Type:* *string

---

##### `ParserMode`<sup>Required</sup> <a name="ParserMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode"></a>

```go
func ParserMode() *string
```

- *Type:* *string

---

##### `PromptCreationMode`<sup>Required</sup> <a name="PromptCreationMode" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode"></a>

```go
func PromptCreationMode() *string
```

- *Type:* *string

---

##### `PromptState`<sup>Required</sup> <a name="PromptState" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState"></a>

```go
func PromptState() *string
```

- *Type:* *string

---

##### `PromptType`<sup>Required</sup> <a name="PromptType" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType"></a>

```go
func PromptType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAgent.BedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



