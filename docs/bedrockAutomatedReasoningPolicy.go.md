# `bedrockAutomatedReasoningPolicy` Submodule <a name="`bedrockAutomatedReasoningPolicy` Submodule" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAutomatedReasoningPolicy <a name="BedrockAutomatedReasoningPolicy" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy awscc_bedrock_automated_reasoning_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.NewBedrockAutomatedReasoningPolicy(scope Construct, id *string, config BedrockAutomatedReasoningPolicyConfig) BedrockAutomatedReasoningPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig">BedrockAutomatedReasoningPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig">BedrockAutomatedReasoningPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition">PutPolicyDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetPolicyDefinition">ResetPolicyDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicyDefinition` <a name="PutPolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition"></a>

```go
func PutPolicyDefinition(value BedrockAutomatedReasoningPolicyPolicyDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetForceDelete"></a>

```go
func ResetForceDelete()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetPolicyDefinition` <a name="ResetPolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetPolicyDefinition"></a>

```go
func ResetPolicyDefinition()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.BedrockAutomatedReasoningPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.BedrockAutomatedReasoningPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.BedrockAutomatedReasoningPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.BedrockAutomatedReasoningPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockAutomatedReasoningPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockAutomatedReasoningPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAutomatedReasoningPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.definitionHash">DefinitionHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyArn">PolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinition">PolicyDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList">BedrockAutomatedReasoningPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinitionInput">PolicyDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DefinitionHash`<sup>Required</sup> <a name="DefinitionHash" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.definitionHash"></a>

```go
func DefinitionHash() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyArn"></a>

```go
func PolicyArn() *string
```

- *Type:* *string

---

##### `PolicyDefinition`<sup>Required</sup> <a name="PolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinition"></a>

```go
func PolicyDefinition() BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a>

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tags"></a>

```go
func Tags() BedrockAutomatedReasoningPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList">BedrockAutomatedReasoningPolicyTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDeleteInput"></a>

```go
func ForceDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyDefinitionInput`<sup>Optional</sup> <a name="PolicyDefinitionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinitionInput"></a>

```go
func PolicyDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDelete"></a>

```go
func ForceDelete() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAutomatedReasoningPolicyConfig <a name="BedrockAutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

&bedrockautomatedreasoningpolicy.BedrockAutomatedReasoningPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	ForceDelete: interface{},
	KmsKeyId: *string,
	PolicyDefinition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | Specifies whether to force delete the automated reasoning policy even if it has active resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The KMS key with which the Policy's assets will be encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.policyDefinition">PolicyDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#policy_definition BedrockAutomatedReasoningPolicy#policy_definition}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#tags BedrockAutomatedReasoningPolicy#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}.

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

Specifies whether to force delete the automated reasoning policy even if it has active resources.

When false , Amazon Bedrock validates if all artifacts have been deleted (e.g. policy version, test case, test result) for a policy before deletion. When true , Amazon Bedrock will delete the policy and all its artifacts without validation. Default is false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#force_delete BedrockAutomatedReasoningPolicy#force_delete}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The KMS key with which the Policy's assets will be encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#kms_key_id BedrockAutomatedReasoningPolicy#kms_key_id}

---

##### `PolicyDefinition`<sup>Optional</sup> <a name="PolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.policyDefinition"></a>

```go
PolicyDefinition BedrockAutomatedReasoningPolicyPolicyDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#policy_definition BedrockAutomatedReasoningPolicy#policy_definition}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#tags BedrockAutomatedReasoningPolicy#tags}.

---

### BedrockAutomatedReasoningPolicyPolicyDefinition <a name="BedrockAutomatedReasoningPolicyPolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

