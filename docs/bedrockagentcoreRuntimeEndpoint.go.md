# `bedrockagentcoreRuntimeEndpoint` Submodule <a name="`bedrockagentcoreRuntimeEndpoint` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreRuntimeEndpoint <a name="BedrockagentcoreRuntimeEndpoint" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_runtime_endpoint awscc_bedrockagentcore_runtime_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreruntimeendpoint"

bedrockagentcoreruntimeendpoint.NewBedrockagentcoreRuntimeEndpoint(scope Construct, id *string, config BedrockagentcoreRuntimeEndpointConfig) BedrockagentcoreRuntimeEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig">BedrockagentcoreRuntimeEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig">BedrockagentcoreRuntimeEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetAgentRuntimeVersion">ResetAgentRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAgentRuntimeVersion` <a name="ResetAgentRuntimeVersion" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetAgentRuntimeVersion"></a>

```go
func ResetAgentRuntimeVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreRuntimeEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreruntimeendpoint"

bedrockagentcoreruntimeendpoint.BedrockagentcoreRuntimeEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreruntimeendpoint"

bedrockagentcoreruntimeendpoint.BedrockagentcoreRuntimeEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreruntimeendpoint"

bedrockagentcoreruntimeendpoint.BedrockagentcoreRuntimeEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreruntimeendpoint"

bedrockagentcoreruntimeendpoint.BedrockagentcoreRuntimeEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockagentcoreRuntimeEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentcoreRuntimeEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentcoreRuntimeEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_runtime_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreRuntimeEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeArn">AgentRuntimeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeEndpointArn">AgentRuntimeEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.failureReason">FailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.liveVersion">LiveVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.runtimeEndpointId">RuntimeEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.targetVersion">TargetVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeIdInput">AgentRuntimeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeVersionInput">AgentRuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeId">AgentRuntimeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeVersion">AgentRuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentRuntimeArn`<sup>Required</sup> <a name="AgentRuntimeArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeArn"></a>

```go
func AgentRuntimeArn() *string
```

- *Type:* *string

---

##### `AgentRuntimeEndpointArn`<sup>Required</sup> <a name="AgentRuntimeEndpointArn" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeEndpointArn"></a>

```go
func AgentRuntimeEndpointArn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.failureReason"></a>

```go
func FailureReason() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `LiveVersion`<sup>Required</sup> <a name="LiveVersion" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.liveVersion"></a>

```go
func LiveVersion() *string
```

- *Type:* *string

---

##### `RuntimeEndpointId`<sup>Required</sup> <a name="RuntimeEndpointId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.runtimeEndpointId"></a>

```go
func RuntimeEndpointId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.targetVersion"></a>

```go
func TargetVersion() *string
```

- *Type:* *string

---

##### `AgentRuntimeIdInput`<sup>Optional</sup> <a name="AgentRuntimeIdInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeIdInput"></a>

```go
func AgentRuntimeIdInput() *string
```

- *Type:* *string

---

##### `AgentRuntimeVersionInput`<sup>Optional</sup> <a name="AgentRuntimeVersionInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeVersionInput"></a>

```go
func AgentRuntimeVersionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AgentRuntimeId`<sup>Required</sup> <a name="AgentRuntimeId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeId"></a>

```go
func AgentRuntimeId() *string
```

- *Type:* *string

---

##### `AgentRuntimeVersion`<sup>Required</sup> <a name="AgentRuntimeVersion" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.agentRuntimeVersion"></a>

```go
func AgentRuntimeVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreRuntimeEndpointConfig <a name="BedrockagentcoreRuntimeEndpointConfig" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreruntimeendpoint"

&bedrockagentcoreruntimeendpoint.BedrockagentcoreRuntimeEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AgentRuntimeId: *string,
	Name: *string,
	AgentRuntimeVersion: *string,
	Description: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.agentRuntimeId">AgentRuntimeId</a></code> | <code>*string</code> | The ID of the parent Agent Runtime (required for creation). |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Agent Runtime Endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.agentRuntimeVersion">AgentRuntimeVersion</a></code> | <code>*string</code> | The version of the AgentCore Runtime to use for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.description">Description</a></code> | <code>*string</code> | The description of the AgentCore Runtime endpoint. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A map of tag keys and values. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentRuntimeId`<sup>Required</sup> <a name="AgentRuntimeId" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.agentRuntimeId"></a>

```go
AgentRuntimeId *string
```

- *Type:* *string

The ID of the parent Agent Runtime (required for creation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_runtime_endpoint#agent_runtime_id BedrockagentcoreRuntimeEndpoint#agent_runtime_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Agent Runtime Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_runtime_endpoint#name BedrockagentcoreRuntimeEndpoint#name}

---

##### `AgentRuntimeVersion`<sup>Optional</sup> <a name="AgentRuntimeVersion" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.agentRuntimeVersion"></a>

```go
AgentRuntimeVersion *string
```

- *Type:* *string

The version of the AgentCore Runtime to use for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_runtime_endpoint#agent_runtime_version BedrockagentcoreRuntimeEndpoint#agent_runtime_version}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the AgentCore Runtime endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_runtime_endpoint#description BedrockagentcoreRuntimeEndpoint#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreRuntimeEndpoint.BedrockagentcoreRuntimeEndpointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_runtime_endpoint#tags BedrockagentcoreRuntimeEndpoint#tags}

---



