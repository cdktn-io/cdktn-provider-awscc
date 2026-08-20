# `bedrockagentcoreHarness` Submodule <a name="`bedrockagentcoreHarness` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreHarness"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreHarness <a name="BedrockagentcoreHarness" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness awscc_bedrockagentcore_harness}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarness(scope Construct, id *string, config BedrockagentcoreHarnessConfig) BedrockagentcoreHarness
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig">BedrockagentcoreHarnessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig">BedrockagentcoreHarnessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putAuthorizerConfiguration">PutAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironmentArtifact">PutEnvironmentArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putMemory">PutMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putModel">PutModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSkills">PutSkills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSystemPrompt">PutSystemPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTools">PutTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTruncation">PutTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetAllowedTools">ResetAllowedTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetAuthorizerConfiguration">ResetAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironmentArtifact">ResetEnvironmentArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMaxIterations">ResetMaxIterations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMaxTokens">ResetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetSkills">ResetSkills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetSystemPrompt">ResetSystemPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTools">ResetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTruncation">ResetTruncation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorizerConfiguration` <a name="PutAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putAuthorizerConfiguration"></a>

```go
func PutAuthorizerConfiguration(value BedrockagentcoreHarnessAuthorizerConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a>

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironment"></a>

```go
func PutEnvironment(value BedrockagentcoreHarnessEnvironment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a>

---

##### `PutEnvironmentArtifact` <a name="PutEnvironmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironmentArtifact"></a>

```go
func PutEnvironmentArtifact(value BedrockagentcoreHarnessEnvironmentArtifact)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putEnvironmentArtifact.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a>

---

##### `PutMemory` <a name="PutMemory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putMemory"></a>

```go
func PutMemory(value BedrockagentcoreHarnessMemory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putMemory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a>

---

##### `PutModel` <a name="PutModel" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putModel"></a>

```go
func PutModel(value BedrockagentcoreHarnessModel)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a>

---

##### `PutSkills` <a name="PutSkills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSkills"></a>

```go
func PutSkills(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSkills.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSystemPrompt` <a name="PutSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSystemPrompt"></a>

```go
func PutSystemPrompt(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putSystemPrompt.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTools` <a name="PutTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTools"></a>

```go
func PutTools(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTools.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTruncation` <a name="PutTruncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTruncation"></a>

```go
func PutTruncation(value BedrockagentcoreHarnessTruncation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.putTruncation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a>

---

##### `ResetAllowedTools` <a name="ResetAllowedTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetAllowedTools"></a>

```go
func ResetAllowedTools()
```

##### `ResetAuthorizerConfiguration` <a name="ResetAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetAuthorizerConfiguration"></a>

```go
func ResetAuthorizerConfiguration()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetEnvironmentArtifact` <a name="ResetEnvironmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironmentArtifact"></a>

```go
func ResetEnvironmentArtifact()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetMaxIterations` <a name="ResetMaxIterations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMaxIterations"></a>

```go
func ResetMaxIterations()
```

##### `ResetMaxTokens` <a name="ResetMaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMaxTokens"></a>

```go
func ResetMaxTokens()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetSkills` <a name="ResetSkills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetSkills"></a>

```go
func ResetSkills()
```

##### `ResetSystemPrompt` <a name="ResetSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetSystemPrompt"></a>

```go
func ResetSystemPrompt()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```

##### `ResetTools` <a name="ResetTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTools"></a>

```go
func ResetTools()
```

##### `ResetTruncation` <a name="ResetTruncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.resetTruncation"></a>

```go
func ResetTruncation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreHarness resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.BedrockagentcoreHarness_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.BedrockagentcoreHarness_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.BedrockagentcoreHarness_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.BedrockagentcoreHarness_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockagentcoreHarness resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentcoreHarness to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentcoreHarness that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreHarness to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference">BedrockagentcoreHarnessEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentArtifact">EnvironmentArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference">BedrockagentcoreHarnessEnvironmentArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessId">HarnessId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.memory">Memory</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference">BedrockagentcoreHarnessMemoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.model">Model</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference">BedrockagentcoreHarnessModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.skills">Skills</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList">BedrockagentcoreHarnessSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.systemPrompt">SystemPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList">BedrockagentcoreHarnessSystemPromptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList">BedrockagentcoreHarnessTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tools">Tools</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList">BedrockagentcoreHarnessToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.truncation">Truncation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference">BedrockagentcoreHarnessTruncationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.allowedToolsInput">AllowedToolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.authorizerConfigurationInput">AuthorizerConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentArtifactInput">EnvironmentArtifactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentInput">EnvironmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessNameInput">HarnessNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxIterationsInput">MaxIterationsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxTokensInput">MaxTokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.memoryInput">MemoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.modelInput">ModelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.skillsInput">SkillsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.systemPromptInput">SystemPromptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.toolsInput">ToolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.truncationInput">TruncationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.allowedTools">AllowedTools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessName">HarnessName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxIterations">MaxIterations</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AuthorizerConfiguration`<sup>Required</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.authorizerConfiguration"></a>

```go
func AuthorizerConfiguration() BedrockagentcoreHarnessAuthorizerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environment"></a>

```go
func Environment() BedrockagentcoreHarnessEnvironmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference">BedrockagentcoreHarnessEnvironmentOutputReference</a>

---

##### `EnvironmentArtifact`<sup>Required</sup> <a name="EnvironmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentArtifact"></a>

```go
func EnvironmentArtifact() BedrockagentcoreHarnessEnvironmentArtifactOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference">BedrockagentcoreHarnessEnvironmentArtifactOutputReference</a>

---

##### `HarnessId`<sup>Required</sup> <a name="HarnessId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessId"></a>

```go
func HarnessId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.memory"></a>

```go
func Memory() BedrockagentcoreHarnessMemoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference">BedrockagentcoreHarnessMemoryOutputReference</a>

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.model"></a>

```go
func Model() BedrockagentcoreHarnessModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference">BedrockagentcoreHarnessModelOutputReference</a>

---

##### `Skills`<sup>Required</sup> <a name="Skills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.skills"></a>

```go
func Skills() BedrockagentcoreHarnessSkillsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList">BedrockagentcoreHarnessSkillsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SystemPrompt`<sup>Required</sup> <a name="SystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.systemPrompt"></a>

```go
func SystemPrompt() BedrockagentcoreHarnessSystemPromptList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList">BedrockagentcoreHarnessSystemPromptList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tags"></a>

```go
func Tags() BedrockagentcoreHarnessTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList">BedrockagentcoreHarnessTagsList</a>

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tools"></a>

```go
func Tools() BedrockagentcoreHarnessToolsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList">BedrockagentcoreHarnessToolsList</a>

---

##### `Truncation`<sup>Required</sup> <a name="Truncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.truncation"></a>

```go
func Truncation() BedrockagentcoreHarnessTruncationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference">BedrockagentcoreHarnessTruncationOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AllowedToolsInput`<sup>Optional</sup> <a name="AllowedToolsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.allowedToolsInput"></a>

```go
func AllowedToolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizerConfigurationInput`<sup>Optional</sup> <a name="AuthorizerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.authorizerConfigurationInput"></a>

```go
func AuthorizerConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentArtifactInput`<sup>Optional</sup> <a name="EnvironmentArtifactInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentArtifactInput"></a>

```go
func EnvironmentArtifactInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentInput"></a>

```go
func EnvironmentInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `HarnessNameInput`<sup>Optional</sup> <a name="HarnessNameInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessNameInput"></a>

```go
func HarnessNameInput() *string
```

- *Type:* *string

---

##### `MaxIterationsInput`<sup>Optional</sup> <a name="MaxIterationsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxIterationsInput"></a>

```go
func MaxIterationsInput() *f64
```

- *Type:* *f64

---

##### `MaxTokensInput`<sup>Optional</sup> <a name="MaxTokensInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxTokensInput"></a>

```go
func MaxTokensInput() *f64
```

- *Type:* *f64

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.memoryInput"></a>

```go
func MemoryInput() interface{}
```

- *Type:* interface{}

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.modelInput"></a>

```go
func ModelInput() interface{}
```

- *Type:* interface{}

---

##### `SkillsInput`<sup>Optional</sup> <a name="SkillsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.skillsInput"></a>

```go
func SkillsInput() interface{}
```

- *Type:* interface{}

---

##### `SystemPromptInput`<sup>Optional</sup> <a name="SystemPromptInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.systemPromptInput"></a>

```go
func SystemPromptInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.toolsInput"></a>

```go
func ToolsInput() interface{}
```

- *Type:* interface{}

---

##### `TruncationInput`<sup>Optional</sup> <a name="TruncationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.truncationInput"></a>

```go
func TruncationInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedTools`<sup>Required</sup> <a name="AllowedTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.allowedTools"></a>

```go
func AllowedTools() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `HarnessName`<sup>Required</sup> <a name="HarnessName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.harnessName"></a>

```go
func HarnessName() *string
```

- *Type:* *string

---

##### `MaxIterations`<sup>Required</sup> <a name="MaxIterations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxIterations"></a>

```go
func MaxIterations() *f64
```

- *Type:* *f64

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.maxTokens"></a>

```go
func MaxTokens() *f64
```

- *Type:* *f64

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarness.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreHarnessAuthorizerConfiguration <a name="BedrockagentcoreHarnessAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessAuthorizerConfiguration {
	CustomJwtAuthorizer: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#custom_jwt_authorizer BedrockagentcoreHarness#custom_jwt_authorizer}. |

---

##### `CustomJwtAuthorizer`<sup>Optional</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```go
CustomJwtAuthorizer BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#custom_jwt_authorizer BedrockagentcoreHarness#custom_jwt_authorizer}.

---

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer {
	AllowedAudience: *[]*string,
	AllowedClients: *[]*string,
	AllowedScopes: *[]*string,
	CustomClaims: interface{},
	DiscoveryUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">AllowedAudience</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#allowed_audience BedrockagentcoreHarness#allowed_audience}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">AllowedClients</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#allowed_clients BedrockagentcoreHarness#allowed_clients}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes">AllowedScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#allowed_scopes BedrockagentcoreHarness#allowed_scopes}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims">CustomClaims</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#custom_claims BedrockagentcoreHarness#custom_claims}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">DiscoveryUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#discovery_url BedrockagentcoreHarness#discovery_url}. |

---

##### `AllowedAudience`<sup>Optional</sup> <a name="AllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```go
AllowedAudience *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#allowed_audience BedrockagentcoreHarness#allowed_audience}.

---

##### `AllowedClients`<sup>Optional</sup> <a name="AllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```go
AllowedClients *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#allowed_clients BedrockagentcoreHarness#allowed_clients}.

---

##### `AllowedScopes`<sup>Optional</sup> <a name="AllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes"></a>

```go
AllowedScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#allowed_scopes BedrockagentcoreHarness#allowed_scopes}.

---

##### `CustomClaims`<sup>Optional</sup> <a name="CustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims"></a>

```go
CustomClaims interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#custom_claims BedrockagentcoreHarness#custom_claims}.

---

##### `DiscoveryUrl`<sup>Optional</sup> <a name="DiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```go
DiscoveryUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#discovery_url BedrockagentcoreHarness#discovery_url}.

---

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims {
	AuthorizingClaimMatchValue: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue,
	InboundTokenClaimName: *string,
	InboundTokenClaimValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#authorizing_claim_match_value BedrockagentcoreHarness#authorizing_claim_match_value}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_name BedrockagentcoreHarness#inbound_token_claim_name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_value_type BedrockagentcoreHarness#inbound_token_claim_value_type}. |

---

##### `AuthorizingClaimMatchValue`<sup>Optional</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue"></a>

```go
AuthorizingClaimMatchValue BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#authorizing_claim_match_value BedrockagentcoreHarness#authorizing_claim_match_value}.

---

##### `InboundTokenClaimName`<sup>Optional</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName"></a>

```go
InboundTokenClaimName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_name BedrockagentcoreHarness#inbound_token_claim_name}.

---

##### `InboundTokenClaimValueType`<sup>Optional</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType"></a>

```go
InboundTokenClaimValueType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#inbound_token_claim_value_type BedrockagentcoreHarness#inbound_token_claim_value_type}.

---

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue {
	ClaimMatchOperator: *string,
	ClaimMatchValue: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#claim_match_operator BedrockagentcoreHarness#claim_match_operator}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue">ClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#claim_match_value BedrockagentcoreHarness#claim_match_value}. |

---

##### `ClaimMatchOperator`<sup>Optional</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator"></a>

```go
ClaimMatchOperator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#claim_match_operator BedrockagentcoreHarness#claim_match_operator}.

---

##### `ClaimMatchValue`<sup>Optional</sup> <a name="ClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue"></a>

```go
ClaimMatchValue BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#claim_match_value BedrockagentcoreHarness#claim_match_value}.

---

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue {
	MatchValueString: *string,
	MatchValueStringList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString">MatchValueString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#match_value_string BedrockagentcoreHarness#match_value_string}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList">MatchValueStringList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#match_value_string_list BedrockagentcoreHarness#match_value_string_list}. |

---

##### `MatchValueString`<sup>Optional</sup> <a name="MatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString"></a>

```go
MatchValueString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#match_value_string BedrockagentcoreHarness#match_value_string}.

---

##### `MatchValueStringList`<sup>Optional</sup> <a name="MatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList"></a>

```go
MatchValueStringList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#match_value_string_list BedrockagentcoreHarness#match_value_string_list}.

---

### BedrockagentcoreHarnessConfig <a name="BedrockagentcoreHarnessConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExecutionRoleArn: *string,
	HarnessName: *string,
	Model: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel,
	AllowedTools: *[]*string,
	AuthorizerConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration,
	Environment: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment,
	EnvironmentArtifact: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact,
	EnvironmentVariables: *map[string]*string,
	MaxIterations: *f64,
	MaxTokens: *f64,
	Memory: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory,
	Skills: interface{},
	SystemPrompt: interface{},
	Tags: interface{},
	TimeoutSeconds: *f64,
	Tools: interface{},
	Truncation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that the harness assumes when running. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.harnessName">HarnessName</a></code> | <code>*string</code> | The name of the harness. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.model">Model</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a></code> | The model configuration for the harness. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.allowedTools">AllowedTools</a></code> | <code>*[]*string</code> | The tools that the agent is allowed to use. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a></code> | The inbound authorization configuration for authenticating incoming requests. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a></code> | The compute environment configuration for the harness, including underlying runtime information. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environmentArtifact">EnvironmentArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a></code> | The environment artifact for the harness, such as a custom container image. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | Environment variables to set in the harness runtime environment. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.maxIterations">MaxIterations</a></code> | <code>*f64</code> | The maximum number of iterations the agent loop can execute per invocation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | The maximum number of tokens the agent can generate per iteration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.memory">Memory</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a></code> | The AgentCore Memory configuration for persisting conversation context. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.skills">Skills</a></code> | <code>interface{}</code> | The skills available to the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.systemPrompt">SystemPrompt</a></code> | <code>interface{}</code> | The system prompt that defines the agent's behavior. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to apply to the harness resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | The maximum duration in seconds for the agent loop execution per invocation. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.tools">Tools</a></code> | <code>interface{}</code> | The tools available to the agent. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.truncation">Truncation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a></code> | The truncation configuration for managing conversation context. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

The ARN of the IAM role that the harness assumes when running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#execution_role_arn BedrockagentcoreHarness#execution_role_arn}

---

##### `HarnessName`<sup>Required</sup> <a name="HarnessName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.harnessName"></a>

```go
HarnessName *string
```

- *Type:* *string

The name of the harness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#harness_name BedrockagentcoreHarness#harness_name}

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.model"></a>

```go
Model BedrockagentcoreHarnessModel
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel">BedrockagentcoreHarnessModel</a>

The model configuration for the harness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#model BedrockagentcoreHarness#model}

---

##### `AllowedTools`<sup>Optional</sup> <a name="AllowedTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.allowedTools"></a>

```go
AllowedTools *[]*string
```

- *Type:* *[]*string

The tools that the agent is allowed to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#allowed_tools BedrockagentcoreHarness#allowed_tools}

---

##### `AuthorizerConfiguration`<sup>Optional</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.authorizerConfiguration"></a>

```go
AuthorizerConfiguration BedrockagentcoreHarnessAuthorizerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfiguration">BedrockagentcoreHarnessAuthorizerConfiguration</a>

The inbound authorization configuration for authenticating incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#authorizer_configuration BedrockagentcoreHarness#authorizer_configuration}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environment"></a>

```go
Environment BedrockagentcoreHarnessEnvironment
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment">BedrockagentcoreHarnessEnvironment</a>

The compute environment configuration for the harness, including underlying runtime information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#environment BedrockagentcoreHarness#environment}

---

##### `EnvironmentArtifact`<sup>Optional</sup> <a name="EnvironmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environmentArtifact"></a>

```go
EnvironmentArtifact BedrockagentcoreHarnessEnvironmentArtifact
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact">BedrockagentcoreHarnessEnvironmentArtifact</a>

The environment artifact for the harness, such as a custom container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#environment_artifact BedrockagentcoreHarness#environment_artifact}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Environment variables to set in the harness runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#environment_variables BedrockagentcoreHarness#environment_variables}

---

##### `MaxIterations`<sup>Optional</sup> <a name="MaxIterations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.maxIterations"></a>

```go
MaxIterations *f64
```

- *Type:* *f64

The maximum number of iterations the agent loop can execute per invocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#max_iterations BedrockagentcoreHarness#max_iterations}

---

##### `MaxTokens`<sup>Optional</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.maxTokens"></a>

```go
MaxTokens *f64
```

- *Type:* *f64

The maximum number of tokens the agent can generate per iteration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.memory"></a>

```go
Memory BedrockagentcoreHarnessMemory
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory">BedrockagentcoreHarnessMemory</a>

The AgentCore Memory configuration for persisting conversation context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#memory BedrockagentcoreHarness#memory}

---

##### `Skills`<sup>Optional</sup> <a name="Skills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.skills"></a>

```go
Skills interface{}
```

- *Type:* interface{}

The skills available to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#skills BedrockagentcoreHarness#skills}

---

##### `SystemPrompt`<sup>Optional</sup> <a name="SystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.systemPrompt"></a>

```go
SystemPrompt interface{}
```

- *Type:* interface{}

The system prompt that defines the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#system_prompt BedrockagentcoreHarness#system_prompt}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to apply to the harness resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#tags BedrockagentcoreHarness#tags}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

The maximum duration in seconds for the agent loop execution per invocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#timeout_seconds BedrockagentcoreHarness#timeout_seconds}

---

##### `Tools`<sup>Optional</sup> <a name="Tools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.tools"></a>

```go
Tools interface{}
```

- *Type:* interface{}

The tools available to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#tools BedrockagentcoreHarness#tools}

---

##### `Truncation`<sup>Optional</sup> <a name="Truncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessConfig.property.truncation"></a>

```go
Truncation BedrockagentcoreHarnessTruncation
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation">BedrockagentcoreHarnessTruncation</a>

The truncation configuration for managing conversation context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#truncation BedrockagentcoreHarness#truncation}

---

### BedrockagentcoreHarnessEnvironment <a name="BedrockagentcoreHarnessEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessEnvironment {
	AgentCoreRuntimeEnvironment: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment.property.agentCoreRuntimeEnvironment">AgentCoreRuntimeEnvironment</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#agent_core_runtime_environment BedrockagentcoreHarness#agent_core_runtime_environment}. |

---

##### `AgentCoreRuntimeEnvironment`<sup>Optional</sup> <a name="AgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironment.property.agentCoreRuntimeEnvironment"></a>

```go
AgentCoreRuntimeEnvironment BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#agent_core_runtime_environment BedrockagentcoreHarness#agent_core_runtime_environment}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment {
	FilesystemConfigurations: interface{},
	LifecycleConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration,
	NetworkConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.filesystemConfigurations">FilesystemConfigurations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#filesystem_configurations BedrockagentcoreHarness#filesystem_configurations}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#lifecycle_configuration BedrockagentcoreHarness#lifecycle_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#network_configuration BedrockagentcoreHarness#network_configuration}. |

---

##### `FilesystemConfigurations`<sup>Optional</sup> <a name="FilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.filesystemConfigurations"></a>

```go
FilesystemConfigurations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#filesystem_configurations BedrockagentcoreHarness#filesystem_configurations}.

---

##### `LifecycleConfiguration`<sup>Optional</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.lifecycleConfiguration"></a>

```go
LifecycleConfiguration BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#lifecycle_configuration BedrockagentcoreHarness#lifecycle_configuration}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.property.networkConfiguration"></a>

```go
NetworkConfiguration BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#network_configuration BedrockagentcoreHarness#network_configuration}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations {
	SessionStorage: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations.property.sessionStorage">SessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#session_storage BedrockagentcoreHarness#session_storage}. |

---

##### `SessionStorage`<sup>Optional</sup> <a name="SessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations.property.sessionStorage"></a>

```go
SessionStorage BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#session_storage BedrockagentcoreHarness#session_storage}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage {
	MountPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage.property.mountPath">MountPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#mount_path BedrockagentcoreHarness#mount_path}. |

---

##### `MountPath`<sup>Optional</sup> <a name="MountPath" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#mount_path BedrockagentcoreHarness#mount_path}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration {
	IdleRuntimeSessionTimeout: *f64,
	MaxLifetime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.property.idleRuntimeSessionTimeout">IdleRuntimeSessionTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#idle_runtime_session_timeout BedrockagentcoreHarness#idle_runtime_session_timeout}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.property.maxLifetime">MaxLifetime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#max_lifetime BedrockagentcoreHarness#max_lifetime}. |

---

##### `IdleRuntimeSessionTimeout`<sup>Optional</sup> <a name="IdleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.property.idleRuntimeSessionTimeout"></a>

```go
IdleRuntimeSessionTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#idle_runtime_session_timeout BedrockagentcoreHarness#idle_runtime_session_timeout}.

---

##### `MaxLifetime`<sup>Optional</sup> <a name="MaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.property.maxLifetime"></a>

```go
MaxLifetime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#max_lifetime BedrockagentcoreHarness#max_lifetime}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration {
	NetworkMode: *string,
	NetworkModeConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.property.networkMode">NetworkMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#network_mode BedrockagentcoreHarness#network_mode}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.property.networkModeConfig">NetworkModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#network_mode_config BedrockagentcoreHarness#network_mode_config}. |

---

##### `NetworkMode`<sup>Optional</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.property.networkMode"></a>

```go
NetworkMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#network_mode BedrockagentcoreHarness#network_mode}.

---

##### `NetworkModeConfig`<sup>Optional</sup> <a name="NetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.property.networkModeConfig"></a>

```go
NetworkModeConfig BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#network_mode_config BedrockagentcoreHarness#network_mode_config}.

---

### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig {
	SecurityGroups: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#security_groups BedrockagentcoreHarness#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#subnets BedrockagentcoreHarness#subnets}. |

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#security_groups BedrockagentcoreHarness#security_groups}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#subnets BedrockagentcoreHarness#subnets}.

---

### BedrockagentcoreHarnessEnvironmentArtifact <a name="BedrockagentcoreHarnessEnvironmentArtifact" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessEnvironmentArtifact {
	ContainerConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#container_configuration BedrockagentcoreHarness#container_configuration}. |

---

##### `ContainerConfiguration`<sup>Optional</sup> <a name="ContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifact.property.containerConfiguration"></a>

```go
ContainerConfiguration BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#container_configuration BedrockagentcoreHarness#container_configuration}.

---

### BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration <a name="BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration {
	ContainerUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration.property.containerUri">ContainerUri</a></code> | <code>*string</code> | The ECR URI of the container. |

---

##### `ContainerUri`<sup>Optional</sup> <a name="ContainerUri" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration.property.containerUri"></a>

```go
ContainerUri *string
```

- *Type:* *string

The ECR URI of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#container_uri BedrockagentcoreHarness#container_uri}

---

### BedrockagentcoreHarnessMemory <a name="BedrockagentcoreHarnessMemory" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessMemory {
	AgentCoreMemoryConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory.property.agentCoreMemoryConfiguration">AgentCoreMemoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#agent_core_memory_configuration BedrockagentcoreHarness#agent_core_memory_configuration}. |

---

##### `AgentCoreMemoryConfiguration`<sup>Optional</sup> <a name="AgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemory.property.agentCoreMemoryConfiguration"></a>

```go
AgentCoreMemoryConfiguration BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#agent_core_memory_configuration BedrockagentcoreHarness#agent_core_memory_configuration}.

---

### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration {
	ActorId: *string,
	Arn: *string,
	MessagesCount: *f64,
	RetrievalConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.actorId">ActorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#actor_id BedrockagentcoreHarness#actor_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#arn BedrockagentcoreHarness#arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.messagesCount">MessagesCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.retrievalConfig">RetrievalConfig</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#retrieval_config BedrockagentcoreHarness#retrieval_config}. |

---

##### `ActorId`<sup>Optional</sup> <a name="ActorId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.actorId"></a>

```go
ActorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#actor_id BedrockagentcoreHarness#actor_id}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#arn BedrockagentcoreHarness#arn}.

---

##### `MessagesCount`<sup>Optional</sup> <a name="MessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.messagesCount"></a>

```go
MessagesCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}.

---

##### `RetrievalConfig`<sup>Optional</sup> <a name="RetrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.property.retrievalConfig"></a>

```go
RetrievalConfig interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#retrieval_config BedrockagentcoreHarness#retrieval_config}.

---

### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig {
	RelevanceScore: *f64,
	StrategyId: *string,
	TopK: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.relevanceScore">RelevanceScore</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#relevance_score BedrockagentcoreHarness#relevance_score}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.strategyId">StrategyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#strategy_id BedrockagentcoreHarness#strategy_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.topK">TopK</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}. |

---

##### `RelevanceScore`<sup>Optional</sup> <a name="RelevanceScore" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.relevanceScore"></a>

```go
RelevanceScore *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#relevance_score BedrockagentcoreHarness#relevance_score}.

---

##### `StrategyId`<sup>Optional</sup> <a name="StrategyId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.strategyId"></a>

```go
StrategyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#strategy_id BedrockagentcoreHarness#strategy_id}.

---

##### `TopK`<sup>Optional</sup> <a name="TopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.property.topK"></a>

```go
TopK *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}.

---

### BedrockagentcoreHarnessModel <a name="BedrockagentcoreHarnessModel" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessModel {
	BedrockModelConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig,
	GeminiModelConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig,
	OpenAiModelConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.bedrockModelConfig">BedrockModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#bedrock_model_config BedrockagentcoreHarness#bedrock_model_config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.geminiModelConfig">GeminiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#gemini_model_config BedrockagentcoreHarness#gemini_model_config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.openAiModelConfig">OpenAiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#open_ai_model_config BedrockagentcoreHarness#open_ai_model_config}. |

---

##### `BedrockModelConfig`<sup>Optional</sup> <a name="BedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.bedrockModelConfig"></a>

```go
BedrockModelConfig BedrockagentcoreHarnessModelBedrockModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#bedrock_model_config BedrockagentcoreHarness#bedrock_model_config}.

---

##### `GeminiModelConfig`<sup>Optional</sup> <a name="GeminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.geminiModelConfig"></a>

```go
GeminiModelConfig BedrockagentcoreHarnessModelGeminiModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#gemini_model_config BedrockagentcoreHarness#gemini_model_config}.

---

##### `OpenAiModelConfig`<sup>Optional</sup> <a name="OpenAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModel.property.openAiModelConfig"></a>

```go
OpenAiModelConfig BedrockagentcoreHarnessModelOpenAiModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#open_ai_model_config BedrockagentcoreHarness#open_ai_model_config}.

---

### BedrockagentcoreHarnessModelBedrockModelConfig <a name="BedrockagentcoreHarnessModelBedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessModelBedrockModelConfig {
	MaxTokens: *f64,
	ModelId: *string,
	Temperature: *f64,
	TopP: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.modelId">ModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.temperature">Temperature</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.topP">TopP</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}. |

---

##### `MaxTokens`<sup>Optional</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.maxTokens"></a>

```go
MaxTokens *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}.

---

##### `ModelId`<sup>Optional</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}.

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}.

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig.property.topP"></a>

```go
TopP *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}.

---

### BedrockagentcoreHarnessModelGeminiModelConfig <a name="BedrockagentcoreHarnessModelGeminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessModelGeminiModelConfig {
	ApiKeyArn: *string,
	MaxTokens: *f64,
	ModelId: *string,
	Temperature: *f64,
	TopK: *f64,
	TopP: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.apiKeyArn">ApiKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.modelId">ModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.temperature">Temperature</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.topK">TopK</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.topP">TopP</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}. |

---

##### `ApiKeyArn`<sup>Optional</sup> <a name="ApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.apiKeyArn"></a>

```go
ApiKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}.

---

##### `MaxTokens`<sup>Optional</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.maxTokens"></a>

```go
MaxTokens *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}.

---

##### `ModelId`<sup>Optional</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}.

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}.

---

##### `TopK`<sup>Optional</sup> <a name="TopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.topK"></a>

```go
TopK *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#top_k BedrockagentcoreHarness#top_k}.

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig.property.topP"></a>

```go
TopP *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}.

---

### BedrockagentcoreHarnessModelOpenAiModelConfig <a name="BedrockagentcoreHarnessModelOpenAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessModelOpenAiModelConfig {
	ApiKeyArn: *string,
	MaxTokens: *f64,
	ModelId: *string,
	Temperature: *f64,
	TopP: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.apiKeyArn">ApiKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.modelId">ModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.temperature">Temperature</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.topP">TopP</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}. |

---

##### `ApiKeyArn`<sup>Optional</sup> <a name="ApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.apiKeyArn"></a>

```go
ApiKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#api_key_arn BedrockagentcoreHarness#api_key_arn}.

---

##### `MaxTokens`<sup>Optional</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.maxTokens"></a>

```go
MaxTokens *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#max_tokens BedrockagentcoreHarness#max_tokens}.

---

##### `ModelId`<sup>Optional</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#model_id BedrockagentcoreHarness#model_id}.

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#temperature BedrockagentcoreHarness#temperature}.

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig.property.topP"></a>

```go
TopP *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#top_p BedrockagentcoreHarness#top_p}.

---

### BedrockagentcoreHarnessSkills <a name="BedrockagentcoreHarnessSkills" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessSkills {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills.property.path">Path</a></code> | <code>*string</code> | The filesystem path to the skill definition. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkills.property.path"></a>

```go
Path *string
```

- *Type:* *string

The filesystem path to the skill definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#path BedrockagentcoreHarness#path}

---

### BedrockagentcoreHarnessSystemPrompt <a name="BedrockagentcoreHarnessSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessSystemPrompt {
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt.property.text">Text</a></code> | <code>*string</code> | The text content of the system prompt block. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPrompt.property.text"></a>

```go
Text *string
```

- *Type:* *string

The text content of the system prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#text BedrockagentcoreHarness#text}

---

### BedrockagentcoreHarnessTags <a name="BedrockagentcoreHarnessTags" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#key BedrockagentcoreHarness#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#value BedrockagentcoreHarness#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#key BedrockagentcoreHarness#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#value BedrockagentcoreHarness#value}.

---

### BedrockagentcoreHarnessTools <a name="BedrockagentcoreHarnessTools" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessTools {
	Config: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#name BedrockagentcoreHarness#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#type BedrockagentcoreHarness#type}. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.config"></a>

```go
Config BedrockagentcoreHarnessToolsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#name BedrockagentcoreHarness#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTools.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#type BedrockagentcoreHarness#type}.

---

### BedrockagentcoreHarnessToolsConfig <a name="BedrockagentcoreHarnessToolsConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessToolsConfig {
	AgentCoreBrowser: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser,
	AgentCoreCodeInterpreter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter,
	AgentCoreGateway: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway,
	InlineFunction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction,
	RemoteMcp: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreBrowser">AgentCoreBrowser</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#agent_core_browser BedrockagentcoreHarness#agent_core_browser}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreCodeInterpreter">AgentCoreCodeInterpreter</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#agent_core_code_interpreter BedrockagentcoreHarness#agent_core_code_interpreter}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreGateway">AgentCoreGateway</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#agent_core_gateway BedrockagentcoreHarness#agent_core_gateway}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.inlineFunction">InlineFunction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#inline_function BedrockagentcoreHarness#inline_function}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.remoteMcp">RemoteMcp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#remote_mcp BedrockagentcoreHarness#remote_mcp}. |

---

##### `AgentCoreBrowser`<sup>Optional</sup> <a name="AgentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreBrowser"></a>

```go
AgentCoreBrowser BedrockagentcoreHarnessToolsConfigAgentCoreBrowser
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#agent_core_browser BedrockagentcoreHarness#agent_core_browser}.

---

##### `AgentCoreCodeInterpreter`<sup>Optional</sup> <a name="AgentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreCodeInterpreter"></a>

```go
AgentCoreCodeInterpreter BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#agent_core_code_interpreter BedrockagentcoreHarness#agent_core_code_interpreter}.

---

##### `AgentCoreGateway`<sup>Optional</sup> <a name="AgentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.agentCoreGateway"></a>

```go
AgentCoreGateway BedrockagentcoreHarnessToolsConfigAgentCoreGateway
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#agent_core_gateway BedrockagentcoreHarness#agent_core_gateway}.

---

##### `InlineFunction`<sup>Optional</sup> <a name="InlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.inlineFunction"></a>

```go
InlineFunction BedrockagentcoreHarnessToolsConfigInlineFunction
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#inline_function BedrockagentcoreHarness#inline_function}.

---

##### `RemoteMcp`<sup>Optional</sup> <a name="RemoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig.property.remoteMcp"></a>

```go
RemoteMcp BedrockagentcoreHarnessToolsConfigRemoteMcp
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#remote_mcp BedrockagentcoreHarness#remote_mcp}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreBrowser <a name="BedrockagentcoreHarnessToolsConfigAgentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser {
	BrowserArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser.property.browserArn">BrowserArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#browser_arn BedrockagentcoreHarness#browser_arn}. |

---

##### `BrowserArn`<sup>Optional</sup> <a name="BrowserArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser.property.browserArn"></a>

```go
BrowserArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#browser_arn BedrockagentcoreHarness#browser_arn}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter <a name="BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter {
	CodeInterpreterArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter.property.codeInterpreterArn">CodeInterpreterArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#code_interpreter_arn BedrockagentcoreHarness#code_interpreter_arn}. |

---

##### `CodeInterpreterArn`<sup>Optional</sup> <a name="CodeInterpreterArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter.property.codeInterpreterArn"></a>

```go
CodeInterpreterArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#code_interpreter_arn BedrockagentcoreHarness#code_interpreter_arn}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreGateway <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway {
	GatewayArn: *string,
	OutboundAuth: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#gateway_arn BedrockagentcoreHarness#gateway_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.property.outboundAuth">OutboundAuth</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#outbound_auth BedrockagentcoreHarness#outbound_auth}. |

---

##### `GatewayArn`<sup>Optional</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.property.gatewayArn"></a>

```go
GatewayArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#gateway_arn BedrockagentcoreHarness#gateway_arn}.

---

##### `OutboundAuth`<sup>Optional</sup> <a name="OutboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway.property.outboundAuth"></a>

```go
OutboundAuth BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#outbound_auth BedrockagentcoreHarness#outbound_auth}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth {
	AwsIam: *string,
	None: *string,
	Oauth: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.awsIam">AwsIam</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#aws_iam BedrockagentcoreHarness#aws_iam}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.none">None</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#none BedrockagentcoreHarness#none}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.oauth">Oauth</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#oauth BedrockagentcoreHarness#oauth}. |

---

##### `AwsIam`<sup>Optional</sup> <a name="AwsIam" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.awsIam"></a>

```go
AwsIam *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#aws_iam BedrockagentcoreHarness#aws_iam}.

---

##### `None`<sup>Optional</sup> <a name="None" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.none"></a>

```go
None *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#none BedrockagentcoreHarness#none}.

---

##### `Oauth`<sup>Optional</sup> <a name="Oauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.property.oauth"></a>

```go
Oauth BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#oauth BedrockagentcoreHarness#oauth}.

---

### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth {
	CustomParameters: *map[string]*string,
	DefaultReturnUrl: *string,
	GrantType: *string,
	ProviderArn: *string,
	Scopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.customParameters">CustomParameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#custom_parameters BedrockagentcoreHarness#custom_parameters}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.defaultReturnUrl">DefaultReturnUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#default_return_url BedrockagentcoreHarness#default_return_url}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.grantType">GrantType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#grant_type BedrockagentcoreHarness#grant_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.providerArn">ProviderArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#provider_arn BedrockagentcoreHarness#provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#scopes BedrockagentcoreHarness#scopes}. |

---

##### `CustomParameters`<sup>Optional</sup> <a name="CustomParameters" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.customParameters"></a>

```go
CustomParameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#custom_parameters BedrockagentcoreHarness#custom_parameters}.

---

##### `DefaultReturnUrl`<sup>Optional</sup> <a name="DefaultReturnUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.defaultReturnUrl"></a>

```go
DefaultReturnUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#default_return_url BedrockagentcoreHarness#default_return_url}.

---

##### `GrantType`<sup>Optional</sup> <a name="GrantType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.grantType"></a>

```go
GrantType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#grant_type BedrockagentcoreHarness#grant_type}.

---

##### `ProviderArn`<sup>Optional</sup> <a name="ProviderArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.providerArn"></a>

```go
ProviderArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#provider_arn BedrockagentcoreHarness#provider_arn}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#scopes BedrockagentcoreHarness#scopes}.

---

### BedrockagentcoreHarnessToolsConfigInlineFunction <a name="BedrockagentcoreHarnessToolsConfigInlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessToolsConfigInlineFunction {
	Description: *string,
	InputSchema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#description BedrockagentcoreHarness#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.property.inputSchema">InputSchema</a></code> | <code>*string</code> | JSON Schema describing the tool's input parameters. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#description BedrockagentcoreHarness#description}.

---

##### `InputSchema`<sup>Optional</sup> <a name="InputSchema" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction.property.inputSchema"></a>

```go
InputSchema *string
```

- *Type:* *string

JSON Schema describing the tool's input parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#input_schema BedrockagentcoreHarness#input_schema}

---

### BedrockagentcoreHarnessToolsConfigRemoteMcp <a name="BedrockagentcoreHarnessToolsConfigRemoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessToolsConfigRemoteMcp {
	Headers: *map[string]*string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.property.headers">Headers</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#headers BedrockagentcoreHarness#headers}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#url BedrockagentcoreHarness#url}. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#headers BedrockagentcoreHarness#headers}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#url BedrockagentcoreHarness#url}.

---

### BedrockagentcoreHarnessTruncation <a name="BedrockagentcoreHarnessTruncation" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessTruncation {
	Config: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig,
	Strategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.property.strategy">Strategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#strategy BedrockagentcoreHarness#strategy}. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.property.config"></a>

```go
Config BedrockagentcoreHarnessTruncationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#config BedrockagentcoreHarness#config}.

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncation.property.strategy"></a>

```go
Strategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#strategy BedrockagentcoreHarness#strategy}.

---

### BedrockagentcoreHarnessTruncationConfig <a name="BedrockagentcoreHarnessTruncationConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessTruncationConfig {
	SlidingWindow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow,
	Summarization: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.property.slidingWindow">SlidingWindow</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#sliding_window BedrockagentcoreHarness#sliding_window}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.property.summarization">Summarization</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#summarization BedrockagentcoreHarness#summarization}. |

---

##### `SlidingWindow`<sup>Optional</sup> <a name="SlidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.property.slidingWindow"></a>

```go
SlidingWindow BedrockagentcoreHarnessTruncationConfigSlidingWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#sliding_window BedrockagentcoreHarness#sliding_window}.

---

##### `Summarization`<sup>Optional</sup> <a name="Summarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig.property.summarization"></a>

```go
Summarization BedrockagentcoreHarnessTruncationConfigSummarization
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#summarization BedrockagentcoreHarness#summarization}.

---

### BedrockagentcoreHarnessTruncationConfigSlidingWindow <a name="BedrockagentcoreHarnessTruncationConfigSlidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessTruncationConfigSlidingWindow {
	MessagesCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow.property.messagesCount">MessagesCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}. |

---

##### `MessagesCount`<sup>Optional</sup> <a name="MessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow.property.messagesCount"></a>

```go
MessagesCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#messages_count BedrockagentcoreHarness#messages_count}.

---

### BedrockagentcoreHarnessTruncationConfigSummarization <a name="BedrockagentcoreHarnessTruncationConfigSummarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

&bedrockagentcoreharness.BedrockagentcoreHarnessTruncationConfigSummarization {
	PreserveRecentMessages: *f64,
	SummarizationSystemPrompt: *string,
	SummaryRatio: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.preserveRecentMessages">PreserveRecentMessages</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#preserve_recent_messages BedrockagentcoreHarness#preserve_recent_messages}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.summarizationSystemPrompt">SummarizationSystemPrompt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#summarization_system_prompt BedrockagentcoreHarness#summarization_system_prompt}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.summaryRatio">SummaryRatio</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#summary_ratio BedrockagentcoreHarness#summary_ratio}. |

---

##### `PreserveRecentMessages`<sup>Optional</sup> <a name="PreserveRecentMessages" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.preserveRecentMessages"></a>

```go
PreserveRecentMessages *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#preserve_recent_messages BedrockagentcoreHarness#preserve_recent_messages}.

---

##### `SummarizationSystemPrompt`<sup>Optional</sup> <a name="SummarizationSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.summarizationSystemPrompt"></a>

```go
SummarizationSystemPrompt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#summarization_system_prompt BedrockagentcoreHarness#summarization_system_prompt}.

---

##### `SummaryRatio`<sup>Optional</sup> <a name="SummaryRatio" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization.property.summaryRatio"></a>

```go
SummaryRatio *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_harness#summary_ratio BedrockagentcoreHarness#summary_ratio}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString">ResetMatchValueString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList">ResetMatchValueStringList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValueString` <a name="ResetMatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString"></a>

```go
func ResetMatchValueString()
```

##### `ResetMatchValueStringList` <a name="ResetMatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList"></a>

```go
func ResetMatchValueStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput">MatchValueStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput">MatchValueStringListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">MatchValueString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">MatchValueStringList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValueStringInput`<sup>Optional</sup> <a name="MatchValueStringInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput"></a>

```go
func MatchValueStringInput() *string
```

- *Type:* *string

---

##### `MatchValueStringListInput`<sup>Optional</sup> <a name="MatchValueStringListInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput"></a>

```go
func MatchValueStringListInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchValueString`<sup>Required</sup> <a name="MatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```go
func MatchValueString() *string
```

- *Type:* *string

---

##### `MatchValueStringList`<sup>Required</sup> <a name="MatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```go
func MatchValueStringList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue">PutClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator">ResetClaimMatchOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue">ResetClaimMatchValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClaimMatchValue` <a name="PutClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue"></a>

```go
func PutClaimMatchValue(value BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `ResetClaimMatchOperator` <a name="ResetClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator"></a>

```go
func ResetClaimMatchOperator()
```

##### `ResetClaimMatchValue` <a name="ResetClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue"></a>

```go
func ResetClaimMatchValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">ClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput">ClaimMatchOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput">ClaimMatchValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClaimMatchValue`<sup>Required</sup> <a name="ClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```go
func ClaimMatchValue() BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a>

---

##### `ClaimMatchOperatorInput`<sup>Optional</sup> <a name="ClaimMatchOperatorInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput"></a>

```go
func ClaimMatchOperatorInput() *string
```

- *Type:* *string

---

##### `ClaimMatchValueInput`<sup>Optional</sup> <a name="ClaimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput"></a>

```go
func ClaimMatchValueInput() interface{}
```

- *Type:* interface{}

---

##### `ClaimMatchOperator`<sup>Required</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```go
func ClaimMatchOperator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get"></a>

```go
func Get(index *f64) BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue">PutAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue">ResetAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName">ResetInboundTokenClaimName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType">ResetInboundTokenClaimValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizingClaimMatchValue` <a name="PutAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue"></a>

```go
func PutAuthorizingClaimMatchValue(value BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `ResetAuthorizingClaimMatchValue` <a name="ResetAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue"></a>

```go
func ResetAuthorizingClaimMatchValue()
```

##### `ResetInboundTokenClaimName` <a name="ResetInboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName"></a>

```go
func ResetInboundTokenClaimName()
```

##### `ResetInboundTokenClaimValueType` <a name="ResetInboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType"></a>

```go
func ResetInboundTokenClaimValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput">AuthorizingClaimMatchValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput">InboundTokenClaimNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput">InboundTokenClaimValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizingClaimMatchValue`<sup>Required</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue"></a>

```go
func AuthorizingClaimMatchValue() BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a>

---

##### `AuthorizingClaimMatchValueInput`<sup>Optional</sup> <a name="AuthorizingClaimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput"></a>

```go
func AuthorizingClaimMatchValueInput() interface{}
```

- *Type:* interface{}

---

##### `InboundTokenClaimNameInput`<sup>Optional</sup> <a name="InboundTokenClaimNameInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput"></a>

```go
func InboundTokenClaimNameInput() *string
```

- *Type:* *string

---

##### `InboundTokenClaimValueTypeInput`<sup>Optional</sup> <a name="InboundTokenClaimValueTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput"></a>

```go
func InboundTokenClaimValueTypeInput() *string
```

- *Type:* *string

---

##### `InboundTokenClaimName`<sup>Required</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName"></a>

```go
func InboundTokenClaimName() *string
```

- *Type:* *string

---

##### `InboundTokenClaimValueType`<sup>Required</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType"></a>

```go
func InboundTokenClaimValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims">PutCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">ResetAllowedAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">ResetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes">ResetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims">ResetCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl">ResetDiscoveryUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomClaims` <a name="PutCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims"></a>

```go
func PutCustomClaims(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedAudience` <a name="ResetAllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```go
func ResetAllowedAudience()
```

##### `ResetAllowedClients` <a name="ResetAllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```go
func ResetAllowedClients()
```

##### `ResetAllowedScopes` <a name="ResetAllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes"></a>

```go
func ResetAllowedScopes()
```

##### `ResetCustomClaims` <a name="ResetCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims"></a>

```go
func ResetCustomClaims()
```

##### `ResetDiscoveryUrl` <a name="ResetDiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl"></a>

```go
func ResetDiscoveryUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims">CustomClaims</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">AllowedAudienceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput">AllowedScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput">CustomClaimsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">DiscoveryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">AllowedAudience</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">AllowedClients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">AllowedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomClaims`<sup>Required</sup> <a name="CustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims"></a>

```go
func CustomClaims() BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a>

---

##### `AllowedAudienceInput`<sup>Optional</sup> <a name="AllowedAudienceInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```go
func AllowedAudienceInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```go
func AllowedClientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedScopesInput`<sup>Optional</sup> <a name="AllowedScopesInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput"></a>

```go
func AllowedScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomClaimsInput`<sup>Optional</sup> <a name="CustomClaimsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput"></a>

```go
func CustomClaimsInput() interface{}
```

- *Type:* interface{}

---

##### `DiscoveryUrlInput`<sup>Optional</sup> <a name="DiscoveryUrlInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```go
func DiscoveryUrlInput() *string
```

- *Type:* *string

---

##### `AllowedAudience`<sup>Required</sup> <a name="AllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```go
func AllowedAudience() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```go
func AllowedClients() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedScopes`<sup>Required</sup> <a name="AllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```go
func AllowedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```go
func DiscoveryUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessAuthorizerConfigurationOutputReference <a name="BedrockagentcoreHarnessAuthorizerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessAuthorizerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessAuthorizerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">PutCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">ResetCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomJwtAuthorizer` <a name="PutCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```go
func PutCustomJwtAuthorizer(value BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `ResetCustomJwtAuthorizer` <a name="ResetCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```go
func ResetCustomJwtAuthorizer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">CustomJwtAuthorizerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomJwtAuthorizer`<sup>Required</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```go
func CustomJwtAuthorizer() BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a>

---

##### `CustomJwtAuthorizerInput`<sup>Optional</sup> <a name="CustomJwtAuthorizerInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```go
func CustomJwtAuthorizerInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get"></a>

```go
func Get(index *f64) BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.putSessionStorage">PutSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resetSessionStorage">ResetSessionStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionStorage` <a name="PutSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.putSessionStorage"></a>

```go
func PutSessionStorage(value BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.putSessionStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a>

---

##### `ResetSessionStorage` <a name="ResetSessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resetSessionStorage"></a>

```go
func ResetSessionStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorage">SessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorageInput">SessionStorageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SessionStorage`<sup>Required</sup> <a name="SessionStorage" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorage"></a>

```go
func SessionStorage() BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference</a>

---

##### `SessionStorageInput`<sup>Optional</sup> <a name="SessionStorageInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorageInput"></a>

```go
func SessionStorageInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resetMountPath">ResetMountPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountPath` <a name="ResetMountPath" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resetMountPath"></a>

```go
func ResetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout">ResetIdleRuntimeSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resetMaxLifetime">ResetMaxLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleRuntimeSessionTimeout` <a name="ResetIdleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout"></a>

```go
func ResetIdleRuntimeSessionTimeout()
```

##### `ResetMaxLifetime` <a name="ResetMaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resetMaxLifetime"></a>

```go
func ResetMaxLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput">IdleRuntimeSessionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetimeInput">MaxLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout">IdleRuntimeSessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetime">MaxLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleRuntimeSessionTimeoutInput`<sup>Optional</sup> <a name="IdleRuntimeSessionTimeoutInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput"></a>

```go
func IdleRuntimeSessionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `MaxLifetimeInput`<sup>Optional</sup> <a name="MaxLifetimeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetimeInput"></a>

```go
func MaxLifetimeInput() *f64
```

- *Type:* *f64

---

##### `IdleRuntimeSessionTimeout`<sup>Required</sup> <a name="IdleRuntimeSessionTimeout" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout"></a>

```go
func IdleRuntimeSessionTimeout() *f64
```

- *Type:* *f64

---

##### `MaxLifetime`<sup>Required</sup> <a name="MaxLifetime" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetime"></a>

```go
func MaxLifetime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.putNetworkModeConfig">PutNetworkModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resetNetworkMode">ResetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resetNetworkModeConfig">ResetNetworkModeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkModeConfig` <a name="PutNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.putNetworkModeConfig"></a>

```go
func PutNetworkModeConfig(value BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.putNetworkModeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a>

---

##### `ResetNetworkMode` <a name="ResetNetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resetNetworkMode"></a>

```go
func ResetNetworkMode()
```

##### `ResetNetworkModeConfig` <a name="ResetNetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resetNetworkModeConfig"></a>

```go
func ResetNetworkModeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfig">NetworkModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfigInput">NetworkModeConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeInput">NetworkModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkMode">NetworkMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkModeConfig`<sup>Required</sup> <a name="NetworkModeConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfig"></a>

```go
func NetworkModeConfig() BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference</a>

---

##### `NetworkModeConfigInput`<sup>Optional</sup> <a name="NetworkModeConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfigInput"></a>

```go
func NetworkModeConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkModeInput`<sup>Optional</sup> <a name="NetworkModeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeInput"></a>

```go
func NetworkModeInput() *string
```

- *Type:* *string

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkMode"></a>

```go
func NetworkMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference <a name="BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putFilesystemConfigurations">PutFilesystemConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putLifecycleConfiguration">PutLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetFilesystemConfigurations">ResetFilesystemConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetLifecycleConfiguration">ResetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilesystemConfigurations` <a name="PutFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putFilesystemConfigurations"></a>

```go
func PutFilesystemConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putFilesystemConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLifecycleConfiguration` <a name="PutLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putLifecycleConfiguration"></a>

```go
func PutLifecycleConfiguration(value BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putNetworkConfiguration"></a>

```go
func PutNetworkConfiguration(value BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a>

---

##### `ResetFilesystemConfigurations` <a name="ResetFilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetFilesystemConfigurations"></a>

```go
func ResetFilesystemConfigurations()
```

##### `ResetLifecycleConfiguration` <a name="ResetLifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetLifecycleConfiguration"></a>

```go
func ResetLifecycleConfiguration()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resetNetworkConfiguration"></a>

```go
func ResetNetworkConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeArn">AgentRuntimeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeId">AgentRuntimeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeName">AgentRuntimeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurations">FilesystemConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurationsInput">FilesystemConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfigurationInput">LifecycleConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentRuntimeArn`<sup>Required</sup> <a name="AgentRuntimeArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeArn"></a>

```go
func AgentRuntimeArn() *string
```

- *Type:* *string

---

##### `AgentRuntimeId`<sup>Required</sup> <a name="AgentRuntimeId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeId"></a>

```go
func AgentRuntimeId() *string
```

- *Type:* *string

---

##### `AgentRuntimeName`<sup>Required</sup> <a name="AgentRuntimeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeName"></a>

```go
func AgentRuntimeName() *string
```

- *Type:* *string

---

##### `FilesystemConfigurations`<sup>Required</sup> <a name="FilesystemConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurations"></a>

```go
func FilesystemConfigurations() BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList</a>

---

##### `LifecycleConfiguration`<sup>Required</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfiguration"></a>

```go
func LifecycleConfiguration() BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfiguration"></a>

```go
func NetworkConfiguration() BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference</a>

---

##### `FilesystemConfigurationsInput`<sup>Optional</sup> <a name="FilesystemConfigurationsInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurationsInput"></a>

```go
func FilesystemConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `LifecycleConfigurationInput`<sup>Optional</sup> <a name="LifecycleConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfigurationInput"></a>

```go
func LifecycleConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfigurationInput"></a>

```go
func NetworkConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference <a name="BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resetContainerUri">ResetContainerUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerUri` <a name="ResetContainerUri" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resetContainerUri"></a>

```go
func ResetContainerUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUriInput">ContainerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUri">ContainerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerUriInput`<sup>Optional</sup> <a name="ContainerUriInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUriInput"></a>

```go
func ContainerUriInput() *string
```

- *Type:* *string

---

##### `ContainerUri`<sup>Required</sup> <a name="ContainerUri" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUri"></a>

```go
func ContainerUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessEnvironmentArtifactOutputReference <a name="BedrockagentcoreHarnessEnvironmentArtifactOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessEnvironmentArtifactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessEnvironmentArtifactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.putContainerConfiguration">PutContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resetContainerConfiguration">ResetContainerConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerConfiguration` <a name="PutContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.putContainerConfiguration"></a>

```go
func PutContainerConfiguration(value BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">BedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a>

---

##### `ResetContainerConfiguration` <a name="ResetContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.resetContainerConfiguration"></a>

```go
func ResetContainerConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfigurationInput">ContainerConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerConfiguration`<sup>Required</sup> <a name="ContainerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfiguration"></a>

```go
func ContainerConfiguration() BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference">BedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference</a>

---

##### `ContainerConfigurationInput`<sup>Optional</sup> <a name="ContainerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfigurationInput"></a>

```go
func ContainerConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessEnvironmentOutputReference <a name="BedrockagentcoreHarnessEnvironmentOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.putAgentCoreRuntimeEnvironment">PutAgentCoreRuntimeEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resetAgentCoreRuntimeEnvironment">ResetAgentCoreRuntimeEnvironment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentCoreRuntimeEnvironment` <a name="PutAgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.putAgentCoreRuntimeEnvironment"></a>

```go
func PutAgentCoreRuntimeEnvironment(value BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.putAgentCoreRuntimeEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a>

---

##### `ResetAgentCoreRuntimeEnvironment` <a name="ResetAgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.resetAgentCoreRuntimeEnvironment"></a>

```go
func ResetAgentCoreRuntimeEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironment">AgentCoreRuntimeEnvironment</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironmentInput">AgentCoreRuntimeEnvironmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentCoreRuntimeEnvironment`<sup>Required</sup> <a name="AgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironment"></a>

```go
func AgentCoreRuntimeEnvironment() BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference">BedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference</a>

---

##### `AgentCoreRuntimeEnvironmentInput`<sup>Optional</sup> <a name="AgentCoreRuntimeEnvironmentInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironmentInput"></a>

```go
func AgentCoreRuntimeEnvironmentInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.putRetrievalConfig">PutRetrievalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetActorId">ResetActorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetMessagesCount">ResetMessagesCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetRetrievalConfig">ResetRetrievalConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetrievalConfig` <a name="PutRetrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.putRetrievalConfig"></a>

```go
func PutRetrievalConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.putRetrievalConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActorId` <a name="ResetActorId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetActorId"></a>

```go
func ResetActorId()
```

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetArn"></a>

```go
func ResetArn()
```

##### `ResetMessagesCount` <a name="ResetMessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetMessagesCount"></a>

```go
func ResetMessagesCount()
```

##### `ResetRetrievalConfig` <a name="ResetRetrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resetRetrievalConfig"></a>

```go
func ResetRetrievalConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfig">RetrievalConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorIdInput">ActorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCountInput">MessagesCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfigInput">RetrievalConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorId">ActorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCount">MessagesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetrievalConfig`<sup>Required</sup> <a name="RetrievalConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfig"></a>

```go
func RetrievalConfig() BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap</a>

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorIdInput"></a>

```go
func ActorIdInput() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `MessagesCountInput`<sup>Optional</sup> <a name="MessagesCountInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCountInput"></a>

```go
func MessagesCountInput() *f64
```

- *Type:* *f64

---

##### `RetrievalConfigInput`<sup>Optional</sup> <a name="RetrievalConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfigInput"></a>

```go
func RetrievalConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorId"></a>

```go
func ActorId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `MessagesCount`<sup>Required</sup> <a name="MessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCount"></a>

```go
func MessagesCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get"></a>

```go
func Get(key *string) BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference <a name="BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetRelevanceScore">ResetRelevanceScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetStrategyId">ResetStrategyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetTopK">ResetTopK</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRelevanceScore` <a name="ResetRelevanceScore" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetRelevanceScore"></a>

```go
func ResetRelevanceScore()
```

##### `ResetStrategyId` <a name="ResetStrategyId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetStrategyId"></a>

```go
func ResetStrategyId()
```

##### `ResetTopK` <a name="ResetTopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resetTopK"></a>

```go
func ResetTopK()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScoreInput">RelevanceScoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyIdInput">StrategyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topKInput">TopKInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScore">RelevanceScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyId">StrategyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topK">TopK</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RelevanceScoreInput`<sup>Optional</sup> <a name="RelevanceScoreInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScoreInput"></a>

```go
func RelevanceScoreInput() *f64
```

- *Type:* *f64

---

##### `StrategyIdInput`<sup>Optional</sup> <a name="StrategyIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyIdInput"></a>

```go
func StrategyIdInput() *string
```

- *Type:* *string

---

##### `TopKInput`<sup>Optional</sup> <a name="TopKInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topKInput"></a>

```go
func TopKInput() *f64
```

- *Type:* *f64

---

##### `RelevanceScore`<sup>Required</sup> <a name="RelevanceScore" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScore"></a>

```go
func RelevanceScore() *f64
```

- *Type:* *f64

---

##### `StrategyId`<sup>Required</sup> <a name="StrategyId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyId"></a>

```go
func StrategyId() *string
```

- *Type:* *string

---

##### `TopK`<sup>Required</sup> <a name="TopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topK"></a>

```go
func TopK() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessMemoryOutputReference <a name="BedrockagentcoreHarnessMemoryOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessMemoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessMemoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.putAgentCoreMemoryConfiguration">PutAgentCoreMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resetAgentCoreMemoryConfiguration">ResetAgentCoreMemoryConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentCoreMemoryConfiguration` <a name="PutAgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.putAgentCoreMemoryConfiguration"></a>

```go
func PutAgentCoreMemoryConfiguration(value BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.putAgentCoreMemoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a>

---

##### `ResetAgentCoreMemoryConfiguration` <a name="ResetAgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.resetAgentCoreMemoryConfiguration"></a>

```go
func ResetAgentCoreMemoryConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfiguration">AgentCoreMemoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfigurationInput">AgentCoreMemoryConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentCoreMemoryConfiguration`<sup>Required</sup> <a name="AgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfiguration"></a>

```go
func AgentCoreMemoryConfiguration() BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference">BedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference</a>

---

##### `AgentCoreMemoryConfigurationInput`<sup>Optional</sup> <a name="AgentCoreMemoryConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfigurationInput"></a>

```go
func AgentCoreMemoryConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessMemoryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessModelBedrockModelConfigOutputReference <a name="BedrockagentcoreHarnessModelBedrockModelConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessModelBedrockModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessModelBedrockModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetMaxTokens">ResetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetModelId">ResetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxTokens` <a name="ResetMaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetMaxTokens"></a>

```go
func ResetMaxTokens()
```

##### `ResetModelId` <a name="ResetModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetModelId"></a>

```go
func ResetModelId()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resetTopP"></a>

```go
func ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokensInput">MaxTokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topPInput">TopPInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topP">TopP</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxTokensInput`<sup>Optional</sup> <a name="MaxTokensInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokensInput"></a>

```go
func MaxTokensInput() *f64
```

- *Type:* *f64

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topPInput"></a>

```go
func TopPInput() *f64
```

- *Type:* *f64

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokens"></a>

```go
func MaxTokens() *f64
```

- *Type:* *f64

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topP"></a>

```go
func TopP() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessModelGeminiModelConfigOutputReference <a name="BedrockagentcoreHarnessModelGeminiModelConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessModelGeminiModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessModelGeminiModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetApiKeyArn">ResetApiKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetMaxTokens">ResetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetModelId">ResetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTopK">ResetTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKeyArn` <a name="ResetApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetApiKeyArn"></a>

```go
func ResetApiKeyArn()
```

##### `ResetMaxTokens` <a name="ResetMaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetMaxTokens"></a>

```go
func ResetMaxTokens()
```

##### `ResetModelId` <a name="ResetModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetModelId"></a>

```go
func ResetModelId()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```

##### `ResetTopK` <a name="ResetTopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTopK"></a>

```go
func ResetTopK()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resetTopP"></a>

```go
func ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArnInput">ApiKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokensInput">MaxTokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topKInput">TopKInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topPInput">TopPInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArn">ApiKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topK">TopK</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topP">TopP</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyArnInput`<sup>Optional</sup> <a name="ApiKeyArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArnInput"></a>

```go
func ApiKeyArnInput() *string
```

- *Type:* *string

---

##### `MaxTokensInput`<sup>Optional</sup> <a name="MaxTokensInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokensInput"></a>

```go
func MaxTokensInput() *f64
```

- *Type:* *f64

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `TopKInput`<sup>Optional</sup> <a name="TopKInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topKInput"></a>

```go
func TopKInput() *f64
```

- *Type:* *f64

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topPInput"></a>

```go
func TopPInput() *f64
```

- *Type:* *f64

---

##### `ApiKeyArn`<sup>Required</sup> <a name="ApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArn"></a>

```go
func ApiKeyArn() *string
```

- *Type:* *string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokens"></a>

```go
func MaxTokens() *f64
```

- *Type:* *f64

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `TopK`<sup>Required</sup> <a name="TopK" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topK"></a>

```go
func TopK() *f64
```

- *Type:* *f64

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topP"></a>

```go
func TopP() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference <a name="BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetApiKeyArn">ResetApiKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetMaxTokens">ResetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetModelId">ResetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKeyArn` <a name="ResetApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetApiKeyArn"></a>

```go
func ResetApiKeyArn()
```

##### `ResetMaxTokens` <a name="ResetMaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetMaxTokens"></a>

```go
func ResetMaxTokens()
```

##### `ResetModelId` <a name="ResetModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetModelId"></a>

```go
func ResetModelId()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resetTopP"></a>

```go
func ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArnInput">ApiKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokensInput">MaxTokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topPInput">TopPInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArn">ApiKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topP">TopP</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyArnInput`<sup>Optional</sup> <a name="ApiKeyArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArnInput"></a>

```go
func ApiKeyArnInput() *string
```

- *Type:* *string

---

##### `MaxTokensInput`<sup>Optional</sup> <a name="MaxTokensInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokensInput"></a>

```go
func MaxTokensInput() *f64
```

- *Type:* *f64

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topPInput"></a>

```go
func TopPInput() *f64
```

- *Type:* *f64

---

##### `ApiKeyArn`<sup>Required</sup> <a name="ApiKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArn"></a>

```go
func ApiKeyArn() *string
```

- *Type:* *string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokens"></a>

```go
func MaxTokens() *f64
```

- *Type:* *f64

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topP"></a>

```go
func TopP() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessModelOutputReference <a name="BedrockagentcoreHarnessModelOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessModelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessModelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putBedrockModelConfig">PutBedrockModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putGeminiModelConfig">PutGeminiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putOpenAiModelConfig">PutOpenAiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetBedrockModelConfig">ResetBedrockModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetGeminiModelConfig">ResetGeminiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetOpenAiModelConfig">ResetOpenAiModelConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBedrockModelConfig` <a name="PutBedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putBedrockModelConfig"></a>

```go
func PutBedrockModelConfig(value BedrockagentcoreHarnessModelBedrockModelConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putBedrockModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfig">BedrockagentcoreHarnessModelBedrockModelConfig</a>

---

##### `PutGeminiModelConfig` <a name="PutGeminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putGeminiModelConfig"></a>

```go
func PutGeminiModelConfig(value BedrockagentcoreHarnessModelGeminiModelConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putGeminiModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfig">BedrockagentcoreHarnessModelGeminiModelConfig</a>

---

##### `PutOpenAiModelConfig` <a name="PutOpenAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putOpenAiModelConfig"></a>

```go
func PutOpenAiModelConfig(value BedrockagentcoreHarnessModelOpenAiModelConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.putOpenAiModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfig">BedrockagentcoreHarnessModelOpenAiModelConfig</a>

---

##### `ResetBedrockModelConfig` <a name="ResetBedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetBedrockModelConfig"></a>

```go
func ResetBedrockModelConfig()
```

##### `ResetGeminiModelConfig` <a name="ResetGeminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetGeminiModelConfig"></a>

```go
func ResetGeminiModelConfig()
```

##### `ResetOpenAiModelConfig` <a name="ResetOpenAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.resetOpenAiModelConfig"></a>

```go
func ResetOpenAiModelConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfig">BedrockModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference">BedrockagentcoreHarnessModelBedrockModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.geminiModelConfig">GeminiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference">BedrockagentcoreHarnessModelGeminiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.openAiModelConfig">OpenAiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference">BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfigInput">BedrockModelConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.geminiModelConfigInput">GeminiModelConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.openAiModelConfigInput">OpenAiModelConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BedrockModelConfig`<sup>Required</sup> <a name="BedrockModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfig"></a>

```go
func BedrockModelConfig() BedrockagentcoreHarnessModelBedrockModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelBedrockModelConfigOutputReference">BedrockagentcoreHarnessModelBedrockModelConfigOutputReference</a>

---

##### `GeminiModelConfig`<sup>Required</sup> <a name="GeminiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.geminiModelConfig"></a>

```go
func GeminiModelConfig() BedrockagentcoreHarnessModelGeminiModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelGeminiModelConfigOutputReference">BedrockagentcoreHarnessModelGeminiModelConfigOutputReference</a>

---

##### `OpenAiModelConfig`<sup>Required</sup> <a name="OpenAiModelConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.openAiModelConfig"></a>

```go
func OpenAiModelConfig() BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference">BedrockagentcoreHarnessModelOpenAiModelConfigOutputReference</a>

---

##### `BedrockModelConfigInput`<sup>Optional</sup> <a name="BedrockModelConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfigInput"></a>

```go
func BedrockModelConfigInput() interface{}
```

- *Type:* interface{}

---

##### `GeminiModelConfigInput`<sup>Optional</sup> <a name="GeminiModelConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.geminiModelConfigInput"></a>

```go
func GeminiModelConfigInput() interface{}
```

- *Type:* interface{}

---

##### `OpenAiModelConfigInput`<sup>Optional</sup> <a name="OpenAiModelConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.openAiModelConfigInput"></a>

```go
func OpenAiModelConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessModelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessSkillsList <a name="BedrockagentcoreHarnessSkillsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessSkillsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreHarnessSkillsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.get"></a>

```go
func Get(index *f64) BedrockagentcoreHarnessSkillsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessSkillsOutputReference <a name="BedrockagentcoreHarnessSkillsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessSkillsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreHarnessSkillsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSkillsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessSystemPromptList <a name="BedrockagentcoreHarnessSystemPromptList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessSystemPromptList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreHarnessSystemPromptList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.get"></a>

```go
func Get(index *f64) BedrockagentcoreHarnessSystemPromptOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessSystemPromptOutputReference <a name="BedrockagentcoreHarnessSystemPromptOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessSystemPromptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreHarnessSystemPromptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessSystemPromptOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessTagsList <a name="BedrockagentcoreHarnessTagsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreHarnessTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.get"></a>

```go
func Get(index *f64) BedrockagentcoreHarnessTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessTagsOutputReference <a name="BedrockagentcoreHarnessTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreHarnessTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resetBrowserArn">ResetBrowserArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBrowserArn` <a name="ResetBrowserArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resetBrowserArn"></a>

```go
func ResetBrowserArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArnInput">BrowserArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArn">BrowserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BrowserArnInput`<sup>Optional</sup> <a name="BrowserArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArnInput"></a>

```go
func BrowserArnInput() *string
```

- *Type:* *string

---

##### `BrowserArn`<sup>Required</sup> <a name="BrowserArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArn"></a>

```go
func BrowserArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resetCodeInterpreterArn">ResetCodeInterpreterArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCodeInterpreterArn` <a name="ResetCodeInterpreterArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resetCodeInterpreterArn"></a>

```go
func ResetCodeInterpreterArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArnInput">CodeInterpreterArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArn">CodeInterpreterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInterpreterArnInput`<sup>Optional</sup> <a name="CodeInterpreterArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArnInput"></a>

```go
func CodeInterpreterArnInput() *string
```

- *Type:* *string

---

##### `CodeInterpreterArn`<sup>Required</sup> <a name="CodeInterpreterArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArn"></a>

```go
func CodeInterpreterArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetCustomParameters">ResetCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetDefaultReturnUrl">ResetDefaultReturnUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetGrantType">ResetGrantType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetProviderArn">ResetProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomParameters` <a name="ResetCustomParameters" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetCustomParameters"></a>

```go
func ResetCustomParameters()
```

##### `ResetDefaultReturnUrl` <a name="ResetDefaultReturnUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetDefaultReturnUrl"></a>

```go
func ResetDefaultReturnUrl()
```

##### `ResetGrantType` <a name="ResetGrantType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetGrantType"></a>

```go
func ResetGrantType()
```

##### `ResetProviderArn` <a name="ResetProviderArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetProviderArn"></a>

```go
func ResetProviderArn()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resetScopes"></a>

```go
func ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParametersInput">CustomParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrlInput">DefaultReturnUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantTypeInput">GrantTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArnInput">ProviderArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParameters">CustomParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrl">DefaultReturnUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantType">GrantType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArn">ProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomParametersInput`<sup>Optional</sup> <a name="CustomParametersInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParametersInput"></a>

```go
func CustomParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultReturnUrlInput`<sup>Optional</sup> <a name="DefaultReturnUrlInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrlInput"></a>

```go
func DefaultReturnUrlInput() *string
```

- *Type:* *string

---

##### `GrantTypeInput`<sup>Optional</sup> <a name="GrantTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantTypeInput"></a>

```go
func GrantTypeInput() *string
```

- *Type:* *string

---

##### `ProviderArnInput`<sup>Optional</sup> <a name="ProviderArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArnInput"></a>

```go
func ProviderArnInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomParameters`<sup>Required</sup> <a name="CustomParameters" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParameters"></a>

```go
func CustomParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultReturnUrl`<sup>Required</sup> <a name="DefaultReturnUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrl"></a>

```go
func DefaultReturnUrl() *string
```

- *Type:* *string

---

##### `GrantType`<sup>Required</sup> <a name="GrantType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantType"></a>

```go
func GrantType() *string
```

- *Type:* *string

---

##### `ProviderArn`<sup>Required</sup> <a name="ProviderArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArn"></a>

```go
func ProviderArn() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.putOauth">PutOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetAwsIam">ResetAwsIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetNone">ResetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetOauth">ResetOauth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauth` <a name="PutOauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.putOauth"></a>

```go
func PutOauth(value BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.putOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a>

---

##### `ResetAwsIam` <a name="ResetAwsIam" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetAwsIam"></a>

```go
func ResetAwsIam()
```

##### `ResetNone` <a name="ResetNone" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetNone"></a>

```go
func ResetNone()
```

##### `ResetOauth` <a name="ResetOauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resetOauth"></a>

```go
func ResetOauth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauth">Oauth</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIamInput">AwsIamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.noneInput">NoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauthInput">OauthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIam">AwsIam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.none">None</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Oauth`<sup>Required</sup> <a name="Oauth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauth"></a>

```go
func Oauth() BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference</a>

---

##### `AwsIamInput`<sup>Optional</sup> <a name="AwsIamInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIamInput"></a>

```go
func AwsIamInput() *string
```

- *Type:* *string

---

##### `NoneInput`<sup>Optional</sup> <a name="NoneInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.noneInput"></a>

```go
func NoneInput() *string
```

- *Type:* *string

---

##### `OauthInput`<sup>Optional</sup> <a name="OauthInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauthInput"></a>

```go
func OauthInput() interface{}
```

- *Type:* interface{}

---

##### `AwsIam`<sup>Required</sup> <a name="AwsIam" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIam"></a>

```go
func AwsIam() *string
```

- *Type:* *string

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.none"></a>

```go
func None() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference <a name="BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.putOutboundAuth">PutOutboundAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resetGatewayArn">ResetGatewayArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resetOutboundAuth">ResetOutboundAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutboundAuth` <a name="PutOutboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.putOutboundAuth"></a>

```go
func PutOutboundAuth(value BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.putOutboundAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a>

---

##### `ResetGatewayArn` <a name="ResetGatewayArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resetGatewayArn"></a>

```go
func ResetGatewayArn()
```

##### `ResetOutboundAuth` <a name="ResetOutboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resetOutboundAuth"></a>

```go
func ResetOutboundAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuth">OutboundAuth</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArnInput">GatewayArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuthInput">OutboundAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutboundAuth`<sup>Required</sup> <a name="OutboundAuth" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuth"></a>

```go
func OutboundAuth() BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference</a>

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArnInput"></a>

```go
func GatewayArnInput() *string
```

- *Type:* *string

---

##### `OutboundAuthInput`<sup>Optional</sup> <a name="OutboundAuthInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuthInput"></a>

```go
func OutboundAuthInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArn"></a>

```go
func GatewayArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference <a name="BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resetInputSchema">ResetInputSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInputSchema` <a name="ResetInputSchema" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resetInputSchema"></a>

```go
func ResetInputSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchemaInput">InputSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchema">InputSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InputSchemaInput`<sup>Optional</sup> <a name="InputSchemaInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchemaInput"></a>

```go
func InputSchemaInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchema"></a>

```go
func InputSchema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessToolsConfigOutputReference <a name="BedrockagentcoreHarnessToolsConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessToolsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessToolsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreBrowser">PutAgentCoreBrowser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreCodeInterpreter">PutAgentCoreCodeInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreGateway">PutAgentCoreGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putInlineFunction">PutInlineFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putRemoteMcp">PutRemoteMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreBrowser">ResetAgentCoreBrowser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreCodeInterpreter">ResetAgentCoreCodeInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreGateway">ResetAgentCoreGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetInlineFunction">ResetInlineFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetRemoteMcp">ResetRemoteMcp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentCoreBrowser` <a name="PutAgentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreBrowser"></a>

```go
func PutAgentCoreBrowser(value BedrockagentcoreHarnessToolsConfigAgentCoreBrowser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreBrowser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowser">BedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a>

---

##### `PutAgentCoreCodeInterpreter` <a name="PutAgentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreCodeInterpreter"></a>

```go
func PutAgentCoreCodeInterpreter(value BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreCodeInterpreter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a>

---

##### `PutAgentCoreGateway` <a name="PutAgentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreGateway"></a>

```go
func PutAgentCoreGateway(value BedrockagentcoreHarnessToolsConfigAgentCoreGateway)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putAgentCoreGateway.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGateway">BedrockagentcoreHarnessToolsConfigAgentCoreGateway</a>

---

##### `PutInlineFunction` <a name="PutInlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putInlineFunction"></a>

```go
func PutInlineFunction(value BedrockagentcoreHarnessToolsConfigInlineFunction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putInlineFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunction">BedrockagentcoreHarnessToolsConfigInlineFunction</a>

---

##### `PutRemoteMcp` <a name="PutRemoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putRemoteMcp"></a>

```go
func PutRemoteMcp(value BedrockagentcoreHarnessToolsConfigRemoteMcp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.putRemoteMcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcp">BedrockagentcoreHarnessToolsConfigRemoteMcp</a>

---

##### `ResetAgentCoreBrowser` <a name="ResetAgentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreBrowser"></a>

```go
func ResetAgentCoreBrowser()
```

##### `ResetAgentCoreCodeInterpreter` <a name="ResetAgentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreCodeInterpreter"></a>

```go
func ResetAgentCoreCodeInterpreter()
```

##### `ResetAgentCoreGateway` <a name="ResetAgentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetAgentCoreGateway"></a>

```go
func ResetAgentCoreGateway()
```

##### `ResetInlineFunction` <a name="ResetInlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetInlineFunction"></a>

```go
func ResetInlineFunction()
```

##### `ResetRemoteMcp` <a name="ResetRemoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.resetRemoteMcp"></a>

```go
func ResetRemoteMcp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowser">AgentCoreBrowser</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreter">AgentCoreCodeInterpreter</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGateway">AgentCoreGateway</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunction">InlineFunction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference">BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcp">RemoteMcp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference">BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowserInput">AgentCoreBrowserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreterInput">AgentCoreCodeInterpreterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGatewayInput">AgentCoreGatewayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunctionInput">InlineFunctionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcpInput">RemoteMcpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentCoreBrowser`<sup>Required</sup> <a name="AgentCoreBrowser" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowser"></a>

```go
func AgentCoreBrowser() BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference</a>

---

##### `AgentCoreCodeInterpreter`<sup>Required</sup> <a name="AgentCoreCodeInterpreter" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreter"></a>

```go
func AgentCoreCodeInterpreter() BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference</a>

---

##### `AgentCoreGateway`<sup>Required</sup> <a name="AgentCoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGateway"></a>

```go
func AgentCoreGateway() BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference">BedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference</a>

---

##### `InlineFunction`<sup>Required</sup> <a name="InlineFunction" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunction"></a>

```go
func InlineFunction() BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference">BedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference</a>

---

##### `RemoteMcp`<sup>Required</sup> <a name="RemoteMcp" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcp"></a>

```go
func RemoteMcp() BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference">BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference</a>

---

##### `AgentCoreBrowserInput`<sup>Optional</sup> <a name="AgentCoreBrowserInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowserInput"></a>

```go
func AgentCoreBrowserInput() interface{}
```

- *Type:* interface{}

---

##### `AgentCoreCodeInterpreterInput`<sup>Optional</sup> <a name="AgentCoreCodeInterpreterInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreterInput"></a>

```go
func AgentCoreCodeInterpreterInput() interface{}
```

- *Type:* interface{}

---

##### `AgentCoreGatewayInput`<sup>Optional</sup> <a name="AgentCoreGatewayInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGatewayInput"></a>

```go
func AgentCoreGatewayInput() interface{}
```

- *Type:* interface{}

---

##### `InlineFunctionInput`<sup>Optional</sup> <a name="InlineFunctionInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunctionInput"></a>

```go
func InlineFunctionInput() interface{}
```

- *Type:* interface{}

---

##### `RemoteMcpInput`<sup>Optional</sup> <a name="RemoteMcpInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcpInput"></a>

```go
func RemoteMcpInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference <a name="BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessToolsList <a name="BedrockagentcoreHarnessToolsList" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessToolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreHarnessToolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.get"></a>

```go
func Get(index *f64) BedrockagentcoreHarnessToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessToolsOutputReference <a name="BedrockagentcoreHarnessToolsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessToolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreHarnessToolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.putConfig"></a>

```go
func PutConfig(value BedrockagentcoreHarnessToolsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfig">BedrockagentcoreHarnessToolsConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference">BedrockagentcoreHarnessToolsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.config"></a>

```go
func Config() BedrockagentcoreHarnessToolsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsConfigOutputReference">BedrockagentcoreHarnessToolsConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessToolsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessTruncationConfigOutputReference <a name="BedrockagentcoreHarnessTruncationConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessTruncationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessTruncationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSlidingWindow">PutSlidingWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSummarization">PutSummarization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resetSlidingWindow">ResetSlidingWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resetSummarization">ResetSummarization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSlidingWindow` <a name="PutSlidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSlidingWindow"></a>

```go
func PutSlidingWindow(value BedrockagentcoreHarnessTruncationConfigSlidingWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSlidingWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindow">BedrockagentcoreHarnessTruncationConfigSlidingWindow</a>

---

##### `PutSummarization` <a name="PutSummarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSummarization"></a>

```go
func PutSummarization(value BedrockagentcoreHarnessTruncationConfigSummarization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.putSummarization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarization">BedrockagentcoreHarnessTruncationConfigSummarization</a>

---

##### `ResetSlidingWindow` <a name="ResetSlidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resetSlidingWindow"></a>

```go
func ResetSlidingWindow()
```

##### `ResetSummarization` <a name="ResetSummarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.resetSummarization"></a>

```go
func ResetSummarization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindow">SlidingWindow</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference">BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.summarization">Summarization</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference">BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindowInput">SlidingWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.summarizationInput">SummarizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SlidingWindow`<sup>Required</sup> <a name="SlidingWindow" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindow"></a>

```go
func SlidingWindow() BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference">BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference</a>

---

##### `Summarization`<sup>Required</sup> <a name="Summarization" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.summarization"></a>

```go
func Summarization() BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference">BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference</a>

---

##### `SlidingWindowInput`<sup>Optional</sup> <a name="SlidingWindowInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindowInput"></a>

```go
func SlidingWindowInput() interface{}
```

- *Type:* interface{}

---

##### `SummarizationInput`<sup>Optional</sup> <a name="SummarizationInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.summarizationInput"></a>

```go
func SummarizationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference <a name="BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resetMessagesCount">ResetMessagesCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessagesCount` <a name="ResetMessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resetMessagesCount"></a>

```go
func ResetMessagesCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCountInput">MessagesCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCount">MessagesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessagesCountInput`<sup>Optional</sup> <a name="MessagesCountInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCountInput"></a>

```go
func MessagesCountInput() *f64
```

- *Type:* *f64

---

##### `MessagesCount`<sup>Required</sup> <a name="MessagesCount" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCount"></a>

```go
func MessagesCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference <a name="BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetPreserveRecentMessages">ResetPreserveRecentMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetSummarizationSystemPrompt">ResetSummarizationSystemPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetSummaryRatio">ResetSummaryRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreserveRecentMessages` <a name="ResetPreserveRecentMessages" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetPreserveRecentMessages"></a>

```go
func ResetPreserveRecentMessages()
```

##### `ResetSummarizationSystemPrompt` <a name="ResetSummarizationSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetSummarizationSystemPrompt"></a>

```go
func ResetSummarizationSystemPrompt()
```

##### `ResetSummaryRatio` <a name="ResetSummaryRatio" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resetSummaryRatio"></a>

```go
func ResetSummaryRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessagesInput">PreserveRecentMessagesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPromptInput">SummarizationSystemPromptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatioInput">SummaryRatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessages">PreserveRecentMessages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPrompt">SummarizationSystemPrompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatio">SummaryRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreserveRecentMessagesInput`<sup>Optional</sup> <a name="PreserveRecentMessagesInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessagesInput"></a>

```go
func PreserveRecentMessagesInput() *f64
```

- *Type:* *f64

---

##### `SummarizationSystemPromptInput`<sup>Optional</sup> <a name="SummarizationSystemPromptInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPromptInput"></a>

```go
func SummarizationSystemPromptInput() *string
```

- *Type:* *string

---

##### `SummaryRatioInput`<sup>Optional</sup> <a name="SummaryRatioInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatioInput"></a>

```go
func SummaryRatioInput() *f64
```

- *Type:* *f64

---

##### `PreserveRecentMessages`<sup>Required</sup> <a name="PreserveRecentMessages" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessages"></a>

```go
func PreserveRecentMessages() *f64
```

- *Type:* *f64

---

##### `SummarizationSystemPrompt`<sup>Required</sup> <a name="SummarizationSystemPrompt" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPrompt"></a>

```go
func SummarizationSystemPrompt() *string
```

- *Type:* *string

---

##### `SummaryRatio`<sup>Required</sup> <a name="SummaryRatio" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatio"></a>

```go
func SummaryRatio() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreHarnessTruncationOutputReference <a name="BedrockagentcoreHarnessTruncationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreharness"

bedrockagentcoreharness.NewBedrockagentcoreHarnessTruncationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreHarnessTruncationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resetStrategy">ResetStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.putConfig"></a>

```go
func PutConfig(value BedrockagentcoreHarnessTruncationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfig">BedrockagentcoreHarnessTruncationConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.resetStrategy"></a>

```go
func ResetStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference">BedrockagentcoreHarnessTruncationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.strategyInput">StrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.strategy">Strategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.config"></a>

```go
func Config() BedrockagentcoreHarnessTruncationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationConfigOutputReference">BedrockagentcoreHarnessTruncationConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.strategyInput"></a>

```go
func StrategyInput() *string
```

- *Type:* *string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.strategy"></a>

```go
func Strategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreHarness.BedrockagentcoreHarnessTruncationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