&bedrockautomatedreasoningpolicy.BedrockAutomatedReasoningPolicyPolicyDefinition {
	Rules: interface{},
	Types: interface{},
	Variables: interface{},
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.rules">Rules</a></code> | <code>interface{}</code> | The rules definition block of an AutomatedReasoningPolicyDefinition. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.types">Types</a></code> | <code>interface{}</code> | The types definition block of an AutomatedReasoningPolicyDefinition. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.variables">Variables</a></code> | <code>interface{}</code> | The variables definition block of an AutomatedReasoningPolicyDefinition. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.version">Version</a></code> | <code>*string</code> | The policy format version. |

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

The rules definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#rules BedrockAutomatedReasoningPolicy#rules}

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.types"></a>

```go
Types interface{}
```

- *Type:* interface{}

The types definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#types BedrockAutomatedReasoningPolicy#types}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.variables"></a>

```go
Variables interface{}
```

- *Type:* interface{}

The variables definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#variables BedrockAutomatedReasoningPolicy#variables}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.version"></a>

```go
Version *string
```

- *Type:* *string

The policy format version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#version BedrockAutomatedReasoningPolicy#version}

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionRules <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionRules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

&bedrockautomatedreasoningpolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules {
	AlternateExpression: *string,
	Expression: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.alternateExpression">AlternateExpression</a></code> | <code>*string</code> | An alternate expression for this rule. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.expression">Expression</a></code> | <code>*string</code> | The SMT expression for this rule. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.id">Id</a></code> | <code>*string</code> | A unique id within the PolicyDefinition. |

---

##### `AlternateExpression`<sup>Optional</sup> <a name="AlternateExpression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.alternateExpression"></a>

```go
AlternateExpression *string
```

- *Type:* *string

An alternate expression for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#alternate_expression BedrockAutomatedReasoningPolicy#alternate_expression}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The SMT expression for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#expression BedrockAutomatedReasoningPolicy#expression}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.id"></a>

```go
Id *string
```

- *Type:* *string

A unique id within the PolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#id BedrockAutomatedReasoningPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionTypes <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypes" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

&bedrockautomatedreasoningpolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes {
	Description: *string,
	Name: *string,
	Values: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.description">Description</a></code> | <code>*string</code> | A natural language description of this type. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.name">Name</a></code> | <code>*string</code> | A name for this type. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.values">Values</a></code> | <code>interface{}</code> | A list of valid values for this type. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.description"></a>

```go
Description *string
```

- *Type:* *string

A natural language description of this type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name for this type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.values"></a>

```go
Values interface{}
```

- *Type:* interface{}

A list of valid values for this type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#values BedrockAutomatedReasoningPolicy#values}

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

&bedrockautomatedreasoningpolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues {
	Description: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.description">Description</a></code> | <code>*string</code> | A natural language description of the type's value. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.value">Value</a></code> | <code>*string</code> | The value of the type value. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.description"></a>

```go
Description *string
```

- *Type:* *string

A natural language description of the type's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the type value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#value BedrockAutomatedReasoningPolicy#value}

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionVariables <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionVariables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

&bedrockautomatedreasoningpolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables {
	Description: *string,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.description">Description</a></code> | <code>*string</code> | A natural language description of this variable. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.name">Name</a></code> | <code>*string</code> | A name from this variable. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.type">Type</a></code> | <code>*string</code> | A type for this variable. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.description"></a>

```go
Description *string
```

- *Type:* *string

A natural language description of this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name from this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.type"></a>

```go
Type *string
```

- *Type:* *string

A type for this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#type BedrockAutomatedReasoningPolicy#type}

---

### BedrockAutomatedReasoningPolicyTags <a name="BedrockAutomatedReasoningPolicyTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

&bedrockautomatedreasoningpolicy.BedrockAutomatedReasoningPolicyTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.key">Key</a></code> | <code>*string</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.value">Value</a></code> | <code>*string</code> | Tag Value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#key BedrockAutomatedReasoningPolicy#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_automated_reasoning_policy#value BedrockAutomatedReasoningPolicy#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.NewBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putTypes">PutTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putVariables">PutVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetTypes">ResetTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTypes` <a name="PutTypes" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putTypes"></a>

```go
func PutTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVariables` <a name="PutVariables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putVariables"></a>

```go
func PutVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetRules"></a>

```go
func ResetRules()
```

##### `ResetTypes` <a name="ResetTypes" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetTypes"></a>

```go
func ResetTypes()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVariables"></a>

```go
func ResetVariables()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types">Types</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.typesInput">TypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variablesInput">VariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules"></a>

```go
func Rules() BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a>

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types"></a>

```go
func Types() BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables"></a>

```go
func Variables() BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.typesInput"></a>

```go
func TypesInput() interface{}
```

- *Type:* interface{}

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variablesInput"></a>

```go
func VariablesInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.NewBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get"></a>

```go
func Get(index *f64) BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.NewBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetAlternateExpression">ResetAlternateExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlternateExpression` <a name="ResetAlternateExpression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetAlternateExpression"></a>

```go
func ResetAlternateExpression()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpressionInput">AlternateExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression">AlternateExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlternateExpressionInput`<sup>Optional</sup> <a name="AlternateExpressionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpressionInput"></a>

```go
func AlternateExpressionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AlternateExpression`<sup>Required</sup> <a name="AlternateExpression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression"></a>

```go
func AlternateExpression() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.NewBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get"></a>

```go
func Get(index *f64) BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.NewBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.putValues">PutValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValues` <a name="PutValues" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.putValues"></a>

```go
func PutValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.putValues.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values">Values</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values"></a>

```go
func Values() BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.NewBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get"></a>

```go
func Get(index *f64) BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.NewBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.NewBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get"></a>

```go
func Get(index *f64) BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.NewBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAutomatedReasoningPolicyTagsList <a name="BedrockAutomatedReasoningPolicyTagsList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.NewBedrockAutomatedReasoningPolicyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockAutomatedReasoningPolicyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.get"></a>

```go
func Get(index *f64) BedrockAutomatedReasoningPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockAutomatedReasoningPolicyTagsOutputReference <a name="BedrockAutomatedReasoningPolicyTagsOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockautomatedreasoningpolicy"

bedrockautomatedreasoningpolicy.NewBedrockAutomatedReasoningPolicyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockAutomatedReasoningPolicyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



